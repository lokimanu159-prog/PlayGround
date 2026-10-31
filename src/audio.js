const STORAGE_KEY = 'aethermoor-audio-muted';

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.muted = localStorage.getItem(STORAGE_KEY) === '1';
    this.mood = 'title';
    this.started = false;
    this.timer = null;
    this.step = 0;
    this.padNodes = [];
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.5;
    this.master.connect(this.ctx.destination);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.18;
    this.musicGain.connect(this.master);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.55;
    this.sfxGain.connect(this.master);
    this.startPad();
    this.schedule();
  }

  startPad() {
    if (!this.ctx) return;
    const freqs = [110, 164.81, 220];
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 620;
      filter.Q.value = 0.6;
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = f;
      osc.detune.value = i === 1 ? 4 : i === 2 ? -5 : 0;
      gain.gain.value = i === 0 ? 0.09 : 0.035;
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);
      osc.start();
      this.padNodes.push({ osc, gain, filter, base: f });
    });
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain);
    lfoGain.connect(this.musicGain.gain);
    lfo.start();
  }

  schedule() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.tick(), 250);
  }

  setMood(mood) {
    this.mood = mood;
    if (!this.ctx) return;
    const config = {
      title: { root: 110, notes: [0, 3, 7, 10, 12, 15], tempo: 1.35, pad: 0.18, wave: 'sine' },
      lobby: { root: 130.81, notes: [0, 4, 7, 11, 12, 16], tempo: 1.15, pad: 0.2, wave: 'triangle' },
      adventure: { root: 98, notes: [0, 3, 5, 7, 10, 12], tempo: 0.46, pad: 0.16, wave: 'triangle' },
      boss: { root: 82.41, notes: [0, 1, 5, 6, 8, 12], tempo: 0.34, pad: 0.2, wave: 'sawtooth' },
      victory: { root: 130.81, notes: [0, 4, 7, 12, 16, 19], tempo: 0.8, pad: 0.22, wave: 'triangle' },
    }[mood] || { root: 110, notes: [0, 3, 7, 10], tempo: 1.2, pad: 0.18, wave: 'sine' };
    this.config = config;
    if (this.musicGain) {
      this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.musicGain.gain.linearRampToValueAtTime(config.pad, this.ctx.currentTime + 0.8);
    }
    this.padNodes.forEach((p, i) => {
      const ratios = [1, 1.5, 2];
      p.osc.frequency.cancelScheduledValues(this.ctx.currentTime);
      p.osc.frequency.linearRampToValueAtTime(config.root * ratios[i], this.ctx.currentTime + 0.8);
      p.filter.frequency.linearRampToValueAtTime(mood === 'boss' ? 900 : 620, this.ctx.currentTime + 0.8);
    });
  }

  tick() {
    if (!this.ctx || this.muted) return;
    const cfg = this.config || { root: 110, notes: [0, 3, 7, 10], tempo: 1.2, wave: 'sine' };
    this.step++;
    const beat = 0.25;
    if (this.step % 2 === 0) {
      const n = cfg.notes[(this.step / 2) % cfg.notes.length];
      const freq = cfg.root * Math.pow(2, n / 12) * 2;
      this.pluck(freq, cfg.wave, 0.07, 0.9);
    }
    if (this.mood === 'adventure' || this.mood === 'boss') {
      if (this.step % 4 === 0) this.kick(0.5);
      if (this.step % 2 === 1) this.hat(0.15);
    }
    if (this.mood === 'boss' && this.step % 8 === 0) {
      this.pluck(cfg.root * 0.5, 'sawtooth', 0.05, 1.6);
    }
  }

  pluck(freq, type = 'sine', volume = 0.06, duration = 0.8) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1400;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);
    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  kick(volume = 0.4) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.18);
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.musicGain);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  hat(volume = 0.12) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const buffer = this.noiseBuffer(0.06);
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 5500;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);
    src.start(now);
  }

  noiseBuffer(duration = 0.2) {
    const length = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }

  tone(freq, duration, type = 'sine', volume = 0.2, slide = 0, delay = 0) {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2800;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  noise(duration = 0.2, volume = 0.15, filterFreq = 1200, delay = 0) {
    if (!this.ctx || this.muted) return;
    const now = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer(duration);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFreq, now);
    filter.frequency.exponentialRampToValueAtTime(120, now + duration);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    src.start(now);
  }

  play(name) {
    if (!this.ctx || this.muted) return;
    switch (name) {
      case 'ui':
        this.tone(660, 0.06, 'sine', 0.12, 120);
        break;
      case 'click':
        this.tone(420, 0.05, 'triangle', 0.1, 90);
        break;
      case 'attack':
        this.noise(0.12, 0.16, 2400);
        this.tone(190, 0.1, 'triangle', 0.08, -60);
        break;
      case 'whip':
        this.noise(0.16, 0.2, 3600);
        this.tone(520, 0.09, 'sawtooth', 0.06, -300);
        break;
      case 'hit':
        this.noise(0.1, 0.18, 1500);
        this.tone(120, 0.08, 'square', 0.08, -60);
        break;
      case 'crit':
        this.noise(0.16, 0.24, 2200);
        this.tone(260, 0.16, 'square', 0.12, -120);
        break;
      case 'cast':
        this.tone(330, 0.22, 'sine', 0.13, 300);
        this.tone(495, 0.18, 'triangle', 0.07, 220, 0.03);
        break;
      case 'fire':
        this.noise(0.35, 0.22, 900);
        this.tone(140, 0.25, 'sawtooth', 0.08, -60);
        break;
      case 'ice':
        this.tone(880, 0.18, 'sine', 0.1, 300);
        this.tone(1320, 0.22, 'triangle', 0.06, 200, 0.04);
        break;
      case 'arrow':
        this.noise(0.14, 0.1, 4000);
        this.tone(600, 0.07, 'triangle', 0.05, -200);
        break;
      case 'pickup':
        this.tone(880, 0.07, 'sine', 0.1, 200);
        this.tone(1320, 0.09, 'sine', 0.08, 200, 0.06);
        break;
      case 'coin':
        this.tone(1180, 0.05, 'triangle', 0.09, 200);
        this.tone(1560, 0.1, 'triangle', 0.06, 200, 0.05);
        break;
      case 'heal':
        this.tone(523, 0.22, 'sine', 0.12, 200);
        this.tone(784, 0.3, 'sine', 0.08, 100, 0.1);
        break;
      case 'buy':
        this.tone(600, 0.08, 'triangle', 0.1, 200);
        this.tone(900, 0.12, 'triangle', 0.08, 200, 0.08);
        this.tone(1200, 0.14, 'sine', 0.06, 100, 0.16);
        break;
      case 'error':
        this.tone(160, 0.14, 'square', 0.09, -30);
        break;
      case 'levelup':
        [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.28, 'triangle', 0.1, 20, i * 0.1));
        break;
      case 'victory':
        [392, 523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.45, 'triangle', 0.11, 10, i * 0.13));
        break;
      case 'defeat':
        [220, 196, 165, 110].forEach((f, i) => this.tone(f, 0.45, 'sawtooth', 0.07, -20, i * 0.16));
        break;
      case 'boss':
        this.tone(55, 0.8, 'sawtooth', 0.16, -10);
        this.noise(0.6, 0.16, 400);
        break;
      case 'dodge':
        this.noise(0.18, 0.12, 2600);
        break;
      case 'summon':
        this.tone(440, 0.4, 'sine', 0.08, 220);
        this.tone(660, 0.5, 'triangle', 0.06, 110, 0.1);
        break;
      default:
        this.tone(500, 0.05, 'sine', 0.08);
    }
  }

  setMuted(muted) {
    this.muted = muted;
    localStorage.setItem(STORAGE_KEY, muted ? '1' : '0');
    if (this.master && this.ctx) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.5, this.ctx.currentTime + 0.2);
    }
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }
}
