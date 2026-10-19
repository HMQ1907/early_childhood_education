/* =====================================================================
   APP — khởi tạo Vue 3, đăng ký component + directive, ráp layout
   ===================================================================== */
(function () {
  const { createApp } = Vue;

  const MEDIA = {
    team: {
      src: 'assets/team.jpg', tag: 'EDUBIZ MEDIA · OUR TEAM',
      title: 'Giá 1 nhân sự – Nhận được 1 đội ngũ',
      desc: 'Nhà trường có một đối tác phụ trách xuyên suốt, được hỗ trợ bởi đội ngũ chuyên môn: định hướng nội dung, quay chụp, biên tập hình ảnh – video – bài viết và quản lý kênh truyền thông.'
    },
    poster: {
      src: 'assets/bang-gia.jpg', tag: 'BẢNG GIÁ DỊCH VỤ SOCIAL MEDIA',
      title: 'Bảng giá dịch vụ Social Media',
      desc: 'Gói xây dựng 25.000.000đ/page · Gói phát triển 8.500.000đ/tháng · Gói bứt phá 12.500.000đ/tháng · Film AI: đơn giá tính theo phút, trao đổi cụ thể theo yêu cầu.'
    }
  };

  const App = {
    data: () => ({
      ready: false,
      active: '',
      modal: null,
      choice: -1,
      ids: ['hero', 'story', 'solutions', 'team', 'process', 'pricing', 'partners', 'vision', 'contact']
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
        <story-section />
        <solutions-section />
        <team-section @open="open" />
        <process-section />
        <pricing-section @open="open" @choose="choose" />
        <partners-section />
        <vision-section />
        <contact-section :choice="choice" />
        <app-footer />
      </main>

      <a class="fab" :href="'tel:' + hot" aria-label="Gọi hotline" data-cursor><ico n="phone" s="22" w="1.8"/><span>{{ hotTxt }}</span></a>
      <image-modal :item="modal" @close="modal = null" />`,
    computed: {
      hot: () => window.EDUBIZ_CONTENT.brand.hotlineRaw,
      hotTxt: () => window.EDUBIZ_CONTENT.brand.hotline
    },
    methods: {
      open(k) { this.modal = MEDIA[k] || null; },
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
