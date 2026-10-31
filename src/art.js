import * as THREE from 'three';
import { CLASSES, MAPS } from './data.js';
import { createDog, createHero, createVendor } from './models.js';
import { buildMapDiorama } from './worlds.js';

function rgba(hex, alpha) {
  const c = new THREE.Color(hex);
  return `rgba(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)},${alpha})`;
}

function makeBackdrop(color, w, h, warm = false) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const base = ctx.createLinearGradient(0, 0, 0, h);
  base.addColorStop(0, warm ? '#21140d' : '#0b111d');
  base.addColorStop(0.55, warm ? '#17100c' : '#0c111a');
  base.addColorStop(1, warm ? '#0a0705' : '#070a11');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);

  const glow = ctx.createRadialGradient(w * 0.5, h * 0.32, 2, w * 0.5, h * 0.32, w * 0.62);
  glow.addColorStop(0, rgba(color, warm ? 0.5 : 0.4));
  glow.addColorStop(0.45, rgba(color, 0.14));
  glow.addColorStop(1, rgba(color, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  const floor = ctx.createRadialGradient(w * 0.5, h * 0.92, 2, w * 0.5, h * 0.92, w * 0.52);
  floor.addColorStop(0, rgba(color, 0.26));
  floor.addColorStop(1, rgba(color, 0));
  ctx.fillStyle = floor;
  ctx.fillRect(0, 0, w, h);

  // subtle vignette
  const vignette = ctx.createRadialGradient(w * 0.5, h * 0.45, w * 0.2, w * 0.5, h * 0.45, w * 0.75);
  vignette.addColorStop(0, 'rgba(0,0,0,0)');
  vignette.addColorStop(1, 'rgba(0,0,0,0.5)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, w, h);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function generateArt() {
  const portraits = { classes: {}, vendor: null };
  const thumbs = {};
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
  } catch {
    return { portraits, thumbs };
  }
  renderer.setPixelRatio(1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 320 / 420, 0.1, 40);
  camera.position.set(0.14, 1.26, 3.55);
  camera.lookAt(0, 1.04, 0);

  const hemi = new THREE.HemisphereLight(0xbfd0ee, 0x1a1410, 1.35);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffe0b0, 2.6);
  key.position.set(2.4, 4.2, 3.2);
  key.castShadow = true;
  key.shadow.mapSize.set(512, 512);
  key.shadow.camera.left = -2.5;
  key.shadow.camera.right = 2.5;
  key.shadow.camera.top = 3;
  key.shadow.camera.bottom = -1;
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 12;
  key.shadow.bias = -0.001;
  scene.add(key);
  const fill = new THREE.PointLight(0x6ea8e8, 3.2, 9, 2);
  fill.position.set(-2.4, 2.2, 2.2);
  scene.add(fill);
  const rim = new THREE.PointLight(0xc08cff, 2.6, 8, 2);
  rim.position.set(1.6, 2.6, -2.6);
  scene.add(rim);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(2.4, 40),
    new THREE.MeshStandardMaterial({ color: '#171b24', roughness: 0.95, metalness: 0.05 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.015;
  floor.receiveShadow = true;
  scene.add(floor);
  const floorRing = new THREE.Mesh(
    new THREE.RingGeometry(1.35, 1.43, 48),
    new THREE.MeshBasicMaterial({ color: '#6ea8e8', transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false })
  );
  floorRing.rotation.x = -Math.PI / 2;
  floorRing.position.y = 0.005;
  scene.add(floorRing);

  let currentHero = null;
  const clearHero = () => {
    if (currentHero) {
      scene.remove(currentHero);
      currentHero = null;
    }
  };

  try {
    renderer.setSize(320, 420, false);
    camera.aspect = 320 / 420;
    camera.updateProjectionMatrix();
    for (const c of CLASSES) {
      scene.background = makeBackdrop(c.color, 320, 420);
      key.color.set(c.color);
      fill.color.set(c.color);
      rim.color.set(c.color);
      floorRing.material.color.set(c.color);
      clearHero();
      currentHero = createHero(c.id);
      currentHero.position.set(0, 0, 0);
      currentHero.rotation.y = 0.06;
      scene.add(currentHero);
      renderer.render(scene, camera);
      portraits.classes[c.id] = renderer.domElement.toDataURL('image/jpeg', 0.9);
    }

    // Maelis and Brasa portrait
    clearHero();
    scene.background = makeBackdrop('#d2a84e', 320, 320, true);
    key.color.set('#ffcf8a');
    fill.color.set('#ff9a4a');
    rim.color.set('#e8c477');
    floorRing.material.color.set('#d2a84e');
    camera.aspect = 1;
    camera.position.set(0.25, 1.32, 4.05);
    camera.lookAt(0, 1.02, 0);
    camera.updateProjectionMatrix();
    renderer.setSize(320, 320, false);
    const vendor = createVendor();
    vendor.position.set(-0.52, 0, 0);
    vendor.rotation.y = 0.05;
    scene.add(vendor);
    const dog = createDog();
    dog.position.set(0.78, 0, 0.22);
    dog.rotation.y = -0.62;
    scene.add(dog);
    renderer.render(scene, camera);
    portraits.vendor = renderer.domElement.toDataURL('image/jpeg', 0.9);
    scene.remove(vendor);
    scene.remove(dog);

    // Map dioramas
    renderer.setSize(480, 300, false);
    for (const map of MAPS) {
      const diorama = buildMapDiorama(map.id);
      diorama.camera.aspect = 480 / 300;
      diorama.camera.updateProjectionMatrix();
      renderer.render(diorama.scene, diorama.camera);
      thumbs[map.id] = renderer.domElement.toDataURL('image/jpeg', 0.88);
    }
  } catch (err) {
    console.warn('Falha ao gerar arte procedural', err);
  } finally {
    try {
      renderer.dispose();
      renderer.forceContextLoss();
    } catch {
      /* ignore */
    }
  }

  return { portraits, thumbs };
}
