'use strict';


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

  rules: [
    { icon: "🎫", title: "Soát vé & Vòng tay RFID", desc: "Mỗi vé đổi lấy 01 vòng tay gắn chip RFID tại cổng. Vòng tay dùng để ra vào suốt thời gian diễn ra và nạp tiền mua sắm F&B." },
    { icon: "🚫", title: "Vật dụng cấm mang vào", desc: "Cấm mang vũ khí, chất cháy nổ, đồ ăn/nước uống từ ngoài, máy quay flycam và ống kính tele chuyên dụng > 200mm." },
    { icon: "👕", title: "Trang phục & Thời tiết", desc: "Khuyên dùng trang phục thoáng mát, giày thể thao tiện di chuyển trên sân cỏ Hoàng Thành. Có phát áo mưa tiện lợi khi mưa nhẹ." },
    { icon: "🔞", title: "Độ tuổi tham gia", desc: "Trẻ em dưới 10 tuổi được miễn phí vào cổng (đi cùng phụ huynh). Khu vực Fanzone sát sân khấu chỉ dành cho khán giả từ 14 tuổi trở lên." }
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


const DEFAULT_RULES = [
  {
    icon: "🎫",
    title: "Soát vé & Check-in",
    desc: "Mỗi vé tương ứng 01 mã QR hợp lệ. Khách tham gia xuất trình vé điện tử trên điện thoại hoặc bản in kèm giấy tờ tùy thân (CCCD/VNeID)."
  },
  {
    icon: "🚫",
    title: "Vật dụng cấm mang vào",
    desc: "Nghiêm cấm mang theo vũ khí, chất nổ, chất dễ cháy, đồ ăn và đồ uống có cồn từ bên ngoài, flycam/thiết bị ghi hình bay khi chưa đăng ký BTC."
  },
  {
    icon: "👔",
    title: "Trang phục & Ứng xử",
    desc: "Khách tham dự mặc trang phục văn minh, lịch sự. Giữ gìn trật tự công cộng, tuân thủ hướng dẫn của ban an ninh và nhân viên điều phối."
  },
  {
    icon: "🔞",
    title: "Độ tuổi & An toàn y tế",
    desc: "Trẻ em dưới 12 tuổi cần có phụ huynh hoặc người bảo hộ đi cùng. Đội ngũ y tế và sơ cấp cứu túc trực 24/7 tại khu vực ban tổ chức."
  }
];

const DEFAULT_POLICY = [
  {
    title: "Chính sách hoàn hủy vé & Đổi lịch",
    body: `<ul>
      <li><strong>Hủy trước 07 ngày:</strong> Hoàn 100% giá trị vé (khấu trừ phí xử lý cổng thanh toán 5%).</li>
      <li><strong>Hủy từ 03 đến 07 ngày trước sự kiện:</strong> Hoàn 50% tổng số tiền đã thanh toán.</li>
      <li><strong>Hủy trong vòng 24 giờ trước giờ G:</strong> Không hỗ trợ hoàn hủy hoặc hoàn tiền vé.</li>
      <li><strong>Trường hợp bất khả kháng / BTC hoãn sự kiện:</strong> Vé tự động chuyển sang ngày mới hoặc hoàn tiền 100% trong 5-7 ngày làm việc.</li>
    </ul>`
  },
  {
    title: "Quy định chuyển nhượng vé & Đổi thông tin người tham dự",
    body: `<ul>
      <li>Khách hàng có thể chuyển nhượng vé cho người khác trực tiếp trong mục <em>Vé của tôi</em> trước khi sự kiện bắt đầu ít nhất 12 giờ.</li>
      <li>Mỗi vé chỉ được đổi tên và số CCCD người thụ hưởng tối đa 01 lần duy nhất.</li>
      <li>Ban tổ chức không chịu trách nhiệm đối với các giao dịch mua lại vé từ nguồn không chính thống hoặc chợ đen.</li>
    </ul>`
  },
  {
    title: "Quy định vào cổng & Xác thực danh tính tại cửa check-in",
    body: `<ul>
      <li>Mã QR trên vé điện tử có giá trị vào cổng một lần duy nhất. Sau khi check-in, khách sẽ được phát vòng tay định danh.</li>
      <li>Vui lòng giữ vòng tay trong suốt thời gian diễn ra sự kiện; vòng tay bị rách, chắp vá sẽ không được cấp lại.</li>
      <li>Ban tổ chức có quyền từ chối tiếp cận sự kiện nếu phát hiện vé giả mạo hoặc có dấu hiệu gian lận.</li>
    </ul>`
  },
  {
    title: "Cam kết bảo mật dữ liệu & Bản quyền hình ảnh",
    body: `<ul>
      <li>Thông tin khách hàng được mã hóa chuẩn TLS 1.3 và tuân thủ chặt chẽ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.</li>
      <li>Khách tham dự đồng ý cho phép BTC sử dụng hình ảnh/video tư liệu tại sự kiện nhằm mục đích truyền thông phi thương mại.</li>
      <li>Mọi thắc mắc và khiếu nại xin vui lòng gửi về email: <strong>ds66b@neu.edu.vn</strong> để được hỗ trợ kịp thời.</li>
    </ul>`
  }
];

// Dữ liệu chi tiết sự kiện
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
      { name: "Dr. Andrew Nguyen", role: "Keynote Speaker", genre: "Generative AI (Google DeepMind)", color: "#0053cc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Elena Rostova", role: "AI Ethicist", genre: "Safety & Governance (OpenAI)", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Trần Minh Trí", role: "CTO FinTech", genre: "Banking AI Solutions", color: "#059669", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" }
    ],
    rules: [
      { icon: "👔", title: "Trang phục hội nghị", desc: "Trang phục lịch sự, tác phong chuyên nghiệp (Business Casual / Smart Casual). Mang theo danh thiếp để kết nối giao thương." },
      { icon: "💻", title: "Thiết bị & Kết nối", desc: "Hội trường trang bị Wi-Fi 6 tốc độ cao và cổng sạc tại bàn. Vui lòng tắt chuông điện thoại trong các phiên thuyết trình." },
      { icon: "🏷️", title: "Thẻ đeo hội nghị QR", desc: "Khách tham dự bắt buộc đeo thẻ tên có mã QR cá nhân trong suốt thời gian diễn ra để check-in các phòng chuyên đề và nhận tài liệu." },
      { icon: "📸", title: "Ghi âm & Bản quyền", desc: "Được phép chụp ảnh slide thuyết trình. Nghiêm cấm livestream toàn bộ phiên Keynote thương mại khi chưa có chấp thuận từ BTC." }
    ],
    policy: [
      {
        title: "Chính sách xuất hóa đơn GTGT (VAT)",
        body: `<ul>
          <li>Hỗ trợ xuất hóa đơn điện tử cho doanh nghiệp đăng ký mua từ 01 vé trở lên.</li>
          <li>Vui lòng cung cấp mã số thuế, tên công ty và địa chỉ chính xác tại bước thanh toán.</li>
          <li>Hóa đơn được phát hành và gửi qua email doanh nghiệp trong vòng 03 ngày làm việc sau khi thanh toán.</li>
        </ul>`
      },
      {
        title: "Chính sách hoàn hủy & Đổi thông tin đại biểu",
        body: `<ul>
          <li>Hỗ trợ đổi tên đại biểu tham dự miễn phí trước ngày 20/11/2026 bằng cách cập nhật trong tài khoản EventHub.</li>
          <li>Hoàn tiền 80% nếu yêu cầu hủy trước 10 ngày khai mạc; hoàn 50% trước 05 ngày. Không hoàn tiền sau 18/11/2026.</li>
          <li>Vé VIP được quyền chuyển nhượng hoặc bảo lưu sang kỳ Hội thảo AI tiếp theo nếu có văn bản báo trước 48 giờ.</li>
        </ul>`
      },
      {
        title: "Tài liệu & Bản ghi hình độc quyền",
        body: `<ul>
          <li>Toàn bộ slide bài giảng, video ghi hình chất lượng 4K và mã nguồn demo sẽ được gửi qua email cho người tham dự sau hội nghị.</li>
          <li>Bản quyền tài liệu thuộc về Diễn giả và TechVentures Vietnam; không sao chép phát tán thương mại.</li>
        </ul>`
      }
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
          { time: "14:00 – 15:30", title: "Công thức F.I.R.E & Thiết lập dòng tiền thụ động", speaker: "ThS. Nguyễn Tuấn Anh" },
          { time: "15:45 – 17:30", title: "Thực hành xây dựng danh mục đầu tư cá nhân", speaker: "Phan Thanh Hương, CFA" },
          { time: "17:30 – 18:00", title: "Hỏi đáp Q&A cùng diễn giả", speaker: "Hoàng Minh Đức" }
        ]
      }
    ],
    lineup: [
      { name: "ThS. Nguyễn Tuấn Anh", role: "Keynote / Speaker", genre: "Quản trị Tài sản & Quỹ", color: "#0053cc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Phan Thanh Hương, CFA", role: "Chuyên gia F.I.R.E", genre: "Hoạch định Tài chính Độc lập", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Hoàng Minh Đức", role: "Cố vấn Thực chiến", genre: "Tác giả 'Tự Do Tài Chính 30s'", color: "#059669", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" }
    ],
    rules: [
      { icon: "💻", title: "Chuẩn bị thiết bị", desc: "Học viên nên mang theo Laptop hoặc máy tính bảng để thực hành trực tiếp file bảng tính phân bổ dòng tiền cá nhân." },
      { icon: "📊", title: "Bảo mật thông tin cá nhân", desc: "Mọi dữ liệu tài chính chia sẻ trong buổi thực hành tình huống đều được bảo mật tuyệt đối, tuân thủ nguyên tắc ẩn danh." },
      { icon: "🚫", title: "Nghiêm cấm chèo kéo đầu tư", desc: "Nghiêm cấm các hành vi giới thiệu sàn giao dịch, hội nhóm đa cấp hoặc mời gọi góp vốn trái phép dưới mọi hình thức." },
      { icon: "⏰", title: "Thời gian vào lớp", desc: "Vui lòng có mặt trước giờ khai mạc 20 phút để hoàn tất thủ tục bàn giao tài liệu và ổn định vị trí ngồi." }
    ],
    policy: [
      {
        title: "Chính sách cam kết chất lượng & Hoàn tiền",
        body: `<ul>
          <li>Cam kết hoàn 100% học phí nếu người tham dự cảm thấy nội dung không hữu ích trong 60 phút đầu tiên của buổi học.</li>
          <li>Học viên được hỗ trợ giải đáp thắc mắc 1-1 trực tuyến với ban cố vấn trong 30 ngày sau workshop.</li>
        </ul>`
      },
      {
        title: "Chính sách chuyển nhượng suất học",
        body: `<ul>
          <li>Hỗ trợ chuyển nhượng suất tham dự cho bạn bè/người thân miễn phí trước giờ bắt đầu 12 giờ.</li>
          <li>Vui lòng thông báo qua hotline hoặc fanpage FinEdu Hub để cập nhật danh sách cấp chứng nhận.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Ngày 1 — Thứ 6, 05/12/2026",
        items: [
          { time: "16:00 – 17:30", title: "Khai mạc Lễ hội Ẩm thực Bến Bạch Đằng", desc: "Mở cửa hơn 100 gian hàng ẩm thực 3 miền và bia thủ công ven sông" },
          { time: "18:00 – 19:30", title: "Masterclass: Nghệ thuật nấu Bia Thủ Công", desc: "Giao lưu cùng các Brewmaster hàng đầu và nếm thử 6 vị bia độc bản", speaker: "Alex Miller (Brewmaster)" },
          { time: "20:00 – 22:00", title: "Live Sunset Acoustic Session", desc: "Âm nhạc mộc mạc bên bờ sông Sài Gòn lộng gió", speaker: "Saigon Soul Band" }
        ]
      },
      {
        day: "Ngày 2 — Thứ 7, 06/12/2026",
        items: [
          { time: "15:00 – 17:00", title: "Cuộc thi: Vua Ẩm Thực Đường Phố", desc: "Tranh tài chế biến món ăn sáng tạo từ các đầu bếp trẻ", speaker: "Chef Alain Nguyễn" },
          { time: "17:30 – 19:30", title: "Cooking Show: Hương vị Sài Gòn Xưa & Nay", desc: "Trình diễn chế biến món ăn tương tác trực tiếp với khán giả" },
          { time: "20:00 – 22:00", title: "Đêm tiệc Beer & Chill Vibes", desc: "DJ set Tropical House và nhảy biểu diễn đường phố", speaker: "DJ Minh Trí" }
        ]
      },
      {
        day: "Ngày 3 — Chủ nhật, 07/12/2026",
        items: [
          { time: "16:00 – 18:30", title: "Đại tiệc BBQ & Hải sản nướng", desc: "Ưu đãi ẩm thực giảm giá 30% tại toàn bộ gian hàng" },
          { time: "19:00 – 21:30", title: "Gala Trao giải & Lễ hội Âm nhạc Bế mạc", desc: "Vinh danh Top thương hiệu bia thủ công và món ăn xuất sắc nhất" },
          { time: "21:30 – 22:00", title: "Pháo hoa nghệ thuật chào bế mạc lễ hội" }
        ]
      }
    ],
    lineup: [
      { name: "Chef Alain Nguyễn", role: "Giám khảo MasterChef", genre: "Ẩm thực Quốc tế & Việt", color: "#c2410c", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80" },
      { name: "Alex Miller", role: "Head Brewmaster", genre: "Craft Beer Artisan", color: "#b45309", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Saigon Soul Band", role: "Live Band", genre: "Acoustic / Jazz", color: "#0053cc", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80" },
      { name: "DJ Minh Trí", role: "Resident DJ", genre: "Tropical House & Chill", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" }
    ],
    rules: [
      { icon: "🍺", title: "Quy định tuổi uống đồ cồn", desc: "Chỉ phục vụ đồ uống có cồn cho khách từ đủ 18 tuổi trở lên (vui lòng xuất trình CCCD khi nhận vòng tay bia)." },
      { icon: "💳", title: "Thanh toán không tiền mặt", desc: "Toàn bộ gian hàng chấp nhận quét mã QR EventHub Pay, MoMo, VNPay hoặc thẻ ngân hàng không chạm." },
      { icon: "♻️", title: "Bảo vệ môi trường xanh", desc: "Sử dụng ly giấy tái sinh và đồ dùng thân thiện môi trường; vui lòng phân loại rác tại các trạm xanh của lễ hội." },
      { icon: "🚖", title: "Uống có trách nhiệm", desc: "Đã uống rượu bia, không lái xe! Ban tổ chức có quầy hỗ trợ đặt xe công nghệ Be/Grab với mã ưu đãi độc quyền 30%." }
    ],
    policy: [
      {
        title: "Chính sách sử dụng Coupon ẩm thực",
        body: `<ul>
          <li>Mỗi vé kèm 02 coupon đổi bia hoặc đồ uống thủ công tại các quầy bar đối tác chính thức.</li>
          <li>Coupon có giá trị sử dụng trong suốt thời gian diễn ra sự kiện; không quy đổi thành tiền mặt.</li>
        </ul>`
      },
      {
        title: "Chính sách thời tiết & Đổi trả vé",
        body: `<ul>
          <li>Sự kiện diễn ra ngoài trời tại công viên bờ sông Bạch Đằng, có mái che bạt căng kiến trúc tại toàn bộ khu vực bàn ăn.</li>
          <li>Trường hợp mưa bão bất khả kháng, BTC sẽ thông báo dời lịch hoặc hoàn 100% tiền vé qua tài khoản ngân hàng.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Lịch Trình Khám Phá Triển Lãm",
        items: [
          { time: "09:30 – 10:30", title: "Curated Tour Sáng: Bước vào thế giới danh họa", desc: "Thuyết minh viên chuyên nghiệp dẫn dắt qua 6 phân khu lịch sử và nghệ thuật", speaker: "Giám tuyển Lê Mai Hương" },
          { time: "11:00 – 12:00", title: "Trải nghiệm Đa giác quan 360° Sensory Room", desc: "Phòng chiếu trung tâm rộng 1.000m² kết hợp âm nhạc cổ điển và tranh chuyển động" },
          { time: "14:30 – 15:30", title: "Tọa đàm: 'Nghệ thuật Hậu ấn tượng & Đời sống số'", desc: "Giao lưu phân tích các thủ pháp màu sắc đặc trưng của Van Gogh", speaker: "Họa sĩ Trần Thanh Long" },
          { time: "17:00 – 18:00", title: "Curated Tour Chiều & Trải nghiệm thực tế ảo VR", desc: "Khám phá phòng ngủ Arles và đêm đầy sao Starry Night qua kính VR tương tác" },
          { time: "19:30 – 20:30", title: "Night Sensory: Hòa nhạc Cello bên sắc hoa hướng dương", desc: "Phiên diễn âm nhạc thính phòng đặc biệt giữa không gian nghệ thuật thị giác", speaker: "Hoàng Yến Cello" }
        ]
      }
    ],
    lineup: [
      { name: "Lê Mai Hương", role: "Giám tuyển trưởng (Curator)", genre: "Lịch sử Mỹ thuật Đương đại", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Trần Thanh Long", role: "Cố vấn nghệ thuật", genre: "Hội họa Hậu ấn tượng", color: "#0053cc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Hoàng Yến Cello", role: "Nghệ sĩ độc tấu", genre: "Classical Cello", color: "#b45309", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80" }
    ],
    rules: [
      { icon: "📸", title: "Quy định chụp ảnh & Quay phim", desc: "Khuyến khích chụp ảnh check-in! Vui lòng TẮT đèn flash và không sử dụng chân máy ảnh (tripod) để đảm bảo không gian chung." },
      { icon: "🔇", title: "Giữ gìn không gian nghệ thuật", desc: "Vui lòng giữ trật tự, đi nhẹ nói khẽ, cài đặt điện thoại ở chế độ rung hoặc im lặng khi bước vào các phòng chiếu đa giác quan." },
      { icon: "🚯", title: "Đồ ăn thức uống", desc: "Không mang theo đồ ăn, thức uống có màu hoặc kẹo cao su vào bên trong khu vực trưng bày tác phẩm." },
      { icon: "👶", title: "Trẻ em tham quan", desc: "Trẻ em dưới 1m2 cần có người lớn đi kèm và luôn nắm tay trẻ trong suốt hành trình tham quan triển lãm." }
    ],
    policy: [
      {
        title: "Chính sách giá vé & Khung giờ vào cửa",
        body: `<ul>
          <li>Vé có giá trị sử dụng trong ngày đã chọn. Khách có thể vào cổng bất kỳ lúc nào trong khung giờ 09:00 - 20:00 (đóng cửa 21:00).</li>
          <li>Thời gian lưu lại triển lãm không giới hạn; trung bình mỗi lượt trải nghiệm trọn vẹn kéo dài từ 75 đến 90 phút.</li>
        </ul>`
      },
      {
        title: "Chính sách đổi ngày tham quan",
        body: `<ul>
          <li>Hỗ trợ đổi ngày tham quan miễn phí tối đa 01 lần trước ngày ghi trên vé 24 giờ thông qua tính năng quản lý vé.</li>
          <li>Không hỗ trợ hoàn tiền đối với các vé đã hết hạn hoặc không sử dụng.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Thứ 6, 24/11/2026 — Nhận Race Kit & Expo",
        items: [
          { time: "09:00 – 18:00", title: "Mở cửa Expo & Phát Race Kit", desc: "Nhận áo thi đấu, Bib gắn chip Timing điện tử và quà tặng nhà tài trợ tại Quảng trường Lâm Viên" },
          { time: "16:00 – 17:00", title: "Race Briefing: Kỹ thuật đường chạy đêm", desc: "Hướng dẫn xử lý độ dốc và thời tiết se lạnh 15°C Đà Lạt", speaker: "HLV Đinh Linh" }
        ]
      },
      {
        day: "Thứ 7, 25/11/2026 — Race Night",
        items: [
          { time: "18:00 – 18:45", title: "Tập trung VĐV & Gửi đồ cá nhân", desc: "Khu vực gửi đồ miễn phí cho toàn bộ vận động viên tham gia" },
          { time: "18:45 – 19:15", title: "Khởi động tập thể cùng Pacer & Nhạc Neon", desc: "Làm nóng cơ thể trong không khí se lạnh huyền ảo của phố núi" },
          { time: "19:30 – 19:35", title: "Xuất phát cự ly 21KM (Bán Marathon)", desc: "Cung đường 2 vòng quanh Hồ Xuân Hương và rừng thông thơ mộng" },
          { time: "19:45 – 19:50", title: "Xuất phát cự ly 10KM", desc: "Chinh phục cung đường ven hồ với dải đèn LED kỳ ảo" },
          { time: "20:00 – 20:05", title: "Xuất phát cự ly 5KM (Gia đình & Người mới)", desc: "Trải nghiệm chạy đêm thư giãn ngắm cảnh Đà Lạt về đêm" },
          { time: "22:30 – 23:30", title: "Lễ vinh danh & Trao giải Finisher", desc: "Trao kỷ niệm chương và tiền thưởng cho Top VĐV nam/nữ các nhóm tuổi", speaker: "Nguyễn Thị Oanh & Hoàng Nguyên Thanh" }
        ]
      }
    ],
    lineup: [
      { name: "Nguyễn Thị Oanh", role: "Đại sứ giải chạy", genre: "Kỷ lục gia Điền kinh SEA Games", color: "#0053cc", image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=400&q=80" },
      { name: "Hoàng Nguyên Thanh", role: "VĐV Tiên phong", genre: "Vô địch Marathon Quốc gia", color: "#059669", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Bác sĩ Đinh Linh", role: "Cố vấn Y học Thể thao", genre: "Chấn thương & Phục hồi", color: "#7c3aed", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" }
    ],
    rules: [
      { icon: "🎽", title: "Quy định đeo số Bib", desc: "VĐV bắt buộc ghim Bib thi đấu ở mặt trước ngực trong suốt chặng đua; chip Timing không được bẻ gập hoặc tháo rời." },
      { icon: "💡", title: "Đèn chạy ban đêm", desc: "Khuyến khích mang theo đèn pin đeo đầu hoặc vòng phản quang cá nhân để đảm bảo an toàn quan sát tại các đoạn đường tối." },
      { icon: "🩺", title: "Cam kết sức khỏe", desc: "VĐV tự chịu trách nhiệm về thể lực và hoàn thành bản cam kết sức khỏe điện tử trước khi nhận bộ Race Kit." },
      { icon: "⏱️", title: "Thời gian Cut-off", desc: "Cự ly 21km có thời gian cut-off là 3h30 phút; cự ly 10km là 2h00 phút. VĐV về sau mốc này sẽ được xe đón về đích an toàn." }
    ],
    policy: [
      {
        title: "Chính sách chuyển nhượng BIB chạy",
        body: `<ul>
          <li>Hỗ trợ sang nhượng quyền thi đấu hoặc thay đổi cự ly trước ngày 15/11/2026 (phí hành chính 100.000 VNĐ).</li>
          <li>Nghiêm cấm thi đấu dưới Bib của người khác mà không đăng ký chính thức; vi phạm sẽ bị hủy thành tích.</li>
        </ul>`
      },
      {
        title: "Chính sách bảo hiểm thi đấu",
        body: `<ul>
          <li>Toàn bộ VĐV có Bib hợp lệ được bảo hiểm tai nạn thể thao trong thời gian thi đấu với mức bảo hiểm tối đa 50.000.000 VNĐ.</li>
          <li>Trạm y tế và xe cứu thương di động túc trực dọc cung đường chạy mỗi 2.5km.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Đêm Giao Thừa — Thứ 5, 31/12/2026",
        items: [
          { time: "18:00 – 19:30", title: "Mở cổng Fanzone & Kiểm tra an ninh", desc: "Check-in mã QR vé điện tử và phát vòng tay phát sáng LED đồng bộ" },
          { time: "19:30 – 20:45", title: "Phần 1: Khát Vọng Tuổi Trẻ & Gen Z Hits", desc: "Màn trình diễn của các quán quân Rap Việt và ban nhạc trẻ", speaker: "Dàn Rapper All-Stars" },
          { time: "21:00 – 22:30", title: "Phần 2: Sân khấu Đỉnh Cao V-Pop", desc: "Các bản hit quốc dân được phối lại theo phong cách giao hưởng điện tử", speaker: "Hà Anh Tuấn & Mỹ Tâm" },
          { time: "22:45 – 23:55", title: "Phần 3: Headline Siêu Đại Nhạc Hội", desc: "Màn trình diễn visual đỉnh cao kết hợp hiệu ứng laser mapping và pháo hoa tầm thấp", speaker: "Sơn Tùng M-TP" },
          { time: "23:55 – 00:00", title: "Đếm ngược 60 giây thời khắc Giao Thừa", desc: "Cả biển người cùng đếm ngược bước sang năm mới 2027" },
          { time: "00:00 – 00:30", title: "Màn Bắn Pháo Hoa Nghệ Thuật & DJ Closing", desc: "Pháo hoa rực sáng bầu trời sông Sài Gòn và set nhạc DJ sôi động đón chào năm mới" }
        ]
      }
    ],
    lineup: [
      { name: "Sơn Tùng M-TP", role: "Main Headliner", genre: "Pop / R&B", color: "#c2410c", image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=400&q=80" },
      { name: "Mỹ Tâm", role: "Co-Headliner", genre: "Pop Queen", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Suboi", role: "Special Guest", genre: "Hip-Hop", color: "#0053cc", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80" },
      { name: "JustaTee", role: "Music Director", genre: "R&B / Soul", color: "#059669", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" }
    ],
    rules: [
      { icon: "🎟️", title: "Vòng tay Fanzone", desc: "Vé Fanzone đảm bảo vị trí đứng cận sân khấu có rào chắn riêng. Bắt buộc giữ vòng tay nguyên vẹn trong suốt sự kiện." },
      { icon: "🚫", title: "An ninh nghiêm ngặt", desc: "Tuyệt đối không mang pháo sáng, đèn laser, chai lọ thủy tinh, gậy tự sướng và balo cỡ lớn hơn khổ giấy A4." },
      { icon: "👜", title: "Bảo quản tư trang", desc: "Do mật độ người tham dự rất đông, vui lòng tự bảo quản điện thoại, ví tiền và tư trang cẩn thận ở túi phía trước." },
      { icon: "🚇", title: "Lộ trình di chuyển", desc: "Các tuyến đường xung quanh phố đi bộ Nguyễn Huệ cấm xe từ 18:00. Khuyến khích gửi xe từ xa và đi bộ vào khu vực." }
    ],
    policy: [
      {
        title: "Chính sách vé Fanzone & Vị trí đứng",
        body: `<ul>
          <li>Vé Fanzone có số lượng phát hành giới hạn nhằm đảm bảo an toàn mật độ theo tiêu chuẩn của Sở Văn Hóa & Thể Thao TP.HCM.</li>
          <li>Vị trí đứng tự do trong khu vực rào chắn Fanzone theo nguyên tắc đến trước đứng trước.</li>
        </ul>`
      },
      {
        title: "Chính sách hoàn hủy vé",
        body: `<ul>
          <li>Vé đã mua không hỗ trợ hoàn hủy tiền mặt. Trường hợp không thể tham dự, khách hàng có thể chuyển nhượng vé trước 18:00 ngày 31/12/2026.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Thứ 5, 10/12/2026",
        items: [
          { time: "08:30 – 09:15", title: "Check-in & Nhận Swag Google Developer", desc: "Nhận áo thun DevFest, huy hiệu, sticker và thưởng thức teabreak sáng" },
          { time: "09:15 – 10:30", title: "Keynote: Gemini 2.0 & Next-gen AI Tools for Developers", desc: "Cập nhật các mô hình AI mới nhất từ Google I/O toàn cầu", speaker: "Huỳnh Bảo Châu (GDE)" },
          { time: "10:45 – 12:00", title: "Technical Track A: Flutter 4 & Multiplatform Native", desc: "Tối ưu hiệu năng ứng dụng di động đa nền tảng với engine mới", speaker: "Sarah Jenkins (Google Dev Advocate)" },
          { time: "10:45 – 12:00", title: "Technical Track B: Building Cloud Agents on Vertex AI", desc: "Xây dựng hệ thống agentic workflow tự động hóa doanh nghiệp", speaker: "Đặng Tuấn Anh" },
          { time: "13:30 – 15:30", title: "Hands-on CodeLab: Xây dựng AI Assistant với Gemini API", desc: "Thực hành lập trình trực tiếp cùng các chuyên gia Google" },
          { time: "15:45 – 17:00", title: "Career Fireside Chat & Networking Doanh nghiệp", desc: "Cơ hội phỏng vấn tuyển dụng trực tiếp từ các đối tác công nghệ" }
        ]
      }
    ],
    lineup: [
      { name: "Huỳnh Bảo Châu", role: "Google Developer Expert", genre: "Cloud & AI Architecture", color: "#0053cc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Jenkins", role: "AI Dev Advocate", genre: "Gemini & Deep Learning", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Đặng Tuấn Anh", role: "Tech Lead Flutter", genre: "Mobile Engineering", color: "#059669", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" }
    ],
    rules: [
      { icon: "💻", title: "Thiết bị thực hành CodeLab", desc: "Lập trình viên tham dự phiên chiều cần mang theo Laptop cá nhân đã cài sẵn Git, Node.js hoặc Flutter SDK." },
      { icon: "🤝", title: "Google Community Guidelines", desc: "Tôn trọng các thành viên cộng đồng; duy trì không gian cởi mở, không phân biệt đối xử và tương trợ học hỏi lẫn nhau." },
      { icon: "🎫", title: "Vé danh danh cá nhân", desc: "Mỗi người chỉ đăng ký 01 vé duy nhất. Vé miễn phí không được rao bán hoặc chuyển nhượng trái phép." }
    ],
    policy: [
      {
        title: "Chính sách vé miễn phí & No-show",
        body: `<ul>
          <li>Vé tham dự hoàn toàn miễn phí do Google Developer Groups và các nhà tài trợ đài thọ 100%.</li>
          <li>Trường hợp đã đăng ký nhưng bận đột xuất, vui lòng hủy vé trước 48h để nhường cơ hội cho người trong danh sách chờ.</li>
          <li>Những trường hợp vắng mặt không báo trước sẽ bị từ chối đăng ký trong 2 sự kiện DevFest kế tiếp.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Thứ 7, 19/12/2026 — Đêm Hội Âm Nhạc Điện Tử",
        items: [
          { time: "20:30 – 21:30", title: "Mở cổng & Welcome Cocktail DJ Set", desc: "Khu vực sảnh đón khách và trải nghiệm âm nhạc Deep & Progressive House" },
          { time: "21:30 – 22:45", title: "Bass Stage: Trap & Future Bass Storm", desc: "Khởi động sàn nhảy cùng dàn visual laser mapping đẳng cấp", speaker: "DJ Trang Moon" },
          { time: "22:45 – 00:15", title: "Co-Headliner: Big Room & Electro Euphoria", desc: "Set nhạc bùng nổ cùng hiệu ứng phun CO2 và pháo lạnh sân khấu", speaker: "Tuấn Kruise" },
          { time: "00:15 – 02:00", title: "International Main Headliner: KSHMR Live", desc: "Màn trình diễn đỉnh cao của huyền thoại EDM thế giới kết hợp dàn nhạc cụ dân tộc", speaker: "KSHMR" },
          { time: "02:00 – 03:00", title: "Sunrise Hardstyle Afterparty", desc: "Đốt cháy năng lượng đến tận rạng sáng cùng những giai điệu Hardstyle cuồng nhiệt", speaker: "Mike Williams" }
        ]
      }
    ],
    lineup: [
      { name: "KSHMR", role: "Main Headliner", genre: "Big Room / Electro House", color: "#c2410c", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80" },
      { name: "Mike Williams", role: "International DJ", genre: "Future Bounce", color: "#0053cc", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80" },
      { name: "Tuấn Kruise", role: "Pioneer DJ VN", genre: "Progressive & Tech House", color: "#7c3aed", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "DJ Trang Moon", role: "Guest DJ", genre: "Bass House & Trap", color: "#059669", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" }
    ],
    rules: [
      { icon: "🔞", title: "Giới hạn độ tuổi 18+", desc: "Sự kiện phục vụ đồ uống có cồn; bắt buộc mang theo CCCD/Hộ chiếu gốc khi check-in để xác thực độ tuổi từ 18 trở lên." },
      { icon: "🔍", title: "Kiểm tra an ninh 2 vòng", desc: "An ninh soát người nghiêm ngặt; nghiêm cấm mang các chất cấm, bình xịt hơi cay, bật lửa và vũ khí." },
      { icon: "👗", title: "Trang phục Clubbing", desc: "Khuyến khích trang phục Neon, cá tính, thoải mái để sẵn sàng bung xõa suốt đêm trên sàn nhảy." },
      { icon: "🚭", title: "Quy định hút thuốc", desc: "Chỉ được phép hút thuốc tại khu vực chỉ định ngoài trời (Smoking Lounge) để đảm bảo không khí chung." }
    ],
    policy: [
      {
        title: "Chính sách vé & Điều kiện tham gia",
        body: `<ul>
          <li>Vé đã bao gồm 01 phần đồ uống chào mừng cao cấp tại quầy bar chính.</li>
          <li>Vé đã mua không được hoàn tiền trừ trường hợp sự kiện bị hủy bỏ hoàn toàn bởi Ban tổ chức.</li>
          <li>Hỗ trợ đổi tên người sở hữu vé trực tiếp trên ứng dụng trước 12:00 ngày diễn ra sự kiện.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Thứ 2, 30/11/2026 — Trực Tuyến qua Zoom Webinar",
        items: [
          { time: "09:00 – 09:30", title: "Chào mừng & Khởi động hội thảo trực tuyến", desc: "Giới thiệu diễn giả và khảo sát trực tiếp kỳ vọng của người tham dự" },
          { time: "09:30 – 11:30", title: "Chuyên đề 1: Design Thinking 2.0 trong kỷ nguyên AI", desc: "Ứng dụng AI vào nghiên cứu người dùng, phỏng vấn sâu và tổng hợp Insight", speaker: "Phạm Hoàng Nam" },
          { time: "11:30 – 13:00", title: "Nghỉ trưa & Thảo luận tự do tại Breakout Rooms", desc: "Giao lưu mạng lưới kết nối giữa các Product Designer toàn quốc" },
          { time: "13:00 – 15:00", title: "Chuyên đề 2: Tối ưu UI/UX Flow nâng cao tỷ lệ chuyển đổi (CRO)", desc: "Phân tích 5 Case study thực chiến từ các ứng dụng Fintech & E-Commerce hàng đầu", speaker: "Lê Thu Hà" },
          { time: "15:15 – 16:30", title: "Live Portfolio Review & Q&A trực tiếp", desc: "Được các Design Lead nhận xét và sửa trực tiếp 05 Portfolio xuất sắc của học viên", speaker: "Trần Minh Khoa" }
        ]
      }
    ],
    lineup: [
      { name: "Phạm Hoàng Nam", role: "Head of Design", genre: "Fintech & Product Strategy", color: "#0053cc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Lê Thu Hà", role: "Lead UX Researcher", genre: "User Experience & Usability", color: "#7c3aed", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Trần Minh Khoa", role: "Design System Lead", genre: "Design Systems & UI", color: "#059669", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" }
    ],
    rules: [
      { icon: "🌐", title: "Đường truyền & Nền tảng", desc: "Hội thảo diễn ra qua nền tảng Zoom Webinar. Đường link và passcode đăng nhập sẽ gửi tự động qua email trước 2 giờ." },
      { icon: "🎧", title: "Thiết bị & Tương tác", desc: "Nên sử dụng tai nghe có mic và laptop màn hình lớn để quan sát rõ nét các bảng thiết kế Figma của diễn giả." },
      { icon: "💬", title: "Hỏi đáp văn minh", desc: "Sử dụng tính năng Q&A trên Zoom để đặt câu hỏi cho diễn giả; câu hỏi hay nhất sẽ được chọn giải đáp trực tiếp trên sóng." }
    ],
    policy: [
      {
        title: "Chính sách tài liệu & Bản quyền",
        body: `<ul>
          <li>Vé tham dự hoàn toàn miễn phí. Toàn bộ slide thuyết trình (PDF) và bộ UI Kit Template sẽ gửi qua email sau sự kiện.</li>
          <li>Video recording được lưu lại và cung cấp quyền truy cập trọn đời trong vòng 48h sau khi kết thúc hội thảo.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Chủ nhật, 15/11/2026",
        items: [
          { time: "17:00 – 18:00", title: "Khai mạc Chợ phiên Văn hóa Ánh Sáng", desc: "Trải nghiệm vẽ Henna truyền thống Ấn Độ và thử trang phục Sari dạ hội", speaker: "Nghệ nhân Văn hóa" },
          { time: "18:00 – 19:15", title: "Khám phá Ẩm thực Ấn Độ & Trà Masala Chai", desc: "Thưởng thức các món cà ri trứ danh, bánh ngọt Mithai và biểu diễn làm bánh Naan" },
          { time: "19:30 – 20:00", title: "Nghi lễ Thắp đèn Diyas Cầu Bình An", desc: "Nghi lễ thiêng liêng thắp sáng hàng ngàn ngọn đèn đất sét xung quanh tượng đài", speaker: "Đại sứ quán & Ban tổ chức" },
          { time: "20:15 – 21:30", title: "Đêm hội Âm nhạc & Múa Bollywood Sôi Động", desc: "Biểu diễn vũ đạo cổ điển Kathak kết hợp giai điệu Bollywood hiện đại", speaker: "Priya Sharma & Vũ đoàn" },
          { time: "21:30 – 22:00", title: "Màn pháo hoa xoay truyền thống & Nhạc cụ Dhol", desc: "Màn gõ trống Dhol tưng bừng kết thúc đêm hội ánh sáng ý nghĩa", speaker: "Dhol Beats Group" }
        ]
      }
    ],
    lineup: [
      { name: "Priya Sharma", role: "Vũ công Kathak", genre: "Indian Classical Dance", color: "#c2410c", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
      { name: "Rajesh Kumar", role: "Bếp trưởng MasterChef", genre: "Ẩm thực Ấn Độ Cung đình", color: "#b45309", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Dhol Beats Group", role: "Ban nhạc gõ truyền thống", genre: "Folk Drumming", color: "#0053cc", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80" }
    ],
    rules: [
      { icon: "🪔", title: "An toàn lửa & Đèn Diyas", desc: "Khi tham gia nghi thức thắp đèn hoa đăng, vui lòng tuân thủ khu vực bố trí an toàn của ban tổ chức để tránh cháy bén." },
      { icon: "🧕", title: "Tôn trọng phong tục văn hóa", desc: "Trang phục lịch sự, hòa nhã khi tham gia các nghi lễ truyền thống. Tôn trọng không gian tâm linh của cộng đồng người Ấn." },
      { icon: "🧼", title: "Vệ sinh không gian công cộng", desc: "Không vứt rác, vỏ nến bừa bãi tại khu vực vườn hoa Lý Thái Tổ; bỏ rác đúng nơi quy định." }
    ],
    policy: [
      {
        title: "Chính sách vé & Quyền lợi",
        body: `<ul>
          <li>Vé vào cổng đã bao gồm: 01 phần đèn đất sét Diyas truyền thống, 01 hình vẽ nghệ thuật Henna tay và 01 ly trà sữa Masala.</li>
          <li>Trẻ em dưới 6 tuổi đi cùng bố mẹ được miễn phí vào cổng sự kiện.</li>
        </ul>`
      }
    ],
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
    agenda: [
      {
        day: "Thứ 6, 20/12/2026 — Race Check-in & Briefing",
        items: [
          { time: "09:00 – 17:00", title: "Mở cửa Expo, Check-in VĐV & Kiểm định xe đạp", desc: "VĐV nhận Bib, chip điện tử Timing và kiểm tra tiêu chuẩn phanh, mũ bảo hiểm" },
          { time: "16:00 – 17:00", title: "Race Briefing bắt buộc cho toàn bộ VĐV", desc: "Phổ biến chi tiết luật thi đấu, dòng chảy vịnh biển và vùng cấm núp gió (Drafting zone)", speaker: "Craig Alexander" }
        ]
      },
      {
        day: "Thứ 7, 21/12/2026 — Khởi động & Bàn giao xe",
        items: [
          { time: "07:00 – 09:00", title: "Bơi thử đường đua biển Trần Phú", desc: "Làm quen với nhiệt độ nước biển và phao tiêu định hướng ngoài khơi" },
          { time: "14:00 – 18:00", title: "Đưa xe đạp vào khu vực chuyển tiếp (Transition Area)", desc: "Khóa xe và xếp đặt túi đồ Run/Bike vào vị trí thi đấu chính thức" }
        ]
      },
      {
        day: "Chủ nhật, 22/12/2026 — RACE DAY",
        items: [
          { time: "04:30 – 05:15", title: "Khu vực chuyển tiếp mở cửa & Bơm lốp xe", desc: "Kiểm tra dinh dưỡng và thiết bị trước giờ G" },
          { time: "05:30 – 06:45", title: "Xuất phát chặng Bơi Biển 1.9 KM", desc: "Rolling start theo từng đợt tại bãi biển Trần Phú thơ mộng" },
          { time: "06:45 – 10:45", title: "Chặng Đạp Xe 90 KM Ven Biển Nha Trang", desc: "Cung đường ven biển tuyệt đẹp đèo Lương Sơn với gió biển thách thức" },
          { time: "10:45 – 14:30", title: "Chặng Chạy Bộ Bán Marathon 21.1 KM", desc: "Chạy dọc đại lộ Trần Phú rợp bóng cọ với sự cổ vũ cuồng nhiệt của khán giả" },
          { time: "16:00 – 18:00", title: "Lễ Trao Giải Finisher & Đêm Tiệc Bế Mạc", desc: "Vinh danh các 'Người Sắt' hoàn thành cự ly và trao 45 suất dự VCK Thế Giới", speaker: "Lâm Đức Minh" }
        ]
      }
    ],
    lineup: [
      { name: "Craig Alexander", role: "Huyền thoại Ironman", genre: "3x Vô địch Thế giới", color: "#c2410c", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Lâm Đức Minh", role: "VĐV Kỷ lục VN", genre: "Top 1 Age Group 70.3", color: "#0053cc", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
      { name: "Bác sĩ Vũ Anh Tuấn", role: "Trưởng ban Y tế Cấp cứu", genre: "Hồi sức Cấp cứu Thể thao", color: "#059669", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" }
    ],
    rules: [
      { icon: "🚴", title: "Quy tắc cấm núp gió (No Drafting)", desc: "Cự ly tối thiểu giữa 2 xe đạp là 12 mét. VĐV vi phạm sẽ bị phạt thẻ xanh dừng tại Penalty Box 5 phút." },
      { icon: "⛑️", title: "Mũ bảo hiểm bắt buộc", desc: "Bắt buộc đội và cài quai mũ bảo hiểm trước khi chạm vào xe đạp tại khu vực chuyển tiếp Transition." },
      { icon: "🩺", title: "Kiểm tra y tế nghiêm ngặt", desc: "VĐV phải nộp giấy chứng nhận đủ sức khỏe tim mạch trong 6 tháng. Nhân viên y tế có quyền dừng thi đấu nếu phát hiện dấu hiệu kiệt sức nguy hiểm." },
      { icon: "⏱️", title: "Mốc thời gian Cut-off", desc: "Bơi: 1h10p; Bơi + Đạp: 5h30p; Tổng thời gian hoàn thành toàn chặng: 8h30 phút." }
    ],
    policy: [
      {
        title: "Chính sách bảo lưu & Hoàn vé chấn thương",
        body: `<ul>
          <li>Hỗ trợ bảo lưu suất thi đấu sang mùa giải Iron Man tiếp theo nếu VĐV có chỉ định phẫu thuật/chấn thương y tế từ bệnh viện trước 30 ngày.</li>
          <li>Không hỗ trợ hoàn tiền mặt trong mọi trường hợp do chi phí tổ chức bản quyền quốc tế và sản xuất race-kit theo tên VĐV.</li>
        </ul>`
      },
      {
        title: "Chính sách quyền lợi Finisher",
        body: `<ul>
          <li>VĐV hoàn thành trong mốc thời gian cut-off nhận được: Huy chương Finisher đúc đồng khối, Áo polo Finisher danh giá và ảnh thi đấu chuyên nghiệp miễn phí.</li>
          <li>Cơ hội tranh tài giành 45 suất tham dự Giải Vô địch Thế giới Ironman 70.3 World Championship.</li>
        </ul>`
      }
    ],
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

  // Kiểm tra sự kiện tạo từ trang quản trị trong localStorage
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

  // Khởi tạo cấu trúc mặc định cho lịch trình, nghệ sĩ và quy định
  if (!EVENT.rules || EVENT.rules.length === 0) EVENT.rules = DEFAULT_RULES;
  if (!EVENT.policy || EVENT.policy.length === 0) EVENT.policy = DEFAULT_POLICY;
  if (!EVENT.agenda) EVENT.agenda = [];
  if (!EVENT.lineup) EVENT.lineup = [];
}

async function fetchLiveEventDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get('id');
  const eventId = rawId ? Number(rawId) : 1;
  try {
    const apiHost = window.location.hostname || 'localhost';
    const res = await fetch(`http://${apiHost}:8000/api/events/${eventId}`);
    if (res.ok) {
      const evt = await res.json();
      if (evt && evt.event_name) {
        const categories = Array.isArray(evt.categories) ? evt.categories : (evt.categories || '').split(', ').filter(Boolean);
        EVENT.id = evt.event_id;
        EVENT.name = evt.event_name;
        EVENT.category = categories[0] || 'Sự kiện';
        EVENT.venue = evt.venue_name || 'Việt Nam';
        EVENT.venueAddress = evt.venue_name || 'Việt Nam';
        EVENT.organizer = evt.organizer_name || 'Ban tổ chức';
        EVENT.price = Number(evt.base_price) || 0;
        EVENT.capacity = Number(evt.capacity) || 1000;
        EVENT.registered = Number(evt.current_registrations) || 0;
        if (evt.image_url) {
          EVENT.image = evt.image_url;
        }
        if (evt.event_date) {
          EVENT.dateStart = new Date(evt.event_date);
          EVENT.dateEnd = new Date(new Date(evt.event_date).getTime() + 4 * 3600000);
          EVENT.saleEnds = new Date(EVENT.dateStart.getTime() - 3600000);
        }
        const p = EVENT.price;
        if (p === 0) {
          EVENT.tickets = [{
            id: "free",
            name: "Vé Miễn Phí (Standard Free Pass)",
            price: 0,
            originalPrice: 0,
            maxPerOrder: 2,
            remaining: Math.max(10, (EVENT.capacity || 500) - (EVENT.registered || 0)),
            status: "open",
            benefits: ["Vào cổng tham dự", "Tài liệu điện tử", "Teabreak giao lưu"],
            disabledBenefits: []
          }];
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
        renderCover();
        renderAbout();
        renderLocation();
        renderOrganizer();
        renderTicketTiers();
        renderMobileTiers();
      }
    }
  } catch (e) {}
}


const edState = {
  quantities: {},      // { ticketId: count }
  saved: false,
  saleCountdownTimer: null,
};


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
  fetchLiveEventDetails();

  // Lắng nghe sự kiện click/phím trên avatar
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

        const ddName = document.getElementById('ed-dropdown-name');
        const ddEmail = document.getElementById('ed-dropdown-email');
        const ddRole = document.getElementById('ed-dropdown-role');
        if (ddName) ddName.textContent = user.name;
        if (ddEmail) ddEmail.textContent = user.email || 'user@eventhub.vn';
        if (ddRole) {
          ddRole.textContent = user.role || 'Member';
          ddRole.className = 'ed-role-badge ' + (user.role || '').toLowerCase();
        }

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


function renderCover() {
  document.getElementById('ed-cover-bg').style.backgroundImage = `url('${EVENT.image}')`;

  document.getElementById('ed-bc-name').textContent = truncate(EVENT.name, 40);
  document.title = `${EVENT.name} — EventHub`;
  document.getElementById('ed-cover-title').textContent = EVENT.name;

  document.getElementById('ed-cover-date').textContent =
    `${formatDT(EVENT.dateStart)} → ${formatTime(EVENT.dateEnd)}`;

  document.getElementById('ed-cover-venue').textContent = EVENT.venue;

  document.getElementById('ed-cover-org').textContent = EVENT.organizer;

  const pct = Math.round(EVENT.registered / EVENT.capacity * 100);
  document.getElementById('ed-cover-sold').textContent =
    `${EVENT.registered.toLocaleString('vi-VN')} / ${EVENT.capacity.toLocaleString('vi-VN')} (${pct}%)`;

  const pct2 = Math.round(EVENT.registered / EVENT.capacity * 100);
  const statusLabel = pct2 >= 100 ? 'Hết vé' : pct2 >= 85 ? 'Sắp hết vé' : 'Đang mở bán';
  const statusClass = pct2 >= 100 ? 'ed-cb-sold' : pct2 >= 85 ? 'ed-cb-almost' : 'ed-cb-status';
  document.getElementById('ed-cover-badges').innerHTML = `
    <span class="ed-cb ed-cb-cat">${EVENT.category}</span>
    ${EVENT.isHot ? '<span class="ed-cb ed-cb-hot">⭐ HOT</span>' : ''}
    <span class="ed-cb ${statusClass}">${statusLabel}</span>
    ${EVENT.format === 'online' ? '<span class="ed-cb ed-cb-format">💻 Online</span>' : ''}
  `;

  const availableTickets = (EVENT.tickets || []).filter(t => t.status !== 'sold');
  const minPrice = availableTickets.length > 0 ? Math.min(...availableTickets.map(t => t.price)) : (EVENT.price || 0);
  document.getElementById('ed-min-price').textContent = formatVND(minPrice);
  document.getElementById('ed-mobile-price').textContent = formatVND(minPrice);
}


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


function renderAgenda() {
  const container = document.getElementById('ed-agenda-content');
  const section = document.getElementById('ed-sec-agenda');
  const tab = document.querySelector('.ed-tab[data-target="ed-sec-agenda"]');
  if (!container) return;
  if (!EVENT.agenda || EVENT.agenda.length === 0) {
    if (section) section.style.display = 'none';
    if (tab) tab.style.display = 'none';
    return;
  }
  if (section) section.style.display = '';
  if (tab) tab.style.display = '';
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


function renderLineup() {
  const container = document.getElementById('ed-lineup-content');
  const section = document.getElementById('ed-sec-lineup');
  const tab = document.querySelector('.ed-tab[data-target="ed-sec-lineup"]');
  if (!container) return;
  if (!EVENT.lineup || EVENT.lineup.length === 0) {
    if (section) section.style.display = 'none';
    if (tab) tab.style.display = 'none';
    return;
  }
  if (section) section.style.display = '';
  if (tab) tab.style.display = '';
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
        <span class="ed-lineup-role" style="background:${artist.color || '#0194F3'}cc">${artist.role}</span>
      </div>
      <div class="ed-lineup-info">
        <div class="ed-lineup-name">${artist.name}</div>
        <div class="ed-lineup-genre">${artist.genre || artist.company || artist.title || ''}</div>
      </div>
    </div>
  `).join('');
}


function renderPolicy() {
  const container = document.getElementById('ed-policy-content');
  if (!container) return;
  const rules = EVENT.rules && EVENT.rules.length > 0 ? EVENT.rules : DEFAULT_RULES;
  const policy = EVENT.policy && EVENT.policy.length > 0 ? EVENT.policy : DEFAULT_POLICY;

  container.innerHTML = `
    <div class="ed-rules-card">
      <div class="ed-rules-title">📋 Quy định chung khi tham gia sự kiện</div>
      <div class="ed-rules-grid">
        ${rules.map(r => `
          <div class="ed-rule-item">
            <div class="ed-rule-header">
              <span class="ed-rule-icon">${r.icon || '📌'}</span>
              <span>${r.title}</span>
            </div>
            <div class="ed-rule-desc">${r.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="font-size:1.05rem;font-weight:700;color:var(--txt-dark);margin-bottom:14px;display:flex;align-items:center;gap:8px">
      🛡️ Chính sách vé &amp; Điều khoản hoàn hủy
    </div>

    <div class="ed-policy-accordion">
      ${policy.map((item, i) => `
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
  if (btn.nextElementSibling) {
    btn.nextElementSibling.classList.toggle('open');
  }
}


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


function changeQty(ticketId, delta, context) {
  const ticket = EVENT.tickets.find(t => t.id === ticketId);
  if (!ticket || ticket.status === 'sold') return;

  const current = edState.quantities[ticketId] || 0;
  const next = Math.max(0, Math.min(ticket.maxPerOrder, current + delta));
  edState.quantities[ticketId] = next;

  // Đồng bộ bộ chọn số lượng vé giữa desktop và mobile
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

  // Đánh dấu hạng vé đang chọn
  tierEl.classList.toggle('ed-tier-selected', qty > 0);

  // Cập nhật trạng thái nút tăng giảm
  if (stepEl) {
    const minusBtn = stepEl.querySelector('.ed-stepper-btn:first-child');
    const plusBtn  = stepEl.querySelector('.ed-stepper-btn:last-child');
    if (minusBtn) minusBtn.disabled = qty <= 0;
    if (plusBtn)  plusBtn.disabled  = qty >= ticket.maxPerOrder;
  }
}


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

  // Hiển thị danh sách vé đã chọn
  const linesEl = document.getElementById('ed-order-lines');
  if (linesEl) {
    linesEl.innerHTML = lines.map(l => `
      <div class="ed-order-line">
        <span>${l.name} × ${l.qty}</span>
        <strong>${formatVND(l.total)}</strong>
      </div>
    `).join('');
  }

  // Tính tổng tiền vé và phí dịch vụ
  const fee = 0;
  const grand = subtotal + fee;

  setText('ed-order-subtotal', formatVND(subtotal));
  setText('ed-order-fee',      formatVND(fee));
  setText('ed-order-grand',    formatVND(grand));
  setText('ed-mobile-total',   formatVND(grand));
}


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


function proceedToCheckout() {
  const totalQty = Object.values(edState.quantities).reduce((s, q) => s + q, 0);
  if (totalQty === 0) {
    showToast('⚠️ Vui lòng chọn ít nhất 1 vé', 'error');
    return;
  }

  // Đóng gói dữ liệu giỏ vé
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

  // Lưu vào sessionStorage để trang thanh toán sử dụng
  sessionStorage.setItem('eventhub_checkout', JSON.stringify(checkoutData));
  // Lưu dự phòng vào localStorage
  localStorage.setItem('eventhub_cart', JSON.stringify(checkoutData));

  // KIỂM TRA ĐĂNG NHẬP: BẮT BUỘC ĐĂNG NHẬP ĐỂ ĐẶT VÉ
  const currentUser = typeof getHubCurrentUser === 'function' ? getHubCurrentUser() : (function() {
    try {
      const raw = localStorage.getItem('eventhub_user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  })();

  if (!currentUser) {
    sessionStorage.setItem('eventhub_pending_booking', 'true');
    showToast('⚠️ Vui lòng đăng nhập tài khoản để tiếp tục đặt vé!', 'warning');
    if (typeof openGlobalAuthModal === 'function') {
      openGlobalAuthModal();
    }
    return;
  }

  showToast(`✅ Đang chuyển đến trang thanh toán... (${totalQty} vé)`, 'success');

  setTimeout(() => {
    window.location.href = 'checkout.html';
  }, 1000);
}


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

    // Đồng bộ lên cơ sở dữ liệu nếu đã đăng nhập
    const userStr = localStorage.getItem('eventhub_user');
    const u = userStr ? JSON.parse(userStr) : null;
    const userId = u ? (u.user_id || u.id) : null;
    const apiHost = window.location.hostname || 'localhost';
    const headers = { 'Content-Type': 'application/json' };
    if (u && u.token) headers['Authorization'] = 'Bearer ' + u.token;
    if (edState.saved) {
      fetch(`http://${apiHost}:8000/api/wishlist` + (userId ? `?user_id=${userId}` : ''), {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ event_id: EVENT.id })
      }).catch(() => {});
    } else {
      fetch(`http://${apiHost}:8000/api/wishlist/${EVENT.id}` + (userId ? `?user_id=${userId}` : ''), {
        method: 'DELETE',
        headers: headers
      }).catch(() => {});
    }
  } catch (e) { /* ignore */ }
}


function switchTab(btn) {
  document.querySelectorAll('.ed-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ed-section').forEach(s => s.classList.add('ed-section-hidden'));

  btn.classList.add('active');
  const target = document.getElementById(btn.dataset.target);
  if (target) {
    target.classList.remove('ed-section-hidden');
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Tự động đánh dấu tab khi cuộn trang
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


function setupStickyHeader() {
  const header = document.getElementById('ed-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}


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

// Đóng modal chia sẻ khi click ra ngoài nền mờ
document.addEventListener('click', (e) => {
  const modal = document.getElementById('ed-share-modal');
  if (modal && e.target === modal) closeShareModal();
});


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
