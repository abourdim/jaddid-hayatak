/* ═══════════════════════════════════════════════════════════
   NARRATOR.JS — Audiobook narrator for Jaddid Hayatak
   Features: section-by-section, book mode, karaoke,
   voice/speed/pitch, loop, lock screen, sleep timer
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ═══ AVAILABILITY CHECK ═══
  if (!('speechSynthesis' in window)) {
    // Browser doesn't support speech synthesis — disable narrator silently
    window.narratorTogglePanel = function() {
      if (typeof showToast === 'function') {
        showToast('Narrator not supported in this browser');
      }
    };
    window.narratorPlayPage = window.narratorPlayBook = window.narratorPause = function() {};
    window.narratorStop = window.narratorNext = window.narratorPrev = function() {};
    window.narratorSpeedChange = window.narratorPitchChange = function() {};
    window.narratorLoopChange = window.narratorSleepChange = function() {};
    window.narratorKaraokeToggle = window.narratorAutoScrollToggle = function() {};
    window.narratorDuoToggle = window.narratorVoiceChange = function() {};
    window.narratorPopulateVoices = function() {};
    return;
  }

  // ═══ I18N ═══
  const NR_T = {
    ar: {
      title: '🎧 الراوي',
      page: 'اقرأ هذه الصفحة',
      book: 'اقرأ ككتاب',
      voice: 'الصوت',
      speed: 'السرعة',
      pitch: 'النبرة',
      loop: 'تكرار البطاقة',
      sleep: 'مؤقت النوم',
      karaoke: 'كاريوكي',
      autoScroll: 'تمرير تلقائي',
      duo: 'ثنائي (عربي+فرنسي)',
      off: 'إيقاف',
      min: 'دقيقة',
      bookDone: 'تم الانتهاء من الكتاب',
      sleepDone: 'انتهى مؤقت النوم',
      sleepSet: 'مؤقت النوم:',
    },
    en: {
      title: '🎧 Narrator',
      page: 'Read this page',
      book: 'Read as a book',
      voice: 'Voice',
      speed: 'Speed',
      pitch: 'Pitch',
      loop: 'Loop card',
      sleep: 'Sleep timer',
      karaoke: 'Karaoke',
      autoScroll: 'Auto-scroll',
      duo: 'Duo (AR+FR)',
      off: 'Off',
      min: 'min',
      bookDone: 'Book finished',
      sleepDone: 'Sleep timer ended',
      sleepSet: 'Sleep:',
    },
    fr: {
      title: '🎧 Narrateur',
      page: 'Lire cette page',
      book: 'Lire comme un livre',
      voice: 'Voix',
      speed: 'Vitesse',
      pitch: 'Tonalité',
      loop: 'Répéter la carte',
      sleep: 'Minuterie',
      karaoke: 'Karaoké',
      autoScroll: 'Défilement auto',
      duo: 'Duo (AR+FR)',
      off: 'Désactivé',
      min: 'min',
      bookDone: 'Livre terminé',
      sleepDone: 'Minuterie terminée',
      sleepSet: 'Minuterie:',
    }
  };

  function nrT() { return NR_T[getLang()] || NR_T.en; }

  // ═══ STATE ═══
  const STATE = {
    playing: false,
    paused: false,
    mode: 'page',       // 'page' or 'book'
    cardIndex: 0,
    cards: [],
    tabOrder: ['about','principles','anxiety'],
    tabIndex: 0,
    loopCount: 0,        // 0 = no loop
    loopCurrent: 0,
    sleepTimer: null,
    sleepMinutes: 0,
    karaokeEnabled: true,
    autoScroll: true,
    duoReading: false,
    speed: 1,
    pitch: 1,
    voiceAR: null,
    voiceEN: null,
    voiceFR: null,
  };

  // ═══ VOICE SELECTION ═══
  function getLang() {
    return (typeof lang !== 'undefined') ? lang : 'ar';
  }

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;

    // Arabic voice priority
    const arPriority = ['Majed','Maged','Google Arabic','Tarik','Lila'];
    const enPriority = ['Samantha','Daniel','Google UK English','Google US English'];
    const frPriority = ['Thomas','Amelie','Google French'];

    STATE.voiceAR = findBestVoice(voices, arPriority, 'ar');
    STATE.voiceEN = findBestVoice(voices, enPriority, 'en');
    STATE.voiceFR = findBestVoice(voices, frPriority, 'fr');
  }

  function findBestVoice(voices, priority, langCode) {
    // First: filter to only voices matching the language
    const langVoices = voices.filter(v => v.lang.startsWith(langCode));
    // Then: find best match by name preference
    for (const pref of priority) {
      const match = langVoices.find(v => v.name.includes(pref));
      if (match) return match;
    }
    // Fallback: any voice in that language
    return langVoices[0] || voices[0];
  }

  function getVoiceForLang(l) {
    if (l === 'ar') return STATE.voiceAR;
    if (l === 'fr') return STATE.voiceFR;
    return STATE.voiceEN;
  }

  // Load voices (some browsers load async)
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();

  // ═══ CARD EXTRACTION ═══
  function getActivePanel() {
    return document.querySelector('.panel.active');
  }

  function getActiveTabName() {
    const btn = document.querySelector('.tab.active');
    return btn ? btn.dataset.tab : 'about';
  }

  function extractCards(panel) {
    if (!panel) return [];
    const cards = [];
    const tabName = panel.id.replace('panel-', '');

    // Section title + desc
    const title = panel.querySelector('.section-title, .about-section-title');
    const desc = panel.querySelector('.section-desc');
    if (title) {
      cards.push({
        el: title.closest('.panel') || title,
        text: (title.textContent || '') + '. ' + (desc ? desc.textContent : ''),
        type: 'title'
      });
    }

    // Different card types per tab
    if (tabName === 'about') {
      panel.querySelectorAll('.about-disclaimer, .about-author, .about-section').forEach(el => {
        const text = cleanText(el.textContent);
        if (text) cards.push({ el, text, type: 'about' });
      });
    } else if (tabName === 'principles') {
      panel.querySelectorAll('.principle-card').forEach(el => {
        if (el.style.display === 'none') return;
        const t = el.querySelector('.principle-title');
        const d = el.querySelector('.principle-desc');
        const c = el.querySelector('.carnegie-side .comp-text');
        const g = el.querySelector('.ghazali-side .comp-text');
        const a = el.querySelector('.action-box');
        let text = '';
        if (t) text += t.textContent + '. ';
        if (d) text += d.textContent + '. ';
        if (c) text += c.textContent + '. ';
        if (g) text += g.textContent + '. ';
        if (a) text += a.textContent;
        cards.push({ el, text: cleanText(text), type: 'principle' });
      });
    } else if (tabName === 'anxiety') {
      panel.querySelectorAll('.anxiety-card').forEach(el => {
        const text = cleanText(el.textContent);
        cards.push({ el, text, type: 'anxiety' });
      });
    } else if (tabName === 'habits') {
      panel.querySelectorAll('.habit-item').forEach(el => {
        const text = cleanText(el.textContent);
        cards.push({ el, text, type: 'habit' });
      });
    } else if (tabName === 'home') {
      const daily = panel.querySelector('.daily-card');
      if (daily) cards.push({ el: daily, text: cleanText(daily.textContent), type: 'daily' });
    }
    return cards;
  }

  function cleanText(text) {
    return text.replace(/\s+/g, ' ').replace(/[\u{1F000}-\u{1FFFF}|\u{2600}-\u{27BF}|\u{FE00}-\u{FEFF}|\u{1F900}-\u{1F9FF}|\u{200D}|\u{20E3}|\u{E0020}-\u{E007F}|↑↓←→✓☪️🇺🇸]/gu, '').trim();
  }

  // ═══ SPEECH ENGINE ═══
  let currentUtterance = null;

  function speak(text, onEnd) {
    speechSynthesis.cancel();
    const l = getLang();
    const utt = new SpeechSynthesisUtterance(text);
    utt.voice = getVoiceForLang(l);
    utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US';
    utt.rate = STATE.speed;
    utt.pitch = STATE.pitch;

    // Karaoke: word boundary events
    if (STATE.karaokeEnabled) {
      utt.onboundary = function(e) {
        if (e.name === 'word' && STATE.cards[STATE.cardIndex]) {
          highlightWord(STATE.cards[STATE.cardIndex].el, e.charIndex, e.charLength, text);
        }
      };
    }

    utt.onend = function() {
      clearHighlights();
      if (onEnd) onEnd();
    };
    utt.onerror = function() {
      clearHighlights();
      if (onEnd) onEnd();
    };

    currentUtterance = utt;
    speechSynthesis.speak(utt);
  }

  // ═══ KARAOKE HIGHLIGHT ═══
  function highlightWord(el, charIndex, charLength, fullText) {
    if (!el) return;
    const word = fullText.substr(charIndex, charLength || 5);
    // Find text nodes and highlight
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while (node = walker.nextNode()) {
      const idx = node.textContent.indexOf(word);
      if (idx !== -1) {
        clearHighlights();
        const range = document.createRange();
        range.setStart(node, idx);
        range.setEnd(node, Math.min(idx + word.length, node.textContent.length));
        const span = document.createElement('span');
        span.className = 'narrator-word-highlight';
        try {
          range.surroundContents(span);
        } catch(e) { /* cross-boundary, skip */ }
        return;
      }
    }
  }

  function clearHighlights() {
    document.querySelectorAll('.narrator-word-highlight').forEach(el => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
  }

  // ═══ CARD HIGHLIGHT ═══
  function highlightCard(el) {
    document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card'));
    if (el) {
      el.classList.add('narrator-active-card');
      if (STATE.autoScroll) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  // ═══ PLAYBACK CONTROL ═══
  function readCurrentCard() {
    if (STATE.cardIndex >= STATE.cards.length) {
      // Tab finished
      if (STATE.mode === 'book') {
        nextTab();
      } else {
        stopNarrator();
      }
      return;
    }

    const card = STATE.cards[STATE.cardIndex];
    highlightCard(card.el);

    // Open principle cards so content is visible
    if (card.type === 'principle' && card.el && !card.el.classList.contains('open')) {
      card.el.classList.add('open');
    }

    updateProgress();

    speak(card.text, function() {
      // Duo reading: read translation after Arabic
      if (STATE.duoReading && getLang() === 'ar') {
        readDuoTranslation(card, function() {
          afterCardDone();
        });
        return;
      }
      afterCardDone();
    });
  }

  function afterCardDone() {
    // Loop mode
    if (STATE.loopCount > 0) {
      STATE.loopCurrent++;
      if (STATE.loopCurrent < STATE.loopCount) {
        setTimeout(readCurrentCard, 300);
        return;
      }
      STATE.loopCurrent = 0;
    }

    STATE.cardIndex++;
    if (STATE.playing) {
      setTimeout(readCurrentCard, 500);
    }
  }

  function readDuoTranslation(card, onEnd) {
    const duoLang = 'fr';
    const duoVoice = getVoiceForLang(duoLang);
    let duoText = '';

    // Try to get structured data for principles
    const principleId = card.el ? card.el.id : '';
    const pMatch = principleId.match(/principle-(\d+)/);
    if (pMatch && typeof PRINCIPLES !== 'undefined') {
      const p = PRINCIPLES[parseInt(pMatch[1]) - 1];
      if (p && p[duoLang]) {
        duoText = p[duoLang].title + '. ' + p[duoLang].desc;
      }
    }

    // Try anxiety data
    if (!duoText && card.type === 'anxiety' && typeof ANXIETY_DATA !== 'undefined') {
      const idx = Array.from(card.el.parentNode.children).indexOf(card.el);
      if (idx >= 0 && ANXIETY_DATA[idx] && ANXIETY_DATA[idx][duoLang]) {
        const a = ANXIETY_DATA[idx][duoLang];
        duoText = (a.title || '') + '. ' + (a.problem || '') + '. ' + (a.solution || '');
      }
    }

    // Fallback: re-read the card's visible text (already in current lang, not ideal but better than nothing)
    if (!duoText) {
      if (onEnd) onEnd();
      return;
    }

    const utt = new SpeechSynthesisUtterance(cleanText(duoText));
    utt.voice = duoVoice;
    utt.lang = 'fr-FR';
    utt.rate = STATE.speed;
    utt.pitch = STATE.pitch;
    utt.onend = onEnd;
    utt.onerror = onEnd;
    setTimeout(() => speechSynthesis.speak(utt), 300);
  }

  // ═══ BOOK MODE — TAB NAVIGATION ═══
  function nextTab() {
    STATE.tabIndex++;
    if (STATE.tabIndex >= STATE.tabOrder.length) {
      stopNarrator();
      showToast(nrT().bookDone);
      return;
    }
    switchToTab(STATE.tabOrder[STATE.tabIndex]);
  }

  function switchToTab(tabName) {
    const tabBtn = document.querySelector(`.tab[data-tab="${tabName}"]`);
    if (tabBtn) {
      tabBtn.click();
      setTimeout(() => {
        STATE.cards = extractCards(getActivePanel());
        STATE.cardIndex = 0;
        // Announce chapter name
        const title = getActivePanel().querySelector('.section-title');
        if (title) {
          speak(title.textContent, function() {
            setTimeout(readCurrentCard, 300);
          });
        } else {
          readCurrentCard();
        }
      }, 400);
    }
  }

  // ═══ PUBLIC CONTROLS ═══
  function playPage() {
    STATE.mode = 'page';
    STATE.cards = extractCards(getActivePanel());
    STATE.cardIndex = 0;
    STATE.playing = true;
    STATE.paused = false;
    updateUI();
    setupMediaSession();
    readCurrentCard();
  }

  function playBook() {
    STATE.mode = 'book';
    STATE.tabIndex = 0;
    STATE.playing = true;
    STATE.paused = false;
    // Start from first tab
    switchToTab(STATE.tabOrder[0]);
    updateUI();
    setupMediaSession();
  }

  function pauseNarrator() {
    if (STATE.playing && !STATE.paused) {
      speechSynthesis.pause();
      STATE.paused = true;
      updateUI();
    } else if (STATE.paused) {
      speechSynthesis.resume();
      STATE.paused = false;
      updateUI();
    }
  }

  function stopNarrator() {
    speechSynthesis.cancel();
    STATE.playing = false;
    STATE.paused = false;
    STATE.cardIndex = 0;
    clearHighlights();
    document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card'));
    if (STATE.sleepTimer) { clearTimeout(STATE.sleepTimer); STATE.sleepTimer = null; }
    updateUI();
  }

  function nextCard() {
    if (!STATE.playing) return;
    speechSynthesis.cancel();
    clearHighlights();
    STATE.loopCurrent = 0;
    STATE.cardIndex++;
    if (STATE.cardIndex >= STATE.cards.length) {
      if (STATE.mode === 'book') { nextTab(); } else { stopNarrator(); }
      return;
    }
    readCurrentCard();
  }

  function prevCard() {
    if (!STATE.playing) return;
    speechSynthesis.cancel();
    clearHighlights();
    STATE.loopCurrent = 0;
    STATE.cardIndex = Math.max(0, STATE.cardIndex - 1);
    readCurrentCard();
  }

  // ═══ SLEEP TIMER ═══
  function setSleepTimer(minutes) {
    if (STATE.sleepTimer) clearTimeout(STATE.sleepTimer);
    STATE.sleepMinutes = minutes;
    if (minutes > 0) {
      STATE.sleepTimer = setTimeout(() => {
        stopNarrator();
        showToast(nrT().sleepDone);
      }, minutes * 60000);
    }
  }

  // ═══ LOCK SCREEN CONTROLS (Media Session API) ═══
  function setupMediaSession() {
    if (!('mediaSession' in navigator)) return;
    const l = getLang();
    navigator.mediaSession.metadata = new MediaMetadata({
      title: l === 'ar' ? 'جدد حياتك' : l === 'fr' ? 'Renouvelle ta Vie' : 'Renew Your Life',
      artist: l === 'ar' ? 'الشيخ محمد الغزالي' : 'Sheikh Mohammed al-Ghazali',
      album: STATE.mode === 'book' ? (l === 'ar' ? 'الكتاب كاملاً' : l === 'fr' ? 'Livre complet' : 'Full Book') : getActiveTabName(),
    });
    navigator.mediaSession.setActionHandler('play', pauseNarrator);
    navigator.mediaSession.setActionHandler('pause', pauseNarrator);
    navigator.mediaSession.setActionHandler('nexttrack', nextCard);
    navigator.mediaSession.setActionHandler('previoustrack', prevCard);
    navigator.mediaSession.setActionHandler('stop', stopNarrator);
  }

  // ═══ PROGRESS ═══
  function updateProgress() {
    const total = STATE.cards.length;
    const current = STATE.cardIndex + 1;
    const el = document.getElementById('narratorProgress');
    if (el) {
      el.textContent = `${current}/${total}`;
    }
    const bar = document.getElementById('narratorBar');
    if (bar) {
      bar.style.width = (current / total * 100) + '%';
    }
  }

  // ═══ UI UPDATE ═══
  function updateUI() {
    const btn = document.getElementById('narratorMainBtn');
    const panel = document.getElementById('narratorPanel');
    const playBtn = document.getElementById('narratorPlayPause');

    if (btn) {
      btn.classList.toggle('active', STATE.playing);
    }
    if (playBtn) {
      playBtn.textContent = STATE.playing && !STATE.paused ? '⏸️' : '▶️';
    }
    // Update settings UI
    const speedEl = document.getElementById('narratorSpeed');
    if (speedEl) speedEl.value = STATE.speed;
    const speedLabel = document.getElementById('narratorSpeedLabel');
    if (speedLabel) speedLabel.textContent = STATE.speed + 'x';
  }

  // ═══ UPDATE LABELS ═══
  function updateLabels() {
    const t = nrT();
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('narratorTitle', t.title);
    // Mode labels
    document.querySelectorAll('[data-nr="page"]').forEach(el => el.textContent = t.page);
    document.querySelectorAll('[data-nr="book"]').forEach(el => el.textContent = t.book);
    // Setting labels
    document.querySelectorAll('[data-nr="voice"]').forEach(el => el.textContent = t.voice);
    document.querySelectorAll('[data-nr="speed"]').forEach(el => el.textContent = t.speed);
    document.querySelectorAll('[data-nr="pitch"]').forEach(el => el.textContent = t.pitch);
    document.querySelectorAll('[data-nr="loop"]').forEach(el => el.textContent = t.loop);
    document.querySelectorAll('[data-nr="sleep"]').forEach(el => el.textContent = t.sleep);
    document.querySelectorAll('[data-nr="karaoke"]').forEach(el => el.textContent = t.karaoke);
    document.querySelectorAll('[data-nr="autoscroll"]').forEach(el => el.textContent = t.autoScroll);
    document.querySelectorAll('[data-nr="duo"]').forEach(el => el.textContent = t.duo);
    // Select options
    document.querySelectorAll('[data-nr="off"]').forEach(el => el.textContent = t.off);
  }

  // ═══ PANEL TOGGLE ═══
  function toggleNarratorPanel() {
    const panel = document.getElementById('narratorPanel');
    if (panel) {
      panel.classList.toggle('hidden');
      updateLabels();
      if (typeof playSound === 'function') playSound('click');
    }
  }

  // ═══ SETTINGS HANDLERS ═══
  function onSpeedChange(val) {
    STATE.speed = parseFloat(val);
    const label = document.getElementById('narratorSpeedLabel');
    if (label) label.textContent = STATE.speed + 'x';
    localStorage.setItem('jh-narrator-speed', STATE.speed);
  }

  function onPitchChange(val) {
    STATE.pitch = parseFloat(val);
    const label = document.getElementById('narratorPitchLabel');
    if (label) label.textContent = STATE.pitch.toFixed(1);
    localStorage.setItem('jh-narrator-pitch', STATE.pitch);
  }

  function onLoopChange(val) {
    STATE.loopCount = parseInt(val);
  }

  function onSleepChange(val) {
    setSleepTimer(parseInt(val));
    const l = getLang();
    if (parseInt(val) > 0) {
      const msg = nrT().sleepSet + ' ' + val + ' ' + nrT().min;
      if (typeof showToast === 'function') showToast(msg);
    }
  }

  function onKaraokeToggle(checked) {
    STATE.karaokeEnabled = checked;
    localStorage.setItem('jh-narrator-karaoke', checked);
  }

  function onAutoScrollToggle(checked) {
    STATE.autoScroll = checked;
    localStorage.setItem('jh-narrator-autoscroll', checked);
  }

  function onDuoToggle(checked) {
    STATE.duoReading = checked;
    localStorage.setItem('jh-narrator-duo', checked);
  }

  // ═══ VOICE PICKER ═══
  function populateVoiceSelect() {
    const select = document.getElementById('narratorVoice');
    if (!select) return;
    const voices = speechSynthesis.getVoices();
    const l = getLang();
    const langCode = l === 'ar' ? 'ar' : l === 'fr' ? 'fr' : 'en';
    select.innerHTML = '';
    // Store the real index in the full voices array
    const filtered = [];
    voices.forEach((v, realIdx) => {
      if (v.lang.startsWith(langCode)) filtered.push({ voice: v, idx: realIdx });
    });
    if (filtered.length === 0) {
      // Fallback: show all voices
      voices.forEach((v, realIdx) => {
        filtered.push({ voice: v, idx: realIdx });
      });
    }
    filtered.forEach((item, i) => {
      const opt = document.createElement('option');
      opt.value = item.idx; // real index in full voices array
      opt.textContent = `${item.voice.name} (${item.voice.lang})`;
      // Mark current voice as selected
      const currentVoice = getVoiceForLang(l);
      if (currentVoice && item.voice.name === currentVoice.name) opt.selected = true;
      select.appendChild(opt);
    });
  }

  function onVoiceChange(val) {
    const voices = speechSynthesis.getVoices();
    const voice = voices[parseInt(val)];
    if (!voice) return;
    const l = getLang();
    if (l === 'ar') STATE.voiceAR = voice;
    else if (l === 'fr') STATE.voiceFR = voice;
    else STATE.voiceEN = voice;
  }

  // ═══ LOAD SAVED SETTINGS ═══
  function loadSettings() {
    STATE.speed = parseFloat(localStorage.getItem('jh-narrator-speed') || '1');
    STATE.pitch = parseFloat(localStorage.getItem('jh-narrator-pitch') || '1');
    STATE.karaokeEnabled = localStorage.getItem('jh-narrator-karaoke') !== 'false';
    STATE.autoScroll = localStorage.getItem('jh-narrator-autoscroll') !== 'false';
    STATE.duoReading = localStorage.getItem('jh-narrator-duo') === 'true';
  }

  // ═══ INIT ═══
  function initNarrator() {
    loadSettings();
    updateLabels();
    // Repopulate voices and labels when language changes
    const origSetLang = window.setLang;
    if (origSetLang) {
      window.setLang = function(l) {
        origSetLang(l);
        setTimeout(() => { populateVoiceSelect(); updateLabels(); }, 100);
        if (STATE.playing) stopNarrator();
      };
    }
  }

  // ═══ EXPOSE GLOBALS ═══
  window.narratorPlayPage = playPage;
  window.narratorPlayBook = playBook;
  window.narratorPause = pauseNarrator;
  window.narratorStop = stopNarrator;
  window.narratorNext = nextCard;
  window.narratorPrev = prevCard;
  window.narratorTogglePanel = toggleNarratorPanel;
  window.narratorSpeedChange = onSpeedChange;
  window.narratorPitchChange = onPitchChange;
  window.narratorLoopChange = onLoopChange;
  window.narratorSleepChange = onSleepChange;
  window.narratorKaraokeToggle = onKaraokeToggle;
  window.narratorAutoScrollToggle = onAutoScrollToggle;
  window.narratorDuoToggle = onDuoToggle;
  window.narratorVoiceChange = onVoiceChange;
  window.narratorPopulateVoices = populateVoiceSelect;

  // Auto-init
  document.addEventListener('DOMContentLoaded', initNarrator);

})();
