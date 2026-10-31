import * as THREE from 'three';
import { createHero, createVendor, createDog, createTextSprite, animateHero, animateVendor, animateDog, mat, addMesh, glowMat } from './models.js';
import { MAPS, CLASSES } from './data.js';

const SHARED = {
  rock: new THREE.DodecahedronGeometry(1, 0),
  stone: new THREE.CylinderGeometry(1, 1, 1, 6),
  cone: new THREE.ConeGeometry(1, 1, 7),
  sphere: new THREE.SphereGeometry(1, 10, 8),
  octa: new THREE.OctahedronGeometry(1, 0),
  box: new THREE.BoxGeometry(1, 1, 1),
  circle: new THREE.CircleGeometry(1, 32),
  ring: new THREE.RingGeometry(1, 1.04, 48),
};

function makeSky(scene, top, bottom, fogColor, fogNear, fogFar, stars = false) {
  const geo = new THREE.SphereGeometry(100, 28, 18);
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      topColor: { value: new THREE.Color(top) },
      bottomColor: { value: new THREE.Color(bottom) },
      offset: { value: 12 },
      exponent: { value: 0.75 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, pow(max(h, 0.0), exponent)), 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(geo, material);
  scene.add(sky);
  scene.fog = new THREE.Fog(fogColor, fogNear, fogFar);

  if (stars) {
    const count = 320;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 55 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.42;
      positions[i * 3] = Math.cos(theta) * Math.sin(phi) * r;
      positions[i * 3 + 1] = 8 + Math.cos(phi) * r * 0.8;
      positions[i * 3 + 2] = Math.sin(theta) * Math.sin(phi) * r;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const p = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xd9d0ff, size: 0.16, transparent: true, opacity: 0.8, depthWrite: false, fog: false }));
    scene.add(p);
  }
  return sky;
}

function addLights(scene, opts = {}) {
  const hemi = new THREE.HemisphereLight(opts.sky ?? 0x9db8e0, opts.ground ?? 0x3a2b22, opts.hemi ?? 1.05);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(opts.sun ?? 0xffe1b0, opts.sunIntensity ?? 2.1);
  dir.position.set(opts.sunX ?? 9, opts.sunY ?? 16, opts.sunZ ?? 7);
  dir.castShadow = true;
  dir.shadow.mapSize.set(1024, 1024);
  dir.shadow.camera.left = -24;
  dir.shadow.camera.right = 24;
  dir.shadow.camera.top = 24;
  dir.shadow.camera.bottom = -24;
  dir.shadow.camera.near = 1;
  dir.shadow.camera.far = 55;
  dir.shadow.bias = -0.0007;
  scene.add(dir);
  const fill = new THREE.DirectionalLight(opts.fill ?? 0x5b79b8, opts.fillIntensity ?? 0.45);
  fill.position.set(-10, 7, -8);
  scene.add(fill);
  return { hemi, dir, fill };
}

function makeGround(scene, color, radius = 25, opts = {}) {
  const geo = new THREE.CircleGeometry(radius, 64);
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.94,
    metalness: 0.02,
    flatShading: false,
  });
  const ground = new THREE.Mesh(geo, material);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const ringMat = new THREE.MeshBasicMaterial({ color: opts.ringColor ?? 0x8f7548, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false });
  for (const r of [5.5, 11.5, 18.5]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.05, 72), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.012;
    scene.add(ring);
  }

  // patches for a hand-painted ground
  const patchMat = new THREE.MeshStandardMaterial({ color: opts.patchColor ?? color, roughness: 1, transparent: true, opacity: 0.5 });
  for (let i = 0; i < 18; i++) {
    const patch = new THREE.Mesh(new THREE.CircleGeometry(1 + Math.random() * 2.6, 8), patchMat);
    const a = Math.random() * Math.PI * 2;
    const r = 3 + Math.random() * 20;
    patch.position.set(Math.cos(a) * r, 0.008, Math.sin(a) * r);
    patch.rotation.x = -Math.PI / 2;
    patch.rotation.z = Math.random() * Math.PI;
    patch.scale.y = 0.45 + Math.random() * 0.5;
    scene.add(patch);
  }
  return ground;
}

function createParticles(scene, opts = {}) {
  const count = opts.count ?? 80;
  const area = opts.area ?? 20;
  const height = opts.height ?? 8;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * area * 2;
    positions[i * 3 + 1] = Math.random() * height;
    positions[i * 3 + 2] = (Math.random() - 0.5) * area * 2;
    seeds[i * 4] = Math.random() * Math.PI * 2;
    seeds[i * 4 + 1] = 0.5 + Math.random();
    seeds[i * 4 + 2] = 0.5 + Math.random();
    seeds[i * 4 + 3] = Math.random() * 100;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: opts.color ?? 0xffb45a,
    size: opts.size ?? 0.09,
    transparent: true,
    opacity: opts.opacity ?? 0.75,
    depthWrite: false,
    blending: opts.blending ?? THREE.AdditiveBlending,
    sizeAttenuation: true,
    fog: false,
  });
  const points = new THREE.Points(geo, material);
  scene.add(points);
  const mode = opts.mode ?? 'rise';
  const speed = opts.speed ?? 0.4;
  return {
    points,
    update(t, dt) {
      const pos = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        if (mode === 'rise') {
          pos[ix + 1] += dt * speed * seeds[i * 4 + 1];
          pos[ix] += Math.sin(t * 0.7 + seeds[i * 4]) * dt * 0.12;
          if (pos[ix + 1] > height) pos[ix + 1] = 0;
        } else if (mode === 'fall') {
          pos[ix + 1] -= dt * speed * seeds[i * 4 + 1];
          pos[ix] += Math.sin(t * 0.4 + seeds[i * 4]) * dt * 0.16;
          if (pos[ix + 1] < 0) pos[ix + 1] = height;
        } else if (mode === 'drift') {
          pos[ix] += Math.sin(t * 0.3 + seeds[i * 4]) * dt * 0.3;
          pos[ix + 1] += Math.cos(t * 0.4 + seeds[i * 4 + 1]) * dt * 0.1;
          pos[ix + 2] += Math.cos(t * 0.25 + seeds[i * 4 + 2]) * dt * 0.3;
        } else if (mode === 'void') {
          pos[ix + 1] += dt * speed * 0.35;
          pos[ix] += Math.sin(t * 0.25 + seeds[i * 4]) * dt * 0.08;
          if (pos[ix + 1] > height) {
            pos[ix + 1] = 0;
            pos[ix] = (Math.random() - 0.5) * area * 2;
            pos[ix + 2] = (Math.random() - 0.5) * area * 2;
          }
        }
      }
      geo.attributes.position.needsUpdate = true;
    },
  };
}

function createTorch(scene, x, z, color = 0xffa04a, scale = 1, light = true) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const wood = mat('#4a3424', { roughness: 0.95 });
  addMesh(g, SHARED.stone, wood, [0, 1.15 * scale, 0], [0, 0, 0], [0.045 * scale, 2.3 * scale, 0.045 * scale]);
  addMesh(g, SHARED.cone, mat('#2a1b12'), [0, 2.38 * scale, 0], [0, 0, 0], [0.18 * scale, 0.26 * scale, 0.18 * scale]);
  const flameMat = glowMat(color, 2.6, 0.9);
  const flame = addMesh(g, SHARED.sphere, flameMat, [0, 2.55 * scale, 0], [0, 0, 0], [0.14 * scale, 0.26 * scale, 0.14 * scale]);
  flame.castShadow = false;
  const inner = addMesh(g, SHARED.sphere, glowMat(0xfff1c0, 3.2), [0, 2.55 * scale, 0], [0, 0, 0], [0.06 * scale, 0.16 * scale, 0.06 * scale]);
  inner.castShadow = false;
  let pointLight = null;
  if (light) {
    pointLight = new THREE.PointLight(color, 1.8, 9 * scale, 2);
    pointLight.position.set(0, 2.5 * scale, 0);
    g.add(pointLight);
  }
  scene.add(g);
  return { group: g, flame, inner, light: pointLight, baseY: 2.55 * scale, phase: Math.random() * 10 };
}

function createRock(scene, x, z, scale, color, radius = null) {
  const material = mat(color, { roughness: 0.98 });
  const mesh = new THREE.Mesh(SHARED.rock, material);
  mesh.position.set(x, scale * 0.36, z);
  mesh.scale.set(scale * (0.8 + Math.random() * 0.5), scale * (0.5 + Math.random() * 0.4), scale * (0.8 + Math.random() * 0.5));
  mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return { mesh, obstacle: { x, z, r: radius ?? scale * 0.65 } };
}

function createPillar(scene, x, z, height, color, opts = {}) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const stone = mat(color, { roughness: 0.95 });
  const dark = mat(opts.dark ?? '#2b2522', { roughness: 1 });
  addMesh(g, SHARED.box, dark, [0, 0.18, 0], [0, 0, 0], [1.05, 0.36, 1.05]);
  addMesh(g, SHARED.stone, stone, [0, height * 0.5 + 0.2, 0], [0, 0, 0], [0.4, height, 0.4]);
  addMesh(g, SHARED.box, stone, [0, height + 0.26, 0], [0, 0, 0], [0.75, 0.22, 0.75]);
  if (opts.moss) {
    addMesh(g, SHARED.sphere, mat('#4e6b3c', { roughness: 1 }), [0.16, height * 0.62, 0.22], [0, 0, 0], [0.22, 0.38, 0.16]);
    addMesh(g, SHARED.sphere, mat('#5d7d46', { roughness: 1 }), [-0.2, 0.25, 0.25], [0, 0, 0], [0.28, 0.2, 0.24]);
  }
  if (opts.broken) {
    addMesh(g, SHARED.cone, stone, [0.15, height + 0.42, 0.05], [0.3, 0, 0.4], [0.38, 0.3, 0.38]);
  }
  if (opts.glow) {
    const orb = addMesh(g, SHARED.octa, glowMat(opts.glow, 2.2), [0, height * 0.58, 0.3], [0, 0, 0], [0.09, 0.13, 0.09]);
    orb.castShadow = false;
    const l = new THREE.PointLight(opts.glow, 0.7, 5, 2);
    l.position.set(0, height * 0.58, 0.3);
    g.add(l);
  }
  scene.add(g);
  return { group: g, obstacle: { x, z, r: 0.6 } };
}

function createTree(scene, x, z, scale = 1, opts = {}) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const trunk = mat(opts.trunk ?? '#4b3625', { roughness: 1 });
  const leaf1 = mat(opts.leaf ?? '#355d36', { roughness: 1 });
  const leaf2 = mat(opts.leaf2 ?? '#477a42', { roughness: 1 });
  addMesh(g, SHARED.stone, trunk, [0, 1.1 * scale, 0], [0, 0, 0], [0.17 * scale, 2.2 * scale, 0.17 * scale]);
  addMesh(g, SHARED.cone, leaf1, [0, 2.4 * scale, 0], [0, 0, 0], [1.15 * scale, 1.5 * scale, 1.15 * scale]);
  addMesh(g, SHARED.cone, leaf2, [0.1 * scale, 3.15 * scale, 0.05 * scale], [0, 0.4, 0], [0.88 * scale, 1.3 * scale, 0.88 * scale]);
  addMesh(g, SHARED.cone, leaf1, [-0.05 * scale, 3.8 * scale, 0], [0, 1, 0], [0.6 * scale, 1.1 * scale, 0.6 * scale]);
  scene.add(g);
  return { group: g, obstacle: { x, z, r: 0.5 * scale } };
}

function createCrystal(scene, x, z, scale, color, light = true) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const crystalMat = glowMat(color, 1.4, 0.92);
  const main = addMesh(g, SHARED.octa, crystalMat, [0, 1.2 * scale, 0], [0.1, 0, 0.06], [0.28 * scale, 1.3 * scale, 0.28 * scale]);
  main.castShadow = false;
  addMesh(g, SHARED.octa, crystalMat, [0.32 * scale, 0.55 * scale, 0.08], [0.2, 0.4, 0.2], [0.12 * scale, 0.65 * scale, 0.12 * scale]);
  addMesh(g, SHARED.octa, crystalMat, [-0.3 * scale, 0.45 * scale, -0.06], [0.2, 0.8, -0.2], [0.1 * scale, 0.5 * scale, 0.1 * scale]);
  let pointLight = null;
  if (light) {
    pointLight = new THREE.PointLight(color, 1.3, 8, 2);
    pointLight.position.set(0, 1.2 * scale, 0);
    g.add(pointLight);
  }
  scene.add(g);
  return { group: g, main, light: pointLight, obstacle: { x, z, r: 0.45 * scale } };
}

function createLavaPool(scene, x, z, radius) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const outer = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 1.15, 28),
    new THREE.MeshStandardMaterial({ color: '#2b1a12', roughness: 1 })
  );
  outer.rotation.x = -Math.PI / 2;
  outer.position.y = 0.006;
  g.add(outer);
  const lavaMat = new THREE.MeshStandardMaterial({
    color: '#ff6b22',
    emissive: '#ff3d0d',
    emissiveIntensity: 1.9,
    roughness: 0.35,
    transparent: true,
    opacity: 0.96,
  });
  const lava = new THREE.Mesh(new THREE.CircleGeometry(radius, 28), lavaMat);
  lava.rotation.x = -Math.PI / 2;
  lava.position.y = 0.018;
  g.add(lava);
  const light = new THREE.PointLight('#ff6a24', 1.5, radius * 5, 2);
  light.position.y = 1.2;
  g.add(light);
  scene.add(g);
  return { group: g, lava, light, phase: Math.random() * 8 };
}

function createArch(scene, x, z, rotation, color) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotation;
  const stone = mat(color, { roughness: 0.95 });
  addMesh(g, SHARED.box, stone, [-1.15, 1.5, 0], [0, 0, 0], [0.5, 3, 0.55]);
  addMesh(g, SHARED.box, stone, [1.15, 1.5, 0], [0, 0, 0], [0.5, 3, 0.55]);
  addMesh(g, SHARED.box, stone, [0, 3.05, 0], [0, 0, 0], [2.8, 0.45, 0.55]);
  addMesh(g, SHARED.box, stone, [0, 3.35, 0], [0, 0, 0], [2.1, 0.18, 0.45]);
  scene.add(g);
  return { group: g, obstacle: { x, z, r: 1.2 } };
}

function createGrass(scene, x, z, color, scale = 1) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const m = mat(color, { roughness: 1 });
  for (let i = 0; i < 4; i++) {
    const blade = addMesh(g, SHARED.cone, m, [(Math.random() - 0.5) * 0.3, 0.2 * scale, (Math.random() - 0.5) * 0.3], [(Math.random() - 0.5) * 0.5, 0, (Math.random() - 0.5) * 0.5], [0.03 * scale, 0.45 * scale, 0.03 * scale]);
    blade.castShadow = false;
  }
  scene.add(g);
  return g;
}

function createStall(scene) {
  const g = new THREE.Group();
  g.position.set(-6.2, 0, -6.2);
  const wood = mat('#4a3424', { roughness: 0.95 });
  const cloth = mat('#7a2a2a', { roughness: 0.9, side: THREE.DoubleSide });
  const cloth2 = mat('#c9a25c', { roughness: 0.9, side: THREE.DoubleSide });
  addMesh(g, SHARED.box, wood, [0, 1.5, 0], [0, 0, 0], [4.8, 0.16, 2.6]);
  for (const x of [-2.1, 2.1]) {
    for (const z of [-1.05, 1.05]) {
      addMesh(g, SHARED.stone, wood, [x, 1.1, z], [0, 0, 0], [0.11, 2.2, 0.11]);
    }
  }
  for (let i = 0; i < 5; i++) {
    const stripe = addMesh(g, SHARED.box, i % 2 ? cloth : cloth2, [-1.9 + i * 0.95, 2.75, -0.1], [0, 0, 0], [0.96, 0.12, 2.8]);
    stripe.rotation.x = -0.08;
    stripe.castShadow = true;
  }
  addMesh(g, SHARED.box, wood, [0, 1.08, 1.15], [0, 0, 0], [3.8, 0.95, 0.35]);
  // wares
  addMesh(g, SHARED.cylinder, mat('#7a4d28'), [-1.2, 1.65, 0.95], [0, 0, 0], [0.18, 0.45, 0.18]);
  addMesh(g, SHARED.cylinder, mat('#6c5a8e'), [-0.7, 1.6, 0.9], [0, 0, 0], [0.15, 0.38, 0.15]);
  addMesh(g, SHARED.box, mat('#a58145'), [0.2, 1.62, 0.95], [0, 0.3, 0], [0.55, 0.32, 0.35]);
  addMesh(g, SHARED.sphere, mat('#b85d3e'), [1.1, 1.65, 0.92], [0, 0, 0], [0.16, 0.14, 0.16]);
  scene.add(g);
  return { group: g, obstacle: { x: -6.2, z: -6.2, r: 2.1 } };
}

function createFountain(scene) {
  const g = new THREE.Group();
  g.position.set(0, 0, -1.5);
  const stone = mat('#666a68', { roughness: 0.9 });
  const stoneDark = mat('#3f4443', { roughness: 1 });
  addMesh(g, new THREE.CylinderGeometry(2.1, 2.35, 0.45, 18), stoneDark, [0, 0.22, 0]);
  addMesh(g, new THREE.CylinderGeometry(1.95, 2.0, 0.2, 18), stone, [0, 0.5, 0]);
  const water = addMesh(g, new THREE.CircleGeometry(1.75, 28), new THREE.MeshStandardMaterial({
    color: '#4f93a8',
    emissive: '#1f5364',
    emissiveIntensity: 0.8,
    roughness: 0.2,
    metalness: 0.25,
    transparent: true,
    opacity: 0.88,
  }), [0, 0.58, 0], [-Math.PI / 2, 0, 0]);
  addMesh(g, new THREE.CylinderGeometry(0.35, 0.6, 1.9, 12), stone, [0, 1.25, 0]);
  addMesh(g, new THREE.CylinderGeometry(0.9, 1.0, 0.18, 14), stone, [0, 2.2, 0]);
  const topWater = addMesh(g, new THREE.CircleGeometry(0.8, 20), new THREE.MeshStandardMaterial({
    color: '#6cb6c7',
    emissive: '#2a7082',
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.85,
  }), [0, 2.32, 0], [-Math.PI / 2, 0, 0]);
  const glow = new THREE.PointLight('#7dd8e8', 1.1, 8, 2);
  glow.position.set(0, 1.8, 0);
  g.add(glow);
  scene.add(g);
  return { group: g, water, topWater, obstacle: { x: 0, z: -1.5, r: 2.45 } };
}

function createMapBoard(scene) {
  const g = new THREE.Group();
  g.position.set(6.4, 0, -3.4);
  const stone = mat('#555c60', { roughness: 0.85 });
  const dark = mat('#2e3338', { roughness: 0.9 });
  addMesh(g, new THREE.CylinderGeometry(1.25, 1.55, 0.55, 8), dark, [0, 0.27, 0]);
  addMesh(g, new THREE.CylinderGeometry(1.12, 1.2, 0.18, 8), stone, [0, 0.62, 0]);
  addMesh(g, new THREE.CylinderGeometry(0.18, 0.32, 1.0, 8), dark, [0, 1.15, 0]);
  const crystalColors = ['#ff9a4d', '#8ee078', '#8ed8f0', '#c08cff'];
  const crystals = [];
  crystalColors.forEach((c, i) => {
    const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
    const cg = new THREE.Group();
    cg.position.set(Math.cos(a) * 0.78, 1.55, Math.sin(a) * 0.78);
    const crystal = addMesh(cg, SHARED.octa, glowMat(c, 2), [0, 0, 0], [0, 0, 0], [0.13, 0.26, 0.13]);
    crystal.castShadow = false;
    cg.userData = { baseY: 1.55, phase: i * 1.7, color: c };
    g.add(cg);
    crystals.push(cg);
  });
  const light = new THREE.PointLight('#b69cff', 1.2, 8, 2);
  light.position.set(0, 1.9, 0);
  g.add(light);
  scene.add(g);
  return { group: g, crystals, light, obstacle: { x: 6.4, z: -3.4, r: 1.45 } };
}

function createBanner(scene, x, z, color, rotation = 0) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotation;
  const pole = mat('#3d2c1d', { roughness: 0.9 });
  addMesh(g, SHARED.stone, pole, [0, 1.7, 0], [0, 0, 0], [0.06, 3.4, 0.06]);
  addMesh(g, SHARED.box, mat(color, { side: THREE.DoubleSide, roughness: 0.9 }), [0.35, 2.6, 0], [0, 0, 0], [0.7, 1.6, 0.02]);
  addMesh(g, SHARED.cone, mat(color, { side: THREE.DoubleSide }), [0.35, 1.75, 0], [Math.PI, 0, 0], [0.35, 0.4, 0.02]);
  addMesh(g, SHARED.sphere, mat('#d4b56c', { metalness: 0.6 }), [0, 3.5, 0], [0, 0, 0], [0.09, 0.09, 0.09]);
  scene.add(g);
  return g;
}

/* ------------------------------------------------------------------ */
/* Title                                                               */
/* ------------------------------------------------------------------ */

export function buildTitleWorld() {
  const scene = new THREE.Scene();
  makeSky(scene, '#1a2238', '#6b3a2c', '#171a24', 16, 50, true);
  addLights(scene, { sky: 0x8fa6d8, ground: 0x3b2418, sun: 0xffc07a, sunIntensity: 2.4, sunX: 7, sunY: 12, sunZ: 8, fill: 0x4c6b9e, fillIntensity: 0.6 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(22, 64), new THREE.MeshStandardMaterial({ color: '#2b2a2d', roughness: 0.95 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  // dais
  addMesh(scene, new THREE.CylinderGeometry(8.2, 8.6, 0.45, 48), mat('#3a3434'), [2.4, 0.22, 0]);
  addMesh(scene, new THREE.CylinderGeometry(7.6, 7.8, 0.12, 48), mat('#4c4340'), [2.4, 0.5, 0]);
  const runeMat = new THREE.MeshBasicMaterial({ color: '#d7b36c', transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false });
  for (const r of [3.2, 5.3, 7.0]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.035, 64), runeMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(2.4, 0.57, 0);
    scene.add(ring);
  }
  // heroes
  const heroes = [];
  const layout = [
    [-1.9, 0.6, -0.2],
    [-0.4, 0.9, -1.1],
    [1.2, 0.5, -0.6],
    [2.8, 0.8, -1.2],
    [4.3, 0.5, 0.0],
  ];
  CLASSES.forEach((c, i) => {
    const hero = createHero(c.id);
    hero.position.set(layout[i][0], 0.56, layout[i][2]);
    hero.rotation.y = 0.25 - i * 0.12;
    hero.scale.setScalar(1.02 + (i === 2 ? 0.06 : 0));
    scene.add(hero);
    heroes.push(hero);
  });
  // torches
  const torches = [];
  for (const [x, z] of [[-3.6, -4], [1, -5.4], [5.8, -4.2], [8, 1], [-3.5, 2.4]]) {
    torches.push(createTorch(scene, x, z, 0xff9a4a, 1.15, true));
  }
  // distant silhouettes
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.2;
    const r = 17 + Math.random() * 4;
    const rock = new THREE.Mesh(SHARED.rock, mat('#1c1b22', { roughness: 1 }));
    rock.position.set(Math.cos(a) * r, 0.6 + Math.random() * 2, Math.sin(a) * r);
    rock.scale.set(2 + Math.random() * 3, 3 + Math.random() * 5, 2 + Math.random() * 3);
    rock.rotation.set(Math.random(), Math.random(), Math.random());
    scene.add(rock);
  }
  // moon
  const moon = new THREE.Mesh(new THREE.SphereGeometry(2.8, 24, 18), new THREE.MeshBasicMaterial({ color: '#e8d9b8', fog: false }));
  moon.position.set(-11, 12, -26);
  scene.add(moon);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture('#e8d9b8'), color: '#e8d9b8', transparent: true, opacity: 0.45, depthWrite: false, fog: false }));
  halo.scale.set(17, 17, 1);
  halo.position.copy(moon.position);
  scene.add(halo);

  const particles = createParticles(scene, { count: 100, area: 18, height: 8, color: 0xffa85a, size: 0.075, speed: 0.55, mode: 'rise' });
  const dust = createParticles(scene, { count: 60, area: 14, height: 7, color: 0xd6c4a4, size: 0.04, speed: 0.15, mode: 'drift', opacity: 0.35, blending: THREE.NormalBlending });

  const camera = new THREE.PerspectiveCamera(46, 16 / 9, 0.1, 140);
  const update = (t, dt) => {
    const orbit = Math.sin(t * 0.09) * 1.2;
    camera.position.set(2.4 + orbit, 3.6 + Math.sin(t * 0.16) * 0.15, 12.6);
    camera.lookAt(2.4, 1.45, -0.6);
    heroes.forEach((h, i) => animateHero(h, t + i * 0.6, { moving: 0 }));
    torches.forEach((torch, i) => {
      const flicker = 0.85 + Math.sin(t * 9 + i * 2.1) * 0.15;
      torch.flame.scale.y = 0.26 * flicker;
      if (torch.light) torch.light.intensity = 1.5 + Math.sin(t * 8 + i) * 0.3;
    });
    particles.update(t, dt);
    dust.update(t, dt);
  };
  return { scene, camera, update, heroes };
}

function makeGlowTexture(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(64, 64, 2, 64, 64, 64);
  grad.addColorStop(0, color);
  grad.addColorStop(0.25, color);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ------------------------------------------------------------------ */
/* Showcase / character select                                         */
/* ------------------------------------------------------------------ */

export function buildShowcaseWorld() {
  const scene = new THREE.Scene();
  makeSky(scene, '#0b0f19', '#232b3e', '#0b0f19', 8, 26, true);
  addLights(scene, { sky: 0x8098c4, ground: 0x1c1d24, sun: 0xffd6a0, sunIntensity: 1.5, sunX: 6, sunY: 12, sunZ: 8, fill: 0x5e4a8a, fillIntensity: 0.8 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(14, 48), new THREE.MeshStandardMaterial({ color: '#181b24', roughness: 0.9 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  const pedestal = new THREE.Group();
  addMesh(pedestal, new THREE.CylinderGeometry(1.65, 1.95, 0.28, 32), mat('#2d3039'), [0, 0.14, 0]);
  addMesh(pedestal, new THREE.CylinderGeometry(1.5, 1.62, 0.12, 32), mat('#4d4640'), [0, 0.34, 0]);
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.72, 1.8, 48), new THREE.MeshBasicMaterial({ color: '#e7c477', transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.42;
  pedestal.add(ring);
  scene.add(pedestal);

  const classLight = new THREE.PointLight('#6ea8e8', 3, 10, 2);
  classLight.position.set(0, 2.4, 2.6);
  scene.add(classLight);
  const rim = new THREE.PointLight('#c08cff', 2, 9, 2);
  rim.position.set(-2.8, 2.0, -2.2);
  scene.add(rim);
  const beamMat = new THREE.MeshBasicMaterial({ color: '#6ea8e8', transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.5, 7, 24, 1, true), beamMat);
  beam.position.y = 3.4;
  scene.add(beam);

  const particles = createParticles(scene, { count: 70, area: 7, height: 6, color: 0xd7c18e, size: 0.045, speed: 0.2, mode: 'rise', opacity: 0.6 });
  const embers = createParticles(scene, { count: 34, area: 5, height: 4, color: 0xff9a5a, size: 0.035, speed: 0.4, mode: 'rise', opacity: 0.5 });

  const camera = new THREE.PerspectiveCamera(35, 16 / 9, 0.1, 60);

  const state = { color: '#6ea8e8' };
  const setClass = (classId) => {
    const c = CLASSES.find((x) => x.id === classId) || CLASSES[0];
    classLight.color.set(c.color);
    rim.color.set(c.glow || c.color);
    beamMat.color.set(c.color);
    state.color = c.color;
  };
  const update = (t, dt) => {
    camera.position.set(-0.42 + Math.sin(t * 0.18) * 0.25, 1.36 + Math.sin(t * 0.22) * 0.04, 4.05);
    camera.lookAt(-0.15, 1.02, 0);
    ring.material.opacity = 0.38 + Math.sin(t * 2) * 0.12;
    particles.update(t, dt);
    embers.update(t, dt);
  };
  return { scene, camera, update, setClass, pedestal, state };
}

/* ------------------------------------------------------------------ */
/* Lobby                                                               */
/* ------------------------------------------------------------------ */

export function buildLobbyWorld() {
  const scene = new THREE.Scene();
  makeSky(scene, '#12182b', '#7b4a34', '#1b1d2a', 18, 55, true);
  addLights(scene, { sky: 0x93a7d4, ground: 0x4a3324, sun: 0xffbf83, sunIntensity: 2.2, sunX: 10, sunY: 15, sunZ: 9, fill: 0x5e6fae, fillIntensity: 0.5 });
  makeGround(scene, '#5c574d', 23, { ringColor: '#d5b978', patchColor: '#4a463f' });

  // central fountain
  const fountain = createFountain(scene);
  // market
  const stall = createStall(scene);
  const counter = new THREE.Group();
  counter.position.set(-6.2, 0, -4.25);
  addMesh(counter, SHARED.box, mat('#4a3424'), [0, 0.65, 0], [0, 0, 0], [3.8, 1.3, 0.7]);
  addMesh(counter, SHARED.box, mat('#7c5a35'), [0, 1.34, 0], [0, 0, 0], [4.0, 0.12, 0.9]);
  addMesh(counter, SHARED.box, mat('#2f241a'), [0, 0.2, 0.36], [0, 0, 0], [3.5, 0.28, 0.04]);
  scene.add(counter);
  const vendor = createVendor();
  vendor.position.set(-6.2, 0, -5.3);
  vendor.rotation.y = 0.05;
  scene.add(vendor);
  const dog = createDog();
  dog.position.set(-3.65, 0, -4.55);
  dog.rotation.y = -0.55;
  scene.add(dog);
  const vendorLabel = createTextSprite('Maelis  ·  Mercadora', '#f2d699', 0.44);
  vendorLabel.position.set(-6.2, 2.95, -5.3);
  scene.add(vendorLabel);
  const dogLabel = createTextSprite('Brasa  ·  Cão-guia', '#d8c39b', 0.35);
  dogLabel.position.set(-3.65, 1.4, -4.55);
  scene.add(dogLabel);

  // map board
  const mapBoard = createMapBoard(scene);
  const mapLabel = createTextSprite('Pedra dos Domínios', '#d9c6f5', 0.42);
  mapLabel.position.set(6.4, 2.85, -3.4);
  scene.add(mapLabel);

  // plaza decoration
  for (const [x, z, c] of [[-8.6, 1.6, '#7a2a2a'], [9.2, 2.4, '#2e4d7a'], [-9.5, -8.5, '#6c5328'], [9.8, -8.2, '#4f6a3a']]) {
    createBanner(scene, x, z, c, Math.atan2(-x, -z));
  }
  const torches = [];
  for (const [x, z] of [[-9.2, -2.2], [-2.6, -7.6], [3.4, -7.4], [9.5, -1.2], [2.2, 5.0], [-8.8, 5.8]]) {
    torches.push(createTorch(scene, x, z, 0xffb35c, 1.1, true));
  }
  // trees & crates
  const props = [];
  for (const [x, z, s] of [[-11.5, 4.5, 1.1], [11.8, 5.4, 1.25], [12.2, -10.2, 1.0], [-12.4, -10.8, 1.15]]) {
    props.push(createTree(scene, x, z, s, { leaf: '#3c5d3a', leaf2: '#537b48' }));
  }
  for (const [x, z, s] of [[-9.8, -4.6, 0.45], [-8.9, -4.1, 0.35], [8.9, -6.4, 0.4], [9.7, -5.7, 0.3]]) {
    const crate = new THREE.Group();
    crate.position.set(x, 0, z);
    addMesh(crate, SHARED.box, mat('#5a432b'), [0, s, 0], [0, 0.2, 0], [s * 1.4, s * 1.4, s * 1.4]);
    addMesh(crate, SHARED.box, mat('#3d2c1b'), [0, s, 0], [0, 0.2, 0], [s * 1.5, s * 0.12, s * 1.5]);
    scene.add(crate);
    props.push({ obstacle: { x, z, r: s * 0.9 } });
  }
  // flower beds
  for (let i = 0; i < 16; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 8 + Math.random() * 10;
    createGrass(scene, Math.cos(a) * r, Math.sin(a) * r, i % 2 ? '#6d8a4d' : '#8a7c45', 0.7);
  }
  const fireflies = createParticles(scene, { count: 55, area: 15, height: 4.5, color: 0xffd68a, size: 0.055, speed: 0.12, mode: 'drift', opacity: 0.6 });
  const dust = createParticles(scene, { count: 40, area: 12, height: 6, color: 0xd8c8a8, size: 0.035, speed: 0.08, mode: 'rise', opacity: 0.22, blending: THREE.NormalBlending });

  const obstacles = [fountain.obstacle, stall.obstacle, mapBoard.obstacle, ...props.map((p) => p.obstacle)];
  const interactables = [
    { type: 'shop', x: -5.6, z: -4.2, range: 3.1, label: 'Falar com Maelis' },
    { type: 'maps', x: 6.4, z: -2.0, range: 2.9, label: 'Consultar os domínios' },
  ];

  const update = (t, dt) => {
    animateVendor(vendor, t);
    animateDog(dog, t);
    torches.forEach((torch, i) => {
      const flicker = 0.9 + Math.sin(t * 10 + i * 1.7) * 0.1;
      torch.flame.scale.y = 0.26 * flicker;
      torch.inner.scale.y = 0.16 * flicker;
      if (torch.light) torch.light.intensity = 1.5 + Math.sin(t * 9 + i) * 0.35;
    });
    fountain.water.rotation.z = t * 0.05;
    fountain.topWater.rotation.z = -t * 0.1;
    fountain.water.material.emissiveIntensity = 0.6 + Math.sin(t * 2) * 0.2;
    mapBoard.crystals.forEach((c, i) => {
      c.position.y = c.userData.baseY + Math.sin(t * 1.8 + c.userData.phase) * 0.08;
      c.rotation.y = t * 0.7 + i;
    });
    mapBoard.light.intensity = 1.0 + Math.sin(t * 2.2) * 0.3;
    vendorLabel.position.y = 2.95 + Math.sin(t * 1.4) * 0.035;
    dogLabel.position.y = 1.4 + Math.sin(t * 1.6 + 1) * 0.03;
    mapLabel.position.y = 2.85 + Math.sin(t * 1.5 + 2) * 0.04;
    fireflies.update(t, dt);
    dust.update(t, dt);
  };

  return {
    scene,
    vendor,
    dog,
    mapBoard,
    fountain,
    obstacles,
    interactables,
    playerStart: new THREE.Vector3(0, 0, 7.4),
    bounds: 19,
    update,
  };
}

/* ------------------------------------------------------------------ */
/* Adventure maps                                                      */
/* ------------------------------------------------------------------ */

export function buildAdventureWorld(mapId) {
  const map = MAPS.find((m) => m.id === mapId) || MAPS[0];
  const scene = new THREE.Scene();
  const obstacles = [];
  const animated = {};
  let particles = [];
  let torches = [];
  let lavaPools = [];
  let floatingRocks = [];
  let crystals = [];
  let pines = [];

  if (mapId === 'crypt') {
    makeSky(scene, '#160c10', '#4a1e16', '#241313', 18, 52);
    addLights(scene, { sky: 0x9e7e86, ground: 0x3a1a14, sun: 0xffb56e, sunIntensity: 2.0, sunX: 8, sunY: 14, sunZ: 5, fill: 0x6b3c48, fillIntensity: 0.5 });
    makeGround(scene, '#332a27', 25, { ringColor: '#b86a3e', patchColor: '#241d1b' });
    for (const [x, z, r] of [[-7, -4, 2.4], [6.5, 3.5, 1.8], [-4.5, 8, 1.5], [9, -8, 2.1]]) {
      lavaPools.push(createLavaPool(scene, x, z, r));
    }
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2 + 0.25;
      const r = 17.5 + Math.random() * 2;
      const p = createPillar(scene, Math.cos(a) * r, Math.sin(a) * r, 3.2 + Math.random() * 2.2, '#4a3e38', { broken: i % 3 === 0, moss: i % 4 === 0, glow: i % 5 === 0 ? '#ff7a3a' : null });
      obstacles.push(p.obstacle);
    }
    createArch(scene, -11.5, 4.5, 0.4, '#4a3e38');
    createArch(scene, 11.8, -3.8, -0.6, '#4a3e38');
    for (const [x, z, s] of [[-12, -6, 1.2], [12.6, 5.4, 1.5], [-10.2, 10.8, 1], [7.8, -12, 1.3], [-13, 1.2, 0.8]]) {
      const rock = createRock(scene, x, z, s, '#3a302b', s * 0.7);
      obstacles.push(rock.obstacle);
    }
    // bone piles
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 6 + Math.random() * 12;
      const bone = addMesh(scene, SHARED.sphere, mat('#a79c85', { roughness: 0.9 }), [Math.cos(a) * r, 0.12, Math.sin(a) * r], [Math.random(), Math.random(), Math.random()], [0.08, 0.05, 0.3]);
      bone.castShadow = false;
    }
    for (const [x, z] of [[-9, -2], [-3, -9], [4, -9], [9, -2], [3, 8], [-8, 7]]) {
      torches.push(createTorch(scene, x, z, 0xff8b3d, 1.1, true));
    }
    particles.push(createParticles(scene, { count: 110, area: 20, height: 9, color: 0xff7a35, size: 0.08, speed: 0.5, mode: 'rise' }));
    particles.push(createParticles(scene, { count: 50, area: 18, height: 6, color: 0xb09b82, size: 0.04, speed: 0.08, mode: 'drift', opacity: 0.28, blending: THREE.NormalBlending }));
  } else if (mapId === 'ruins') {
    makeSky(scene, '#101c18', '#4a5c35', '#1a2a1d', 18, 52);
    addLights(scene, { sky: 0x9dbd8e, ground: 0x2c3a22, sun: 0xf3e5b0, sunIntensity: 2.4, sunX: -8, sunY: 15, sunZ: 7, fill: 0x507f62, fillIntensity: 0.6 });
    makeGround(scene, '#3e4c30', 25, { ringColor: '#9bb269', patchColor: '#2d3b22' });
    // central ruin platform
    addMesh(scene, new THREE.CylinderGeometry(4.2, 4.5, 0.25, 24), mat('#5a5b45'), [0, 0.12, 0]);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const r = 17 + Math.random() * 2.5;
      const p = createPillar(scene, Math.cos(a) * r, Math.sin(a) * r, 2.8 + Math.random() * 2.6, '#5a5b45', { moss: true, broken: i % 2 === 0, glow: i % 4 === 0 ? '#9fe06f' : null });
      obstacles.push(p.obstacle);
    }
    for (const [x, z, s] of [[-11.5, -4.5, 1.4], [11.8, 3.5, 1.6], [-10.8, 9.5, 1.2], [12.5, -9.8, 1.3], [8.2, 11.5, 1.1], [-13.5, 1.5, 0.9], [1.5, -13.5, 1.0]]) {
      const t = createTree(scene, x, z, s, { trunk: '#453322', leaf: '#355d36', leaf2: '#4f7f45' });
      obstacles.push(t.obstacle);
    }
    // ruined statue
    const statue = new THREE.Group();
    statue.position.set(-6.5, 0, -8.5);
    addMesh(statue, SHARED.box, mat('#555b48'), [0, 0.4, 0], [0, 0, 0], [1.6, 0.8, 1.6]);
    addMesh(statue, SHARED.stone, mat('#62684f'), [0, 1.6, 0], [0, 0, 0], [0.55, 2.2, 0.55]);
    addMesh(statue, SHARED.sphere, mat('#62684f'), [0, 3.0, 0], [0, 0, 0], [0.4, 0.45, 0.4]);
    addMesh(statue, SHARED.box, mat('#62684f'), [0, 2.0, 0.5], [0.4, 0, 0], [1.3, 0.25, 0.25]);
    scene.add(statue);
    obstacles.push({ x: -6.5, z: -8.5, r: 1.4 });
    for (let i = 0; i < 30; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 4 + Math.random() * 18;
      createGrass(scene, Math.cos(a) * r, Math.sin(a) * r, i % 3 === 0 ? '#93a957' : '#557a3d', 0.7 + Math.random() * 0.6);
    }
    for (const [x, z] of [[-8, -2], [-2, -10], [5, -9], [10, -1], [4, 8], [-9, 7]]) {
      torches.push(createTorch(scene, x, z, 0xffc46a, 1.05, true));
    }
    // glowing flowers
    for (let i = 0; i < 24; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 5 + Math.random() * 14;
      const f = addMesh(scene, SHARED.sphere, glowMat(i % 2 ? '#b9ff7a' : '#7ce0c0', 1.6), [Math.cos(a) * r, 0.2 + Math.random() * 0.2, Math.sin(a) * r], [0, 0, 0], [0.04, 0.04, 0.04]);
      f.castShadow = false;
    }
    particles.push(createParticles(scene, { count: 80, area: 19, height: 6, color: 0xc6ff8a, size: 0.06, speed: 0.15, mode: 'drift', opacity: 0.65 }));
    particles.push(createParticles(scene, { count: 40, area: 16, height: 5, color: 0xf0e2b0, size: 0.035, speed: 0.2, mode: 'rise', opacity: 0.4 }));
  } else if (mapId === 'ice') {
    makeSky(scene, '#0a1722', '#8fb4c4', '#a9c6d3', 20, 56);
    addLights(scene, { sky: 0xbfe6ff, ground: 0x52748a, sun: 0xe8f6ff, sunIntensity: 2.3, sunX: 7, sunY: 16, sunZ: 8, fill: 0x7ca9d8, fillIntensity: 0.7 });
    makeGround(scene, '#b6d5df', 25, { ringColor: '#6fa9c0', patchColor: '#9fc4d0', roughness: 0.5 });
    // frozen pond
    const pond = addMesh(scene, new THREE.CircleGeometry(5.5, 32), new THREE.MeshStandardMaterial({ color: '#7fb8cc', emissive: '#35697d', emissiveIntensity: 0.5, roughness: 0.18, metalness: 0.3, transparent: true, opacity: 0.72 }), [-5, 0.015, -6], [-Math.PI / 2, 0, 0]);
    animated.pond = pond;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const r = 17.5 + Math.random() * 2.5;
      const c = createCrystal(scene, Math.cos(a) * r, Math.sin(a) * r, 0.7 + Math.random() * 0.9, i % 2 ? '#9fe7ff' : '#7cc8e8', i % 3 === 0);
      crystals.push(c);
      obstacles.push(c.obstacle);
    }
    for (const [x, z, s] of [[-12, 3.5, 1.2], [12.2, -4.5, 1.4], [-11.2, -11, 1.1], [11.5, 9.5, 1.25], [1.8, 12.8, 1.0], [-14, 8, 0.9]]) {
      const p = createPine(scene, x, z, s);
      pines.push(p);
      obstacles.push(p.obstacle);
    }
    for (const [x, z, s] of [[-10, -3, 1.2], [10.8, 4.5, 1.4], [-3.5, 11.5, 1.0], [7.5, -12, 1.1], [13.8, -0.5, 0.8]]) {
      const rock = createRock(scene, x, z, s, '#7e9ba7', s * 0.7);
      obstacles.push(rock.obstacle);
    }
    for (const [x, z] of [[-8, -2], [-2, -9], [5, -9], [10, -1], [4, 8], [-9, 7]]) {
      torches.push(createTorch(scene, x, z, 0x8fdcff, 1.05, true));
    }
    particles.push(createParticles(scene, { count: 180, area: 23, height: 10, color: 0xffffff, size: 0.07, speed: 0.55, mode: 'fall', opacity: 0.8, blending: THREE.NormalBlending }));
    particles.push(createParticles(scene, { count: 55, area: 18, height: 5, color: 0xbfeaff, size: 0.04, speed: 0.12, mode: 'drift', opacity: 0.5 }));
  } else {
    makeSky(scene, '#08050e', '#2a163d', '#160d21', 18, 54, true);
    addLights(scene, { sky: 0x8e7bc4, ground: 0x24152f, sun: 0xc79cff, sunIntensity: 1.9, sunX: 9, sunY: 15, sunZ: 6, fill: 0x4e2a7a, fillIntensity: 0.8 });
    makeGround(scene, '#241b31', 25, { ringColor: '#9b6ee8', patchColor: '#170f22' });
    // central obsidian platform
    addMesh(scene, new THREE.CylinderGeometry(4.6, 5.0, 0.3, 8), mat('#332543'), [0, 0.14, 0]);
    const runeRing = new THREE.Mesh(new THREE.RingGeometry(4.7, 4.9, 8), new THREE.MeshBasicMaterial({ color: '#b78cff', transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }));
    runeRing.rotation.x = -Math.PI / 2;
    runeRing.position.y = 0.32;
    scene.add(runeRing);
    animated.runeRing = runeRing;
    for (let i = 0; i < 11; i++) {
      const a = (i / 11) * Math.PI * 2;
      const r = 17.5 + Math.random() * 2.5;
      const p = createPillar(scene, Math.cos(a) * r, Math.sin(a) * r, 3.5 + Math.random() * 2.6, '#3a2b4e', { dark: '#1a1124', broken: i % 4 === 0, glow: i % 3 === 0 ? '#a779ff' : null });
      obstacles.push(p.obstacle);
    }
    for (const [x, z, s] of [[-11, -4, 1.2], [12, 5, 1.5], [-9, 11, 1.0], [10.5, -11, 1.3], [13.8, -2, 0.9]]) {
      const c = createCrystal(scene, x, z, s, '#b07cff', true);
      crystals.push(c);
      obstacles.push(c.obstacle);
    }
    // floating debris
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 6 + Math.random() * 13;
      const rock = new THREE.Mesh(SHARED.rock, mat('#2e203d', { roughness: 1 }));
      rock.position.set(Math.cos(a) * r, 2 + Math.random() * 3.5, Math.sin(a) * r);
      rock.scale.set(0.4 + Math.random() * 0.8, 0.3 + Math.random() * 0.6, 0.4 + Math.random() * 0.8);
      rock.castShadow = true;
      scene.add(rock);
      floatingRocks.push({ mesh: rock, baseY: rock.position.y, phase: Math.random() * 6, speed: 0.4 + Math.random() * 0.6 });
    }
    for (const [x, z] of [[-8, -2], [-2, -9], [5, -9], [10, -1], [4, 8], [-9, 7]]) {
      torches.push(createTorch(scene, x, z, 0xb07cff, 1.1, true));
    }
    // void cracks
    for (let i = 0; i < 7; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 7 + Math.random() * 11;
      const crack = addMesh(scene, SHARED.box, glowMat('#8c56e8', 1.2, 0.6), [Math.cos(a) * r, 0.012, Math.sin(a) * r], [0, Math.random() * Math.PI, 0], [0.06, 0.01, 1 + Math.random() * 2.5]);
      crack.castShadow = false;
    }
    particles.push(createParticles(scene, { count: 100, area: 21, height: 9, color: 0xb07cff, size: 0.07, speed: 0.3, mode: 'void' }));
    particles.push(createParticles(scene, { count: 45, area: 16, height: 7, color: 0x7a5aab, size: 0.04, speed: 0.1, mode: 'drift', opacity: 0.4 }));
  }

  // boundary rocks common
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2 + 0.1;
    const r = 23.5 + Math.random() * 2.2;
    const s = 1.2 + Math.random() * 1.8;
    const color = mapId === 'ice' ? '#7e9ba7' : mapId === 'ruins' ? '#3d4a32' : mapId === 'citadel' ? '#1d1428' : '#2e2420';
    const rock = new THREE.Mesh(SHARED.rock, mat(color, { roughness: 1 }));
    rock.position.set(Math.cos(a) * r, s * 0.3, Math.sin(a) * r);
    rock.scale.set(s * 1.4, s * 0.8, s * 1.4);
    rock.rotation.set(Math.random(), Math.random(), Math.random());
    rock.castShadow = true;
    scene.add(rock);
  }

  const spawnPoints = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const r = 12 + (i % 3) * 2.2;
    spawnPoints.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
  }

  const update = (t, dt) => {
    torches.forEach((torch, i) => {
      const flicker = 0.88 + Math.sin(t * 10 + i * 1.9) * 0.12;
      torch.flame.scale.y = 0.26 * flicker;
      torch.inner.scale.y = 0.16 * flicker;
      if (torch.light) torch.light.intensity = 1.4 + Math.sin(t * 9 + i) * 0.3;
    });
    lavaPools.forEach((pool) => {
      pool.lava.scale.setScalar(1 + Math.sin(t * 1.4 + pool.phase) * 0.025);
      pool.light.intensity = 1.3 + Math.sin(t * 2.3 + pool.phase) * 0.3;
    });
    crystals.forEach((c, i) => {
      c.group.rotation.y = t * 0.15 + i;
      if (c.main) c.main.scale.y = 1.3 + Math.sin(t * 1.8 + i) * 0.04;
      if (c.light) c.light.intensity = 1.0 + Math.sin(t * 2 + i) * 0.3;
    });
    floatingRocks.forEach((r) => {
      r.mesh.position.y = r.baseY + Math.sin(t * r.speed + r.phase) * 0.5;
      r.mesh.rotation.y += dt * 0.1;
      r.mesh.rotation.x += dt * 0.04;
    });
    if (animated.runeRing) {
      animated.runeRing.rotation.z = t * 0.08;
      animated.runeRing.material.opacity = 0.35 + Math.sin(t * 1.7) * 0.15;
    }
    if (animated.pond) animated.pond.material.emissiveIntensity = 0.4 + Math.sin(t * 1.2) * 0.15;
    particles.forEach((p) => p.update(t, dt));
  };

  const camera = new THREE.PerspectiveCamera(48, 16 / 9, 0.1, 120);
  return {
    scene,
    camera,
    obstacles,
    spawnPoints,
    playerStart: new THREE.Vector3(0, 0, 9),
    bounds: 21,
    bossSpawn: new THREE.Vector3(0, 0, -11),
    update,
    map,
  };
}

function createPine(scene, x, z, scale) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const trunk = mat('#3e3428', { roughness: 1 });
  const leaf = mat('#2f5a5f', { roughness: 0.95 });
  const snow = mat('#e8f4f7', { roughness: 0.9 });
  addMesh(g, SHARED.stone, trunk, [0, 1.2 * scale, 0], [0, 0, 0], [0.14 * scale, 2.4 * scale, 0.14 * scale]);
  addMesh(g, SHARED.cone, leaf, [0, 2.5 * scale, 0], [0, 0, 0], [1.0 * scale, 1.8 * scale, 1.0 * scale]);
  addMesh(g, SHARED.cone, snow, [0, 2.9 * scale, 0], [0, 0.3, 0], [0.86 * scale, 1.2 * scale, 0.86 * scale]);
  addMesh(g, SHARED.cone, leaf, [0, 3.5 * scale, 0], [0, 0.8, 0], [0.65 * scale, 1.4 * scale, 0.65 * scale]);
  addMesh(g, SHARED.cone, snow, [0, 3.9 * scale, 0], [0, 0.2, 0], [0.5 * scale, 0.8 * scale, 0.5 * scale]);
  scene.add(g);
  return { group: g, obstacle: { x, z, r: 0.55 * scale } };
}

/* ------------------------------------------------------------------ */
/* Map dioramas for the world map                                      */
/* ------------------------------------------------------------------ */

export function buildMapDiorama(mapId) {
  const map = MAPS.find((m) => m.id === mapId) || MAPS[0];
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(mapId === 'ice' ? '#a8c6d4' : mapId === 'ruins' ? '#28381f' : mapId === 'citadel' ? '#160d24' : '#251313');
  scene.fog = new THREE.Fog(scene.background, 8, 26);
  const hemi = new THREE.HemisphereLight(0xffffff, 0x332211, 1.4);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(0xffffff, 2.2);
  dir.position.set(5, 9, 6);
  dir.castShadow = true;
  dir.shadow.mapSize.set(512, 512);
  dir.shadow.camera.left = -8;
  dir.shadow.camera.right = 8;
  dir.shadow.camera.top = 8;
  dir.shadow.camera.bottom = -8;
  scene.add(dir);
  const groundColor = mapId === 'ice' ? '#b6d5df' : mapId === 'ruins' ? '#3e4c30' : mapId === 'citadel' ? '#241b31' : '#332a27';
  const ground = new THREE.Mesh(new THREE.CircleGeometry(9, 40), new THREE.MeshStandardMaterial({ color: groundColor, roughness: 0.95 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  // central landmark
  if (mapId === 'crypt') {
    createLavaPool(scene, 1.2, 0.5, 1.3);
    createPillar(scene, -2.2, -1.2, 3.2, '#4a3e38', { broken: true, glow: '#ff7a3a' });
    createArch(scene, 1.8, -2.2, 0.5, '#4a3e38');
    createTorch(scene, -3.1, 2.1, 0xff8b3d, 0.8, false);
  } else if (mapId === 'ruins') {
    createTree(scene, -1.8, -1.2, 1.15, { leaf: '#355d36', leaf2: '#4f7f45' });
    createTree(scene, 2.4, 1.2, 0.8, { leaf: '#355d36', leaf2: '#4f7f45' });
    createPillar(scene, 1.2, -2.4, 2.6, '#5a5b45', { moss: true, broken: true });
    createGrass(scene, -1, 2.2, '#93a957', 1.2);
    createGrass(scene, 2.8, 2.8, '#557a3d', 0.9);
  } else if (mapId === 'ice') {
    createCrystal(scene, 0.4, -0.5, 1.1, '#9fe7ff', true);
    createPine(scene, -2.5, -1, 1.0);
    createPine(scene, 2.7, 0.6, 0.8);
    const pond = addMesh(scene, new THREE.CircleGeometry(2.2, 24), new THREE.MeshStandardMaterial({ color: '#7fb8cc', emissive: '#35697d', emissiveIntensity: 0.5, roughness: 0.18, metalness: 0.3, transparent: true, opacity: 0.75 }), [1.6, 0.02, 2.2], [-Math.PI / 2, 0, 0]);
    pond.castShadow = false;
  } else {
    createPillar(scene, -1.7, -1.4, 3.5, '#3a2b4e', { dark: '#1a1124', glow: '#a779ff' });
    createPillar(scene, 2.2, -0.8, 2.8, '#3a2b4e', { dark: '#1a1124', broken: true, glow: '#a779ff' });
    createCrystal(scene, 0.2, 1.4, 1.0, '#b07cff', true);
    const runeRing = new THREE.Mesh(new THREE.RingGeometry(2.0, 2.15, 8), new THREE.MeshBasicMaterial({ color: '#b78cff', transparent: true, opacity: 0.55, side: THREE.DoubleSide }));
    runeRing.rotation.x = -Math.PI / 2;
    runeRing.position.y = 0.03;
    scene.add(runeRing);
    for (let i = 0; i < 4; i++) {
      const rock = new THREE.Mesh(SHARED.rock, mat('#2e203d'));
      rock.position.set(-3 + i * 2, 1.4 + (i % 2) * 0.6, -2.5 + (i % 3));
      rock.scale.setScalar(0.3 + (i % 2) * 0.2);
      scene.add(rock);
    }
  }
  // atmospheric particles for thumbnail
  if (mapId === 'ice') {
    const snow = createParticles(scene, { count: 90, area: 9, height: 6, color: 0xffffff, size: 0.07, speed: 0.5, mode: 'fall', opacity: 0.9, blending: THREE.NormalBlending });
    snow.update(0, 0.4);
  } else if (mapId === 'crypt') {
    const embers = createParticles(scene, { count: 55, area: 8, height: 5, color: 0xff7a35, size: 0.07, speed: 0.5, mode: 'rise' });
    embers.update(0, 0.4);
  } else if (mapId === 'ruins') {
    const flies = createParticles(scene, { count: 45, area: 8, height: 4, color: 0xc6ff8a, size: 0.06, speed: 0.1, mode: 'drift' });
    flies.update(0, 0.4);
  } else {
    const voidP = createParticles(scene, { count: 50, area: 8, height: 5, color: 0xb07cff, size: 0.07, speed: 0.3, mode: 'void' });
    voidP.update(0, 0.4);
  }
  const camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.1, 40);
  camera.position.set(0.5, 3.0, 7.2);
  camera.lookAt(0, 1.0, 0);
  return { scene, camera, map };
}
