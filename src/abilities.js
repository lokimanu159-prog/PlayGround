/**
 * Executes the three class powers. Kept separate from the combat loop so each
 * ability reads like a short, inspectable spell definition.
 */
export function performAbility(adv, a) {
  const p = adv.player;
  const pos = p.mesh.position;
  const color = adv.cls.color;
  const target = adv.nearestEnemy(26);

  const damageTargets = (radius, mult, opts = {}) => {
    const list = adv.enemiesInRadius(pos, radius);
    for (const e of list) adv.hitEnemy(e, adv.abilityDamage(mult), opts);
    return list.length;
  };

  switch (a.kind) {
    case 'cone': {
      if (target) adv.faceToward(target.mesh.position);
      const hit = adv.enemiesInCone(a.radius || 4, a.arc || 2.2);
      for (const e of hit) adv.hitEnemy(e, adv.abilityDamage(a.damage || 1.5), { burn: a.burn, stun: a.stun });
      adv.fx.slash(pos, p.facing, a.radius || 4, a.arc || 2.2, a.burn ? '#ff8a3a' : color);
      adv.fx.ring(pos, (a.radius || 4) * 0.55, a.burn ? '#ff8a3a' : color, 0.5, 0.3);
      adv.audio.play(a.burn ? 'fire' : adv.cls.weaponType === 'whip' ? 'whip' : 'attack');
      adv.shake = Math.max(adv.shake, 0.22);
      break;
    }

    case 'buff': {
      if (a.heal) {
        const heal = p.stats.maxHp * a.heal;
        p.hp = Math.min(p.stats.maxHp, p.hp + heal);
        adv.damageNumber(pos, `+${Math.round(heal)}`, 'heal', 2.2);
      }
      adv.addBuff({
        name: a.name,
        icon: a.icon,
        time: a.duration || 5,
        damageReduction: a.damageReduction || 0,
        speed: a.speed || 0,
        crit: a.crit || 0,
      });
      adv.fx.ring(pos, 2.3, color, 0.75, 0.25);
      adv.fx.burst({ x: pos.x, y: 1.2, z: pos.z }, color, 8, 1.3, 0.7);
      adv.audio.play('cast');
      break;
    }

    case 'spin': {
      const hits = a.hits || 3;
      const interval = a.interval || 0.25;
      for (let i = 0; i < hits; i++) {
        adv.delayed.push({
          time: i * interval,
          fn: () => {
            if (adv.finished) return;
            damageTargets(a.radius || 4, a.damage || 1, { burn: a.burn });
            adv.fx.slash(adv.player.mesh.position, adv.player.facing + i * 0.7, a.radius || 4, Math.PI * 1.85, color);
            adv.fx.ring(adv.player.mesh.position, (a.radius || 4) * 0.7, color, 0.3, 0.4);
            adv.audio.play(adv.cls.weaponType === 'whip' ? 'whip' : 'attack');
            adv.shake = Math.max(adv.shake, 0.16);
          },
        });
      }
      break;
    }

    case 'nova': {
      damageTargets(a.radius || 4, a.damage || 1.5, { burn: a.burn });
      adv.fx.ring(pos, a.radius || 4, '#ff7a3a', 0.75, 0.15);
      adv.fx.impact({ x: pos.x, y: 0.8, z: pos.z }, '#ff9a4a', 3.1, 0.6);
      adv.fx.burst({ x: pos.x, y: 1, z: pos.z }, '#ff9a4a', 14, 2.2, 0.7);
      adv.shake = Math.max(adv.shake, 0.45);
      adv.audio.play('fire');
      break;
    }

    case 'meteor': {
      let spot = target ? { x: target.mesh.position.x, z: target.mesh.position.z } : null;
      if (!spot) {
        const dir = adv.facingDir();
        spot = { x: pos.x + dir.x * 4.5, z: pos.z + dir.z * 4.5 };
      }
      const radius = a.radius || 3.6;
      adv.fx.ring(spot, radius, '#ffb066', a.delay || 1, 0.05);
      adv.fx.ring(spot, radius * 0.55, '#ff7a3a', a.delay || 1, 0.1);
      adv.audio.play('cast');
      adv.delayed.push({
        time: a.delay || 1,
        fn: () => {
          if (adv.finished) return;
          const list = adv.enemiesInRadius(spot, radius);
          for (const e of list) adv.hitEnemy(e, adv.abilityDamage(a.damage || 3.2), { burn: a.burn });
          adv.fx.impact({ x: spot.x, y: 0.5, z: spot.z }, '#ff8a3a', 4.4, 0.8);
          adv.fx.shockwave(spot, '#ffb066', 4.2, 0.8);
          adv.fx.burst({ x: spot.x, y: 1, z: spot.z }, '#ffd36a', 18, 2.8, 0.9);
          adv.shake = Math.max(adv.shake, 0.75);
          adv.audio.play('fire');
        },
      });
      break;
    }

    case 'dash': {
      if (target) adv.faceToward(target.mesh.position);
      const dir = adv.facingDir();
      const start = { x: pos.x, z: pos.z };
      const distance = a.distance || 6.5;
      const steps = 10;
      for (let i = 0; i < steps; i++) {
        pos.x += (dir.x * distance) / steps;
        pos.z += (dir.z * distance) / steps;
        adv.collidePlayer?.();
      }
      const end = { x: pos.x, z: pos.z };
      for (const e of adv.enemies) {
        if (!e.alive) continue;
        if (segmentDistance(e.mesh.position.x, e.mesh.position.z, start.x, start.z, end.x, end.z) <= (a.radius || 1.5) + e.radius) {
          adv.hitEnemy(e, adv.abilityDamage(a.damage || 1.8), {});
        }
      }
      p.invuln = 0.45;
      adv.fx.ring(start, 1.1, color, 0.4, 0.4);
      adv.fx.ring(end, 1.4, color, 0.45, 0.4);
      adv.fx.burst({ x: end.x, y: 1, z: end.z }, color, 8, 1, 0.5);
      adv.audio.play('dodge');
      adv.shake = Math.max(adv.shake, 0.2);
      break;
    }

    case 'fan': {
      if (target) adv.faceToward(target.mesh.position);
      const count = a.count || 5;
      const spread = a.spread || 0.9;
      for (let i = 0; i < count; i++) {
        const offset = (i - (count - 1) / 2) * (spread / Math.max(1, count - 1));
        const angle = p.facing + offset;
        adv.spawnPlayerProjectile({
          dir: { x: Math.sin(angle), z: Math.cos(angle) },
          speed: a.speed || 17,
          damage: adv.abilityDamage(a.damage || 0.95),
          radius: 0.32,
          pierce: 1,
          life: 1.8,
          color,
        });
      }
      adv.fx.ring(pos, 1.2, color, 0.35, 0.4);
      adv.audio.play('arrow');
      break;
    }

    case 'pierce': {
      if (target) adv.faceToward(target.mesh.position);
      adv.spawnPlayerProjectile({
        dir: adv.facingDir(),
        speed: a.speed || 24,
        damage: adv.abilityDamage(a.damage || 2.5),
        radius: 0.38,
        pierce: a.pierce || 5,
        life: 2.2,
        color: '#b9ff7a',
      });
      adv.audio.play('arrow');
      break;
    }

    case 'summon': {
      adv.spawnWolf(a);
      break;
    }

    case 'rain': {
      let spot = target ? { x: target.mesh.position.x, z: target.mesh.position.z } : null;
      if (!spot) {
        const dir = adv.facingDir();
        spot = { x: pos.x + dir.x * 4.5, z: pos.z + dir.z * 4.5 };
      }
      const radius = a.radius || 3.8;
      adv.areas.push({
        x: spot.x,
        z: spot.z,
        radius,
        remaining: a.duration || 2.4,
        duration: a.duration || 2.4,
        interval: a.interval || 0.55,
        tick: 0.1,
        damage: adv.abilityDamage(a.damage || 1.1),
        color: '#b9ff7a',
        burn: 0,
        sound: 'arrow',
      });
      adv.fx.ring(spot, radius, '#b9ff7a', a.duration || 2.4, 0.75);
      adv.audio.play('cast');
      break;
    }

    case 'vortex': {
      for (const e of adv.enemiesInRadius(pos, a.radius || 4.6)) {
        const dx = pos.x - e.mesh.position.x;
        const dz = pos.z - e.mesh.position.z;
        const d = Math.hypot(dx, dz) || 1;
        const pull = Math.min(d - 0.8, 1.6);
        if (pull > 0) {
          e.mesh.position.x += (dx / d) * pull;
          e.mesh.position.z += (dz / d) * pull;
        }
        e.slow = Math.max(e.slow || 0, 1.4);
      }
      const hits = a.hits || 2;
      const interval = a.interval || 0.35;
      for (let i = 0; i < hits; i++) {
        adv.delayed.push({
          time: i * interval,
          fn: () => {
            if (adv.finished) return;
            damageTargets(a.radius || 4.6, a.damage || 1.35);
            adv.fx.slash(adv.player.mesh.position, adv.player.facing + i * Math.PI, a.radius || 4.6, Math.PI * 1.9, color);
            adv.fx.ring(adv.player.mesh.position, (a.radius || 4.6) * 0.6, color, 0.35, 0.3);
            adv.audio.play('whip');
            adv.shake = Math.max(adv.shake, 0.18);
          },
        });
      }
      break;
    }

    case 'projectile': {
      if (target) adv.faceToward(target.mesh.position);
      adv.spawnPlayerProjectile({
        dir: adv.facingDir(),
        speed: a.speed || 16,
        damage: adv.abilityDamage(a.damage || 2),
        radius: 0.5,
        pierce: 1,
        explodeRadius: a.explodeRadius || 2.2,
        burn: a.burn || 0,
        life: 2.4,
        color: '#ff8a3a',
      });
      adv.audio.play('fire');
      break;
    }

    default: {
      damageTargets(a.radius || 4, a.damage || 1.2);
      adv.fx.ring(pos, a.radius || 4, color, 0.5, 0.2);
      adv.audio.play('cast');
    }
  }
}

function segmentDistance(px, pz, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const len = dx * dx + dz * dz;
  if (len < 0.0001) return Math.hypot(px - ax, pz - az);
  let t = ((px - ax) * dx + (pz - az) * dz) / len;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}
