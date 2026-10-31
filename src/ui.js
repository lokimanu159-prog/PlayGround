import { CLASS_BY_ID, ENEMIES, MAPS, RARITY_COLORS, xpForLevel } from './data.js';
import { computeStats, getEquipped, itemStatsText, shopItemsFor, xpProgress } from './profile.js';
import { icon, ITEM_ICONS } from './icons.js';

const $ = (id) => document.getElementById(id);

export class GameUI {
  constructor() {
    this.handlers = {};
    this.selectedClassId = 'warden';
    this.shopTab = 'weapon';
    this.portraits = { classes: {}, vendor: null };
    this.mapThumbs = {};
    this.enemyBars = new Map();
    this.toastTimer = null;
    this.currentClass = null;
    this.projector = null;
    this.bindStatic();
  }

  bindStatic() {
    const on = (id, fn) => {
      const el = $(id);
      if (el) el.addEventListener('click', (e) => {
        e.preventDefault();
        fn(e);
      });
    };
    on('btn-start', () => this.handlers.onStart?.());
    on('btn-back-title', () => this.handlers.onBackTitle?.());
    on('btn-confirm-class', () => this.handlers.onConfirmClass?.(this.selectedClassId));
    on('btn-shop', () => this.handlers.onOpenShop?.());
    on('btn-maps', () => this.handlers.onOpenMaps?.());
    on('btn-shop-close', () => this.handlers.onCloseModal?.('shop'));
    on('btn-maps-close', () => this.handlers.onCloseModal?.('maps'));
    on('btn-lobby', () => this.handlers.onLobby?.());
    on('btn-pause', () => this.handlers.onPause?.());
    on('btn-resume', () => this.handlers.onResume?.());
    on('btn-pause-lobby', () => this.handlers.onPauseLobby?.());
    on('btn-pause-help', () => this.handlers.onOpenHelp?.());
    on('btn-result-lobby', () => this.handlers.onResultLobby?.());
    on('btn-result-retry', () => this.handlers.onRetry?.());
    on('btn-help-close', () => this.handlers.onCloseHelp?.());
    on('btn-help-ok', () => this.handlers.onCloseHelp?.());
    on('btn-lobby-help', () => this.handlers.onOpenHelp?.());
    on('btn-title-sound', () => this.handlers.onSound?.());
    on('btn-lobby-sound', () => this.handlers.onSound?.());

    document.querySelectorAll('.shop-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        this.shopTab = tab.dataset.tab;
        document.querySelectorAll('.shop-tab').forEach((t) => t.classList.toggle('active', t === tab));
        this.renderShop();
      });
    });

    // close modals by clicking scrim
    document.querySelectorAll('.modal-scrim').forEach((scrim) => {
      scrim.addEventListener('click', () => {
        const modal = scrim.closest('.modal');
        if (modal && !modal.classList.contains('pause-modal') && !modal.id.includes('result')) {
          this.handlers.onCloseModal?.(modal.id.replace('-modal', ''));
        }
      });
    });
  }

  setPortraits(portraits) {
    this.portraits = portraits;
    document.querySelectorAll('.class-card').forEach((card) => {
      const id = card.dataset.class;
      const img = card.querySelector('img');
      if (img && portraits.classes[id]) img.src = portraits.classes[id];
    });
    const vendorImg = $('vendor-portrait');
    if (vendorImg && portraits.vendor) vendorImg.src = portraits.vendor;
    this.updatePortrait();
  }

  setMapThumbs(thumbs) {
    this.mapThumbs = thumbs;
    this.renderMaps?.(this.profile);
  }

  setProfile(profile) {
    this.profile = profile;
    this.updateProfileUI(profile);
  }

  updatePortrait() {
    const id = this.selectedClassId;
    const src = this.portraits.classes[id];
    if (!src) return;
    const lobby = $('lobby-portrait');
    const hud = $('hud-portrait');
    if (lobby) lobby.src = src;
    if (hud) hud.src = src;
  }

  buildClassCards(classes, selectedId) {
    const wrap = $('class-cards');
    if (!wrap) return;
    wrap.innerHTML = classes
      .map(
        (c) => `
        <button class="class-card ${c.id === selectedId ? 'active' : ''}" data-class="${c.id}" role="option" aria-selected="${c.id === selectedId}" style="--class-glow:${c.glow};--class-color:${c.color}">
          <img src="${this.portraits.classes[c.id] || ''}" alt="${c.name}, ${c.title}" />
          <span class="card-role">${c.role}</span>
          <span class="class-card-copy"><b>${c.name}</b><span>${c.title}</span></span>
        </button>`
      )
      .join('');
    wrap.querySelectorAll('.class-card').forEach((card) => {
      card.addEventListener('click', () => {
        this.selectedClassId = card.dataset.class;
        this.handlers.onSelectClass?.(card.dataset.class);
      });
    });
  }

  setSelectedClass(classId) {
    this.selectedClassId = classId;
    document.querySelectorAll('.class-card').forEach((card) => {
      const active = card.dataset.class === classId;
      card.classList.toggle('active', active);
      card.setAttribute('aria-selected', String(active));
    });
    this.updatePortrait();
  }

  updateSelectPanel(classData, profile) {
    const c = CLASS_BY_ID[classData];
    if (!c) return;
    this.currentClass = c;
    $('select-name').textContent = c.name;
    $('select-title').textContent = c.title;
    $('select-role').textContent = c.role;
    $('select-desc').textContent = c.description;
    $('select-gold').textContent = profile.gold;

    const stats = [
      ['Vida', c.stats.hp, 280],
      ['Mana', c.stats.mana, 180],
      ['Poder', c.stats.power, 30],
      ['Defesa', c.stats.defense, 20],
      ['Velocidade', c.stats.speed, 6],
    ];
    $('select-stats').innerHTML = stats
      .map(
        ([label, value, max]) => `
        <div class="stat-row">
          <span>${label}</span>
          <span class="stat-track"><i style="width:${Math.min(100, (value / max) * 100)}%"></i></span>
          <b>${value}</b>
        </div>`
      )
      .join('');

    $('select-abilities').innerHTML = c.abilities
      .map(
        (a) => `
        <div class="ability-preview-row">
          <span class="ability-glyph">${icon(a.icon)}</span>
          <span><b>${a.name}</b><span>${a.short}</span></span>
        </div>`
      )
      .join('');
    this.selectedClassId = c.id;
    this.setSelectedClass(c.id);
    this.updateProfileUI(profile);
  }

  updateProfileUI(profile) {
    if (!profile) return;
    const classId = profile.selectedClass;
    const c = CLASS_BY_ID[classId];
    const state = profile.classes[classId];
    const xp = xpProgress(profile, classId);
    const gold = profile.gold;
    ['select-gold', 'lobby-gold', 'hud-gold', 'shop-gold'].forEach((id) => {
      const el = $(id);
      if (el) el.textContent = gold;
    });
    const name = c?.name || '';
    const level = state?.level || 1;
    if ($('lobby-hero-name')) $('lobby-hero-name').textContent = name;
    if ($('hud-hero-name')) $('hud-hero-name').textContent = name;
    if ($('lobby-hero-level')) $('lobby-hero-level').textContent = `Nv. ${level}`;
    if ($('hud-hero-level')) $('hud-hero-level').textContent = `Nv. ${level}`;
    if ($('lobby-hero-class')) $('lobby-hero-class').textContent = c?.title || '';
    const xpFill = $('lobby-xp-fill');
    if (xpFill) xpFill.style.width = `${xp.percent}%`;
    if ($('potion-count')) $('potion-count').textContent = profile.potions.health || 0;
    if ($('mana-potion-count')) $('mana-potion-count').textContent = profile.potions.mana || 0;
    this.updatePortrait();
  }

  showOnly(screen) {
    const map = {
      boot: 'boot',
      title: 'title-screen',
      select: 'select-screen',
      lobby: 'lobby-ui',
      adventure: 'adventure-hud',
    };
    Object.values(map).forEach((id) => $(id)?.classList.add('hidden'));
    if (map[screen]) $(map[screen])?.classList.remove('hidden');
    document.querySelectorAll('.modal').forEach((m) => m.classList.add('hidden'));
  }

  hideBoot() {
    const boot = $('boot');
    if (!boot) return;
    boot.classList.add('fade-out');
    setTimeout(() => boot.classList.add('hidden'), 650);
  }

  showTitle() {
    this.showOnly('title');
    this.hideAllModals();
  }

  showSelect() {
    this.showOnly('select');
    this.hideAllModals();
  }

  showLobby(profile) {
    this.showOnly('lobby');
    this.hideAllModals();
    this.updateProfileUI(profile);
  }

  showAdventure(profile) {
    this.showOnly('adventure');
    this.hideAllModals();
    this.updateProfileUI(profile);
  }

  hideAllModals() {
    document.querySelectorAll('.modal').forEach((m) => m.classList.add('hidden'));
  }

  openModal(id) {
    $(id)?.classList.remove('hidden');
  }

  closeModal(id) {
    $(id)?.classList.add('hidden');
  }

  openShop(profile) {
    this.profile = profile;
    this.shopTab = 'weapon';
    document.querySelectorAll('.shop-tab').forEach((t) => t.classList.toggle('active', t.dataset.tab === 'weapon'));
    this.renderShop();
    this.openModal('shop-modal');
  }

  renderShop() {
    if (!this.profile) return;
    const classId = this.profile.selectedClass;
    const items = shopItemsFor(this.shopTab, classId);
    const wrap = $('shop-items');
    if (!wrap) return;
    const gold = this.profile.gold;
    wrap.innerHTML = items
      .map((item) => {
        const owned = this.profile.owned.includes(item.id);
        const equipped = Object.values(this.profile.classes[classId].equipment).includes(item.id);
        const consumable = item.type === 'consumable';
        const count = consumable ? (item.id === 'c_health' ? this.profile.potions.health : this.profile.potions.mana) : 0;
        const stats = itemStatsText(item);
        const rarityColor = RARITY_COLORS[item.rarity] || '#a8b3c5';
        const priceLabel = item.price === 0 ? 'Inicial' : `<span class="coin-icon">◆</span>${item.price}`;
        let action = '';
        if (consumable) {
          action = `<button class="item-buy" data-buy="${item.id}" ${gold < item.price ? 'disabled' : ''}>Comprar</button>`;
        } else if (equipped) {
          action = `<button class="item-buy equipped" disabled>Equipado</button>`;
        } else if (owned) {
          action = `<button class="item-equip" data-equip="${item.id}">Equipar</button>`;
        } else {
          action = `<button class="item-buy" data-buy="${item.id}" ${gold < item.price ? 'disabled' : ''}>Comprar</button>`;
        }
        return `
          <article class="shop-item ${owned ? 'owned' : ''} ${equipped ? 'equipped' : ''}" style="--rarity:${rarityColor}">
            <span class="item-icon">${icon(ITEM_ICONS[item.icon] || item.icon || 'star')}</span>
            <div class="item-body">
              <div class="item-top">
                <div><div class="item-name">${item.name}${consumable && count ? ` <small>×${count}</small>` : ''}</div><div class="item-rarity">${item.rarity}${item.type === 'weapon' ? ' · Arma' : ''}</div></div>
                <div class="item-price">${priceLabel}</div>
              </div>
              <div class="item-stats">${stats.map(([k, v]) => `<span>${k} <b>${v}</b></span>`).join('')}</div>
              <p class="item-desc">${item.desc}</p>
              <div class="item-actions"><span></span>${action}</div>
            </div>
          </article>`;
      })
      .join('');
    wrap.querySelectorAll('[data-buy]').forEach((btn) => {
      btn.addEventListener('click', () => this.handlers.onBuy?.(btn.dataset.buy));
    });
    wrap.querySelectorAll('[data-equip]').forEach((btn) => {
      btn.addEventListener('click', () => this.handlers.onEquip?.(btn.dataset.equip));
    });
    $('shop-gold').textContent = gold;
    const equipped = getEquipped(this.profile, classId);
    const summary = $('shop-equip-summary');
    if (summary) summary.textContent = `Arma: ${equipped.weapon?.name || '—'} · Armadura: ${equipped.armor?.name || '—'}`;
  }

  renderMaps(profile) {
    if (!profile) return;
    this.profile = profile;
    const wrap = $('map-cards');
    if (!wrap) return;
    wrap.innerHTML = MAPS.map((map) => {
      const boss = ENEMIES[map.boss];
      const cleared = profile.completed.includes(map.id);
      const thumb = this.mapThumbs[map.id] ? `<img class="map-thumb" src="${this.mapThumbs[map.id]}" alt="" />` : '';
      return `
        <button class="map-card ${cleared ? 'cleared' : ''}" data-map="${map.id}" style="--map-bg:${map.bg};--map-glow:${map.glow};--map-accent:${map.accent}">
          ${thumb}
          <span class="map-enter">${cleared ? '✓ Purificado' : 'Entrar ›'}</span>
          <span class="map-card-content">
            <span class="map-num">${map.kicker} · Nv. ${map.level}+</span>
            <h3>${map.name}</h3>
            <p>${map.desc}</p>
            <span class="map-meta">
              <span>Chefe: <b>${boss?.name || '—'}</b></span>
              <span>Recompensa: <b>◆ ${map.reward.gold}</b></span>
            </span>
          </span>
        </button>`;
    }).join('');
    wrap.querySelectorAll('[data-map]').forEach((card) => {
      card.addEventListener('click', () => this.handlers.onEnterMap?.(card.dataset.map));
    });
    const progress = $('maps-progress');
    if (progress) progress.textContent = `${profile.completed.length} / ${MAPS.length} domínios purificados`;
  }

  openMaps(profile) {
    this.profile = profile;
    this.renderMaps(profile);
    this.openModal('maps-modal');
  }

  showInteract(text) {
    const el = $('interact-prompt');
    if (!el) return;
    el.querySelector('span:last-child').textContent = text;
    el.classList.remove('hidden');
  }

  hideInteract() {
    $('interact-prompt')?.classList.add('hidden');
  }

  showMapBanner(map) {
    const banner = $('map-banner');
    if (!banner) return;
    $('map-banner-kicker').textContent = map.kicker;
    $('map-banner-name').textContent = map.name;
    $('map-banner-sub').textContent = map.subtitle;
    banner.classList.remove('hidden');
    banner.style.animation = 'none';
    void banner.offsetWidth;
    banner.style.animation = '';
    clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(() => banner.classList.add('hidden'), 3400);
    const chip = $('hud-map-name');
    if (chip) chip.textContent = map.name;
  }

  setObjective(kicker, text, waveIndex, totalWaves, bossWave = false) {
    const k = $('objective-kicker');
    const t = $('objective-text');
    if (k) k.textContent = kicker;
    if (t) t.textContent = text;
    const pips = $('wave-pips');
    if (pips) {
      pips.innerHTML = Array.from({ length: totalWaves }, (_, i) => {
        const isBoss = i === totalWaves - 1;
        const done = i < waveIndex;
        const current = i === waveIndex;
        return `<i class="${isBoss ? 'boss' : ''} ${done || (current && bossWave) ? 'done' : ''}"></i>`;
      }).join('');
    }
  }

  setupAbilities(classData) {
    if (!classData) return;
    document.querySelectorAll('.ability-btn').forEach((btn) => {
      const i = Number(btn.dataset.ability);
      const ability = classData.abilities[i];
      if (!ability) return;
      btn.querySelector('.ability-icon').innerHTML = icon(ability.icon);
      btn.setAttribute('aria-label', `${ability.name}: ${ability.short}`);
      btn.title = `${ability.name} — ${ability.short} (${ability.mana} mana)`;
    });
  }

  updateCooldowns(cooldowns, mana, maxMana) {
    document.querySelectorAll('.ability-btn').forEach((btn) => {
      const i = Number(btn.dataset.ability);
      const cd = cooldowns[i] || 0;
      const max = this.currentClass?.abilities[i]?.cooldown || 1;
      const ratio = Math.max(0, Math.min(1, cd / max));
      btn.style.setProperty('--cd', ratio.toFixed(3));
      const text = btn.querySelector('.cooldown-text');
      if (text) text.textContent = cd > 0.15 ? Math.ceil(cd).toString() : '';
      const ability = this.currentClass?.abilities[i];
      btn.classList.toggle('unaffordable', !!ability && mana < ability.mana && cd <= 0.15);
    });
    const dodge = $('btn-dodge');
    if (dodge) {
      const ratio = this.dodgeRatio || 0;
      dodge.style.setProperty('--cd', ratio.toFixed(3));
    }
  }

  updateVitals(player, stats, xp) {
    const hpPct = Math.max(0, Math.min(100, (player.hp / stats.maxHp) * 100));
    const mpPct = Math.max(0, Math.min(100, (player.mana / stats.maxMana) * 100));
    if ($('hp-fill')) $('hp-fill').style.width = `${hpPct}%`;
    if ($('mana-fill')) $('mana-fill').style.width = `${mpPct}%`;
    if ($('hp-text')) $('hp-text').textContent = `${Math.max(0, Math.ceil(player.hp))} / ${stats.maxHp}`;
    if ($('mana-text')) $('mana-text').textContent = `${Math.max(0, Math.floor(player.mana))} / ${stats.maxMana}`;
    if ($('hud-gold')) $('hud-gold').textContent = this.profile?.gold ?? 0;
    if ($('potion-count')) $('potion-count').textContent = this.profile?.potions.health ?? 0;
    if ($('mana-potion-count')) $('mana-potion-count').textContent = this.profile?.potions.mana ?? 0;
    const xpFill = $('lobby-xp-fill');
    if (xpFill && xp) xpFill.style.width = `${xp.percent}%`;
  }

  updateBuffs(buffs) {
    const el = $('buffs');
    if (!el) return;
    el.innerHTML = buffs
      .map((b) => `<span class="buff-chip">${icon(b.icon || 'spark')}${b.name} ${Math.ceil(b.time)}s</span>`)
      .join('');
  }

  showBoss(name) {
    const bar = $('boss-bar');
    if (!bar) return;
    $('boss-name').textContent = name;
    bar.classList.remove('hidden');
  }

  updateBoss(hp, maxHp) {
    const fill = $('boss-fill');
    if (fill) fill.style.width = `${Math.max(0, (hp / maxHp) * 100)}%`;
  }

  hideBoss() {
    $('boss-bar')?.classList.add('hidden');
  }

  toast(text, glyph = '✦') {
    const layer = $('toast-layer');
    if (!layer) return;
    layer.innerHTML = '';
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="toast-glyph">${glyph}</span><span>${text}</span>`;
    layer.appendChild(el);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.remove(), 3000);
  }

  levelFlash() {
    const el = document.createElement('div');
    el.className = 'level-flash';
    document.getElementById('app').appendChild(el);
    setTimeout(() => el.remove(), 950);
  }

  spawnDamage(x, y, text, type = '') {
    const layer = $('damage-layer');
    if (!layer) return;
    const el = document.createElement('div');
    el.className = `dmg-number ${type}`;
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    layer.appendChild(el);
    const drift = (Math.random() - 0.5) * 36;
    const anim = el.animate(
      [
        { transform: 'translate(-50%, -50%) scale(0.8)', opacity: 0 },
        { transform: 'translate(-50%, -70%) scale(1.08)', opacity: 1, offset: 0.18 },
        { transform: `translate(calc(-50% + ${drift}px), -150%) scale(1)`, opacity: 0 },
      ],
      { duration: 900, easing: 'cubic-bezier(.18,.7,.3,1)' }
    );
    anim.onfinish = () => el.remove();
  }

  createEnemyBar(id, name, boss = false) {
    if (this.enemyBars.has(id)) return;
    const layer = $('enemy-layer');
    if (!layer) return;
    const el = document.createElement('div');
    el.className = `enemy-bar ${boss ? 'boss' : ''}`;
    el.innerHTML = `<div class="enemy-bar-name">${name}</div><div class="enemy-bar-track"><div class="enemy-bar-fill"></div></div>`;
    layer.appendChild(el);
    this.enemyBars.set(id, { el, fill: el.querySelector('.enemy-bar-fill'), visible: true });
  }

  updateEnemyBar(id, x, y, pct, visible) {
    const bar = this.enemyBars.get(id);
    if (!bar) return;
    if (!visible) {
      bar.el.style.display = 'none';
      return;
    }
    bar.el.style.display = 'block';
    bar.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    bar.fill.style.width = `${Math.max(0, pct) * 100}%`;
  }

  removeEnemyBar(id) {
    const bar = this.enemyBars.get(id);
    if (!bar) return;
    bar.el.remove();
    this.enemyBars.delete(id);
  }

  clearEnemyBars() {
    for (const [, bar] of this.enemyBars) bar.el.remove();
    this.enemyBars.clear();
  }

  drawMinimap(playerPos, enemies, bounds = 21) {
    const canvas = $('minimap');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2;
    const cy = h / 2;
    const scale = (w * 0.42) / bounds;
    // rings
    ctx.strokeStyle = 'rgba(231,196,119,0.22)';
    ctx.lineWidth = 1;
    for (const r of [6, 12, 18]) {
      ctx.beginPath();
      ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
      ctx.stroke();
    }
    // enemy dots
    for (const e of enemies) {
      if (!e.alive) continue;
      const x = cx + e.mesh.position.x * scale;
      const y = cy + e.mesh.position.z * scale;
      ctx.beginPath();
      ctx.fillStyle = e.boss ? '#ff7d6a' : '#e05e52';
      ctx.arc(x, y, e.boss ? 5 : 2.6, 0, Math.PI * 2);
      ctx.fill();
      if (e.boss) {
        ctx.strokeStyle = 'rgba(255,180,120,0.7)';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    // player arrow
    const px = cx + playerPos.x * scale;
    const py = cy + playerPos.z * scale;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(playerPos.facing || 0);
    ctx.fillStyle = '#f0d18a';
    ctx.shadowColor = 'rgba(240,209,138,0.8)';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, 2.5);
    ctx.lineTo(-5, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  openPause() {
    this.openModal('pause-modal');
  }

  closePause() {
    this.closeModal('pause-modal');
  }

  openHelp() {
    this.openModal('help-modal');
  }

  closeHelp() {
    this.closeModal('help-modal');
  }

  showResult({ victory, rewards, map, levelUps = 0 }) {
    const card = document.querySelector('.result-card');
    if (card) card.classList.toggle('defeat', !victory);
    const sigil = $('result-sigil');
    if (sigil) sigil.textContent = victory ? '✦' : '☠';
    $('result-kicker').textContent = victory ? 'Domínio purificado' : 'A chama se apagou';
    $('result-title').textContent = victory ? 'Vitória!' : 'Você caiu';
    $('result-sub').textContent = victory
      ? `${map?.name || 'O domínio'} está livre. A próxima brasa aguarda.`
      : 'A escuridão avança, mas a lenda ainda pode ser reescrita.';
    const rewardWrap = $('result-rewards');
    if (rewardWrap) {
      if (victory) {
        rewardWrap.innerHTML = `
          <span class="reward-chip"><span class="coin-icon">◆</span> +${rewards?.gold || 0} ouro</span>
          <span class="reward-chip">✦ +${rewards?.xp || 0} XP</span>
          ${levelUps ? `<span class="reward-chip">▲ ${levelUps} nível${levelUps > 1 ? 's' : ''}</span>` : ''}
        `;
      } else {
        rewardWrap.innerHTML = `<span class="reward-chip">Ouro preservado: ◆ ${rewards?.gold || 0}</span>`;
      }
    }
    this.openModal('result-modal');
  }

  hideResult() {
    this.closeModal('result-modal');
  }

  setSoundIcon(muted) {
    document.querySelectorAll('.icon-sound').forEach((el) => {
      el.parentElement?.classList.toggle('muted', muted);
    });
  }

  showBootProgress(pct) {
    const fill = $('boot-bar-fill');
    if (fill) fill.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  }
}
