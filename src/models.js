import * as THREE from 'three';

const GEO = {
  sphere: new THREE.SphereGeometry(1, 12, 9),
  sphereLow: new THREE.SphereGeometry(1, 8, 6),
  box: new THREE.BoxGeometry(1, 1, 1),
  cylinder: new THREE.CylinderGeometry(1, 1, 1, 10),
  cone: new THREE.ConeGeometry(1, 1, 8),
  octa: new THREE.OctahedronGeometry(1, 0),
  torus: new THREE.TorusGeometry(1, 0.16, 6, 14),
  capsule: new THREE.CapsuleGeometry(1, 1, 3, 8),
  plane: new THREE.PlaneGeometry(1, 1),
};

export function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.72,
    metalness: opts.metalness ?? 0.08,
    flatShading: opts.flatShading ?? true,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    depthWrite: opts.depthWrite ?? true,
  });
}

export function addMesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.scale.set(...scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

export function capsule(parent, material, radius, length, position, rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const geo = new THREE.CapsuleGeometry(radius, length, 4, 8);
  return addMesh(parent, geo, material, position, rotation, scale);
}

export function glowMat(color, intensity = 2.2, opacity = 1) {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: intensity,
    roughness: 0.35,
    metalness: 0.1,
    transparent: opacity < 1,
    opacity,
  });
}

function hideShadows(group) {
  group.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
}

/* ------------------------------------------------------------------ */
/* Weapons                                                             */
/* ------------------------------------------------------------------ */

function makeSword(material, accent, scale = 1) {
  const g = new THREE.Group();
  const blade = addMesh(g, GEO.box, material, [0, -0.62, 0], [0, 0, 0], [0.075 * scale, 0.95 * scale, 0.022 * scale]);
  const edge = addMesh(g, GEO.box, glowMat(accent, 1.2), [0, -0.62, 0.025], [0, 0, 0], [0.018 * scale, 0.92 * scale, 0.008]);
  edge.castShadow = false;
  addMesh(g, GEO.box, mat('#b8934f', { metalness: 0.65, roughness: 0.35 }), [0, -0.14, 0], [0, 0, 0], [0.3 * scale, 0.055, 0.06]);
  addMesh(g, GEO.cylinder, mat('#5a3a22'), [0, -0.04, 0], [0, 0, 0], [0.035 * scale, 0.2, 0.035 * scale]);
  addMesh(g, GEO.sphereLow, mat('#d4b56c', { metalness: 0.7, roughness: 0.3 }), [0, 0.07, 0], [0, 0, 0], [0.05, 0.05, 0.05]);
  return g;
}

function makeDagger(material, accent, side = 1, scale = 1) {
  const g = new THREE.Group();
  addMesh(g, GEO.box, material, [0, -0.34, 0], [0, 0, 0], [0.055 * scale, 0.55 * scale, 0.018 * scale]);
  addMesh(g, GEO.cone, material, [0, -0.67, 0], [Math.PI, 0, 0], [0.055 * scale, 0.18, 0.018 * scale]);
  const edge = addMesh(g, GEO.box, glowMat(accent, 1.1), [side * 0.026, -0.34, 0.02], [0, 0, 0], [0.008, 0.5 * scale, 0.005]);
  edge.castShadow = false;
  addMesh(g, GEO.box, mat('#9c7a44', { metalness: 0.6 }), [0, -0.06, 0], [0, 0, 0], [0.18 * scale, 0.035, 0.04]);
  addMesh(g, GEO.cylinder, mat('#241a16'), [0, 0.04, 0], [0, 0, 0], [0.026, 0.15, 0.026]);
  return g;
}

function makeStaff(woodMat, accent, scale = 1) {
  const g = new THREE.Group();
  addMesh(g, GEO.cylinder, woodMat, [0, -0.2, 0], [0, 0, 0], [0.032 * scale, 1.75 * scale, 0.032 * scale]);
  addMesh(g, GEO.torus, mat('#a6803d', { metalness: 0.7 }), [0, 0.62, 0], [Math.PI / 2, 0, 0], [0.11 * scale, 0.11, 0.11]);
  const orb = addMesh(g, GEO.sphere, glowMat(accent, 2.4), [0, 0.68, 0], [0, 0, 0], [0.12 * scale, 0.12 * scale, 0.12 * scale]);
  orb.castShadow = false;
  const light = new THREE.PointLight(accent, 1.1, 3.5, 2);
  light.position.set(0, 0.68, 0);
  g.add(light);
  addMesh(g, GEO.cone, mat('#6b4b2b'), [0, -1.07, 0], [Math.PI, 0, 0], [0.055, 0.16, 0.055]);
  return g;
}

function makeBow(woodMat, accent, scale = 1) {
  const g = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.62, 0),
    new THREE.Vector3(0.17, 0.32, 0),
    new THREE.Vector3(0.2, 0, 0),
    new THREE.Vector3(0.17, -0.34, 0),
    new THREE.Vector3(0, -0.65, 0),
  ]);
  const tube = new THREE.TubeGeometry(curve, 12, 0.027 * scale, 5, false);
  addMesh(g, tube, woodMat, [0, 0, 0]);
  const stringGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0.62, 0),
    new THREE.Vector3(-0.07, 0, 0.02),
    new THREE.Vector3(0, -0.65, 0),
  ]);
  const string = new THREE.Line(stringGeo, new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.8 }));
  g.add(string);
  addMesh(g, GEO.sphereLow, glowMat(accent, 1.4), [0.2, 0.16, 0], [0, 0, 0], [0.035, 0.035, 0.035]);
  return g;
}

function makeWhip(handleMat, accent) {
  const g = new THREE.Group();
  addMesh(g, GEO.cylinder, handleMat, [0, -0.16, 0], [0, 0, 0], [0.045, 0.34, 0.045]);
  addMesh(g, GEO.sphereLow, mat('#d4b56c', { metalness: 0.7 }), [0, 0.04, 0], [0, 0, 0], [0.065, 0.065, 0.065]);
  addMesh(g, GEO.torus, mat('#d4b56c', { metalness: 0.65 }), [0, 0.01, 0], [Math.PI / 2, 0, 0], [0.055, 0.055, 0.055]);
  const segments = [];
  const n = 18;
  for (let i = 0; i < n; i++) {
    const size = 0.04 - (i / n) * 0.017;
    const m = addMesh(g, GEO.sphereLow, glowMat(accent, 1.7 + (i / n) * 0.6), [0, -0.25, 0], [0, 0, 0], [size, size, size]);
    m.castShadow = false;
    segments.push(m);
  }
  return { group: g, segments };
}

function makeShield(metalMat, accent) {
  const g = new THREE.Group();
  addMesh(g, GEO.cylinder, metalMat, [0, 0, 0], [Math.PI / 2, 0, 0], [0.34, 0.055, 0.34]);
  addMesh(g, GEO.cylinder, mat('#c7a45e', { metalness: 0.7, roughness: 0.3 }), [0, 0, 0.04], [Math.PI / 2, 0, 0], [0.24, 0.045, 0.24]);
  addMesh(g, GEO.sphereLow, glowMat(accent, 1.1), [0, 0, 0.09], [0, 0, 0], [0.08, 0.08, 0.035]);
  const rim = addMesh(g, GEO.torus, mat('#c7a45e', { metalness: 0.7 }), [0, 0, 0.02], [0, 0, 0], [0.34, 0.34, 0.34]);
  rim.rotation.z = 0;
  return g;
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const HERO_STYLE = {
  warden: {
    skin: '#d6a47d',
    outfit: '#3f5d8f',
    outfit2: '#243a5c',
    accent: '#8fc2ff',
    metal: '#b8c9e2',
    hair: '#5a3a25',
    cape: '#294a78',
  },
  sorceress: {
    skin: '#e1b08d',
    outfit: '#4d2c7a',
    outfit2: '#2a1747',
    accent: '#ff9b52',
    metal: '#c9a15c',
    hair: '#ead7ff',
    cape: '#3a1f60',
  },
  assassin: {
    skin: '#c99b77',
    outfit: '#22303a',
    outfit2: '#111a21',
    accent: '#45e0cd',
    metal: '#8fa4ad',
    hair: '#20201e',
    cape: '#152229',
  },
  huntress: {
    skin: '#d9a77e',
    outfit: '#3e5b38',
    outfit2: '#263b26',
    accent: '#b8e07c',
    metal: '#b08e54',
    hair: '#7a3f22',
    cape: '#2e482b',
  },
  whipdancer: {
    skin: '#dda98a',
    outfit: '#741f31',
    outfit2: '#3c0e1b',
    accent: '#ffcf73',
    metal: '#e0b65f',
    hair: '#2a1212',
    cape: '#4a1120',
  },
};

export function createHero(classId) {
  const style = HERO_STYLE[classId] || HERO_STYLE.warden;
  const root = new THREE.Group();
  root.name = `hero-${classId}`;
  const rig = new THREE.Group();
  root.add(rig);

  const skin = mat(style.skin, { roughness: 0.85 });
  const outfit = mat(style.outfit, { roughness: 0.8 });
  const outfit2 = mat(style.outfit2, { roughness: 0.85 });
  const accent = mat(style.accent, { roughness: 0.45, metalness: 0.2 });
  const metal = mat(style.metal, { roughness: 0.4, metalness: 0.65 });
  const hair = mat(style.hair, { roughness: 0.9 });
  const leather = mat('#3a2a20', { roughness: 0.95 });
  const gold = mat('#c9a25c', { roughness: 0.35, metalness: 0.75 });
  const capeMat = mat(style.cape, { roughness: 0.9, side: THREE.DoubleSide });

  // Hips / legs
  const hips = new THREE.Group();
  hips.position.y = 0.84;
  rig.add(hips);

  const legL = new THREE.Group();
  legL.position.set(-0.13, 0, 0);
  hips.add(legL);
  const legR = new THREE.Group();
  legR.position.set(0.13, 0, 0);
  hips.add(legR);

  const legGeo = new THREE.CapsuleGeometry(0.075, 0.48, 4, 7);
  const bootGeo = new THREE.BoxGeometry(0.16, 0.18, 0.27);
  for (const [leg, side] of [[legL, -1], [legR, 1]]) {
    addMesh(leg, legGeo, outfit2, [0, -0.33, 0]);
    addMesh(leg, bootGeo, leather, [0, -0.66, 0.045]);
    if (classId === 'warden') {
      addMesh(leg, GEO.box, metal, [0, -0.28, 0.055], [0, 0, 0], [0.13, 0.34, 0.06]);
    }
  }

  // Torso
  const torso = new THREE.Group();
  torso.position.y = 1.2;
  rig.add(torso);
  addMesh(torso, GEO.cylinder, outfit, [0, 0, 0], [0, 0, 0], [0.235, 0.44, 0.17]);
  addMesh(torso, GEO.cylinder, outfit2, [0, -0.25, 0], [0, 0, 0], [0.215, 0.1, 0.16]);
  addMesh(torso, GEO.box, gold, [0, -0.2, 0.155], [0, 0, 0], [0.28, 0.055, 0.03]);
  addMesh(torso, GEO.sphereLow, gold, [0, -0.2, 0.18], [0, 0, 0], [0.035, 0.035, 0.018]);

  // Chest details per class
  if (classId === 'warden') {
    addMesh(torso, GEO.box, metal, [0, 0.06, 0.16], [0, 0, 0], [0.33, 0.34, 0.06]);
    addMesh(torso, GEO.box, accent, [0, 0.1, 0.195], [0, 0, 0], [0.035, 0.22, 0.015]);
    addMesh(torso, GEO.box, metal, [0, -0.09, 0.19], [0, 0, 0], [0.25, 0.045, 0.03]);
  } else if (classId === 'sorceress') {
    addMesh(torso, GEO.cone, outfit2, [0, -0.52, 0], [0, 0, 0], [0.42, 0.9, 0.32]);
    addMesh(torso, GEO.cylinder, gold, [0, -0.16, 0], [0, 0, 0], [0.235, 0.045, 0.18]);
    addMesh(torso, GEO.sphereLow, glowMat(style.accent, 2), [0, 0.02, 0.18], [0, 0, 0], [0.055, 0.055, 0.02]);
  } else if (classId === 'assassin') {
    addMesh(torso, GEO.box, leather, [0, 0.03, 0.15], [0, 0, 0], [0.3, 0.3, 0.05]);
    addMesh(torso, GEO.box, accent, [-0.12, 0.09, 0.19], [0, 0, 0.5], [0.02, 0.2, 0.012]);
    addMesh(torso, GEO.box, accent, [0.12, 0.09, 0.19], [0, 0, -0.5], [0.02, 0.2, 0.012]);
  } else if (classId === 'huntress') {
    addMesh(torso, GEO.box, leather, [0, 0.02, 0.16], [0, 0, 0], [0.28, 0.32, 0.045]);
    addMesh(torso, GEO.box, outfit2, [0, -0.06, 0.19], [0, 0, 0.15], [0.26, 0.07, 0.02]);
    const quiver = addMesh(torso, GEO.cylinder, leather, [0.16, 0.06, -0.2], [0.2, 0, -0.2], [0.09, 0.46, 0.09]);
    quiver.rotation.z = -0.25;
    for (let i = 0; i < 3; i++) {
      addMesh(torso, GEO.cylinder, mat('#d8c59a'), [0.2 + i * 0.025, 0.33, -0.22], [0.2, 0, 0], [0.008, 0.38, 0.008]);
    }
  } else if (classId === 'whipdancer') {
    addMesh(torso, GEO.cylinder, outfit2, [0, -0.28, 0], [0, 0, 0], [0.26, 0.24, 0.19]);
    addMesh(torso, GEO.box, gold, [0, -0.05, 0.17], [0, 0, 0], [0.3, 0.05, 0.03]);
    addMesh(torso, GEO.box, gold, [-0.1, 0.12, 0.18], [0, 0, 0.6], [0.02, 0.16, 0.01]);
    addMesh(torso, GEO.box, gold, [0.1, 0.12, 0.18], [0, 0, -0.6], [0.02, 0.16, 0.01]);
  }

  // Cape
  const capeGeo = new THREE.PlaneGeometry(0.52, 0.9, 4, 5);
  const cape = addMesh(rig, capeGeo, capeMat, [0, 1.16, -0.14], [0.09, 0, 0]);
  cape.castShadow = false;

  // Arms
  const armL = new THREE.Group();
  armL.position.set(-0.29, 1.42, 0);
  rig.add(armL);
  const armR = new THREE.Group();
  armR.position.set(0.29, 1.42, 0);
  rig.add(armR);

  const armGeo = new THREE.CapsuleGeometry(0.06, 0.34, 4, 7);
  for (const [arm, side] of [[armL, -1], [armR, 1]]) {
    addMesh(arm, armGeo, classId === 'warden' ? metal : outfit, [0, -0.2, 0]);
    addMesh(arm, GEO.sphereLow, skin, [0, -0.43, 0], [0, 0, 0], [0.075, 0.075, 0.075]);
    if (classId === 'warden') {
      addMesh(arm, GEO.sphereLow, metal, [0, 0.02, 0], [0, 0, 0], [0.16, 0.13, 0.17]);
    }
    if (classId === 'whipdancer') {
      addMesh(arm, GEO.torus, gold, [0, -0.36, 0], [Math.PI / 2, 0, 0], [0.062, 0.062, 0.062]);
    }
    if (classId === 'assassin') {
      addMesh(arm, GEO.box, leather, [0, -0.3, 0.02], [0, 0, 0], [0.115, 0.08, 0.115]);
    }
  }

  // Shoulder silhouette
  if (classId === 'sorceress' || classId === 'whipdancer') {
    addMesh(rig, GEO.sphereLow, outfit2, [-0.27, 1.46, 0], [0, 0, 0], [0.12, 0.12, 0.13]);
    addMesh(rig, GEO.sphereLow, outfit2, [0.27, 1.46, 0], [0, 0, 0], [0.12, 0.12, 0.13]);
  }

  // Head
  const head = new THREE.Group();
  head.position.y = 1.7;
  rig.add(head);
  addMesh(head, GEO.sphere, skin, [0, 0, 0], [0, 0, 0], [0.17, 0.19, 0.165]);
  addMesh(head, GEO.sphereLow, skin, [0, -0.05, 0.14], [0, 0, 0], [0.055, 0.04, 0.04]);
  // Eyes
  addMesh(head, GEO.sphereLow, mat('#141018'), [-0.06, 0.02, 0.15], [0, 0, 0], [0.02, 0.023, 0.015]);
  addMesh(head, GEO.sphereLow, mat('#141018'), [0.06, 0.02, 0.15], [0, 0, 0], [0.02, 0.023, 0.015]);

  if (classId === 'warden') {
    addMesh(head, GEO.sphere, metal, [0, 0.045, -0.005], [0, 0, 0], [0.185, 0.16, 0.18]);
    addMesh(head, GEO.box, metal, [0, 0.0, 0.165], [0, 0, 0], [0.055, 0.16, 0.04]);
    addMesh(head, GEO.box, accent, [0, 0.06, 0.19], [0, 0, 0], [0.1, 0.025, 0.02]);
    const plume = addMesh(head, GEO.cone, mat('#b33a38'), [0, 0.27, -0.04], [0.1, 0, 0], [0.07, 0.26, 0.07]);
    plume.rotation.z = 0.2;
    addMesh(head, GEO.box, metal, [-0.18, 0.02, -0.02], [0, 0, 0], [0.04, 0.15, 0.14]);
    addMesh(head, GEO.box, metal, [0.18, 0.02, -0.02], [0, 0, 0], [0.04, 0.15, 0.14]);
  } else if (classId === 'sorceress') {
    addMesh(head, GEO.sphere, hair, [0, 0.03, -0.05], [0, 0, 0], [0.19, 0.19, 0.19]);
    addMesh(head, GEO.cylinder, hair, [0, -0.23, -0.11], [0, 0, 0], [0.11, 0.34, 0.08]);
    const brim = addMesh(head, GEO.cylinder, outfit2, [0, 0.18, 0], [0, 0, 0], [0.42, 0.035, 0.42]);
    brim.rotation.z = 0.05;
    addMesh(head, GEO.cone, outfit2, [0.03, 0.4, 0], [0.06, 0, -0.08], [0.2, 0.45, 0.2]);
    addMesh(head, GEO.torus, gold, [0.03, 0.23, 0], [Math.PI / 2, 0, 0], [0.17, 0.17, 0.17]);
    addMesh(head, GEO.sphereLow, glowMat(style.accent, 1.6), [0.02, 0.22, 0.19], [0, 0, 0], [0.035, 0.035, 0.02]);
  } else if (classId === 'assassin') {
    addMesh(head, GEO.sphere, outfit2, [0, 0.04, -0.02], [0, 0, 0], [0.205, 0.2, 0.2]);
    addMesh(head, GEO.box, outfit2, [0, 0.05, 0.15], [0, 0, 0], [0.22, 0.11, 0.06]);
    addMesh(head, GEO.box, accent, [0, 0.06, 0.19], [0, 0, 0], [0.14, 0.018, 0.012]);
    addMesh(head, GEO.cone, outfit2, [0, 0.23, -0.02], [0, 0, 0], [0.18, 0.22, 0.18]);
    const scarf = addMesh(rig, GEO.plane, mat(style.accent, { transparent: true, opacity: 0.55, side: THREE.DoubleSide }), [0.16, 1.34, -0.12], [0.2, 0.1, -0.3], [0.12, 0.65, 1]);
    scarf.castShadow = false;
  } else if (classId === 'huntress') {
    addMesh(head, GEO.sphere, hair, [0, 0.02, -0.03], [0, 0, 0], [0.19, 0.2, 0.19]);
    addMesh(head, GEO.cone, outfit2, [0, 0.18, -0.01], [0, 0, 0], [0.23, 0.34, 0.23]);
    addMesh(head, GEO.cylinder, hair, [0.15, -0.18, -0.08], [0, 0, -0.15], [0.06, 0.32, 0.06]);
    addMesh(head, GEO.cone, mat('#e8dfc9'), [0.06, 0.28, -0.05], [0.2, 0, -0.3], [0.025, 0.15, 0.025]);
  } else if (classId === 'whipdancer') {
    addMesh(head, GEO.sphere, hair, [0, 0.035, -0.04], [0, 0, 0], [0.19, 0.2, 0.19]);
    addMesh(head, GEO.cylinder, hair, [0.18, -0.22, -0.12], [0, 0, -0.2], [0.07, 0.42, 0.07]);
    addMesh(head, GEO.torus, gold, [0, 0.12, 0], [Math.PI / 2, 0, 0], [0.17, 0.17, 0.17]);
    addMesh(head, GEO.sphereLow, glowMat(style.accent, 1.5), [-0.16, 0.14, 0.06], [0, 0, 0], [0.03, 0.03, 0.03]);
    addMesh(head, GEO.box, mat('#7a1528'), [0.1, 0.2, 0.12], [0.2, 0, 0.4], [0.07, 0.12, 0.02]);
  }

  // Weapons
  const weaponHolderR = new THREE.Group();
  weaponHolderR.position.set(0, -0.43, 0.02);
  armR.add(weaponHolderR);
  const weaponHolderL = new THREE.Group();
  weaponHolderL.position.set(0, -0.43, 0.02);
  armL.add(weaponHolderL);

  let weapon = null;
  let shield = null;
  let whip = null;

  if (classId === 'warden') {
    weapon = makeSword(metal, style.accent, 1.05);
    weapon.rotation.set(0.1, 0, 0.05);
    weaponHolderR.add(weapon);
    shield = makeShield(metal, style.accent);
    shield.position.set(-0.1, 0.02, 0.06);
    shield.rotation.y = 0.15;
    weaponHolderL.add(shield);
  } else if (classId === 'sorceress') {
    weapon = makeStaff(mat('#4b3422'), style.accent, 1.05);
    weapon.rotation.set(0.05, 0, 0.05);
    weaponHolderR.add(weapon);
  } else if (classId === 'assassin') {
    weapon = makeDagger(metal, style.accent, 1, 1.05);
    weaponHolderR.add(weapon);
    const off = makeDagger(metal, style.accent, -1, 1.05);
    off.rotation.z = Math.PI;
    weaponHolderL.add(off);
  } else if (classId === 'huntress') {
    weapon = makeBow(mat('#5b3d22'), style.accent, 1.05);
    weapon.rotation.set(0, 0, 0.2);
    weaponHolderL.add(weapon);
    // draw hand
    weaponHolderR.position.set(0, -0.4, 0.1);
  } else if (classId === 'whipdancer') {
    whip = makeWhip(mat('#3a1018'), style.accent);
    weapon = whip.group;
    weapon.rotation.set(0.15, 0, 0.1);
    weaponHolderR.add(weapon);
  }

  // Ground ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.5, 0.58, 28),
    new THREE.MeshBasicMaterial({ color: style.accent, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.02;
  root.add(ring);

  // Soft blob shadow
  const blob = new THREE.Mesh(
    new THREE.CircleGeometry(0.44, 20),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false })
  );
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.01;
  root.add(blob);

  root.userData = {
    classId,
    style,
    rig,
    hips,
    torso,
    head,
    armL,
    armR,
    legL,
    legR,
    cape,
    weaponHolderR,
    weaponHolderL,
    weapon,
    shield,
    whip: whip ? whip.segments : null,
    ring,
    baseArmL: armL.rotation.clone(),
    baseArmR: armR.rotation.clone(),
    baseTorsoY: torso.position.y,
    baseCapeRot: cape.rotation.x,
    glowMaterials: [],
    attackProgress: -1,
    abilityProgress: -1,
    dead: false,
  };
  hideShadows(root);
  root.scale.setScalar(1);
  return root;
}

export function animateHero(hero, time, opts = {}) {
  if (!hero) return;
  const d = hero.userData;
  const moving = Math.max(0, Math.min(1, opts.moving || 0));
  const attack = opts.attack ?? -1;
  const ability = opts.ability ?? -1;
  const t = time;
  const walk = Math.sin(t * 9.5) * 0.62 * moving;

  d.legL.rotation.x = walk;
  d.legR.rotation.x = -walk;
  d.armL.rotation.x = d.baseArmL.x - walk * 0.55;
  d.armR.rotation.x = d.baseArmR.x + walk * 0.55;
  d.armL.rotation.z = d.baseArmL.z + Math.sin(t * 1.7) * 0.02;
  d.armR.rotation.z = d.baseArmR.z - Math.sin(t * 1.7) * 0.02;

  d.torso.position.y = d.baseTorsoY + Math.sin(t * 2.1) * 0.012 + (moving ? Math.abs(Math.sin(t * 9.5)) * 0.02 : 0);
  d.torso.rotation.y = Math.sin(t * 1.1) * 0.035 + walk * 0.06;
  d.head.rotation.y = Math.sin(t * 0.75) * 0.07;
  d.head.rotation.x = Math.sin(t * 1.3) * 0.02;
  d.cape.rotation.x = d.baseCapeRot + Math.sin(t * 2.4) * 0.03 + moving * 0.2;

  if (attack >= 0) {
    const p = Math.min(1, Math.max(0, attack));
    const swing = Math.sin(p * Math.PI);
    const wind = Math.sin(Math.min(1, p * 2.2) * Math.PI * 0.5);
    d.armR.rotation.x = d.baseArmR.x - swing * 2.25;
    d.armR.rotation.z = d.baseArmR.z - wind * 0.45;
    d.torso.rotation.y = -swing * 0.5;
    d.armL.rotation.x = d.baseArmL.x + swing * 0.35;
    if (d.classId === 'whipdancer') {
      d.armR.rotation.z = d.baseArmR.z + swing * 0.8;
      d.torso.rotation.y = -swing * 0.7;
    }
  }

  if (ability >= 0) {
    const p = Math.min(1, Math.max(0, ability));
    const pulse = Math.sin(p * Math.PI);
    d.armL.rotation.x = d.baseArmL.x - pulse * 1.5;
    d.armR.rotation.x = d.baseArmR.x - pulse * 1.5;
    d.torso.rotation.x = -pulse * 0.08;
  } else {
    d.torso.rotation.x *= 0.85;
  }

  if (d.whip) {
    const n = d.whip.length;
    const attackP = attack >= 0 ? Math.min(1, attack) : -1;
    const ext = attackP >= 0 ? Math.sin(Math.min(1, attackP * 1.3) * Math.PI * 0.5) : 0.26;
    const curl = attackP >= 0 ? 0.2 : 0.7;
    for (let i = 0; i < n; i++) {
      const f = i / (n - 1);
      const wave = Math.sin(f * 7 - t * 5.5) * 0.14 * (1 - ext * 0.55) * curl;
      const x = Math.sin(f * Math.PI * 2.4 + t * 1.3) * 0.18 * curl + wave;
      const y = -0.24 - f * (0.55 + ext * 3.2);
      const z = f * ext * 1.05 + Math.cos(f * 6 + t * 2.2) * 0.12 * curl;
      d.whip[i].position.set(x, y, z);
    }
  }

  if (d.ring) {
    d.ring.material.opacity = 0.2 + Math.sin(t * 2.2) * 0.07;
  }
}

/* ------------------------------------------------------------------ */
/* Enemies                                                             */
/* ------------------------------------------------------------------ */

function humanoidBase(bodyMat, accentMat, scale = 1, skinMat = null) {
  const g = new THREE.Group();
  const rig = new THREE.Group();
  g.add(rig);
  const hips = new THREE.Group();
  hips.position.y = 0.8;
  rig.add(hips);
  const legL = new THREE.Group();
  legL.position.x = -0.12;
  hips.add(legL);
  const legR = new THREE.Group();
  legR.position.x = 0.12;
  hips.add(legR);
  const legGeo = new THREE.CapsuleGeometry(0.07, 0.46, 4, 6);
  addMesh(legL, legGeo, bodyMat, [0, -0.32, 0]);
  addMesh(legR, legGeo, bodyMat, [0, -0.32, 0]);
  const torso = new THREE.Group();
  torso.position.y = 1.15;
  rig.add(torso);
  addMesh(torso, GEO.cylinder, bodyMat, [0, 0, 0], [0, 0, 0], [0.22, 0.42, 0.16]);
  const armL = new THREE.Group();
  armL.position.set(-0.28, 1.36, 0);
  rig.add(armL);
  const armR = new THREE.Group();
  armR.position.set(0.28, 1.36, 0);
  rig.add(armR);
  const armGeo = new THREE.CapsuleGeometry(0.055, 0.32, 4, 6);
  addMesh(armL, armGeo, skinMat || bodyMat, [0, -0.18, 0]);
  addMesh(armR, armGeo, skinMat || bodyMat, [0, -0.18, 0]);
  const head = new THREE.Group();
  head.position.y = 1.6;
  rig.add(head);
  g.scale.setScalar(scale);
  return { group: g, rig, hips, legL, legR, torso, armL, armR, head };
}

function addEyes(head, color = '#ff5d4a', scale = 1, y = 0.02, z = 0.15) {
  const eyeMat = glowMat(color, 2.6);
  addMesh(head, GEO.sphereLow, eyeMat, [-0.06, y, z], [0, 0, 0], [0.023 * scale, 0.027 * scale, 0.016]);
  addMesh(head, GEO.sphereLow, eyeMat, [0.06, y, z], [0, 0, 0], [0.023 * scale, 0.027 * scale, 0.016]);
}

function makeEnemySkeleton(color) {
  const bone = mat(color || '#cfc7b0', { roughness: 0.85 });
  const dark = mat('#221e1a');
  const base = humanoidBase(bone, bone, 1.02);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(head, GEO.sphere, bone, [0, 0, 0], [0, 0, 0], [0.15, 0.17, 0.15]);
  addMesh(head, GEO.box, bone, [0, -0.08, 0.04], [0, 0, 0], [0.16, 0.08, 0.14]);
  addEyes(head, '#ff4b3e', 1, 0.02, 0.14);
  addMesh(head, GEO.cone, dark, [-0.06, -0.13, 0.06], [0, 0, 0.2], [0.02, 0.06, 0.02]);
  for (let i = 0; i < 3; i++) {
    addMesh(torso, GEO.box, bone, [0, 0.12 - i * 0.1, 0.15], [0, 0, 0], [0.27 - i * 0.03, 0.028, 0.02]);
  }
  addMesh(torso, GEO.box, dark, [0, -0.02, 0], [0, 0, 0], [0.1, 0.4, 0.08]);
  addMesh(armR, GEO.box, bone, [0, -0.36, 0], [0, 0, 0], [0.055, 0.4, 0.055]);
  addMesh(armL, GEO.box, bone, [0, -0.36, 0], [0, 0, 0], [0.055, 0.4, 0.055]);
  const sword = makeSword(mat('#8e8b80', { metalness: 0.6 }), '#ff5a3c', 0.9);
  sword.position.set(0, -0.38, 0);
  armR.add(sword);
  const shield = makeShield(mat('#5b5549', { metalness: 0.5 }), '#ff5a3c');
  shield.scale.setScalar(0.72);
  shield.position.set(-0.08, 0, 0.02);
  armL.add(shield);
  base.group.userData = { ...base, kind: 'skeleton', legL, legR, armL, armR, head, torso, baseY: 0, weapon: sword };
  return base.group;
}

function makeEnemyGoblin(color) {
  const skin = mat(color || '#6f9a50', { roughness: 0.85 });
  const leather = mat('#3a2b20');
  const base = humanoidBase(leather, skin, 0.86, skin);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(head, GEO.sphere, skin, [0, 0, 0], [0, 0, 0], [0.18, 0.16, 0.17]);
  addMesh(head, GEO.cone, skin, [-0.19, 0.02, 0], [0, 0, 1.4], [0.08, 0.24, 0.06]);
  addMesh(head, GEO.cone, skin, [0.19, 0.02, 0], [0, 0, -1.4], [0.08, 0.24, 0.06]);
  addEyes(head, '#ffd25a', 1.1, 0.02, 0.15);
  addMesh(head, GEO.box, skin, [0, -0.08, 0.13], [0, 0, 0], [0.15, 0.08, 0.06]);
  addMesh(head, GEO.cone, mat('#e8dfc9'), [-0.05, -0.11, 0.17], [0, 0, 0], [0.016, 0.05, 0.016]);
  addMesh(torso, GEO.box, leather, [0, 0.02, 0.13], [0, 0, 0], [0.26, 0.28, 0.05]);
  addMesh(armR, GEO.sphereLow, skin, [0, -0.38, 0], [0, 0, 0], [0.07, 0.07, 0.07]);
  addMesh(armL, GEO.sphereLow, skin, [0, -0.38, 0], [0, 0, 0], [0.07, 0.07, 0.07]);
  const club = new THREE.Group();
  addMesh(club, GEO.cylinder, mat('#4b3522'), [0, -0.4, 0], [0, 0, 0], [0.035, 0.65, 0.035]);
  addMesh(club, GEO.sphereLow, mat('#5b452e'), [0, -0.75, 0], [0, 0, 0], [0.15, 0.2, 0.15]);
  armR.add(club);
  base.group.userData = { ...base, kind: 'goblin', legL, legR, armL, armR, head, torso, baseY: 0, weapon: club };
  return base.group;
}

function makeEnemyCultist(color) {
  const robe = mat(color || '#a33d32', { roughness: 0.9 });
  const dark = mat('#24161b');
  const base = humanoidBase(robe, robe, 1.04);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(torso, GEO.cone, robe, [0, -0.5, 0], [0, 0, 0], [0.4, 0.95, 0.34]);
  addMesh(head, GEO.sphere, dark, [0, 0.02, -0.02], [0, 0, 0], [0.19, 0.2, 0.19]);
  addMesh(head, GEO.cone, robe, [0, 0.16, -0.02], [0, 0, 0], [0.22, 0.36, 0.22]);
  addEyes(head, '#ffcf5a', 1.1, 0.02, 0.15);
  const staff = makeStaff(mat('#3b2618'), '#ff8c3a', 0.92);
  staff.position.set(0, -0.35, 0);
  armR.add(staff);
  addMesh(torso, GEO.sphereLow, glowMat('#ff8c3a', 1.6), [0, 0.06, 0.17], [0, 0, 0], [0.05, 0.05, 0.02]);
  base.group.userData = { ...base, kind: 'cultist', legL, legR, armL, armR, head, torso, baseY: 0, weapon: staff };
  return base.group;
}

function makeEnemyHound(color) {
  const fur = mat(color || '#8b8a86', { roughness: 0.95 });
  const dark = mat('#262523');
  const g = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 0.62;
  g.add(body);
  addMesh(body, GEO.capsule, fur, [0, 0, 0], [0, 0, Math.PI / 2], [0.22, 0.52, 0.22]);
  addMesh(body, GEO.sphereLow, fur, [0, 0.06, 0.42], [0, 0, 0], [0.17, 0.16, 0.2]);
  addMesh(body, GEO.box, fur, [0, -0.03, 0.62], [0, 0, 0], [0.13, 0.09, 0.18]);
  addEyes(body, '#ffb13d', 0.9, 0.12, 0.58);
  addMesh(body, GEO.cone, fur, [-0.1, 0.19, 0.38], [0, 0, 0.2], [0.06, 0.16, 0.06]);
  addMesh(body, GEO.cone, fur, [0.1, 0.19, 0.38], [0, 0, -0.2], [0.06, 0.16, 0.06]);
  addMesh(body, GEO.cone, dark, [0, 0.04, 0.72], [Math.PI / 2, 0, 0], [0.035, 0.08, 0.035]);
  const legs = [];
  for (const [x, z] of [[-0.15, 0.3], [0.15, 0.3], [-0.15, -0.3], [0.15, -0.3]]) {
    const leg = new THREE.Group();
    leg.position.set(x, -0.15, z);
    body.add(leg);
    addMesh(leg, GEO.cylinder, fur, [0, -0.2, 0], [0, 0, 0], [0.055, 0.4, 0.055]);
    legs.push(leg);
  }
  const tail = new THREE.Group();
  tail.position.set(0, 0.08, -0.48);
  body.add(tail);
  addMesh(tail, GEO.cylinder, fur, [0, 0.08, -0.2], [0.8, 0, 0], [0.045, 0.4, 0.045]);
  g.scale.setScalar(1.02);
  g.userData = { kind: 'hound', body, head: body, legs, tail, baseY: 0, armL: null, armR: null, legL: null, legR: null, torso: body };
  return g;
}

function makeEnemyBrute(color) {
  const skin = mat(color || '#5b7045', { roughness: 0.95 });
  const dark = mat('#2e2a20');
  const base = humanoidBase(skin, skin, 1.25, skin);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(head, GEO.sphere, skin, [0, 0, 0], [0, 0, 0], [0.2, 0.18, 0.18]);
  addEyes(head, '#ffd35a', 1.1, 0.03, 0.17);
  addMesh(head, GEO.cone, mat('#e8dfc9'), [-0.08, -0.09, 0.16], [0, 0, 0.2], [0.025, 0.09, 0.025]);
  addMesh(head, GEO.cone, mat('#e8dfc9'), [0.08, -0.09, 0.16], [0, 0, -0.2], [0.025, 0.09, 0.025]);
  addMesh(torso, GEO.box, dark, [0, 0.02, 0.14], [0, 0, 0], [0.36, 0.36, 0.06]);
  addMesh(armR, GEO.sphereLow, skin, [0, 0.02, 0], [0, 0, 0], [0.18, 0.15, 0.18]);
  addMesh(armL, GEO.sphereLow, skin, [0, 0.02, 0], [0, 0, 0], [0.18, 0.15, 0.18]);
  const club = new THREE.Group();
  addMesh(club, GEO.cylinder, mat('#4b3522'), [0, -0.45, 0], [0, 0, 0], [0.05, 0.75, 0.05]);
  addMesh(club, GEO.box, mat('#5b452e'), [0, -0.85, 0], [0, 0, 0], [0.22, 0.28, 0.22]);
  armR.add(club);
  base.group.userData = { ...base, kind: 'brute', legL, legR, armL, armR, head, torso, baseY: 0, weapon: club };
  return base.group;
}

function makeEnemyKnight(color) {
  const armor = mat(color || '#7fb4cf', { metalness: 0.55, roughness: 0.42 });
  const dark = mat('#1c2430');
  const base = humanoidBase(dark, armor, 1.05);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(torso, GEO.box, armor, [0, 0.03, 0.14], [0, 0, 0], [0.32, 0.38, 0.07]);
  addMesh(head, GEO.sphere, armor, [0, 0.02, 0], [0, 0, 0], [0.18, 0.19, 0.18]);
  addMesh(head, GEO.box, armor, [0, 0.0, 0.16], [0, 0, 0], [0.06, 0.17, 0.05]);
  addEyes(head, '#ff6d55', 1, 0.02, 0.18);
  addMesh(head, GEO.cone, armor, [0, 0.24, -0.02], [0, 0, 0], [0.08, 0.16, 0.08]);
  addMesh(armL, GEO.sphereLow, armor, [0, 0.01, 0], [0, 0, 0], [0.13, 0.1, 0.14]);
  addMesh(armR, GEO.sphereLow, armor, [0, 0.01, 0], [0, 0, 0], [0.13, 0.1, 0.14]);
  const sword = makeSword(mat('#b8c6d6', { metalness: 0.65 }), '#78d7ff', 1);
  sword.position.set(0, -0.38, 0);
  armR.add(sword);
  base.group.userData = { ...base, kind: 'knight', legL, legR, armL, armR, head, torso, baseY: 0, weapon: sword };
  return base.group;
}

function makeEnemyArcher(color) {
  const robe = mat(color || '#6d5b9c', { roughness: 0.9 });
  const leather = mat('#2d2334');
  const base = humanoidBase(leather, robe, 1.02);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(torso, GEO.cone, robe, [0, -0.45, 0], [0, 0, 0], [0.35, 0.85, 0.3]);
  addMesh(head, GEO.sphere, leather, [0, 0.02, -0.02], [0, 0, 0], [0.19, 0.2, 0.19]);
  addMesh(head, GEO.cone, robe, [0, 0.17, -0.01], [0, 0, 0], [0.23, 0.38, 0.23]);
  addEyes(head, '#d7a2ff', 1.1, 0.02, 0.15);
  const bow = makeBow(mat('#3e2d44'), '#c08cff', 0.9);
  bow.rotation.z = 0.15;
  armL.add(bow);
  addMesh(torso, GEO.cylinder, leather, [0.15, 0.05, -0.2], [0.2, 0, -0.2], [0.08, 0.4, 0.08]);
  base.group.userData = { ...base, kind: 'archer', legL, legR, armL, armR, head, torso, baseY: 0, weapon: bow };
  return base.group;
}

function makeEnemyGolem(color) {
  const ice = mat(color || '#8ac4d8', { roughness: 0.45, metalness: 0.15 });
  const dark = mat('#3e6470');
  const base = humanoidBase(dark, ice, 1.45);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(torso, GEO.box, ice, [0, 0.05, 0], [0, 0, 0], [0.5, 0.5, 0.38]);
  addMesh(torso, GEO.octa, glowMat('#b7f1ff', 1.8), [0, 0.02, 0.2], [0, 0, 0], [0.12, 0.16, 0.08]);
  addMesh(head, GEO.octa, ice, [0, 0.02, 0], [0.2, 0, 0], [0.2, 0.24, 0.2]);
  addEyes(head, '#c9f6ff', 1.2, 0.01, 0.17);
  addMesh(armR, GEO.box, ice, [0, -0.1, 0], [0, 0, 0], [0.22, 0.55, 0.22]);
  addMesh(armL, GEO.box, ice, [0, -0.1, 0], [0, 0, 0], [0.22, 0.55, 0.22]);
  addMesh(armR, GEO.octa, ice, [0, -0.45, 0], [0, 0, 0], [0.18, 0.22, 0.18]);
  addMesh(armL, GEO.octa, ice, [0, -0.45, 0], [0, 0, 0], [0.18, 0.22, 0.18]);
  for (let i = 0; i < 3; i++) {
    addMesh(rigOrBase(base), GEO.cone, ice, [0, 1.55 + i * 0.1, -0.15 - i * 0.05], [0.2, 0, 0], [0.07, 0.3, 0.07]);
  }
  base.group.userData = { ...base, kind: 'golem', legL, legR, armL, armR, head, torso, baseY: 0, weapon: null };
  return base.group;
}

function rigOrBase(base) {
  return base.rig || base.group;
}

function makeEnemyWraith(color) {
  const robe = mat(color || '#9b6fe0', { transparent: true, opacity: 0.82, roughness: 0.9, side: THREE.DoubleSide });
  const dark = mat('#1b1426');
  const g = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 1.1;
  g.add(body);
  addMesh(body, GEO.cone, robe, [0, -0.15, 0], [0, 0, 0], [0.42, 1.1, 0.36]);
  addMesh(body, GEO.sphere, dark, [0, 0.42, 0], [0, 0, 0], [0.2, 0.22, 0.2]);
  addMesh(body, GEO.cone, robe, [0, 0.55, -0.02], [0, 0, 0], [0.25, 0.38, 0.25]);
  addEyes(body, '#c98cff', 1.2, 0.44, 0.16);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    addMesh(body, GEO.cone, robe, [Math.cos(a) * 0.28, -0.65, Math.sin(a) * 0.24], [Math.PI, 0, 0], [0.06, 0.4, 0.06]);
  }
  const armL = new THREE.Group();
  armL.position.set(-0.3, 0.22, 0);
  body.add(armL);
  const armR = new THREE.Group();
  armR.position.set(0.3, 0.22, 0);
  body.add(armR);
  addMesh(armL, GEO.capsule, robe, [0, -0.28, 0], [0, 0, 0.2], [0.055, 0.3, 0.055]);
  addMesh(armR, GEO.capsule, robe, [0, -0.28, 0], [0, 0, -0.2], [0.055, 0.3, 0.055]);
  const glow = new THREE.PointLight(0xa46bff, 0.9, 4, 2);
  glow.position.set(0, 0.3, 0);
  g.add(glow);
  g.userData = { kind: 'wraith', body, head: body, armL, armR, legL: null, legR: null, torso: body, baseY: 0, floating: true };
  return g;
}

function makeBossBoneTyrant() {
  const bone = mat('#d7c79e', { roughness: 0.82 });
  const gold = mat('#d2a84e', { metalness: 0.7, roughness: 0.35 });
  const dark = mat('#2a211c');
  const base = humanoidBase(bone, gold, 1.55);
  const { head, torso, armR, armL, legL, legR } = base;
  addMesh(head, GEO.sphere, bone, [0, 0, 0], [0, 0, 0], [0.17, 0.19, 0.17]);
  addMesh(head, GEO.box, bone, [0, -0.09, 0.04], [0, 0, 0], [0.19, 0.1, 0.17]);
  addEyes(head, '#ff3d2e', 1.2, 0.02, 0.15);
  addMesh(head, GEO.torus, gold, [0, 0.15, 0], [Math.PI / 2, 0, 0], [0.19, 0.19, 0.19]);
  for (let i = 0; i < 4; i++) {
    addMesh(head, GEO.cone, gold, [-0.14 + i * 0.093, 0.3, 0], [0, 0, 0], [0.035, 0.17, 0.035]);
  }
  for (let i = 0; i < 4; i++) {
    addMesh(torso, GEO.box, bone, [0, 0.18 - i * 0.11, 0.16], [0, 0, 0], [0.34 - i * 0.03, 0.035, 0.025]);
  }
  addMesh(torso, GEO.box, dark, [0, 0, 0], [0, 0, 0], [0.14, 0.44, 0.1]);
  addMesh(torso, GEO.box, gold, [0, 0.08, 0.2], [0, 0, 0], [0.28, 0.06, 0.03]);
  const axe = new THREE.Group();
  addMesh(axe, GEO.cylinder, mat('#4b3522'), [0, -0.7, 0], [0, 0, 0], [0.06, 1.4, 0.06]);
  addMesh(axe, GEO.box, mat('#b9c2c8', { metalness: 0.7, roughness: 0.3 }), [0.18, -1.15, 0], [0, 0, 0.2], [0.36, 0.28, 0.06]);
  addMesh(axe, GEO.cone, mat('#b9c2c8', { metalness: 0.7 }), [0.38, -1.12, 0], [0, 0, -1.3], [0.16, 0.28, 0.06]);
  armR.add(axe);
  addMesh(armL, GEO.sphereLow, bone, [0, -0.02, 0], [0, 0, 0], [0.18, 0.16, 0.18]);
  base.group.userData = { ...base, kind: 'boneTyrant', legL, legR, armL, armR, head, torso, baseY: 0, weapon: axe, boss: true };
  return base.group;
}

function makeBossThornColossus() {
  const wood = mat('#5b4630', { roughness: 0.95 });
  const moss = mat('#698a4d', { roughness: 0.95 });
  const leaf = mat('#8fbd62', { roughness: 0.9 });
  const glow = glowMat('#d4ff7a', 1.7);
  const base = humanoidBase(wood, moss, 1.7);
  const { head, torso, armR, armL, legL, legR, group } = base;
  addMesh(torso, GEO.cylinder, wood, [0, 0, 0], [0, 0, 0], [0.34, 0.5, 0.28]);
  addMesh(torso, GEO.sphereLow, moss, [0, 0.15, 0.08], [0, 0, 0], [0.3, 0.2, 0.24]);
  addMesh(torso, GEO.sphereLow, glow, [0, 0.02, 0.2], [0, 0, 0], [0.1, 0.12, 0.05]);
  addMesh(head, GEO.octa, wood, [0, 0, 0], [0.2, 0, 0], [0.19, 0.23, 0.18]);
  addEyes(head, '#e2ff88', 1.2, 0.02, 0.16);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const branch = addMesh(group, GEO.cone, wood, [Math.cos(a) * 0.45, 1.6 + Math.sin(i) * 0.2, Math.sin(a) * 0.35], [Math.cos(a) * 0.6, 0, -Math.sin(a) * 0.6], [0.055, 0.6, 0.055]);
    branch.castShadow = true;
    addMesh(group, GEO.sphereLow, leaf, [Math.cos(a) * 0.75, 1.9 + Math.sin(i) * 0.2, Math.sin(a) * 0.55], [0, 0, 0], [0.16, 0.12, 0.14]);
  }
  for (let i = 0; i < 4; i++) {
    addMesh(armR, GEO.cone, wood, [0.1, -0.4 - i * 0.06, 0], [0, 0, -0.4 - i * 0.1], [0.06, 0.35, 0.06]);
    addMesh(armL, GEO.cone, wood, [-0.1, -0.4 - i * 0.06, 0], [0, 0, 0.4 + i * 0.1], [0.06, 0.35, 0.06]);
  }
  addMesh(armR, GEO.sphereLow, moss, [0, -0.15, 0], [0, 0, 0], [0.2, 0.18, 0.2]);
  addMesh(armL, GEO.sphereLow, moss, [0, -0.15, 0], [0, 0, 0], [0.2, 0.18, 0.2]);
  base.group.userData = { ...base, kind: 'thornColossus', legL, legR, armL, armR, head, torso, baseY: 0, boss: true };
  return base.group;
}

function makeBossFrostSentinel() {
  const ice = mat('#8ccbe0', { roughness: 0.35, metalness: 0.2 });
  const deep = mat('#35657c', { roughness: 0.5 });
  const glow = glowMat('#d6f8ff', 2.2);
  const base = humanoidBase(deep, ice, 1.8);
  const { head, torso, armR, armL, legL, legR, group } = base;
  addMesh(torso, GEO.box, ice, [0, 0.02, 0], [0, 0, 0], [0.56, 0.58, 0.44]);
  addMesh(torso, GEO.octa, glow, [0, 0.02, 0.24], [0, 0, 0], [0.14, 0.2, 0.08]);
  addMesh(head, GEO.octa, ice, [0, 0.03, 0], [0.2, 0, 0], [0.21, 0.26, 0.21]);
  addEyes(head, '#e0fbff', 1.3, 0.02, 0.18);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    addMesh(group, GEO.octa, ice, [Math.cos(a) * 0.52, 1.7 + (i % 2) * 0.2, Math.sin(a) * 0.4], [0.4, a, 0.2], [0.12, 0.32, 0.12]);
  }
  const blade = new THREE.Group();
  addMesh(blade, GEO.box, ice, [0, -0.75, 0], [0, 0, 0], [0.1, 1.4, 0.06]);
  addMesh(blade, GEO.cone, glow, [0, -1.5, 0], [Math.PI, 0, 0], [0.1, 0.25, 0.06]);
  armR.add(blade);
  addMesh(armR, GEO.octa, ice, [0, -0.4, 0], [0, 0, 0], [0.18, 0.24, 0.18]);
  addMesh(armL, GEO.octa, ice, [0, -0.4, 0], [0, 0, 0], [0.18, 0.24, 0.18]);
  base.group.userData = { ...base, kind: 'frostSentinel', legL, legR, armL, armR, head, torso, baseY: 0, boss: true, weapon: blade };
  return base.group;
}

function makeBossEclipseLord() {
  const armor = mat('#2b1d3f', { metalness: 0.5, roughness: 0.42 });
  const trim = mat('#9b6ee8', { metalness: 0.65, roughness: 0.3 });
  const glow = glowMat('#c08cff', 2.2);
  const base = humanoidBase(armor, trim, 1.95);
  const { head, torso, armR, armL, legL, legR, group } = base;
  addMesh(torso, GEO.box, armor, [0, 0.02, 0.13], [0, 0, 0], [0.38, 0.46, 0.1]);
  addMesh(torso, GEO.box, trim, [0, 0.02, 0.2], [0, 0, 0], [0.07, 0.34, 0.02]);
  addMesh(torso, GEO.octa, glow, [0, 0.08, 0.22], [0, 0, 0], [0.07, 0.1, 0.04]);
  addMesh(head, GEO.sphere, armor, [0, 0.02, 0], [0, 0, 0], [0.2, 0.21, 0.2]);
  addEyes(head, '#d6a2ff', 1.3, 0.02, 0.17);
  const h1 = addMesh(head, GEO.cone, trim, [-0.16, 0.22, -0.02], [0.1, 0, 0.4], [0.07, 0.32, 0.07]);
  const h2 = addMesh(head, GEO.cone, trim, [0.16, 0.22, -0.02], [0.1, 0, -0.4], [0.07, 0.32, 0.07]);
  h1.castShadow = true;
  h2.castShadow = true;
  addMesh(group, GEO.cone, mat('#1a1026', { side: THREE.DoubleSide }), [0, 1.2, -0.2], [0.1, 0, 0], [0.5, 1.3, 0.4]);
  const sword = makeSword(mat('#b8a6d8', { metalness: 0.7 }), '#c08cff', 1.45);
  sword.position.set(0, -0.4, 0);
  armR.add(sword);
  const orb = addMesh(armL, GEO.sphere, glow, [0, -0.48, 0.12], [0, 0, 0], [0.12, 0.12, 0.12]);
  orb.castShadow = false;
  base.group.userData = { ...base, kind: 'eclipseLord', legL, legR, armL, armR, head, torso, baseY: 0, boss: true, weapon: sword };
  return base.group;
}

export function createEnemy(model, color) {
  switch (model) {
    case 'skeleton':
      return makeEnemySkeleton(color);
    case 'goblin':
      return makeEnemyGoblin(color);
    case 'cultist':
      return makeEnemyCultist(color);
    case 'hound':
      return makeEnemyHound(color);
    case 'brute':
      return makeEnemyBrute(color);
    case 'knight':
      return makeEnemyKnight(color);
    case 'archer':
      return makeEnemyArcher(color);
    case 'golem':
      return makeEnemyGolem(color);
    case 'wraith':
      return makeEnemyWraith(color);
    case 'boneTyrant':
      return makeBossBoneTyrant();
    case 'thornColossus':
      return makeBossThornColossus();
    case 'frostSentinel':
      return makeBossFrostSentinel();
    case 'eclipseLord':
      return makeBossEclipseLord();
    default:
      return makeEnemySkeleton(color);
  }
}

export function animateEnemy(enemy, time, opts = {}) {
  if (!enemy) return;
  const d = enemy.userData;
  const t = time;
  const moving = Math.max(0, Math.min(1, opts.moving || 0));
  const attack = opts.attack ?? -1;
  const dead = opts.dead || false;
  const walk = Math.sin(t * 8.5 + (d.phase || 0)) * 0.55 * moving;

  if (d.floating) {
    enemy.position.y = (d.baseY || 0) + Math.sin(t * 2 + (d.phase || 0)) * 0.12;
    if (d.body) d.body.rotation.z = Math.sin(t * 1.2) * 0.06;
  }

  if (d.legL) d.legL.rotation.x = walk;
  if (d.legR) d.legR.rotation.x = -walk;
  if (d.legs) {
    d.legs.forEach((leg, i) => {
      leg.rotation.x = (i % 2 === 0 ? 1 : -1) * walk;
    });
    if (d.tail) d.tail.rotation.y = Math.sin(t * 5) * 0.4;
  }
  if (d.armL) d.armL.rotation.x = d.armL.rotation.x * 0.8 + (moving ? -walk * 0.3 : 0);
  if (d.armR) d.armR.rotation.x = d.armR.rotation.x * 0.8 + (moving ? walk * 0.3 : 0);
  if (d.head) {
    d.head.rotation.y = Math.sin(t * 0.9 + (d.phase || 0)) * 0.08;
  }
  if (d.torso) d.torso.rotation.z = Math.sin(t * 1.7) * 0.025;
  if (d.body && !d.floating) d.body.position.y = 0.62 + Math.abs(Math.sin(t * 8.5)) * 0.03 * moving;

  if (attack >= 0) {
    const p = Math.min(1, Math.max(0, attack));
    const swing = Math.sin(p * Math.PI);
    if (d.armR) d.armR.rotation.x = -swing * 2.1;
    if (d.armL) d.armL.rotation.x = -swing * 0.5;
    if (d.torso) d.torso.rotation.y = swing * 0.35;
    if (d.head) d.head.rotation.x = swing * 0.2;
  } else if (d.torso) {
    d.torso.rotation.y *= 0.9;
  }

  if (dead) {
    enemy.rotation.z = Math.min(1.5, enemy.rotation.z + 0.04);
    enemy.position.y -= 0.01;
  }
}

/* ------------------------------------------------------------------ */
/* Vendor & dog                                                        */
/* ------------------------------------------------------------------ */

export function createVendor() {
  const root = new THREE.Group();
  const skin = mat('#d7a07d', { roughness: 0.85 });
  const dress = mat('#4c5c3e', { roughness: 0.9 });
  const apron = mat('#b98955', { roughness: 0.9 });
  const hair = mat('#7a3d25', { roughness: 0.95 });
  const gold = mat('#d2a84e', { metalness: 0.7, roughness: 0.3 });

  const body = new THREE.Group();
  body.position.y = 0.75;
  root.add(body);
  addMesh(body, GEO.cone, dress, [0, 0.1, 0], [0, 0, 0], [0.34, 1.15, 0.3]);
  addMesh(body, GEO.box, apron, [0, 0.02, 0.2], [0, 0, 0], [0.34, 0.62, 0.04]);
  addMesh(body, GEO.box, gold, [0, -0.28, 0.23], [0, 0, 0], [0.35, 0.05, 0.03]);
  const torso = new THREE.Group();
  torso.position.y = 0.78;
  body.add(torso);
  addMesh(torso, GEO.cylinder, dress, [0, 0, 0], [0, 0, 0], [0.22, 0.36, 0.17]);
  addMesh(torso, GEO.sphereLow, mat('#8d5d3c'), [0.0, 0.1, 0.16], [0, 0, 0], [0.11, 0.13, 0.08]);
  const armL = new THREE.Group();
  armL.position.set(-0.28, 1.42, 0);
  root.add(armL);
  const armR = new THREE.Group();
  armR.position.set(0.28, 1.42, 0);
  root.add(armR);
  const armGeo = new THREE.CapsuleGeometry(0.055, 0.32, 4, 6);
  addMesh(armL, armGeo, dress, [0, -0.18, 0]);
  addMesh(armR, armGeo, dress, [0, -0.18, 0]);
  addMesh(armL, GEO.sphereLow, skin, [0, -0.38, 0], [0, 0, 0], [0.06, 0.06, 0.06]);
  addMesh(armR, GEO.sphereLow, skin, [0, -0.38, 0], [0, 0, 0], [0.06, 0.06, 0.06]);
  const head = new THREE.Group();
  head.position.y = 1.82;
  root.add(head);
  addMesh(head, GEO.sphere, skin, [0, 0, 0], [0, 0, 0], [0.16, 0.18, 0.155]);
  addMesh(head, GEO.sphere, hair, [0, 0.04, -0.03], [0, 0, 0], [0.18, 0.18, 0.18]);
  addMesh(head, GEO.sphereLow, hair, [0, 0.18, -0.12], [0, 0, 0], [0.1, 0.09, 0.1]);
  addMesh(head, GEO.sphereLow, mat('#2a1a12'), [-0.055, 0.02, 0.145], [0, 0, 0], [0.018, 0.022, 0.012]);
  addMesh(head, GEO.sphereLow, mat('#2a1a12'), [0.055, 0.02, 0.145], [0, 0, 0], [0.018, 0.022, 0.012]);
  addMesh(head, GEO.torus, gold, [0, 0.06, 0], [Math.PI / 2, 0, 0], [0.15, 0.15, 0.15]);
  addMesh(head, GEO.sphereLow, gold, [0.16, 0.12, 0], [0, 0, 0], [0.025, 0.025, 0.025]);

  // name marker
  const marker = new THREE.Group();
  marker.position.y = 2.55;
  root.add(marker);
  const diamond = addMesh(marker, GEO.octa, glowMat('#f0c76a', 2.4), [0, 0, 0], [0, 0, 0], [0.09, 0.14, 0.09]);
  diamond.castShadow = false;

  root.userData = { body, torso, head, armL, armR, marker, diamond, baseY: 0 };
  hideShadows(root);
  return root;
}

export function createDog() {
  const root = new THREE.Group();
  const fur = mat('#c48b4b', { roughness: 0.95 });
  const fur2 = mat('#8e5a2e', { roughness: 0.95 });
  const harness = mat('#3f7a74', { roughness: 0.7 });
  const gold = mat('#d2a84e', { metalness: 0.6, roughness: 0.35 });
  const body = new THREE.Group();
  body.position.y = 0.52;
  root.add(body);
  addMesh(body, GEO.capsule, fur, [0, 0, 0], [0, 0, Math.PI / 2], [0.19, 0.45, 0.19]);
  addMesh(body, GEO.sphereLow, fur, [0, 0.13, 0.42], [0, 0, 0], [0.17, 0.16, 0.18]);
  addMesh(body, GEO.box, fur2, [0, 0.02, 0.6], [0, 0, 0], [0.13, 0.1, 0.18]);
  addEyes(body, '#2a1b10', 1, 0.18, 0.57);
  addMesh(body, GEO.sphereLow, mat('#20140c'), [0, 0.07, 0.7], [0, 0, 0], [0.045, 0.035, 0.03]);
  addMesh(body, GEO.cone, fur2, [-0.11, 0.27, 0.36], [0, 0, 0.25], [0.06, 0.18, 0.06]);
  addMesh(body, GEO.cone, fur2, [0.11, 0.27, 0.36], [0, 0, -0.25], [0.06, 0.18, 0.06]);
  addMesh(body, GEO.box, harness, [0, 0.12, 0.1], [0, 0, 0], [0.36, 0.1, 0.45]);
  addMesh(body, GEO.box, harness, [0, 0.02, 0.05], [0, 0, 0], [0.4, 0.06, 0.5]);
  addMesh(body, GEO.torus, gold, [0, 0.14, 0.33], [0.2, 0, 0], [0.15, 0.15, 0.15]);
  const handle = addMesh(body, GEO.cylinder, gold, [0, 0.32, 0.05], [0, 0, 0], [0.018, 0.3, 0.018]);
  handle.rotation.z = 0.15;
  addMesh(body, GEO.torus, gold, [0.03, 0.46, 0.05], [0, 0, 0], [0.12, 0.12, 0.12]);
  const legs = [];
  for (const [x, z] of [[-0.14, 0.27], [0.14, 0.27], [-0.14, -0.28], [0.14, -0.28]]) {
    const leg = new THREE.Group();
    leg.position.set(x, -0.12, z);
    body.add(leg);
    addMesh(leg, GEO.cylinder, fur, [0, -0.2, 0], [0, 0, 0], [0.05, 0.38, 0.05]);
    addMesh(leg, GEO.sphereLow, fur2, [0, -0.4, 0.03], [0, 0, 0], [0.06, 0.04, 0.08]);
    legs.push(leg);
  }
  const tail = new THREE.Group();
  tail.position.set(0, 0.1, -0.42);
  body.add(tail);
  addMesh(tail, GEO.cylinder, fur, [0, 0.05, -0.2], [0.9, 0, 0], [0.035, 0.38, 0.035]);
  const bandana = addMesh(body, GEO.box, mat('#a93b36'), [0, 0.23, 0.37], [0, 0, 0], [0.22, 0.06, 0.12]);
  bandana.castShadow = false;
  root.userData = { body, legs, tail, head: body, baseY: 0 };
  hideShadows(root);
  return root;
}

export function animateVendor(vendor, time) {
  if (!vendor) return;
  const d = vendor.userData;
  const t = time;
  d.torso.position.y = 0.78 + Math.sin(t * 1.6) * 0.012;
  d.head.rotation.y = Math.sin(t * 0.6) * 0.18;
  d.head.rotation.x = Math.sin(t * 0.8) * 0.04;
  d.armL.rotation.x = -0.15 + Math.sin(t * 1.2) * 0.05;
  d.armR.rotation.x = -0.25 + Math.sin(t * 1.2 + 1) * 0.05;
  d.marker.position.y = 2.55 + Math.sin(t * 2) * 0.08;
  d.marker.rotation.y = t * 1.2;
  d.diamond.rotation.y = t * 2;
}

export function animateDog(dog, time) {
  if (!dog) return;
  const d = dog.userData;
  const t = time;
  d.tail.rotation.y = Math.sin(t * 6) * 0.65;
  d.tail.rotation.x = Math.sin(t * 3) * 0.15;
  d.body.position.y = 0.52 + Math.sin(t * 2.2) * 0.008;
  d.head.rotation.y = Math.sin(t * 0.8) * 0.2;
  d.legs.forEach((leg, i) => {
    leg.rotation.x = Math.sin(t * 2 + i) * 0.03;
  });
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export function createTextSprite(text, color = '#f0d99e', size = 0.45) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const dpr = 2;
  canvas.width = 512 * dpr;
  canvas.height = 128 * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, 512, 128);
  ctx.font = '600 34px Cinzel, Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.9)';
  ctx.shadowBlur = 12;
  ctx.fillStyle = color;
  ctx.fillText(text, 256, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(size * 4, size, 1);
  return sprite;
}

export function createGroundRing(color, radius = 1, opacity = 0.4) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.82, radius, 40),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.03;
  return ring;
}

export function createHealthOrb() {
  const group = new THREE.Group();
  const orb = addMesh(group, GEO.sphere, glowMat('#58d68d', 2.2), [0, 0, 0], [0, 0, 0], [0.13, 0.13, 0.13]);
  orb.castShadow = false;
  const ring = createGroundRing('#58d68d', 0.3, 0.35);
  group.add(ring);
  group.userData = { orb, ring };
  return group;
}

export function createManaOrb() {
  const group = new THREE.Group();
  const orb = addMesh(group, GEO.octa, glowMat('#6ea8e8', 2.2), [0, 0, 0], [0, 0, 0], [0.12, 0.16, 0.12]);
  orb.castShadow = false;
  const ring = createGroundRing('#6ea8e8', 0.3, 0.35);
  group.add(ring);
  group.userData = { orb, ring };
  return group;
}

export function createGoldOrb() {
  const group = new THREE.Group();
  const orb = addMesh(group, GEO.octa, glowMat('#f0c76a', 2.4), [0, 0, 0], [0, 0, 0], [0.1, 0.13, 0.1]);
  orb.castShadow = false;
  const ring = createGroundRing('#f0c76a', 0.26, 0.35);
  group.add(ring);
  group.userData = { orb, ring };
  return group;
}

export function createSpiritWolf() {
  const wolf = createDog();
  wolf.scale.setScalar(1.12);
  const glow = new THREE.PointLight('#7ef0b5', 1.2, 5, 2);
  glow.position.y = 0.6;
  wolf.add(glow);
  wolf.traverse((o) => {
    if (o.isMesh && o.material && o.material.color) {
      o.material = o.material.clone();
      o.material.color.lerp(new THREE.Color('#8cf0b5'), 0.55);
      o.material.emissive = new THREE.Color('#2a8f5f');
      o.material.emissiveIntensity = 0.8;
      o.material.transparent = true;
      o.material.opacity = 0.82;
    }
  });
  return wolf;
}
