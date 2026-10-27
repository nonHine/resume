/**
 * ENG1.PREP // B2 MASTER & ROADMAP.STUDIO
 * Unified Lenis Smooth Scroll + GSAP ScrollTrigger + Procedural Web Audio Engine
 * 100% Offline-First • Zero External Audio Dependencies • Accessible (Reduced-Motion Safe)
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'eng1_sound_enabled';
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =====================================================================
     1. PROCEDURAL WEB AUDIO SYNTHESIZER (window.Eng1Sound)
     ===================================================================== */
  const Eng1Sound = {
    ctx: null,
    enabled: true,
    lastHoverTime: 0,
    lastMilestoneTime: 0,

    initStorage() {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
          this.enabled = saved !== 'false';
        }
      } catch (e) {
        this.enabled = true;
      }
    },

    ensureContext() {
      if (!this.enabled || typeof window === 'undefined') return null;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!this.ctx) {
        try {
          this.ctx = new AudioCtx();
        } catch (e) {
          return null;
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    },

    /* Mechanical Key-Switch Click */
    playClick() {
      const ctx = this.ensureContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(195, now);
        osc.frequency.exponentialRampToValueAtTime(65, now + 0.032);

        gain.gain.setValueAtTime(0.065, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.032);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.035);
      } catch (e) {}
    },

    /* Subtle Hover Micro-Tick (Throttled) */
    playHover() {
      const nowMs = Date.now();
      if (nowMs - this.lastHoverTime < 85) return;
      this.lastHoverTime = nowMs;

      const ctx = this.ensureContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(640, now);
        osc.frequency.exponentialRampToValueAtTime(420, now + 0.016);

        gain.gain.setValueAtTime(0.014, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.016);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.018);
      } catch (e) {}
    },

    /* Card Flip / Tab / Accordion Whoosh */
    playFlip() {
      const ctx = this.ensureContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(560, now + 0.075);

        gain.gain.setValueAtTime(0.055, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.085);
      } catch (e) {}
    },

    /* Correct Answer Ascending Chime (C5 -> E5 -> G5 -> C6) */
    playCorrect() {
      const ctx = this.ensureContext();
      if (!ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.5];
        const now = ctx.currentTime;
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const start = now + idx * 0.055;
          osc.type = idx === notes.length - 1 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.001, start);
          gain.gain.linearRampToValueAtTime(0.08, start + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.24);
        });
      } catch (e) {}
    },

    /* Wrong Answer / Warning Low Dual-Tone */
    playWrong() {
      const ctx = this.ensureContext();
      if (!ctx) return;
      try {
        const notes = [215, 160];
        const now = ctx.currentTime;
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const start = now + idx * 0.095;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.07, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.14);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.15);
        });
      } catch (e) {}
    },

    /* Scroll Station Milestone Tick (Subtle & Throttled) */
    playMilestone() {
      const nowMs = Date.now();
      if (nowMs - this.lastMilestoneTime < 480) return;
      this.lastMilestoneTime = nowMs;

      const ctx = this.ensureContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(250, now + 0.022);

        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.024);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.026);
      } catch (e) {}
    },

    /* Exam Submission Fanfare */
    playFanfare() {
      const ctx = this.ensureContext();
      if (!ctx) return;
      try {
        const chord = [523.25, 659.25, 783.99, 987.77, 1046.5];
        const now = ctx.currentTime;
        chord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const start = now + idx * 0.07;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.001, start);
          gain.gain.linearRampToValueAtTime(0.085, start + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.42);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.45);
        });
      } catch (e) {}
    },

    toggle() {
      this.enabled = !this.enabled;
      try {
        window.localStorage.setItem(STORAGE_KEY, String(this.enabled));
      } catch (e) {}
      this.syncToggleButtons();
      if (this.enabled) {
        this.playCorrect();
      }
      return this.enabled;
    },

    syncToggleButtons() {
      const btns = document.querySelectorAll('.sound-toggle-btn');
      const speakerOnSvg =
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
      const speakerOffSvg =
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';

      btns.forEach((btn) => {
        btn.setAttribute('aria-pressed', String(this.enabled));
        btn.classList.toggle('is-muted', !this.enabled);
        btn.innerHTML = this.enabled
          ? speakerOnSvg + '<span>เสียง: เปิด</span>'
          : speakerOffSvg + '<span>เสียง: ปิด</span>';
      });
    }
  };

  Eng1Sound.initStorage();
  if (typeof window !== 'undefined') {
    window.Eng1Sound = Eng1Sound;
  }

  /* =====================================================================
     2. MOUNT UI CONTROLS & DELEGATED INTERACTION LISTENERS
     ===================================================================== */
  function mountProgressBarAndSoundToggle() {
    if (!document.body) return;

    // 1. Mount Top Scroll Progress Bar
    if (!document.getElementById('eng1ScrollProgress')) {
      const bar = document.createElement('div');
      bar.id = 'eng1ScrollProgress';
      bar.className = 'scroll-progress-bar';
      bar.setAttribute('aria-hidden', 'true');
      document.body.prepend(bar);
    }

    // 2. Mount Navbar Sound Toggle Button if not already present
    if (!document.querySelector('.sound-toggle-btn')) {
      const targetContainer =
        document.querySelector('.studio-header .header-actions') ||
        document.querySelector('.floating-pill-nav .nav-utilities') ||
        document.querySelector('.exam-header-bar .timer-container') ||
        document.querySelector('.top-nav-bar .top-nav-right');

      if (targetContainer) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sound-toggle-btn';
        btn.title = 'เปิด/ปิดเสียงประกอบ (Toggle Sound Effects)';
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          Eng1Sound.toggle();
        });
        targetContainer.prepend(btn);
      }
    } else {
      document.querySelectorAll('.sound-toggle-btn').forEach((btn) => {
        if (!btn.dataset.soundBound) {
          btn.dataset.soundBound = 'true';
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            Eng1Sound.toggle();
          });
        }
      });
    }

    Eng1Sound.syncToggleButtons();

    // 3. Global Delegated Click & Hover Audio Feedback
    document.addEventListener(
      'click',
      (e) => {
        const el = e.target.closest(
          'a, button, .quiz-option, .choice-item, .opt-item, .interactive-flashcard, .flashcard-box, .faq-trigger, .faq-btn, .palette-btn, .mode-btn'
        );
        if (!el || el.classList.contains('sound-toggle-btn')) return;

        // Avoid double-playing when quiz check button or drill button handles its own chime
        if (
          el.classList.contains('quiz-btn') ||
          el.classList.contains('drill-opt-btn') ||
          el.classList.contains('btn-submit-exam')
        ) {
          return;
        }

        if (
          el.classList.contains('interactive-flashcard') ||
          el.classList.contains('flashcard-box') ||
          el.classList.contains('faq-trigger') ||
          el.classList.contains('faq-btn') ||
          el.classList.contains('mode-btn')
        ) {
          Eng1Sound.playFlip();
        } else {
          Eng1Sound.playClick();
        }
      },
      { passive: true }
    );

    document.addEventListener(
      'mouseover',
      (e) => {
        const el = e.target.closest(
          '.btn-pill, .btn-tactile, .top-nav-btn, .quiz-option, .choice-item, .opt-item, .mini-set-card, .trap-card, .cmd-card, .book-spine'
        );
        if (el) {
          Eng1Sound.playHover();
        }
      },
      { passive: true }
    );
  }

  /* =====================================================================
     3. LENIS SMOOTH SCROLL + GSAP SCROLLTRIGGER INITIALIZATION
     ===================================================================== */
  function initLenisAndGSAP() {
    // Mark nested scrollable containers with data-lenis-prevent
    const scrollContainers = document.querySelectorAll(
      '.q-context-box, .palette-card'
    );
    scrollContainers.forEach((box) => {
      box.setAttribute('data-lenis-prevent', '');
    });

    const hasGSAP = typeof window.gsap !== 'undefined';
    const hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';
    const hasLenis = typeof window.Lenis !== 'undefined';

    if (hasGSAP && hasScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    // Initialize Lenis Smooth Scroll (unless reduced motion is requested)
    let lenisInstance = null;
    if (hasLenis && !prefersReducedMotion) {
      lenisInstance = new window.Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1
      });
      window.lenis = lenisInstance;

      if (hasGSAP && hasScrollTrigger) {
        lenisInstance.on('scroll', window.ScrollTrigger.update);
        window.gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });
        window.gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      // Smooth Anchor Link Scrolling via Lenis
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (!href || href === '#') return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenisInstance.scrollTo(target, {
              offset: -24,
              duration: 1.05
            });
          }
        });
      });
    }

    if (!hasGSAP || !hasScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // 1. Top Scroll Progress Bar Scrubbing
    const progressBar = document.getElementById('eng1ScrollProgress');
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.15
        }
      });
    }

    if (prefersReducedMotion) {
      // Ensure all reveal elements are immediately visible
      document
        .querySelectorAll('.reveal-box, .reveal-item, .feature-row')
        .forEach((el) => {
          el.classList.add('is-revealed', 'is-visible');
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      return;
    }

    // 2. Studio Landing Page Choreography (index-studio.html)
    const studioBoxes = gsap.utils.toArray('.reveal-box');
    if (studioBoxes.length > 0) {
      studioBoxes.forEach((box) => {
        box.classList.add('is-revealed');
      });
      ScrollTrigger.batch(studioBoxes, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          Eng1Sound.playMilestone();
          gsap.fromTo(
            batch,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: 'power2.out',
              overwrite: 'auto'
            }
          );
        }
      });
    }

    // Studio Panorama Mini-Set Cards Stagger
    const miniSetCards = gsap.utils.toArray('.mini-set-card');
    if (miniSetCards.length > 0) {
      gsap.fromTo(
        miniSetCards,
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.48,
          stagger: 0.07,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.panorama-sets-grid',
            start: 'top 86%',
            once: true
          }
        }
      );
    }

    // 3. Neo-Brutalist Command Center Choreography (index.html)
    const brutalistTargets = gsap.utils.toArray(
      '.trap-card, .cmd-card, .feature-row, .pricing-grid-4 .plan-card, .wall-grid-6 .rule-card, .stat-counter-box, .onboard-card'
    );
    if (brutalistTargets.length > 0) {
      brutalistTargets.forEach((el) => {
        el.classList.remove('reveal-ready');
        el.classList.add('is-visible');
      });
      ScrollTrigger.batch(brutalistTargets, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          Eng1Sound.playMilestone();
          gsap.fromTo(
            batch,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.07,
              ease: 'power2.out',
              overwrite: 'auto'
            }
          );
        }
      });
    }

    // 4. Lesson & Reference Pages Choreography (lessons/*.html & reference/*.html)
    const lessonCards = gsap.utils.toArray(
      'header.lesson-header, section.card, div.card, .test-box, .quiz-card'
    );
    if (lessonCards.length > 0) {
      ScrollTrigger.batch(lessonCards, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          Eng1Sound.playMilestone();
          gsap.fromTo(
            batch,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.06,
              ease: 'power2.out',
              overwrite: 'auto'
            }
          );
        }
      });
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        mountProgressBarAndSoundToggle();
        initLenisAndGSAP();
      });
    } else {
      mountProgressBarAndSoundToggle();
      initLenisAndGSAP();
    }
  }
})();
