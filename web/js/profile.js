'use strict';

var MOCK_BOOKINGS = [
  {
    bookingId: 'EVT-BK-1731234567001',
    orderId: '#EH-234501',
    eventId: 1,
    eventName: 'Lễ Hội Âm Nhạc Countdown 2026',
    eventDate: '2026-12-31T20:00:00.000Z',
    eventVenue: 'Phú Mỹ Hưng, Quận 7, TP.HCM',
    eventImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&q=70',
    items: [{ ticketName: 'Vé GA', quantity: 2, price: 450000, lineTotal: 900000 }],
    subtotal: 900000, discount: 0, grand: 900000,
    attendee: { name: 'Nguyễn Văn A', email: 'user@example.com', phone: '0987654321' },
    createdAt: '2026-11-01T10:00:00.000Z',
    status: 'confirmed'
  },
  {
    bookingId: 'EVT-BK-1731234567002',
    orderId: '#EH-234502',
    eventId: 3,
    eventName: 'Vietnam Tech Summit 2026',
    eventDate: '2026-11-20T08:30:00.000Z',
    eventVenue: 'GEM Center, Quận 1, TP.HCM',
    eventImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=70',
    items: [{ ticketName: 'Standard Pass', quantity: 1, price: 500000, lineTotal: 500000 }],
    subtotal: 500000, discount: 50000, grand: 450000,
    attendee: { name: 'Nguyễn Văn A', email: 'user@example.com', phone: '0987654321' },
    createdAt: '2026-10-15T14:00:00.000Z',
    status: 'confirmed'
  },
  {
    bookingId: 'EVT-BK-1731234567003',
    orderId: '#EH-234503',
    eventId: 5,
    eventName: 'Ho Chi Minh City Marathon 2026',
    eventDate: '2026-10-10T05:00:00.000Z',
    eventVenue: 'Hồ Con Rùa, Quận 3, TP.HCM',
    eventImage: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?w=200&q=70',
    items: [{ ticketName: 'Full Marathon 42km', quantity: 1, price: 650000, lineTotal: 650000 }],
    subtotal: 650000, discount: 0, grand: 650000,
    attendee: { name: 'Nguyễn Văn A', email: 'user@example.com', phone: '0987654321' },
    createdAt: '2026-09-01T09:00:00.000Z',
    status: 'confirmed'
  },
  {
    bookingId: 'EVT-BK-1731234567004',
    orderId: '#EH-234504',
    eventId: 4,
    eventName: 'Triển Lãm Nghệ Thuật Đa Giác Quan: Vincent van Gogh Alive',
    eventDate: '2026-09-15T09:00:00.000Z',
    eventVenue: 'Gigamall, TP. Thủ Đức, TP.HCM',
    eventImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=200&q=70',
    items: [{ ticketName: 'Vé Tiêu Chuẩn', quantity: 2, price: 300000, lineTotal: 600000 }],
    subtotal: 600000, discount: 0, grand: 600000,
    attendee: { name: 'Nguyễn Văn A', email: 'user@example.com', phone: '0987654321' },
    createdAt: '2026-08-20T10:00:00.000Z',
    status: 'confirmed'
  },
  {
    bookingId: 'EVT-BK-1731234567005',
    orderId: '#EH-234505',
    eventId: 6,
    eventName: 'Đêm Nhạc Acoustic Hoàng Hôn Đà Lạt',
    eventDate: '2026-08-10T19:00:00.000Z',
    eventVenue: 'Đồi Dã Quỳ, TP. Đà Lạt',
    eventImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=70',
    items: [{ ticketName: 'Vé Thường', quantity: 1, price: 200000, lineTotal: 200000 }],
    subtotal: 200000, discount: 0, grand: 200000,
    attendee: { name: 'Nguyễn Văn A', email: 'user@example.com', phone: '0987654321' },
    createdAt: '2026-07-25T14:30:00.000Z',
    status: 'cancelled'
  }
];

var PR_USERS = {
  Admin: { id: 1, user_id: 1, name: 'Nguyễn Bảo Khánh', email: 'khanh.admin@eventhub.vn', role: 'Admin', memberType: 'vip', joinDate: '2023-01-10', phone: '0901234567', dob: '1992-05-18', gender: 'male', address: 'Quận 1, TP. Hồ Chí Minh', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80' },
  Organizer: { id: 3, user_id: 3, name: 'Trần Quang Huy', email: 'huy.organizer@eventhub.vn', role: 'Organizer', memberType: 'vip', joinDate: '2023-08-15', phone: '0912345678', dob: '1989-11-22', gender: 'male', address: 'Quận 3, TP. Hồ Chí Minh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80' },
  Staff: { id: 2, user_id: 2, name: 'Chu Đức Duy', email: 'duy.staff@eventhub.vn', role: 'Staff', memberType: 'member', joinDate: '2024-02-01', phone: '0923456789', dob: '1996-03-12', gender: 'male', address: 'Bình Thạnh, TP. Hồ Chí Minh', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80' },
  Guest: { id: 4, user_id: 4, guest_id: 1, name: 'Nguyễn Văn Khang', email: 'khang.guest@gmail.com', role: 'Guest', memberType: 'member', joinDate: '2024-06-10', phone: '0934567890', dob: '1998-09-05', gender: 'male', address: 'Quận 7, TP. Hồ Chí Minh', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80' }
};

var MOCK_USER = PR_USERS.Admin;

var EVENT_CATALOG = {
  1: {
    id: 1,
    name: "Lễ Hội Âm Nhạc Gió Mùa — Monsoon Music Festival 2026",
    category: "Âm nhạc & Concert",
    date: "2026-11-20T18:30:00.000Z",
    venue: "Hoàng Thành Thăng Long, Hà Nội",
    price: 450000,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
  },
  2: {
    id: 2,
    name: "Vietnam AI Summit 2026: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số",
    category: "Hội thảo & Tech",
    date: "2026-11-22T08:30:00.000Z",
    venue: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    price: 350000,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
  },
  3: {
    id: 3,
    name: "Workshop Đầu Tư Tài Chính Cá Nhân F.I.R.E — Thực Chiến",
    category: "Hội thảo & Tech",
    date: "2026-11-28T14:00:00.000Z",
    venue: "SECC Quận 7, TP. Hồ Chí Minh",
    price: 200000,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
  },
  4: {
    id: 4,
    name: "Lễ Hội Ẩm Thực Đường Phố & Bia Thủ Công Sài Gòn 2026",
    category: "Ẩm thực & Đời sống",
    date: "2026-12-05T16:00:00.000Z",
    venue: "Công viên Bến Bạch Đằng, Quận 1, TP.HCM",
    price: 150000,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
  },
  5: {
    id: 5,
    name: "Triển Lãm Nghệ Thuật Đa Giác Quan: Vincent van Gogh Alive",
    category: "Nghệ thuật & Triển lãm",
    date: "2026-12-12T09:00:00.000Z",
    venue: "Trung tâm Nghệ thuật VCCA, Hà Nội",
    price: 280000,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&q=80"
  },
  6: {
    id: 6,
    name: "Giải Chạy Bán Marathon Đêm Đà Lạt — Dalat Night Run 2026",
    category: "Thể thao & Marathon",
    date: "2026-11-25T19:00:00.000Z",
    venue: "Quảng trường Lâm Viên & Hồ Xuân Hương, Đà Lạt",
    price: 490000,
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80"
  },
  7: {
    id: 7,
    name: "Countdown New Year 2027 — Đại Nhạc Hội Chào Năm Mới",
    category: "Âm nhạc & Concert",
    date: "2026-12-31T20:00:00.000Z",
    venue: "Phố đi bộ Nguyễn Huệ, TP.HCM",
    price: 650000,
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80"
  },
  8: {
    id: 8,
    name: "Google I/O Extended Việt Nam 2026 — Developer Summit",
    category: "Hội thảo & Tech",
    date: "2026-12-10T09:00:00.000Z",
    venue: "Toà nhà UOB, Quận 1, TP.HCM",
    price: 0,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
  },
  9: {
    id: 9,
    name: "Lễ Hội EDM VinaFest 2026 — Đêm Nhạc Điện Tử",
    category: "Nightlife & Lễ hội",
    date: "2026-12-19T21:00:00.000Z",
    venue: "GEM Center, Quận 1, TP.HCM",
    price: 850000,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
  },
  10: {
    id: 10,
    name: "Hội Thảo UX Design Thinking — Lấy Người Dùng Làm Trung Tâm",
    category: "Hội thảo & Tech",
    date: "2026-11-30T09:00:00.000Z",
    venue: "Online (Zoom Webinar)",
    price: 0,
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80"
  },
  11: {
    id: 11,
    name: "Lễ Hội Ánh Sáng Diwali Hà Nội 2026",
    category: "Nghệ thuật & Triển lãm",
    date: "2026-11-15T17:00:00.000Z",
    venue: "Vườn hoa Lý Thái Tổ, Hà Nội",
    price: 80000,
    image: "https://images.unsplash.com/photo-1604153297036-a6e28e9b0d7a?w=800&q=80"
  },
  12: {
    id: 12,
    name: "Iron Man Vietnam Triathlon 2026 — Nha Trang",
    category: "Thể thao & Marathon",
    date: "2026-12-22T05:00:00.000Z",
    venue: "Bãi biển Trần Phú, Nha Trang",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80"
  }
};

var MOCK_WISHLIST = [
  EVENT_CATALOG[1],
  EVENT_CATALOG[2],
  EVENT_CATALOG[4]
];

var allBookings = [];
var currentUser = {};
var wishlist = [];
var activeTicketFilter = 'upcoming';
var currentBookingForModal = null;


function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0
  }).format(amount);
}

function formatDate(isoString) {
  if (!isoString) return 'Sắp diễn ra';
  var d = new Date(isoString);
  if (isNaN(d.getTime())) return 'Sắp diễn ra';
  var dayNames = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  var dayName = dayNames[d.getDay()];
  var date = String(d.getDate()).padStart(2, '0');
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var year = d.getFullYear();
  var hours = String(d.getHours()).padStart(2, '0');
  var minutes = String(d.getMinutes()).padStart(2, '0');
  return dayName + ', ' + date + '/' + month + '/' + year + ' lúc ' + hours + ':' + minutes;
}

function formatDateShort(isoString) {
  var d = new Date(isoString);
  var date = String(d.getDate()).padStart(2, '0');
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var year = d.getFullYear();
  return date + '/' + month + '/' + year;
}

function isUpcoming(isoString) {
  return new Date(isoString) > new Date();
}

function showToast(msg, type) {
  var container = document.getElementById('pr-toast-container');
  if (!container) return;
  var toast = document.createElement('div');
  toast.className = 'pr-toast' + (type ? ' pr-toast-' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });
  });
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 3200);
}

function generateQRSVG(seed) {
  var size = 21;
  var cellSize = 7;
  var s = seed & 0xffffffff;

  function lcg() {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 4294967296;
  }

  // Khởi tạo lưới ma trận QR 21x21
  var grid = [];
  var i, j;
  for (i = 0; i < size; i++) {
    grid[i] = [];
    for (j = 0; j < size; j++) {
      grid[i][j] = 0;
    }
  }

  // Vẽ cụm định vị góc Finder Pattern (7x7)
  function drawFinder(r, c) {
    var fr, fc;
    for (fr = 0; fr < 7; fr++) {
      for (fc = 0; fc < 7; fc++) {
        var onBorder = (fr === 0 || fr === 6 || fc === 0 || fc === 6);
        var onInner = (fr >= 2 && fr <= 4 && fc >= 2 && fc <= 4);
        grid[r + fr][c + fc] = (onBorder || onInner) ? 1 : 0;
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);

  // Vẽ đường định thời Timing Pattern
  for (i = 8; i < size - 8; i++) {
    grid[6][i] = (i % 2 === 0) ? 1 : 0;
    grid[i][6] = (i % 2 === 0) ? 1 : 0;
  }

  
  // Sinh dữ liệu ô vuông bằng thuật toán LCG
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      // Bỏ qua vùng định vị góc và đường định thời
      var inTopLeft = (i < 8 && j < 8);
      var inTopRight = (i < 8 && j >= size - 8);
      var inBottomLeft = (i >= size - 8 && j < 8);
      var onTimingRow = (i === 6 && j >= 8 && j <= size - 9);
      var onTimingCol = (j === 6 && i >= 8 && i <= size - 9);
      if (inTopLeft || inTopRight || inBottomLeft || onTimingRow || onTimingCol) {
        continue;
      }
      grid[i][j] = lcg() > 0.5 ? 1 : 0;
    }
  }

  var svgWidth = size * cellSize;
  var cells = '';
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (grid[i][j]) {
        cells += '<rect x="' + (j * cellSize) + '" y="' + (i * cellSize) + '" width="' + cellSize + '" height="' + cellSize + '" fill="#000"/>';
      }
    }
  }

  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + svgWidth + '" height="' + svgWidth + '" viewBox="0 0 ' + svgWidth + ' ' + svgWidth + '" style="background:#fff">' + cells + '</svg>';
}

function normalizeBooking(b) {
  if (!b || typeof b !== 'object') return null;
  var id = b.bookingId || b.booking_id || ('EVT-BK-' + Date.now());
  var eventId = b.eventId || b.event_id || 1;
  var eventName = b.eventName || b.event_name || 'Sự kiện EventHub';
  var eventDate = b.eventDate || b.event_date || new Date().toISOString();
  var venue = b.eventVenue || b.venue || 'Việt Nam';
  var eventImage = b.eventImage || b.image || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80';
  var rawItems = Array.isArray(b.items) && b.items.length > 0 ? b.items : [
    { ticketName: 'Vé Tiêu Chuẩn', quantity: b.ticket_count || 1, price: b.total_price || b.grand || 0, lineTotal: b.total_price || b.grand || 0 }
  ];
  var ticketCount = b.ticket_count || b.ticketCount || rawItems.reduce(function(s, it) { return s + (it.quantity || 0); }, 0);
  var totalPrice = b.grand !== undefined ? b.grand : (b.total_price !== undefined ? b.total_price : b.subtotal || 0);
  var attendeeName = (b.attendee && b.attendee.name) || b.attendee_name || 'Khách';
  var attendeeEmail = (b.attendee && b.attendee.email) || b.attendee_email || 'user@eventhub.vn';
  var attendeePhone = (b.attendee && b.attendee.phone) || b.attendee_phone || '';
  var status = (b.status || 'confirmed').toString().toLowerCase();
  var isCheckedIn = b.is_checked_in !== undefined ? b.is_checked_in : (status === 'attended');

  return {
    bookingId: id,
    booking_id: id,
    orderId: b.orderId || ('#EH-' + (typeof id === 'string' ? id.slice(-6) : Math.floor(100000 + Math.random() * 900000))),
    eventId: eventId,
    event_id: eventId,
    eventName: eventName,
    event_name: eventName,
    eventDate: eventDate,
    event_date: eventDate,
    eventVenue: venue,
    venue: venue,
    eventImage: eventImage,
    image: eventImage,
    items: rawItems,
    ticket_count: ticketCount,
    ticketCount: ticketCount,
    total_price: totalPrice,
    grand: totalPrice,
    subtotal: b.subtotal || totalPrice,
    discount: b.discount || 0,
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


function init() {
  // Nạp dữ liệu
  try {
    var storedBookings = localStorage.getItem('eventhub_bookings');
    var rawList = storedBookings ? JSON.parse(storedBookings) : MOCK_BOOKINGS;
    allBookings = (rawList || []).map(normalizeBooking).filter(Boolean);
  } catch (e) {
    allBookings = (MOCK_BOOKINGS || []).map(normalizeBooking);
  }

  try {
    var storedUser = localStorage.getItem('eventhub_user');
    if (storedUser) {
      var parsed = JSON.parse(storedUser);
      var matched = PR_USERS[parsed.role] || PR_USERS.Guest;
      currentUser = Object.assign({}, matched, parsed);
    } else {
      currentUser = Object.assign({}, PR_USERS.Admin);
      localStorage.setItem('eventhub_user', JSON.stringify(currentUser));
    }
  } catch (e) {
    currentUser = Object.assign({}, PR_USERS.Admin);
  }

  try {
    var storedWishlist = localStorage.getItem('eventhub_wishlist');
    if (storedWishlist !== null) {
      var parsedWL = JSON.parse(storedWishlist);
      if (Array.isArray(parsedWL)) {
        wishlist = parsedWL.map(function(item) {
          if (typeof item === 'number' || typeof item === 'string') {
            var id = parseInt(item, 10);
            return EVENT_CATALOG[id] || {
              id: id,
              name: 'Sự kiện #' + id,
              category: 'Sự kiện',
              date: '2026-12-01T19:00:00.000Z',
              venue: 'Toàn quốc',
              price: 350000,
              image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
            };
          } else if (item && typeof item === 'object') {
            var evId = item.id || item.eventId || 1;
            var ref = EVENT_CATALOG[evId] || {};
            return {
              id: evId,
              name: item.name || item.eventName || ref.name || ('Sự kiện #' + evId),
              category: item.categoryLabel || item.category || ref.category || 'Sự kiện',
              date: item.date || item.eventDate || ref.date || new Date().toISOString(),
              venue: item.venue || item.eventVenue || ref.venue || 'Toàn quốc',
              price: item.price !== undefined ? item.price : (ref.price !== undefined ? ref.price : 0),
              image: item.image || item.eventImage || ref.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
            };
          }
          return null;
        }).filter(Boolean);
      } else {
        wishlist = MOCK_WISHLIST.slice();
      }
    } else {
      wishlist = MOCK_WISHLIST.slice();
    }
  } catch (e) {
    wishlist = MOCK_WISHLIST.slice();
  }

  renderHero();

  // Xác định tab ban đầu dựa trên query parameter (?tab=profile) hoặc hash (#profile)
  var initialTab = 'tickets';
  try {
    var urlParams = new URLSearchParams(window.location.search);
    var qTab = urlParams.get('tab');
    var hashTab = window.location.hash ? window.location.hash.replace('#', '').replace('tab-', '') : null;
    var candidate = qTab || hashTab;
    if (candidate) {
      candidate = candidate.toLowerCase();
      if (candidate === 'info' || candidate === 'profile' || candidate === 'thongtin') candidate = 'profile';
      if (['tickets', 'profile', 'wishlist', 'security'].indexOf(candidate) !== -1) {
        initialTab = candidate;
      }
    }
  } catch (err) {
    initialTab = 'tickets';
  }

  switchToTab(initialTab);   // khởi tạo tab được chọn + xóa inline style
  renderTickets(activeTicketFilter);
  renderWishlist();
  prefillProfileForm();
  initPasswordStrength();

  // Đồng bộ vé đã mua và danh sách yêu thích từ Database
  syncProfileDataWithDB();

  // Đóng modal khi nhấn phím Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeQRModal();
  });
}

function getApiBaseUrl() {
  var host = window.location.hostname || 'localhost';
  return 'http://' + host + ':8000';
}

async function syncProfileDataWithDB() {
  var baseUrl = getApiBaseUrl();
  var headers = { 'Content-Type': 'application/json' };
  if (currentUser && currentUser.token) {
    headers['Authorization'] = 'Bearer ' + currentUser.token;
  }
  var userId = currentUser ? (currentUser.user_id || currentUser.id) : null;
  var guestId = currentUser ? (currentUser.guest_id || (currentUser.role === 'Guest' ? 1 : null)) : null;

  // 1. Đồng bộ vé đã mua (Bookings / Registrations) từ DB
  try {
    var queryParams = [];
    if (guestId) queryParams.push('guest_id=' + guestId);
    var bookingsUrl = baseUrl + '/api/my-bookings' + (queryParams.length ? '?' + queryParams.join('&') : '');
    var resBookings = await fetch(bookingsUrl, { method: 'GET', headers: headers });
    if (resBookings.ok) {
      var dbBookings = await resBookings.json();
      if (Array.isArray(dbBookings)) {
        var mappedDbBookings = dbBookings.map(function (r) {
          var regId = r.registration_id || (Date.now() + Math.floor(Math.random() * 1000));
          var evtDate = r.event_date || new Date().toISOString();
          var isPast = new Date(evtDate) < new Date();
          var st = (r.status || '').toLowerCase();
          var bookingStatus = st === 'cancelled' ? 'cancelled' : (r.attendance_status || isPast ? 'attended' : 'confirmed');
          return normalizeBooking({
            bookingId: 'EVT-BK-' + regId,
            orderId: '#EH-' + (r.registration_id ? String(r.registration_id).padStart(6, '0') : String(regId).slice(-6)),
            eventId: r.event_id,
            eventName: r.event_name,
            eventDate: evtDate,
            eventVenue: r.venue_name || 'Việt Nam',
            eventImage: r.image_url || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
            status: bookingStatus,
            is_checked_in: !!r.attendance_status,
            grand: Number(r.base_price) || 0,
            total_price: Number(r.base_price) || 0,
            ticket_count: 1,
            attendee: {
              name: currentUser.name || 'Khách EventHub',
              email: currentUser.email || '',
              phone: currentUser.phone || ''
            },
            createdAt: r.registration_date || evtDate
          });
        }).filter(Boolean);

        // Merge với vé local (không trùng lặp)
        var localStored = [];
        try {
          var rawStored = localStorage.getItem('eventhub_bookings');
          if (rawStored) localStored = (JSON.parse(rawStored) || []).map(normalizeBooking).filter(Boolean);
        } catch (e) {}

        var seenKeys = new Set();
        mappedDbBookings.forEach(function (b) {
          seenKeys.add(b.bookingId);
          seenKeys.add('EVT-' + b.eventId);
        });

        localStored.forEach(function (lb) {
          if (!seenKeys.has(lb.bookingId) && !seenKeys.has('EVT-' + lb.eventId)) {
            mappedDbBookings.push(lb);
          }
        });

        allBookings = mappedDbBookings;
        renderHero();
        renderTickets(activeTicketFilter);
      }
    }
  } catch (err) {
    // Backend ngắt kết nối -> dự phòng dùng dữ liệu local
  }

  // 2. Đồng bộ danh sách yêu thích (Wishlist) từ DB & Events API
  try {
    var wlUrl = baseUrl + '/api/wishlist' + (userId ? '?user_id=' + userId : '');
    var resWl = await fetch(wlUrl, { method: 'GET', headers: headers });
    var dbWishlist = null;
    if (resWl.ok) {
      var wlData = await resWl.json();
      if (Array.isArray(wlData) && wlData.length > 0) {
        dbWishlist = wlData.map(function (item) {
          var cat = Array.isArray(item.categories) ? item.categories.join(', ') : (item.categories || 'Sự kiện');
          return {
            id: item.event_id,
            name: item.event_name,
            category: cat,
            date: item.event_date,
            venue: item.venue_name || 'Toàn quốc',
            price: Number(item.base_price) || 0,
            image: item.image_url || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
          };
        });
      }
    }

    // Lấy live events từ API để map chi tiết sự kiện
    var resEvents = await fetch(baseUrl + '/api/events', { method: 'GET' });
    var liveEventsMap = {};
    if (resEvents.ok) {
      var eventsList = await resEvents.json();
      if (Array.isArray(eventsList)) {
        eventsList.forEach(function (ev) {
          var cat = Array.isArray(ev.categories) ? ev.categories.join(', ') : (ev.categories || 'Sự kiện');
          liveEventsMap[ev.event_id] = {
            id: ev.event_id,
            name: ev.event_name,
            category: cat,
            date: ev.event_date,
            venue: ev.venue_name || 'Toàn quốc',
            price: Number(ev.base_price) || 0,
            image: ev.image_url || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
          };
        });
      }
    }

    if (dbWishlist && dbWishlist.length > 0) {
      wishlist = dbWishlist;
      var ids = wishlist.map(function (e) { return e.id; });
      localStorage.setItem('eventhub_wishlist', JSON.stringify(ids));
    } else {
      var storedWL = localStorage.getItem('eventhub_wishlist');
      if (storedWL) {
        var parsed = JSON.parse(storedWL);
        if (Array.isArray(parsed) && parsed.length > 0) {
          wishlist = parsed.map(function (item) {
            var id = typeof item === 'object' ? (item.id || item.eventId) : parseInt(item, 10);
            if (!id) return null;
            if (liveEventsMap[id]) return liveEventsMap[id];
            if (EVENT_CATALOG[id]) return EVENT_CATALOG[id];
            return typeof item === 'object' ? item : null;
          }).filter(Boolean);

          // Tự động đẩy lên DB nếu user đã có user_id
          if (userId && wishlist.length > 0) {
            wishlist.forEach(function (ev) {
              fetch(baseUrl + '/api/wishlist?user_id=' + userId, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ event_id: ev.id })
              }).catch(function () {});
            });
          }
        }
      }
    }

    renderHero();
    renderWishlist();
  } catch (err) {
    // Backend ngắt kết nối -> dự phòng dùng dữ liệu local
  }
}


function renderHero() {
  var parts = (currentUser.name || '').trim().split(/\s+/);
  var initials = '';
  if (parts.length >= 2) {
    initials = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  } else if (parts.length === 1 && parts[0]) {
    initials = parts[0][0].toUpperCase();
  }

  var avatarCircle = document.getElementById('pr-avatar-circle');
  if (avatarCircle) avatarCircle.textContent = initials;

  var navAvatar = document.getElementById('pr-nav-avatar');
  if (navAvatar) navAvatar.textContent = initials;

  var navUserName = document.getElementById('pr-nav-user-name');
  if (navUserName) navUserName.textContent = currentUser.name || 'Khách';

  var navRoleBadge = document.getElementById('pr-nav-role-badge');
  if (navRoleBadge) {
    navRoleBadge.textContent = currentUser.role || 'Member';
    navRoleBadge.className = 'pr-role-badge ' + (currentUser.role || '').toLowerCase();
  }

  var heroName = document.getElementById('pr-hero-name');
  if (heroName) heroName.textContent = currentUser.name || '';

  var heroEmail = document.getElementById('pr-hero-email');
  if (heroEmail) heroEmail.textContent = currentUser.email || '';

  var memberBadge = document.getElementById('pr-member-badge');
  if (memberBadge) {
    memberBadge.className = 'pr-member-badge';
    if (currentUser.role === 'Admin') {
      memberBadge.textContent = '👑 Quản trị viên (Admin)';
      memberBadge.classList.add('admin');
    } else if (currentUser.role === 'Organizer') {
      memberBadge.textContent = '🎪 Ban tổ chức (Organizer)';
      memberBadge.classList.add('organizer');
    } else if (currentUser.role === 'Staff') {
      memberBadge.textContent = '💼 Nhân viên (Staff)';
      memberBadge.classList.add('staff');
    } else if (currentUser.memberType === 'vip') {
      memberBadge.textContent = '⭐ VIP';
      memberBadge.classList.add('vip');
    } else {
      memberBadge.textContent = 'MEMBER';
      memberBadge.classList.add('member');
    }
  }

  // Phân quyền người dùng
  var role = (currentUser.role || '').toLowerCase();
  var hasAdminAccess = (role === 'admin' || role === 'organizer');
  var navCreateLi = document.getElementById('pr-nav-create-li');
  var navAdminLi  = document.getElementById('pr-nav-admin-li');
  var ddCreate    = document.getElementById('pr-dd-create');
  var ddAdmin     = document.getElementById('pr-dd-admin');
  var adminActions= document.getElementById('pr-admin-actions');

  if (navCreateLi) navCreateLi.style.display = hasAdminAccess ? 'block' : 'none';
  if (navAdminLi)  navAdminLi.style.display  = hasAdminAccess ? 'block' : 'none';
  if (ddCreate)    ddCreate.style.display    = hasAdminAccess ? 'flex' : 'none';
  if (ddAdmin)     ddAdmin.style.display     = hasAdminAccess ? 'flex' : 'none';
  if (adminActions)adminActions.style.display= hasAdminAccess ? 'inline-flex' : 'none';

  // Thông tin menu thả xuống
  var ddName = document.getElementById('pr-dropdown-name');
  var ddEmail = document.getElementById('pr-dropdown-email');
  var ddRole = document.getElementById('pr-dropdown-role');
  if (ddName) ddName.textContent = currentUser.name || '';
  if (ddEmail) ddEmail.textContent = currentUser.email || '';
  if (ddRole) {
    ddRole.textContent = currentUser.role || 'Member';
    ddRole.className = 'pr-role-badge ' + (currentUser.role || '').toLowerCase();
  }

  var joinDateEl = document.getElementById('pr-join-date');
  if (joinDateEl && currentUser.joinDate) {
    joinDateEl.textContent = 'Thành viên từ ' + formatDateShort(currentUser.joinDate);
  }

  // Tính tổng số vé đã mua hợp lệ
  var totalTicketsBought = allBookings.reduce(function (sum, b) {
    if (b.status === 'cancelled') return sum;
    var qty = (b.items || []).reduce(function (s, it) { return s + (it.quantity || 0); }, 0);
    return sum + (qty || 1);
  }, 0);
  var statTickets = document.getElementById('pr-stat-tickets');
  if (statTickets) statTickets.textContent = totalTicketsBought;

  // Tính số sự kiện đã tham gia
  var attendedCount = allBookings.filter(function (b) {
    return b.status !== 'cancelled' && !isUpcoming(b.eventDate);
  }).length;
  var statEvents = document.getElementById('pr-stat-events');
  if (statEvents) statEvents.textContent = attendedCount;

  var statWishlist = document.getElementById('pr-stat-wishlist');
  if (statWishlist) statWishlist.textContent = wishlist.length;
}

function toggleNavDropdown(e) {
  if (e) {
    e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  var dropdown = document.getElementById('pr-nav-dropdown');
  if (!dropdown) return;
  var isHidden = dropdown.style.display === 'none' || !dropdown.style.display;
  dropdown.style.display = isHidden ? 'block' : 'none';
}

function switchRoleQuickly(roleName) {
  var profile = PR_USERS[roleName] || PR_USERS.Guest;
  currentUser = Object.assign({}, profile);
  localStorage.setItem('eventhub_user', JSON.stringify(currentUser));
  renderHero();
  prefillProfileForm();
  syncProfileDataWithDB();
  var dropdown = document.getElementById('pr-nav-dropdown');
  if (dropdown) dropdown.style.display = 'none';
  showToast('⚡ Đã chuyển sang vai trò: ' + profile.name + ' (' + profile.role + ')');
}

function handleLogout() {
  localStorage.removeItem('eventhub_user');
  showToast('👋 Đã đăng xuất');
  setTimeout(function() {
    window.location.href = 'landing.html';
  }, 600);
}

document.addEventListener('click', function(e) {
  var dropdown = document.getElementById('pr-nav-dropdown');
  var avatar = document.getElementById('pr-nav-avatar');
  if (dropdown && !dropdown.contains(e.target) && avatar && !avatar.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});


function initTabNav() {
  var tabBtns = document.querySelectorAll('.pr-tab-btn');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabBtnsAll = document.querySelectorAll('.pr-tab-btn');
      var panelsAll = document.querySelectorAll('.pr-tab-panel');
      tabBtnsAll.forEach(function (b) { b.classList.remove('active'); });
      panelsAll.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      var panelId = 'tab-' + btn.dataset.tab;
      var panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
    });
  });
}

function switchToTab(tabName) {
  if (tabName === 'info' || tabName === 'thongtin') tabName = 'profile';
  var tabBtns = document.querySelectorAll('.pr-tab-btn');
  var panels = document.querySelectorAll('.pr-tab-panel');

  // Reset tất cả buttons
  tabBtns.forEach(function (b) {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });

  // Ẩn tất cả panels — xóa cả inline style lẫn class
  panels.forEach(function (p) {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  // Kích hoạt tab button được chọn
  var targetBtn = document.querySelector('.pr-tab-btn[data-tab="' + tabName + '"]');
  if (targetBtn && targetBtn.classList) {
    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-selected', 'true');
  }

  // Hiển thị panel được chọn
  var panel = document.getElementById('tab-' + tabName);
  if (panel) {
    panel.style.display = 'block';
    panel.classList.add('active');
  }
}

// Lắng nghe sự kiện hashchange nếu người dùng nhấp anchor hash
window.addEventListener('hashchange', function () {
  var h = (window.location.hash || '').replace('#', '').replace('tab-', '').toLowerCase();
  if (h === 'info') h = 'profile';
  if (['tickets', 'profile', 'wishlist', 'security'].indexOf(h) !== -1) {
    switchToTab(h);
  }
});


function initFilterBtns() {
  var filterBtns = document.querySelectorAll('.pr-filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeTicketFilter = btn.dataset.filter;
      renderTickets(activeTicketFilter);
    });
  });
}

function renderTickets(filter) {
  activeTicketFilter = filter;

  // Đếm số lượng vé theo từng trạng thái
  var upcomingCount = allBookings.filter(function (b) {
    return b.status !== 'cancelled' && isUpcoming(b.eventDate);
  }).length;
  var attendedCount = allBookings.filter(function (b) {
    return b.status !== 'cancelled' && !isUpcoming(b.eventDate);
  }).length;
  var cancelledCount = allBookings.filter(function (b) {
    return b.status === 'cancelled';
  }).length;

  var btnUpcoming = document.querySelector('.pr-filter-btn[data-filter="upcoming"]');
  var btnAttended = document.querySelector('.pr-filter-btn[data-filter="attended"]');
  var btnCancelled = document.querySelector('.pr-filter-btn[data-filter="cancelled"]');
  if (btnUpcoming) btnUpcoming.innerHTML = '🕐 Sắp diễn ra <span class="pr-filter-count">(' + upcomingCount + ')</span>';
  if (btnAttended) btnAttended.innerHTML = '✅ Đã tham gia <span class="pr-filter-count">(' + attendedCount + ')</span>';
  if (btnCancelled) btnCancelled.innerHTML = '❌ Đã hủy <span class="pr-filter-count">(' + cancelledCount + ')</span>';

  // Cập nhật nút lọc đang chọn
  var filterBtns = document.querySelectorAll('.pr-filter-btn');
  filterBtns.forEach(function (btn) {
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Gắn sự kiện click cho các nút lọc
  initFilterBtns();

  var filtered = allBookings.filter(function (b) {
    if (filter === 'upcoming') return b.status !== 'cancelled' && isUpcoming(b.eventDate);
    if (filter === 'attended') return b.status !== 'cancelled' && !isUpcoming(b.eventDate);
    if (filter === 'cancelled') return b.status === 'cancelled';
    return true;
  });

  var grid = document.getElementById('pr-tickets-grid');
  var empty = document.getElementById('pr-tickets-empty');

  if (!filtered.length) {
    if (grid) grid.style.display = 'none';
    if (empty) {
      empty.style.display = 'block';
      var title = document.getElementById('pr-empty-title');
      var desc = document.getElementById('pr-empty-desc');
      var icon = document.getElementById('pr-empty-icon');
      if (filter === 'attended') {
        if (icon) icon.textContent = '🎟️';
        if (title) title.textContent = 'Chưa có sự kiện đã tham gia';
        if (desc) desc.textContent = 'Các sự kiện bạn đã mua vé sau khi diễn ra sẽ hiển thị tại đây để tiện tra cứu.';
      } else if (filter === 'cancelled') {
        if (icon) icon.textContent = '✨';
        if (title) title.textContent = 'Không có vé nào bị hủy';
        if (desc) desc.textContent = 'Tất cả vé bạn đã đặt đều đang ở trạng thái hợp lệ.';
      } else {
        if (icon) icon.textContent = '🎫';
        if (title) title.textContent = 'Chưa có vé sắp diễn ra';
        if (desc) desc.textContent = 'Hãy khám phá và đặt vé các sự kiện thú vị ngay hôm nay.';
      }
    }
    return;
  }

  if (empty) empty.style.display = 'none';
  if (grid) {
    grid.style.display = '';
    var html = '';
    filtered.forEach(function (b) {
      html += createTicketCard(b, filter);
    });
    grid.innerHTML = html;

    // Kết xuất mã QR SVG thu nhỏ
    filtered.forEach(function (b) {
      var qrMini = document.getElementById('qr-mini-' + b.bookingId);
      if (qrMini) {
        qrMini.innerHTML = generateQRSVG(b.eventId);
      }
    });
  }
}

function createTicketCard(booking, filter) {
  var items = Array.isArray(booking.items) && booking.items.length > 0 ? booking.items : [
    { ticketName: 'Vé Tiêu Chuẩn', quantity: booking.ticket_count || 1, price: booking.total_price || booking.grand || 0 }
  ];
  var item = items[0] || {};
  var tierName = item.ticketName || 'Vé Tiêu Chuẩn';
  var qty = items.reduce(function (sum, it) { return sum + (it.quantity || 0); }, 0);

  var badgeClass = 'pr-status-valid';
  var badgeText = '✓ Hợp lệ';
  if (filter === 'attended' || (!isUpcoming(booking.eventDate) && booking.status !== 'cancelled')) {
    badgeClass = 'pr-status-checked';
    badgeText = '✓ Đã tham gia';
  }
  if (booking.status === 'cancelled') {
    badgeClass = 'pr-status-cancelled';
    badgeText = '✗ Đã hủy';
  }

  var cardStyle = booking.status === 'cancelled' ? ' style="opacity:0.65"' : '';

  return '<article class="pr-ticket-card" data-booking-id="' + booking.bookingId + '"' + cardStyle + '>' +
    '<div class="pr-ticket-top">' +
      '<img class="pr-ticket-event-img" src="' + booking.eventImage + '" alt="' + booking.eventName + '" onerror="this.src=\'https://via.placeholder.com/80x60\'">' +
      '<div class="pr-ticket-info">' +
        '<div class="pr-ticket-event-name">' + booking.eventName + '</div>' +
        '<div class="pr-ticket-meta">' +
          '<span>📅 ' + formatDate(booking.eventDate) + '</span>' +
          '<span>📍 ' + booking.eventVenue + '</span>' +
        '</div>' +
        '<div class="pr-ticket-meta" style="margin-top:4px">' +
          '<span>🎫 ' + tierName + ' × ' + qty + '</span>' +
          '<span>💰 ' + formatVND(booking.grand) + '</span>' +
        '</div>' +
      '</div>' +
      '<span class="pr-ticket-status-badge ' + badgeClass + '">' + badgeText + '</span>' +
    '</div>' +
    '<div class="pr-ticket-perf"><div class="pr-ticket-perf-line"></div></div>' +
    '<div class="pr-ticket-bottom">' +
      '<div class="pr-ticket-bottom-left">' +
        '<div class="pr-ticket-code">' + booking.bookingId + '</div>' +
        '<div class="pr-ticket-order">' + booking.orderId + '</div>' +
        '<div class="pr-ticket-actions">' +
          '<button class="pr-btn pr-btn-ghost pr-btn-sm" onclick="openQRModal(\'' + booking.bookingId + '\')">📱 Xem QR E-Ticket</button>' +
          '<a href="event-detail.html?id=' + (booking.eventId || 1) + '" class="pr-btn pr-btn-ghost pr-btn-sm" style="text-decoration:none;">📄 Chi tiết</a>' +
          '<button class="pr-btn pr-btn-ghost pr-btn-sm" onclick="addToCalendar(\'' + booking.bookingId + '\')">📅 Calendar</button>' +
        '</div>' +
      '</div>' +
      '<div class="pr-ticket-qr-mini" id="qr-mini-' + booking.bookingId + '"></div>' +
    '</div>' +
  '</article>';
}

function addToCalendar(bookingId) {
  var booking = null;
  for (var i = 0; i < allBookings.length; i++) {
    if (allBookings[i].bookingId === bookingId) { booking = allBookings[i]; break; }
  }
  if (!booking) return;

  function toBasic(isoString) {
    var d = new Date(isoString);
    var pad = function (n) { return String(n).padStart(2, '0'); };
    return d.getUTCFullYear() + '' +
      pad(d.getUTCMonth() + 1) +
      pad(d.getUTCDate()) + 'T' +
      pad(d.getUTCHours()) +
      pad(d.getUTCMinutes()) +
      pad(d.getUTCSeconds()) + 'Z';
  }

  var start = toBasic(booking.eventDate);
  // Thời gian kết thúc mặc định sau 2 giờ
  var endD = new Date(new Date(booking.eventDate).getTime() + 2 * 60 * 60 * 1000);
  var end = toBasic(endD.toISOString());

  var url = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + encodeURIComponent(booking.eventName) +
    '&dates=' + start + '/' + end +
    '&location=' + encodeURIComponent(booking.eventVenue) +
    '&details=' + encodeURIComponent('Mã vé: ' + booking.bookingId);
  window.open(url, '_blank');
}

function requestSupport(bookingId) {
  showToast('📧 Yêu cầu hỗ trợ đã được gửi cho mã vé ' + bookingId, 'info');
}


function openQRModal(bookingId) {
  var booking = null;
  for (var i = 0; i < allBookings.length; i++) {
    if (allBookings[i].bookingId === bookingId) { booking = allBookings[i]; break; }
  }
  if (!booking) return;
  currentBookingForModal = booking;

  var totalQty = booking.items.reduce(function (sum, it) { return sum + (it.quantity || 0); }, 0);

  var el = function (id) { return document.getElementById(id); };
  if (el('modal-event-name')) el('modal-event-name').textContent = booking.eventName;
  if (el('modal-booking-id')) el('modal-booking-id').textContent = booking.bookingId;
  if (el('modal-date')) el('modal-date').textContent = formatDate(booking.eventDate);
  if (el('modal-venue')) el('modal-venue').textContent = booking.eventVenue;
  if (el('modal-name')) el('modal-name').textContent = booking.attendee.name;
  if (el('modal-tier')) el('modal-tier').textContent = (booking.items[0] ? booking.items[0].ticketName : '') + ' × ' + totalQty;

  var qrDisplay = el('modal-qr-display');
  if (qrDisplay) qrDisplay.innerHTML = generateQRSVG(booking.eventId);

  var modal = el('pr-qr-modal');
  if (modal) modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeQRModal(event) {
  var modal = document.getElementById('pr-qr-modal');
  if (!modal) return;
  if (event && event.target !== modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}


function renderWishlist() {
  var grid = document.getElementById('pr-wishlist-grid');
  var empty = document.getElementById('pr-wishlist-empty');

  if (!wishlist || !wishlist.length) {
    if (grid) grid.style.display = 'none';
    if (empty) empty.style.display = 'block';
    return;
  }

  if (empty) empty.style.display = 'none';
  if (grid) {
    grid.style.display = 'grid';
    grid.innerHTML = wishlist.map(function (ev) {
      var priceDisplay = (ev.price === 0 || ev.price === '0') ? 'Miễn phí' : formatVND(ev.price);
      var safeImg = ev.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80';
      return '<div class="pr-wl-card" data-event-id="' + ev.id + '">' +
        '<div class="pr-wl-img-wrap">' +
          '<img class="pr-wl-img" src="' + safeImg + '" alt="' + ev.name + '" loading="lazy" onerror="this.onerror=null;this.src=\'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80\';">' +
          '<span class="pr-wl-badge">' + (ev.category || 'Sự kiện') + '</span>' +
          '<button class="pr-wl-remove-btn" onclick="removeFromWishlist(' + ev.id + ')" title="Bỏ yêu thích" aria-label="Bỏ yêu thích">❤️</button>' +
        '</div>' +
        '<div class="pr-wl-info">' +
          '<h3 class="pr-wl-name" title="' + ev.name + '">' + ev.name + '</h3>' +
          '<div class="pr-wl-meta">' +
            '<div class="pr-wl-meta-item">📅 ' + formatDate(ev.date) + '</div>' +
            '<div class="pr-wl-meta-item">📍 ' + (ev.venue || 'TP. Hồ Chí Minh') + '</div>' +
          '</div>' +
          '<div class="pr-wl-footer">' +
            '<div class="pr-wl-price-wrap">' +
              '<span class="pr-wl-price-label">Giá từ</span>' +
              '<span class="pr-wl-price">' + priceDisplay + '</span>' +
            '</div>' +
            '<a href="event-detail.html?id=' + ev.id + '" class="pr-btn pr-btn-primary pr-btn-sm pr-wl-btn">Xem chi tiết</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }
}

function removeFromWishlist(eventId) {
  wishlist = wishlist.filter(function (ev) { return ev.id !== eventId; });
  try {
    var idList = wishlist.map(function (ev) { return ev.id; });
    localStorage.setItem('eventhub_wishlist', JSON.stringify(idList));
  } catch (e) { /* ignore */ }

  try {
    var baseUrl = getApiBaseUrl();
    var userId = currentUser ? (currentUser.user_id || currentUser.id) : null;
    var headers = { 'Content-Type': 'application/json' };
    if (currentUser && currentUser.token) headers['Authorization'] = 'Bearer ' + currentUser.token;
    fetch(baseUrl + '/api/wishlist/' + eventId + (userId ? '?user_id=' + userId : ''), {
      method: 'DELETE',
      headers: headers
    }).catch(function () {});
  } catch (e) {}

  renderHero();
  renderWishlist();
  showToast('💔 Đã xóa khỏi danh sách yêu thích', 'info');
}


function prefillProfileForm() {
  var el = function (id) { return document.getElementById(id); };
  if (el('pf-name')) el('pf-name').value = currentUser.name || '';
  if (el('pf-email')) el('pf-email').value = currentUser.email || '';
  if (el('pf-phone')) el('pf-phone').value = currentUser.phone || '';
  if (el('pf-dob')) el('pf-dob').value = currentUser.dob || '';
  if (el('pf-gender')) el('pf-gender').value = currentUser.gender || '';
  if (el('pf-address')) el('pf-address').value = currentUser.address || '';
}

function saveProfile() {
  var el = function (id) { return document.getElementById(id); };
  var name = el('pf-name') ? el('pf-name').value.trim() : '';
  var email = el('pf-email') ? el('pf-email').value.trim() : '';
  var phone = el('pf-phone') ? el('pf-phone').value.trim() : '';
  var dob = el('pf-dob') ? el('pf-dob').value : '';
  var gender = el('pf-gender') ? el('pf-gender').value : '';
  var address = el('pf-address') ? el('pf-address').value.trim() : '';

  var valid = true;

  if (!name) {
    valid = false;
    showToast('⚠️ Vui lòng nhập họ tên', 'error');
    return;
  }

  if (phone) {
    var vnPhoneRegex = /^(0|\+84)(3[2-9]|5[6-9]|7[0689]|8[1-9]|9[0-9])[0-9]{7}$/;
    if (!vnPhoneRegex.test(phone)) {
      valid = false;
      showToast('⚠️ Số điện thoại không đúng định dạng Việt Nam', 'error');
      return;
    }
  }

  if (!valid) return;

  currentUser.name = name;
  currentUser.email = email;
  currentUser.phone = phone;
  currentUser.dob = dob;
  currentUser.gender = gender;
  currentUser.address = address;

  try {
    localStorage.setItem('eventhub_user', JSON.stringify(currentUser));
  } catch (e) { /* ignore */ }

  renderHero();

  var successMsg = document.getElementById('pf-success-msg');
  if (successMsg) {
    successMsg.textContent = '✅ Thông tin đã được lưu thành công!';
    successMsg.style.display = '';
  }

  showToast('✅ Lưu thành công!', 'success');

  var saveBtn = document.getElementById('pf-save-btn');
  if (saveBtn) {
    saveBtn.textContent = '✅ Đã lưu';
    setTimeout(function () {
      saveBtn.textContent = 'Lưu thay đổi';
    }, 2000);
  }
}


// Kiểm tra độ mạnh mật khẩu
function checkPasswordStrength(val) {
  var score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  var fill = document.getElementById('pw-strength-fill');
  var label = document.getElementById('pw-strength-label');
  var widths = ['0%', '25%', '50%', '75%', '100%'];
  var colors = ['#ccc', '#E53935', '#FB8C00', '#C0CA33', '#00A651'];
  var labels = ['', 'Yếu', 'Trung bình', 'Khá', 'Mạnh'];

  if (!val) {
    if (fill) { fill.style.width = '0%'; fill.style.background = '#ccc'; }
    if (label) { label.textContent = ''; label.style.color = ''; }
    return;
  }
  if (fill) { fill.style.width = widths[score]; fill.style.background = colors[score]; }
  if (label) { label.textContent = labels[score]; label.style.color = colors[score]; }
}

function initPasswordStrength() {
  var input = document.getElementById('sec-new-pw');
  if (!input) return;
  input.addEventListener('input', function () {
    var val = input.value;
    var score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    var fill = document.getElementById('pw-strength-fill');
    var label = document.getElementById('pw-strength-label');

    var widths = ['0%', '25%', '50%', '75%', '100%'];
    var colors = ['#ccc', '#e53935', '#fb8c00', '#c0ca33', '#43a047'];
    var labels = ['', 'Yếu', 'Trung bình', 'Khá', 'Mạnh'];

    if (!val) {
      if (fill) { fill.style.width = '0%'; fill.style.background = '#ccc'; }
      if (label) label.textContent = '';
      return;
    }

    if (fill) {
      fill.style.width = widths[score];
      fill.style.background = colors[score];
    }
    if (label) label.textContent = labels[score];
  });
}

function changePassword() {
  var el = function (id) { return document.getElementById(id); };
  var currentPw = el('sec-current-pw') ? el('sec-current-pw').value : '';
  var newPw = el('sec-new-pw') ? el('sec-new-pw').value : '';
  var confirmPw = el('sec-confirm-pw') ? el('sec-confirm-pw').value : '';

  var errCurrent = el('err-current-pw');
  var errNew = el('err-new-pw');
  var errConfirm = el('err-confirm-pw');

  if (errCurrent) errCurrent.textContent = '';
  if (errNew) errNew.textContent = '';
  if (errConfirm) errConfirm.textContent = '';

  var valid = true;

  if (!currentPw) {
    if (errCurrent) errCurrent.textContent = 'Vui lòng nhập mật khẩu hiện tại';
    valid = false;
  }

  if (newPw.length < 8) {
    if (errNew) errNew.textContent = 'Mật khẩu mới phải có ít nhất 8 ký tự';
    valid = false;
  }

  if (newPw !== confirmPw) {
    if (errConfirm) errConfirm.textContent = 'Mật khẩu xác nhận không khớp';
    valid = false;
  }

  if (!valid) return;

  showToast('🔐 Mật khẩu đã được thay đổi thành công!', 'success');
  if (el('sec-current-pw')) el('sec-current-pw').value = '';
  if (el('sec-new-pw')) el('sec-new-pw').value = '';
  if (el('sec-confirm-pw')) el('sec-confirm-pw').value = '';

  // Đặt lại thanh đo độ mạnh mật khẩu
  var fill = document.getElementById('pw-strength-fill');
  var label = document.getElementById('pw-strength-label');
  if (fill) { fill.style.width = '0%'; }
  if (label) label.textContent = '';
}

function logoutAll() {
  showToast('👋 Đã đăng xuất khỏi tất cả thiết bị', 'success');
  setTimeout(function () {
    window.location.href = 'landing.html';
  }, 1500);
}



function filterTickets(filter) {
  renderTickets(filter);
}

// Ẩn / hiện mật khẩu
function togglePwVisibility(inputId, btn) {
  var input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
}

// Xóa tài khoản
function deleteAccount() {
  showToast('⚠️ Tính năng này sẽ sớm được hỗ trợ', 'info');
}

window.switchRoleQuickly = switchRoleQuickly;
window.quickLogin = switchRoleQuickly;
