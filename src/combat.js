import * as THREE from 'three';
import { CLASS_BY_ID, ENEMIES, MAP_BY_ID } from './data.js';
import {
  animateDog,
  animateEnemy,
  animateHero,
  createEnemy,
  createGoldOrb,
  createHealthOrb,
  createManaOrb,
  createSpiritWolf,
} from './models.js';
import { grantXp, saveProfile, xpProgress } from './profile.js';
import { performAbility } from './abilities.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);
const TMP = new THREE.Vector3();

function collide(pos, obstacles, radius, bounds) {
  const limit = bounds - radius;
  pos.x = clamp(pos.x, -limit, limit);
  pos.z = clamp(pos.z, -limit, limit);
  for (const o of obstacles) {
    const dx = pos.x - o.x;
    const dz = pos.z - o.z;
    const min = (o.r || 0) + radius;
    const d = Math.hypot(dx, dz);
    if (d < min && d > 0.0001) {
      const push = (min - d) / d;
      pos.x += dx * push;
      pos.z += dz * push;
    }
  }
  pos.x = clamp(pos.x, -limit, limit);
  pos.z = clamp(pos.z, -limit, limit);
}

function distanceToSegment(px, pz, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const len = dx * dx + dz * dz;
  if (len < 0.0001) return Math.hypot(px - ax, pz - az);
  let t = ((px - ax) * dx + (pz - az) * dz) / len;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}

export class Adventure {
  constructor({ world, player, profile, ui, audio, input, camera, fx, onExit, onPlayerHit, onFinished }) {
    this.world = world;
    this.map = world.map || MAP_BY_ID[world.map?.id] || MAP_BY_ID.crypt;
    this.player = player;
    this.profile = profile;
    this.ui = ui;
    this.audio = audio;
    this.input = input;
    this.camera = camera;
    this.fx = fx;
    this.onExit = onExit;
    this.onPlayerHit = onPlayerHit;
    this.onFinished = onFinished;

    this.cls = CLASS_BY_ID[player.classId];
    this.weapon = player.stats.weapon;
    this.enemies = [];
    this.projectiles = [];
    this.pickups = [];
    this.areas = [];
    this.delayed = [];
    this.wolf = null;
    this.enemySeq = 0;
    this.waveIndex = -1;
    this.waveActive = false;
    this.nextWaveTimer = 1.5;
    this.loot = { gold: 0, xp: 0 };
    this.kills = 0;
    this.finished = false;
    this.lootGranted = false;
    this.shake = 0;
    this.attackQueued = false;
    this.time = 0;
    this.uiTimer = 0;
    this.buffTimer = 0;
    this.boss = null;

    this.projGeo = new THREE.SphereGeometry(0.15, 8, 6);
    this.projLightMat = new THREE.MeshBasicMaterial({ color: '#ffe0a0' });
  }

  start() {
    this.ui.showMapBanner(this.map);
    this.ui.setObjective(this.map.kicker, 'A primeira onda se aproxima…', 0, this.map.waves.length, false);
    this.ui.updateBuffs([]);
    this.audio.setMood('adventure');
  }

  get playerPos() {
    return this.player.mesh.position;
  }

  project(pos) {
    TMP.copy(pos).project(this.camera);
    return {
      x: (TMP.x * 0.5 + 0.5) * window.innerWidth,
      y: (-TMP.y * 0.5 + 0.5) * window.innerHeight,
      visible: TMP.z > -1 && TMP.z < 1,
    };
  }

  facingDir() {
    return { x: Math.sin(this.player.facing), z: Math.cos(this.player.facing) };
  }

  faceToward(pos) {
    this.player.facing = Math.atan2(pos.x - this.playerPos.x, pos.z - this.playerPos.z);
    this.player.mesh.rotation.y = this.player.facing;
  }

  nearestEnemy(maxRange = 99) {
    let best = null;
    let bestD = maxRange;
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const d = Math.hypot(e.mesh.position.x - this.playerPos.x, e.mesh.position.z - this.playerPos.z);
      if (d < bestD) {
        bestD = d;
        best = e;
      }
    }
    return best;
  }

  enemiesInRadius(pos, radius) {
    return this.enemies.filter(
      (e) => e.alive && Math.hypot(e.mesh.position.x - pos.x, e.mesh.position.z - pos.z) <= radius + e.radius * 0.5
    );
  }

  enemiesInCone(range, arc) {
    const dir = this.facingDir();
    const minDot = Math.cos(arc / 2);
    return this.enemies.filter((e) => {
      if (!e.alive) return false;
      const dx = e.mesh.position.x - this.playerPos.x;
      const dz = e.mesh.position.z - this.playerPos.z;
      const d = Math.hypot(dx, dz);
      if (d > range + e.radius || d < 0.001) return false;
      if (d < 1.1) return true;
      const dot = (dx / d) * dir.x + (dz / d) * dir.z;
      return dot >= minDot;
    });
  }

  attackDamage() {
    return this.weapon.damage * (0.65 + this.player.stats.power / 28);
  }

  abilityDamage(mult) {
    return this.attackDamage() * mult * 1.05;
  }

  critChance() {
    let crit = this.player.stats.crit;
    for (const b of this.player.buffs) crit += b.crit || 0;
    return Math.min(0.8, crit);
  }

  speedMultiplier() {
    let mult = 1;
    for (const b of this.player.buffs) mult += b.speed || 0;
    return mult;
  }

  addBuff(buff) {
    const existing = this.player.buffs.find((b) => b.name === buff.name);
    if (existing) {
      existing.time = Math.max(existing.time, buff.time);
    } else {
      this.player.buffs.push({ ...buff });
    }
    this.ui.updateBuffs(this.player.buffs);
  }

  queueAttack() {
    this.attackQueued = true;
  }

  update(dt, t) {
    if (this.finished) {
      this.fx.update(dt);
      return;
    }
    this.time += dt;
    const p = this.player;
    const pos = p.mesh.position;

    p.attackTimer = Math.max(0, p.attackTimer - dt);
    p.dodgeCooldown = Math.max(0, p.dodgeCooldown - dt);
    p.invuln = Math.max(0, p.invuln - dt);
    p.abilityCooldowns = p.abilityCooldowns.map((c) => Math.max(0, c - dt));
    if (p.attackAnim >= 0) {
      p.attackAnim += dt / 0.32;
      if (p.attackAnim > 1) p.attackAnim = -1;
    }
    if (p.abilityAnim >= 0) {
      p.abilityAnim += dt / 0.45;
      if (p.abilityAnim > 1) p.abilityAnim = -1;
    }
    p.mana = Math.min(p.stats.maxMana, p.mana + 1.25 * dt);
    p.hp = Math.min(p.stats.maxHp, p.hp + p.stats.maxHp * 0.0012 * dt);

    // Buff timers
    let buffsChanged = false;
    for (let i = p.buffs.length - 1; i >= 0; i--) {
      p.buffs[i].time -= dt;
      if (p.buffs[i].time <= 0) {
        p.buffs.splice(i, 1);
        buffsChanged = true;
      }
    }
    if (buffsChanged) this.ui.updateBuffs(p.buffs);

    // Movement
    const move = this.inputMove();
    let moving = 0;
    if (p.dodgeTimer > 0) {
      p.dodgeTimer -= dt;
      pos.x += p.dodgeDir.x * 13 * dt;
      pos.z += p.dodgeDir.z * 13 * dt;
      collide(pos, this.world.obstacles, 0.46, this.world.bounds);
      moving = 1;
    } else if (move.magnitude > 0.08) {
      const speed = p.stats.speed * this.speedMultiplier() * 1.55;
      pos.x += move.x * speed * dt;
      pos.z += move.y * speed * dt;
      collide(pos, this.world.obstacles, 0.46, this.world.bounds);
      p.facing = Math.atan2(move.x, move.y);
      p.mesh.rotation.y = p.facing;
      moving = move.magnitude;
    }

    // Auto-attack (button held) or a queued tap
    if (this.attackQueued || this.input?.attackHeld) {
      this.attackQueued = false;
      this.tryAttack();
    }

    animateHero(p.mesh, t, { moving, attack: p.attackAnim, ability: p.abilityAnim });

    this.updateDelayed(dt);
    this.updateProjectiles(dt);
    this.updateEnemies(dt, t);
    this.updateAreas(dt);
    this.updateWolf(dt, t);
    this.updatePickups(dt, t);
    this.fx.update(dt);

    this.shake = Math.max(0, this.shake - dt * 2.4);
    p.dodgeRatio = clamp(p.dodgeCooldown / 1.1, 0, 1);
    this.ui.dodgeRatio = p.dodgeRatio;

    // Wave flow
    if (!this.waveActive) {
      this.nextWaveTimer -= dt;
      if (this.nextWaveTimer <= 0) {
        if (this.waveIndex + 1 < this.map.waves.length) this.spawnWave(this.waveIndex + 1);
        else this.victory();
      }
    } else if (this.enemies.every((e) => !e.alive)) {
      this.waveActive = false;
      const last = this.waveIndex >= this.map.waves.length - 1;
      this.nextWaveTimer = last ? 1.7 : 2.3;
      this.ui.setObjective(
        this.map.kicker,
        last ? 'O chefe caiu. O domínio está livre.' : 'Onda limpa — prepare-se.',
        this.waveIndex + 1,
        this.map.waves.length,
        last
      );
    }

    this.updateUI(dt);
  }

  inputMove() {
    return this.input ? this.input.getMove() : { x: 0, y: 0, magnitude: 0 };
  }

  collidePlayer() {
    collide(this.player.mesh.position, this.world.obstacles, 0.46, this.world.bounds);
  }

  tryAttack() {
    const p = this.player;
    if (this.finished || p.attackTimer > 0 || p.dodgeTimer > 0) return;
    const w = this.weapon;
    p.attackTimer = Math.max(0.24, w.cooldown || 0.5);
    p.attackAnim = 0;

    const target = this.nearestEnemy((w.projectile ? (w.range || 9) : (w.range || 2.6)) * 1.6);
    if (target) this.faceToward(target.mesh.position);

    if (w.projectile) {
      const dir = this.facingDir();
      this.spawnPlayerProjectile({
        dir,
        speed: w.projectileSpeed || 17,
        damage: this.attackDamage(),
        radius: 0.45,
        pierce: 1,
        life: 2.2,
        color: this.cls.color,
      });
      this.audio.play(this.cls.weaponType === 'bow' ? 'arrow' : 'fire');
    } else {
      const targets = this.enemiesInCone(w.range || 2.6, w.arc || 1.6);
      for (const e of targets) this.hitEnemy(e, this.attackDamage(), {});
      this.fx.slash(posCopy(p.mesh.position), p.facing, (w.range || 2.6) * 0.96, w.arc || 1.6, this.cls.color);
      if (this.cls.weaponType === 'whip') {
        this.fx.ring(posCopy(p.mesh.position), 1.5, this.cls.color, 0.3, 0.5);
        this.audio.play('whip');
      } else {
        this.audio.play('attack');
      }
    }
  }

  useAbility(index) {
    if (this.finished) return;
    const ability = this.cls.abilities[index];
    if (!ability) return;
    if (this.player.abilityCooldowns[index] > 0) return;
    if (this.player.mana < ability.mana) {
      this.ui.toast('Mana insuficiente', '✦');
      this.audio.play('error');
      return;
    }
    this.player.mana -= ability.mana;
    this.player.abilityCooldowns[index] = ability.cooldown;
    this.player.abilityAnim = 0;
    performAbility(this, ability);
  }

  dodge() {
    const p = this.player;
    if (this.finished || p.dodgeCooldown > 0) return;
    const move = this.inputMove();
    const dir = move.magnitude > 0.1 ? { x: move.x, z: move.y } : this.facingDir();
    const len = Math.hypot(dir.x, dir.z) || 1;
    p.dodgeDir = { x: dir.x / len, z: dir.z / len };
    p.dodgeTimer = 0.26;
    p.dodgeCooldown = 1.1;
    p.invuln = 0.38;
    p.facing = Math.atan2(p.dodgeDir.x, p.dodgeDir.z);
    p.mesh.rotation.y = p.facing;
    this.fx.ring(posCopy(p.mesh.position), 0.9, '#d8e8ff', 0.35, 0.6);
    this.audio.play('dodge');
  }

  usePotion(kind) {
    const potions = this.profile.potions;
    if ((potions[kind] || 0) <= 0) {
      this.ui.toast(kind === 'health' ? 'Sem poções de vida' : 'Sem poções de mana', '✦');
      this.audio.play('error');
      return;
    }
    const p = this.player;
    if (kind === 'health') {
      if (p.hp >= p.stats.maxHp - 0.5) {
        this.ui.toast('Sua vida já está cheia', '✦');
        return;
      }
      potions.health -= 1;
      const heal = p.stats.maxHp * 0.5;
      p.hp = Math.min(p.stats.maxHp, p.hp + heal);
      this.fx.ring(posCopy(p.mesh.position), 1.3, '#58d68d', 0.55);
      this.damageNumber(p.mesh.position, `+${Math.round(heal)}`, 'heal', 1.9);
      this.audio.play('heal');
    } else {
      if (p.mana >= p.stats.maxMana - 0.5) {
        this.ui.toast('Sua mana já está cheia', '✦');
        return;
      }
      potions.mana -= 1;
      const restore = p.stats.maxMana * 0.6;
      p.mana = Math.min(p.stats.maxMana, p.mana + restore);
      this.fx.ring(posCopy(p.mesh.position), 1.3, '#6ea8e8', 0.55);
      this.damageNumber(p.mesh.position, `+${Math.round(restore)}`, 'mana', 1.9);
      this.audio.play('heal');
    }
    saveProfile(this.profile);
    this.ui.updateProfileUI(this.profile);
  }

  spawnWave(index) {
    const wave = this.map.waves[index];
    this.waveIndex = index;
    this.waveActive = true;
    this.ui.setObjective(this.map.kicker, wave.label, index, this.map.waves.length, !!wave.boss);
    if (wave.boss) {
      this.audio.setMood('boss');
      this.audio.play('boss');
      this.shake = 0.55;
      const bossDef = ENEMIES[wave.enemies[0][0]];
      const pos = this.world.bossSpawn.clone();
      pos.y = 0;
      this.spawnEnemy(wave.enemies[0][0], pos);
      this.ui.showBoss(bossDef.name);
      this.fx.ring(pos, 5, '#ff6a5a', 1.1, 0.2);
      this.fx.shockwave(pos, '#ff6a5a', 3.4, 0.8);
    } else {
      this.audio.setMood('adventure');
      const points = [...this.world.spawnPoints].sort(() => Math.random() - 0.5);
      let pi = 0;
      for (const [type, count] of wave.enemies) {
        for (let i = 0; i < count; i++) {
          const base = points[pi++ % points.length];
          const pos = base.clone();
          pos.x += rand(-1.3, 1.3);
          pos.z += rand(-1.3, 1.3);
          pos.y = 0;
          this.spawnEnemy(type, pos);
        }
      }
    }
  }

  spawnEnemy(type, pos) {
    const def = ENEMIES[type];
    if (!def) return;
    const mesh = createEnemy(def.model, def.color);
    mesh.position.copy(pos);
    mesh.rotation.y = Math.random() * Math.PI * 2;
    if (!def.boss) mesh.scale.multiplyScalar(def.scale || 1);
    this.world.scene.add(mesh);
    const levelScale = 1 + Math.max(0, (this.player.stats.level || 1) - (this.map.level || 1)) * 0.045;
    const hp = Math.round(def.hp * levelScale);
    const e = {
      id: `e${++this.enemySeq}`,
      type,
      def,
      mesh,
      hp,
      maxHp: hp,
      alive: true,
      dying: 0,
      attackTimer: rand(0.4, 1.2),
      attackAnim: -1,
      stun: 0,
      burn: null,
      boss: !!def.boss,
      radius: def.radius || 0.55,
      barHeight: def.boss ? 4.2 : def.model === 'hound' ? 1.15 : 1.95,
      specialTimer: 4.5,
      phase: Math.random() * 6,
      slow: 0,
    };
    this.enemies.push(e);
    if (def.boss) this.boss = e;
    this.ui.createEnemyBar(e.id, def.name, !!def.boss);
    this.fx.ring(pos, def.boss ? 2.4 : 0.9, def.boss ? '#ff6a5a' : '#d8c9a8', 0.6, 0.15);
    return e;
  }

  hitEnemy(e, amount, opts = {}) {
    if (!e || !e.alive) return;
    let dmg = amount * rand(0.92, 1.08);
    const crit = opts.crit !== false && Math.random() < this.critChance();
    if (crit) dmg *= 1.75;
    e.hp -= dmg;
    e.flash = 0.12;
    this.fx.impact({ x: e.mesh.position.x, y: e.barHeight * 0.55, z: e.mesh.position.z }, crit ? '#ffd36a' : '#ff9a6a', crit ? 1.4 : 0.9);
    this.damageNumber(e.mesh.position, `${Math.round(dmg)}`, crit ? 'crit' : '', e.barHeight);
    this.audio.play(crit ? 'crit' : 'hit');
    if (opts.burn) {
      e.burn = {
        time: Math.max(e.burn?.time || 0, opts.burn),
        dps: Math.max(e.burn?.dps || 0, dmg * 0.12),
        tick: 0.45,
      };
    }
    if (opts.stun) e.stun = Math.max(e.stun, opts.stun);
    if (e.hp <= 0) this.killEnemy(e);
  }

  killEnemy(e) {
    if (!e.alive) return;
    e.alive = false;
    e.dying = 1.35;
    e.hp = 0;
    this.ui.removeEnemyBar(e.id);
    this.loot.xp += e.def.xp || 0;
    this.kills += 1;
    const pos = e.mesh.position;
    this.spawnPickup('gold', pos, e.def.gold || 5);
    if (Math.random() < 0.2) this.spawnPickup('health', pos, 1);
    if (Math.random() < 0.16) this.spawnPickup('mana', pos, 1);
    if (e.boss) {
      this.boss = null;
      this.ui.hideBoss();
      this.shake = 0.9;
      this.audio.play('victory');
      this.fx.shockwave(pos, '#ffd36a', 4.2, 0.9);
      this.fx.burst({ x: pos.x, y: 1.4, z: pos.z }, '#ffd36a', 16, 2.4, 0.9);
      for (let i = 0; i < 4; i++) this.spawnPickup('gold', pos, Math.round((e.def.gold || 20) / 3), i);
      this.spawnPickup('health', pos, 1, 2);
      this.spawnPickup('mana', pos, 1, 2);
    } else {
      this.fx.burst({ x: pos.x, y: 0.8, z: pos.z }, e.def.color || '#d8c9a8', 5, 0.7, 0.55);
    }
    this.fx.ring(pos, e.boss ? 4.5 : 0.8, e.boss ? '#ffd36a' : '#8f1f24', 0.55, 0.3);
  }

  damageNumber(pos, text, type, height = 1.8) {
    const screen = this.project({ x: pos.x, y: (pos.y || 0) + height, z: pos.z });
    if (screen.visible) this.ui.spawnDamage(screen.x, screen.y, text, type);
  }

  updateEnemies(dt, t) {
    const p = this.player;
    const pos = p.mesh.position;
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (!e.alive) {
        e.dying -= dt;
        animateEnemy(e.mesh, t, { dead: true });
        if (e.dying <= 0) {
          this.world.scene.remove(e.mesh);
          this.enemies.splice(i, 1);
        }
        continue;
      }
      if (e.flash > 0) e.flash -= dt;
      if (e.slow > 0) e.slow -= dt;
      if (e.stun > 0) {
        e.stun -= dt;
        animateEnemy(e.mesh, t, { moving: 0 });
        continue;
      }
      if (e.burn) {
        e.burn.time -= dt;
        e.burn.tick -= dt;
        if (e.burn.tick <= 0) {
          e.burn.tick = 0.45;
          this.hitEnemy(e, e.burn.dps, { crit: false });
          if (!e.alive) continue;
        }
        if (e.burn.time <= 0) e.burn = null;
      }

      const dx = pos.x - e.mesh.position.x;
      const dz = pos.z - e.mesh.position.z;
      const dist = Math.hypot(dx, dz) || 0.001;
      const def = e.def;
      const reach = (def.range || 2) + e.radius * 0.35;
      let moving = 0;
      e.attackTimer -= dt;
      if (e.attackAnim >= 0) {
        e.attackAnim -= dt / 0.38;
        if (e.attackAnim < 0) e.attackAnim = -1;
      }

      if (dist > reach * 0.94) {
        const speed = (def.speed || 2.5) * (e.slow > 0 ? 0.55 : 1);
        const step = Math.min(speed * dt, Math.max(0, dist - reach * 0.86));
        e.mesh.position.x += (dx / dist) * step;
        e.mesh.position.z += (dz / dist) * step;
        collide(e.mesh.position, this.world.obstacles, e.radius * 0.75, this.world.bounds);
        moving = 1;
      } else if (e.attackTimer <= 0) {
        e.attackTimer = def.attackCooldown || 1.2;
        e.attackAnim = 0.38;
        this.enemyStrike(e, dist);
      }
      e.mesh.rotation.y = Math.atan2(dx, dz);
      animateEnemy(e.mesh, t, { moving, attack: e.attackAnim >= 0 ? 1 - e.attackAnim / 0.38 : -1 });

      if (e.boss) {
        e.specialTimer -= dt;
        if (e.specialTimer <= 0) {
          e.specialTimer = rand(6.5, 8.5);
          this.bossSlam(e);
        }
      }
    }
  }

  enemyStrike(e, dist) {
    const def = e.def;
    if (def.ranged) {
      this.spawnEnemyProjectile(e);
      this.audio.play(this.map.id === 'ice' ? 'ice' : 'cast');
    } else if (dist <= (def.range || 2) + e.radius * 0.5 + 0.35) {
      this.damagePlayer(def.damage || 6);
    }
  }

  bossSlam(e) {
    const pos = posCopy(e.mesh.position);
    this.fx.ring(pos, 4.8, '#ff5b45', 0.95, 0.25);
    this.delayed.push({
      time: 0.92,
      fn: () => {
        if (!e.alive) return;
        const p = this.playerPos;
        const d = Math.hypot(p.x - pos.x, p.z - pos.z);
        if (d <= 4.9) this.damagePlayer((e.def.damage || 20) * 1.35);
        this.fx.shockwave(pos, '#ff5b45', 4.6, 0.7);
        this.shake = Math.max(this.shake, 0.55);
        this.audio.play('hit');
      },
    });
  }

  damagePlayer(raw) {
    if (this.finished || this.player.invuln > 0) return;
    const def = this.player.stats.defense;
    let dmg = raw * (1 - Math.min(0.72, def / (def + 55)));
    for (const b of this.player.buffs) dmg *= 1 - (b.damageReduction || 0);
    dmg = Math.max(1, dmg);
    this.player.hp -= dmg;
    this.shake = Math.max(this.shake, 0.18 + Math.min(0.5, dmg / this.player.stats.maxHp));
    this.damageNumber(this.playerPos, `-${Math.round(dmg)}`, 'player', 2.05);
    this.audio.play('hit');
    this.onPlayerHit?.();
    if (this.player.hp <= 0) {
      this.player.hp = 0;
      this.defeat();
    }
  }

  spawnPlayerProjectile({ dir, speed, damage, radius, pierce, explodeRadius, burn, life, color }) {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const mesh = new THREE.Mesh(this.projGeo, mat);
    const len = Math.hypot(dir.x, dir.z) || 1;
    mesh.position.set(
      this.playerPos.x + (dir.x / len) * 0.7,
      1.02,
      this.playerPos.z + (dir.z / len) * 0.7
    );
    mesh.scale.setScalar((radius || 0.4) / 0.15);
    this.world.scene.add(mesh);
    this.projectiles.push({
      owner: 'player',
      mesh,
      dir: { x: dir.x / len, z: dir.z / len },
      speed,
      damage,
      radius: radius || 0.4,
      pierce: pierce || 1,
      hitSet: new Set(),
      explodeRadius: explodeRadius || 0,
      burn: burn || 0,
      life: life || 2,
      color,
    });
  }

  spawnEnemyProjectile(e) {
    const pos = e.mesh.position;
    const dx = this.playerPos.x - pos.x;
    const dz = this.playerPos.z - pos.z;
    const len = Math.hypot(dx, dz) || 1;
    const color = this.map.id === 'ice' ? '#8fdcff' : this.map.id === 'ruins' ? '#a8e06a' : '#ff8a5a';
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const mesh = new THREE.Mesh(this.projGeo, mat);
    mesh.position.set(pos.x, 1.05, pos.z);
    mesh.scale.setScalar(0.95);
    this.world.scene.add(mesh);
    this.projectiles.push({
      owner: 'enemy',
      mesh,
      dir: { x: dx / len, z: dz / len },
      speed: 8.5 + (this.map.index || 1) * 0.55,
      damage: e.def.damage || 6,
      radius: 0.4,
      life: 2.6,
      color,
    });
  }

  updateProjectiles(dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.life -= dt;
      p.mesh.position.x += p.dir.x * p.speed * dt;
      p.mesh.position.z += p.dir.z * p.speed * dt;
      p.mesh.rotation.y += dt * 8;
      let remove = p.life <= 0;

      if (!remove && p.owner === 'player') {
        for (const e of this.enemies) {
          if (!e.alive || p.hitSet.has(e.id)) continue;
          const d = Math.hypot(e.mesh.position.x - p.mesh.position.x, e.mesh.position.z - p.mesh.position.z);
          if (d <= p.radius + e.radius * 0.85) {
            if (p.explodeRadius > 0) {
              this.explode(p.mesh.position, p.explodeRadius, p.damage, p.color, p.burn);
              remove = true;
              break;
            }
            this.hitEnemy(e, p.damage, { burn: p.burn });
            p.hitSet.add(e.id);
            if (p.hitSet.size >= (p.pierce || 1)) {
              remove = true;
              break;
            }
          }
        }
      } else if (!remove && p.owner === 'enemy') {
        const d = Math.hypot(this.playerPos.x - p.mesh.position.x, this.playerPos.z - p.mesh.position.z);
        if (d < 0.72) {
          this.damagePlayer(p.damage);
          remove = true;
        }
      }

      if (Math.abs(p.mesh.position.x) > this.world.bounds + 3 || Math.abs(p.mesh.position.z) > this.world.bounds + 3) remove = true;
      if (remove) {
        this.world.scene.remove(p.mesh);
        p.mesh.material.dispose();
        this.projectiles.splice(i, 1);
      }
    }
  }

  explode(pos, radius, damage, color, burn) {
    for (const e of this.enemiesInRadius(pos, radius)) this.hitEnemy(e, damage, { burn });
    this.fx.impact({ x: pos.x, y: 1.0, z: pos.z }, color || '#ff9a5a', 2.6, 0.5);
    this.fx.ring(pos, radius, color || '#ff9a5a', 0.55, 0.25);
    this.fx.burst({ x: pos.x, y: 1, z: pos.z }, color || '#ff9a5a', 7, 1.1, 0.5);
    this.shake = Math.max(this.shake, 0.3);
    this.audio.play('fire');
  }

  updateDelayed(dt) {
    for (let i = this.delayed.length - 1; i >= 0; i--) {
      this.delayed[i].time -= dt;
      if (this.delayed[i].time <= 0) {
        const fn = this.delayed[i].fn;
        this.delayed.splice(i, 1);
        fn();
      }
    }
  }

  updateAreas(dt) {
    for (let i = this.areas.length - 1; i >= 0; i--) {
      const a = this.areas[i];
      a.remaining -= dt;
      a.tick -= dt;
      if (a.tick <= 0) {
        a.tick = a.interval;
        for (const e of this.enemiesInRadius(a, a.radius)) this.hitEnemy(e, a.damage, { burn: a.burn });
        this.fx.ring(a, a.radius * 0.7, a.color, 0.35, 0.5);
        for (let n = 0; n < 3; n++) {
          const ang = Math.random() * Math.PI * 2;
          const r = Math.random() * a.radius;
          this.fx.impact({ x: a.x + Math.cos(ang) * r, y: 0.4, z: a.z + Math.sin(ang) * r }, a.color, 0.8, 0.3);
        }
        this.audio.play(a.sound || 'arrow');
      }
      if (a.remaining <= 0) this.areas.splice(i, 1);
    }
  }

  spawnWolf(ability) {
    if (this.wolf) {
      this.world.scene.remove(this.wolf.mesh);
      this.wolf = null;
    }
    const mesh = createSpiritWolf();
    mesh.position.set(this.playerPos.x + 1.2, 0, this.playerPos.z + 0.6);
    this.world.scene.add(mesh);
    this.wolf = { mesh, time: ability.duration || 12, attackTimer: 0.4, damage: this.abilityDamage((ability.damage || 1) * 0.5) };
    this.audio.play('summon');
    this.fx.ring(mesh.position, 1.6, '#7ef0b5', 0.7, 0.25);
  }

  updateWolf(dt, t) {
    const w = this.wolf;
    if (!w) return;
    w.time -= dt;
    if (w.time <= 0) {
      this.fx.ring(w.mesh.position, 1.2, '#7ef0b5', 0.5, 0.4);
      this.world.scene.remove(w.mesh);
      this.wolf = null;
      return;
    }
    w.attackTimer -= dt;
    const target = this.nearestEnemy(40);
    if (target) {
      const dx = target.mesh.position.x - w.mesh.position.x;
      const dz = target.mesh.position.z - w.mesh.position.z;
      const d = Math.hypot(dx, dz) || 0.001;
      if (d > 1.3) {
        const step = Math.min(5.6 * dt, d - 1.2);
        w.mesh.position.x += (dx / d) * step;
        w.mesh.position.z += (dz / d) * step;
        w.mesh.rotation.y = Math.atan2(dx, dz);
      } else if (w.attackTimer <= 0) {
        w.attackTimer = 0.8;
        this.hitEnemy(target, w.damage, {});
        this.fx.impact({ x: target.mesh.position.x, y: 0.8, z: target.mesh.position.z }, '#7ef0b5', 0.9);
        this.audio.play('hit');
      }
    } else {
      const dx = this.playerPos.x - w.mesh.position.x;
      const dz = this.playerPos.z - w.mesh.position.z;
      const d = Math.hypot(dx, dz);
      if (d > 2) {
        w.mesh.position.x += (dx / d) * 4.5 * dt;
        w.mesh.position.z += (dz / d) * 4.5 * dt;
        w.mesh.rotation.y = Math.atan2(dx, dz);
      }
    }
    animateDog(w.mesh, t);
  }

  spawnPickup(type, pos, value = 1, offsetIndex = 0) {
    const mesh = type === 'gold' ? createGoldOrb() : type === 'health' ? createHealthOrb() : createManaOrb();
    const a = offsetIndex ? (offsetIndex / 4) * Math.PI * 2 : Math.random() * Math.PI * 2;
    const r = offsetIndex ? 0.5 + Math.random() * 0.8 : Math.random() * 0.5;
    mesh.position.set(pos.x + Math.cos(a) * r, 0, pos.z + Math.sin(a) * r);
    mesh.userData.orb.position.y = 0.36;
    this.world.scene.add(mesh);
    this.pickups.push({ type, value, mesh, life: 24, phase: Math.random() * 6, baseY: 0.36 });
  }

  updatePickups(dt, t) {
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const it = this.pickups[i];
      it.life -= dt;
      it.mesh.rotation.y += dt * 1.8;
      it.mesh.userData.orb.position.y = it.baseY + Math.sin(t * 2.4 + it.phase) * 0.09;
      const dx = this.playerPos.x - it.mesh.position.x;
      const dz = this.playerPos.z - it.mesh.position.z;
      const d = Math.hypot(dx, dz) || 0.001;
      if (d < 2.6) {
        const pull = Math.min(1, (2.6 - d) * 2.2) * 5.5 * dt;
        it.mesh.position.x += (dx / d) * pull;
        it.mesh.position.z += (dz / d) * pull;
      }
      let collect = d < 1.05;
      if (collect) {
        if (it.type === 'gold') {
          this.profile.gold += it.value;
          this.loot.gold += it.value;
          this.audio.play('coin');
          this.damageNumber(this.playerPos, `+${it.value} ◆`, 'gold', 2.3);
        } else if (it.type === 'health') {
          const heal = this.player.stats.maxHp * 0.18;
          this.player.hp = Math.min(this.player.stats.maxHp, this.player.hp + heal);
          this.audio.play('heal');
          this.damageNumber(this.playerPos, `+${Math.round(heal)}`, 'heal', 2.3);
        } else {
          const mana = this.player.stats.maxMana * 0.25;
          this.player.mana = Math.min(this.player.stats.maxMana, this.player.mana + mana);
          this.audio.play('pickup');
          this.damageNumber(this.playerPos, `+${Math.round(mana)}`, 'mana', 2.3);
        }
      }
      if (collect || it.life <= 0) {
        this.world.scene.remove(it.mesh);
        this.pickups.splice(i, 1);
      }
    }
  }

  updateUI(dt) {
    this.uiTimer -= dt;
    this.buffTimer -= dt;
    this.ui.updateCooldowns(this.player.abilityCooldowns, this.player.mana, this.player.stats.maxMana);
    if (this.buffTimer <= 0) {
      this.buffTimer = 0.2;
      this.ui.updateBuffs(this.player.buffs);
    }
    if (this.uiTimer <= 0) {
      this.uiTimer = 0.08;
      this.ui.updateVitals(this.player, this.player.stats, xpProgress(this.profile, this.player.classId));
      this.ui.drawMinimap(
        { x: this.playerPos.x, z: this.playerPos.z, facing: this.player.facing + Math.PI },
        this.enemies,
        this.world.bounds
      );
    }
    if (this.boss && this.boss.alive) this.ui.updateBoss(this.boss.hp, this.boss.maxHp);
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const screen = this.project({ x: e.mesh.position.x, y: e.barHeight, z: e.mesh.position.z });
      this.ui.updateEnemyBar(e.id, screen.x, screen.y, e.hp / e.maxHp, screen.visible);
    }
  }

  victory() {
    if (this.finished) return;
    this.finished = true;
    this.waveActive = false;
    this.ui.hideBoss();
    this.fx.clear();
    const map = this.map;
    const xpTotal = this.loot.xp + (map.reward?.xp || 0);
    const goldBonus = map.reward?.gold || 0;
    this.profile.gold += goldBonus;
    if (!this.profile.completed.includes(map.id)) this.profile.completed.push(map.id);
    const result = grantXp(this.profile, this.player.classId, xpTotal);
    saveProfile(this.profile);
    this.lootGranted = true;
    this.ui.updateProfileUI(this.profile);
    this.ui.showResult({
      victory: true,
      rewards: { gold: goldBonus + this.loot.gold, xp: xpTotal },
      map,
      levelUps: result.levels || 0,
    });
    this.audio.setMood('victory');
    this.audio.play('victory');
    if (result.levels > 0) {
      this.ui.levelFlash();
      this.ui.toast(`Nível ${result.level}!`, '▲');
      this.audio.play('levelup');
    }
    this.onFinished?.(true);
  }

  defeat() {
    if (this.finished) return;
    this.finished = true;
    this.waveActive = false;
    this.ui.hideBoss();
    this.fx.clear();
    saveProfile(this.profile);
    this.lootGranted = true;
    this.ui.showResult({ victory: false, rewards: { gold: this.loot.gold }, map: this.map, levelUps: 0 });
    this.audio.setMood('defeat');
    this.audio.play('defeat');
    this.onFinished?.(false);
  }

  exitToLobby() {
    if (!this.finished && !this.lootGranted) {
      this.lootGranted = true;
      if (this.loot.xp > 0) grantXp(this.profile, this.player.classId, this.loot.xp);
      saveProfile(this.profile);
    }
    this.dispose();
    this.onExit?.();
  }

  dispose() {
    this.fx.clear();
    this.ui.clearEnemyBars();
    this.ui.hideBoss();
    for (const e of this.enemies) this.world.scene.remove(e.mesh);
    for (const p of this.projectiles) {
      this.world.scene.remove(p.mesh);
      p.mesh.material.dispose();
    }
    for (const it of this.pickups) this.world.scene.remove(it.mesh);
    if (this.wolf) this.world.scene.remove(this.wolf.mesh);
    this.enemies.length = 0;
    this.projectiles.length = 0;
    this.pickups.length = 0;
    this.delayed.length = 0;
    this.areas.length = 0;
    this.wolf = null;
  }
}

function posCopy(pos) {
  return { x: pos.x, y: pos.y || 0, z: pos.z };
}
