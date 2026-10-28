/* Sound engine.
   - By default every animal sound is synthesized in the browser (Web Audio), so there are no audio files to ship.
   - If you drop a real recording named <animal-id>.mp3 into the /sounds folder (e.g. sounds/cow.mp3),
     it is detected automatically and used instead of the synthesized version.            */
window.Sound = (function () {
  'use strict';

  let ctx = null;
  let master = null;
  const recordings = new Map(); // id -> HTMLAudioElement | null (null = no file)

  function getCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      const comp = ctx.createDynamicsCompressor();
      master = ctx.createGain();
      master.gain.value = 0.85;
      master.connect(comp);
      comp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /* ---------- low-level building blocks ---------- */

  function tone(c, o) {
    const p = Object.assign({
      type: 'sawtooth', t: 0, dur: 0.4, f0: 200, f1: null, peak: 0.4, attack: 0.03,
      vib: 0, vibDepth: 0, filt: 0, q: 1, ftype: 'bandpass'
    }, o);
    const t0 = c.currentTime + p.t + 0.02;
    const f1 = p.f1 == null ? p.f0 : p.f1;

    const osc = c.createOscillator();
    osc.type = p.type;
    osc.frequency.setValueAtTime(p.f0, t0);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t0 + p.dur);

    if (p.vib) {
      const lfo = c.createOscillator();
      const lg = c.createGain();
      lfo.frequency.value = p.vib;
      lg.gain.value = p.vibDepth;
      lfo.connect(lg);
      lg.connect(osc.frequency);
      lfo.start(t0);
      lfo.stop(t0 + p.dur + 0.05);
    }

    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(p.peak, t0 + Math.min(p.attack, p.dur / 2));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + p.dur);

    let last = osc;
    if (p.filt) {
      const f = c.createBiquadFilter();
      f.type = p.ftype;
      f.frequency.value = p.filt;
      f.Q.value = p.q;
      last.connect(f);
      last = f;
    }
    last.connect(g);
    g.connect(master);
    osc.start(t0);
    osc.stop(t0 + p.dur + 0.05);
  }

  function noise(c, o) {
    const p = Object.assign({
      t: 0, dur: 0.2, peak: 0.2, attack: 0.01, filt: 1000, q: 1, ftype: 'bandpass', sweepTo: 0
    }, o);
    const t0 = c.currentTime + p.t + 0.02;
    const len = Math.max(1, Math.floor(c.sampleRate * p.dur));
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    const src = c.createBufferSource();
    src.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = p.ftype;
    f.Q.value = p.q;
    f.frequency.setValueAtTime(p.filt, t0);
    if (p.sweepTo) f.frequency.exponentialRampToValueAtTime(p.sweepTo, t0 + p.dur);

    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(p.peak, t0 + Math.min(p.attack, p.dur / 2));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + p.dur);

    src.connect(f);
    f.connect(g);
    g.connect(master);
    src.start(t0);
  }

  /* ---------- one recipe per animal; each returns its length in seconds ---------- */

  function bark(c, t) {
    tone(c, { t, dur: 0.2, f0: 460, f1: 170, peak: 0.55, attack: 0.01, filt: 1000, q: 1.2 });
    tone(c, { t, dur: 0.2, f0: 230, f1: 90, peak: 0.3, attack: 0.01, type: 'square', filt: 700, ftype: 'lowpass' });
    noise(c, { t, dur: 0.1, peak: 0.25, filt: 1800, q: 0.8 });
  }

  const RECIPES = {
    dog(c) { bark(c, 0); bark(c, 0.38); return 0.7; },

    cat(c) {
      tone(c, { t: 0, dur: 0.38, f0: 480, f1: 900, peak: 0.45, attack: 0.08, type: 'triangle', filt: 1500, q: 2 });
      tone(c, { t: 0, dur: 0.38, f0: 480, f1: 900, peak: 0.2, attack: 0.08, filt: 1500, q: 2 });
      tone(c, { t: 0.36, dur: 0.6, f0: 900, f1: 420, peak: 0.45, attack: 0.02, type: 'triangle', filt: 1300, q: 2, vib: 7, vibDepth: 12 });
      tone(c, { t: 0.36, dur: 0.6, f0: 900, f1: 420, peak: 0.18, attack: 0.02, filt: 1300, q: 2 });
      return 1.0;
    },

    cow(c) {
      tone(c, { dur: 1.5, f0: 120, f1: 92, peak: 0.55, attack: 0.18, filt: 520, ftype: 'lowpass', q: 1.5, vib: 5, vibDepth: 3 });
      tone(c, { dur: 1.5, f0: 240, f1: 184, peak: 0.2, attack: 0.18, type: 'triangle', filt: 900, ftype: 'lowpass' });
      tone(c, { dur: 1.5, f0: 360, f1: 276, peak: 0.1, attack: 0.2, filt: 700, q: 3 });
      return 1.5;
    },

    duck(c) {
      for (let i = 0; i < 3; i++) {
        const t = i * 0.24;
        tone(c, { t, dur: 0.17, f0: 560, f1: 330, peak: 0.5, attack: 0.012, filt: 1250, q: 3, vib: 55, vibDepth: 25 });
        tone(c, { t, dur: 0.17, f0: 280, f1: 165, peak: 0.2, attack: 0.012, type: 'square', filt: 900, ftype: 'lowpass' });
      }
      return 0.8;
    },

    pig(c) {
      [[0, 190, 120], [0.36, 230, 110]].forEach(([t, a, b]) => {
        tone(c, { t, dur: 0.28, f0: a, f1: b, peak: 0.55, attack: 0.02, filt: 850, ftype: 'lowpass', q: 2, vib: 42, vibDepth: 18 });
        noise(c, { t, dur: 0.26, peak: 0.12, filt: 450, q: 1.5 });
      });
      return 0.7;
    },

    sheep(c) {
      tone(c, { dur: 0.95, f0: 390, f1: 320, peak: 0.5, attack: 0.05, filt: 1100, q: 2.2, vib: 28, vibDepth: 42 });
      tone(c, { dur: 0.95, f0: 195, f1: 160, peak: 0.2, attack: 0.05, type: 'square', filt: 800, ftype: 'lowpass', vib: 28, vibDepth: 20 });
      return 0.95;
    },

    rooster(c) {
      [[620, 740, 0.0, 0.16], [560, 560, 0.2, 0.1], [900, 1180, 0.34, 0.3], [1120, 760, 0.68, 0.7]].forEach(([a, b, t, d], i) => {
        tone(c, { t, dur: d, f0: a, f1: b, peak: 0.42, attack: 0.02, filt: 1900, q: 1.4, vib: i === 3 ? 14 : 0, vibDepth: i === 3 ? 25 : 0 });
        tone(c, { t, dur: d, f0: a / 2, f1: b / 2, peak: 0.12, attack: 0.02, type: 'triangle' });
      });
      return 1.4;
    },

    frog(c) {
      [0, 0.15].forEach((t) => {
        tone(c, { t, dur: 0.12, f0: 150, f1: 250, peak: 0.5, attack: 0.01, filt: 800, ftype: 'lowpass', q: 2, vib: 85, vibDepth: 40 });
      });
      tone(c, { t: 0.34, dur: 0.22, f0: 260, f1: 110, peak: 0.55, attack: 0.02, filt: 700, ftype: 'lowpass', q: 2, vib: 70, vibDepth: 30 });
      return 0.6;
    },

    lion(c) {
      tone(c, { dur: 1.9, f0: 95, f1: 55, peak: 0.55, attack: 0.15, filt: 700, ftype: 'lowpass', q: 1, vib: 20, vibDepth: 14 });
      tone(c, { dur: 1.9, f0: 190, f1: 110, peak: 0.25, attack: 0.15, type: 'square', filt: 600, ftype: 'lowpass', vib: 22, vibDepth: 18 });
      noise(c, { dur: 1.9, peak: 0.5, attack: 0.12, filt: 900, sweepTo: 220, ftype: 'lowpass', q: 1.2 });
      return 1.9;
    },

    owl(c) {
      [0, 0.6].forEach((t) => {
        tone(c, { t, dur: 0.42, f0: 430, f1: 350, peak: 0.6, attack: 0.07, type: 'sine', vib: 6, vibDepth: 5 });
        tone(c, { t, dur: 0.42, f0: 860, f1: 700, peak: 0.08, attack: 0.07, type: 'sine' });
      });
      return 1.05;
    }
  };

  /* ---------- small UI jingles for the quiz ---------- */

  function cheer() {
    const c = getCtx();
    if (!c) return;
    [523, 659, 784, 1047].forEach((f, i) => tone(c, { t: i * 0.1, dur: 0.22, f0: f, f1: f, peak: 0.3, attack: 0.01, type: 'triangle' }));
  }

  function oops() {
    const c = getCtx();
    if (!c) return;
    tone(c, { dur: 0.3, f0: 260, f1: 170, peak: 0.3, attack: 0.01, type: 'triangle' });
  }

  /* ---------- optional real recordings ---------- */

  // Creates (once) an <audio> element for sounds/<id>.mp3. If the file does not exist, the entry
  // becomes null and that animal falls back to its synthesized recipe.
  function recording(id) {
    if (recordings.has(id)) return recordings.get(id);
    const a = new Audio();
    a.preload = 'auto';
    a.addEventListener('error', () => recordings.set(id, null), { once: true });
    a.src = 'sounds/' + id + '.mp3';
    recordings.set(id, a);
    return a;
  }

  function probe(id) {
    recording(id);
    return Promise.resolve();
  }

  function detectRecordings(ids) {
    return Promise.all(ids.map(probe));
  }

  /* ---------- public API ---------- */

  // Must be called from a tap/click so mobile browsers allow audio. Returns the sound length in seconds.
  function synth(id) {
    const c = getCtx();
    const recipe = RECIPES[id];
    if (!c || !recipe) return 0;
    return recipe(c);
  }

  let current = null;

  function play(id) {
    const rec = recording(id);
    if (rec) {
      if (current && current !== rec) { try { current.pause(); } catch (e) { /* ignore */ } }
      current = rec;
      try {
        rec.currentTime = 0;
        const pr = rec.play();
        // Missing file or blocked playback: fall back to the synthesized sound.
        if (pr && pr.catch) pr.catch((err) => { if (!err || err.name !== 'NotAllowedError') { recordings.set(id, null); synth(id); } });
      } catch (e) { return synth(id); }
      return rec.duration && isFinite(rec.duration) ? rec.duration : 2.5;
    }
    return synth(id);
  }

  function unlock() { getCtx(); }

  // Lets other files (e.g. more-animals.js) register extra sound recipes built from tone() / noise().
  function add(id, recipe) { RECIPES[id] = recipe; }

  return { play, cheer, oops, unlock, detectRecordings, add, tone, noise };
})();
