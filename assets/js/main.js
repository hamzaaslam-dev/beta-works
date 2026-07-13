/* =========================================================
   Site-wide interactions: nav, reveal, counters, cursor, form
   ========================================================= */
(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        menu.classList.remove('open');
      })
    );
  }

  /* ---------- Nav blur on scroll ---------- */
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero-futuristic, .page-hero');
  let navTicking = false;

  const updateNav = () => {
    if (!nav) return;
    const threshold = hero ? hero.offsetHeight * 0.12 : 80;
    nav.classList.toggle('scrolled', window.scrollY > threshold);
    navTicking = false;
  };

  const onScroll = () => {
    if (navTicking) return;
    navTicking = true;
    requestAnimationFrame(updateNav);
  };

  updateNav();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Hero load entrance ---------- */
  const heroRoots = document.querySelectorAll('.hero-futuristic, .page-hero');
  if (heroRoots.length && !prefersReducedMotion) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroRoots.forEach((root) => root.classList.add('hero-entered'));
      });
    });
  } else {
    heroRoots.forEach((root) => root.classList.add('hero-entered'));
  }

  /* ---------- Intersection reveal ---------- */
  const toReveal = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if ('IntersectionObserver' in window && toReveal.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    toReveal.forEach((el) => io.observe(el));
  } else {
    toReveal.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const animateCounter = (el) => {
      if (el.dataset.counted === 'true') return;
      el.dataset.counted = 'true';

      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1200;
      const start = performance.now();
      const from = 0;

      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = from + (target - from) * ease;
        el.textContent =
          (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }

      if (prefersReducedMotion) {
        el.textContent =
          (target % 1 === 0 ? Math.round(target) : target.toFixed(1)) + suffix;
        return;
      }

      requestAnimationFrame(step);
    };

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) animateCounter(entry.target);
          cio.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- Portfolio metric badge reveal ---------- */
  const projectCards = document.querySelectorAll('.project, .project-featured');
  if (projectCards.length && 'IntersectionObserver' in window) {
    const pio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('metrics-in');
            pio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    projectCards.forEach((card) => pio.observe(card));
  } else {
    projectCards.forEach((card) => card.classList.add('metrics-in'));
  }

  /* ---------- Contact form (client-side) ---------- */
  const form = document.querySelector('form.contact-form');
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      const valid =
        name.length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        message.length > 5;

      if (!valid) {
        status.className = 'form-status err';
        status.textContent = 'Please fill in your name, a valid email, and a short message.';
        submitBtn?.classList.remove('is-loading', 'is-success');
        return;
      }

      const subjectField = form.querySelector('[name="_subject"]');
      if (subjectField) {
        subjectField.value = `New project brief from ${name}`;
      }

      submitBtn?.classList.remove('is-success');
      submitBtn?.classList.add('is-loading');
      submitBtn?.setAttribute('aria-busy', 'true');
      status.className = 'form-status';
      status.textContent = '';

      const finishSubmit = () => {
        submitBtn?.classList.remove('is-loading');
        submitBtn?.classList.add('is-success');
        submitBtn?.removeAttribute('aria-busy');
        status.className = 'form-status ok';
        status.textContent = 'Brief sent — we\'ll be in touch shortly.';

        window.setTimeout(() => {
          form.submit();
        }, prefersReducedMotion ? 0 : 450);
      };

      window.setTimeout(finishSubmit, prefersReducedMotion ? 0 : 700);
    });
  }

  /* ---------- Footer year ---------- */
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

})();
