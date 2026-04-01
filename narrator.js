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
        var l = (typeof lang !== 'undefined') ? lang : 'en';
        var msg = l === 'ar' ? 'الراوي غير مدعوم في هذا المتصفح' : l === 'fr' ? 'Narrateur non supporté dans ce navigateur' : 'Narrator not supported in this browser';
        showToast(msg);
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
    duoTimeout: null,
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
    return document.documentElement.lang || 'ar';
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
    return langVoices[0] || null;
  }

  function getVoiceForLang(l) {
    if (l === 'ar') return STATE.voiceAR;
    if (l === 'fr') return STATE.voiceFR;
    return STATE.voiceEN;
  }

  // Load voices (some browsers load async)
  speechSynthesis.addEventListener('voiceschanged', loadVoices);
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

    // Section title + desc (not for about tab — about has its own structure)
    if (tabName !== 'about') {
      const title = panel.querySelector('.section-title');
      const desc = panel.querySelector('.section-desc');
      if (title) {
        cards.push({
          el: title.closest('.panel') || title,
          text: (title.textContent || '') + '. ' + (desc ? desc.textContent : ''),
          type: 'title'
        });
      }
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
    // 1. Strip emojis and special chars
    var clean = text.replace(/\s+/g, ' ').replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}\u{2190}-\u{21FF}↑↓←→✓]/gu, '').trim();

    // 2. Remove filler chars that make TTS stumble
    clean = clean.replace(/[«»""()[\]{}—–•●◆■▪]/g, ' ').replace(/\s+/g, ' ');

    // 3. Add breathing pauses at natural break points (all languages)
    clean = clean
      .replace(/:\s/g, ':, ')           // pause after colons
      .replace(/;\s/g, ';, ')           // pause after semicolons
      .replace(/\s—\s/g, ', ')          // dash → pause
      .replace(/\.\.\./g, ', ')         // ellipsis → pause
      .replace(/\s*\n\s*/g, '. ');      // newlines → sentence break

    var l = getLang();

    // 4. French pronunciation + natural pacing
    if (l === 'fr') {
      clean = clean
        .replace(/al-Ghazali/gi, 'al Razali')
        .replace(/Ghazali/gi, 'Razali')
        .replace(/Sheikh/gi, 'Cheikh')
        .replace(/Mohammed/gi, 'Mohamèd')
        .replace(/Carnegie/gi, 'Carnégi')
        .replace(/Al-Azhar/gi, 'al Azar')
        .replace(/Faisal/gi, 'Faycal')
        .replace(/Nasih Ulwan/gi, 'Nassih Oulwane')
        .replace(/Jaddid Hayatak/gi, 'Djaddid Hayatak')
        .replace(/\bet\b/g, ', et')     // breathing pause before "et"
        .replace(/\bmais\b/g, ', mais') // breathing pause before "mais"
        .replace(/\bou\b/g, ', ou')     // breathing pause before "ou"
        .replace(/\bcar\b/g, ', car')   // breathing pause before "car"
        .replace(/\bdonc\b/g, ', donc');// breathing pause before "donc"
    }

    // 5. English pronunciation + natural pacing
    if (l === 'en') {
      clean = clean
        .replace(/al-Ghazali/gi, 'al Gah-zah-lee')
        .replace(/Ghazali/gi, 'Gah-zah-lee')
        .replace(/Jaddid Hayatak/gi, 'Jaddeed Hayaatak')
        .replace(/\band\b/g, ', and')
        .replace(/\bbut\b/g, ', but')
        .replace(/\bor\b/g, ', or')
        .replace(/\bhowever\b/gi, ', however,');
    }

    // 6. Arabic: pronunciation hints + natural pauses
    if (l === 'ar') {
      clean = clean
        // Transliterated names → Arabic
        .replace(/Carnegie/gi, 'كارنيجي')
        .replace(/Dale/gi, 'ديل')
        .replace(/Al-Azhar/gi, 'الأزهر')
        .replace(/GitHub/gi, 'غيت هاب')
        // Strip URLs and emails (not useful read aloud)
        .replace(/https?:\/\/[^\s]+/g, '')
        .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '')
        .replace(/workshop-diy\.org/gi, '')
        // Strip remaining Latin text that Arabic TTS can't read
        .replace(/[a-zA-Z]{4,}/g, '')
        // Natural pauses at connectors
        .replace(/\bو\b/g, '، و')
        .replace(/\bلكن\b/g, '، لكن')
        .replace(/\bأو\b/g, '، أو')
        .replace(/\bثم\b/g, '، ثم')
        .replace(/\bبل\b/g, '، بل');
    }

    return clean.replace(/,\s*,/g, ',').replace(/\s+/g, ' ').trim();
  }

  // ═══ SPEECH ENGINE ═══
  // Uses polling to detect speech end — onend is unreliable in Chrome
  let speakGen = 0;

  function speak(text, onEnd) {
    speakGen++;
    var myGen = speakGen;
    speechSynthesis.cancel();

    if (!text || !text.trim()) {
      if (onEnd) onEnd();
      return;
    }

    var l = getLang();
    var utt = new SpeechSynthesisUtterance(text);
    var selectedVoice = getVoiceForLang(l); if (selectedVoice) utt.voice = selectedVoice;
    utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US';
    utt.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed;
    utt.pitch = STATE.pitch;

    // Karaoke
    if (STATE.karaokeEnabled) {
      utt.onboundary = function(e) {
        if (myGen !== speakGen) return;
        if (e.name === 'word' && e.charLength > 0 && STATE.cards[STATE.cardIndex]) {
          highlightWord(STATE.cards[STATE.cardIndex].el, e.charIndex, e.charLength, text);
        }
      };
    }

    var done = false;
    function finish() {
      if (done) return;
      done = true;
      clearHighlights();
      if (myGen !== speakGen) return;
      console.log('[Narrator] Card speech finished');
      if (onEnd) onEnd();
    }

    // Primary: onend callback
    utt.onend = finish;
    utt.onerror = finish;

    speechSynthesis.speak(utt);

    // Secondary: poll every 500ms to detect when speech actually stops
    // This catches all Chrome bugs where onend doesn't fire
    var pollStarted = false;
    var pollInterval = setInterval(function() {
      if (done || myGen !== speakGen) { clearInterval(pollInterval); return; }
      // Wait until speech has started before polling for end
      if (speechSynthesis.speaking) { pollStarted = true; }
      // Chrome pause bug: resume if paused unexpectedly
      if (pollStarted && speechSynthesis.paused && !STATE.paused) {
        speechSynthesis.resume();
      }
      // Detect end: was speaking, now stopped
      if (pollStarted && !speechSynthesis.speaking && !speechSynthesis.pending) {
        console.log('[Narrator] Poll detected speech end');
        clearInterval(pollInterval);
        finish();
      }
    }, 500);

    // Hard fallback: max wait based on text length
    var maxWait = Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000;
    setTimeout(function() {
      if (!done && myGen === speakGen) {
        console.log('[Narrator] Hard fallback after ' + maxWait + 'ms');
        clearInterval(pollInterval);
        finish();
      }
    }, maxWait);
  }

  // ═══ KARAOKE HIGHLIGHT ═══
  function highlightWord(el, charIndex, charLength, fullText) {
    if (!el) return;
    if (!charLength) return;
    const word = fullText.slice(charIndex, charIndex + charLength);
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
      if (!STATE.playing) return;
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
    if (!STATE.playing) return;
    // Loop mode
    if (STATE.loopCount > 0) {
      STATE.loopCurrent++;
      if (STATE.loopCurrent < STATE.loopCount) {
        setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300);
        return;
      }
      STATE.loopCurrent = 0;
    }

    var justRead = STATE.cards[STATE.cardIndex];
    var delay = 1200;
    if (justRead) {
      if (justRead.type === 'title') delay = 2500;
      else if (justRead.text && justRead.text.length > 150) delay = 2000;
    }
    STATE.cardIndex++;
    if (!STATE.playing) return;
    console.log('[Narrator] Card done: "' + (justRead ? justRead.type : '?') + '" — pausing ' + delay + 'ms before card ' + STATE.cardIndex);
    // Remove highlight during pause for visual feedback
    document.querySelectorAll('.narrator-active-card').forEach(function(e) { e.classList.remove('narrator-active-card'); });
    setTimeout(function() {
      console.log('[Narrator] Pause over, playing card ' + STATE.cardIndex);
      if (STATE.playing) readCurrentCard();
    }, delay);
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
      const anxietyCards = Array.from(card.el.parentNode.querySelectorAll('.anxiety-card'));
      const idx = anxietyCards.indexOf(card.el);
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

    let duoCalled = false;
    function duoDone() { if (!duoCalled) { duoCalled = true; STATE.duoTimeout = null; if (onEnd) onEnd(); } }
    const utt = new SpeechSynthesisUtterance(cleanText(duoText));
    utt.voice = duoVoice;
    utt.lang = 'fr-FR';
    utt.rate = STATE.speed;
    utt.pitch = STATE.pitch;
    utt.onend = duoDone;
    utt.onerror = duoDone;
    STATE.duoTimeout = setTimeout(function() { if (STATE.playing) speechSynthesis.speak(utt); else duoDone(); }, 300);
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
      setTimeout(function() {
        if (!STATE.playing) return;
        STATE.cards = extractCards(getActivePanel());
        STATE.cardIndex = 0;
        // Announce chapter name
        const title = getActivePanel().querySelector('.section-title');
        if (title) {
          speak(title.textContent, function() {
            if (!STATE.playing) return;
            setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300);
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
    closePanel();
    updateUI();
    setupMediaSession();

    if (typeof showToast === 'function') showToast(nrT().page);
    readCurrentCard();
  }

  function playBook() {
    STATE.mode = 'book';
    STATE.tabIndex = 0;
    STATE.playing = true;
    STATE.paused = false;
    closePanel();
    updateUI();
    setupMediaSession();

    if (typeof showToast === 'function') showToast(nrT().book);
    // Start from first tab
    switchToTab(STATE.tabOrder[0]);
  }

  function closePanel() {
    const panel = document.getElementById('narratorPanel');
    if (panel && !panel.classList.contains('hidden')) panel.classList.add('hidden');
  }

  function pauseNarrator() {
    if (STATE.playing && !STATE.paused) {
      speechSynthesis.pause();
      STATE.paused = true;
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
      updateUI();
    } else if (STATE.paused) {
      speechSynthesis.resume();
      STATE.paused = false;
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
      updateUI();
    }
  }

  function cancelDuo() {
    if (STATE.duoTimeout) { clearTimeout(STATE.duoTimeout); STATE.duoTimeout = null; }
  }

  function stopNarrator() {
    speakGen++; // invalidate all pending callbacks
    cancelDuo();
    speechSynthesis.cancel();
    STATE.playing = false;
    STATE.paused = false;
    STATE.cardIndex = 0;
    clearHighlights();
    document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card'));
    if (STATE.sleepTimer) { clearTimeout(STATE.sleepTimer); STATE.sleepTimer = null; }

    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
    updateUI();
  }

  function nextCard() {
    if (!STATE.playing) return;
    speakGen++;
    cancelDuo();
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
    speakGen++;
    cancelDuo();
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
    navigator.mediaSession.playbackState = 'playing';
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
    if (!panel) return;
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      updateLabels();
      populateVoiceSelect();
      syncCheckboxes();
    }
    if (typeof playSound === 'function') playSound('click');
  }

  // ═══ SYNC UI WITH STATE ═══
  function syncCheckboxes() {
    const panel = document.getElementById('narratorPanel');
    if (!panel) return;
    const toggles = panel.querySelectorAll('.narrator-toggle input[type=checkbox]');
    // Order: karaoke, autoscroll, duo
    if (toggles[0]) toggles[0].checked = STATE.karaokeEnabled;
    if (toggles[1]) toggles[1].checked = STATE.autoScroll;
    if (toggles[2]) toggles[2].checked = STATE.duoReading;
    // Sync sliders
    const speedEl = document.getElementById('narratorSpeed');
    if (speedEl) speedEl.value = STATE.speed;
    const speedLabel = document.getElementById('narratorSpeedLabel');
    if (speedLabel) speedLabel.textContent = STATE.speed + 'x';
    const pitchEl = document.getElementById('narratorPitch');
    if (pitchEl) pitchEl.value = STATE.pitch;
    const pitchLabel = document.getElementById('narratorPitchLabel');
    if (pitchLabel) pitchLabel.textContent = STATE.pitch.toFixed(1);
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
    const currentVoice = getVoiceForLang(l);
    filtered.forEach(function(item) {
      const opt = document.createElement('option');
      opt.value = item.idx; // real index in full voices array
      opt.textContent = `${item.voice.name} (${item.voice.lang})`;
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
    STATE.speed = parseFloat(localStorage.getItem('jh-narrator-speed')) || 1;
    STATE.pitch = parseFloat(localStorage.getItem('jh-narrator-pitch')) || 1;
    STATE.karaokeEnabled = localStorage.getItem('jh-narrator-karaoke') !== 'false';
    STATE.autoScroll = localStorage.getItem('jh-narrator-autoscroll') !== 'false';
    STATE.duoReading = localStorage.getItem('jh-narrator-duo') === 'true';
  }

  // Chrome resume is now handled by polling in speak()

  // ═══ ESCAPE KEY TO CLOSE PANEL ═══
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var panel = document.getElementById('narratorPanel');
      if (panel && !panel.classList.contains('hidden')) {
        panel.classList.add('hidden');
        e.stopPropagation();
      }
    }
  });

  // ═══ PAGE UNLOAD CLEANUP ═══
  window.addEventListener('beforeunload', function() {
    speechSynthesis.cancel();

  });

  // ═══ INIT ═══
  function initNarrator() {
    loadSettings();
    updateLabels();
    setTimeout(injectSpeakButtons, 500);
    // Repopulate voices and labels when language changes
    var lastLang = document.documentElement.lang || 'ar';
    new MutationObserver(function() {
      var newLang = document.documentElement.lang || 'ar';
      if (newLang !== lastLang) {
        lastLang = newLang;
        setTimeout(function() { populateVoiceSelect(); updateLabels(); injectSpeakButtons(); }, 100);
        if (STATE.playing) stopNarrator();
      }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  // ═══ READ SINGLE SECTION ═══
  var sectionSpeaking = false;

  function speakSection(el) {
    // Stop any ongoing narrator or section read
    if (STATE.playing) stopNarrator();
    speakGen++;
    speechSynthesis.cancel();

    var text = cleanText(el.textContent || '');
    if (!text) return;

    sectionSpeaking = true;
    // Highlight the card
    el.classList.add('narrator-active-card');

    var l = getLang();
    var utt = new SpeechSynthesisUtterance(text);
    var selectedVoice = getVoiceForLang(l); if (selectedVoice) utt.voice = selectedVoice;
    utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US';
    utt.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed;
    utt.pitch = STATE.pitch;

    var done = false;
    function finish() {
      if (done) return;
      done = true;
      sectionSpeaking = false;
      el.classList.remove('narrator-active-card');
      clearHighlights();
    }

    utt.onend = finish;
    utt.onerror = finish;

    // Karaoke
    if (STATE.karaokeEnabled) {
      utt.onboundary = function(e) {
        if (e.name === 'word' && e.charLength > 0) {
          highlightWord(el, e.charIndex, e.charLength, text);
        }
      };
    }

    speechSynthesis.speak(utt);

    // Poll fallback
    var pollStarted = false;
    var pollInterval = setInterval(function() {
      if (done) { clearInterval(pollInterval); return; }
      if (speechSynthesis.speaking) pollStarted = true;
      if (pollStarted && speechSynthesis.paused) speechSynthesis.resume();
      if (pollStarted && !speechSynthesis.speaking && !speechSynthesis.pending) {
        clearInterval(pollInterval);
        finish();
      }
    }, 500);

    // Hard fallback
    setTimeout(function() {
      if (!done) { clearInterval(pollInterval); finish(); }
    }, Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000);
  }

  function stopSection() {
    if (sectionSpeaking) {
      speechSynthesis.cancel();
      sectionSpeaking = false;
      document.querySelectorAll('.narrator-active-card').forEach(function(e) { e.classList.remove('narrator-active-card'); });
      clearHighlights();
    }
  }

  // ═══ INJECT 🔊 BUTTONS INTO CARDS ═══
  function injectSpeakButtons() {
    // Remove old buttons first
    document.querySelectorAll('.narrator-speak-btn').forEach(function(b) { b.remove(); });

    var selectors = [
      '.about-disclaimer', '.about-author', '.about-section',
      '.principle-card', '.anxiety-card', '.habit-item', '.daily-card'
    ];
    selectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(card) {
        // Skip if already has button
        if (card.querySelector('.narrator-speak-btn')) return;
        var btn = document.createElement('button');
        btn.className = 'narrator-speak-btn';
        btn.textContent = '🔊';
        btn.title = nrT().page;
        btn.onclick = function(e) {
          e.stopPropagation();
          if (sectionSpeaking) {
            stopSection();
          } else {
            speakSection(card);
          }
        };
        card.style.position = 'relative';
        card.appendChild(btn);
      });
    });
  }

  // Re-inject after renders
  var origRenderAbout = window.renderAbout;
  if (origRenderAbout) {
    window.renderAbout = function() { origRenderAbout(); setTimeout(injectSpeakButtons, 100); };
  }
  var origRenderPrinciples = window.renderPrinciples;
  if (origRenderPrinciples) {
    window.renderPrinciples = function() { origRenderPrinciples(); setTimeout(injectSpeakButtons, 100); };
  }
  var origRenderAnxiety = window.renderAnxiety;
  if (origRenderAnxiety) {
    window.renderAnxiety = function() { origRenderAnxiety(); setTimeout(injectSpeakButtons, 100); };
  }
  var origRenderHabits = window.renderHabits;
  if (origRenderHabits) {
    window.renderHabits = function() { origRenderHabits(); setTimeout(injectSpeakButtons, 100); };
  }
  var origRenderHome = window.renderHome;
  if (origRenderHome) {
    window.renderHome = function() { origRenderHome(); setTimeout(injectSpeakButtons, 100); };
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
