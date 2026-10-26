/* =====================================================================
   04 · PricingSection — 4 gói dịch vụ (thẻ ảnh) + Film AI
   ===================================================================== */
EB.components.PricingSection = {
  name: 'PricingSection',
  emits: ['open', 'choose'],
  data: () => ({ c: window.EDUBIZ_CONTENT.pricing }),
  template: `
    <section class="sec" id="pricing">
      <sec-head num="04" :label="c.kicker" en="PRICING" />
      <div class="price-head">
        <grad-title :parts="c.title" />
        <button class="btn-glass" type="button" v-reveal="'fade'" data-cursor
                @click="$emit('open', { src: c.poster.src, title: c.poster.title, tag: c.poster.tag })">
          <ico n="image" s="16"/><span>Xem bảng giá đầy đủ</span>
        </button>
      </div>

      <div class="plans">
        <article v-for="(p, i) in c.plans" :key="p.key" class="plan" :class="'plan--' + p.tone"
                 v-reveal="'up'" :data-delay="i * 110" v-tilt="6">
          <span class="plan-glow"></span>
          <button class="plan-photo" type="button" data-cursor :aria-label="'Xem chi tiết ' + p.name"
                  @click="$emit('open', { src: p.full, title: p.name, tag: p.sub })">
            <img :src="p.img" :alt="p.name" loading="lazy" decoding="async">
            <span class="plan-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="plan-badge">
              <template v-if="p.free"><b>{{ p.free }}</b></template>
              <template v-else><small v-if="p.pre">{{ p.pre }}</small><b><span v-count="p.price"></span>đ</b><small>{{ p.unit }}</small></template>
            </span>
          </button>
          <div class="plan-body">
            <h3>{{ p.name }}</h3>
            <small class="plan-sub">{{ p.sub }}</small>
            <ul>
              <li v-for="(li, j) in p.list" :key="j" :style="{ '--j': j }"><span class="ck"><ico n="check" s="12" w="3"/></span>{{ li }}</li>
            </ul>
            <p v-if="p.note" class="plan-note">{{ p.note }}</p>
            <button class="plan-cta" type="button" @click="$emit('choose', i)" data-cursor>
              <span>Đăng ký ngay</span><ico n="arrow" s="13" w="2"/>
            </button>
          </div>
        </article>
      </div>

      <div class="film" v-reveal="'up'">
        <div class="film-slide">
          <slide-frame :src="c.film.src" :alt="c.film.title + ' — ' + c.film.sub" tag="FILM AI" @open="$emit('open', $event)" />
        </div>
        <div class="film-main">
          <span class="eyebrow">AI ANIMATION SERIES</span>
          <h3 class="film-title">{{ c.film.title }}</h3>
          <p>{{ c.film.sub }}</p>
          <span class="film-price"><ico n="film" s="20" w="1.6"/>{{ c.film.price }}</span>
          <button class="btn-primary" type="button" @click="$emit('choose', 4)" v-magnetic data-cursor>
            <span>Nhận báo giá</span><ico n="arrow" s="14" w="2"/>
          </button>
        </div>
      </div>
    </section>`
};
