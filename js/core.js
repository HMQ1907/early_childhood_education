/* =====================================================================
   CORE — icon set, directive animation dùng chung cho mọi component
   ===================================================================== */
(function () {
  'use strict';
  const { h } = Vue;

  window.EB = window.EB || {};
  const EB = window.EB;
  EB.components = {};
  EB.REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
  EB.COARSE = matchMedia('(hover: none)').matches;
  EB.fmt = (n) => Math.round(n).toLocaleString('vi-VN').replace(/,/g, '.');

  /* ------------------------------------------------------------ icons */
  const P = {
    camera:   'M4 8h3l2-3h6l2 3h3v11H4z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    page:     'M6 3h9l4 4v14H6z M15 3v4h4 M9 12h7 M9 16h5',
    calendar: 'M4 6h16v15H4z M4 10h16 M8 3v5 M16 3v5 M8 14h3 M13 14h3 M8 17h3',
    film:     'M4 5h16v14H4z M8 5v14 M16 5v14 M4 9h4 M4 15h4 M16 9h4 M16 15h4 M11 10l3 2-3 2z',
    spark:    'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z',
    network:  'M12 5a2 2 0 1 0 0 .1 M5 18a2 2 0 1 0 0 .1 M19 18a2 2 0 1 0 0 .1 M12 7v5 M12 12l-6 5 M12 12l6 5',
    layers:   'M12 3l9 5-9 5-9-5z M3 13l9 5 9-5 M3 17l9 5 9-5',
    route:    'M6 19a2 2 0 1 0 0 .1 M18 5a2 2 0 1 0 0 .1 M6 17V9a3 3 0 0 1 3-3h3 M18 7v8a3 3 0 0 1-3 3h-3',
    user:     'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21c1-4 4.5-6 8-6s7 2 8 6',
    chart:    'M4 20h16 M6 16v-4 M11 16V8 M16 16v-6 M5 9l5-4 4 3 5-4',
    ear:      'M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0 M10 9a2 2 0 0 1 4 0',
    search:   'M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M20 20l-4.5-4.5',
    plan:     'M5 4h14v17H5z M9 8h6 M9 12h6 M9 16h3',
    hand:     'M3 12l4-4 5 3 5-3 4 4-9 7z M7 8l3-3h4l3 3',
    rocket:   'M12 3c4 2 6 6 5 11l-2 2H9l-2-2C6 9 8 5 12 3z M12 11a1.5 1.5 0 1 0 0-.1 M9 16l-2 4 3-1 M15 16l2 4-3-1',
    kid:      'M12 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M6 21v-4a6 6 0 0 1 12 0v4 M10 7h.1 M14 7h.1',
    school:   'M3 10l9-6 9 6 M5 9v11h14V9 M10 20v-5h4v5 M12 9a1 1 0 1 0 0 .1',
    globe:    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18',
    building: 'M4 21V7l8-4 8 4v14 M9 21v-4h6v4 M8 10h.1 M12 10h.1 M16 10h.1 M8 13h.1 M12 13h.1 M16 13h.1',
    check:    'M5 12.5l4.5 4.5L19 7.5',
    phone:    'M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z',
    mail:     'M3 6h18v12H3z M3 7l9 6 9-6',
    web:      'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18',
    arrow:    'M6 18L18 6 M9 6h9v9',
    play:     'M8 5.5v13l10-6.5z',
    target:   'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M12 12h.1',
    eye:      'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    heart:    'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z',
    image:    'M4 5h16v14H4z M4 16l5-5 4 4 3-3 4 4 M15 9a1 1 0 1 0 0 .1',
    zoom:     'M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M20 20l-4.5-4.5 M11 8v6 M8 11h6'
  };
  EB.components.Ico = {
    name: 'Ico',
    props: { n: String, s: { type: [Number, String], default: 22 }, w: { type: [Number, String], default: 1.6 } },
    render() {
      return h('svg', {
        viewBox: '0 0 24 24', width: this.s, height: this.s, fill: 'none', stroke: 'currentColor',
        'stroke-width': this.w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', class: 'ico'
      }, [h('path', { d: P[this.n] || P.spark })]);
    }
  };

  /* ------------------------------------------------------------ v-reveal
     v-reveal="'up' | 'fade' | 'left' | 'right' | 'zoom'"  + data-delay(ms) */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        const d = +(el.dataset.delay || 0);
        el.style.transitionDelay = d + 'ms';
        el.classList.add('rv-in');
        io.unobserve(el);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  EB.revealDirective = {
    mounted(el, b) {
      el.setAttribute('data-rv', b.value || 'up');
      if (EB.REDUCE) { el.classList.add('rv-in'); return; }
      io.observe(el);
    },
    unmounted(el) { io.unobserve(el); }
  };

  /* ------------------------------------------------------------ v-tilt (3D card tilt + spotlight) */
  EB.tiltDirective = {
    mounted(el, b) {
      if (EB.COARSE || EB.REDUCE) return;
      const max = b.value || 7;
      let raf = 0;
      el.classList.add('tilt');
      const move = (ev) => {
        const r = el.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.setProperty('--rx', ((0.5 - y) * max).toFixed(2) + 'deg');
          el.style.setProperty('--ry', ((x - 0.5) * max).toFixed(2) + 'deg');
          el.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
          el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        });
      };
      const leave = () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
    }
  };

  /* ------------------------------------------------------------ v-magnetic (nút hút theo chuột) */
  EB.magneticDirective = {
    mounted(el, b) {
      if (EB.COARSE || EB.REDUCE) return;
      const k = b.value || 0.28;
      el.addEventListener('pointermove', (ev) => {
        const r = el.getBoundingClientRect();
        const x = ev.clientX - (r.left + r.width / 2), y = ev.clientY - (r.top + r.height / 2);
        el.style.transform = `translate3d(${x * k}px, ${y * k}px, 0)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    }
  };

  /* ------------------------------------------------------------ v-count (đếm số khi cuộn tới) */
  EB.countDirective = {
    mounted(el, b) {
      const to = +b.value || 0;
      const run = () => {
        if (EB.REDUCE) { el.textContent = EB.fmt(to); return; }
        const t0 = performance.now(), dur = 1600;
        const step = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 4);
          el.textContent = EB.fmt(to * e);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      el.textContent = '0';
      const o = new IntersectionObserver((en) => {
        if (en[0].isIntersecting) { run(); o.disconnect(); }
      }, { threshold: 0.5 });
      o.observe(el);
    }
  };

  /* ------------------------------------------------------------ helper: tiêu đề 3 phần, phần giữa gradient */
  EB.components.GradTitle = {
    name: 'GradTitle',
    props: { parts: Array, tag: { type: String, default: 'h2' } },
    template: `<component :is="tag" class="display h-sec" v-reveal="'up'">{{ parts[0] }}<span class="grad-tx">{{ parts[1] }}</span>{{ parts[2] }}</component>`
  };

  EB.components.SecHead = {
    name: 'SecHead',
    props: { num: String, label: String, en: String },
    template: `<div class="sec-head" v-reveal="'fade'"><span class="k"><b>{{ num }}</b> — {{ label }}</span><span class="rule"></span><span class="k jp">{{ en }}</span></div>`
  };
})();
