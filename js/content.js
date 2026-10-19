/* =====================================================================
   NỘI DUNG WEBSITE — lấy từ "EDUBIZ MEDIA.txt" và bảng giá dịch vụ.
   Muốn sửa chữ trên web, chỉ cần sửa trong file này.
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
    hashtags: ['#EdubizMedia', '#TruyenThongGiaoDuc', '#TruyenThongTruongHoc', '#MediaGiaoDuc', '#XayDungThuongHieu', '#GiaoDucSo']
  },

  nav: [
    { id: 'story',     label: 'Câu chuyện', alt: '01 · STORY' },
    { id: 'solutions', label: 'Giải pháp',  alt: '02 · SERVICES' },
    { id: 'team',      label: 'Đội ngũ',    alt: '03 · TEAM' },
    { id: 'process',   label: 'Quy trình',  alt: '04 · PROCESS' },
    { id: 'pricing',   label: 'Bảng giá',   alt: '05 · PRICING' },
    { id: 'partners',  label: 'Đối tác',    alt: '06 · PARTNERS' }
  ],

  hero: {
    eyebrow: 'EDUBIZ MEDIA — TRUYỀN THÔNG GIÁO DỤC TRÊN NỀN TẢNG SỐ',
    lines: ['Giá 1 nhân sự', 'Nhận được', '1 đội ngũ.'],
    gradLine: 2,
    sub: 'Edubiz Media giúp trường học, trung tâm và cơ sở giáo dục xây dựng hình ảnh chuyên nghiệp, lan tỏa giá trị giáo dục và kết nối hiệu quả hơn với phụ huynh thông qua các giải pháp truyền thông đồng bộ.',
    rotating: ['đào tạo quay chụp', 'xây dựng nội dung', 'sản xuất video', 'quản lý Fanpage', 'phát triển thương hiệu'],
    chips: [
      { n: '01', t: 'Quay chụp', d: 'Đào tạo kỹ năng ghi hình ngay tại trường.' },
      { n: '02', t: 'Fanpage', d: 'Xây dựng kênh truyền thông chuyên nghiệp.' },
      { n: '03', t: 'Video & Phim AI', d: 'Kể câu chuyện giáo dục sinh động.' },
      { n: '04', t: 'Thương hiệu', d: 'Đồng hành truyền thông dài hạn.' }
    ]
  },

  story: {
    kicker: 'Câu chuyện của Edubiz Media',
    title: ['Giá trị giáo dục xứng đáng được ', 'nhìn thấy và lan tỏa', '.'],
    lead: 'Đầu tư vào giáo dục không chỉ là xây dựng cơ sở vật chất hiện đại, tuyển chọn đội ngũ giáo viên chất lượng hay phát triển chương trình đào tạo tốt. Đó còn là hành trình xây dựng niềm tin với phụ huynh, khẳng định uy tín với cộng đồng và tạo nên dấu ấn riêng cho mỗi đơn vị giáo dục.',
    body: 'Thế nhưng, mỗi ngày tại trường học và trung tâm đều có rất nhiều hoạt động ý nghĩa, những giờ học sáng tạo và những khoảnh khắc đáng nhớ. Không phải đơn vị nào cũng có đủ nhân sự, thời gian và chuyên môn để ghi lại, biên tập và lan tỏa những giá trị ấy một cách bài bản.',
    turn: 'Edubiz Media ra đời để giải quyết bài toán đó.',
    body2: 'Chúng tôi đồng hành cùng nhà trường trong toàn bộ quá trình truyền thông: từ định hướng hình ảnh, lập kế hoạch nội dung, quay chụp, sản xuất, biên tập đến đăng tải và phát triển thương hiệu trên nền tảng số.',
    quote: 'Nhà trường tập trung vào chất lượng giáo dục. Edubiz giúp những giá trị ấy được nhìn thấy, được thấu hiểu và được lan tỏa.',
    flow: ['Định hướng hình ảnh', 'Lập kế hoạch nội dung', 'Quay chụp', 'Sản xuất', 'Biên tập', 'Đăng tải', 'Phát triển thương hiệu'],
    stats: [
      { v: 6, s: '', l: 'Nhóm giải pháp truyền thông', icon: 'layers' },
      { v: 6, s: '', l: 'Bước quy trình hợp tác', icon: 'route' },
      { v: 1, s: '', l: 'Đầu mối phụ trách xuyên suốt', icon: 'user' },
      { v: 3, s: '', l: 'Gói dịch vụ Social Media', icon: 'chart' }
    ]
  },

  solutions: {
    kicker: 'Giải pháp truyền thông giáo dục toàn diện',
    title: ['Một đối tác – ', 'Nhiều năng lực', ' chuyên môn.'],
    intro: 'Từ đào tạo quay chụp, xây dựng nội dung, sản xuất video đến quản lý Fanpage và phát triển thương hiệu, Edubiz mang đến giải pháp toàn diện để mỗi hoạt động, mỗi khoảnh khắc và mỗi giá trị của nhà trường đều được truyền tải đúng cách.',
    items: [
      {
        n: '01', icon: 'camera', en: 'ON-SITE TRAINING',
        t: 'Đào tạo quay chụp tại trường',
        d: 'Trang bị kỹ năng quay video, chụp ảnh và ghi lại hoạt động thực tế cho cán bộ, giáo viên và nhân sự phụ trách truyền thông.',
        list: ['Hướng dẫn sử dụng thiết bị quay chụp.', 'Kỹ năng ghi hình lớp học và hoạt động ngoại khóa.', 'Cách bắt trọn khoảnh khắc tự nhiên của học sinh.', 'Cách truyền tải thông điệp giáo dục qua hình ảnh.']
      },
      {
        n: '02', icon: 'page', en: 'FANPAGE BUILDING',
        t: 'Xây dựng và hoàn thiện Fanpage',
        d: 'Biến Fanpage thành kênh truyền thông chuyên nghiệp, thể hiện rõ bản sắc và giá trị của đơn vị giáo dục.',
        list: ['Xây dựng định hướng hình ảnh và nhận diện.', 'Thiết lập, tối ưu thông tin Fanpage.', 'Xây dựng hệ thống nội dung phù hợp.', 'Bàn giao nền tảng sẵn sàng vận hành.']
      },
      {
        n: '03', icon: 'calendar', en: 'LONG-TERM PARTNER',
        t: 'Truyền thông đồng hành dài hạn',
        d: 'Không chỉ sản xuất từng bài đăng, Edubiz cùng nhà trường xây dựng một kế hoạch truyền thông có định hướng và tính nhất quán.',
        list: ['Khảo sát thực tế và phân tích nhu cầu.', 'Lập kế hoạch nội dung theo tháng.', 'Tổ chức quay chụp hoạt động định kỳ.', 'Biên tập hình ảnh, video và bài viết.', 'Quản lý lịch đăng tải và nhận diện thương hiệu.', 'Đánh giá, điều chỉnh nội dung theo mục tiêu.']
      },
      {
        n: '04', icon: 'film', en: 'VIDEO & AI ANIMATION',
        t: 'Sản xuất video và phim hoạt hình AI',
        d: 'Kể câu chuyện giáo dục theo cách sinh động, sáng tạo và phù hợp với từng đối tượng.',
        list: ['Video giới thiệu trường học, trung tâm.', 'Video tuyển sinh và giới thiệu chương trình đào tạo.', 'Video hoạt động ngoại khóa, sự kiện và đời sống học đường.', 'Xây dựng nhân vật hoạt hình AI theo yêu cầu.', 'Phát triển series phim hoạt hình AI với nhân vật, câu chuyện và thông điệp riêng.', 'Video minh họa ý tưởng, chương trình hoặc dự án giáo dục.']
      },
      {
        n: '05', icon: 'spark', en: 'EVENTS & CONNECTION',
        t: 'Tổ chức sự kiện và kết nối giáo dục',
        d: 'Đồng hành cùng các hoạt động giúp nhà trường tạo dấu ấn và tăng cường kết nối với cộng đồng.',
        list: ['Khai giảng, tổng kết và lễ tốt nghiệp.', 'Dã ngoại, trải nghiệm và hoạt động ngoại khóa.', 'Workshop, hội thảo và chương trình chuyên đề.', 'Kết nối chuyên gia, giáo viên, trung tâm và cơ sở giáo dục.']
      },
      {
        n: '06', icon: 'network', en: 'EDU NETWORK',
        t: 'Kết nối giáo viên – trung tâm – cơ sở giáo dục',
        d: 'Xây dựng mạng lưới hợp tác nhằm kết nối nguồn lực chuyên môn, mở rộng cơ hội hợp tác và cùng phát triển trong lĩnh vực giáo dục.',
        list: []
      }
    ]
  },

  team: {
    kicker: 'Giá 1 nhân sự – Nhận được 1 đội ngũ',
    title: ['Không cần xây dựng cả ', 'phòng truyền thông', ' từ đầu.'],
    p1: 'Để vận hành truyền thông hiệu quả, một đơn vị giáo dục thường cần nhiều năng lực khác nhau: người lập kế hoạch, người quay chụp, người biên tập, người viết nội dung và người quản lý kênh truyền thông.',
    p2: 'Việc tuyển dụng, đào tạo và quản lý đầy đủ đội ngũ này có thể tạo ra áp lực về chi phí và vận hành.',
    turn: 'Edubiz mang đến một phương án linh hoạt hơn.',
    p3: 'Thay vì phải tự tổ chức nhiều vị trí riêng lẻ, nhà trường có thể hợp tác với một đầu mối truyền thông được tổ chức theo quy trình chuyên môn. Nhà trường có một đối tác phụ trách xuyên suốt, được hỗ trợ bởi đội ngũ chuyên môn theo phạm vi công việc đã thống nhất.',
    roles: ['Lập kế hoạch', 'Quay chụp', 'Biên tập', 'Viết nội dung', 'Quản lý kênh'],
    gets: ['Có người định hướng nội dung.', 'Có nhân sự quay chụp và sản xuất tư liệu.', 'Có đội ngũ biên tập hình ảnh, video và bài viết.', 'Có quy trình quản lý, kiểm duyệt và đăng tải.', 'Có kế hoạch truyền thông đồng bộ theo mục tiêu.'],
    note: 'Edubiz không đơn thuần cung cấp nhân sự. Chúng tôi mang đến giải pháp tổ chức và triển khai truyền thông phù hợp với nhu cầu thực tế của từng đơn vị.',
    small: 'Phạm vi nhân sự, sản lượng nội dung và các hạng mục triển khai sẽ được xác định cụ thể trong kế hoạch hợp tác.'
  },

  process: {
    kicker: 'Quy trình hợp tác',
    title: ['Bắt đầu bằng ', 'sự thấu hiểu', ', triển khai bằng kế hoạch rõ ràng.'],
    steps: [
      { t: 'Tiếp nhận nhu cầu', d: 'Lắng nghe mục tiêu, khó khăn và định hướng phát triển của chủ đầu tư hoặc Ban Giám hiệu.', icon: 'ear' },
      { t: 'Khảo sát thực tế', d: 'Tìm hiểu cơ sở vật chất, hoạt động giáo dục, đối tượng phụ huynh và hiện trạng truyền thông.', icon: 'search' },
      { t: 'Xây dựng kế hoạch', d: 'Đề xuất định hướng hình ảnh, nội dung, phương án sản xuất và kế hoạch triển khai phù hợp.', icon: 'plan' },
      { t: 'Thống nhất phương án hợp tác', d: 'Trao đổi về phạm vi công việc, sản lượng, tiến độ, ngân sách và trách nhiệm của các bên.', icon: 'hand' },
      { t: 'Triển khai và phối hợp', d: 'Tổ chức sản xuất, biên tập, kiểm duyệt và đăng tải theo kế hoạch đã thống nhất.', icon: 'rocket' },
      { t: 'Theo dõi và phát triển', d: 'Đánh giá chất lượng nội dung, điều chỉnh cách truyền tải và tiếp tục hoàn thiện hình ảnh thương hiệu.', icon: 'chart' }
    ],
    note: 'Edubiz ưu tiên khảo sát và xây dựng kế hoạch trước khi chính thức tiếp quản, giúp nhà trường hiểu rõ phương án thực hiện và có cơ sở để đưa ra quyết định.'
  },

  pricing: {
    kicker: 'Bảng giá dịch vụ Social Media',
    title: ['Giải pháp truyền thông toàn diện cho ', 'Trường học, Trung tâm', ' & đơn vị Giáo dục.'],
    plans: [
      {
        key: 'build', name: 'Gói xây dựng', sub: 'Xây dựng – Bàn giao', icon: 'page',
        price: 25000000, unit: '/page', tone: 'blue',
        list: ['20 bài viết', '5 videos (nhận diện)', '2 bộ hình chuyên nghiệp', '15 bài đăng', 'Cung cấp bộ nhận diện', 'Tư vấn chiến lược', 'Hỗ trợ ads + seeding']
      },
      {
        key: 'grow', name: 'Gói phát triển', sub: 'Chuyên nghiệp – Lan tỏa', icon: 'chart',
        price: 8500000, unit: '/tháng', tone: 'cyan',
        list: ['12 bài viết / tháng', '12 ảnh thiết kế', 'Chụp hình: 2 buổi', 'Quay dựng: 4 videos', 'Giờ vàng + thời sự', 'Tư vấn, phân tích số liệu', 'Hỗ trợ ads + seeding']
      },
      {
        key: 'boost', name: 'Gói bứt phá', sub: 'Toàn diện – Tăng trưởng mạnh', icon: 'rocket',
        price: 12500000, unit: '/tháng', tone: 'pink',
        list: ['16–20 bài viết / tháng', '15–20 ảnh thiết kế', 'Chụp hình: 2 buổi', 'Quay dựng: 8 videos', 'Giờ vàng + thời sự', 'Tư vấn, phân tích số liệu', 'Hỗ trợ ads + seeding']
      }
    ],
    film: {
      title: 'FILM AI',
      sub: 'Series phim hoạt hình AI theo yêu cầu',
      price: 'Đơn giá tính theo phút',
      note: 'Trao đổi cụ thể theo yêu cầu'
    }
  },

  partners: {
    kicker: 'Đối tác của Edubiz Media',
    title: ['Dành cho những đơn vị giáo dục muốn phát triển hình ảnh ', 'một cách bài bản', '.'],
    intro: 'Edubiz hướng đến hợp tác cùng:',
    items: [
      { t: 'Trường mầm non và hệ thống giáo dục mầm non.', icon: 'kid' },
      { t: 'Trường tiểu học, THCS, THPT và trường quốc tế.', icon: 'school' },
      { t: 'Trung tâm Anh ngữ và ngoại ngữ.', icon: 'globe' },
      { t: 'Trung tâm kỹ năng sống, năng khiếu và đào tạo.', icon: 'spark' },
      { t: 'Cơ sở giáo dục tư thục và các tổ chức giáo dục.', icon: 'building' },
      { t: 'Giáo viên, chuyên gia và đơn vị hoạt động trong lĩnh vực giáo dục.', icon: 'user' }
    ],
    long: 'Chúng tôi ưu tiên mối quan hệ hợp tác dài hạn, có sự phối hợp chặt chẽ và định hướng phát triển rõ ràng.',
    region: 'Để đảm bảo chất lượng phục vụ và hạn chế chồng chéo quyền lợi, Edubiz áp dụng nguyên tắc phân vùng hợp tác theo khu vực. Phạm vi ưu tiên được trao đổi cụ thể khi khảo sát và thống nhất hợp đồng.'
  },

  vision: {
    kicker: 'Tầm nhìn và sứ mệnh',
    title: ['Cùng giáo dục phát triển trong ', 'kỷ nguyên số', '.'],
    mission: 'Giúp các đơn vị giáo dục truyền tải giá trị, xây dựng niềm tin và phát triển thương hiệu thông qua những giải pháp truyền thông thiết thực, đồng bộ và phù hợp với thực tế vận hành.',
    vision: 'Trở thành đối tác truyền thông chuyên sâu được tin tưởng bởi các trường học, trung tâm và tổ chức giáo dục tại Việt Nam.',
    values: ['Thấu hiểu giáo dục.', 'Đồng hành thực chất.', 'Chuyên nghiệp trong triển khai.', 'Nhất quán trong truyền thông.', 'Sáng tạo gắn liền với mục tiêu.', 'Hợp tác để cùng phát triển.']
  },

  contact: {
    kicker: 'Bắt đầu từ một cuộc trao đổi',
    title: ['Hãy để những giá trị ấy được ', 'lan tỏa xứng đáng', '.'],
    lead: 'Nhà trường đã đầu tư rất nhiều cho chất lượng giáo dục. Nếu bạn là chủ đầu tư, Ban Giám hiệu hoặc người phụ trách một đơn vị giáo dục đang tìm kiếm giải pháp truyền thông chuyên nghiệp, Edubiz sẵn sàng lắng nghe và cùng bạn xây dựng phương án phù hợp.',
    body: 'Chúng tôi sẽ khảo sát nhu cầu, đánh giá hiện trạng và đề xuất kế hoạch truyền thông để nhà trường tham khảo trước khi quyết định hợp tác.',
    options: ['Gói xây dựng (25.000.000đ/page)', 'Gói phát triển (8.500.000đ/tháng)', 'Gói bứt phá (12.500.000đ/tháng)', 'Film AI – Series phim hoạt hình AI', 'Đào tạo quay chụp tại trường', 'Tổ chức sự kiện & kết nối giáo dục', 'Chưa rõ – cần Edubiz tư vấn']
  }
};
