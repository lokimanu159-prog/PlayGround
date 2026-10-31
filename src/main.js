import './styles.css';
import * as THREE from 'three';
import { CLASSES, CLASS_BY_ID, ITEM_BY_ID } from './data.js';
import { buyItem, computeStats, equipItem, loadProfile, saveProfile } from './profile.js';
import { buildAdventureWorld, buildLobbyWorld, buildShowcaseWorld, buildTitleWorld } from './worlds.js';
import { animateHero, createHero } from './models.js';
import { GameUI } from './ui.js';
import { Input } from './input.js';
import { AudioEngine } from './audio.js';
import { FX } from './fx.js';
import { Adventure } from './combat.js';
import { generateArt } from './art.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

/* ------------------------------------------------------------------ */
/* Renderer                                                            */
/* ------------------------------------------------------------------ */

const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const hitFlash = document.createElement('div');
hitFlash.id = 'hit-flash';
document.getElementById('app').appendChild(hitFlash);

function flashHit() {
  hitFlash.getAnimations?.().forEach((a) => a.cancel());
  hitFlash.animate([{ opacity: 0.9 }, { opacity: 0 }], { duration: 280, easing: 'ease-out' });
}

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */

const profile = loadProfile();
const ui = new GameUI();
const input = new Input();
const audio = new AudioEngine();
ui.setProfile(profile);
ui.setSoundIcon(audio.muted);

let state = 'boot';
let world = null;
let titleWorld = null;
let showcaseWorld = null;
let showcaseHero = null;
let lobbyWorld = null;
let lobbyPlayer = null;
let adventure = null;
let currentMapId = null;
let paused = false;
let modalOpen = false;
let helpOpen = false;
let resultOpen = false;
let lobbyNearest = null;
let lobbyUiTimer = 0;

const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const cameraTarget = new THREE.Vector3();

/* ------------------------------------------------------------------ */
/* Audio unlock                                                        */
/* ------------------------------------------------------------------ */

let audioUnlocked = false;
function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  audio.init();
  const mood = state === 'adventure' ? (adventure?.boss ? 'boss' : 'adventure') : state === 'lobby' ? 'lobby' : 'title';
  audio.setMood(mood);
}
window.addEventListener('pointerdown', unlockAudio, { once: true });
window.addEventListener('keydown', unlockAudio, { once: true });

/* ------------------------------------------------------------------ */
/* World switching                                                     */
/* ------------------------------------------------------------------ */

function setActiveWorld(next) {
  world = next;
  if (!world) return;
  world.camera.aspect = window.innerWidth / window.innerHeight;
  world.camera.updateProjectionMatrix();
}

function resize() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  for (const w of [titleWorld, showcaseWorld, lobbyWorld, world]) {
    if (!w) continue;
    w.camera.aspect = window.innerWidth / window.innerHeight;
    w.camera.updateProjectionMatrix();
  }
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 250));

/* ------------------------------------------------------------------ */
/* Player helpers                                                      */
/* ------------------------------------------------------------------ */

function makePlayer(classId, position, facing = Math.PI) {
  const stats = computeStats(profile, classId);
  const mesh = createHero(classId);
  mesh.position.copy(position);
  mesh.rotation.y = facing;
  world.scene.add(mesh);
  return {
    classId,
    mesh,
    stats,
    hp: stats.maxHp,
    mana: stats.maxMana,
    facing,
    attackTimer: 0,
    attackAnim: -1,
    abilityAnim: -1,
    abilityCooldowns: [0, 0, 0],
    dodgeCooldown: 0,
    dodgeTimer: 0,
    dodgeDir: { x: 0, z: 1 },
    dodgeRatio: 0,
    invuln: 0,
    buffs: [],
  };
}

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

/* ------------------------------------------------------------------ */
/* Screen flow                                                         */
/* ------------------------------------------------------------------ */

function enterSelect() {
  if (!showcaseWorld) showcaseWorld = buildShowcaseWorld();
  state = 'select';
  paused = false;
  modalOpen = false;
  resultOpen = false;
  input.enabled = true;
  setActiveWorld(showcaseWorld);
  ui.showSelect();
  selectClass(profile.selectedClass);
  audio.setMood('title');
}

function selectClass(classId) {
  if (!CLASS_BY_ID[classId]) return;
  profile.selectedClass = classId;
  saveProfile(profile);
  ui.updateSelectPanel(classId, profile);
  setShowcaseHero(classId);
  audio.play('ui');
}

function setShowcaseHero(classId) {
  if (!showcaseWorld) return;
  if (showcaseHero) showcaseWorld.scene.remove(showcaseHero);
  showcaseHero = createHero(classId);
  showcaseHero.position.set(0, 0.41, 0);
  showcaseHero.scale.setScalar(0.78);
  showcaseHero.rotation.y = -0.05;
  showcaseWorld.scene.add(showcaseHero);
  showcaseWorld.setClass(classId);
}

function enterLobby() {
  if (!lobbyWorld) {
    lobbyWorld = buildLobbyWorld();
    lobbyWorld.camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 140);
  }
  if (lobbyPlayer) lobbyWorld.scene.remove(lobbyPlayer.mesh);
  state = 'lobby';
  paused = false;
  modalOpen = false;
  helpOpen = false;
  resultOpen = false;
  adventure = null;
  setActiveWorld(lobbyWorld);
  lobbyPlayer = makePlayer(profile.selectedClass, lobbyWorld.playerStart.clone(), Math.PI);
  ui.selectedClassId = profile.selectedClass;
  ui.showLobby(profile);
  ui.hideResult();
  ui.closePause();
  ui.closeHelp();
  ui.hideInteract();
  ui.setSoundIcon(audio.muted);
  input.enabled = true;
  lobbyNearest = null;
  lobbyUiTimer = 0;
  const cam = lobbyWorld.camera;
  cam.position.set(lobbyPlayer.mesh.position.x, 9.2, lobbyPlayer.mesh.position.z + 8.4);
  cam.lookAt(lobbyPlayer.mesh.position.x, 0.9, lobbyPlayer.mesh.position.z - 2.2);
  audio.setMood('lobby');
  const cls = CLASS_BY_ID[profile.selectedClass];
  ui.toast(`${cls.name}, ${cls.title}`, '✦');
}

function startAdventure(mapId) {
  if (adventure) {
    adventure.dispose();
    adventure = null;
  }
  const w = buildAdventureWorld(mapId);
  currentMapId = mapId;
  setActiveWorld(w);
  const player = makePlayer(profile.selectedClass, w.playerStart.clone(), Math.PI);
  const fx = new FX(w.scene);
  state = 'adventure';
  paused = false;
  modalOpen = false;
  resultOpen = false;
  input.enabled = true;
  ui.hideResult();
  ui.closePause();
  ui.closeHelp();
  ui.showAdventure(profile);
  ui.currentClass = CLASS_BY_ID[profile.selectedClass];
  ui.setupAbilities(ui.currentClass);
  ui.clearEnemyBars();
  ui.hideBoss();
  ui.updateBuffs([]);
  ui.setSoundIcon(audio.muted);
  adventure = new Adventure({
    world: w,
    player,
    profile,
    ui,
    audio,
    input,
    camera: w.camera,
    fx,
    onExit: handleAdventureExit,
    onPlayerHit: flashHit,
    onFinished: handleAdventureFinished,
  });
  adventure.start();
  const cam = w.camera;
  cam.position.set(player.mesh.position.x, 9.7, player.mesh.position.z + 8.7);
  cam.lookAt(player.mesh.position.x, 0.9, player.mesh.position.z - 2.2);
  audio.init();
  audio.setMood('adventure');
}

function handleAdventureExit() {
  adventure = null;
  enterLobby();
}

function handleAdventureFinished() {
  resultOpen = true;
  modalOpen = true;
  input.enabled = false;
}

function retryMap() {
  if (!currentMapId) return;
  if (adventure) {
    adventure.dispose();
    adventure = null;
  }
  ui.hideResult();
  startAdventure(currentMapId);
}

function togglePause() {
  if (state !== 'adventure' || !adventure || adventure.finished || resultOpen) return;
  if (paused) {
    resumeGame();
  } else {
    paused = true;
    modalOpen = true;
    input.enabled = false;
    ui.openPause();
    audio.play('ui');
  }
}

function resumeGame() {
  paused = false;
  modalOpen = false;
  ui.closePause();
  input.enabled = true;
  audio.play('ui');
}

function openShop() {
  if (state !== 'lobby') return;
  modalOpen = true;
  input.enabled = false;
  ui.hideInteract();
  ui.openShop(profile);
  audio.play('ui');
}

function openMaps() {
  if (state !== 'lobby') return;
  modalOpen = true;
  input.enabled = false;
  ui.hideInteract();
  ui.openMaps(profile);
  audio.play('ui');
}

function closeModal(id) {
  if (id === 'help') {
    closeHelp();
    return;
  }
  ui.closeModal(`${id}-modal`);
  modalOpen = false;
  input.enabled = state === 'lobby' || (state === 'adventure' && !paused && !resultOpen);
  audio.play('ui');
}

function openHelp() {
  helpOpen = true;
  modalOpen = true;
  input.enabled = false;
  ui.openHelp();
  audio.play('ui');
}

function closeHelp() {
  helpOpen = false;
  ui.closeHelp();
  if (state === 'adventure' && paused) {
    modalOpen = true;
    input.enabled = false;
  } else {
    modalOpen = false;
    input.enabled = state === 'lobby' || (state === 'adventure' && !paused && !resultOpen);
  }
  audio.play('ui');
}

function buy(id) {
  const item = ITEM_BY_ID[id];
  const res = buyItem(profile, item, profile.selectedClass);
  if (res.ok) {
    audio.play('buy');
    ui.toast(`${item.name} ${item.type === 'consumable' ? 'comprado' : 'adquirido'}`, '◆');
  } else {
    audio.play('error');
    const messages = {
      poor: 'Ouro insuficiente.',
      owned: 'Você já possui este item.',
      class: 'Este item não serve para sua classe.',
      missing: 'Item indisponível.',
    };
    ui.toast(messages[res.reason] || 'Compra recusada.', '✦');
  }
  ui.renderShop();
  ui.updateProfileUI(profile);
}

function equip(id) {
  const item = ITEM_BY_ID[id];
  const res = equipItem(profile, item, profile.selectedClass);
  if (res.ok) {
    audio.play('buy');
    ui.toast(`${item.name} equipado`, '✦');
  } else {
    audio.play('error');
    ui.toast('Não foi possível equipar.', '✦');
  }
  ui.renderShop();
  ui.updateProfileUI(profile);
}

function toggleSound() {
  audio.init();
  audio.toggleMute();
  ui.setSoundIcon(audio.muted);
  if (!audio.muted) audio.play('ui');
}

/* ------------------------------------------------------------------ */
/* UI wiring                                                           */
/* ------------------------------------------------------------------ */

Object.assign(ui.handlers, {
  onStart: () => {
    unlockAudio();
    enterSelect();
  },
  onBackTitle: () => {
    state = 'title';
    paused = false;
    modalOpen = false;
    resultOpen = false;
    input.enabled = true;
    setActiveWorld(titleWorld);
    ui.showTitle();
    audio.setMood('title');
  },
  onSelectClass: (id) => selectClass(id),
  onConfirmClass: () => {
    profile.selectedClass = ui.selectedClassId;
    saveProfile(profile);
    enterLobby();
  },
  onOpenShop: () => openShop(),
  onOpenMaps: () => openMaps(),
  onCloseModal: (id) => closeModal(id),
  onEnterMap: (mapId) => startAdventure(mapId),
  onLobby: () => {
    if (state === 'adventure' && adventure) adventure.exitToLobby();
  },
  onPause: () => togglePause(),
  onResume: () => resumeGame(),
  onPauseLobby: () => {
    if (adventure) adventure.exitToLobby();
  },
  onRetry: () => retryMap(),
  onResultLobby: () => {
    if (adventure) adventure.exitToLobby();
    else enterLobby();
  },
  onOpenHelp: () => openHelp(),
  onCloseHelp: () => closeHelp(),
  onBuy: (id) => buy(id),
  onEquip: (id) => equip(id),
  onSound: () => toggleSound(),
});

input.on('uiClick', () => {
  audio.init();
  audio.play('ui');
});
input.on('attack', () => {
  if (state === 'adventure' && adventure && !paused && !modalOpen) adventure.queueAttack();
});
input.on('ability', (index) => {
  if (state === 'adventure' && adventure && !paused && !modalOpen) adventure.useAbility(index);
});
input.on('dodge', () => {
  if (state === 'adventure' && adventure && !paused && !modalOpen) adventure.dodge();
});
input.on('potion', (kind) => {
  if (state === 'adventure' && adventure && !paused && !modalOpen) adventure.usePotion(kind || 'health');
});
input.on('pause', () => {
  if (state === 'adventure') {
    if (helpOpen) closeHelp();
    else togglePause();
  } else if (state === 'lobby' && modalOpen) {
    closeAnyLobbyModal();
  }
});
input.on('lobby', () => {
  if (state === 'adventure' && adventure) adventure.exitToLobby();
});

function closeAnyLobbyModal() {
  if (helpOpen) {
    closeHelp();
    return;
  }
  const shop = document.getElementById('shop-modal');
  const maps = document.getElementById('maps-modal');
  if (shop && !shop.classList.contains('hidden')) closeModal('shop');
  else if (maps && !maps.classList.contains('hidden')) closeModal('maps');
}

/* ------------------------------------------------------------------ */
/* Lobby interaction                                                   */
/* ------------------------------------------------------------------ */

function isDescendant(obj, root) {
  let o = obj;
  while (o) {
    if (o === root) return true;
    o = o.parent;
  }
  return false;
}

canvas.addEventListener('pointerdown', (event) => {
  if (state !== 'lobby' || modalOpen || !lobbyWorld) return;
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, lobbyWorld.camera);
  const roots = [lobbyWorld.vendor, lobbyWorld.dog, lobbyWorld.mapBoard].filter(Boolean);
  const hits = raycaster.intersectObjects(roots, true);
  if (!hits.length) return;
  const root = roots.find((r) => isDescendant(hits[0].object, r));
  if (!root) return;
  const p = lobbyPlayer.mesh.position;
  const type = root === lobbyWorld.dog ? 'dog' : root === lobbyWorld.mapBoard ? 'maps' : 'shop';
  if (type === 'dog') {
    const d = Math.hypot(p.x - -3.65, p.z - -4.55);
    if (d < 6.5) {
      ui.toast('Brasa fareja sua bolsa e abana o rabo. “Ele aprova esta compra.”', '🐕');
      audio.play('ui');
    } else {
      ui.toast('Um cão-guia observa você de longe.', '✦');
    }
    return;
  }
  const it = lobbyWorld.interactables.find((i) => i.type === type);
  const d = it ? Math.hypot(p.x - it.x, p.z - it.z) : 99;
  if (d > (it?.range || 3) + 2.4) {
    ui.toast(type === 'maps' ? 'Aproxime-se da Pedra dos Domínios.' : 'Aproxime-se de Maelis.', '✦');
    return;
  }
  if (type === 'maps') openMaps();
  else openShop();
});

document.getElementById('interact-prompt')?.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!lobbyNearest) return;
  if (lobbyNearest.type === 'shop') openShop();
  else openMaps();
});

/* ------------------------------------------------------------------ */
/* Per-frame updates                                                   */
/* ------------------------------------------------------------------ */

function updateLobby(dt, t) {
  if (!lobbyPlayer || !lobbyWorld) return;
  const p = lobbyPlayer;
  const canMove = !modalOpen && !helpOpen;
  const move = canMove ? input.getMove() : { x: 0, y: 0, magnitude: 0 };
  let moving = 0;
  if (move.magnitude > 0.08) {
    const speed = p.stats.speed * 1.35;
    p.mesh.position.x += move.x * speed * dt;
    p.mesh.position.z += move.y * speed * dt;
    collide(p.mesh.position, lobbyWorld.obstacles, 0.46, lobbyWorld.bounds);
    p.facing = Math.atan2(move.x, move.y);
    p.mesh.rotation.y = p.facing;
    moving = move.magnitude;
  }
  animateHero(p.mesh, t, { moving });

  let nearest = null;
  let nearestD = Infinity;
  for (const it of lobbyWorld.interactables) {
    const d = Math.hypot(p.mesh.position.x - it.x, p.mesh.position.z - it.z);
    if (d <= it.range && d < nearestD) {
      nearest = it;
      nearestD = d;
    }
  }
  lobbyNearest = nearest;
  if (nearest && !modalOpen) ui.showInteract(nearest.label);
  else ui.hideInteract();

  const cam = lobbyWorld.camera;
  cameraTarget.set(p.mesh.position.x, 9.2, p.mesh.position.z + 8.4);
  cam.position.lerp(cameraTarget, 1 - Math.exp(-dt * 4.2));
  cam.lookAt(p.mesh.position.x, 0.9, p.mesh.position.z - 2.2);

  lobbyUiTimer -= dt;
  if (lobbyUiTimer <= 0) {
    lobbyUiTimer = 0.3;
    ui.updateProfileUI(profile);
  }
}

function updateAdventure(dt, t) {
  if (!adventure) return;
  if (!paused && !resultOpen) adventure.update(dt, t);
  const p = adventure.player.mesh.position;
  const cam = adventure.world.camera;
  const shake = adventure.shake || 0;
  cameraTarget.set(
    p.x + (Math.random() - 0.5) * shake * 0.55,
    9.7 + (Math.random() - 0.5) * shake * 0.4,
    p.z + 8.7 + (Math.random() - 0.5) * shake * 0.55
  );
  cam.position.lerp(cameraTarget, 1 - Math.exp(-dt * 5.2));
  cam.lookAt(p.x, 0.9, p.z - 2.2);
}

function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, clock.getDelta());
  const t = performance.now() / 1000;
  if (!world) return;

  if (state === 'title' && titleWorld) {
    titleWorld.update(t, dt);
  } else if (state === 'select' && showcaseWorld) {
    showcaseWorld.update(t, dt);
    if (showcaseHero) animateHero(showcaseHero, t, { moving: 0 });
  } else if (state === 'lobby' && lobbyWorld) {
    lobbyWorld.update(t, dt);
    updateLobby(dt, t);
  } else if (state === 'adventure' && adventure) {
    adventure.world.update(t, dt);
    updateAdventure(dt, t);
  }

  renderer.render(world.scene, world.camera);
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

async function boot() {
  ui.showBootProgress(8);
  await nextFrame();

  titleWorld = buildTitleWorld();
  setActiveWorld(titleWorld);
  renderer.render(titleWorld.scene, titleWorld.camera);
  ui.showBootProgress(24);
  await nextFrame();

  const art = generateArt();
  ui.setPortraits(art.portraits);
  ui.setMapThumbs(art.thumbs);
  ui.showBootProgress(72);
  await nextFrame();

  showcaseWorld = buildShowcaseWorld();
  ui.buildClassCards(CLASSES, profile.selectedClass);
  ui.updateSelectPanel(profile.selectedClass, profile);
  ui.setSoundIcon(audio.muted);
  ui.showBootProgress(94);
  await nextFrame();

  state = 'title';
  setActiveWorld(titleWorld);
  ui.showTitle();
  ui.showBootProgress(100);
  ui.hideBoot();
  audio.setMood('title');
  clock.start();
  loop();
}

boot().catch((err) => {
  console.error('Falha ao iniciar Lendas de Aethermoor', err);
  ui.hideBoot();
  ui.showTitle();
  state = 'title';
  if (titleWorld) setActiveWorld(titleWorld);
});
