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
  Layout.js                 Preloader, logo, menu, con trỏ, thanh tiến trình, modal, footer
  HeroSection.js            Hero "Giá 1 nhân sự – Nhận được 1 đội ngũ"
  StorySection.js           01 Câu chuyện
  SolutionsSection.js       02 Giải pháp (6 nhóm dịch vụ)
  TeamSection.js            03 Giá 1 nhân sự – sơ đồ quỹ đạo đội ngũ
  ProcessSection.js         04 Quy trình 6 bước (timeline)
  PricingSection.js         05 Bảng giá 3 gói + Film AI
  PartnersSection.js        06 Đối tác + 07 Tầm nhìn & Sứ mệnh
  ContactSection.js         08 Liên hệ + form đăng ký tư vấn
assets/                     Ảnh (cắt từ bảng giá)
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
- **Logo** đang dựng bằng chữ + SVG theo nhận diện. Nếu có file logo PNG/SVG gốc nền trong suốt, đặt vào `assets/` và thay component `BrandLogo` trong `Layout.js`.
- Người dùng bật "giảm chuyển động" trong hệ điều hành sẽ tự động được tắt bớt animation.
