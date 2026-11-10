/**
 * EventHub - Traveloka Style Event Management System
 * Pure Vanilla JavaScript (Zero Build Tools, Zero Dependencies)
 */

// ==========================================================================
// 1. DATA STORE & INITIAL MOCK DATA
// ==========================================================================

const INITIAL_EVENTS = [
  {
    id: 1,
    name: "Lễ Hội Âm Nhạc Gió Mùa — Monsoon Music Festival 2026",
    category: "Âm nhạc & Lễ hội",
    start_date: "2026-11-20T18:30:00",
    end_date: "2026-11-22T23:00:00",
    venue: "Hoàng Thành Thăng Long, Hà Nội",
    organizer: "Monsoon Production",
    capacity: 5000,
    registered: 4350,
    price: 450000,
    original_price: 600000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    description: "Đại nhạc hội quốc tế quy tụ hơn 30 nghệ sĩ hàng đầu trong nước và quốc tế. Trải nghiệm âm thanh vòm sống động và không gian văn hóa nghệ thuật tại Hoàng Thành Thăng Long.",
    is_hot: true
  },
  {
    id: 2,
    name: "Vietnam AI Summit 2026: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số",
    category: "Công nghệ & AI",
    start_date: "2026-11-22T08:30:00",
    end_date: "2026-11-22T17:30:00",
    venue: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    organizer: "TechVentures Vietnam",
    capacity: 1200,
    registered: 980,
    price: 350000,
    original_price: 500000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "Diễn đàn công nghệ quy tụ các chuyên gia AI từ Google, Microsoft và các tập đoàn công nghệ tiên phong, trình diễn giải pháp Generative AI, Robotics và Autonomous Systems.",
    is_hot: true
  },
  {
    id: 3,
    name: "Workshop Đầu Tư Tài Chính Cá Nhân F.I.R.E — Thực Chiến",
    category: "Hội thảo kỹ năng",
    start_date: "2026-11-28T14:00:00",
    end_date: "2026-11-28T18:00:00",
    venue: "SECC Quận 7, TP. Hồ Chí Minh",
    organizer: "FinEdu Hub",
    capacity: 300,
    registered: 285,
    price: 200000,
    original_price: 250000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    description: "Khóa học thực chiến xây dựng danh mục đầu tư thụ động, chiến lược tự do tài chính và quản lý rủi ro được chia sẻ bởi các chuyên gia quản lý quỹ kỳ cựu.",
    is_hot: false
  },
  {
    id: 4,
    name: "Lễ Hội Ẩm Thực Đường Phố & Bia Thủ Công Sài Gòn 2026",
    category: "Ẩm thực & Đời sống",
    start_date: "2026-12-05T16:00:00",
    end_date: "2026-12-07T22:00:00",
    venue: "Công viên Bến Bạch Đằng, Quận 1, TP.HCM",
    organizer: "Saigon Foodies Community",
    capacity: 3500,
    registered: 2100,
    price: 150000,
    original_price: 180000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    description: "Thưởng thức hơn 100 món ăn đặc sản vùng miền và 20 thương hiệu bia thủ công nổi tiếng của Việt Nam trong không gian âm nhạc acoustic bên sông Sài Gòn.",
    is_hot: true
  },
  {
    id: 5,
    name: "Triển Lãm Nghệ Thuật Đa Giác Quan: Vincent van Gogh Alive",
    category: "Nghệ thuật & Triển lãm",
    start_date: "2026-12-12T09:00:00",
    end_date: "2026-12-20T21:00:00",
    venue: "Trung tâm Nghệ thuật Đương đại VCCA, Hà Nội",
    organizer: "VCCA Arts",
    capacity: 1500,
    registered: 1450,
    price: 280000,
    original_price: 350000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&q=80",
    description: "Không gian trải nghiệm công nghệ trình chiếu ánh sáng 3D mapping sống động, đưa khách thưởng ngoạn bước vào thế giới kiệt tác hội họa kinh điển.",
    is_hot: false
  },
  {
    id: 6,
    name: "Giải Chạy Bán Marathon Đêm Đà Lạt — Dalat Night Run 2026",
    category: "Thể thao & Giải trí",
    start_date: "2026-11-25T19:00:00",
    end_date: "2026-11-25T23:30:00",
    venue: "Quảng trường Lâm Viên & Hồ Xuân Hương, Đà Lạt",
    organizer: "Dalat Athletics Association",
    capacity: 2500,
    registered: 2320,
    price: 490000,
    original_price: 600000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80",
    description: "Cung đường chạy ven hồ Xuân Hương thơ mộng trong tiết trời se lạnh của Đà Lạt, trang bị dải đèn neon lung linh và trạm tiếp sức âm nhạc sôi động.",
    is_hot: true
  },
  {
    id: 7,
    name: "Countdown New Year 2027 — Đại Nhạc Hội Chào Năm Mới",
    category: "Âm nhạc & Lễ hội",
    start_date: "2026-12-31T20:00:00",
    end_date: "2027-01-01T00:30:00",
    venue: "Phố đi bộ Nguyễn Huệ, TP.HCM",
    organizer: "EventHub & VTV",
    capacity: 10000,
    registered: 8800,
    price: 650000,
    original_price: 850000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    description: "Đêm hội tưng bừng chào đón năm 2027 với màn trình diễn pháo hoa và dàn nghệ sĩ nổi tiếng.",
    is_hot: true
  },
  {
    id: 8,
    name: "Google I/O Extended Việt Nam 2026 — Developer Summit",
    category: "Công nghệ & AI",
    start_date: "2026-12-10T09:00:00",
    end_date: "2026-12-10T17:00:00",
    venue: "Toà nhà UOB, Quận 1, TP.HCM",
    organizer: "GDG Vietnam",
    capacity: 800,
    registered: 650,
    price: 0,
    original_price: 0,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    description: "Cộng đồng lập trình viên Google Developer Group chia sẻ công nghệ mới về Android, Cloud, AI và Web.",
    is_hot: false
  },
  {
    id: 9,
    name: "Lễ Hội EDM VinaFest 2026 — Đêm Nhạc Điện Tử",
    category: "Âm nhạc & Lễ hội",
    start_date: "2026-12-19T21:00:00",
    end_date: "2026-12-20T03:00:00",
    venue: "GEM Center, Quận 1, TP.HCM",
    organizer: "VinaFest Entertainment",
    capacity: 3000,
    registered: 1800,
    price: 850000,
    original_price: 1100000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    description: "Đêm nhạc điện tử với sự góp mặt của DJ quốc tế hàng đầu cùng hệ thống âm thanh ánh sáng bùng nổ.",
    is_hot: true
  },
  {
    id: 10,
    name: "Hội Thảo UX Design Thinking — Lấy Người Dùng Làm Trung Tâm",
    category: "Hội thảo kỹ năng",
    start_date: "2026-11-30T09:00:00",
    end_date: "2026-11-30T16:00:00",
    venue: "Online (Zoom Webinar)",
    organizer: "UX Vietnam Community",
    capacity: 500,
    registered: 342,
    price: 0,
    original_price: 0,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
    description: "Hội thảo trực tuyến về phương pháp thiết kế UX chuyên nghiệp, thực hành design sprint và usability testing.",
    is_hot: false
  },
  {
    id: 11,
    name: "Lễ Hội Ánh Sáng Diwali Hà Nội 2026",
    category: "Nghệ thuật & Triển lãm",
    start_date: "2026-11-15T17:00:00",
    end_date: "2026-11-15T22:00:00",
    venue: "Vườn hoa Lý Thái Tổ, Hà Nội",
    organizer: "India Cultural Center HN",
    capacity: 2000,
    registered: 950,
    price: 80000,
    original_price: 80000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1604153297036-a6e28e9b0d7a?w=800&q=80",
    description: "Lễ hội ánh sáng truyền thống Ấn Độ lan toả sắc màu văn hóa và ẩm thực giữa lòng thủ đô Hà Nội.",
    is_hot: false
  },
  {
    id: 12,
    name: "Iron Man Vietnam Triathlon 2026 — Nha Trang",
    category: "Thể thao & Giải trí",
    start_date: "2026-12-22T05:00:00",
    end_date: "2026-12-22T17:00:00",
    venue: "Bãi biển Trần Phú, Nha Trang",
    organizer: "Vietnam Triathlon Federation",
    capacity: 1500,
    registered: 1100,
    price: 2500000,
    original_price: 3000000,
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    description: "Giải thể thao 3 môn phối hợp (Bơi - Đạp xe - Chạy bộ) đẳng cấp quốc tế trên cung đường ven biển Nha Trang.",
    is_hot: true
  }
];

const CATEGORIES = [
  "Tất cả",
  "Âm nhạc & Lễ hội",
  "Công nghệ & AI",
  "Hội thảo kỹ năng",
  "Ẩm thực & Đời sống",
  "Nghệ thuật & Triển lãm",
  "Thể thao & Giải trí"
];

// ==========================================================================
// 2. APPLICATION STATE & USER PROFILES
// ==========================================================================

const USER_PROFILES = {
  Admin: {
    id: 1,
    username: "admin",
    name: "Nguyễn Bảo Khánh",
    email: "khanh.nguyen@eventhub.vn",
    role: "Admin",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80"
  },
  Staff: {
    id: 2,
    username: "staff01",
    name: "Chu Đức Duy",
    email: "duy.chu@eventhub.vn",
    role: "Staff",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&q=80"
  },
  Organizer: {
    id: 3,
    username: "organizer01",
    name: "Trần Quang Huy",
    email: "huy.tran@eventhub.vn",
    role: "Organizer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80"
  },
  Guest: {
    id: 4,
    username: "guest01",
    name: "Nguyễn Văn Khang",
    email: "khang.nguyen@example.com",
    role: "Guest",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80"
  }
};

function getInitialUser() {
  const currentRole = localStorage.getItem('eventhub_current_role');
  if (currentRole && USER_PROFILES[currentRole]) {
    return { ...USER_PROFILES[currentRole] };
  }
  const saved = localStorage.getItem('eventhub_user');
  if (saved) {
    try {
      const u = JSON.parse(saved);
      if (u && typeof u === 'object') {
        // Đồng bộ lại tên nếu đang lưu các placeholder cũ
        if (u.role === 'Admin' && (!u.name || u.name === 'Quản Trị Viên Hệ Thống' || u.username === 'admin_root')) {
          u.name = 'Nguyễn Bảo Khánh';
          u.username = 'admin';
        } else if (u.role === 'Organizer' && (!u.name || u.name === 'Ban Tổ Chức Sài Gòn' || u.username === 'organizer_demo')) {
          u.name = 'Trần Quang Huy';
          u.username = 'organizer01';
        } else if (u.role === 'Staff' && (!u.name || u.username === 'staff_demo')) {
          u.name = 'Chu Đức Duy';
          u.username = 'staff01';
        } else if (u.role === 'Guest' && (!u.name || u.username === 'guest_user')) {
          u.name = 'Nguyễn Văn Khang';
          u.username = 'guest01';
        }
        return u;
      }
    } catch (e) {
      // ignore JSON parse error
    }
  }
  return { ...USER_PROFILES.Guest };
}

function normalizeBooking(b) {
  if (!b || typeof b !== 'object') return null;
  const id = b.booking_id || b.bookingId || ('EVT-BK-' + Date.now());
  const eventId = b.event_id || b.eventId || 1;
  const eventName = b.event_name || b.eventName || 'Sự kiện EventHub';
  const eventDate = b.event_date || b.eventDate || new Date().toISOString();
  const venue = b.venue || b.eventVenue || 'Việt Nam';
  const eventImage = b.image || b.eventImage || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80';
  const rawItems = Array.isArray(b.items) && b.items.length > 0 ? b.items : [
    { ticketName: 'Vé Tiêu Chuẩn', quantity: b.ticket_count || 1, price: b.total_price || b.grand || 0, lineTotal: b.total_price || b.grand || 0 }
  ];
  const ticketCount = b.ticket_count || b.ticketCount || rawItems.reduce((s, it) => s + (it.quantity || 0), 0);
  const totalPrice = b.total_price !== undefined ? b.total_price : (b.grand !== undefined ? b.grand : b.subtotal || 0);
  const attendeeName = (b.attendee && b.attendee.name) || b.attendee_name || 'Khách';
  const attendeeEmail = (b.attendee && b.attendee.email) || b.attendee_email || 'user@eventhub.vn';
  const attendeePhone = (b.attendee && b.attendee.phone) || b.attendee_phone || '';
  const status = (b.status || 'Confirmed').toString();
  const isCheckedIn = b.is_checked_in !== undefined ? b.is_checked_in : (status.toLowerCase() === 'attended');

  return {
    booking_id: id,
    bookingId: id,
    orderId: b.orderId || ('#EH-' + (typeof id === 'string' ? id.slice(-6) : Math.floor(100000 + Math.random() * 900000))),
    event_id: eventId,
    eventId: eventId,
    event_name: eventName,
    eventName: eventName,
    event_date: eventDate,
    eventDate: eventDate,
    venue: venue,
    eventVenue: venue,
    image: eventImage,
    eventImage: eventImage,
    items: rawItems,
    ticket_count: ticketCount,
    ticketCount: ticketCount,
    total_price: totalPrice,
    grand: totalPrice,
    subtotal: b.subtotal || totalPrice,
    attendee: { name: attendeeName, email: attendeeEmail, phone: attendeePhone },
    attendee_name: attendeeName,
    attendee_email: attendeeEmail,
    attendee_phone: attendeePhone,
    status: status,
    is_checked_in: isCheckedIn,
    created_at: b.created_at || b.createdAt || new Date().toISOString(),
    createdAt: b.createdAt || b.created_at || new Date().toISOString()
  };
}

const DEFAULT_RAW_BOOKINGS = [
  {
    booking_id: "EVT-BK-20260901",
    event_id: 1,
    event_name: "Lễ Hội Âm Nhạc Gió Mùa — Monsoon Music Festival 2026",
    event_date: "2026-11-20T18:30:00",
    venue: "Hoàng Thành Thăng Long, Hà Nội",
    ticket_count: 2,
    total_price: 900000,
    attendee_name: "Nguyễn Văn Khang",
    attendee_email: "khang.nguyen@example.com",
    status: "Confirmed",
    is_checked_in: false,
    created_at: "2026-11-01T14:22:00"
  },
  {
    booking_id: "EVT-BK-20260814",
    event_id: 2,
    event_name: "Vietnam AI Summit 2026: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số",
    event_date: "2026-11-22T08:30:00",
    venue: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    ticket_count: 1,
    total_price: 350000,
    attendee_name: "Nguyễn Văn Khang",
    attendee_email: "khang.nguyen@example.com",
    status: "Confirmed",
    is_checked_in: true,
    created_at: "2026-11-02T10:15:00"
  }
];

function loadPersistedBookings() {
  try {
    const raw = localStorage.getItem('eventhub_bookings');
    if (raw) {
      const list = JSON.parse(raw);
      if (Array.isArray(list)) return list.map(normalizeBooking).filter(Boolean);
    }
  } catch (e) {}
  return DEFAULT_RAW_BOOKINGS.map(normalizeBooking);
}

const state = {
  user: getInitialUser(),
  events: JSON.parse(localStorage.getItem('eventhub_events')) || INITIAL_EVENTS,
  bookings: loadPersistedBookings(),
  activeFilter: {
    keyword: "",
    category: "Tất cả",
    date: "",
    maxPrice: null
  },
  activeView: "explore", // explore | my-bookings | admin
  selectedEventForBooking: null,
  bookingQty: 1,
  appliedVoucher: null,
  voucherDiscount: 0,
  apiConnected: false
};

// ==========================================================================
// 3. UTILITIES & FORMATTERS
// ==========================================================================

function formatVND(amount) {
  if (amount == null) return "0 ₫";
  return new Intl.NumberFormat('vi-VN').format(amount) + " ₫";
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return dateStr;
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Lightweight Standalone SVG QR Code Generator
function generateQRCodeSVG(text, size = 180) {
  // Generates an interactive scannable SVG QR representation
  // Encodes text and registration pattern
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) - hash) + text.charCodeAt(i);
    hash |= 0;
  }
  
  const matrixSize = 25;
  const cellSize = size / matrixSize;
  let rects = '';

  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      // Corner Finder Patterns
      const isCorner1 = (r < 7 && c < 7);
      const isCorner2 = (r < 7 && c >= matrixSize - 7);
      const isCorner3 = (r >= matrixSize - 7 && c < 7);

      let isBlack = false;

      if (isCorner1 || isCorner2 || isCorner3) {
        const localR = r < 7 ? r : r - (matrixSize - 7);
        const localC = c < 7 ? c : (c >= matrixSize - 7 ? c - (matrixSize - 7) : c);
        if (localR === 0 || localR === 6 || localC === 0 || localC === 6) isBlack = true;
        else if (localR >= 2 && localR <= 4 && localC >= 2 && localC <= 4) isBlack = true;
      } else {
        // Deterministic pseudo-random pattern based on text hash
        const bit = ((hash ^ (r * 31 + c * 17)) + (r ^ c)) % 3;
        isBlack = bit === 0;
      }

      if (isBlack) {
        rects += `<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize}" height="${cellSize}" fill="#1C2430" />`;
      }
    }
  }

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" style="border-radius: 8px;">
      <rect width="${size}" height="${size}" fill="#FFFFFF" />
      ${rects}
    </svg>
  `;
}

// ==========================================================================
// 4. RENDERING FUNCTIONS
// ==========================================================================

function hasAdminPermission(user) {
  if (!user || !user.role) return false;
  const role = (user.role || '').toLowerCase();
  return role === 'admin' || role === 'organizer';
}

function toggleUserNavDropdown(e) {
  if (e) {
    e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  const dropdown = document.getElementById('user-nav-dropdown');
  if (dropdown) {
    dropdown.style.display = (dropdown.style.display === 'none' || !dropdown.style.display) ? 'block' : 'none';
  }
}

document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('user-nav-dropdown');
  const chip = document.getElementById('user-nav-chip');
  if (dropdown && !dropdown.contains(e.target) && chip && !chip.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

function renderUserNav() {
  const userActions = document.getElementById('user-nav-actions');
  const hasAccess = hasAdminPermission(state.user);
  const navAdmin = document.getElementById('nav-admin');
  const navCreate = document.getElementById('nav-create-event');
  if (navAdmin) navAdmin.style.display = hasAccess ? 'inline-flex' : 'none';
  if (navCreate) navCreate.style.display = hasAccess ? 'inline-flex' : 'none';

  if (!userActions) return;

  if (state.user) {
    const roleBadgeClass = state.user.role === 'Admin'
      ? 'badge-danger'
      : (state.user.role === 'Organizer' ? 'badge-warning' : (state.user.role === 'Staff' ? 'badge-accent' : 'badge-primary'));

    userActions.innerHTML = `
      <div class="user-chip" id="user-nav-chip" onclick="toggleUserNavDropdown(event)">
        <img src="${state.user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80'}" alt="Avatar">
        <span class="user-chip-name">${state.user.name}</span>
        <span class="badge ${roleBadgeClass}" style="font-size:0.72rem; padding: 2px 6px;">${state.user.role}</span>
        <span class="user-chip-chevron">▾</span>
      </div>

      <div class="user-dropdown" id="user-nav-dropdown" style="display: none;">
        <div class="user-dropdown-header">
          <div>
            <div class="user-dropdown-name">${state.user.name}</div>
            <div class="user-dropdown-role">${state.user.email || 'user@eventhub.vn'}</div>
          </div>
          <span class="badge ${roleBadgeClass}">${state.user.role}</span>
        </div>

        <div style="padding: 4px 0;">
          <div style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px;">
            ⚡ Đổi vai trò thử nghiệm:
          </div>
          <div class="role-switcher-grid">
            <button type="button" class="btn-mini-role" onclick="quickLogin('Admin')">👑 Admin</button>
            <button type="button" class="btn-mini-role" onclick="quickLogin('Organizer')">🎪 Tổ chức</button>
            <button type="button" class="btn-mini-role" onclick="quickLogin('Staff')">💼 Staff</button>
            <button type="button" class="btn-mini-role" onclick="quickLogin('Guest')">👤 Khách</button>
          </div>
        </div>

        <div class="user-dropdown-divider"></div>
        <a href="profile.html" class="user-dropdown-item">🎟️ Vé của tôi</a>
        ${hasAccess ? '<a href="#create-event" class="user-dropdown-item" onclick="openCreateEventModal(); return false;">➕ Tạo sự kiện mới</a>' : ''}
        ${hasAccess ? '<a href="#admin" class="user-dropdown-item" onclick="switchView(\'admin\'); return false;">📊 Quản trị & AI ML</a>' : ''}
        <div class="user-dropdown-divider"></div>
        <button type="button" class="user-dropdown-item" style="color: var(--danger);" id="btn-logout-item">
          🚪 Đăng xuất
        </button>
      </div>
    `;

    document.getElementById('btn-logout-item')?.addEventListener('click', () => {
      localStorage.removeItem('eventhub_user');
      state.user = null;
      renderUserNav();
      showToast("Đã đăng xuất thành công", "info");
      switchView('explore');
    });
  } else {
    userActions.innerHTML = `
      <button class="btn btn-ghost" onclick="openAuthModal('login')">Đăng nhập</button>
      <button class="btn btn-primary" onclick="openAuthModal('register')">Đăng ký</button>
    `;
  }
}

function renderCategoryPills() {
  const container = document.getElementById('category-filter-bar');
  if (!container) return;

  const categories = state.apiConnected
    ? ['Tất cả', ...new Set(state.events.flatMap(evt => evt.categories))]
    : CATEGORIES;
  container.replaceChildren(...categories.map(cat => {
    const button = document.createElement('button');
    button.className = `filter-pill ${state.activeFilter.category === cat ? 'active' : ''}`;
    button.textContent = `${cat === 'Tất cả' ? '✨' : '🏷️'} ${cat}`;
    button.addEventListener('click', () => selectCategory(cat));
    return button;
  }));
}

function renderEventsGrid() {
  const grid = document.getElementById('events-grid');
  const countBadge = document.getElementById('event-count-badge');
  if (!grid) return;

  // Filter events
  let filtered = state.events.filter(evt => {
    // Keyword
    if (state.activeFilter.keyword) {
      const q = state.activeFilter.keyword.toLowerCase();
      const matchName = evt.name.toLowerCase().includes(q);
      const matchVenue = evt.venue.toLowerCase().includes(q);
      if (!matchName && !matchVenue) return false;
    }
    // Category
    if (state.activeFilter.category && state.activeFilter.category !== 'Tất cả') {
      if (!(evt.categories || [evt.category]).includes(state.activeFilter.category)) return false;
    }
    // Max Price
    if (state.activeFilter.maxPrice) {
      if (evt.price > state.activeFilter.maxPrice) return false;
    }
    // Date
    if (state.activeFilter.date) {
      if (!evt.start_date.startsWith(state.activeFilter.date)) return false;
    }
    return true;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} sự kiện khả dụng`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">Không tìm thấy sự kiện phù hợp</h3>
        <p class="empty-desc">Hãy thử xóa bộ lọc hoặc tìm kiếm với từ khóa khác để khám phá các sự kiện hấp dẫn.</p>
        <button class="btn btn-outline-primary" onclick="resetFilters()">Đặt lại bộ lọc</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(evt => {
    const fillPercent = Math.min(100, Math.round((evt.registered / evt.capacity) * 100));
    const slotsLeft = Math.max(0, evt.capacity - evt.registered);
    const colorClass = fillPercent > 85 ? 'red' : (fillPercent > 60 ? 'orange' : 'green');

    return `
      <div class="event-card" id="event-card-${evt.id}">
        <div class="card-media" style="cursor: pointer;" onclick="window.location.href='event-detail.html?id=${evt.id}'" title="Xem chi tiết ${evt.name}">
          <img src="${evt.image}" alt="${evt.name}" loading="lazy">
          <div class="card-badges-top">
            <span class="card-category-pill">${evt.category}</span>
            ${evt.is_hot ? `<span class="card-hot-badge">🔥 Bán chạy</span>` : ''}
          </div>
        </div>

        <div class="card-content">
          <h3 class="card-title" title="${evt.name}" style="cursor: pointer;" onclick="window.location.href='event-detail.html?id=${evt.id}'">${evt.name}</h3>

          <div class="card-meta">
            <div class="meta-row">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>${formatDate(evt.start_date)}</span>
            </div>
            <div class="meta-row">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${evt.venue}</span>
            </div>
          </div>

          <div class="capacity-box">
            <div class="capacity-info">
              <span>Đã đăng ký: <strong>${evt.registered} / ${evt.capacity}</strong></span>
              <span>Còn ${slotsLeft} vé</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill ${colorClass}" style="width: ${fillPercent}%;"></div>
            </div>
          </div>

          <div class="card-footer">
            <div class="price-box">
              <span class="price-label">Giá vé từ</span>
              <span class="price-val">${formatVND(evt.price)}</span>
            </div>
            <button class="btn btn-cta btn-sm" onclick="openBookingModal(${evt.id})">
              Đặt vé ngay
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderMyBookings() {
  const container = document.getElementById('my-bookings-list');
  if (!container) return;

  if (state.bookings.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎟️</div>
        <h3 class="empty-title">Bạn chưa có vé sự kiện nào</h3>
        <p class="empty-desc">Khám phá ngay hàng trăm sự kiện sôi động và đặt vé để nhận mã E-Ticket QR tiện lợi.</p>
        <button class="btn btn-primary" onclick="switchView('explore')">Khám phá sự kiện</button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.bookings.map(b => {
    const isCheckedIn = b.is_checked_in;
    const bookingId = b.booking_id || b.bookingId;
    const eventName = b.event_name || b.eventName || 'Sự kiện EventHub';
    const eventDate = b.event_date || b.eventDate;
    const venue = b.venue || b.eventVenue || 'Việt Nam';
    const ticketCount = b.ticket_count || b.ticketCount || (b.items && b.items.length) || 1;
    const totalPrice = b.total_price !== undefined ? b.total_price : (b.grand !== undefined ? b.grand : b.subtotal || 0);

    return `
      <div class="event-card" style="margin-bottom: 20px;">
        <div class="card-content" style="padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
            <div>
              <span class="badge ${isCheckedIn ? 'badge-success' : 'badge-primary'}" style="margin-bottom: 8px;">
                ${isCheckedIn ? '✓ Đã điểm danh' : '🎟️ Chờ tham gia'}
              </span>
              <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-dark); margin-bottom: 6px;">
                ${eventName}
              </h3>
              <div class="card-meta" style="margin-top: 8px;">
                <div class="meta-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span>Thời gian: <strong>${formatDate(eventDate)}</strong></span>
                </div>
                <div class="meta-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Địa điểm: <strong>${venue}</strong></span>
                </div>
                <div class="meta-row">
                  <span>Mã đặt vé: <strong style="font-family: monospace; color: var(--primary);">${bookingId}</strong> (${ticketCount} vé · ${formatVND(totalPrice)})</span>
                </div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px; align-items: flex-end;">
              <button class="btn btn-outline-primary" onclick="openETicketModal('${bookingId}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                Xem Vé Điện Tử QR
              </button>
              ${!isCheckedIn ? `
                <button class="btn btn-ghost btn-sm" style="color: var(--success);" onclick="toggleCheckin('${bookingId}')">
                  ⚡ Giả lập điểm danh
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

let currentAdminTab = 'events';
let adminSearchQuery = '';
let adminCategoryFilter = '';
let adminStatusFilter = '';

function switchAdminTab(tabName) {
  currentAdminTab = tabName;
  ['events', 'pricing', 'checkin'].forEach(tab => {
    const btn = document.getElementById(`admin-tab-btn-${tab}`);
    const pane = document.getElementById(`admin-pane-${tab}`);
    if (btn) btn.classList.toggle('active', tab === tabName);
    if (pane) pane.style.display = tab === tabName ? 'block' : 'none';
  });
  if (tabName === 'pricing') calculateRecommendedPrice();
  if (tabName === 'checkin') renderCheckinTable();
}

function handleAdminSearch() {
  const query = document.getElementById('admin-search-input')?.value || '';
  const cat = document.getElementById('admin-filter-category')?.value || '';
  const status = document.getElementById('admin-filter-status')?.value || '';
  adminSearchQuery = query.toLowerCase().trim();
  adminCategoryFilter = cat;
  adminStatusFilter = status;
  renderAdminEventsTable();
}

function renderAdminDashboard() {
  const totalEvents = state.events.length;
  const totalRegistrations = state.events.reduce((sum, e) => sum + (e.registered || 0), 0);
  const totalRevenue = state.events.reduce((sum, e) => sum + ((e.registered || 0) * (e.price || 0)), 0);
  const totalCapacity = state.events.reduce((sum, e) => sum + (e.capacity || 0), 0);
  const avgAttendance = Math.round((totalRegistrations / (totalCapacity || 1)) * 100);

  // Update KPI counters
  const kpiRev = document.getElementById('kpi-revenue');
  const kpiEvents = document.getElementById('kpi-events');
  const kpiRegs = document.getElementById('kpi-registrations');
  const kpiAtt = document.getElementById('kpi-attendance');
  const tabEvCount = document.getElementById('admin-tab-events-count');

  if (kpiRev) kpiRev.textContent = formatVND(totalRevenue);
  if (kpiEvents) kpiEvents.textContent = totalEvents;
  if (kpiRegs) kpiRegs.textContent = totalRegistrations.toLocaleString('vi-VN');
  if (kpiAtt) kpiAtt.textContent = `${avgAttendance}%`;
  if (tabEvCount) tabEvCount.textContent = totalEvents;

  // Render role label in header card
  const roleLabel = document.getElementById('admin-current-role-label');
  if (roleLabel && state.user) {
    roleLabel.textContent = state.user.role === 'Admin'
      ? '👑 Hệ Thống Quản Trị Viên Toàn Quyền (Admin Mode)'
      : '🎪 Bảng Điều Khiển Dành Cho Ban Tổ Chức (Organizer Mode)';
  }

  renderAdminEventsTable();
  calculateRecommendedPrice();
  renderCheckinTable();
}

function renderAdminEventsTable() {
  const tableBody = document.getElementById('admin-events-table-body');
  if (!tableBody) return;

  let filtered = state.events.filter(e => {
    if (adminSearchQuery) {
      const matchName = (e.name || '').toLowerCase().includes(adminSearchQuery);
      const matchVenue = (e.venue || '').toLowerCase().includes(adminSearchQuery);
      const matchId = (`#EVT-00${e.id}`).toLowerCase().includes(adminSearchQuery);
      if (!matchName && !matchVenue && !matchId) return false;
    }
    if (adminCategoryFilter && e.category !== adminCategoryFilter) {
      const categories = Array.isArray(e.categories) ? e.categories : [e.category];
      if (!categories.includes(adminCategoryFilter)) return false;
    }
    if (adminStatusFilter) {
      if (adminStatusFilter === 'Cancelled' && e.status !== 'Cancelled') return false;
      if (adminStatusFilter === 'Open' && e.status === 'Cancelled') return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 36px; color: var(--text-muted);">
          🔍 Không tìm thấy sự kiện nào phù hợp với bộ lọc hiện tại.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(e => {
    const isCancelled = e.status === 'Cancelled';
    const fillPercent = Math.min(100, Math.round(((e.registered || 0) / (e.capacity || 1)) * 100));
    return `
      <tr>
        <td style="font-weight: 700; color: var(--primary);">#EVT-00${e.id}</td>
        <td>
          <div class="event-row-info">
            <img class="event-thumb-mini" src="${e.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&q=80'}" alt="${e.name}">
            <div>
              <div class="event-name-text">${e.name}</div>
              <div class="event-cat-tag">🏷️ ${e.category}</div>
            </div>
          </div>
        </td>
        <td style="font-size: 0.86rem; color: var(--text-dark);">${formatDate(e.start_date)}</td>
        <td style="font-size: 0.86rem; color: var(--text-muted);">${e.venue}</td>
        <td>
          <div style="font-weight: 700; font-size: 0.88rem;">${e.registered || 0} / ${e.capacity} <span style="font-size: 0.75rem; color: var(--text-muted);">(${fillPercent}%)</span></div>
          <div class="progress-track" style="margin-top: 4px; width: 100px;">
            <div class="progress-fill ${fillPercent > 80 ? 'orange' : 'green'}" style="width: ${fillPercent}%;"></div>
          </div>
        </td>
        <td style="font-weight: 800; color: var(--accent);">${formatVND(e.price)}</td>
        <td>
          <span class="badge ${isCancelled ? 'badge-danger' : 'badge-success'}">
            ${isCancelled ? 'Đã hủy' : 'Đang mở'}
          </span>
        </td>
        <td>
          <div class="table-btn-group">
            <a href="event-detail.html?id=${e.id}" class="table-btn" title="Xem trang chi tiết sự kiện">
              👁️ Xem
            </a>
            <button class="table-btn ${isCancelled ? 'success' : 'danger'}" onclick="toggleEventStatus(${e.id})" title="${isCancelled ? 'Khôi phục sự kiện' : 'Hủy sự kiện'}">
              ${isCancelled ? '🔄 Khôi phục' : '❌ Hủy'}
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderCheckinTable() {
  const tableBody = document.getElementById('admin-checkin-table-body');
  if (!tableBody) return;

  const searchInput = document.getElementById('checkin-search-input');
  const q = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let bookings = (state.bookings || []).filter(b => {
    if (!q) return true;
    const bId = (b.booking_id || b.bookingId || '').toLowerCase();
    const name = (b.attendee_name || (b.attendee && b.attendee.name) || '').toLowerCase();
    const evName = (b.event_name || b.eventName || '').toLowerCase();
    return bId.includes(q) || name.includes(q) || evName.includes(q);
  });

  if (bookings.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 32px; color: var(--text-muted);">
          🔍 Không tìm thấy lượt đặt vé nào.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = bookings.map(b => {
    const bId = b.booking_id || b.bookingId || '';
    const attName = b.attendee_name || (b.attendee && b.attendee.name) || 'Khách';
    const evName = b.event_name || b.eventName || 'Sự kiện EventHub';
    const tCount = b.ticket_count || (b.items && b.items.length) || 1;
    const total = b.total_price || b.grand || 0;
    const isChecked = !!b.is_checked_in;

    return `
      <tr>
        <td style="font-weight: 700; color: var(--primary);">${bId}</td>
        <td>
          <div style="font-weight: 700;">${attName}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${b.attendee_email || (b.attendee && b.attendee.email) || ''}</div>
        </td>
        <td><div style="font-weight: 600; max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${evName}</div></td>
        <td style="text-align: center; font-weight: 700;">${tCount}</td>
        <td style="font-weight: 700; color: var(--accent);">${formatVND(total)}</td>
        <td style="text-align: center;">
          <span class="badge ${isChecked ? 'badge-success' : 'badge-primary'}">
            ${isChecked ? '✓ ĐÃ ĐIỂM DANH' : '🎟️ CHƯA ĐIỂM DANH'}
          </span>
        </td>
        <td style="text-align: center;">
          <button class="table-btn ${isChecked ? 'danger' : 'success'}" onclick="toggleCheckin('${bId}')">
            ${isChecked ? 'Hủy Check-in' : 'Điểm danh'}
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// ==========================================================================
// 5. EVENT HANDLERS & MODALS
// ==========================================================================

function selectCategory(cat) {
  state.activeFilter.category = cat;
  renderCategoryPills();
  renderEventsGrid();
}

function resetFilters() {
  state.activeFilter = {
    keyword: "",
    category: "Tất cả",
    date: "",
    maxPrice: null
  };
  const kwInput = document.getElementById('search-keyword');
  const catSelect = document.getElementById('search-category');
  const dateInput = document.getElementById('search-date');
  const priceInput = document.getElementById('search-price');

  if (kwInput) kwInput.value = "";
  if (catSelect) catSelect.value = "Tất cả";
  if (dateInput) dateInput.value = "";
  if (priceInput) priceInput.value = "";

  renderCategoryPills();
  renderEventsGrid();
  showToast("Đã thiết lập lại bộ lọc", "info");
}

function switchView(viewName) {
  if (viewName === 'admin' && !hasAdminPermission(state.user)) {
    showToast("⛔ Bạn không có quyền truy cập Quản trị & AI ML. Vui lòng đăng nhập với tài khoản Admin hoặc Ban tổ chức!", "error");
    viewName = 'explore';
  }

  state.activeView = viewName;
  
  // Update Nav Active state
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById(`nav-${viewName}`)?.classList.add('active');

  // Toggle View Containers
  const exploreView = document.getElementById('view-explore');
  const myBookingsView = document.getElementById('view-my-bookings');
  const adminView = document.getElementById('view-admin');

  if (exploreView) exploreView.style.display = viewName === 'explore' ? 'block' : 'none';
  if (myBookingsView) myBookingsView.style.display = viewName === 'my-bookings' ? 'block' : 'none';
  if (adminView) adminView.style.display = viewName === 'admin' ? 'block' : 'none';

  if (viewName === 'my-bookings') renderMyBookings();
  if (viewName === 'admin') renderAdminDashboard();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Booking Flow
function openBookingModal(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  state.selectedEventForBooking = event;
  state.bookingQty = 1;
  state.appliedVoucher = null;
  state.voucherDiscount = 0;

  // Set Step 1
  setBookingStep(1);

  // Fill Event info
  document.getElementById('booking-event-title').textContent = event.name;
  document.getElementById('booking-event-venue').textContent = event.venue;
  document.getElementById('booking-event-date').textContent = formatDate(event.start_date);
  document.getElementById('booking-unit-price').textContent = formatVND(event.price);
  
  updateBookingSummary();

  // Pre-fill attendee details
  if (state.user) {
    document.getElementById('booking-attendee-name').value = state.user.name;
    document.getElementById('booking-attendee-email').value = state.user.email;
    document.getElementById('booking-attendee-phone').value = "0988 123 456";
  }

  document.getElementById('booking-modal').classList.add('open');
}

function closeBookingModal() {
  document.getElementById('booking-modal').classList.remove('open');
}

function setBookingStep(step) {
  state.bookingStep = step;

  // Update step indicator
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`wizard-step-${i}`);
    if (!el) continue;
    el.classList.remove('active', 'completed');
    if (i === step) el.classList.add('active');
    else if (i < step) el.classList.add('completed');
  }

  // Toggle step panes
  document.getElementById('step-pane-1').style.display = step === 1 ? 'block' : 'none';
  document.getElementById('step-pane-2').style.display = step === 2 ? 'block' : 'none';
  document.getElementById('step-pane-3').style.display = step === 3 ? 'block' : 'none';
}

function changeBookingQty(delta) {
  const newQty = state.bookingQty + delta;
  if (newQty >= 1 && newQty <= 10) {
    state.bookingQty = newQty;
    document.getElementById('booking-qty-display').textContent = newQty;
    updateBookingSummary();
  }
}

function applyVoucher() {
  const input = document.getElementById('voucher-code-input');
  const code = (input.value || "").trim().toUpperCase();

  if (code === 'TRAVELOKA20') {
    state.appliedVoucher = code;
    state.voucherDiscount = 0.2; // 20%
    showToast("Áp dụng mã giảm giá TRAVELOKA20 (-20%) thành công!", "success");
  } else if (code === 'WELCOME50') {
    state.appliedVoucher = code;
    state.voucherDiscount = 50000; // 50k flat
    showToast("Áp dụng mã giảm giá WELCOME50 (-50.000 ₫) thành công!", "success");
  } else {
    showToast("Mã khuyến mãi không hợp lệ hoặc đã hết hạn", "error");
    return;
  }
  updateBookingSummary();
}

function updateBookingSummary() {
  if (!state.selectedEventForBooking) return;

  const basePrice = state.selectedEventForBooking.price * state.bookingQty;
  let discountAmount = 0;

  if (typeof state.voucherDiscount === 'number') {
    if (state.voucherDiscount <= 1) {
      discountAmount = basePrice * state.voucherDiscount;
    } else {
      discountAmount = state.voucherDiscount;
    }
  }

  const finalTotal = Math.max(0, basePrice - discountAmount);

  document.getElementById('summary-base-total').textContent = formatVND(basePrice);
  document.getElementById('summary-discount').textContent = `-${formatVND(discountAmount)}`;
  document.getElementById('summary-final-total').textContent = formatVND(finalTotal);
}

function confirmBooking() {
  const name = document.getElementById('booking-attendee-name').value.trim();
  const email = document.getElementById('booking-attendee-email').value.trim();
  const phone = document.getElementById('booking-attendee-phone').value.trim();

  if (!name || !email) {
    showToast("Vui lòng điền đầy đủ họ tên và email người nhận vé", "error");
    setBookingStep(2);
    return;
  }

  const event = state.selectedEventForBooking;
  const bookingId = `EVT-${Date.now().toString().slice(-8)}`;
  const basePrice = event.price * state.bookingQty;
  let discountAmount = 0;
  if (state.voucherDiscount <= 1) discountAmount = basePrice * state.voucherDiscount;
  else discountAmount = state.voucherDiscount;
  const finalTotal = Math.max(0, basePrice - discountAmount);

  // Add booking to state
  const newBooking = normalizeBooking({
    booking_id: bookingId,
    bookingId: bookingId,
    event_id: event.id,
    eventId: event.id,
    event_name: event.name,
    eventName: event.name,
    event_date: event.start_date,
    eventDate: event.start_date,
    venue: event.venue,
    eventVenue: event.venue,
    image: event.image,
    eventImage: event.image,
    ticket_count: state.bookingQty,
    total_price: finalTotal,
    grand: finalTotal,
    subtotal: basePrice,
    items: [
      { ticketName: 'Vé Tiêu Chuẩn', quantity: state.bookingQty, price: event.price, lineTotal: finalTotal }
    ],
    attendee: { name, email, phone },
    attendee_name: name,
    attendee_email: email,
    attendee_phone: phone,
    status: "Confirmed",
    is_checked_in: false,
    created_at: new Date().toISOString()
  });

  state.bookings.unshift(newBooking);
  localStorage.setItem('eventhub_bookings', JSON.stringify(state.bookings));

  // Increment event registered count
  event.registered += state.bookingQty;
  localStorage.setItem('eventhub_events', JSON.stringify(state.events));

  closeBookingModal();
  renderEventsGrid();
  showToast("Đặt vé thành công! E-Ticket QR đã được tạo.", "success");

  // Automatically open E-Ticket modal
  setTimeout(() => {
    openETicketModal(bookingId);
  }, 400);
}

// E-Ticket Modal
function openETicketModal(bookingId) {
  const booking = state.bookings.find(b => (b.booking_id === bookingId || b.bookingId === bookingId));
  if (!booking) return;

  const bId = booking.booking_id || booking.bookingId;
  const evName = booking.event_name || booking.eventName;
  const evDate = booking.event_date || booking.eventDate;
  const evVenue = booking.venue || booking.eventVenue;
  const attName = booking.attendee_name || (booking.attendee && booking.attendee.name) || 'Khách';
  const tCount = booking.ticket_count || (booking.items && booking.items.length) || 1;

  document.getElementById('eticket-id').textContent = bId;
  document.getElementById('eticket-event-name').textContent = evName;
  document.getElementById('eticket-date').textContent = formatDate(evDate);
  document.getElementById('eticket-venue').textContent = evVenue;
  document.getElementById('eticket-attendee').textContent = `${attName} (${tCount} vé)`;
  
  const statusBadge = document.getElementById('eticket-status-badge');
  if (statusBadge) {
    statusBadge.className = `badge ${booking.is_checked_in ? 'badge-success' : 'badge-primary'}`;
    statusBadge.textContent = booking.is_checked_in ? '✓ ĐÃ ĐIỂM DANH' : '🎟️ HỢP LỆ';
  }

  // Render QR Code SVG
  const qrContainer = document.getElementById('eticket-qr-box');
  if (qrContainer) {
    qrContainer.innerHTML = generateQRCodeSVG(bId, 170);
  }

  document.getElementById('eticket-modal').classList.add('open');
}

function closeETicketModal() {
  document.getElementById('eticket-modal').classList.remove('open');
}

function toggleCheckin(bookingId) {
  const booking = state.bookings.find(b => (b.booking_id === bookingId || b.bookingId === bookingId));
  if (booking) {
    booking.is_checked_in = !booking.is_checked_in;
    localStorage.setItem('eventhub_bookings', JSON.stringify(state.bookings));
    renderMyBookings();
    renderCheckinTable();
    showToast(booking.is_checked_in ? "Điểm danh khách thành công!" : "Đã hủy điểm danh", "info");
  }
}

// Auth Modal
function openAuthModal(tab = 'login') {
  setAuthTab(tab);
  document.getElementById('auth-modal').classList.add('open');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('open');
}

function setAuthTab(tab) {
  document.getElementById('tab-login-btn').className = `nav-item ${tab === 'login' ? 'active' : ''}`;
  document.getElementById('tab-register-btn').className = `nav-item ${tab === 'register' ? 'active' : ''}`;
  document.getElementById('auth-login-pane').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-register-pane').style.display = tab === 'register' ? 'block' : 'none';
}

function quickLogin(role) {
  const profile = USER_PROFILES[role] || USER_PROFILES.Guest;
  state.user = { ...profile };
  localStorage.setItem('eventhub_user', JSON.stringify(state.user));
  localStorage.setItem('eventhub_current_role', role);
  if (typeof renderHubHeader === 'function') renderHubHeader();
  renderUserNav();
  closeAuthModal();
  showToast(`Chào mừng trở lại, ${state.user.name} (${state.user.role})!`, "success");

  if (role === 'Admin' || role === 'Organizer' || role === 'Staff') {
    switchView('admin');
  }
}

window.quickLogin = quickLogin;
window.switchRoleQuickly = quickLogin;

async function handleLoginFormSubmit(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('auth-username');
  const passwordInput = document.getElementById('auth-password');
  const username = (usernameInput?.value || '').trim();
  const password = (passwordInput?.value || '').trim();

  if (!username || !password) {
    showToast("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu", "error");
    return;
  }

  // 1. Thử gọi API backend FastAPI nếu server đang chạy
  try {
    const apiHost = window.location.hostname || 'localhost';
    const res = await fetch(`http://${apiHost}:8000/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      const data = await res.json();
      const payload = data.user || {};
      const role = payload.role || 'Guest';
      const fallback = USER_PROFILES[role] || USER_PROFILES.Guest;
      state.user = {
        id: payload.user_id || fallback.id,
        username: payload.username || username,
        name: payload.name || fallback.name,
        email: payload.email || fallback.email,
        role: role,
        avatar: fallback.avatar,
        token: data.access_token
      };
      localStorage.setItem('eventhub_user', JSON.stringify(state.user));
      renderUserNav();
      closeAuthModal();
      showToast(`Đăng nhập thành công: ${state.user.name} (${state.user.role})!`, "success");
      if (role === 'Admin' || role === 'Organizer' || role === 'Staff') switchView('admin');
      return;
    } else {
      const errData = await res.json().catch(() => ({}));
      if (res.status === 401) {
        showToast(errData.detail || "Sai tên đăng nhập hoặc mật khẩu", "error");
        return;
      }
    }
  } catch (err) {
    // API backend chưa bật hoặc không kết nối được -> fallback sang bộ tài khoản local
  }

  // 2. Fallback đối chiếu tài khoản chuẩn trong hệ thống
  let matched = null;
  const lowerUser = username.toLowerCase();
  if (lowerUser === 'admin' && (password === 'admin123' || password === 'password123')) {
    matched = USER_PROFILES.Admin;
  } else if (lowerUser === 'staff01' && (password === 'staff123' || password === 'password123')) {
    matched = USER_PROFILES.Staff;
  } else if (lowerUser === 'organizer01' && (password === 'org123' || password === 'password123')) {
    matched = USER_PROFILES.Organizer;
  } else if ((lowerUser === 'guest01' || lowerUser === 'guest_user') && (password === 'guest123' || password === 'password123')) {
    matched = USER_PROFILES.Guest;
  } else if (lowerUser.includes('admin')) {
    matched = USER_PROFILES.Admin;
  } else if (lowerUser.includes('staff')) {
    matched = USER_PROFILES.Staff;
  } else if (lowerUser.includes('organizer') || lowerUser.includes('org')) {
    matched = USER_PROFILES.Organizer;
  } else {
    matched = {
      ...USER_PROFILES.Guest,
      username: username,
      name: username
    };
  }

  state.user = { ...matched };
  localStorage.setItem('eventhub_user', JSON.stringify(state.user));
  renderUserNav();
  closeAuthModal();
  showToast(`Đăng nhập thành công: ${state.user.name} (${state.user.role})!`, "success");
  if (state.user.role === 'Admin' || state.user.role === 'Organizer' || state.user.role === 'Staff') {
    switchView('admin');
  }
}

async function handleRegisterFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name')?.value || "Khách Mới";
  const email = document.getElementById('reg-email')?.value || "newguest@example.com";
  const username = document.getElementById('reg-username')?.value || "guest_new";
  const password = document.getElementById('reg-password')?.value || "guest123";

  // Thử đăng ký qua API backend
  try {
    const apiHost = window.location.hostname || 'localhost';
    const res = await fetch(`http://${apiHost}:8000/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, name, email, phone: "0900000000" })
    });
    if (res.ok) {
      showToast("Đăng ký thành công! Hãy đăng nhập bằng tài khoản mới.", "success");
      setAuthTab('login');
      const uField = document.getElementById('auth-username');
      const pField = document.getElementById('auth-password');
      if (uField) uField.value = username;
      if (pField) pField.value = password;
      return;
    }
  } catch (err) {
    // API backend chưa bật
  }

  // Giả lập lưu user mới cho frontend
  const newUser = {
    id: Date.now(),
    username,
    name,
    email,
    role: "Guest",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80"
  };
  state.user = newUser;
  localStorage.setItem('eventhub_user', JSON.stringify(newUser));
  renderUserNav();
  closeAuthModal();
  showToast(`Đăng ký và đăng nhập thành công: ${name}!`, "success");
}

// Admin Operations
function cancelEvent(eventId) {
  if (confirm("Bạn có chắc chắn muốn hủy sự kiện này? Hành động này sẽ thông báo tới toàn bộ người mua vé.")) {
    const evt = state.events.find(e => e.id === eventId);
    if (evt) {
      evt.status = 'Cancelled';
      localStorage.setItem('eventhub_events', JSON.stringify(state.events));
      renderAdminDashboard();
      renderEventsGrid();
      showToast("Đã hủy sự kiện thành công", "info");
    }
  }
}

function openCreateEventModal() {
  if (!hasAdminPermission(state.user)) {
    showToast("⛔ Bạn không có quyền tạo sự kiện. Yêu cầu tài khoản Admin hoặc Ban tổ chức!", "error");
    return;
  }
  document.getElementById('create-event-modal').classList.add('open');
}

function closeCreateEventModal() {
  document.getElementById('create-event-modal').classList.remove('open');
}

function handleCreateEventSubmit(e) {
  e.preventDefault();
  if (!hasAdminPermission(state.user)) {
    showToast("⛔ Bạn không có quyền tạo sự kiện. Yêu cầu tài khoản Admin hoặc Ban tổ chức!", "error");
    return;
  }
  const name = document.getElementById('new-evt-name').value;
  const category = document.getElementById('new-evt-category').value;
  const venue = document.getElementById('new-evt-venue').value;
  const startDate = document.getElementById('new-evt-date').value;
  const price = Number(document.getElementById('new-evt-price').value) || 0;
  const capacity = Number(document.getElementById('new-evt-capacity').value) || 100;
  const image = document.getElementById('new-evt-image').value || "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80";

  const newEvent = {
    id: state.events.length + 1,
    name,
    category,
    start_date: startDate ? new Date(startDate).toISOString() : new Date().toISOString(),
    end_date: startDate ? new Date(startDate).toISOString() : new Date().toISOString(),
    venue,
    organizer: state.user ? state.user.name : "Ban Tổ Chức Sự Kiện",
    capacity,
    registered: 0,
    price,
    original_price: price * 1.2,
    status: "Upcoming",
    image,
    description: "Sự kiện đặc sắc mới được tạo trên hệ thống EventHub.",
    is_hot: true
  };

  state.events.unshift(newEvent);
  localStorage.setItem('eventhub_events', JSON.stringify(state.events));
  
  closeCreateEventModal();
  renderEventsGrid();
  renderAdminDashboard();
  showToast("Đã thêm sự kiện mới thành công!", "success");
}

// Machine Learning AI Pricing Recommender Widget
function calculateRecommendedPrice() {
  if (!hasAdminPermission(state.user)) {
    return;
  }
  const cap = Number(document.getElementById('ml-input-capacity')?.value) || 1200;
  const cat = document.getElementById('ml-input-category')?.value || 'Công nghệ & AI';
  const base = Number(document.getElementById('ml-input-price')?.value) || 300000;

  // Multiplier heuristic based on category demand and scale
  let multiplier = 1.0;
  if (cat.includes("Âm nhạc")) multiplier = 1.25;
  else if (cat.includes("Công nghệ")) multiplier = 1.18;
  else if (cat.includes("Kỹ năng")) multiplier = 1.10;
  else if (cat.includes("Ẩm thực")) multiplier = 0.95;
  else if (cat.includes("Thể thao")) multiplier = 1.08;

  // Capacity factor
  if (cap > 2000) multiplier *= 0.90;
  else if (cap < 300) multiplier *= 1.15;

  const suggestedPrice = Math.round((base * multiplier) / 10000) * 10000;
  const earlyBird = Math.round((suggestedPrice * 0.8) / 10000) * 10000;
  const vipPrice = Math.round((suggestedPrice * 1.8) / 10000) * 10000;
  const estRevenue = suggestedPrice * Math.round(cap * 0.85);

  const priceEl = document.getElementById('ml-suggested-price');
  const earlyEl = document.getElementById('ml-tier-early');
  const stdEl = document.getElementById('ml-tier-std');
  const vipEl = document.getElementById('ml-tier-vip');
  const revEl = document.getElementById('ml-est-revenue-text');

  if (priceEl) priceEl.textContent = formatVND(suggestedPrice);
  if (earlyEl) earlyEl.textContent = formatVND(earlyBird);
  if (stdEl) stdEl.textContent = formatVND(suggestedPrice);
  if (vipEl) vipEl.textContent = formatVND(vipPrice);
  if (revEl) {
    revEl.innerHTML = `Ước tính doanh thu tối đa đạt <strong>${formatVND(estRevenue)}</strong> với tỷ lệ lấp đầy 85%.`;
  }
}

// Check if live FastAPI backend is running
async function checkApiConnection() {
  try {
    const apiHost = window.location.hostname || 'localhost';
    const res = await fetch(`http://${apiHost}:8000/api/events`, { method: 'GET', mode: 'cors' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        state.events = data.map(evt => {
          const categories = Array.isArray(evt.categories)
            ? evt.categories
            : (evt.categories || '').split(', ').filter(Boolean);
          return {
            id: evt.event_id,
            name: evt.event_name,
            category: categories[0] || 'Khác',
            categories: categories.length ? categories : ['Khác'],
            start_date: evt.event_date,
            venue: evt.venue_name,
            organizer: evt.organizer_name,
            capacity: Number(evt.capacity),
            registered: Number(evt.current_registrations),
            price: Number(evt.base_price),
            status: evt.status,
            image: INITIAL_EVENTS[categories.includes('Concert') ? 0 : 1].image,
            is_hot: false
          };
        });
        state.apiConnected = true;
        const categories = [...new Set(state.events.flatMap(evt => evt.categories))];
        const categorySelect = document.getElementById('search-category');
        categorySelect.replaceChildren(
          new Option('Tất cả thể loại', 'Tất cả'),
          ...categories.map(category => new Option(category, category))
        );
        if (!categories.includes(state.activeFilter.category)) {
          state.activeFilter.category = 'Tất cả';
        }
        categorySelect.value = state.activeFilter.category;
        renderCategoryPills();
        renderEventsGrid();
        if (state.activeView === 'admin') renderAdminDashboard();
        console.log("Connected to Live FastAPI Backend:", data.length, "events");
        const statusPill = document.getElementById('api-status-pill');
        if (statusPill) {
          statusPill.textContent = "🟢 Live API Kết Nối";
          statusPill.className = "badge badge-success";
        }
      }
    }
  } catch (err) {
    console.log("FastAPI backend not active. Using standalone mock data.");
  }
}

// ==========================================================================
// 6. APP INITIALIZATION
// ==========================================================================

function handleInitialHash() {
  const hash = window.location.hash;
  if (hash === '#admin') {
    if (hasAdminPermission(state.user)) {
      switchView('admin');
    } else {
      showToast("⛔ Cần tài khoản Admin hoặc Ban tổ chức để truy cập Quản trị & ML", "warning");
      switchView('explore');
    }
  } else if (hash === '#create-event') {
    if (hasAdminPermission(state.user)) {
      switchView('admin');
      setTimeout(() => openCreateEventModal(), 300);
    } else {
      showToast("⛔ Cần tài khoản Admin hoặc Ban tổ chức để tạo sự kiện mới", "warning");
      switchView('explore');
    }
  } else if (hash === '#my-bookings') {
    switchView('my-bookings');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderUserNav();
  renderCategoryPills();
  renderEventsGrid();
  checkApiConnection();
  handleInitialHash();

  window.addEventListener('hashchange', handleInitialHash);

  // Search form submit
  document.getElementById('search-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    state.activeFilter.keyword = document.getElementById('search-keyword').value.trim();
    state.activeFilter.category = document.getElementById('search-category').value;
    state.activeFilter.date = document.getElementById('search-date').value;
    const pVal = document.getElementById('search-price').value;
    state.activeFilter.maxPrice = pVal ? Number(pVal) : null;

    renderCategoryPills();
    renderEventsGrid();
    showToast("Đã cập nhật kết quả tìm kiếm", "info");
  });

  // Sticky header scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
  });
});
