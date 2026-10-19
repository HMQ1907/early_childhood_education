/* =====================================================================
   04 · ProcessSection — 6 bước hợp tác (timeline chạy theo cuộn trang)
   ===================================================================== */
EB.components.ProcessSection = {
  name: 'ProcessSection',
  data: () => ({ c: window.EDUBIZ_CONTENT.process, prog: 0, act: -1 }),
  template: `
    <section class="sec" id="process">
      <sec-head num="04" :label="c.kicker" en="HOW WE WORK" />
      <div class="proc-head">
        <grad-title :parts="c.title" />
      </div>
      <div class="timeline" ref="tl">
        <div class="tl-line"><i :style="{ transform: 'scaleY(' + prog + ')' }"></i></div>
        <div v-for="(s, i) in c.steps" :key="i" class="tl-step" :class="[i % 2 ? 'r' : 'l', { on: act >= i }]">
          <span class="tl-dot"><ico :n="s.icon" s="20" w="1.7"/></span>
          <div class="tl-card" v-reveal="i % 2 ? 'right' : 'left'" v-tilt="5">
            <span class="tl-n">Bước {{ i + 1 }}</span>
            <h3>{{ s.t }}</h3>
            <p>{{ s.d }}</p>
            <span class="tl-big" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
        </div>
      </div>
      <p class="proc-note" v-reveal="'up'"><ico n="target" s="20"/> {{ c.note }}</p>
    </section>`,
  methods: {
    onScroll() {
      const el = this.$refs.tl; if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = innerHeight * 0.6;
      const p = (mid - r.top) / r.height;
      this.prog = Math.max(0, Math.min(1, p));
      const steps = el.querySelectorAll('.tl-step');
      let a = -1;
      steps.forEach((s, i) => { if (s.getBoundingClientRect().top + 30 < mid) a = i; });
      this.act = a;
    }
  },
  mounted() { addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll(); },
  beforeUnmount() { removeEventListener('scroll', this.onScroll); }
};
