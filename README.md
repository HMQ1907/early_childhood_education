# Website Edubiz Media — Vue 3

Website giới thiệu Edubiz Media, viết bằng **Vue 3** (không cần build), nền 3D WebGL bằng **Three.js**.

## Chạy website
- Cách nhanh nhất: mở file `index.html` bằng Chrome / Edge (cần có mạng để tải Vue, Three.js và font Google).
- Hoặc chạy một server tĩnh trong thư mục này, ví dụ: `npx serve .` hoặc `python -m http.server 8080`, rồi mở `http://localhost:8080`.
- Đưa lên hosting: tải nguyên thư mục lên (Netlify, Vercel, GitHub Pages, cPanel…) — không cần bước build.

## Cấu trúc
```
index.html                  Trang chính, nạp thư viện và các component
css/style.css               Toàn bộ giao diện + animation
js/content.js               ⭐ TOÀN BỘ NỘI DUNG CHỮ (sửa chữ ở đây)
js/core.js                  Icon + directive animation: v-reveal, v-tilt, v-magnetic, v-count
js/app.js                   Khởi tạo Vue, ráp các section
js/components/
  GlBackground.js           Nền 3D (sóng hạt, quả cầu, khối hình bay theo cuộn trang)
  Media.js                  Khung slide, trình chiếu slide, dải ảnh chạy
  Layout.js                 Preloader, logo, menu, con trỏ, thanh tiến trình, modal, footer
  HeroSection.js            Hero "Giá 1 nhân sự – Nhận được 1 đội ngũ"
  StorySection.js           01 Thực trạng & Thách thức (trình chiếu slide)
  SolutionsSection.js       02 Giải pháp (slide + 4 thẻ)
  TeamSection.js            03 Đội ngũ: slide, sơ đồ vai trò, quy trình 4 bước, dải ảnh
  PricingSection.js         04 Bảng giá 4 gói (thẻ ảnh) + Film AI
  FeedbackSection.js        05 Khách hàng nói gì (ảnh đánh giá)
  FounderSection.js         06 Người sáng lập
  PartnersSection.js        07 Đối tác + 08 Tầm nhìn & Sứ mệnh
  ContactSection.js         09 Liên hệ + form đăng ký tư vấn
assets/                     Ảnh gốc bạn thêm vào (giữ nguyên)
assets/img/                 Ảnh đã tối ưu cho web (website dùng các ảnh này)
google-apps-script.gs       Script nhận form & ghi vào Google Sheet
```

## Ghi chú
- **Form đăng ký → Google Sheet**:
  1. Mở Google Sheet → Extensions (Tiện ích mở rộng) → Apps Script.
  2. Xóa code mẫu, dán toàn bộ `google-apps-script.gs`, bấm Lưu.
  3. Deploy → New deployment → chọn loại **Web app** → Execute as: **Me** · Who has access: **Anyone** → Deploy → cấp quyền.
  4. Copy **Web app URL** (đuôi `/exec`), dán vào `SHEET_URL` ở đầu `js/content.js`.
  5. Mỗi lần gửi form sẽ thêm 1 dòng vào tab "Đăng ký tư vấn" (tự tạo nếu chưa có).
  - Sửa code script sau này: Deploy → Manage deployments → Edit → Version: New version (giữ nguyên URL).
  - Để trống `SHEET_URL` thì form quay về chế độ mở email soạn sẵn.
- **Logo**: `assets/logo-dark.png` (dùng trên nền tối) và `assets/logo.png` (màu gốc, nền trong suốt).
- **Đổi ảnh**: thay file trong `assets/img/` (giữ nguyên tên) hoặc sửa đường dẫn ảnh trong `js/content.js`.
- Người dùng bật "giảm chuyển động" trong hệ điều hành sẽ tự động được tắt bớt animation.
