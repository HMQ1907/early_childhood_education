/* =====================================================================
   PricingSection — Bảng giá dịch vụ Social Media + Film AI
   ===================================================================== */
EB.components.PricingSection = {
  name: 'PricingSection',
  emits: ['open', 'choose'],
  data: () => ({ c: window.EDUBIZ_CONTENT.pricing }),
  template: `
    <section class="sec" id="pricing">
      <sec-head num="05" :label="c.kicker" en="PRICING" />
      <div class="price-head">
        <grad-title :parts="c.title" />
        <button class="btn-glass" type="button" v-reveal="'fade'" @click="$emit('open', 'poster')" data-cursor>
          <ico n="image" s="16"/><span>Xem bảng giá gốc</span>
        </button>
      </div>

      <div class="plans">
        <article v-for="(p, i) in c.plans" :key="p.key" class="plan" :class="'plan--' + p.tone"
                 v-reveal="'up'" :data-delay="i * 120" v-tilt="6" data-cursor>
          <span class="plan-glow"></span>
          <header class="plan-top">
            <span class="plan-ico"><ico :n="p.icon" s="26" w="1.7"/></span>
            <div><h3>{{ p.name }}</h3><small>{{ p.sub }}</small></div>
          </header>
          <ul>
            <li v-for="(li, j) in p.list" :key="j" :style="{ '--j': j }">
              <span class="ck"><ico n="check" s="13" w="2.8"/></span>{{ li }}
            </li>
          </ul>
          <div class="plan-price">
            <b v-count="p.price"></b><span>đ {{ p.unit }}</span>
          </div>
          <button class="plan-cta" type="button" @click="$emit('choose', i)" data-cursor>
            <span>Chọn {{ p.name.toLowerCase() }}</span><ico n="arrow" s="13" w="2"/>
          </button>
        </article>
      </div>

      <div class="film" v-reveal="'up'" v-tilt="3">
        <div class="film-img"><img src="assets/robot.jpg" alt="Robot AI - Film AI Edubiz"></div>
        <div class="film-main">
          <span class="eyebrow">AI ANIMATION SERIES</span>
          <h3 class="film-title">{{ c.film.title }}</h3>
          <p>{{ c.film.sub }}</p>
        </div>
        <div class="film-box">
          <span class="film-ico"><ico n="film" s="30" w="1.5"/></span>
          <div><b>{{ c.film.price }}</b><i>{{ c.film.note }}</i></div>
          <button class="plan-cta" type="button" @click="$emit('choose', 3)" data-cursor><span>Nhận báo giá</span><ico n="arrow" s="13" w="2"/></button>
        </div>
      </div>
    </section>`
};
