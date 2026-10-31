export class Input {
  constructor() {
    this.keys = new Set();
    this.joy = { x: 0, y: 0, active: false, pointerId: null, element: null, knob: null, radius: 42 };
    this.attackHeld = false;
    this.attackQueued = false;
    this.abilityQueue = [];
    this.callbacks = {};
    this.enabled = true;
    this.bindKeyboard();
    this.bindJoystick(document.getElementById('combat-joystick'));
    this.bindJoystick(document.getElementById('lobby-joystick'));
    this.bindButtons();
    this.preventGestures();
  }

  on(name, fn) {
    this.callbacks[name] = fn;
  }

  emit(name, ...args) {
    if (this.callbacks[name]) this.callbacks[name](...args);
  }

  bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault();
      this.keys.add(e.code);
      if (e.repeat) return;
      if (e.code === 'Space') {
        this.attackQueued = true;
        this.emit('attack');
      }
      if (e.code === 'Digit1') this.emit('ability', 0);
      if (e.code === 'Digit2') this.emit('ability', 1);
      if (e.code === 'Digit3') this.emit('ability', 2);
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.emit('dodge');
      if (e.code === 'KeyF') this.emit('potion');
      if (e.code === 'Escape') this.emit('pause');
      if (e.code === 'KeyB') this.emit('lobby');
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.resetJoystick();
      this.attackHeld = false;
    });
  }

  bindJoystick(el) {
    if (!el) return;
    const knob = el.querySelector('.joystick-knob');
    const getCenter = () => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2, radius: r.width * 0.34 };
    };
    const updateFromEvent = (e) => {
      if (!this.joy.active || this.joy.pointerId !== e.pointerId) return;
      const c = getCenter();
      let dx = e.clientX - c.x;
      let dy = e.clientY - c.y;
      const dist = Math.hypot(dx, dy);
      const max = c.radius;
      if (dist > max) {
        dx = (dx / dist) * max;
        dy = (dy / dist) * max;
      }
      this.joy.x = dx / max;
      this.joy.y = dy / max;
      if (knob) knob.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    el.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      e.preventDefault();
      e.stopPropagation();
      el.setPointerCapture(e.pointerId);
      this.joy.active = true;
      this.joy.pointerId = e.pointerId;
      this.joy.element = el;
      this.joy.knob = knob;
      updateFromEvent(e);
    });
    el.addEventListener('pointermove', (e) => {
      if (!this.joy.active || this.joy.pointerId !== e.pointerId) return;
      e.preventDefault();
      updateFromEvent(e);
    });
    const end = (e) => {
      if (this.joy.pointerId !== e.pointerId) return;
      this.resetJoystick();
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('lostpointercapture', end);
  }

  resetJoystick() {
    this.joy.x = 0;
    this.joy.y = 0;
    this.joy.active = false;
    this.joy.pointerId = null;
    if (this.joy.knob) this.joy.knob.style.transform = 'translate(0px, 0px)';
  }

  bindButtons() {
    const bindPress = (id, down, up = null) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('pointerdown', (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        e.stopPropagation();
        el.setPointerCapture?.(e.pointerId);
        down?.(e);
      });
      if (up) {
        el.addEventListener('pointerup', (e) => {
          e.preventDefault();
          up(e);
        });
        el.addEventListener('pointercancel', up);
        el.addEventListener('pointerleave', (e) => {
          if (e.buttons) up(e);
        });
      }
    };

    bindPress('btn-attack', () => {
      this.attackHeld = true;
      this.attackQueued = true;
      this.emit('attack');
    }, () => {
      this.attackHeld = false;
    });

    bindPress('btn-dodge', () => this.emit('dodge'));
    bindPress('btn-potion', () => this.emit('potion', 'health'));
    bindPress('btn-mana-potion', () => this.emit('potion', 'mana'));

    document.querySelectorAll('.ability-btn').forEach((el) => {
      const index = Number(el.dataset.ability);
      el.addEventListener('pointerdown', (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        e.stopPropagation();
        this.emit('ability', index);
      });
    });

    document.querySelectorAll('.lobby-action, .class-card, .btn, .icon-btn, .shop-tab, .map-card, .shop-item button').forEach((el) => {
      el.addEventListener('pointerdown', () => this.emit('uiClick'));
    });
  }

  preventGestures() {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('dblclick', (e) => e.preventDefault(), { passive: false });
    window.addEventListener('touchmove', (e) => {
      if (e.target.closest('#shop-items, #class-cards, .select-panel, .map-cards, .help-card')) return;
      if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
  }

  getMove() {
    let x = this.joy.x;
    let y = this.joy.y;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y += 1;
    const len = Math.hypot(x, y);
    if (len > 1) {
      x /= len;
      y /= len;
    }
    return { x, y, magnitude: Math.min(1, len) };
  }

  consumeAttack() {
    if (this.attackQueued) {
      this.attackQueued = false;
      return true;
    }
    return false;
  }

  consumeAbility() {
    return this.abilityQueue.shift() ?? -1;
  }
}
