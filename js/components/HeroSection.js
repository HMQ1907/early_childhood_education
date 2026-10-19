/* =====================================================================
   HeroSection — "Giá 1 nhân sự – Nhận được 1 đội ngũ"
   ===================================================================== */
EB.components.HeroSection = {
  name: 'HeroSection',
  props: { ready: Boolean },
  emits: ['open'],
  data: () => ({ c: window.EDUBIZ_CONTENT.hero, word: '', wi: 0, chip: 0 }),
  template: `
    <section class="hero" id="hero" :class="{ 'is-ready': ready }">
      <div class="hero-top">
        <div class="eyebrow hero-eyebrow"><span class="dot"></span> {{ c.eyebrow }}</div>
        <h1 class="display h-hero">
          <span v-for="(l, i) in c.lines" :key="i" class="mask-line" :style="{ '--d': (i * 110 + 150) + 'ms' }">
            <span :class="{ 'grad-tx grad-anim': i === c.gradLine }">{{ l }}</span>
          </span>
        </h1>
        <p class="hero-type body-lg">Chúng tôi lo trọn khâu <b class="type-word">{{ word }}</b><i class="caret"></i></p>
        <p class="hero-sub body-lg">{{ c.sub }}</p>
        <div class="hero-actions">
          <a class="btn-primary" href="#contact" v-magnetic data-cursor>
            <span>Đăng ký tư vấn</span><ico n="arrow" s="14" w="2"/>
          </a>
          <a class="btn-glass" href="#solutions" v-magnetic data-cursor><span>Khám phá dịch vụ</span></a>
        </div>
      </div>

      <div class="hero-spacer"></div>

      <div class="hero-foot">
        <div class="hero-cue"><span>Cuộn để khám phá</span><span class="track"><i></i></span></div>
        <div class="chapters">
          <a v-for="(ch, i) in c.chips" :key="i" class="chip" :class="{ on: chip === i }"
             href="#solutions" @mouseenter="chip = i" data-cursor :style="{ '--d': (900 + i * 90) + 'ms' }">
            <span class="num">{{ ch.n }}</span>
            <span class="tx"><b>{{ ch.t }}</b><p>{{ ch.d }}</p></span>
          </a>
        </div>
      </div>

      <button class="peek" type="button" v-tilt="10" data-cursor @click="$emit('open', 'team')" aria-label="Xem ảnh đội ngũ Edubiz Media">
        <span class="peek-fr"><img src="assets/team.jpg" alt="Đội ngũ Edubiz Media"></span>
        <span class="peek-play"><span class="peek-play-btn"><ico n="zoom" s="20" w="2"/></span></span>
        <span class="peek-cap"><b class="jp">OUR TEAM</b><i>Đội ngũ Edubiz Media</i></span>
        <span class="peek-badge"><b>1</b> đầu mối<br>= <b>1</b> đội ngũ</span>
      </button>

      <div class="hero-side"><span class="v jp">EDUBIZ · MEDIA</span></div>
    </section>`,
  mounted() {
    if (EB.REDUCE) { this.word = this.c.rotating[0]; return; }
    let ci = 0, del = false;
    const step = () => {
      const w = this.c.rotating[this.wi];
      if (!del) {
        ci++; this.word = w.slice(0, ci);
        if (ci >= w.length) { del = true; return setTimeout(step, 1700); }
      } else {
        ci--; this.word = w.slice(0, ci);
        if (ci <= 0) { del = false; this.wi = (this.wi + 1) % this.c.rotating.length; }
      }
      setTimeout(step, del ? 32 : 62);
    };
    setTimeout(step, 1400);
    this._chipT = setInterval(() => { this.chip = (this.chip + 1) % this.c.chips.length; }, 3200);
  },
  beforeUnmount() { clearInterval(this._chipT); }
};
