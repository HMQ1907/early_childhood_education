/* =====================================================================
   08 · ContactSection — Bắt đầu từ một cuộc trao đổi (form đăng ký tư vấn)
   Khi có EDUBIZ_CONFIG.SHEET_URL (js/content.js): gửi dữ liệu lên Google Sheet
   qua Google Apps Script. Khi chưa cấu hình: mở ứng dụng email soạn sẵn.
   ===================================================================== */
EB.components.ContactSection = {
  name: 'ContactSection',
  props: { choice: Number },
  data: () => ({
    c: window.EDUBIZ_CONTENT.contact,
    b: window.EDUBIZ_CONTENT.brand,
    f: { org: '', name: '', phone: '', pack: 0, note: '', web: '' },
    sent: false, err: '', loading: false, mode: 'sheet'
  }),
  watch: { choice(v) { if (v != null && v >= 0) this.f.pack = v; } },
  template: `
    <section class="sec fin" id="contact">
      <div class="fin-left">
        <div class="eyebrow fin-eyebrow" v-reveal="'fade'">09 — {{ c.kicker.toUpperCase() }}</div>
        <grad-title :parts="c.title" />
        <p class="body-lg" v-reveal="'up'">{{ c.lead }}</p>
        <div class="contact-list" v-reveal="'up'">
          <a :href="b.facebook" target="_blank" rel="noopener" class="ct ct--fb" v-magnetic="0.15" data-cursor>
            <span class="ct-ico"><ico n="facebook" s="20"/></span><span><small>Facebook</small><b>{{ b.facebookLabel }}</b></span>
          </a>
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
            <input class="hp" v-model="f.web" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
            <p class="f-err" v-if="err">{{ err }}</p>
            <button class="cta" type="submit" :disabled="loading" data-cursor>
              <span>{{ loading ? 'Đang gửi…' : 'Gửi đăng ký tư vấn' }}</span>
              <span v-if="loading" class="spin"></span><ico v-else n="arrow" s="14" w="2"/>
            </button>
          </div>
          <div v-else key="ok" class="sent">
            <span class="sent-ico"><ico n="check" s="42" w="2.4"/></span>
            <h3>Cảm ơn {{ f.name || 'bạn' }}!</h3>
            <p v-if="mode === 'sheet'">Edubiz đã nhận đăng ký của <b>{{ f.org }}</b> và sẽ liên hệ qua số <b>{{ f.phone }}</b> trong thời gian sớm nhất. Cần gấp, vui lòng gọi hotline <a :href="'tel:' + b.hotlineRaw">{{ b.hotline }}</a>.</p>
            <p v-else>Ứng dụng email của bạn đã được mở với nội dung soạn sẵn gửi tới <b>{{ b.email }}</b>. Hãy bấm <b>Gửi</b> trong email để hoàn tất — hoặc gọi ngay hotline <a :href="'tel:' + b.hotlineRaw">{{ b.hotline }}</a>.</p>
            <button class="btn-glass" type="button" @click="reset">{{ mode === 'sheet' ? 'Gửi đăng ký khác' : 'Sửa thông tin' }}</button>
          </div>
        </transition>
      </form>
    </section>`,
  methods: {
    reset() {
      if (this.mode === 'sheet') this.f = { org: '', name: '', phone: '', pack: 0, note: '', web: '' };
      this.sent = false;
    },
    async submit() {
      if (this.loading) return;
      if (!this.f.org || !this.f.phone) { this.err = 'Vui lòng nhập tên đơn vị và số điện thoại.'; return; }
      if (!/^[0-9 +().-]{8,}$/.test(this.f.phone)) { this.err = 'Số điện thoại chưa hợp lệ.'; return; }
      this.err = '';
      if (this.f.web) { this.mode = 'sheet'; this.sent = true; return; } /* bot điền ô ẩn → bỏ qua */

      const data = {
        org: this.f.org, name: this.f.name, phone: this.f.phone,
        service: this.c.options[this.f.pack], note: this.f.note,
        page: location.href, ua: navigator.userAgent
      };
      const url = (window.EDUBIZ_CONFIG || {}).SHEET_URL;

      if (url) {
        this.loading = true;
        try {
          /* no-cors + form-urlencoded: Apps Script nhận được dữ liệu, trình duyệt không chặn CORS */
          await fetch(url, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(data) });
          this.mode = 'sheet'; this.sent = true;
        } catch (e) {
          this.err = 'Không gửi được do lỗi mạng. Vui lòng thử lại hoặc gọi hotline ' + this.b.hotline + '.';
        } finally { this.loading = false; }
        return;
      }

      /* Chưa cấu hình Google Sheet → mở email soạn sẵn */
      const subject = `[Đăng ký tư vấn] ${data.org}`;
      const body = [`Tên đơn vị: ${data.org}`, `Người liên hệ: ${data.name}`, `Điện thoại/Zalo: ${data.phone}`,
        `Dịch vụ quan tâm: ${data.service}`, `Ghi chú: ${data.note}`].join('\n');
      location.href = `mailto:${this.b.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      this.mode = 'mail'; this.sent = true;
    }
  }
};
