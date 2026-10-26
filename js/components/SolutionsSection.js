/* =====================================================================
   02 · SolutionsSection — slide giải pháp + 4 thẻ ngắn
   ===================================================================== */
EB.components.SolutionsSection = {
  name: 'SolutionsSection',
  emits: ['open'],
  data: () => ({ c: window.EDUBIZ_CONTENT.solutions, sel: 0 }),
  template: `
    <section class="sec" id="solutions">
      <sec-head num="02" :label="c.kicker" en="OUR SERVICES" />
      <grad-title :parts="c.title" />
      <div class="sol-grid">
        <div class="sol-slide" v-reveal="'left'">
          <slide-frame :src="c.slide.src" :alt="c.slide.alt" tag="GIẢI PHÁP" @open="$emit('open', $event)" />
        </div>
        <div class="sol-list">
          <a v-for="(s, i) in c.items" :key="s.n" href="#pricing" class="sol-item" :class="{ sel: sel === i }"
             v-reveal="'right'" :data-delay="i * 100" @mouseenter="sel = i" data-cursor>
            <span class="sol-ico"><ico :n="s.icon" s="24" w="1.6"/></span>
            <span class="sol-tx"><em>{{ s.n }}</em><b>{{ s.t }}</b><small>{{ s.d }}</small></span>
            <span class="sol-ar"><ico n="arrow" s="14" w="2"/></span>
            <i class="bar"></i>
          </a>
        </div>
      </div>
    </section>`
};
