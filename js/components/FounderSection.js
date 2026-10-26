/* =====================================================================
   06 · FounderSection — Người sáng lập
   ===================================================================== */
EB.components.FounderSection = {
  name: 'FounderSection',
  emits: ['open'],
  data: () => ({ c: window.EDUBIZ_CONTENT.founder, b: window.EDUBIZ_CONTENT.brand }),
  template: `
    <section class="sec" id="founder">
      <sec-head num="06" :label="c.kicker" en="FOUNDER" />
      <div class="founder">
        <button class="founder-photo" type="button" v-reveal="'zoom'" v-tilt="7" data-cursor
                @click="$emit('open', { src: c.slide, title: c.name + ' — ' + c.role, tag: 'NGƯỜI SÁNG LẬP' })" :aria-label="'Xem ảnh ' + c.name">
          <span class="founder-ring"></span>
          <img :src="c.photo" :alt="c.name + ', ' + c.role" loading="lazy" decoding="async">
          <span class="founder-card"><b>EDUBIZ MEDIA</b><small>{{ b.tagline }}</small></span>
        </button>
        <div class="founder-tx">
          <h2 class="founder-name" v-reveal="'up'"><span>{{ c.name.split(' ')[0] }}</span> <span class="grad-tx grad-anim">{{ c.name.split(' ').slice(1).join(' ') }}</span></h2>
          <p class="founder-role" v-reveal="'up'" data-delay="100">{{ c.role }}</p>
          <blockquote class="founder-q" v-reveal="'up'" data-delay="200">{{ c.quote }}</blockquote>
        </div>
      </div>
    </section>`
};
