/* =====================================================================
   06 · PartnersSection + 07 · VisionSection
   ===================================================================== */
EB.components.PartnersSection = {
  name: 'PartnersSection',
  data: () => ({ c: window.EDUBIZ_CONTENT.partners, tags: window.EDUBIZ_CONTENT.brand.hashtags }),
  template: `
    <section class="sec" id="partners">
      <sec-head num="06" :label="c.kicker" en="WHO WE SERVE" />
      <div class="cur-head">
        <grad-title :parts="c.title" />
        <p class="body-lg" v-reveal="'up'">{{ c.long }}</p>
      </div>
      <p class="eyebrow partner-intro" v-reveal="'fade'">{{ c.intro }}</p>
      <div class="partners">
        <div v-for="(p, i) in c.items" :key="i" class="partner" v-reveal="'up'" :data-delay="(i % 3) * 90" v-tilt="8" data-cursor>
          <span class="partner-ico"><ico :n="p.icon" s="28" w="1.5"/></span>
          <span class="partner-n">{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ p.t }}</p>
        </div>
      </div>
      <div class="region" v-reveal="'up'">
        <span class="region-map" aria-hidden="true"><i></i><i></i><i></i></span>
        <div><b>Nguyên tắc phân vùng hợp tác</b><p>{{ c.region }}</p></div>
      </div>

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
    <section class="sec" id="vision">
      <sec-head num="07" :label="c.kicker" en="MISSION & VISION" />
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
      <h3 class="values-h" v-reveal="'fade'">Giá trị cốt lõi</h3>
      <div class="values">
        <span v-for="(v, i) in c.values" :key="i" class="value" v-reveal="'zoom'" :data-delay="i * 80" data-cursor>
          <em>{{ String(i + 1).padStart(2, '0') }}</em>{{ v }}
        </span>
      </div>
    </section>`
};
