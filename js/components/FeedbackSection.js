/* =====================================================================
   05 · FeedbackSection — Khách hàng nói gì (ảnh chụp đánh giá thật)
   Desktop: lưới so le (masonry) · Mobile: vuốt ngang
   Bấm vào ảnh để phóng to. Thêm/bớt ảnh trong content.js → feedback.items
   ===================================================================== */
EB.components.FeedbackSection = {
  name: 'FeedbackSection',
  emits: ['open'],
  data: () => ({ c: window.EDUBIZ_CONTENT.feedback }),
  template: `
    <section class="sec" id="feedback">
      <sec-head num="05" :label="c.kicker" en="TESTIMONIALS" />
      <div class="fbk-head">
        <grad-title :parts="c.title" />
        <div class="fbk-score" v-reveal="'fade'">
          <b>5.0</b>
          <span><i class="fbk-stars" aria-label="5 trên 5 sao">★★★★★</i><small>{{ c.items.length }} {{ c.note }}</small></span>
        </div>
      </div>
      <div class="fbk-grid">
        <button v-for="(f, i) in c.items" :key="f.src" type="button" class="fbk-card"
                v-reveal="'up'" :data-delay="(i % 3) * 110" data-cursor
                @click="$emit('open', { src: f.src, title: f.name + ' — ' + f.alt, tag: 'KHÁCH HÀNG NÓI VỀ EDUBIZ' })"
                :aria-label="'Phóng to đánh giá của ' + f.name">
          <img :src="f.src" :alt="'Đánh giá 5 sao của ' + f.name + ': ' + f.alt" loading="lazy" decoding="async">
          <span class="fbk-zoom"><ico n="zoom" s="16" w="2"/></span>
        </button>
      </div>
    </section>`
};
