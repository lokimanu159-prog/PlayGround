import * as THREE from 'three';
import { createGroundRing } from './models.js';

/**
 * Lightweight, self-cleaning visual effects. Every effect owns its geometry and
 * material (except the shared impact sphere) so it can be removed safely while
 * the world keeps its shared meshes alive.
 */
export class FX {
  constructor(scene) {
    this.scene = scene;
    this.items = [];
    this.sphereGeo = new THREE.SphereGeometry(1, 10, 8);
    this.shockGeo = new THREE.TorusGeometry(1, 0.035, 6, 28);
  }

  add(mesh, life, update) {
    this.scene.add(mesh);
    this.items.push({ mesh, life: Math.max(0.05, life), t: 0, update });
  }

  ring(pos, radius, color, life = 0.55, start = 0.18) {
    const mesh = createGroundRing(color, radius, 0.72);
    mesh.position.set(pos.x, 0.065, pos.z);
    mesh.scale.setScalar(start);
    const mat = mesh.material;
    this.add(mesh, life, (p) => {
      const s = start + (1 - start) * p;
      mesh.scale.setScalar(s);
      mat.opacity = 0.72 * (1 - p);
    });
  }

  slash(pos, facing, range, arc, color) {
    const geo = new THREE.RingGeometry(range * 0.22, range, 30, 1, -Math.PI / 2 - arc / 2, arc);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const sector = new THREE.Mesh(geo, mat);
    sector.rotation.x = -Math.PI / 2;
    const group = new THREE.Group();
    group.position.set(pos.x, 0.11, pos.z);
    group.rotation.y = facing;
    group.add(sector);
    this.add(group, 0.34, (p) => {
      mat.opacity = 0.72 * (1 - p);
      group.scale.setScalar(0.9 + p * 0.16);
    });
  }

  impact(pos, color, scale = 1, life = 0.38) {
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(this.sphereGeo, mat);
    mesh.position.set(pos.x, (pos.y ?? 0.9), pos.z);
    mesh.scale.setScalar(0.12 * scale);
    this.add(mesh, life, (p) => {
      mesh.scale.setScalar(0.12 * scale + p * 0.62 * scale);
      mat.opacity = 0.92 * (1 - p);
    });
  }

  shockwave(pos, color, scale = 1, life = 0.5) {
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(this.shockGeo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(pos.x, 0.12, pos.z);
    mesh.scale.setScalar(0.4 * scale);
    this.add(mesh, life, (p) => {
      mesh.scale.setScalar(0.4 * scale + p * 1.8 * scale);
      mat.opacity = 0.75 * (1 - p);
    });
  }

  burst(pos, color, count = 5, spread = 1.1, life = 0.5) {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(this.sphereGeo, mat);
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * spread;
      mesh.position.set(pos.x + Math.cos(a) * r, (pos.y ?? 1) + Math.random() * 0.8, pos.z + Math.sin(a) * r);
      mesh.scale.setScalar(0.035 + Math.random() * 0.05);
      const vx = Math.cos(a) * (0.6 + Math.random() * 1.2);
      const vz = Math.sin(a) * (0.6 + Math.random() * 1.2);
      const vy = 0.7 + Math.random() * 1.4;
      this.add(mesh, life * (0.6 + Math.random() * 0.6), (p, dt) => {
        mesh.position.x += vx * dt;
        mesh.position.z += vz * dt;
        mesh.position.y += (vy - p * 1.2) * dt;
        mat.opacity = 0.9 * (1 - p);
      });
    }
  }

  update(dt) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      item.t += dt;
      const p = Math.min(1, item.t / item.life);
      item.update?.(p, dt);
      if (p >= 1) {
        this.scene.remove(item.mesh);
        item.mesh.traverse((o) => {
          if (!o.isMesh) return;
          if (o.geometry && o.geometry !== this.sphereGeo && o.geometry !== this.shockGeo) o.geometry.dispose();
          if (o.material) o.material.dispose();
        });
        this.items.splice(i, 1);
      }
    }
  }

  clear() {
    for (const item of this.items) {
      this.scene.remove(item.mesh);
      item.mesh.traverse((o) => {
        if (!o.isMesh) return;
        if (o.geometry && o.geometry !== this.sphereGeo && o.geometry !== this.shockGeo) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
    }
    this.items.length = 0;
  }
}
