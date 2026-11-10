/**
 * EventHub — Event Detail Page (event-detail.js)
 * Vanilla JS: ticket selection, quantity stepper, order summary,
 * sessionStorage handoff to checkout, tabs, sticky header, share.
 */

'use strict';

// ============================================================
// 1. EVENT DATA (mock — in a real app, loaded via API query param)
// ============================================================

const EVENT_1 = {
  id: 1,
  name: "Lễ Hội Âm Nhạc Gió Mùa — Monsoon Music Festival 2026",
  category: "Âm nhạc & Concert",
  image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=90",
  dateStart: new Date("2026-11-20T18:30:00"),
  dateEnd:   new Date("2026-11-22T23:00:00"),
  venue: "Hoàng Thành Thăng Long, Hà Nội",
  venueAddress: "19C Hoàng Diệu, Ba Đình, Hà Nội",
  mapsUrl: "https://maps.google.com/?q=Hoàng+Thành+Thăng+Long,+Hà+Nội",
  format: "offline",
  organizer: "Monsoon Production",
  orgAvatar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80",
  orgEvents: 24,
  orgFollowers: "12.4K",
  orgRating: "4.9",
  capacity: 5000,
  registered: 4350,
  isHot: true,
  saleEnds: new Date("2026-11-19T23:59:00"),

  description: `
    <p>
      <strong>Monsoon Music Festival</strong> là đại nhạc hội quốc tế thường niên được tổ chức tại
      khu di tích lịch sử Hoàng Thành Thăng Long — không gian đặc biệt kết hợp giữa âm nhạc sống
      động và văn hóa nghìn năm Thăng Long Hà Nội.
    </p>
    <p>
      Năm 2026, festival quy tụ hơn <strong>30 nghệ sĩ</strong> từ Việt Nam và 15 quốc gia, trình diễn
      trên 4 sân khấu chính với âm thanh vòm 360° và ánh sáng LED mapping đẳng cấp quốc tế.
    </p>
    <p>
      Với chủ đề <em>"Ngàn Tiếng Vọng"</em>, Monsoon 2026 hứa hẹn mang lại trải nghiệm cảm xúc
      sâu sắc — nơi âm nhạc không chỉ là giai điệu, mà còn là ngôn ngữ kết nối con người xuyên
      qua ranh giới văn hóa và ngôn ngữ.
    </p>
  `,

  highlights: [
    { icon: "🎤", label: "Nghệ sĩ biểu diễn", value: "30+ từ 15 quốc gia" },
    { icon: "🎪", label: "Sân khấu", value: "4 Main Stages" },
    { icon: "🎧", label: "Âm thanh", value: "360° Spatial Audio" },
    { icon: "🎆", label: "Màn pháo hoa", value: "Đêm bế mạc 22/11" },
    { icon: "🍜", label: "Khu ẩm thực", value: "50+ gian hàng" },
    { icon: "📸", label: "Photo zone", value: "10 điểm check-in" },
  ],

  agenda: [
    {
      day: "Ngày 1 — Thứ 6, 20/11/2026",
      items: [
        { time: "17:00 – 18:00", title: "Mở cổng & Check-in", desc: "Đăng ký QR, nhận wristband và khám phá khu triển lãm nghệ thuật" },
        { time: "18:30 – 19:30", title: "Khai mạc Monsoon 2026", desc: "Màn trình diễn múa lửa & trống hội đặc sắc", speaker: "Nhóm nghệ thuật Hội An Spirits" },
        { time: "19:45 – 21:00", title: "MONO & The Mopeds", desc: "Indie-folk Việt Nam mở màn đêm nhạc đầu tiên", speaker: "MONO (Chủ sân khấu Lớn)" },
        { time: "21:30 – 23:00", title: "Headline: Hà Anh Tuấn", desc: "Đêm nhạc ballad & acoustic đặc biệt kết hợp dàn nhạc giao hưởng", speaker: "Hà Anh Tuấn" },
      ]
    },
    {
      day: "Ngày 2 — Thứ 7, 21/11/2026",
      items: [
        { time: "16:00 – 17:30", title: "Electronic Sessions", desc: "Nhạc điện tử ambient & deep house", speaker: "DJ Myon (Netherlands)" },
        { time: "18:00 – 19:30", title: "World Music Stage", desc: "Âm nhạc truyền thống pha trộn jazz hiện đại", speaker: "Ngô Hồng Quang & Band" },
        { time: "20:00 – 21:30", title: "Headline: Son Tung M-TP", desc: "Live concert với bộ set chưa từng công bố", speaker: "Sơn Tùng M-TP" },
        { time: "22:00 – 23:30", title: "Night Closing Party", desc: "DJ set và nhảy freestyle sân khấu Open Air", speaker: "DJ Cherie (France)" },
      ]
    },
    {
      day: "Ngày 3 — Chủ nhật, 22/11/2026",
      items: [
        { time: "15:00 – 16:30", title: "Acoustic Afternoon", desc: "Không gian thư giãn với nhạc acoustic & trà đạo" },
        { time: "17:00 – 18:30", title: "Youth Stage: Indie Bands", desc: "5 ban nhạc indie Hà Nội tranh tài" },
        { time: "19:30 – 21:30", title: "Headline: Mỹ Tâm × Tăng Duy Tân", desc: "Đêm nhạc pop & R&B hoành tráng bế mạc", speaker: "Mỹ Tâm & Tăng Duy Tân" },
        { time: "21:45 – 22:00", title: "Màn pháo hoa bế mạc", desc: "Pháo hoa 15 phút kết thúc Monsoon 2026 đáng nhớ" },
      ]
    }
  ],

  lineup: [
    { name: "Hà Anh Tuấn",    role: "Headline",    genre: "Ballad / Acoustic",    color: "#0053cc", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80" },
    { name: "Sơn Tùng M-TP",  role: "Headline",    genre: "Pop / V-pop",          color: "#c2410c", image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=400&q=80" },
    { name: "Mỹ Tâm",         role: "Co-Headline", genre: "Pop / R&B",             color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { name: "MONO",            role: "Special Guest","genre": "Indie Folk",          color: "#059669", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "DJ Myon",         role: "DJ Set",      genre: "Deep House / Ambient",  color: "#0891b2", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80" },
    { name: "Ngô Hồng Quang",  role: "World Music", genre: "World / Jazz",          color: "#b45309", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80" },
  ],

  tickets: [
    {
      id: "early_bird",
      name: "Early Bird",
      price: 299000,
      originalPrice: 450000,
      maxPerOrder: 4,
      remaining: 50,
      status: "almost",
      benefits: [
        "Vào cổng tất cả 3 ngày",
        "Wristband kỷ niệm",
        "Giảm 30% F&B tại khu ẩm thực",
        "Bãi xe miễn phí",
      ],
      disabledBenefits: ["Khu VIP Lounge", "Meet & Greet nghệ sĩ"]
    },
    {
      id: "ga",
      name: "Vé GA — General Admission",
      price: 450000,
      originalPrice: 450000,
      maxPerOrder: 4,
      remaining: 580,
      status: "open",
      benefits: [
        "Vào cổng tất cả 3 ngày",
        "Wristband kỷ niệm",
        "Bãi xe miễn phí",
      ],
      disabledBenefits: ["Khu VIP Lounge", "Meet & Greet nghệ sĩ", "Giảm giá F&B"]
    },
    {
      id: "vip",
      name: "Vé VIP — Premium Experience",
      price: 1200000,
      originalPrice: 1500000,
      maxPerOrder: 2,
      remaining: 35,
      status: "almost",
      benefits: [
        "Vào cổng tất cả 3 ngày",
        "Khu VIP Lounge riêng biệt",
        "Buffet & Open Bar cao cấp",
        "Wristband kỷ niệm đặc biệt",
        "Giảm 50% F&B toàn khu",
        "Bãi xe ưu tiên VIP",
        "Tặng poster có chữ ký nghệ sĩ",
      ],
      disabledBenefits: ["Meet & Greet nghệ sĩ"]
    },
    {
      id: "diamond",
      name: "Vé Diamond — All-Access",
      price: 3500000,
      originalPrice: 4000000,
      maxPerOrder: 2,
      remaining: 0,
      status: "sold",
      benefits: [
        "All-Access tất cả khu vực",
        "Meet & Greet với nghệ sĩ Headline",
        "Backstage tour độc quyền",
        "Khu Diamond Lounge 5 sao",
        "Buffet & Premium Open Bar",
        "Chụp ảnh riêng với nghệ sĩ",
        "Gift set Monsoon 2026 cao cấp",
      ],
      disabledBenefits: []
    },
  ],

  policy: [
    {
      title: "Chính sách hoàn vé & hủy đặt",
      body: `<ul>
        <li>Hủy trước 7 ngày: hoàn 100% giá trị vé (trừ phí dịch vụ).</li>
        <li>Hủy trong vòng 7 ngày đến 24 giờ trước sự kiện: hoàn 50%.</li>
        <li>Hủy trong vòng 24 giờ hoặc không tham dự: không hoàn tiền.</li>
        <li>Ban tổ chức hủy sự kiện: hoàn 100% toàn bộ chi phí.</li>
      </ul>`
    },
    {
      title: "Quy định vào cổng & sử dụng vé",
      body: `<ul>
        <li>Mỗi mã QR chỉ được sử dụng 01 lần duy nhất tại cổng soát vé.</li>
        <li>Xuất trình mã QR trên điện thoại hoặc bản in, kèm CCCD/hộ chiếu.</li>
        <li>Trẻ em dưới 6 tuổi được vào miễn phí khi có người lớn đi kèm.</li>
        <li>Nghiêm cấm chuyển nhượng vé cho bên thứ ba mà không thông báo BTC.</li>
      </ul>`
    },
    {
      title: "Quy định an toàn trong sự kiện",
      body: `<ul>
        <li>Nghiêm cấm mang theo vũ khí, chất nổ và chất cồn từ bên ngoài.</li>
        <li>Nghiêm cấm chụp ảnh/quay video từ flycam/drone trong khu vực.</li>
        <li>Tuân thủ hướng dẫn của nhân viên bảo vệ và an ninh sự kiện.</li>
        <li>BTC không chịu trách nhiệm với tài sản thất lạc trong khu vực.</li>
      </ul>`
    },
    {
      title: "Điều khoản sử dụng & bảo mật",
      body: `<ul>
        <li>Thông tin cá nhân được mã hóa và bảo mật theo tiêu chuẩn PDPA.</li>
        <li>Dữ liệu không được chia sẻ cho bên thứ ba khi chưa được đồng ý.</li>
        <li>Mọi tranh chấp được giải quyết theo pháp luật Việt Nam hiện hành.</li>
      </ul>`
    },
  ]
};

// Master events repository for detail pages
const MASTER_EVENTS_DATA = {
  1: EVENT_1,
  2: {
    id: 2,
    name: "Vietnam AI Summit 2026: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số",
    category: "Hội thảo & Tech",
    categoryLabel: "Hội thảo & Tech",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=90",
    dateStart: new Date("2026-11-22T08:30:00"),
    dateEnd: new Date("2026-11-22T17:30:00"),
    venue: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    venueAddress: "Đại lộ Thăng Long, Mễ Trì, Nam Từ Liêm, Hà Nội",
    mapsUrl: "https://maps.google.com/?q=Trung+tâm+Hội+nghị+Quốc+gia,+Hà+Nội",
    format: "offline",
    organizer: "TechVentures Vietnam",
    orgAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    orgEvents: 18,
    orgFollowers: "22.5K",
    orgRating: "4.9",
    capacity: 1200,
    registered: 980,
    isHot: true,
    price: 350000,
    saleEnds: new Date("2026-11-21T23:59:00"),
    description: `
      <p><strong>Vietnam AI Summit 2026</strong> là diễn đàn công nghệ đỉnh cao quy tụ hơn 50 chuyên gia hàng đầu về Trí tuệ nhân tạo (AI), Machine Learning, Robotics và Autonomous Systems từ Google, Microsoft, OpenAI và các tập đoàn tiên phong.</p>
      <p>Sự kiện tập trung vào các giải pháp Generative AI ứng dụng thực tiễn trong tài chính, y tế, thương mại điện tử và sản xuất thông minh tại Đông Nam Á.</p>
    `,
    highlights: [
      { icon: "🤖", label: "Chuyên gia AI", value: "50+ Diễn giả quốc tế" },
      { icon: "🏛️", label: "Khán phòng", value: "Hội trường 1.500 chỗ" },
      { icon: "💡", label: "Keynotes", value: "8 Chủ đề đột phá" },
      { icon: "🤝", label: "Networking", value: "Tiệc kết nối Doanh nghiệp" },
      { icon: "📱", label: "Demo Zone", value: "20+ Gian hàng AI Tech" }
    ],
    agenda: [
      {
        day: "Chủ nhật, 22/11/2026",
        items: [
          { time: "08:00 – 08:30", title: "Đón khách & Check-in QR", desc: "Nhận thẻ đeo hội nghị và tài liệu độc quyền" },
          { time: "08:30 – 10:00", title: "Khai mạc & Keynote: Kỷ nguyên GenAI", desc: "Xu hướng AI đa phương thức và tự động hóa toàn diện", speaker: "Dr. Andrew Nguyen (Google DeepMind)" },
          { time: "10:15 – 12:00", title: "Panel Discussion: AI trong Doanh nghiệp VN", desc: "Kinh nghiệm triển khai và tối ưu chi phí hạ tầng GPU", speaker: "Các CTO & AI Leaders hàng đầu" },
          { time: "13:30 – 15:30", title: "Chuyên đề: Autonomous Agents & LLMs", desc: "Thực hành xây dựng AI Agent tự trị trong production", speaker: "Chuyên gia Microsoft Research" },
          { time: "16:00 – 17:30", title: "Pitching & Bế mạc Hội thảo", desc: "Trao giải sáng kiến AI xuất sắc nhất năm 2026" }
        ]
      }
    ],
    lineup: [
      { name: "Dr. Andrew Nguyen", role: "Keynote Speaker", genre: "Generative AI", color: "#0053cc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Elena Rostova", role: "AI Ethicist", genre: "Safety & Governance", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Trần Minh Trí", role: "CTO FinTech", genre: "FinTech & Banking", color: "#059669", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" }
    ],
    tickets: [
      {
        id: "standard",
        name: "Vé Tiêu Chuẩn (Standard Pass)",
        price: 350000,
        originalPrice: 500000,
        maxPerOrder: 4,
        remaining: 180,
        status: "open",
        benefits: ["Tham dự toàn bộ các phiên Keynote", "Bộ tài liệu hội nghị điện tử", "Teabreak giữa giờ"],
        disabledBenefits: ["Tiệc trưa VIP Networking", "Giao lưu riêng với diễn giả"]
      },
      {
        id: "vip",
        name: "Vé VIP Networking Pass",
        price: 850000,
        originalPrice: 1200000,
        maxPerOrder: 2,
        remaining: 25,
        status: "almost",
        benefits: ["Ghế ngồi hàng đầu Hội trường", "Tiệc Buffet trưa kết nối Doanh nghiệp", "Gặp gỡ và trao đổi riêng với diễn giả", "Quà tặng công nghệ độc quyền"],
        disabledBenefits: []
      }
    ]
  },
  3: {
    id: 3,
    name: "Workshop Đầu Tư Tài Chính Cá Nhân F.I.R.E — Thực Chiến",
    category: "Hội thảo & Tech",
    categoryLabel: "Hội thảo & Tech",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=90",
    dateStart: new Date("2026-11-28T14:00:00"),
    dateEnd: new Date("2026-11-28T18:00:00"),
    venue: "SECC Quận 7, TP. Hồ Chí Minh",
    venueAddress: "799 Nguyễn Văn Linh, Tân Phú, Quận 7, TP.HCM",
    mapsUrl: "https://maps.google.com/?q=SECC+Quận+7,+TP.HCM",
    format: "offline",
    organizer: "FinEdu Hub",
    orgAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80",
    orgEvents: 12,
    orgFollowers: "9.2K",
    orgRating: "4.8",
    capacity: 300,
    registered: 285,
    isHot: false,
    price: 200000,
    saleEnds: new Date("2026-11-27T23:59:00"),
    description: `
      <p>Workshop thực chiến xây dựng lộ trình Độc lập Tài chính & Nghỉ hưu sớm (F.I.R.E). Chương trình cung cấp công cụ tính toán dòng tiền, phân bổ tài sản thông minh và quản trị rủi ro đầu tư.</p>
    `,
    highlights: [
      { icon: "📈", label: "Chiến lược", value: "F.I.R.E Thực chiến" },
      { icon: "💼", label: "Diễn giả", value: "Chuyên gia quỹ 15+ năm" },
      { icon: "📊", label: "Tài liệu", value: "File Excel quản lý tài sản" }
    ],
    agenda: [
      {
        day: "Thứ 7, 28/11/2026",
        items: [
          { time: "13:30 – 14:00", title: "Check-in & Ổn định chỗ ngồi" },
          { time: "14:00 – 15:30", title: "Công thức F.I.R.E & Thiết lập dòng tiền thụ động", speaker: "Chuyên gia FinEdu" },
          { time: "15:45 – 17:30", title: "Thực hành xây dựng danh mục đầu tư cá nhân", speaker: "Cố vấn tài chính độc lập" },
          { time: "17:30 – 18:00", title: "Hỏi đáp Q&A cùng diễn giả" }
        ]
      }
    ],
    lineup: [],
    tickets: [
      {
        id: "fire_std",
        name: "Vé Tham Dự Hội Thảo",
        price: 200000,
        originalPrice: 250000,
        maxPerOrder: 2,
        remaining: 15,
        status: "almost",
        benefits: ["Vào cổng tham dự", "Tài liệu File mẫu Excel F.I.R.E", "Teabreak giao lưu"],
        disabledBenefits: []
      }
    ]
  },
  4: {
    id: 4,
    name: "Lễ Hội Ẩm Thực Đường Phố & Bia Thủ Công Sài Gòn 2026",
    category: "Ẩm thực & Đời sống",
    categoryLabel: "Ẩm thực & Đời sống",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=90",
    dateStart: new Date("2026-12-05T16:00:00"),
    dateEnd: new Date("2026-12-07T22:00:00"),
    venue: "Công viên Bến Bạch Đằng, Quận 1, TP.HCM",
    venueAddress: "Tôn Đức Thắng, Bến Nghé, Quận 1, TP.HCM",
    mapsUrl: "https://maps.google.com/?q=Bến+Bạch+Đằng,+Quận+1,+TP.HCM",
    format: "offline",
    organizer: "Saigon Foodies Community",
    orgAvatar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80",
    orgEvents: 8,
    orgFollowers: "15K",
    orgRating: "4.7",
    capacity: 3500,
    registered: 2100,
    isHot: true,
    price: 150000,
    saleEnds: new Date("2026-12-04T23:59:00"),
    description: `
      <p>Lễ hội ẩm thực đường phố và bia thủ công quy tụ hơn 100 gian hàng món ăn đặc sản ba miền cùng 20 thương hiệu bia thủ công hàng đầu Việt Nam.</p>
    `,
    highlights: [
      { icon: "🍜", label: "Ẩm thực", value: "100+ Món đường phố" },
      { icon: "🍺", label: "Bia thủ công", value: "20 Nhà nấu bia hàng đầu" },
      { icon: "🎸", label: "Âm nhạc", value: "Live Acoustic mỗi tối" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "food_pass",
        name: "Vé Vào Cổng + 2 Ly Bia Thủ Công",
        price: 150000,
        originalPrice: 180000,
        maxPerOrder: 6,
        remaining: 450,
        status: "open",
        benefits: ["Vào cổng 1 ngày lễ hội", "Tặng 2 coupon bia thủ công", "Tham gia bốc thăm may mắn"],
        disabledBenefits: []
      }
    ]
  },
  5: {
    id: 5,
    name: "Triển Lãm Nghệ Thuật Đa Giác Quan: Vincent van Gogh Alive",
    category: "Nghệ thuật & Triển lãm",
    categoryLabel: "Nghệ thuật & Triển lãm",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1600&q=90",
    dateStart: new Date("2026-12-12T09:00:00"),
    dateEnd: new Date("2026-12-20T21:00:00"),
    venue: "Trung tâm Nghệ thuật VCCA, Hà Nội",
    venueAddress: "B1-R3, Vincom Mega Mall Royal City, 72A Nguyễn Trãi, Thanh Xuân, Hà Nội",
    mapsUrl: "https://maps.google.com/?q=VCCA+Royal+City,+Hà+Nội",
    format: "offline",
    organizer: "VCCA Arts",
    orgAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    orgEvents: 20,
    orgFollowers: "30K",
    orgRating: "4.9",
    capacity: 1500,
    registered: 1450,
    isHot: false,
    price: 280000,
    saleEnds: new Date("2026-12-11T23:59:00"),
    description: `
      <p>Không gian trải nghiệm công nghệ 3D mapping và âm thanh vòm tái hiện hơn 3.000 kiệt tác của danh họa Vincent van Gogh, mang đến xúc cảm thị giác thăng hoa chưa từng có.</p>
    `,
    highlights: [
      { icon: "🎨", label: "Kiệt tác", value: "3.000+ Tác phẩm trình chiếu" },
      { icon: "📽️", label: "Công nghệ", value: "360° Sensory Mapping" },
      { icon: "📸", label: "Check-in", value: "Khu Phòng Hoa Hướng Dương" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "art_std",
        name: "Vé Tham Quan Triển Lãm",
        price: 280000,
        originalPrice: 350000,
        maxPerOrder: 4,
        remaining: 50,
        status: "almost",
        benefits: ["Tham quan trọn vẹn 6 khu vực trải nghiệm", "Thời gian lưu lại không giới hạn", "Tặng postcard kỷ niệm"],
        disabledBenefits: []
      }
    ]
  },
  6: {
    id: 6,
    name: "Giải Chạy Bán Marathon Đêm Đà Lạt — Dalat Night Run 2026",
    category: "Thể thao & Marathon",
    categoryLabel: "Thể thao & Marathon",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=1600&q=90",
    dateStart: new Date("2026-11-25T19:00:00"),
    dateEnd: new Date("2026-11-25T23:30:00"),
    venue: "Quảng trường Lâm Viên & Hồ Xuân Hương, Đà Lạt",
    venueAddress: "Đường Trần Quốc Toản, Phường 1, TP. Đà Lạt",
    mapsUrl: "https://maps.google.com/?q=Quảng+trường+Lâm+Viên,+Đà+Lạt",
    format: "offline",
    organizer: "Dalat Athletics Association",
    orgAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    orgEvents: 6,
    orgFollowers: "18K",
    orgRating: "4.8",
    capacity: 2500,
    registered: 2320,
    isHot: true,
    price: 490000,
    saleEnds: new Date("2026-11-24T23:59:00"),
    description: `
      <p>Cung đường chạy ven hồ Xuân Hương thơ mộng trong không khí se lạnh huyền ảo của phố núi Đà Lạt ban đêm. Trải nghiệm ánh sáng neon và âm nhạc sôi động suốt đường đua.</p>
    `,
    highlights: [
      { icon: "🏃", label: "Cự ly", value: "5km / 10km / 21km" },
      { icon: "🏅", label: "Huy chương", value: "Huy chương đúc kim loại tinh xảo" },
      { icon: "🎽", label: "Race Kit", value: "Áo thi đấu + Đèn chạy bộ Neon" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "run_21k",
        name: "Bib Chạy Bán Marathon 21KM",
        price: 490000,
        originalPrice: 600000,
        maxPerOrder: 2,
        remaining: 65,
        status: "almost",
        benefits: ["Bib gắn chip đo thành tích quốc tế", "Race kit áo thi đấu & quà tặng", "Huy chương về đích (Finisher Medal)", "Trạm tiếp nước và y tế cao cấp"],
        disabledBenefits: []
      }
    ]
  },
  7: {
    id: 7,
    name: "Countdown New Year 2027 — Đại Nhạc Hội Chào Năm Mới",
    category: "Âm nhạc & Concert",
    categoryLabel: "Âm nhạc & Concert",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1600&q=90",
    dateStart: new Date("2026-12-31T20:00:00"),
    dateEnd: new Date("2027-01-01T00:30:00"),
    venue: "Phố đi bộ Nguyễn Huệ, TP.HCM",
    venueAddress: "Nguyễn Huệ, Bến Nghé, Quận 1, TP.HCM",
    mapsUrl: "https://maps.google.com/?q=Phố+đi+bộ+Nguyễn+Huệ,+TP.HCM",
    format: "offline",
    organizer: "EventHub & VTV",
    orgAvatar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80",
    orgEvents: 10,
    orgFollowers: "50K",
    orgRating: "4.9",
    capacity: 10000,
    registered: 8800,
    isHot: true,
    price: 650000,
    saleEnds: new Date("2026-12-30T23:59:00"),
    description: `
      <p>Đêm hội chào đón năm mới 2027 hoành tráng nhất Việt Nam với màn pháo hoa đếm ngược bùng nổ cùng dàn nghệ sĩ quốc tế và trong nước.</p>
    `,
    highlights: [
      { icon: "🎆", label: "Pháo hoa", value: "Countdown rực rỡ" },
      { icon: "🎤", label: "Nghệ sĩ", value: "Top 20 ca sĩ V-Pop" },
      { icon: "🔊", label: "Âm thanh", value: "Sân khấu Arena 360" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "ny_fanzone",
        name: "Vé Fanzone Sát Sân Khấu",
        price: 650000,
        originalPrice: 850000,
        maxPerOrder: 4,
        remaining: 120,
        status: "open",
        benefits: ["Vị trí Fanzone trực diện sân khấu", "Áo thun kỷ niệm Countdown 2027", "Vòng tay LED đồng bộ ánh sáng"],
        disabledBenefits: []
      }
    ]
  },
  8: {
    id: 8,
    name: "Google I/O Extended Việt Nam 2026 — Developer Summit",
    category: "Hội thảo & Tech",
    categoryLabel: "Hội thảo & Tech",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=90",
    dateStart: new Date("2026-12-10T09:00:00"),
    dateEnd: new Date("2026-12-10T17:00:00"),
    venue: "Toà nhà UOB, Quận 1, TP.HCM",
    venueAddress: "17 Lê Duẩn, Bến Nghé, Quận 1, TP.HCM",
    mapsUrl: "https://maps.google.com/?q=Toà+nhà+UOB,+Quận+1,+TP.HCM",
    format: "offline",
    organizer: "GDG Vietnam",
    orgAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    orgEvents: 25,
    orgFollowers: "35K",
    orgRating: "4.9",
    capacity: 800,
    registered: 650,
    isHot: false,
    price: 0,
    saleEnds: new Date("2026-12-09T23:59:00"),
    description: `
      <p>Cộng đồng lập trình viên Google Developer Groups (GDG) chia sẻ các công nghệ mới nhất về Gemini, Android, Cloud và WebAssembly.</p>
    `,
    highlights: [
      { icon: "🌐", label: "Hệ sinh thái", value: "Google Tech Stack" },
      { icon: "💻", label: "Codelabs", value: "Hands-on Workshop" },
      { icon: "🎁", label: "Swag", value: "Google Developer Merch" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "gdg_free",
        name: "Vé Miễn Phí (Developer Pass)",
        price: 0,
        originalPrice: 0,
        maxPerOrder: 1,
        remaining: 85,
        status: "open",
        benefits: ["Tham dự trọn vẹn sự kiện", "Teabreak & Quà tặng Google Swag", "Cấp chứng nhận tham dự điện tử"],
        disabledBenefits: []
      }
    ]
  },
  9: {
    id: 9,
    name: "Lễ Hội EDM VinaFest 2026 — Đêm Nhạc Điện Tử",
    category: "Nightlife & Lễ hội",
    categoryLabel: "Nightlife & Lễ hội",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=90",
    dateStart: new Date("2026-12-19T21:00:00"),
    dateEnd: new Date("2026-12-20T03:00:00"),
    venue: "GEM Center, Quận 1, TP.HCM",
    venueAddress: "8 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1, TP.HCM",
    mapsUrl: "https://maps.google.com/?q=GEM+Center,+Quận+1,+TP.HCM",
    format: "offline",
    organizer: "VinaFest Entertainment",
    orgAvatar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80",
    orgEvents: 14,
    orgFollowers: "28K",
    orgRating: "4.8",
    capacity: 3000,
    registered: 1800,
    isHot: true,
    price: 850000,
    saleEnds: new Date("2026-12-18T23:59:00"),
    description: `
      <p>Đêm hội âm nhạc điện tử bùng nổ với sự góp mặt của các DJ quốc tế và hệ thống laser mapping tối tân.</p>
    `,
    highlights: [
      { icon: "🎧", label: "DJs", value: "Top 100 DJ Mag" },
      { icon: "⚡", label: "Visuals", value: "Laser & LED Mapping" },
      { icon: "🍸", label: "Open Bar", value: "Khu vực thức uống cao cấp" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "edm_ga",
        name: "Vé GA Sàn Nhảy",
        price: 850000,
        originalPrice: 1100000,
        maxPerOrder: 4,
        remaining: 200,
        status: "open",
        benefits: ["Vào cổng sàn nhảy chính", "1 Đồ uống chào mừng", "Wristband dạ quang"],
        disabledBenefits: []
      }
    ]
  },
  10: {
    id: 10,
    name: "Hội Thảo UX Design Thinking — Lấy Người Dùng Làm Trung Tâm",
    category: "Hội thảo & Tech",
    categoryLabel: "Hội thảo & Tech",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1600&q=90",
    dateStart: new Date("2026-11-30T09:00:00"),
    dateEnd: new Date("2026-11-30T16:00:00"),
    venue: "Online (Zoom Webinar)",
    venueAddress: "Hội nghị trực tuyến Zoom (Đường link sẽ gửi qua email)",
    mapsUrl: "https://maps.google.com/?q=Zoom+Webinar",
    format: "online",
    organizer: "UX Vietnam Community",
    orgAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    orgEvents: 16,
    orgFollowers: "12K",
    orgRating: "4.9",
    capacity: 500,
    registered: 342,
    isHot: false,
    price: 0,
    saleEnds: new Date("2026-11-29T23:59:00"),
    description: `
      <p>Hội thảo trực tuyến chia sẻ phương pháp thiết kế sản phẩm số hiện đại, tối ưu trải nghiệm người dùng và chuyển đổi số.</p>
    `,
    highlights: [
      { icon: "💻", label: "Định dạng", value: "Online Webinar" },
      { icon: "📐", label: "Phương pháp", value: "Design Thinking & Sprint" },
      { icon: "📄", label: "Tài liệu", value: "Bộ UI Kit & Template" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "ux_free",
        name: "Vé Tham Dự Trực Tuyến",
        price: 0,
        originalPrice: 0,
        maxPerOrder: 1,
        remaining: 158,
        status: "open",
        benefits: ["Link tham gia phòng Zoom trực tiếp", "Tài liệu và slide thuyết trình", "Video xem lại sau hội thảo"],
        disabledBenefits: []
      }
    ]
  },
  11: {
    id: 11,
    name: "Lễ Hội Ánh Sáng Diwali Hà Nội 2026",
    category: "Nghệ thuật & Triển lãm",
    categoryLabel: "Nghệ thuật & Triển lãm",
    image: "https://images.unsplash.com/photo-1604153297036-a6e28e9b0d7a?w=1600&q=90",
    dateStart: new Date("2026-11-15T17:00:00"),
    dateEnd: new Date("2026-11-15T22:00:00"),
    venue: "Vườn hoa Lý Thái Tổ, Hà Nội",
    venueAddress: "12 Lê Phụng Hiểu, Tràng Tiền, Hoàn Kiếm, Hà Nội",
    mapsUrl: "https://maps.google.com/?q=Vườn+hoa+Lý+Thái+Tổ,+Hà+Nội",
    format: "offline",
    organizer: "India Cultural Center HN",
    orgAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80",
    orgEvents: 5,
    orgFollowers: "8K",
    orgRating: "4.7",
    capacity: 2000,
    registered: 950,
    isHot: false,
    price: 80000,
    saleEnds: new Date("2026-11-14T23:59:00"),
    description: `
      <p>Lễ hội ánh sáng truyền thống Ấn Độ lan tỏa sắc màu văn hóa, nghệ thuật múa cổ truyền và tinh hoa ẩm thực giữa lòng Hà Nội.</p>
    `,
    highlights: [
      { icon: "🪔", label: "Văn hóa", value: "Lễ thắp đèn Diyas" },
      { icon: "💃", label: "Biểu diễn", value: "Múa Bollywood truyền thống" },
      { icon: "🍛", label: "Ẩm thực", value: "Gian hàng ẩm thực Ấn Độ" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "diwali_pass",
        name: "Vé Vào Cổng Lễ Hội",
        price: 80000,
        originalPrice: 80000,
        maxPerOrder: 4,
        remaining: 240,
        status: "open",
        benefits: ["Vào cổng sự kiện", "Tham gia lễ thắp đèn may mắn", "Thưởng thức nghệ thuật múa"],
        disabledBenefits: []
      }
    ]
  },
  12: {
    id: 12,
    name: "Iron Man Vietnam Triathlon 2026 — Nha Trang",
    category: "Thể thao & Marathon",
    categoryLabel: "Thể thao & Marathon",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1600&q=90",
    dateStart: new Date("2026-12-22T05:00:00"),
    dateEnd: new Date("2026-12-22T17:00:00"),
    venue: "Bãi biển Trần Phú, Nha Trang",
    venueAddress: "Đường Trần Phú, Lộc Thọ, TP. Nha Trang, Khánh Hòa",
    mapsUrl: "https://maps.google.com/?q=Bãi+biển+Trần+Phú,+Nha+Trang",
    format: "offline",
    organizer: "Vietnam Triathlon Federation",
    orgAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    orgEvents: 9,
    orgFollowers: "25K",
    orgRating: "4.9",
    capacity: 1500,
    registered: 1100,
    isHot: true,
    price: 2500000,
    saleEnds: new Date("2026-12-20T23:59:00"),
    description: `
      <p>Giải thi đấu 3 môn phối hợp (Bơi 1.9km, Đạp xe 90km, Chạy bộ 21.1km) theo tiêu chuẩn quốc tế diễn ra tại thành phố biển Nha Trang xinh đẹp.</p>
    `,
    highlights: [
      { icon: "🏊", label: "Bơi biển", value: "1.9 KM Vịnh Nha Trang" },
      { icon: "🚴", label: "Đạp xe", value: "90 KM Ven biển" },
      { icon: "🏃", label: "Chạy bộ", value: "21.1 KM Đích đến Quảng trường" }
    ],
    agenda: [],
    lineup: [],
    tickets: [
      {
        id: "ironman_bib",
        name: "Suất Thi Đấu Cá Nhân (Individual Bib)",
        price: 2500000,
        originalPrice: 3000000,
        maxPerOrder: 1,
        remaining: 40,
        status: "almost",
        benefits: ["Bib thi đấu gắn chip Timing quốc tế", "Bộ Race Kit cao cấp chuyên dụng", "Huy chương và áo Finisher (khi hoàn thành)", "Bảo hiểm thi đấu và y tế toàn chặng"],
        disabledBenefits: []
      }
    ]
  }
};

let EVENT = {};

function initEventData() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get('id');
  const eventId = rawId ? Number(rawId) : 1;

  // Check localStorage for customized/created events from admin
  let customEvent = null;
  try {
    const stored = JSON.parse(localStorage.getItem('eventhub_events') || '[]');
    customEvent = stored.find(e => Number(e.id) === eventId);
  } catch (e) {}

  const base = MASTER_EVENTS_DATA[eventId] || MASTER_EVENTS_DATA[1];
  if (customEvent) {
    EVENT = {
      ...base,
      ...customEvent,
      id: customEvent.id,
      name: customEvent.name || base.name,
      category: customEvent.category || base.category,
      venue: customEvent.venue || base.venue,
      price: customEvent.price !== undefined ? customEvent.price : base.price,
      image: customEvent.image || base.image,
      organizer: customEvent.organizer || base.organizer,
      dateStart: customEvent.start_date ? new Date(customEvent.start_date) : base.dateStart,
      dateEnd: customEvent.end_date ? new Date(customEvent.end_date) : base.dateEnd,
      capacity: customEvent.capacity || base.capacity,
      registered: customEvent.registered || base.registered,
      isHot: customEvent.is_hot !== undefined ? customEvent.is_hot : base.isHot
    };
  } else {
    EVENT = { ...base };
  }

  if (!(EVENT.dateStart instanceof Date)) EVENT.dateStart = new Date(EVENT.dateStart || "2026-11-20T18:30:00");
  if (!(EVENT.dateEnd instanceof Date)) EVENT.dateEnd = new Date(EVENT.dateEnd || "2026-11-20T22:00:00");
  if (!(EVENT.saleEnds instanceof Date)) EVENT.saleEnds = new Date(EVENT.dateStart.getTime() - 3600000);

  if (!EVENT.tickets || EVENT.tickets.length === 0) {
    const p = EVENT.price || 200000;
    if (p === 0) {
      EVENT.tickets = [
        {
          id: "free",
          name: "Vé Miễn Phí (Standard Free Pass)",
          price: 0,
          originalPrice: 0,
          maxPerOrder: 2,
          remaining: Math.max(10, (EVENT.capacity || 500) - (EVENT.registered || 0)),
          status: "open",
          benefits: ["Vào cổng tham dự", "Tài liệu điện tử", "Teabreak giao lưu"],
          disabledBenefits: []
        }
      ];
    } else {
      const earlyPrice = Math.round(p * 0.8 / 10000) * 10000;
      const vipPrice = Math.round(p * 2.2 / 10000) * 10000;
      EVENT.tickets = [
        {
          id: "early",
          name: "Vé Early Bird (-20%)",
          price: earlyPrice,
          originalPrice: p,
          maxPerOrder: 4,
          remaining: 45,
          status: "almost",
          benefits: ["Vào cổng sự kiện", "Vị trí ngồi tiêu chuẩn", "Voucher giảm giá đồ uống"],
          disabledBenefits: ["Khu VIP Lounge"]
        },
        {
          id: "standard",
          name: "Vé Tiêu Chuẩn (Standard Pass)",
          price: p,
          originalPrice: p,
          maxPerOrder: 4,
          remaining: Math.max(20, (EVENT.capacity || 1000) - (EVENT.registered || 0)),
          status: "open",
          benefits: ["Vào cổng sự kiện", "Vị trí ngồi tiêu chuẩn", "Bộ quà tặng lưu niệm"],
          disabledBenefits: ["Khu VIP Lounge"]
        },
        {
          id: "vip",
          name: "Vé VIP — Trải Nghiệm Cao Cấp",
          price: vipPrice,
          originalPrice: Math.round(vipPrice * 1.25 / 10000) * 10000,
          maxPerOrder: 2,
          remaining: 15,
          status: "almost",
          benefits: ["Ghế ngồi hàng đầu VIP", "Check-in lối đi ưu tiên", "Khu VIP Lounge & Buffet cao cấp"],
          disabledBenefits: []
        }
      ];
    }
  }
}

// ============================================================
// 2. STATE
// ============================================================

const edState = {
  quantities: {},      // { ticketId: count }
  saved: false,
  saleCountdownTimer: null,
};

// ============================================================
// 3. INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initEventData();
  loadUser();
  renderCover();
  renderAbout();
  renderAgenda();
  renderLineup();
  renderPolicy();
  renderLocation();
  renderOrganizer();
  renderTicketTiers();
  renderMobileTiers();
  startSaleCountdown();
  setupStickyHeader();
  setupTabScroll();
  loadSavedState();

  // Attach listener to user chip for click & keyboard accessibility
  const userChip = document.getElementById('ed-user-chip');
  if (userChip) {
    userChip.addEventListener('click', (e) => toggleUserDropdown(e));
    userChip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleUserDropdown(e);
      }
    });
  }
});

// ============================================================
// 4. AUTH
// ============================================================

const ED_USERS = {
  Admin: { id: 1, name: 'Nguyễn Bảo Khánh', email: 'khanh.admin@eventhub.vn', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80' },
  Organizer: { id: 2, name: 'Trần Quang Huy', email: 'huy.organizer@eventhub.vn', role: 'Organizer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80' },
  Staff: { id: 3, name: 'Chu Đức Duy', email: 'duy.staff@eventhub.vn', role: 'Staff', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80' },
  Guest: { id: 4, name: 'Nguyễn Văn Khang', email: 'khang.guest@gmail.com', role: 'Guest', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80' }
};

function loadUser() {
  try {
    let saved = localStorage.getItem('eventhub_user');
    if (!saved) {
      saved = JSON.stringify(ED_USERS.Admin);
      localStorage.setItem('eventhub_user', saved);
    }
    if (saved) {
      const user = JSON.parse(saved);
      if (user && user.name) {
        document.getElementById('ed-auth-guest').style.display = 'none';
        const el = document.getElementById('ed-auth-user');
        el.style.display = 'flex';
        document.getElementById('ed-user-avatar').src = user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80';
        document.getElementById('ed-user-name').textContent = user.name.split(' ').pop();

        // Dropdown info
        const ddName = document.getElementById('ed-dropdown-name');
        const ddEmail = document.getElementById('ed-dropdown-email');
        const ddRole = document.getElementById('ed-dropdown-role');
        if (ddName) ddName.textContent = user.name;
        if (ddEmail) ddEmail.textContent = user.email || 'user@eventhub.vn';
        if (ddRole) {
          ddRole.textContent = user.role || 'Member';
          ddRole.className = 'ed-role-badge ' + (user.role || '').toLowerCase();
        }

        // Role permissions
        const role = (user.role || '').toLowerCase();
        const hasAdminAccess = (role === 'admin' || role === 'organizer');
        const navCreate = document.getElementById('ed-nav-create');
        const navAdmin  = document.getElementById('ed-nav-admin');
        const ddCreate  = document.getElementById('ed-dd-create');
        const ddAdmin   = document.getElementById('ed-dd-admin');

        if (navCreate) navCreate.style.display = hasAdminAccess ? 'inline-flex' : 'none';
        if (navAdmin)  navAdmin.style.display  = hasAdminAccess ? 'inline-flex' : 'none';
        if (ddCreate)  ddCreate.style.display  = hasAdminAccess ? 'flex' : 'none';
        if (ddAdmin)   ddAdmin.style.display   = hasAdminAccess ? 'flex' : 'none';
      }
    }
  } catch (e) { /* ignore */ }
}

function switchRoleQuickly(roleName) {
  const profile = ED_USERS[roleName] || ED_USERS.Guest;
  localStorage.setItem('eventhub_user', JSON.stringify(profile));
  loadUser();
  const dropdown = document.getElementById('ed-user-dropdown');
  const chip = document.getElementById('ed-user-chip');
  if (dropdown) dropdown.style.display = 'none';
  if (chip) chip.classList.remove('open');
  showToast(`⚡ Đã chuyển sang vai trò: ${profile.name} (${profile.role})`);
}

function toggleUserDropdown(e) {
  if (e) {
    e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  const dropdown = document.getElementById('ed-user-dropdown');
  const chip = document.getElementById('ed-user-chip');
  if (!dropdown) return;
  const isHidden = dropdown.style.display === 'none' || !dropdown.style.display;
  dropdown.style.display = isHidden ? 'block' : 'none';
  if (chip) chip.classList.toggle('open', isHidden);
}

document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('ed-user-dropdown');
  const chip = document.getElementById('ed-user-chip');
  if (dropdown && !dropdown.contains(e.target) && !chip?.contains(e.target)) {
    dropdown.style.display = 'none';
    if (chip) chip.classList.remove('open');
  }
});

function handleLogout() {
  localStorage.removeItem('eventhub_user');
  showToast('👋 Đã đăng xuất');
  setTimeout(() => window.location.reload(), 600);
}

// ============================================================
// 5. COVER
// ============================================================

function renderCover() {
  // Background image
  document.getElementById('ed-cover-bg').style.backgroundImage = `url('${EVENT.image}')`;

  // Breadcrumb + title
  document.getElementById('ed-bc-name').textContent = truncate(EVENT.name, 40);
  document.title = `${EVENT.name} — EventHub`;
  document.getElementById('ed-cover-title').textContent = EVENT.name;

  // Date range
  document.getElementById('ed-cover-date').textContent =
    `${formatDT(EVENT.dateStart)} → ${formatTime(EVENT.dateEnd)}`;

  // Venue
  document.getElementById('ed-cover-venue').textContent = EVENT.venue;

  // Organizer
  document.getElementById('ed-cover-org').textContent = EVENT.organizer;

  // Sold progress
  const pct = Math.round(EVENT.registered / EVENT.capacity * 100);
  document.getElementById('ed-cover-sold').textContent =
    `${EVENT.registered.toLocaleString('vi-VN')} / ${EVENT.capacity.toLocaleString('vi-VN')} (${pct}%)`;

  // Badges
  const pct2 = Math.round(EVENT.registered / EVENT.capacity * 100);
  const statusLabel = pct2 >= 100 ? 'Hết vé' : pct2 >= 85 ? 'Sắp hết vé' : 'Đang mở bán';
  const statusClass = pct2 >= 100 ? 'ed-cb-sold' : pct2 >= 85 ? 'ed-cb-almost' : 'ed-cb-status';
  document.getElementById('ed-cover-badges').innerHTML = `
    <span class="ed-cb ed-cb-cat">${EVENT.category}</span>
    ${EVENT.isHot ? '<span class="ed-cb ed-cb-hot">⭐ HOT</span>' : ''}
    <span class="ed-cb ${statusClass}">${statusLabel}</span>
    ${EVENT.format === 'online' ? '<span class="ed-cb ed-cb-format">💻 Online</span>' : ''}
  `;

  // Min price
  const availableTickets = (EVENT.tickets || []).filter(t => t.status !== 'sold');
  const minPrice = availableTickets.length > 0 ? Math.min(...availableTickets.map(t => t.price)) : (EVENT.price || 0);
  document.getElementById('ed-min-price').textContent = formatVND(minPrice);
  document.getElementById('ed-mobile-price').textContent = formatVND(minPrice);
}

// ============================================================
// 6. ABOUT
// ============================================================

function renderAbout() {
  document.getElementById('ed-about-content').innerHTML = EVENT.description;
  document.getElementById('ed-highlights').innerHTML = EVENT.highlights.map(h => `
    <div class="ed-highlight-item">
      <div class="ed-hi-icon">${h.icon}</div>
      <div>
        <div class="ed-hi-label">${h.label}</div>
        <div class="ed-hi-value">${h.value}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// 7. AGENDA
// ============================================================

function renderAgenda() {
  const container = document.getElementById('ed-agenda-content');
  const section = document.getElementById('agenda');
  if (!container) return;
  if (!EVENT.agenda || EVENT.agenda.length === 0) {
    if (section) section.style.display = 'none';
    const tab = document.querySelector('.ed-tab[href="#agenda"]');
    if (tab) tab.style.display = 'none';
    return;
  }
  if (section) section.style.display = '';
  container.innerHTML = EVENT.agenda.map(day => `
    <div class="ed-agenda-day">
      <div class="ed-agenda-day-label">📅 ${day.day}</div>
      ${day.items.map(item => `
        <div class="ed-agenda-item">
          <div class="ed-agenda-time">⏰ ${item.time}</div>
          <div class="ed-agenda-item-title">${item.title}</div>
          ${item.desc ? `<div class="ed-agenda-item-desc">${item.desc}</div>` : ''}
          ${item.speaker ? `<span class="ed-agenda-speaker">🎤 ${item.speaker}</span>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');
}

// ============================================================
// 8. LINEUP
// ============================================================

function renderLineup() {
  const container = document.getElementById('ed-lineup-content');
  const section = document.getElementById('lineup');
  if (!container) return;
  if (!EVENT.lineup || EVENT.lineup.length === 0) {
    if (section) section.style.display = 'none';
    const tab = document.querySelector('.ed-tab[href="#lineup"]');
    if (tab) tab.style.display = 'none';
    return;
  }
  if (section) section.style.display = '';
  container.innerHTML = EVENT.lineup.map(artist => `
    <div class="ed-lineup-card">
      <div class="ed-lineup-img-wrap">
        <img
          class="ed-lineup-img"
          src="${artist.image}"
          alt="${artist.name}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80'"
        >
        <span class="ed-lineup-role" style="background:${artist.color}cc">${artist.role}</span>
      </div>
      <div class="ed-lineup-info">
        <div class="ed-lineup-name">${artist.name}</div>
        <div class="ed-lineup-genre">${artist.genre}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// 9. POLICY (Accordion)
// ============================================================

function renderPolicy() {
  document.getElementById('ed-policy-content').innerHTML = `
    <div class="ed-policy-accordion">
      ${EVENT.policy.map((item, i) => `
        <div class="ed-policy-item">
          <button class="ed-policy-btn ${i === 0 ? 'open' : ''}" onclick="togglePolicy(this)">
            <span>${item.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          <div class="ed-policy-body ${i === 0 ? 'open' : ''}">${item.body}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function togglePolicy(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

// ============================================================
// 10. LOCATION
// ============================================================

function renderLocation() {
  document.getElementById('ed-location-content').innerHTML = `
    <!-- Map placeholder (real app: Google Maps embed or Leaflet) -->
    <div class="ed-map-frame">
      <div class="ed-map-placeholder">
        <div class="ed-map-pin">📍</div>
        <div class="ed-map-label">${EVENT.venue}</div>
        <div style="font-size:.78rem;color:#9EA5AD">${EVENT.venueAddress}</div>
        <a href="${EVENT.mapsUrl}" target="_blank" rel="noopener"
           style="margin-top:8px;font-size:.82rem;color:#0194F3;font-weight:600;text-decoration:underline">
          Mở Google Maps →
        </a>
      </div>
    </div>

    <div class="ed-location-info">
      <div class="ed-location-field">
        <div class="ed-lf-label">Tên địa điểm</div>
        <div class="ed-lf-value">${EVENT.venue}</div>
      </div>
      <div class="ed-location-field">
        <div class="ed-lf-label">Địa chỉ đầy đủ</div>
        <div class="ed-lf-value">${EVENT.venueAddress}</div>
      </div>
      <div class="ed-location-field">
        <div class="ed-lf-label">Thành phố</div>
        <div class="ed-lf-value">📍 Hà Nội, Việt Nam</div>
      </div>
      <div class="ed-location-field">
        <div class="ed-lf-label">Hình thức</div>
        <div class="ed-lf-value">🏟️ Trực tiếp (Outdoor)</div>
      </div>
    </div>

    <div class="ed-map-actions">
      <a href="${EVENT.mapsUrl}" target="_blank" rel="noopener" class="ed-map-btn ed-map-btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        Mở Google Maps
      </a>
      <button class="ed-map-btn ed-map-btn-outline" onclick="copyAddress()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        Sao chép địa chỉ
      </button>
    </div>
  `;
}

function copyAddress() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(`${EVENT.venue}, ${EVENT.venueAddress}`);
    showToast('📋 Đã sao chép địa chỉ', 'success');
  }
}

// ============================================================
// 11. ORGANIZER
// ============================================================

function renderOrganizer() {
  document.getElementById('ed-organizer-content').innerHTML = `
    <div class="ed-org-header">
      <div class="ed-org-avatar">
        <img src="${EVENT.orgAvatar}" alt="${EVENT.organizer}"
          onerror="this.parentElement.textContent='🎪'">
      </div>
      <div>
        <div class="ed-org-name">${EVENT.organizer}</div>
        <div class="ed-org-type">🏢 Đơn vị tổ chức sự kiện chuyên nghiệp</div>
      </div>
      <div class="ed-org-actions">
        <button class="ed-btn ed-btn-primary ed-btn-sm" onclick="followOrg()">
          + Theo dõi
        </button>
        <button class="ed-btn ed-btn-sm" style="border:1.5px solid var(--border);background:#fff"
          onclick="contactOrg()">
          ✉️ Liên hệ
        </button>
      </div>
    </div>

    <div class="ed-org-stats">
      <div class="ed-org-stat">
        <div class="ed-org-stat-num">${EVENT.orgEvents}</div>
        <div class="ed-org-stat-label">Sự kiện đã tổ chức</div>
      </div>
      <div class="ed-org-stat">
        <div class="ed-org-stat-num">${EVENT.orgFollowers}</div>
        <div class="ed-org-stat-label">Người theo dõi</div>
      </div>
      <div class="ed-org-stat">
        <div class="ed-org-stat-num">⭐ ${EVENT.orgRating}</div>
        <div class="ed-org-stat-label">Đánh giá trung bình</div>
      </div>
    </div>

    <p class="ed-org-desc">
      <strong>${EVENT.organizer}</strong> là đơn vị sản xuất sự kiện âm nhạc quốc tế có trụ sở tại
      Hà Nội, với hơn 15 năm kinh nghiệm tổ chức các concert và lễ hội âm nhạc tại Việt Nam và
      khu vực Đông Nam Á. Đơn vị đã hợp tác với hơn 200 nghệ sĩ trong và ngoài nước.
    </p>
  `;
}

function followOrg() { showToast('✅ Đã theo dõi Monsoon Production', 'success'); }
function contactOrg() { showToast('✉️ Mở form liên hệ ban tổ chức', 'info'); }

// ============================================================
// 12. TICKET TIERS
// ============================================================

function renderTicketTiers() {
  const container = document.getElementById('ed-ticket-tiers');
  container.innerHTML = EVENT.tickets.map(t => renderTierHTML(t, 'desktop')).join('');
}

function renderMobileTiers() {
  const container = document.getElementById('ed-mobile-tiers');
  if (!container) return;
  container.innerHTML = EVENT.tickets.map(t => renderTierHTML(t, 'mobile')).join('');
}

function renderTierHTML(t, context) {
  const qty = edState.quantities[t.id] || 0;
  const isSold = t.status === 'sold';
  const isAlmost = t.status === 'almost';
  const isSelected = qty > 0;
  const isFree = t.price === 0;

  const statusBadgeClass = isSold ? 'ed-ts-sold' : isAlmost ? 'ed-ts-almost' : 'ed-ts-open';
  const statusLabel = isSold ? '🔴 Hết vé' : isAlmost ? '🔥 Sắp hết' : '✅ Còn vé';

  const priceHTML = isFree
    ? `<div class="ed-tier-price-free">MIỄN PHÍ</div>`
    : `<div class="ed-tier-price-label">/ vé</div>
       <div class="ed-tier-price-amount">${formatVND(t.price)}</div>
       ${t.originalPrice > t.price
         ? `<div class="ed-tier-price-orig">${formatVND(t.originalPrice)}</div>` : ''}`;

  const benefitsHTML = [
    ...t.benefits.map(b => `<div class="ed-benefit">${b}</div>`),
    ...t.disabledBenefits.map(b => `<div class="ed-benefit ed-benefit-strike">${b}</div>`)
  ].join('');

  const remainingText = isSold
    ? 'Đã hết vé'
    : isAlmost
    ? `🔥 Còn ${t.remaining} vé`
    : `Còn ${t.remaining} vé`;

  const prefix = context === 'mobile' ? 'm_' : '';

  return `
    <div class="ed-tier ${isSold ? 'ed-tier-sold' : ''} ${isSelected ? 'ed-tier-selected' : ''}"
         id="${prefix}tier-${t.id}">
      <div class="ed-tier-top">
        <div class="ed-tier-info">
          <div class="ed-tier-name-row">
            <span class="ed-tier-name">${t.name}</span>
            <span class="ed-tier-status-badge ${statusBadgeClass}">${statusLabel}</span>
          </div>
          <div class="ed-tier-benefits">${benefitsHTML}</div>
        </div>
        <div class="ed-tier-price">${priceHTML}</div>
      </div>

      <div class="ed-tier-bottom">
        <span class="ed-tier-remaining ${isAlmost ? 'urgent' : ''}">${remainingText}</span>
        <div class="ed-stepper" id="${prefix}stepper-${t.id}">
          <button class="ed-stepper-btn"
            onclick="changeQty('${t.id}', -1, '${context}')"
            ${qty <= 0 || isSold ? 'disabled' : ''}
            aria-label="Giảm số lượng">−</button>
          <div class="ed-stepper-val" id="${prefix}qty-${t.id}">${qty}</div>
          <button class="ed-stepper-btn"
            onclick="changeQty('${t.id}', 1, '${context}')"
            ${qty >= t.maxPerOrder || isSold ? 'disabled' : ''}
            aria-label="Tăng số lượng">+</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// 13. QUANTITY STEPPER — Core logic
// ============================================================

function changeQty(ticketId, delta, context) {
  const ticket = EVENT.tickets.find(t => t.id === ticketId);
  if (!ticket || ticket.status === 'sold') return;

  const current = edState.quantities[ticketId] || 0;
  const next = Math.max(0, Math.min(ticket.maxPerOrder, current + delta));
  edState.quantities[ticketId] = next;

  // Update both desktop & mobile steppers in sync
  updateStepper(ticketId, next, ticket, 'desktop');
  updateStepper(ticketId, next, ticket, 'mobile');

  updateOrderSummary();
  updateCTAButton();
}

function updateStepper(ticketId, qty, ticket, context) {
  const prefix = context === 'mobile' ? 'm_' : '';
  const qtyEl   = document.getElementById(`${prefix}qty-${ticketId}`);
  const tierEl  = document.getElementById(`${prefix}tier-${ticketId}`);
  const stepEl  = document.getElementById(`${prefix}stepper-${ticketId}`);
  if (!qtyEl || !tierEl) return;

  qtyEl.textContent = qty;

  // Update tier selection highlight
  tierEl.classList.toggle('ed-tier-selected', qty > 0);

  // Update stepper button states
  if (stepEl) {
    const minusBtn = stepEl.querySelector('.ed-stepper-btn:first-child');
    const plusBtn  = stepEl.querySelector('.ed-stepper-btn:last-child');
    if (minusBtn) minusBtn.disabled = qty <= 0;
    if (plusBtn)  plusBtn.disabled  = qty >= ticket.maxPerOrder;
  }
}

// ============================================================
// 14. ORDER SUMMARY
// ============================================================

function updateOrderSummary() {
  const hasAny = Object.values(edState.quantities).some(q => q > 0);
  const summaryEl = document.getElementById('ed-order-summary');
  if (summaryEl) summaryEl.style.display = hasAny ? 'block' : 'none';

  let subtotal = 0;
  const lines = [];

  EVENT.tickets.forEach(ticket => {
    const qty = edState.quantities[ticket.id] || 0;
    if (qty === 0) return;
    const lineTotal = ticket.price * qty;
    subtotal += lineTotal;
    lines.push({ name: ticket.name, qty, price: ticket.price, total: lineTotal });
  });

  // Render order lines
  const linesEl = document.getElementById('ed-order-lines');
  if (linesEl) {
    linesEl.innerHTML = lines.map(l => `
      <div class="ed-order-line">
        <span>${l.name} × ${l.qty}</span>
        <strong>${formatVND(l.total)}</strong>
      </div>
    `).join('');
  }

  // Subtotal + fee (0% for now — real app would apply service fee)
  const fee = 0;
  const grand = subtotal + fee;

  setText('ed-order-subtotal', formatVND(subtotal));
  setText('ed-order-fee',      formatVND(fee));
  setText('ed-order-grand',    formatVND(grand));
  setText('ed-mobile-total',   formatVND(grand));
}

// ============================================================
// 15. CTA BUTTON STATE
// ============================================================

function updateCTAButton() {
  const totalQty = Object.values(edState.quantities).reduce((s, q) => s + q, 0);
  const grand = EVENT.tickets.reduce((s, t) => s + (edState.quantities[t.id] || 0) * t.price, 0);

  const bookBtn       = document.getElementById('ed-book-btn');
  const mobileBookBtn = document.getElementById('ed-mobile-book-btn');

  const label = totalQty > 0
    ? `🎟️ Đặt ${totalQty} vé — ${formatVND(grand)}`
    : '🎟️ Chọn vé để tiếp tục';

  if (bookBtn) {
    bookBtn.disabled = totalQty === 0;
    bookBtn.textContent = label;
  }
  if (mobileBookBtn) {
    mobileBookBtn.disabled = totalQty === 0;
    mobileBookBtn.textContent = totalQty > 0 ? `Đặt vé ngay →` : 'Chọn vé';
  }
}

// ============================================================
// 16. PROCEED TO CHECKOUT — Save to sessionStorage
// ============================================================

function proceedToCheckout() {
  const totalQty = Object.values(edState.quantities).reduce((s, q) => s + q, 0);
  if (totalQty === 0) {
    showToast('⚠️ Vui lòng chọn ít nhất 1 vé', 'error');
    return;
  }

  // Build cart payload
  const cartItems = EVENT.tickets
    .filter(t => (edState.quantities[t.id] || 0) > 0)
    .map(t => ({
      ticketId: t.id,
      ticketName: t.name,
      quantity: edState.quantities[t.id],
      price: t.price,
      lineTotal: t.price * edState.quantities[t.id]
    }));

  const grandTotal = cartItems.reduce((s, item) => s + item.lineTotal, 0);

  const checkoutData = {
    eventId:    EVENT.id,
    eventName:  EVENT.name,
    eventDate:  (EVENT.dateStart instanceof Date ? EVENT.dateStart : new Date(EVENT.dateStart)).toISOString(),
    eventVenue: EVENT.venue,
    eventImage: EVENT.image,
    items:      cartItems,
    subtotal:   grandTotal,
    fee:        0,
    grand:      grandTotal,
    createdAt:  new Date().toISOString()
  };

  // Persist to sessionStorage so checkout page can read it
  sessionStorage.setItem('eventhub_checkout', JSON.stringify(checkoutData));
  // Also persist to localStorage as a backup cart
  localStorage.setItem('eventhub_cart', JSON.stringify(checkoutData));

  showToast(`✅ Đang chuyển đến trang thanh toán... (${totalQty} vé)`, 'success');

  setTimeout(() => {
    window.location.href = 'checkout.html';
  }, 1000);
}

// ============================================================
// 17. SAVE / WISHLIST
// ============================================================

function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem('eventhub_wishlist') || '[]');
    if (saved.includes(EVENT.id)) {
      edState.saved = true;
      const btn = document.getElementById('ed-save-btn');
      if (btn) { btn.textContent = '❤️ Đã lưu'; btn.classList.add('saved'); }
    }
  } catch (e) { /* ignore */ }
}

function toggleSave() {
  const btn = document.getElementById('ed-save-btn');
  edState.saved = !edState.saved;

  try {
    const list = JSON.parse(localStorage.getItem('eventhub_wishlist') || '[]');
    if (edState.saved) {
      if (!list.includes(EVENT.id)) list.push(EVENT.id);
      btn.textContent = '❤️ Đã lưu';
      btn.classList.add('saved');
      showToast('❤️ Đã thêm vào danh sách yêu thích', 'success');
    } else {
      const idx = list.indexOf(EVENT.id);
      if (idx !== -1) list.splice(idx, 1);
      btn.textContent = '🤍 Lưu';
      btn.classList.remove('saved');
      showToast('💔 Đã bỏ khỏi danh sách yêu thích', 'info');
    }
    localStorage.setItem('eventhub_wishlist', JSON.stringify(list));
  } catch (e) { /* ignore */ }
}

// ============================================================
// 18. TABS
// ============================================================

function switchTab(btn) {
  // Deactivate all tabs
  document.querySelectorAll('.ed-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ed-section').forEach(s => s.classList.add('ed-section-hidden'));

  // Activate selected
  btn.classList.add('active');
  const target = document.getElementById(btn.dataset.target);
  if (target) {
    target.classList.remove('ed-section-hidden');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Auto-highlight tab on scroll
function setupTabScroll() {
  const sections = document.querySelectorAll('.ed-section[id]');
  const tabs = document.querySelectorAll('.ed-tab');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (!sec.classList.contains('ed-section-hidden')) {
        current = sec.id;
      }
    });
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.target === current);
    });
  }, { passive: true });
}

// ============================================================
// 19. MOBILE SHEET
// ============================================================

function toggleMobileTicket() {
  const sheet   = document.getElementById('ed-mobile-sheet');
  const overlay = document.getElementById('ed-sheet-overlay');
  sheet.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sheet.classList.contains('open') ? 'hidden' : '';
}

function closeMobileSheet() {
  document.getElementById('ed-mobile-sheet').classList.remove('open');
  document.getElementById('ed-sheet-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// 20. SALE COUNTDOWN
// ============================================================

function startSaleCountdown() {
  const el = document.getElementById('ed-ticket-countdown');
  if (!el) return;

  function update() {
    const saleTime = EVENT.saleEnds ? new Date(EVENT.saleEnds) : new Date(Date.now() + 86400000);
    const diff = saleTime - new Date();
    if (diff <= 0) {
      el.textContent = 'Hết hạn đặt vé';
      document.getElementById('ed-sale-status').textContent = '🔴 Đã đóng bán';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    el.textContent = `⏳ Còn ${d} ngày ${pad(h)}:${pad(m)} để đặt vé`;
  }
  update();
  edState.saleCountdownTimer = setInterval(update, 60000);
}

// ============================================================
// 21. STICKY HEADER
// ============================================================

function setupStickyHeader() {
  const header = document.getElementById('ed-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ============================================================
// 22. SHARE
// ============================================================

function shareEvent() {
  if (navigator.share) {
    navigator.share({
      title: EVENT.name,
      text: `Tham gia sự kiện: ${EVENT.name} tại ${EVENT.venue}`,
      url: window.location.href
    }).catch(() => { /* user cancelled */ });
  } else {
    document.getElementById('ed-share-modal').classList.add('open');
  }
}

function closeShareModal() {
  document.getElementById('ed-share-modal').classList.remove('open');
}

function shareTo(platform) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`${EVENT.name} — Đặt vé tại EventHub!`);
  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter:  `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    zalo:     `https://zalo.me/`,
    copy:     null
  };
  if (platform === 'copy') {
    navigator.clipboard?.writeText(window.location.href);
    document.getElementById('ed-copy-btn').textContent = '✅ Đã sao chép!';
    showToast('📋 Đã sao chép link sự kiện', 'success');
    setTimeout(() => closeShareModal(), 1500);
  } else {
    window.open(urls[platform], '_blank', 'width=600,height=400');
    closeShareModal();
  }
}

// Close share modal on backdrop click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('ed-share-modal');
  if (modal && e.target === modal) closeShareModal();
});

// ============================================================
// 23. TOAST
// ============================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('ed-toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `ed-toast ed-toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
    toast.style.transition = '.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// 24. HELPERS
// ============================================================

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
function formatDT(d) {
  return d.toLocaleDateString('vi-VN', { weekday:'short', day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
}
function formatTime(d) {
  return d.toLocaleDateString('vi-VN', { weekday:'short', day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
}
function pad(n) { return String(n).padStart(2, '0'); }
function truncate(str, n) { return str.length <= n ? str : str.slice(0, n) + '…'; }
function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }



window.switchRoleQuickly = switchRoleQuickly;
window.quickLogin = switchRoleQuickly;
