/* =====================================================================
   Media — component hiển thị ảnh dùng chung
   · SlideFrame  : 1 ảnh slide trong khung kính, nghiêng 3D, bấm để phóng to
   · SlideViewer : trình chiếu nhiều slide (tab + tự chuyển + thanh tiến trình)
   · PhotoStrip  : dải ảnh chạy ngang vô hạn
   Mọi click phóng to phát sự kiện 'open' với { src, title, tag }.
   ===================================================================== */
EB.components.SlideFrame = {
  name: 'SlideFrame',
  props: { src: String, alt: String, tag: String, ratio: { type: String, default: '16/9' } },
  emits: ['open'],
  template: `
    <button class="sframe" type="button" v-tilt="5" data-cursor :style="{ aspectRatio: ratio }"
            @click="$emit('open', { src, title: alt, tag })" :aria-label="'Phóng to: ' + alt">
      <span class="sframe-glow"></span>
      <img :src="src" :alt="alt" loading="lazy" decoding="async">
      <span class="sframe-zoom"><ico n="zoom" s="18" w="2"/></span>
      <span class="sframe-shine"></span>
    </button>`
};

EB.components.SlideViewer = {
  name: 'SlideViewer',
  props: { slides: Array, interval: { type: Number, default: 6500 } },
  emits: ['open'],
  data: () => ({ i: 0, paused: false, tick: 0, reduce: EB.REDUCE }),
  template: `
    <div class="sviewer" @mouseenter="paused = true" @mouseleave="paused = false">
      <div class="sviewer-tabs" role="tablist">
        <button v-for="(s, k) in slides" :key="k" type="button" role="tab" class="sviewer-tab"
                :class="{ on: i === k }" :aria-selected="i === k" @click="go(k)" data-cursor>
          <em>{{ String(k + 1).padStart(2, '0') }}</em>{{ s.tab }}
          <i class="sviewer-bar" :class="{ run: i === k && slides.length > 1 && !reduce }" :key="tick + '-' + k"
             :style="{ animationDuration: interval + 'ms', animationPlayState: paused ? 'paused' : 'running' }"
             @animationend="i === k && go(i + 1)"></i>
        </button>
      </div>
      <div class="sviewer-stage" v-tilt="4">
        <transition-group name="slide-x">
          <button v-for="(s, k) in slides" v-show="i === k" :key="s.src" type="button" class="sviewer-slide"
                  @click="$emit('open', { src: s.src, title: s.alt, tag: s.tab })" data-cursor :aria-label="'Phóng to: ' + s.tab">
            <img :src="s.src" :alt="s.alt" :loading="k ? 'lazy' : 'eager'" decoding="async">
          </button>
        </transition-group>
        <span class="sframe-zoom"><ico n="zoom" s="18" w="2"/></span>
        <button class="sviewer-nav prev" type="button" @click="go(i - 1)" aria-label="Slide trước">‹</button>
        <button class="sviewer-nav next" type="button" @click="go(i + 1)" aria-label="Slide sau">›</button>
      </div>
    </div>`,
  methods: {
    /* thanh tiến trình chạy hết (animationend) thì tự sang slide kế; rê chuột vào để tạm dừng */
    go(k) { const n = this.slides.length; this.i = (k + n) % n; this.tick++; }
  }
};

EB.components.PhotoStrip = {
  name: 'PhotoStrip',
  props: { photos: Array },
  emits: ['open'],
  template: `
    <div class="pstrip">
      <div class="pstrip-in">
        <button v-for="(p, k) in doubled" :key="k" type="button" class="pstrip-item" data-cursor
                :tabindex="k >= photos.length ? -1 : 0" @click="$emit('open', { src: p.src, title: p.alt, tag: 'ĐỘI NGŨ EDUBIZ' })">
          <img :src="p.src" :alt="k >= photos.length ? '' : p.alt" loading="lazy" decoding="async">
        </button>
      </div>
    </div>`,
  computed: { doubled() { return this.photos.concat(this.photos); } }
};
