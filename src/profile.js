import { CLASSES, CLASS_BY_ID, ITEM_BY_ID, SHOP_ITEMS, STARTER_EQUIPMENT, XP_THRESHOLDS, levelFromXp } from './data.js';

const SAVE_KEY = 'aethermoor-save-v1';

export function defaultProfile() {
  const classes = {};
  for (const c of CLASSES) {
    classes[c.id] = {
      xp: 0,
      level: 1,
      equipment: { weapon: STARTER_EQUIPMENT[c.id], armor: null, relic: null },
    };
  }
  return {
    version: 1,
    selectedClass: 'warden',
    gold: 320,
    potions: { health: 2, mana: 1 },
    completed: [],
    owned: [...new Set(Object.values(STARTER_EQUIPMENT))],
    classes,
  };
}

export function loadProfile() {
  const base = defaultProfile();
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return base;
    const data = JSON.parse(raw);
    if (!data || data.version !== 1) return base;
    const merged = {
      ...base,
      ...data,
      potions: { ...base.potions, ...(data.potions || {}) },
      completed: Array.isArray(data.completed) ? data.completed : [],
      owned: Array.isArray(data.owned) ? [...new Set([...base.owned, ...data.owned])] : base.owned,
      classes: { ...base.classes },
    };
    for (const c of CLASSES) {
      const saved = data.classes?.[c.id];
      if (saved) {
        merged.classes[c.id] = {
          xp: Number(saved.xp) || 0,
          level: Number(saved.level) || 1,
          equipment: { ...base.classes[c.id].equipment, ...(saved.equipment || {}) },
        };
      }
    }
    if (!CLASS_BY_ID[merged.selectedClass]) merged.selectedClass = 'warden';
    return merged;
  } catch {
    return base;
  }
}

export function saveProfile(profile) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(profile));
  } catch {
    /* storage unavailable */
  }
}

export function clearProfile() {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    /* ignore */
  }
}

export function getClassState(profile, classId = profile.selectedClass) {
  return profile.classes[classId] || profile.classes.warden;
}

export function getEquipped(profile, classId = profile.selectedClass) {
  const state = getClassState(profile, classId);
  return {
    weapon: state.equipment.weapon ? ITEM_BY_ID[state.equipment.weapon] : null,
    armor: state.equipment.armor ? ITEM_BY_ID[state.equipment.armor] : null,
    relic: state.equipment.relic ? ITEM_BY_ID[state.equipment.relic] : null,
  };
}

export function computeStats(profile, classId = profile.selectedClass) {
  const cls = CLASS_BY_ID[classId];
  const state = getClassState(profile, classId);
  const level = state.level || 1;
  const stats = {
    hp: cls.stats.hp + (level - 1) * 15,
    mana: cls.stats.mana + (level - 1) * 8,
    power: cls.stats.power + (level - 1) * 2.1,
    defense: cls.stats.defense + (level - 1) * 1.4,
    speed: cls.stats.speed,
    crit: cls.stats.crit,
  };
  const equipped = getEquipped(profile, classId);
  for (const item of Object.values(equipped)) {
    if (!item || !item.stats) continue;
    for (const [key, value] of Object.entries(item.stats)) {
      if (key === 'heal' || key === 'manaRestore') continue;
      if (stats[key] != null) stats[key] += value;
    }
  }
  stats.hp = Math.max(50, Math.round(stats.hp));
  stats.mana = Math.max(20, Math.round(stats.mana));
  stats.power = Math.max(1, Math.round(stats.power * 10) / 10);
  stats.defense = Math.max(0, Math.round(stats.defense * 10) / 10);
  stats.speed = Math.max(2.5, Math.round(stats.speed * 100) / 100);
  stats.crit = Math.min(0.75, Math.max(0, stats.crit));

  const weapon = equipped.weapon?.weapon || cls.weapon;
  const weaponItem = equipped.weapon;
  return {
    ...stats,
    maxHp: stats.hp,
    maxMana: stats.mana,
    weapon: { ...weapon },
    weaponItem,
    equipped,
    level,
  };
}

export function xpProgress(profile, classId = profile.selectedClass) {
  const state = getClassState(profile, classId);
  const level = state.level || 1;
  const current = state.xp || 0;
  const floor = XP_THRESHOLDS[Math.min(level - 1, XP_THRESHOLDS.length - 1)] || 0;
  const next = XP_THRESHOLDS[Math.min(level, XP_THRESHOLDS.length - 1)] || floor + 1000;
  return {
    current: current - floor,
    needed: Math.max(1, next - floor),
    percent: Math.min(100, ((current - floor) / Math.max(1, next - floor)) * 100),
    level,
  };
}

export function grantXp(profile, classId, amount) {
  const state = getClassState(profile, classId);
  state.xp = (state.xp || 0) + amount;
  const newLevel = Math.min(levelFromXp(state.xp), XP_THRESHOLDS.length);
  const gained = Math.max(0, newLevel - (state.level || 1));
  state.level = newLevel;
  saveProfile(profile);
  return { levels: gained, level: newLevel, xp: state.xp };
}

export function buyItem(profile, item, classId = profile.selectedClass) {
  if (!item) return { ok: false, reason: 'missing' };
  if (item.type === 'consumable') {
    if (profile.gold < item.price) return { ok: false, reason: 'poor' };
    profile.gold -= item.price;
    if (item.id === 'c_health') profile.potions.health = (profile.potions.health || 0) + 1;
    if (item.id === 'c_mana') profile.potions.mana = (profile.potions.mana || 0) + 1;
    saveProfile(profile);
    return { ok: true, kind: 'consumable' };
  }
  if (profile.owned.includes(item.id)) return { ok: false, reason: 'owned' };
  if (item.classId && item.classId !== classId) return { ok: false, reason: 'class' };
  if (profile.gold < item.price) return { ok: false, reason: 'poor' };
  profile.gold -= item.price;
  profile.owned.push(item.id);
  saveProfile(profile);
  return { ok: true, kind: 'gear' };
}

export function equipItem(profile, item, classId = profile.selectedClass) {
  if (!item || item.type === 'consumable') return { ok: false };
  if (item.classId && item.classId !== classId) return { ok: false, reason: 'class' };
  if (!profile.owned.includes(item.id)) return { ok: false, reason: 'not-owned' };
  const state = getClassState(profile, classId);
  const slot = item.type === 'weapon' ? 'weapon' : item.type === 'armor' ? 'armor' : 'relic';
  state.equipment[slot] = item.id;
  saveProfile(profile);
  return { ok: true, slot };
}

export function itemStatsText(item) {
  if (!item) return [];
  if (item.type === 'consumable') {
    if (item.id === 'c_health') return [['Vida', '+50%']];
    if (item.id === 'c_mana') return [['Mana', '+60%']];
  }
  const labels = { hp: 'Vida', mana: 'Mana', power: 'Poder', defense: 'Defesa', speed: 'Velocidade', crit: 'Crítico' };
  const out = [];
  for (const [key, value] of Object.entries(item.stats || {})) {
    if (!labels[key]) continue;
    let text = value > 0 ? `+${value}` : `${value}`;
    if (key === 'crit') text = `+${Math.round(value * 100)}%`;
    if (key === 'speed') text = value > 0 ? `+${Math.round(value * 100)}%` : `${Math.round(value * 100)}%`;
    out.push([labels[key], text]);
  }
  return out;
}

export function shopItemsFor(type, classId) {
  return SHOP_ITEMS.filter((item) => {
    if (type === 'weapon') return item.type === 'weapon' && item.classId === classId;
    if (type === 'armor') return item.type === 'armor';
    if (type === 'relic') return item.type === 'relic';
    if (type === 'consumable') return item.type === 'consumable';
    return false;
  });
}
