/* =========================================================
   Site-wide interactions: nav, reveal, counters, cursor, form
   ========================================================= */
(function () {
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

  /* ---------- Nav shadow on scroll ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    toReveal.forEach((el) => io.observe(el));
  } else {
    toReveal.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-count'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1400;
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
          requestAnimationFrame(step);
          cio.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  /* ---------- Contact form (client-side) ---------- */
  const form = document.querySelector('form.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const company = form.querySelector('[name="company"]')?.value.trim() || 'Not provided';
      const budget = form.querySelector('[name="budget"]')?.value || 'Not provided';
      const service = form.querySelector('[name="service"]')?.value || 'Not provided';
      const message = form.querySelector('[name="message"]').value.trim();
      const valid =
        name.length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        message.length > 5;
      if (!valid) {
        status.className = 'form-status err';
        status.textContent = 'Please fill in your name, a valid email, and a short message.';
        return;
      }

      const recipient = 'info@beta-works.com';
      const subject = `New project brief from ${name}`;
      const body =
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company}\n` +
        `Service: ${service}\n` +
        `Budget: ${budget}\n\n` +
        `Project brief:\n${message}\n`;

      window.location.href =
        `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      status.className = 'form-status ok';
      status.textContent = 'Your email app opened with the brief ready to send to info@beta-works.com.';
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

})();
