/* =====================================================================
   08 · ContactSection — Bắt đầu từ một cuộc trao đổi (form đăng ký tư vấn)
   Form không cần máy chủ: khi gửi sẽ mở ứng dụng email với nội dung soạn sẵn
   tới hi.edubiz@gmail.com. Có thể thay bằng API/Google Form sau.
   ===================================================================== */
EB.components.ContactSection = {
  name: 'ContactSection',
  props: { choice: Number },
  data: () => ({
    c: window.EDUBIZ_CONTENT.contact,
    b: window.EDUBIZ_CONTENT.brand,
    f: { org: '', name: '', phone: '', pack: 0, note: '' },
    sent: false, err: ''
  }),
  watch: { choice(v) { if (v != null && v >= 0) this.f.pack = v; } },
  template: `
    <section class="sec fin" id="contact">
      <div class="fin-left">
        <div class="eyebrow fin-eyebrow" v-reveal="'fade'">08 — {{ c.kicker.toUpperCase() }}</div>
        <grad-title :parts="c.title" />
        <p class="body-lg" v-reveal="'up'">{{ c.lead }}</p>
        <p class="body" v-reveal="'up'">{{ c.body }}</p>
        <div class="contact-list" v-reveal="'up'">
          <a :href="'tel:' + b.hotlineRaw" class="ct" v-magnetic="0.15" data-cursor>
            <span class="ct-ico"><ico n="phone" s="20"/></span><span><small>Hotline</small><b>{{ b.hotline }}</b></span>
          </a>
          <a :href="'mailto:' + b.email" class="ct" v-magnetic="0.15" data-cursor>
            <span class="ct-ico"><ico n="mail" s="20"/></span><span><small>Email</small><b>{{ b.email }}</b></span>
          </a>
          <a :href="'https://' + b.websites[0]" target="_blank" rel="noopener" class="ct" v-magnetic="0.15" data-cursor>
            <span class="ct-ico"><ico n="web" s="20"/></span><span><small>Website</small><b>{{ b.websites.join(' | ') }}</b></span>
          </a>
        </div>
      </div>

      <form class="fin-form-card" v-reveal="'up'" @submit.prevent="submit" novalidate>
        <transition name="swap" mode="out-in">
          <div v-if="!sent" key="form">
            <h3>Đăng ký tư vấn truyền thông</h3>
            <p>Dành cho chủ đầu tư, Ban Giám hiệu và người phụ trách đơn vị giáo dục.</p>
            <div class="f-row">
              <label for="f-org">Tên trường / trung tâm</label>
              <input id="f-org" v-model.trim="f.org" type="text" placeholder="VD: Trường Mầm non Hoa Hướng Dương">
            </div>
            <div class="f-2">
              <div class="f-row">
                <label for="f-name">Người liên hệ</label>
                <input id="f-name" v-model.trim="f.name" type="text" placeholder="Họ và tên">
              </div>
              <div class="f-row">
                <label for="f-phone">Số điện thoại / Zalo</label>
                <input id="f-phone" v-model.trim="f.phone" type="tel" placeholder="VD: 0909 xxx xxx">
              </div>
            </div>
            <div class="f-row">
              <label for="f-pack">Dịch vụ quan tâm</label>
              <select id="f-pack" v-model.number="f.pack">
                <option v-for="(o, i) in c.options" :key="i" :value="i">{{ o }}</option>
              </select>
            </div>
            <div class="f-row">
              <label for="f-note">Nhu cầu / ghi chú</label>
              <textarea id="f-note" v-model.trim="f.note" rows="3" placeholder="Mục tiêu truyền thông, hiện trạng Fanpage, thời gian mong muốn..."></textarea>
            </div>
            <p class="f-err" v-if="err">{{ err }}</p>
            <button class="cta" type="submit" data-cursor><span>Gửi đăng ký tư vấn</span><ico n="arrow" s="14" w="2"/></button>
          </div>
          <div v-else key="ok" class="sent">
            <span class="sent-ico"><ico n="check" s="42" w="2.4"/></span>
            <h3>Cảm ơn {{ f.name || 'bạn' }}!</h3>
            <p>Ứng dụng email của bạn đã được mở với nội dung soạn sẵn gửi tới <b>{{ b.email }}</b>. Hãy bấm <b>Gửi</b> trong email để hoàn tất — hoặc gọi ngay hotline <a :href="'tel:' + b.hotlineRaw">{{ b.hotline }}</a>.</p>
            <button class="btn-glass" type="button" @click="sent = false">Sửa thông tin</button>
          </div>
        </transition>
      </form>
    </section>`,
  methods: {
    submit() {
      if (!this.f.org || !this.f.phone) { this.err = 'Vui lòng nhập tên đơn vị và số điện thoại.'; return; }
      if (!/^[0-9 +().-]{8,}$/.test(this.f.phone)) { this.err = 'Số điện thoại chưa hợp lệ.'; return; }
      this.err = '';
      const subject = `[Đăng ký tư vấn] ${this.f.org}`;
      const body = [
        `Tên đơn vị: ${this.f.org}`,
        `Người liên hệ: ${this.f.name}`,
        `Điện thoại/Zalo: ${this.f.phone}`,
        `Dịch vụ quan tâm: ${this.c.options[this.f.pack]}`,
        `Ghi chú: ${this.f.note}`
      ].join('\n');
      location.href = `mailto:${this.b.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.sent = true;
    }
  }
};
