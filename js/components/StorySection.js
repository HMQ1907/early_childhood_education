/* =====================================================================
   01 · StorySection — Thực trạng & Thách thức (trình chiếu slide)
   ===================================================================== */
EB.components.StorySection = {
  name: 'StorySection',
  emits: ['open'],
  data: () => ({ c: window.EDUBIZ_CONTENT.story }),
  template: `
    <section class="sec" id="story">
      <sec-head num="01" :label="c.kicker" en="THE CHALLENGE" />
      <grad-title :parts="c.title" class="story-title" />
      <div class="story-stage" v-reveal="'zoom'">
        <slide-viewer :slides="c.slides" @open="$emit('open', $event)" />
      </div>
      <div class="story-foot">
        <p class="lead-quote" v-reveal="'up'"><span class="q">“</span>{{ c.quote }}</p>
        <div class="gate-stats">
          <div class="stat-card" v-for="(s, i) in c.stats" :key="i" v-reveal="'up'" :data-delay="i * 90" v-tilt="8" data-cursor>
            <span class="stat-ico"><ico :n="s.icon" s="26" w="1.5"/></span>
            <div><b><span v-count="s.v"></span>{{ s.s }}</b><span>{{ s.l }}</span></div>
          </div>
        </div>
      </div>
    </section>`
};
