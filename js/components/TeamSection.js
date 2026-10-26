/* =====================================================================
   03 · TeamSection — Chi phí một nhân sự, chất lượng một đội ngũ
   Slide + sơ đồ quỹ đạo vai trò + quy trình 4 bước + dải ảnh đội ngũ
   ===================================================================== */
EB.components.TeamSection = {
  name: 'TeamSection',
  emits: ['open'],
  data: () => ({ c: window.EDUBIZ_CONTENT.team, act: -1 }),
  template: `
    <section class="sec" id="team">
      <sec-head num="03" :label="c.kicker" en="ONE PARTNER · FULL TEAM" />
      <grad-title :parts="c.title" class="team-title" />

      <div class="team-grid">
        <div v-reveal="'left'">
          <slide-frame :src="c.slide.src" :alt="c.slide.alt" tag="ĐỘI NGŨ & QUY TRÌNH" @open="$emit('open', $event)" />
        </div>
        <div class="orbit-wrap" v-reveal="'zoom'">
          <div class="orbit">
            <span class="orbit-ring r1"></span><span class="orbit-ring r2"></span><span class="orbit-ring r3"></span>
            <div class="orbit-spin">
              <span v-for="(r, i) in c.roles" :key="i" class="orbit-node" :style="{ '--a': (i * 360 / c.roles.length) + 'deg' }">
                <span class="orbit-node-in"><b>{{ String(i + 1).padStart(2, '0') }}</b>{{ r }}</span>
              </span>
            </div>
            <div class="orbit-core orbit-core--logo">
              <img src="assets/logo-dark.png" alt="EduBiz Media" width="1000" height="298">
              <span class="orbit-core-media">M E D I A</span>
            </div>
          </div>
        </div>
      </div>

      <div class="steps" ref="steps" id="process">
        <div class="steps-line"><i :style="{ transform: 'scaleX(' + ((act + 1) / c.steps.length) + ')' }"></i></div>
        <div v-for="(s, i) in c.steps" :key="i" class="step" :class="{ on: act >= i }" v-reveal="'up'" :data-delay="i * 120">
          <span class="step-dot"><ico :n="s.icon" s="22" w="1.7"/></span>
          <em>Bước {{ i + 1 }}</em>
          <b>{{ s.t }}</b>
        </div>
      </div>

      <photo-strip :photos="c.gallery" @open="$emit('open', $event)" />
    </section>`,
  methods: {
    onScroll() {
      const el = this.$refs.steps; if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (innerHeight * 0.85 - r.top) / (innerHeight * 0.5);
      this.act = Math.min(this.c.steps.length - 1, Math.floor(p * this.c.steps.length) - 1);
    }
  },
  mounted() { addEventListener('scroll', this.onScroll, { passive: true }); this.onScroll(); },
  beforeUnmount() { removeEventListener('scroll', this.onScroll); }
};
