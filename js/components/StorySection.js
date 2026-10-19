/* =====================================================================
   01 · StorySection — Câu chuyện của Edubiz Media
   ===================================================================== */
EB.components.StorySection = {
  name: 'StorySection',
  data: () => ({ c: window.EDUBIZ_CONTENT.story }),
  template: `
    <section class="sec" id="story">
      <sec-head num="01" :label="c.kicker" en="OUR STORY" />
      <div class="gate-grid">
        <div class="gate-left">
          <grad-title :parts="c.title" />
          <p class="lead-quote" v-reveal="'up'" data-delay="120">
            <span class="q">“</span>{{ c.quote }}
          </p>
        </div>
        <div class="gate-copy" v-reveal="'left'" v-tilt="4">
          <p class="lead">{{ c.lead }}</p>
          <p class="body">{{ c.body }}</p>
          <p class="turn"><ico n="spark" s="18"/> {{ c.turn }}</p>
          <p class="body">{{ c.body2 }}</p>
          <a class="arrowlink" href="#solutions" data-cursor>
            <span>Xem giải pháp toàn diện</span><span class="ar"><ico n="arrow" s="13" w="1.8"/></span>
          </a>
        </div>
      </div>

      <div class="flow" v-reveal="'up'">
        <div class="flow-track">
          <template v-for="(f, i) in c.flow" :key="i">
            <span class="flow-node" :style="{ '--i': i }"><em>{{ String(i + 1).padStart(2, '0') }}</em>{{ f }}</span>
            <span v-if="i < c.flow.length - 1" class="flow-link" :style="{ '--i': i }"><i></i></span>
          </template>
        </div>
      </div>

      <div class="gate-stats">
        <div class="stat-card" v-for="(s, i) in c.stats" :key="i" v-reveal="'up'" :data-delay="i * 90" v-tilt="8" data-cursor>
          <span class="stat-ico"><ico :n="s.icon" s="30" w="1.5"/></span>
          <div><b><span v-count="s.v"></span>{{ s.s }}</b><span>{{ s.l }}</span></div>
        </div>
      </div>
    </section>`
};
