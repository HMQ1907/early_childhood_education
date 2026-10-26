/* =====================================================================
   APP — khởi tạo Vue 3, đăng ký component + directive, ráp layout
   ===================================================================== */
(function () {
  const { createApp } = Vue;

  const App = {
    data: () => ({
      ready: false,
      active: '',
      modal: null,
      choice: -1,
      ids: ['hero', 'story', 'solutions', 'team', 'pricing', 'feedback', 'founder', 'partners', 'vision', 'contact']
    }),
    template: `
      <app-preloader @done="ready = true" />
      <gl-background />
      <div id="vignette"></div>
      <div id="grain" ref="grain"></div>
      <app-cursor />
      <app-nav :active="active" />
      <app-rail :ids="ids" :active="active" />

      <main class="page" id="top">
        <hero-section :ready="ready" @open="open" />
        <story-section @open="open" />
        <solutions-section @open="open" />
        <team-section @open="open" />
        <pricing-section @open="open" @choose="choose" />
        <feedback-section @open="open" />
        <founder-section @open="open" />
        <partners-section />
        <vision-section />
        <contact-section :choice="choice" />
        <app-footer />
      </main>

      <div class="fabs">
        <a class="fab fab--fb" :href="b.facebook" target="_blank" rel="noopener" aria-label="Nhắn tin Facebook Edubiz Media" data-cursor>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5H16l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z"/></svg>
          <span class="fab-tip">Facebook</span>
        </a>
        <a class="fab fab--zalo" :href="b.zalo" target="_blank" rel="noopener" aria-label="Chat Zalo với Edubiz Media" data-cursor>
          <svg viewBox="0 0 24 24" aria-hidden="true"><text x="12" y="15.2" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="8.6" font-weight="700" fill="currentColor">Zalo</text></svg>
          <span class="fab-tip">Zalo: {{ b.hotline }}</span>
        </a>
      </div>
      <image-modal :item="modal" @close="modal = null" />`,
    computed: {
      b: () => window.EDUBIZ_CONTENT.brand
    },
    methods: {
      open(item) { this.modal = item && item.src ? item : null; },
      choose(i) {
        this.choice = -1;
        this.$nextTick(() => { this.choice = i; });
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }
    },
    watch: { modal(v) { document.body.classList.toggle('is-locked', !!v); } },
    mounted() {
      /* film grain */
      const c = document.createElement('canvas'); c.width = c.height = 140;
      const x = c.getContext('2d'); const img = x.createImageData(140, 140);
      for (let i = 0; i < img.data.length; i += 4) { const v = (Math.random() * 255) | 0; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; }
      x.putImageData(img, 0, 0);
      this.$refs.grain.style.backgroundImage = 'url(' + c.toDataURL() + ')';

      /* active section tracking */
      const obs = new IntersectionObserver((en) => {
        en.forEach((e) => { if (e.isIntersecting) this.active = e.target.id; });
      }, { rootMargin: '-45% 0px -50% 0px' });
      this.$nextTick(() => this.ids.forEach((id) => { const el = document.getElementById(id); el && obs.observe(el); }));
    }
  };

  const app = createApp(App);
  const toKebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  Object.entries(EB.components).forEach(([name, comp]) => app.component(toKebab(name), comp));
  app.directive('reveal', EB.revealDirective);
  app.directive('tilt', EB.tiltDirective);
  app.directive('magnetic', EB.magneticDirective);
  app.directive('count', EB.countDirective);
  app.mount('#app');
})();
