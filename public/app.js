(function () {
  'use strict';

  var ANIMALS = window.ANIMALS;
  var Sound = window.Sound;

  var T = {
    en: {
      title: 'Animal Sounds',
      hint: 'Tap an animal to hear it!',
      animals: 'Animals',
      quiz: 'Guess the sound',
      back: 'Back',
      again: 'Listen again',
      prev: 'Previous animal',
      next: 'Next animal',
      question: 'Which animal makes this sound?',
      play: 'Play the sound',
      good: 'Great job!',
      tryAgain: 'Try again!',
      stars: 'Stars',
      nextRound: 'Next',
      names: 'Say the names',
      language: 'Language'
    },
    fr: {
      title: 'Les sons des animaux',
      hint: 'Touche un animal pour l’entendre!',
      animals: 'Animaux',
      quiz: 'Devine le son',
      back: 'Retour',
      again: 'Réécouter',
      prev: 'Animal précédent',
      next: 'Animal suivant',
      question: 'Quel animal fait ce son?',
      play: 'Écouter le son',
      good: 'Bravo!',
      tryAgain: 'Essaie encore!',
      stars: 'Étoiles',
      nextRound: 'Suivant',
      names: 'Dire les noms',
      language: 'Langue'
    }
  };

  function store(key, val) {
    try {
      if (val === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, val);
    } catch (e) { /* storage unavailable */ }
    return null;
  }

  var saved = store('lang');
  var state = {
    lang: saved === 'fr' || saved === 'en' ? saved : ((navigator.language || 'en').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en'),
    view: 'home',          // home | detail | quiz
    current: null,         // animal id in detail view
    speak: store('speak') === '1',
    quiz: null             // { score, answer, options, solved }
  };

  var app = document.getElementById('app');
  var speakTimer = null;

  function t(key) { return T[state.lang][key]; }
  function byId(id) { return ANIMALS.filter(function (a) { return a.id === id; })[0]; }
  function name(a) { return a[state.lang]; }
  function onoma(a) { return a['snd_' + state.lang]; }

  /* ---------- speech (optional: says the animal name after the sound) ---------- */

  function sayName(a, delaySec) {
    if (!state.speak || !('speechSynthesis' in window)) return;
    clearTimeout(speakTimer);
    speakTimer = setTimeout(function () {
      try {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(name(a));
        u.lang = state.lang === 'fr' ? 'fr-CA' : 'en-US';
        u.rate = 0.9;
        u.pitch = 1.15;
        window.speechSynthesis.speak(u);
      } catch (e) { /* ignore */ }
    }, Math.round((delaySec + 0.25) * 1000));
  }

  /* ---------- playing ---------- */

  function playAnimal(id, withName) {
    var a = byId(id);
    var art = app.querySelector('.stage .art');
    var dur = Sound.play(id);
    if (art) {
      art.classList.remove('wiggle');
      void art.offsetWidth;            // restart the CSS animation
      art.classList.add('wiggle');
      setTimeout(function () { art.classList.remove('wiggle'); }, Math.max(600, dur * 1000));
    }
    if (withName) sayName(a, dur);
    return dur;
  }

  /* ---------- views ---------- */

  function header() {
    var en = state.lang === 'en';
    return '' +
      '<header class="top">' +
        '<div class="brand"><span class="paw" aria-hidden="true">🐾</span><h1>' + t('title') + '</h1></div>' +
        '<div class="tools">' +
          '<button class="chip' + (state.speak ? ' on' : '') + '" data-act="speak" aria-pressed="' + state.speak + '" title="' + t('names') + '">' +
            '<span aria-hidden="true">🗣️</span><span class="chip-label">' + t('names') + '</span></button>' +
          '<div class="lang" role="group" aria-label="' + t('language') + '">' +
            '<button data-act="lang" data-lang="en" lang="en" aria-pressed="' + en + '">EN</button>' +
            '<button data-act="lang" data-lang="fr" lang="fr" aria-pressed="' + !en + '">FR</button>' +
          '</div>' +
        '</div>' +
      '</header>';
  }

  function tabs() {
    return '' +
      '<nav class="tabs" aria-label="menu">' +
        '<button data-act="home" class="tab' + (state.view === 'home' ? ' active' : '') + '">🐶 ' + t('animals') + '</button>' +
        '<button data-act="quiz" class="tab' + (state.view === 'quiz' ? ' active' : '') + '">🎧 ' + t('quiz') + '</button>' +
      '</nav>';
  }

  function renderHome() {
    var cards = ANIMALS.map(function (a) {
      return '<button class="card" data-act="open" data-id="' + a.id + '" style="--bg:' + a.color + '" aria-label="' + name(a) + '">' +
        '<span class="art">' + a.svg + '</span><span class="label">' + name(a) + '</span></button>';
    }).join('');
    app.innerHTML = header() + tabs() +
      '<main><p class="hint">' + t('hint') + '</p><div class="grid">' + cards + '</div></main>';
  }

  function renderDetail() {
    var a = byId(state.current);
    app.innerHTML = header() +
      '<main class="detail" style="--bg:' + a.color + '">' +
        '<button class="back" data-act="home">← ' + t('back') + '</button>' +
        '<button class="stage" data-act="replay" aria-label="' + t('again') + '"><span class="art">' + a.svg + '</span></button>' +
        '<h2 class="name">' + name(a) + '</h2>' +
        '<p class="onoma">' + onoma(a) + '</p>' +
        '<div class="controls">' +
          '<button class="btn round" data-act="prev" aria-label="' + t('prev') + '">◀</button>' +
          '<button class="btn big" data-act="replay"><span aria-hidden="true">🔊</span> ' + t('again') + '</button>' +
          '<button class="btn round" data-act="next" aria-label="' + t('next') + '">▶</button>' +
        '</div>' +
      '</main>';
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function newRound() {
    var prev = state.quiz ? state.quiz.answer : null;
    var pool = shuffle(ANIMALS.map(function (a) { return a.id; }));
    var answer = pool.filter(function (id) { return id !== prev; })[0];
    var others = pool.filter(function (id) { return id !== answer; }).slice(0, 2);
    state.quiz = {
      score: state.quiz ? state.quiz.score : 0,
      answer: answer,
      options: shuffle([answer].concat(others)),
      solved: false
    };
  }

  function renderQuiz() {
    if (!state.quiz) newRound();
    var q = state.quiz;
    var choices = q.options.map(function (id) {
      var a = byId(id);
      return '<button class="card choice" data-act="choose" data-id="' + id + '" style="--bg:' + a.color + '" aria-label="' + name(a) + '">' +
        '<span class="art">' + a.svg + '</span><span class="label">' + name(a) + '</span></button>';
    }).join('');
    app.innerHTML = header() + tabs() +
      '<main class="quiz">' +
        '<p class="score" aria-live="polite">⭐ ' + t('stars') + ': <strong>' + q.score + '</strong></p>' +
        '<h2 class="question">' + t('question') + '</h2>' +
        '<button class="btn big listen" data-act="qplay"><span aria-hidden="true">🔊</span> ' + t('play') + '</button>' +
        '<div class="grid three">' + choices + '</div>' +
        '<p class="feedback" aria-live="polite"></p>' +
        '<button class="btn big nextround" data-act="qnext" hidden>' + t('nextRound') + ' ▶</button>' +
      '</main>';
  }

  function render() {
    document.documentElement.lang = state.lang;
    document.title = t('title');
    if (state.view === 'detail') renderDetail();
    else if (state.view === 'quiz') renderQuiz();
    else renderHome();
  }

  /* ---------- actions ---------- */

  function openAnimal(id) {
    state.view = 'detail';
    state.current = id;
    render();
    window.scrollTo(0, 0);
    playAnimal(id, true);
  }

  function step(dir) {
    var idx = ANIMALS.map(function (a) { return a.id; }).indexOf(state.current);
    var next = ANIMALS[(idx + dir + ANIMALS.length) % ANIMALS.length].id;
    openAnimal(next);
  }

  function choose(btn) {
    var q = state.quiz;
    if (!q || q.solved) return;
    var id = btn.getAttribute('data-id');
    var fb = app.querySelector('.feedback');
    if (id === q.answer) {
      q.solved = true;
      q.score += 1;
      btn.classList.add('correct');
      app.querySelectorAll('.choice').forEach(function (b) {
        if (b !== btn) b.classList.add('dim');
      });
      app.querySelector('.score strong').textContent = q.score;
      fb.textContent = '🎉 ' + t('good');
      fb.className = 'feedback good';
      app.querySelector('.nextround').hidden = false;
      Sound.cheer();
      sayName(byId(id), 0.6);
    } else {
      btn.classList.remove('wrong');
      void btn.offsetWidth;
      btn.classList.add('wrong');
      fb.textContent = t('tryAgain');
      fb.className = 'feedback bad';
      Sound.oops();
    }
  }

  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el || !app.contains(el)) return;
    Sound.unlock();
    var act = el.getAttribute('data-act');

    if (act === 'open') openAnimal(el.getAttribute('data-id'));
    else if (act === 'home') { state.view = 'home'; render(); }
    else if (act === 'quiz') { state.view = 'quiz'; state.quiz = null; render(); Sound.play(state.quiz.answer); }
    else if (act === 'replay') playAnimal(state.current, true);
    else if (act === 'prev') step(-1);
    else if (act === 'next') step(1);
    else if (act === 'qplay') Sound.play(state.quiz.answer);
    else if (act === 'qnext') { newRound(); render(); Sound.play(state.quiz.answer); }
    else if (act === 'choose') choose(el);
    else if (act === 'lang') {
      state.lang = el.getAttribute('data-lang');
      store('lang', state.lang);
      render();
    } else if (act === 'speak') {
      state.speak = !state.speak;
      store('speak', state.speak ? '1' : '0');
      if (!state.speak && 'speechSynthesis' in window) window.speechSynthesis.cancel();
      render();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (state.view !== 'detail') return;
    if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'Escape') { state.view = 'home'; render(); }
  });

  render();
  Sound.detectRecordings(ANIMALS.map(function (a) { return a.id; }));

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(function () { /* offline cache is optional */ });
  }
})();
