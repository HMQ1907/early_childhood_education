/* =====================================================================
   07 · PartnersSection (rút gọn) + 08 · VisionSection
   ===================================================================== */
EB.components.PartnersSection = {
  name: 'PartnersSection',
  data: () => ({ c: window.EDUBIZ_CONTENT.partners, tags: window.EDUBIZ_CONTENT.brand.hashtags }),
  template: `
    <section class="sec sec--tight" id="partners">
      <sec-head num="07" :label="c.kicker" en="WHO WE SERVE" />
      <grad-title :parts="c.title" />
      <div class="pchips">
        <span v-for="(p, i) in c.items" :key="i" class="pchip" v-reveal="'zoom'" :data-delay="i * 70" data-cursor>
          <span class="partner-ico"><ico :n="p.icon" s="22" w="1.6"/></span>{{ p.t }}
        </span>
      </div>
      <p class="region-line" v-reveal="'fade'"><span class="region-map" aria-hidden="true"><i></i><i></i><i></i></span>{{ c.region }}</p>
      <div class="marquee" aria-hidden="true">
        <div class="marquee-in">
          <span v-for="n in 2" :key="n" class="marquee-set">
            <span v-for="t in tags" :key="t + n">{{ t }} <i>✦</i></span>
          </span>
        </div>
      </div>
    </section>`
};

EB.components.VisionSection = {
  name: 'VisionSection',
  data: () => ({ c: window.EDUBIZ_CONTENT.vision }),
  template: `
    <section class="sec sec--tight" id="vision">
      <sec-head num="08" :label="c.kicker" en="MISSION & VISION" />
      <grad-title :parts="c.title" />
      <div class="mv">
        <div class="mv-card" v-reveal="'left'" v-tilt="5">
          <span class="mv-ico"><ico n="heart" s="28" w="1.5"/></span>
          <span class="eyebrow">SỨ MỆNH</span>
          <p>{{ c.mission }}</p>
        </div>
        <div class="mv-card mv-card--alt" v-reveal="'right'" v-tilt="5">
          <span class="mv-ico"><ico n="eye" s="28" w="1.5"/></span>
          <span class="eyebrow">TẦM NHÌN</span>
          <p>{{ c.vision }}</p>
        </div>
      </div>
      <div class="values">
        <span v-for="(v, i) in c.values" :key="i" class="value" v-reveal="'zoom'" :data-delay="i * 80" data-cursor>
          <em>{{ String(i + 1).padStart(2, '0') }}</em>{{ v }}
        </span>
      </div>
    </section>`
};
