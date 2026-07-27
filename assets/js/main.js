/* =========================================================
   BETA WORKS — motion + interaction orchestration
   Lenis + GSAP (ScrollTrigger / SplitText / CustomEase)
   Everything degrades: no GSAP → static site, reduced
   motion → instant content, no animation.
   ========================================================= */
(function () {
  'use strict';

  var docEl = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';
  var motionOK = hasGsap && !reduced && docEl.classList.contains('motion');

  /* If the CDN failed or motion is reduced, un-gate the CSS
     so nothing stays hidden. */
  if (!motionOK) {
    docEl.classList.remove('motion');
    docEl.classList.add('no-motion');
  }

  /* =========================================================
     BASICS (always on)
     ========================================================= */

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  /* ---------- Nav state on scroll ---------- */
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (yr) {
    yr.textContent = new Date().getFullYear();
  });

  /* ---------- Contact form (backend untouched) ---------- */
  var form = document.querySelector('form.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var name = form.querySelector('[name="name"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var message = form.querySelector('[name="message"]').value.trim();
      var valid =
        name.length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        message.length > 5;
      if (!valid) {
        status.className = 'form-status err';
        status.textContent = 'Please fill in your name, a valid email, and a short message.';
        return;
      }
      status.className = 'form-status ok';
      status.textContent = 'Sending your brief...';

      var subjectField = form.querySelector('[name="_subject"]');
      if (subjectField) {
        subjectField.value = 'New project brief from ' + name;
      }

      // Submit to FormSubmit endpoint so the brief is emailed to us.
      form.submit();
    });
  }

  /* ---------- Counters: 0 → target, once, on intersection ---------- */
  var counters = document.querySelectorAll('[data-count]');
  function setCounterFinal(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    el.textContent = (target % 1 === 0 ? Math.round(target) : target.toFixed(1)) + suffix;
  }
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var start = performance.now();
    function step(now) {
      var p = Math.min((now - start) / duration, 1);
      var ease = 1 - Math.pow(1 - p, 4);
      var val = target * ease;
      el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      counters.forEach(setCounterFinal);
    } else {
      var cio = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) {
        el.textContent = '0' + (el.getAttribute('data-suffix') || '');
        cio.observe(el);
      });
    }
  }

  /* Portfolio filter changes layout — let ScrollTrigger know. */
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.work-filter button')) {
      if (motionOK && window.ScrollTrigger) {
        requestAnimationFrame(function () { window.ScrollTrigger.refresh(); });
      }
    }
  });

  if (!motionOK) return; /* static experience ends here */

  /* =========================================================
     MOTION LAYER
     ========================================================= */
  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger, window.SplitText, window.CustomEase);

  /* Custom easings — crafted, not library defaults */
  CustomEase.create('beta.out', 'M0,0 C0.16,1 0.3,1 1,1');          /* fast attack, long settle */
  CustomEase.create('beta.soft', 'M0,0 C0.25,0.46 0.45,0.94 1,1');  /* gentle */
  CustomEase.create('beta.swing', 'M0,0 C0.34,1.36 0.64,1 1,1');    /* slight overshoot */

  /* ---------- Lenis smooth scroll, synced to GSAP ticker ---------- */
  var lenis = null;
  if (typeof window.Lenis !== 'undefined') {
    lenis = new window.Lenis({ lerp: 0.115, wheelMultiplier: 1 });
    lenis.on('scroll', window.ScrollTrigger.update);
    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  /* Anchor links scroll through Lenis */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.1 });
      else target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- will-change hygiene ---------- */
  function wcOn(targets) {
    gsap.set(targets, { willChange: 'transform, opacity' });
  }
  function wcOff(targets) {
    gsap.set(targets, { willChange: 'auto' });
  }

  /* ---------- Reveal variants ---------- */
  var VARIANTS = {
    up:    { y: 34 },
    down:  { y: -26 },
    left:  { x: -40 },
    right: { x: 40 },
    rise:  { y: 44, scale: 0.97, transformOrigin: '50% 100%' },
    scale: { scale: 0.93, y: 12 },
    tilt:  { y: 30, rotationX: -7, transformOrigin: '50% 100%' }
  };
  function variantFor(name, fallback) {
    return VARIANTS[name] || VARIANTS[fallback || 'up'];
  }

  var boundFlag = 'betaBound';

  function revealOne(el, vars, opts) {
    if (el.dataset[boundFlag]) return;
    el.dataset[boundFlag] = '1';
    var from = Object.assign({ autoAlpha: 0 }, vars);
    gsap.fromTo(el, from, Object.assign({
      autoAlpha: 1,
      x: 0, y: 0, scale: 1, rotationX: 0,
      duration: 1,
      ease: 'beta.out',
      onStart: function () { wcOn(el); },
      onComplete: function () { wcOff(el); },
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      }
    }, opts || {}));
  }

  function revealGroup(container) {
    if (container.dataset[boundFlag]) return;
    container.dataset[boundFlag] = '1';
    var mode = container.getAttribute('data-reveal-stagger') || 'up';
    var children = Array.prototype.slice.call(container.children);
    if (!children.length) return;

    gsap.set(container, { autoAlpha: 1 }); /* container itself never hidden */

    var tl = gsap.timeline({
      scrollTrigger: { trigger: container, start: 'top 86%', once: true },
      onStart: function () { wcOn(children); },
      onComplete: function () { wcOff(children); }
    });

    if (mode === 'alternate') {
      children.forEach(function (child, i) {
        var v = i % 2 === 0 ? VARIANTS.left : VARIANTS.right;
        tl.fromTo(child, Object.assign({ autoAlpha: 0 }, v),
          { autoAlpha: 1, x: 0, y: 0, duration: 0.95, ease: 'beta.out' },
          i * 0.07);
      });
    } else if (mode === 'split' && children.length >= 2) {
      /* two-column: first from left, second from right */
      tl.fromTo(children[0], { autoAlpha: 0, x: -44 },
        { autoAlpha: 1, x: 0, duration: 1, ease: 'beta.out' }, 0);
      tl.fromTo(children.slice(1), { autoAlpha: 0, x: 44 },
        { autoAlpha: 1, x: 0, duration: 1, ease: 'beta.out', stagger: 0.06 }, 0.08);
    } else {
      var v = variantFor(mode);
      tl.fromTo(children, Object.assign({ autoAlpha: 0 }, v), {
        autoAlpha: 1,
        x: 0, y: 0, scale: 1, rotationX: 0,
        duration: 0.95,
        ease: mode === 'scale' ? 'beta.swing' : 'beta.out',
        stagger: 0.06 /* 60ms */
      }, 0);
    }
  }

  /* ---------- Hero / page-hero intro (runs on load, not scroll) ---------- */
  function splitTitle(el) {
    try {
      var split = new window.SplitText(el, { type: 'lines', linesClass: 'split-line' });
      /* wrap each line in a mask */
      split.lines.forEach(function (line) {
        var mask = document.createElement('div');
        mask.style.overflow = 'hidden';
        mask.style.display = 'block';
        line.parentNode.insertBefore(mask, line);
        mask.appendChild(line);
      });
      return split.lines;
    } catch (err) {
      return null;
    }
  }

  function introTimeline() {
    var hero = document.querySelector('.hero-workbench');
    var pageHero = document.querySelector('.page-hero, .case-hero');
    var scope = hero || pageHero;
    if (!scope) return;

    var tl = gsap.timeline({ delay: 0.12, defaults: { ease: 'beta.out' } });

    /* Nav settles in */
    if (nav) {
      tl.fromTo(nav, { y: -16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, 0);
    }

    var eyebrow = scope.querySelector('.eyebrow');
    var title = scope.querySelector('h1');
    var sub = scope.querySelector('.hero-sub') || scope.querySelector('.page-hero p, .case-hero .standfirst') || scope.querySelector('h1 ~ p');
    var actions = scope.querySelector('.hero-actions-f');
    var ledger = scope.querySelector('.hero-ledger');
    var rail = scope.querySelector('.hero-rail');
    var board = scope.querySelector('.hero-signature');
    var meta = scope.querySelector('.case-meta');

    /* mark everything in the hero as handled so scroll reveals skip them */
    scope.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(function (el) {
      el.dataset[boundFlag] = '1';
    });

    if (rail) tl.fromTo(rail, { x: -18, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.9 }, 0.1);
    if (eyebrow) tl.fromTo(eyebrow, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.15);

    if (title) {
      gsap.set(title, { autoAlpha: 1 });
      var lines = splitTitle(title);
      if (lines) {
        tl.fromTo(lines,
          { yPercent: 118 },
          { yPercent: 0, duration: 1.15, stagger: 0.08, ease: 'beta.out',
            onComplete: function () { wcOff(lines); } },
          0.22);
        wcOn(lines);
      } else {
        tl.fromTo(title, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1 }, 0.22);
      }
    }

    if (sub) tl.fromTo(sub, { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, 0.5);
    if (actions) tl.fromTo(actions, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.85 }, 0.62);
    if (meta) tl.fromTo(meta, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.85 }, 0.62);

    if (ledger) {
      var items = ledger.children;
      gsap.set(ledger, { autoAlpha: 1 });
      tl.fromTo(items, { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.07 }, 0.72);
    }

    /* Signature: pipeline board assembles */
    if (board) {
      tl.fromTo(board, { y: 46, autoAlpha: 0, scale: 0.985 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 1.15, ease: 'beta.soft' }, 0.45);

      var segments = board.querySelectorAll('.pipeline-line .segment');
      var steps = board.querySelectorAll('.pipeline-step');
      var readout = board.querySelectorAll('.pipeline-readout > div');
      /* pre-hide internals so they don't flash while the board fades in */
      if (steps.length) gsap.set(steps, { y: 16, autoAlpha: 0 });
      if (readout.length) gsap.set(readout, { y: 10, autoAlpha: 0 });
      if (segments.length) {
        tl.to(segments, { scaleX: 1, duration: 0.7, stagger: 0.18, ease: 'beta.soft' }, 0.95);
      }
      if (steps.length) {
        tl.fromTo(steps, { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08, ease: 'beta.out' }, 1.0);
      }
      if (readout.length) {
        tl.fromTo(readout, { y: 10, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.06 }, 1.5);
      }

      /* Gentle parallax drift on scroll — transform only */
      gsap.to(board, {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8
        }
      });
    }
  }
  /* Split after fonts load (capped) so line breaks measure correctly */
  var introStarted = false;
  function startIntro() {
    if (introStarted) return;
    introStarted = true;
    introTimeline();
  }
  if (document.fonts && document.fonts.status !== 'loaded') {
    document.fonts.ready.then(startIntro);
    setTimeout(startIntro, 700); /* don't hold the hero hostage */
  } else {
    startIntro();
  }

  /* ---------- Generic scroll reveals ---------- */
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    if (el.dataset[boundFlag]) return;
    var name = el.getAttribute('data-reveal') || 'up';
    revealOne(el, variantFor(name));
  });
  document.querySelectorAll('[data-reveal-stagger]').forEach(function (el) {
    if (el.dataset[boundFlag]) return;
    revealGroup(el);
  });

  /* ---------- Magnetic CTAs (fine pointers only) ---------- */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('[data-magnetic]').forEach(function (btn) {
      var strength = 0.32;
      var xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      var yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      btn.addEventListener('mouseenter', function () { wcOn(btn); });
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      btn.addEventListener('mouseleave', function () {
        gsap.to(btn, {
          x: 0, y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.4)',
          onComplete: function () { wcOff(btn); }
        });
      });
    });

    /* ---------- Cursor dot + ring ---------- */
    var dot = document.querySelector('.cursor-dot');
    var ring = document.querySelector('.cursor-ring');
    if (dot && ring) {
      var dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2' });
      var dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2' });
      var ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
      var ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
      window.addEventListener('mousemove', function (e) {
        dotX(e.clientX); dotY(e.clientY);
        ringX(e.clientX); ringY(e.clientY);
      }, { passive: true });
      document.addEventListener('mouseover', function (e) {
        var interactive = e.target.closest && e.target.closest('a, button, summary, [data-magnetic]');
        ring.classList.toggle('is-active', !!interactive);
        gsap.to(ring, { scale: interactive ? 1.55 : 1, duration: 0.35, ease: 'beta.soft' });
      }, { passive: true });
    }
  }

  /* ---------- Pipeline flow width for the spark keyframes ---------- */
  var flow = document.querySelector('.pipeline-flow');
  if (flow) {
    var setFlowW = function () {
      var line = flow.querySelector('.pipeline-line');
      if (line) flow.style.setProperty('--flow-w', line.offsetWidth + 'px');
    };
    setFlowW();
    window.addEventListener('resize', setFlowW, { passive: true });
  }
})();
