/* =====================================================================
   02 · SolutionsSection — 6 giải pháp (bento grid + panel chi tiết)
   ===================================================================== */
EB.components.SolutionsSection = {
  name: 'SolutionsSection',
  data: () => ({ c: window.EDUBIZ_CONTENT.solutions, sel: 0 }),
  computed: { cur() { return this.c.items[this.sel]; } },
  template: `
    <section class="sec" id="solutions">
      <sec-head num="02" :label="c.kicker" en="OUR SERVICES" />
      <div class="cur-head">
        <grad-title :parts="c.title" />
        <p class="body-lg" v-reveal="'up'" data-delay="120">{{ c.intro }}</p>
      </div>

      <div class="cur">
        <article v-for="(s, i) in c.items" :key="s.n" class="les" :class="{ sel: sel === i }"
                 v-reveal="'up'" :data-delay="(i % 3) * 90" v-tilt="5" data-cursor
                 @click="sel = i" @mouseenter="sel = i">
          <span class="les-spot"></span>
          <div class="les-top">
            <span class="k">{{ s.n }}</span>
            <span class="les-ico"><ico :n="s.icon" s="26" w="1.5"/></span>
          </div>
          <h3>{{ s.t }}<em>{{ s.en }}</em></h3>
          <p>{{ s.d }}</p>
          <ul v-if="s.list.length" class="les-list">
            <li v-for="(li, j) in s.list" :key="j" :style="{ '--j': j }"><ico n="check" s="14" w="2.4"/>{{ li }}</li>
          </ul>
          <span class="t"><span>{{ s.list.length ? s.list.length + ' hạng mục' : 'Mạng lưới hợp tác' }}</span><span class="t-ar">→</span></span>
          <i class="bar"></i>
        </article>
      </div>
    </section>`
};
