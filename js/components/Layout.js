/* =====================================================================
   Layout — Preloader, Logo, Nav, Cursor, Progress rail, Modal, Footer
   ===================================================================== */
(function () {
  const C = window.EDUBIZ_CONTENT;

  /* ---------------- Logo (vector, theo nhận diện EduBiz Media) */
  EB.components.BrandLogo = {
    name: 'BrandLogo',
    props: { size: { type: String, default: 'md' } },
    template: `
      <span class="logo" :class="'logo--' + size">
        <span class="logo-word"><b>Edu</b><b class="grad-tx">Biz</b>
          <svg class="logo-play" viewBox="0 0 40 40" aria-hidden="true">
            <defs><linearGradient id="lgp" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#24e5d5"/><stop offset=".55" stop-color="#8b5cf6"/><stop offset="1" stop-color="#ec4899"/>
            </linearGradient></defs>
            <path d="M8 5 L35 20 L8 35 Z" fill="url(#lgp)" stroke="url(#lgp)" stroke-width="4" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="logo-media">M E D I A</span>
      </span>`
  };

  /* ---------------- Preloader */
  EB.components.AppPreloader = {
    name: 'AppPreloader',
    emits: ['done'],
    data: () => ({ pct: 0, done: false }),
    template: `
      <div id="pre" :class="{ done }">
        <div class="pre-in">
          <div class="pre-mark"><brand-logo size="lg" /></div>
          <div class="pre-jp jp">EDUCATION MEDIA AGENCY</div>
          <div class="pre-bar"><i :style="{ right: (100 - pct) + '%' }"></i></div>
          <div class="pre-meta"><span>Đang khởi tạo không gian truyền thông số</span><b>{{ pct }}%</b></div>
        </div>
      </div>`,
    mounted() {
      document.body.classList.add('is-locked');
      const tick = setInterval(() => {
        this.pct = Math.min(100, this.pct + (this.pct < 70 ? 9 : 6));
        if (this.pct >= 100) {
          clearInterval(tick);
          setTimeout(() => {
            this.done = true;
            document.body.classList.remove('is-locked');
            this.$emit('done');
          }, 260);
        }
      }, 70);
    }
  };

  /* ---------------- Nav */
  EB.components.AppNav = {
    name: 'AppNav',
    props: { active: String },
    data: () => ({ links: C.nav, stuck: false, hide: false, open: false, lastY: 0 }),
    template: `
      <header class="nav" :class="{ stuck, hide: hide && !open, 'menu-open': open }">
        <a class="brand" href="#top" @click="open=false" data-cursor>
          <brand-logo size="sm" />
          <span class="brand-sep"></span>
          <span class="brand-tx"><i>EDUCATION MEDIA</i><small>Truyền thông Giáo dục số</small></span>
        </a>
        <nav class="nav-links">
          <a v-for="l in links" :key="l.id" class="nav-link" :class="{ on: active === l.id }" :href="'#' + l.id" @click="open=false" data-cursor>
            <span>{{ l.label }}</span><span class="alt">{{ l.alt }}</span>
          </a>
          <a class="nav-cta nav-cta--m" href="#contact" @click="open=false">Đăng ký tư vấn</a>
        </nav>
        <a class="nav-cta" href="#contact" v-magnetic data-cursor>Đăng ký tư vấn</a>
        <button class="nav-burger" :class="{ active: open }" aria-label="Menu" @click="toggle"><i></i><i></i></button>
      </header>`,
    methods: {
      toggle() { this.open = !this.open; document.documentElement.classList.toggle('nav-open', this.open); },
      onScroll() {
        const y = scrollY;
        this.stuck = y > 30;
        this.hide = y > 400 && y > this.lastY;
        this.lastY = y;
      }
    },
    watch: { open(v) { if (!v) document.documentElement.classList.remove('nav-open'); } },
    mounted() { addEventListener('scroll', this.onScroll, { passive: true }); },
    beforeUnmount() { removeEventListener('scroll', this.onScroll); }
  };

  /* ---------------- Custom cursor */
  EB.components.AppCursor = {
    name: 'AppCursor',
    template: `<div><div class="cur-dot" ref="ring" :class="{ act }"></div><div class="cur-pt" ref="pt"></div></div>`,
    data: () => ({ act: false }),
    mounted() {
      if (EB.COARSE) return;
      let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
      const ring = this.$refs.ring, pt = this.$refs.pt;
      addEventListener('pointermove', (e) => {
        x = e.clientX; y = e.clientY;
        pt.style.transform = `translate3d(${x}px,${y}px,0)`;
        const t = e.target.closest && e.target.closest('a,button,[data-cursor],input,select,textarea');
        this.act = !!t;
      }, { passive: true });
      const loop = () => {
        rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
        ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        requestAnimationFrame(loop);
      };
      loop();
    }
  };

  /* ---------------- Progress rail + top progress bar */
  EB.components.AppRail = {
    name: 'AppRail',
    props: { ids: Array, active: String },
    data: () => ({ p: 0 }),
    template: `
      <div>
        <div class="topbar"><i :style="{ transform: 'scaleX(' + p + ')' }"></i></div>
        <div class="rail">
          <a v-for="id in ids" :key="id" :href="'#' + id" :class="{ on: active === id }" :aria-label="id"><i></i></a>
        </div>
      </div>`,
    methods: {
      onScroll() {
        const max = document.documentElement.scrollHeight - innerHeight;
        this.p = max > 0 ? scrollY / max : 0;
      }
    },
    mounted() { addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll(); }
  };

  /* ---------------- Image modal */
  EB.components.ImageModal = {
    name: 'ImageModal',
    props: { item: Object },
    emits: ['close'],
    template: `
      <transition name="modal">
        <div class="modal" v-if="item" @click.self="$emit('close')">
          <div class="modal-box">
            <button class="modal-close" @click="$emit('close')" aria-label="Đóng">✕</button>
            <div class="modal-img-wrap"><img :src="item.src" :alt="item.title"></div>
            <div class="modal-info">
              <span class="modal-tag">{{ item.tag }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
              <div><a class="btn-primary" href="#contact" @click="$emit('close')"><span>Đăng ký tư vấn</span><ico n="arrow" s="14" w="2"/></a></div>
            </div>
          </div>
        </div>
      </transition>`,
    mounted() {
      this._k = (e) => { if (e.key === 'Escape') this.$emit('close'); };
      addEventListener('keydown', this._k);
    },
    beforeUnmount() { removeEventListener('keydown', this._k); }
  };

  /* ---------------- Footer */
  EB.components.AppFooter = {
    name: 'AppFooter',
    data: () => ({ b: C.brand, nav: C.nav, sol: C.solutions.items, year: new Date().getFullYear() }),
    template: `
      <footer class="foot">
        <div class="foot-big" aria-hidden="true"><span>EDUBIZ</span><span class="o">MEDIA</span></div>
        <div class="foot-grid">
          <div class="foot-brand">
            <brand-logo size="md" />
            <p><strong>{{ b.name }}</strong> — {{ b.slogan }}</p>
          </div>
          <div><h4>Giải pháp</h4><ul>
            <li v-for="s in sol.slice(0,5)" :key="s.n"><a href="#solutions">{{ s.t }}</a></li>
          </ul></div>
          <div><h4>Khám phá</h4><ul>
            <li v-for="l in nav" :key="l.id"><a :href="'#' + l.id">{{ l.label }}</a></li>
          </ul></div>
          <div><h4>Liên hệ</h4><ul class="foot-contact">
            <li><a :href="'tel:' + b.hotlineRaw"><ico n="phone" s="16"/> Hotline: {{ b.hotline }}</a></li>
            <li v-for="w in b.websites" :key="w"><a :href="'https://' + w" target="_blank" rel="noopener"><ico n="web" s="16"/> {{ w }}</a></li>
            <li><a :href="'mailto:' + b.email"><ico n="mail" s="16"/> {{ b.email }}</a></li>
          </ul></div>
        </div>
        <div class="foot-base">
          <span>© {{ year }} {{ b.name }}</span>
          <span class="jp grad-tx">{{ b.tagline }}</span>
          <span>{{ b.hashtags.slice(0,3).join(' ') }}</span>
        </div>
      </footer>`
  };
})();
