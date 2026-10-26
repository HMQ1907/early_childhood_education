/* =====================================================================
   NỘI DUNG WEBSITE — lấy từ "EDUBIZ MEDIA.txt" và bộ ảnh slide / 4 gói dịch vụ.
   Muốn sửa chữ hoặc đổi ảnh trên web, chỉ cần sửa trong file này.
   Ảnh đã tối ưu nằm trong assets/img/
   ===================================================================== */
/* ---------------------------------------------------------------------
   CẤU HÌNH GỬI FORM LÊN GOOGLE SHEET
   Dán URL Web App của Google Apps Script (dạng https://script.google.com/macros/s/.../exec)
   vào SHEET_URL. Để trống '' thì form sẽ mở email soạn sẵn như cũ.
   Hướng dẫn chi tiết: xem README.md và file google-apps-script.gs
   --------------------------------------------------------------------- */
window.EDUBIZ_CONFIG = {
  SHEET_URL: ''
};

window.EDUBIZ_CONTENT = {
  brand: {
    name: 'EDUBIZ MEDIA',
    slogan: 'Đồng hành cùng Giáo dục & Doanh nghiệp trên nền tảng số.',
    tagline: 'Đồng hành Giáo dục, Phát triển Doanh nghiệp Việt',
    hotline: '0899 22 6979',
    hotlineRaw: '0899226979',
    websites: ['edubiz.vn', 'edubizmedia.vn'],
    email: 'hi.edubiz@gmail.com',
    facebook: 'https://facebook.com/edubizmedia',
    facebookLabel: 'facebook.com/edubizmedia',
    zalo: 'https://zalo.me/0899226979',   /* link Zalo OA hoặc zalo.me/<số điện thoại> */
    hashtags: ['#EdubizMedia', '#TruyenThongGiaoDuc', '#TruyenThongTruongHoc', '#MediaGiaoDuc', '#XayDungThuongHieu', '#GiaoDucSo']
  },

  nav: [
    { id: 'story',     label: 'Thực trạng', alt: '01 · STORY' },
    { id: 'solutions', label: 'Giải pháp',  alt: '02 · SERVICES' },
    { id: 'team',      label: 'Đội ngũ',    alt: '03 · TEAM' },
    { id: 'pricing',   label: 'Bảng giá',   alt: '04 · PRICING' },
    { id: 'feedback',  label: 'Khách hàng', alt: '05 · FEEDBACK' },
    { id: 'founder',   label: 'Founder',    alt: '06 · FOUNDER' },
    { id: 'contact',   label: 'Liên hệ',    alt: '07 · CONTACT' }
  ],

  hero: {
    eyebrow: 'EDUBIZ MEDIA — TRUYỀN THÔNG GIÁO DỤC & DOANH NGHIỆP',
    lines: ['Giá 1 nhân sự', 'Nhận được', '1 đội ngũ.'],
    gradLine: 2,
    sub: 'Đơn vị truyền thông đồng hành cùng Giáo dục & Doanh nghiệp trên nền tảng số.',
    rotating: ['đào tạo quay chụp', 'xây dựng Fanpage', 'sản xuất video', 'phim hoạt hình AI', 'phát triển thương hiệu'],
    photo: 'assets/img/team-7.jpg',
    chips: [
      { n: '01', t: 'Fanpage', d: 'Xây dựng & bàn giao.' },
      { n: '02', t: 'Đồng hành', d: 'Truyền thông dài hạn.' },
      { n: '03', t: 'Quay chụp', d: 'Đào tạo nhân sự.' },
      { n: '04', t: 'Web & Film AI', d: 'Công nghệ AI.' }
    ]
  },

  /* 01 — Thực trạng & thách thức: hiển thị bằng slide */
  story: {
    kicker: 'Thực trạng & thách thức',
    title: ['Bạn đã đầu tư rất nhiều. Khách hàng đã ', 'nhìn thấy giá trị', ' của bạn?'],
    slides: [
      { tab: 'Thực trạng',  src: 'assets/img/slide-thuc-trang.jpg', alt: 'Thực trạng: Bạn đã đầu tư rất nhiều, nhưng khách hàng đã thực sự nhìn thấy giá trị của bạn?' },
      { tab: 'Thách thức trong truyền thông', src: 'assets/img/slide-thach-thuc.jpg', alt: 'Thách thức trong truyền thông của Giáo dục và Doanh nghiệp' }
    ],
    quote: 'Nhà trường tập trung vào chất lượng giáo dục. Edubiz giúp những giá trị ấy được nhìn thấy, được thấu hiểu và được lan tỏa.',
    stats: [
      { v: 4, s: '', l: 'Nhóm giải pháp', icon: 'layers' },
      { v: 4, s: '', l: 'Bước hợp tác', icon: 'route' },
      { v: 1, s: '', l: 'Đầu mối xuyên suốt', icon: 'user' },
      { v: 4, s: '', l: 'Gói dịch vụ', icon: 'chart' }
    ]
  },

  /* 02 — Giải pháp: slide + 4 thẻ ngắn */
  solutions: {
    kicker: 'Giải pháp truyền thông toàn diện',
    title: ['Cho ', 'Giáo dục & Doanh nghiệp', '.'],
    slide: { src: 'assets/img/slide-giai-phap.jpg', alt: 'Giải pháp truyền thông toàn diện cho Giáo dục & Doanh nghiệp' },
    items: [
      { n: '01', icon: 'page',   t: 'Xây dựng & bàn giao Fanpage', d: 'Nhận diện, nội dung, định hướng.' },
      { n: '02', icon: 'calendar', t: 'Truyền thông đồng hành', d: 'Sản xuất & đăng tải định kỳ.' },
      { n: '03', icon: 'camera', t: 'Đào tạo quay chụp', d: 'Quay chụp bằng điện thoại.' },
      { n: '04', icon: 'film',   t: 'Website & Phim AI', d: 'Video sáng tạo bằng AI.' }
    ]
  },

  /* 03 — Đội ngũ + quy trình 4 bước (theo slide "Chi phí một nhân sự") */
  team: {
    kicker: 'Chi phí một nhân sự — Chất lượng một đội ngũ',
    title: ['Bạn tập trung chuyên môn. ', 'Chúng tôi đồng hành', ' xây dựng thương hiệu.'],
    slide: { src: 'assets/img/slide-giai-phap-doi-ngu.jpg', alt: 'Chi phí một nhân sự — Chất lượng một đội ngũ, quy trình hợp tác 4 bước' },
    photo: 'assets/img/team-7.jpg',
    roles: ['Lập kế hoạch', 'Quay chụp', 'Biên tập', 'Viết nội dung', 'Quản lý kênh'],
    steps: [
      { t: 'Khảo sát & Đánh giá', icon: 'search' },
      { t: 'Xây dựng Roadmap', icon: 'plan' },
      { t: 'Thống nhất phương án', icon: 'hand' },
      { t: 'Ký hợp đồng & Triển khai', icon: 'rocket' }
    ],
    gallery: [
      { src: 'assets/img/team-work.jpg', alt: 'Đội ngũ Edubiz làm việc' },
      { src: 'assets/img/goi-dong-hanh.jpg', alt: 'Lên ý tưởng nội dung' },
      { src: 'assets/img/team-3.jpg', alt: 'Thành viên Edubiz' },
      { src: 'assets/img/goi-dao-tao.jpg', alt: 'Buổi đào tạo quay chụp' },
      { src: 'assets/img/goi-fanpage.jpg', alt: 'Đội ngũ Edubiz' },
      { src: 'assets/img/goi-ai.jpg', alt: 'Sản xuất nội dung AI' }
    ]
  },

  /* 04 — Bảng giá: 4 gói (theo ảnh "4 gói dịch vụ" và bảng giá mới) */
  pricing: {
    kicker: 'Bảng giá dịch vụ',
    title: ['Giá 1 nhân sự — ', 'Nhận được 1 đội ngũ', '.'],
    poster: { src: 'assets/img/slide-bang-gia.jpg', title: 'Bảng giá dịch vụ Edubiz Media', tag: 'BẢNG GIÁ ĐẦY ĐỦ' },
    plans: [
      {
        key: 'ai', name: 'Gói AI', sub: 'Sáng tạo nội dung thế hệ mới', tone: 'cyan', icon: 'spark',
        img: 'assets/img/goi-ai.jpg', full: 'assets/img/goi-ai-full.jpg',
        pre: 'Từ', price: 200000, unit: '/ phút',
        list: ['Video hoạt hình AI', 'Thiết kế Website 3D', 'Nhạc doanh nghiệp']
      },
      {
        key: 'dh', name: 'Gói Đồng hành', sub: 'Chuyên nghiệp – Lan tỏa liên tục', tone: 'blue', icon: 'calendar',
        img: 'assets/img/goi-dong-hanh.jpg', full: 'assets/img/goi-dong-hanh-full.jpg',
        price: 8500000, unit: '/ tháng',
        list: ['12 bài viết + 12 ảnh / tháng', 'Chụp 2 buổi · Quay dựng 4 videos', 'Tư vấn số liệu, ads + seeding']
      },
      {
        key: 'fp', name: 'Gói Xây dựng & Bàn giao Fanpage', sub: 'Xây dựng nền tảng – Lan tỏa dài hạn', tone: 'violet', icon: 'page',
        img: 'assets/img/goi-fanpage.jpg', full: 'assets/img/goi-fanpage-full.jpg',
        price: 10000000, unit: '/ tháng', note: 'Hợp đồng 3 tháng',
        list: ['Fanpage + thiết kế nhận diện', 'Nội dung chuẩn SEO', 'Quản lý 3 tháng, bàn giao quản trị']
      },
      {
        key: 'dt', name: 'Gói Đào tạo quay chụp', sub: 'Chủ động ghi hình, sẵn sàng tư liệu', tone: 'pink', icon: 'camera',
        img: 'assets/img/goi-dao-tao.jpg', full: 'assets/img/goi-dao-tao-full.jpg',
        free: 'MIỄN PHÍ', note: 'khi đăng ký các gói dịch vụ · 250.000đ / nhân sự khi đăng ký riêng',
        list: ['Quay chụp bằng điện thoại', 'Căn sáng, bố cục, quay phim', 'Lưu trữ & quản lý tư liệu']
      }
    ],
    film: {
      src: 'assets/img/slide-film-ai.jpg',
      title: 'FILM AI',
      sub: 'Video hoạt hình AI theo yêu cầu',
      price: 'Từ 200.000đ / phút'
    }
  },

  /* 05 — Khách hàng nói gì: ảnh chụp đánh giá thật (gốc ở assets/feedback/, bản web ở assets/img/) */
  feedback: {
    kicker: 'Khách hàng nói gì',
    title: ['Được tin tưởng bởi ', 'trường học & doanh nghiệp', '.'],
    note: 'đánh giá 5 sao từ khách hàng',
    items: [
      { src: 'assets/img/feedback-3.jpg', name: 'Thu Anh',               alt: 'Nhà trường rất hài lòng khi làm việc cùng Edubiz Media.' },
      { src: 'assets/img/feedback-5.jpg', name: 'Latus Spa',             alt: 'Nhờ Edubiz đồng hành, Latus Spa cải thiện hình ảnh thương hiệu, tiếp cận nhiều khách hàng.' },
      { src: 'assets/img/feedback-2.jpg', name: 'KIDDO Ý Kindergarten',  alt: 'Những khoảnh khắc đáng yêu và hoạt động ý nghĩa của các bé được ghi lại tự nhiên, chân thật.' },
      { src: 'assets/img/feedback-1.jpg', name: 'Lê Hồng Ánh',           alt: 'Đội ngũ chuyên nghiệp, vui vẻ và hài hước, tạo niềm vui cho giáo viên và học sinh.' },
      { src: 'assets/img/feedback-6.jpg', name: 'CFA Tax',               alt: 'Bộ hình quá ưng luôn.' },
      { src: 'assets/img/feedback-4.jpg', name: 'Xuân Tùng',             alt: 'Quay chụp chuyên nghiệp như TVC mà giá khá tốt, video review công ty rất đẹp.' }
    ]
  },

  /* 06 — Người sáng lập */
  founder: {
    kicker: 'Người sáng lập',
    name: 'Lê Tuấn',
    role: 'Founder Edubiz Media',
    photo: 'assets/img/founder.jpg',
    slide: 'assets/img/slide-founder.jpg',
    quote: 'Bằng kinh nghiệm thực tiễn và sự thấu hiểu tâm lý khách hàng, EduBiz Media kiến tạo giải pháp truyền thông chạm đến cảm xúc.'
  },

  partners: {
    kicker: 'Đối tác',
    title: ['Đồng hành cùng ', 'mọi đơn vị giáo dục', '.'],
    items: [
      { t: 'Trường mầm non', icon: 'kid' },
      { t: 'Tiểu học · THCS · THPT · Quốc tế', icon: 'school' },
      { t: 'Trung tâm Anh ngữ', icon: 'globe' },
      { t: 'Kỹ năng sống · Năng khiếu', icon: 'spark' },
      { t: 'Cơ sở giáo dục tư thục', icon: 'building' },
      { t: 'Giáo viên · Chuyên gia', icon: 'user' }
    ],
    region: 'Phân vùng hợp tác theo khu vực — trao đổi cụ thể khi khảo sát.'
  },

  vision: {
    kicker: 'Tầm nhìn và sứ mệnh',
    title: ['Cùng giáo dục phát triển trong ', 'kỷ nguyên số', '.'],
    mission: 'Giúp các đơn vị giáo dục truyền tải giá trị, xây dựng niềm tin và phát triển thương hiệu thông qua những giải pháp truyền thông thiết thực, đồng bộ.',
    vision: 'Trở thành đối tác truyền thông chuyên sâu được tin tưởng bởi các trường học, trung tâm và tổ chức giáo dục tại Việt Nam.',
    values: ['Thấu hiểu giáo dục.', 'Đồng hành thực chất.', 'Chuyên nghiệp trong triển khai.', 'Nhất quán trong truyền thông.', 'Sáng tạo gắn liền với mục tiêu.', 'Hợp tác để cùng phát triển.']
  },

  contact: {
    kicker: 'Bắt đầu từ một cuộc trao đổi',
    title: ['Hãy để những giá trị ấy được ', 'lan tỏa xứng đáng', '.'],
    lead: 'Edubiz sẽ khảo sát nhu cầu, đánh giá hiện trạng và đề xuất kế hoạch truyền thông để nhà trường tham khảo trước khi quyết định hợp tác.',
    options: ['Gói AI (từ 200.000đ/phút)', 'Gói Đồng hành (8.500.000đ/tháng)', 'Gói Xây dựng & Bàn giao Fanpage (10.000.000đ/tháng)', 'Gói Đào tạo quay chụp', 'Film AI – Video hoạt hình AI', 'Chưa rõ – cần Edubiz tư vấn']
  }
};
