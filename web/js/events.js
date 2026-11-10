/**
 * EventHub — Events Listing Page (events.js)
 * Vanilla JS: filtering, sorting, pagination, search, view toggle
 */

'use strict';

// ============================================================
// 1. MOCK DATA — 12 events, diverse categories
// ============================================================

const EV_EVENTS = [
  {
    id: 1,
    name: "Lễ Hội Âm Nhạc Gió Mùa — Monsoon Music Festival 2026",
    category: "music",
    categoryLabel: "Âm nhạc & Concert",
    date: new Date("2026-11-20T18:30:00"),
    venue: "Hoàng Thành Thăng Long, Hà Nội",
    format: "offline",
    price: 450000,
    originalPrice: 600000,
    capacity: 5000,
    registered: 4350,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    organizer: "Monsoon Production",
    isHot: true,
    description: "Đại nhạc hội quốc tế quy tụ hơn 30 nghệ sĩ trong nước và quốc tế."
  },
  {
    id: 2,
    name: "Vietnam AI Summit 2026: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số",
    category: "tech",
    categoryLabel: "Hội thảo & Tech",
    date: new Date("2026-11-22T08:30:00"),
    venue: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    format: "offline",
    price: 350000,
    originalPrice: 500000,
    capacity: 1200,
    registered: 980,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    organizer: "TechVentures Vietnam",
    isHot: true,
    description: "Diễn đàn công nghệ quy tụ chuyên gia AI từ Google, Microsoft."
  },
  {
    id: 3,
    name: "Workshop Đầu Tư Tài Chính Cá Nhân F.I.R.E — Thực Chiến",
    category: "tech",
    categoryLabel: "Hội thảo & Tech",
    date: new Date("2026-11-28T14:00:00"),
    venue: "SECC Quận 7, TP. Hồ Chí Minh",
    format: "offline",
    price: 200000,
    originalPrice: 250000,
    capacity: 300,
    registered: 285,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    organizer: "FinEdu Hub",
    isHot: false,
    description: "Khóa học thực chiến xây dựng danh mục đầu tư thụ động."
  },
  {
    id: 4,
    name: "Lễ Hội Ẩm Thực Đường Phố & Bia Thủ Công Sài Gòn 2026",
    category: "food",
    categoryLabel: "Ẩm thực & Đời sống",
    date: new Date("2026-12-05T16:00:00"),
    venue: "Công viên Bến Bạch Đằng, Quận 1, TP.HCM",
    format: "offline",
    price: 150000,
    originalPrice: 180000,
    capacity: 3500,
    registered: 2100,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    organizer: "Saigon Foodies Community",
    isHot: true,
    description: "Thưởng thức hơn 100 món đặc sản và 20 thương hiệu bia thủ công."
  },
  {
    id: 5,
    name: "Triển Lãm Nghệ Thuật Đa Giác Quan: Vincent van Gogh Alive",
    category: "art",
    categoryLabel: "Nghệ thuật & Triển lãm",
    date: new Date("2026-12-12T09:00:00"),
    venue: "Trung tâm Nghệ thuật VCCA, Hà Nội",
    format: "offline",
    price: 280000,
    originalPrice: 350000,
    capacity: 1500,
    registered: 1450,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&q=80",
    organizer: "VCCA Arts",
    isHot: false,
    description: "Không gian trải nghiệm công nghệ 3D mapping kiệt tác hội họa."
  },
  {
    id: 6,
    name: "Giải Chạy Bán Marathon Đêm Đà Lạt — Dalat Night Run 2026",
    category: "sport",
    categoryLabel: "Thể thao & Marathon",
    date: new Date("2026-11-25T19:00:00"),
    venue: "Quảng trường Lâm Viên & Hồ Xuân Hương, Đà Lạt",
    format: "offline",
    price: 490000,
    originalPrice: 600000,
    capacity: 2500,
    registered: 2320,
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80",
    organizer: "Dalat Athletics Association",
    isHot: true,
    description: "Cung đường chạy ven hồ Xuân Hương thơ mộng trong tiết trời Đà Lạt."
  },
  {
    id: 7,
    name: "Countdown New Year 2027 — Đại Nhạc Hội Chào Năm Mới",
    category: "music",
    categoryLabel: "Âm nhạc & Concert",
    date: new Date("2026-12-31T20:00:00"),
    venue: "Phố đi bộ Nguyễn Huệ, TP.HCM",
    format: "offline",
    price: 650000,
    originalPrice: 850000,
    capacity: 10000,
    registered: 8800,
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    organizer: "EventHub & VTV",
    isHot: true,
    description: "Đêm hội tưng bừng chào đón năm 2027 với màn trình diễn pháo hoa."
  },
  {
    id: 8,
    name: "Google I/O Extended Việt Nam 2026 — Developer Summit",
    category: "tech",
    categoryLabel: "Hội thảo & Tech",
    date: new Date("2026-12-10T09:00:00"),
    venue: "Toà nhà UOB, Quận 1, TP.HCM",
    format: "offline",
    price: 0,
    originalPrice: 0,
    capacity: 800,
    registered: 650,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    organizer: "GDG Vietnam",
    isHot: false,
    description: "Cộng đồng lập trình viên Google Developer Group chia sẻ công nghệ mới."
  },
  {
    id: 9,
    name: "Lễ Hội EDM VinaFest 2026 — Đêm Nhạc Điện Tử",
    category: "night",
    categoryLabel: "Nightlife & Lễ hội",
    date: new Date("2026-12-19T21:00:00"),
    venue: "GEM Center, Quận 1, TP.HCM",
    format: "offline",
    price: 850000,
    originalPrice: 1100000,
    capacity: 3000,
    registered: 1800,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    organizer: "VinaFest Entertainment",
    isHot: true,
    description: "Đêm nhạc điện tử với sự góp mặt của DJ quốc tế hàng đầu."
  },
  {
    id: 10,
    name: "Hội Thảo UX Design Thinking — Thiết Kế Lấy Người Dùng Làm Trung Tâm",
    category: "tech",
    categoryLabel: "Hội thảo & Tech",
    date: new Date("2026-11-30T09:00:00"),
    venue: "Online (Zoom Webinar)",
    format: "online",
    price: 0,
    originalPrice: 0,
    capacity: 500,
    registered: 342,
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
    organizer: "UX Vietnam Community",
    isHot: false,
    description: "Hội thảo trực tuyến về phương pháp thiết kế UX chuyên nghiệp."
  },
  {
    id: 11,
    name: "Lễ Hội Ánh Sáng Diwali Hà Nội 2026",
    category: "art",
    categoryLabel: "Nghệ thuật & Triển lãm",
    date: new Date("2026-11-15T17:00:00"),
    venue: "Vườn hoa Lý Thái Tổ, Hà Nội",
    format: "offline",
    price: 80000,
    originalPrice: 80000,
    capacity: 2000,
    registered: 950,
    image: "https://images.unsplash.com/photo-1604153297036-a6e28e9b0d7a?w=800&q=80",
    organizer: "India Cultural Center HN",
    isHot: false,
    description: "Lễ hội ánh sáng truyền thống Ấn Độ lan toả sắc màu giữa lòng Hà Nội."
  },
  {
    id: 12,
    name: "Iron Man Vietnam Triathlon 2026 — Nha Trang",
    category: "sport",
    categoryLabel: "Thể thao & Marathon",
    date: new Date("2026-12-22T05:00:00"),
    venue: "Bãi biển Trần Phú, Nha Trang",
    format: "offline",
    price: 2500000,
    originalPrice: 3000000,
    capacity: 1500,
    registered: 1120,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    organizer: "World Triathlon Vietnam",
    isHot: true,
    description: "Giải đấu Ironman chính thức duy nhất tại Việt Nam năm 2026."
  }
];

// ============================================================
// 2. STATE
// ============================================================

const evState = {
  // Filter values
  categories: [],       // empty = all
  price: 'all',
  dateFilter: 'all',
  dateFrom: null,
  dateTo: null,
  format: 'all',
  sort: 'hot',
  keyword: '',

  // Pagination
  page: 1,
  perPage: 6,
  currentView: 'grid',

  // Liked events
  liked: new Set(),

  // Filtered + sorted results cache
  results: []
};

// ============================================================
// 3. INIT
// ============================================================

function getAllEvents() {
  try {
    const stored = localStorage.getItem('eventhub_events');
    if (stored) {
      const list = JSON.parse(stored);
      if (Array.isArray(list) && list.length > 0) {
        const customIds = new Set(list.map(e => Number(e.id)));
        const defaultRemain = EV_EVENTS.filter(e => !customIds.has(Number(e.id)));
        const normalizedCustom = list.map(e => {
          let cat = e.category || 'music';
          if (cat.includes('Âm nhạc')) cat = 'music';
          else if (cat.includes('Công nghệ') || cat.includes('Hội thảo')) cat = 'tech';
          else if (cat.includes('Ẩm thực')) cat = 'food';
          else if (cat.includes('Nghệ thuật')) cat = 'art';
          else if (cat.includes('Thể thao')) cat = 'sport';
          else if (cat.includes('Night')) cat = 'night';
          return {
            ...e,
            id: Number(e.id),
            category: cat,
            categoryLabel: e.category || 'Sự kiện',
            date: e.start_date ? new Date(e.start_date) : (e.date ? new Date(e.date) : new Date()),
            price: Number(e.price) || 0,
            originalPrice: Number(e.original_price || e.originalPrice) || Number(e.price) || 0,
            isHot: e.is_hot !== undefined ? e.is_hot : e.isHot,
            format: e.format || 'offline'
          };
        });
        return [...normalizedCustom, ...defaultRemain];
      }
    }
  } catch (e) {}
  return EV_EVENTS;
}

function initFiltersFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || params.get('search') || params.get('keyword');
    const cat = params.get('category') || params.get('cat');
    const sort = params.get('sort');

    if (q) {
      evState.keyword = q.trim();
      const kwInput = document.getElementById('hub-search-input') || document.getElementById('ev-header-keyword');
      if (kwInput) {
        kwInput.value = q.trim();
        (document.getElementById('hub-search-clear') || document.getElementById('ev-header-clear'))?.classList.add('visible');
      }
    }
    if (cat) {
      const lower = cat.toLowerCase();
      const catMap = {
        'music': 'music', 'am-nhac': 'music', 'âm nhạc': 'music', 'âm nhạc & lễ hội': 'music', 'âm nhạc & concert': 'music',
        'tech': 'tech', 'cong-nghe': 'tech', 'công nghệ': 'tech', 'hội thảo': 'tech', 'hội thảo & tech': 'tech', 'công nghệ & ai': 'tech',
        'food': 'food', 'am-thuc': 'food', 'ẩm thực': 'food', 'ẩm thực & đời sống': 'food',
        'art': 'art', 'nghe-thuat': 'art', 'nghệ thuật': 'art', 'nghệ thuật & triển lãm': 'art',
        'sport': 'sport', 'the-thao': 'sport', 'thể thao': 'sport', 'thể thao & marathon': 'sport',
        'night': 'night', 'nightlife': 'night', 'nightlife & lễ hội': 'night'
      };
      const mapped = catMap[lower] || lower;
      evState.categories = [mapped];

      // Sync sidebar category checkboxes
      const allCb = document.querySelector('input[name="category"][value="all"]');
      if (allCb) allCb.checked = false;
      const targetCb = document.querySelector(`input[name="category"][value="${mapped}"]`);
      if (targetCb) targetCb.checked = true;
    }
    if (sort) {
      evState.sort = sort;
      const sortSelect = document.getElementById('ev-sort');
      if (sortSelect) sortSelect.value = sort;
    }
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  loadUser();
  try {
    const saved = JSON.parse(localStorage.getItem('eventhub_wishlist') || '[]');
    saved.forEach(item => {
      const id = typeof item === 'object' ? (item.id || item.eventId) : item;
      if (id) evState.liked.add(Number(id));
    });
  } catch (e) {}
  initFiltersFromUrl();
  updateCategoryCounts();
  setupHeaderSearch();
  applyFilters();

  // Attach listener to user chip for click & keyboard accessibility
  const userChip = document.getElementById('ev-user-chip');
  if (userChip) {
    userChip.addEventListener('click', (e) => toggleUserDropdown(e));
    userChip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleUserDropdown(e);
      }
    });
  }

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    document.getElementById('ev-header').classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
});

// ============================================================
// 4. AUTH (sync with localStorage)
// ============================================================

const EV_USERS = {
  Admin: { id: 1, name: 'Nguyễn Bảo Khánh', email: 'khanh.admin@eventhub.vn', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80' },
  Organizer: { id: 2, name: 'Trần Quang Huy', email: 'huy.organizer@eventhub.vn', role: 'Organizer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80' },
  Staff: { id: 3, name: 'Chu Đức Duy', email: 'duy.staff@eventhub.vn', role: 'Staff', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80' },
  Guest: { id: 4, name: 'Nguyễn Văn Khang', email: 'khang.guest@gmail.com', role: 'Guest', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80' }
};

function loadUser() {
  try {
    let saved = localStorage.getItem('eventhub_user');
    // If not set yet, initialize default user
    if (!saved) {
      saved = JSON.stringify(EV_USERS.Admin);
      localStorage.setItem('eventhub_user', saved);
    }

    if (saved) {
      const user = JSON.parse(saved);
      if (user && user.name) {
        document.getElementById('ev-auth-guest').style.display = 'none';
        const userEl = document.getElementById('ev-auth-user');
        userEl.style.display = 'flex';
        document.getElementById('ev-user-avatar').src = user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80';
        document.getElementById('ev-user-name').textContent = user.name.split(' ').pop();

        // Dropdown info
        const ddName = document.getElementById('ev-dropdown-name');
        const ddEmail = document.getElementById('ev-dropdown-email');
        const ddRole = document.getElementById('ev-dropdown-role');
        if (ddName) ddName.textContent = user.name;
        if (ddEmail) ddEmail.textContent = user.email || 'user@eventhub.vn';
        if (ddRole) {
          ddRole.textContent = user.role || 'Member';
          ddRole.className = 'ev-role-badge ' + (user.role || '').toLowerCase();
        }

        // Role-based permissions: Admin and Organizer
        const role = (user.role || '').toLowerCase();
        const hasAdminAccess = (role === 'admin' || role === 'organizer');
        const navCreate = document.getElementById('ev-nav-create');
        const navAdmin  = document.getElementById('ev-nav-admin');
        const ddCreate  = document.getElementById('ev-dd-create');
        const ddAdmin   = document.getElementById('ev-dd-admin');

        if (navCreate) navCreate.style.display = hasAdminAccess ? 'inline-flex' : 'none';
        if (navAdmin)  navAdmin.style.display  = hasAdminAccess ? 'inline-flex' : 'none';
        if (ddCreate)  ddCreate.style.display  = hasAdminAccess ? 'flex' : 'none';
        if (ddAdmin)   ddAdmin.style.display   = hasAdminAccess ? 'flex' : 'none';
      }
    }
  } catch (e) { /* ignore */ }
}

function switchRoleQuickly(roleName) {
  const profile = EV_USERS[roleName] || EV_USERS.Guest;
  localStorage.setItem('eventhub_user', JSON.stringify(profile));
  loadUser();
  showToast(`⚡ Đã chuyển sang vai trò: ${profile.name} (${profile.role})`, 'success');
  const dropdown = document.getElementById('ev-user-dropdown');
  const chip = document.getElementById('ev-user-chip');
  if (dropdown) dropdown.style.display = 'none';
  if (chip) chip.classList.remove('open');
}

function toggleUserDropdown(e) {
  if (e) {
    e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  }
  const dropdown = document.getElementById('ev-user-dropdown');
  const chip = document.getElementById('ev-user-chip');
  if (!dropdown) return;
  const isHidden = dropdown.style.display === 'none' || !dropdown.style.display;
  dropdown.style.display = isHidden ? 'block' : 'none';
  if (chip) chip.classList.toggle('open', isHidden);
}

document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('ev-user-dropdown');
  const chip = document.getElementById('ev-user-chip');
  if (dropdown && !dropdown.contains(e.target) && !chip?.contains(e.target)) {
    dropdown.style.display = 'none';
    if (chip) chip.classList.remove('open');
  }
});

function handleLogout() {
  localStorage.removeItem('eventhub_user');
  showToast('👋 Đã đăng xuất', 'info');
  setTimeout(() => window.location.reload(), 600);
}

// ============================================================
// 5. HEADER SEARCH
// ============================================================

function setupHeaderSearch() {
  const input = document.getElementById('hub-search-input') || document.getElementById('ev-header-keyword');
  const clearBtn = document.getElementById('hub-search-clear') || document.getElementById('ev-header-clear');
  if (!input) return;

  // Realtime debounced search
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    if (clearBtn) clearBtn.classList.toggle('visible', input.value.length > 0);
    debounceTimer = setTimeout(() => {
      evState.keyword = input.value.trim();
      evState.page = 1;
      applyFilters();
    }, 250);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      clearTimeout(debounceTimer);
      evState.keyword = input.value.trim();
      evState.page = 1;
      applyFilters();
    }
  });
}

function clearHeaderSearch() {
  const input = document.getElementById('hub-search-input') || document.getElementById('ev-header-keyword');
  if (input) input.value = '';
  const clearBtn = document.getElementById('hub-search-clear') || document.getElementById('ev-header-clear');
  if (clearBtn) clearBtn.classList.remove('visible');
  evState.keyword = '';
  evState.page = 1;
  applyFilters();
}

// ============================================================
// 6. FILTER SECTION COLLAPSE
// ============================================================

function toggleFilterSection(btn) {
  const expanded = btn.getAttribute('aria-expanded') !== 'false';
  btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  const body = btn.nextElementSibling;
  if (body) body.classList.toggle('collapsed', expanded);
}

// ============================================================
// 7. MOBILE FILTER DRAWER
// ============================================================

function toggleMobileFilter() {
  const sidebar = document.getElementById('ev-sidebar');
  const overlay = document.getElementById('ev-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function closeMobileFilter() {
  document.getElementById('ev-sidebar').classList.remove('open');
  document.getElementById('ev-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// 8. FILTER CHANGE HANDLERS
// ============================================================

function onCategoryAll(checkbox) {
  if (checkbox.checked) {
    // Uncheck all specific categories
    document.querySelectorAll('input[name="category"]:not([value="all"])').forEach(cb => {
      cb.checked = false;
    });
    evState.categories = [];
  }
  evState.page = 1;
  applyFilters();
}

function onCategoryChange() {
  const checked = [...document.querySelectorAll('input[name="category"]:not([value="all"]):checked')]
    .map(cb => cb.value);

  // Uncheck "all" if any specific is checked
  const allCheckbox = document.querySelector('input[name="category"][value="all"]');
  if (checked.length > 0) {
    allCheckbox.checked = false;
  } else {
    allCheckbox.checked = true;
  }

  evState.categories = checked;
  evState.page = 1;
  applyFilters();
}

function onFilterChange() {
  evState.price      = document.querySelector('input[name="price"]:checked')?.value || 'all';
  evState.format     = document.querySelector('input[name="format"]:checked')?.value || 'all';
  evState.sort       = document.getElementById('ev-sort')?.value || 'hot';
  evState.dateFrom   = document.getElementById('ev-date-from')?.value || null;
  evState.dateTo     = document.getElementById('ev-date-to')?.value || null;
  evState.page       = 1;
  applyFilters();
}

function setDateFilter(btn) {
  document.querySelectorAll('.ev-date-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  evState.dateFilter = btn.dataset.datefilter;
  // Hide custom date range if quick option chosen
  if (evState.dateFilter !== 'custom') {
    document.getElementById('ev-date-range').style.display = 'none';
  }
  evState.page = 1;
  applyFilters();
}

function toggleDateRange(btn) {
  const rangeEl = document.getElementById('ev-date-range');
  const isOpen = rangeEl.style.display !== 'none';
  rangeEl.style.display = isOpen ? 'none' : 'flex';
  btn.textContent = isOpen ? '📅 Chọn khoảng ngày cụ thể' : '📅 Ẩn bộ chọn ngày';
  if (!isOpen) {
    // Deactivate quick chips
    document.querySelectorAll('.ev-date-chip').forEach(c => c.classList.remove('active'));
    evState.dateFilter = 'custom';
  }
}

function resetFilters() {
  // Reset checkboxes
  document.querySelectorAll('input[name="category"]').forEach(cb => {
    cb.checked = cb.value === 'all';
  });
  document.querySelectorAll('input[name="price"]').forEach(r => {
    r.checked = r.value === 'all';
  });
  document.querySelectorAll('input[name="format"]').forEach(r => {
    r.checked = r.value === 'all';
  });
  // Reset date chips
  document.querySelectorAll('.ev-date-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.ev-date-chip[data-datefilter="all"]')?.classList.add('active');
  document.getElementById('ev-date-range').style.display = 'none';
  document.getElementById('ev-date-from').value = '';
  document.getElementById('ev-date-to').value = '';
  // Reset sort
  document.getElementById('ev-sort').value = 'hot';
  // Reset header search
  const headerInput = document.getElementById('hub-search-input') || document.getElementById('ev-header-keyword');
  if (headerInput) { headerInput.value = ''; }
  (document.getElementById('hub-search-clear') || document.getElementById('ev-header-clear'))?.classList.remove('visible');

  // Reset state
  Object.assign(evState, {
    categories: [], price: 'all', dateFilter: 'all',
    dateFrom: null, dateTo: null, format: 'all',
    sort: 'hot', keyword: '', page: 1
  });

  applyFilters();
  showToast('🔄 Đã xóa tất cả bộ lọc', 'info');
}

// ============================================================
// 9. CORE FILTER + SORT LOGIC
// ============================================================

function applyFilters() {
  // Also read sort from DOM (may change via dropdown)
  evState.sort   = document.getElementById('ev-sort')?.value || evState.sort;
  evState.price  = document.querySelector('input[name="price"]:checked')?.value || evState.price;
  evState.format = document.querySelector('input[name="format"]:checked')?.value || evState.format;

  const now = new Date();

  const allEvts = getAllEvents();
  let results = allEvts.filter(evt => {

    // --- keyword ---
    if (evState.keyword) {
      const q = evState.keyword.toLowerCase();
      if (!evt.name.toLowerCase().includes(q) &&
          !evt.venue.toLowerCase().includes(q) &&
          !evt.categoryLabel.toLowerCase().includes(q) &&
          !evt.organizer.toLowerCase().includes(q)) return false;
    }

    // --- category ---
    if (evState.categories.length > 0 && !evState.categories.includes(evt.category)) return false;

    // --- price ---
    switch (evState.price) {
      case 'free':       if (evt.price !== 0)                            return false; break;
      case 'under500':   if (evt.price <= 0 || evt.price >= 500000)      return false; break;
      case '500to2000':  if (evt.price < 500000 || evt.price > 2000000)  return false; break;
      case 'above2000':  if (evt.price < 2000000)                        return false; break;
    }

    // --- format ---
    if (evState.format !== 'all' && evt.format !== evState.format) return false;

    // --- date ---
    const evDate = evt.date;
    switch (evState.dateFilter) {
      case 'today': {
        const s = startOf(now, 'day');
        const e = endOf(now, 'day');
        if (evDate < s || evDate > e) return false;
        break;
      }
      case 'tomorrow': {
        const tom = new Date(now); tom.setDate(now.getDate() + 1);
        const s = startOf(tom, 'day');
        const e = endOf(tom, 'day');
        if (evDate < s || evDate > e) return false;
        break;
      }
      case 'week': {
        const s = startOf(now, 'week');
        const e = endOf(now, 'week');
        if (evDate < s || evDate > e) return false;
        break;
      }
      case 'month': {
        const s = startOf(now, 'month');
        const e = endOf(now, 'month');
        if (evDate < s || evDate > e) return false;
        break;
      }
      case 'custom': {
        if (evState.dateFrom) {
          const from = new Date(evState.dateFrom);
          if (evDate < from) return false;
        }
        if (evState.dateTo) {
          const to = endOf(new Date(evState.dateTo), 'day');
          if (evDate > to) return false;
        }
        break;
      }
    }

    return true;
  });

  // --- sort ---
  results.sort((a, b) => {
    switch (evState.sort) {
      case 'hot':        return (b.isHot - a.isHot) || (b.registered / b.capacity) - (a.registered / a.capacity);
      case 'newest':     return b.id - a.id;
      case 'soonest':    return a.date - b.date;
      case 'price_asc':  return a.price - b.price;
      case 'price_desc': return b.price - a.price;
      default:           return 0;
    }
  });

  evState.results = results;
  renderResults();
  updateToolbar();
  updateActiveFilterChips();
  updateFilterBadge();
  updateCategoryCountsFiltered(results);
}

// Date helpers
function startOf(d, unit) {
  const r = new Date(d);
  if (unit === 'day')   { r.setHours(0,0,0,0); return r; }
  if (unit === 'week')  { const day = r.getDay(); r.setDate(r.getDate() - day); r.setHours(0,0,0,0); return r; }
  if (unit === 'month') { r.setDate(1); r.setHours(0,0,0,0); return r; }
  return r;
}
function endOf(d, unit) {
  const r = new Date(d);
  if (unit === 'day')   { r.setHours(23,59,59,999); return r; }
  if (unit === 'week')  { const day = r.getDay(); r.setDate(r.getDate() + (6 - day)); r.setHours(23,59,59,999); return r; }
  if (unit === 'month') { r.setMonth(r.getMonth()+1); r.setDate(0); r.setHours(23,59,59,999); return r; }
  return r;
}

// ============================================================
// 10. RENDER
// ============================================================

function renderResults() {
  const grid = document.getElementById('ev-grid');

  if (evState.results.length === 0) {
    grid.innerHTML = renderEmptyState();
    document.getElementById('ev-pagination').innerHTML = '';
    return;
  }

  const start = (evState.page - 1) * evState.perPage;
  const pageItems = evState.results.slice(start, start + evState.perPage);

  grid.className = `ev-grid ${evState.currentView === 'list' ? 'view-list' : ''}`;
  grid.innerHTML = pageItems.map((evt, i) => renderCard(evt, i)).join('');

  renderPagination();
}

function renderCard(evt, index) {
  const pct = Math.min(100, Math.round((evt.registered / evt.capacity) * 100));
  const isSoldOut = pct >= 100;
  const isAlmost  = pct >= 85 && !isSoldOut;
  const isFree    = evt.price === 0;
  const liked     = evState.liked.has(evt.id);
  const delay     = `animation-delay:${index * 50}ms`;

  const statusBadge = isSoldOut
    ? `<span class="ev-badge ev-badge-sold">🔴 Hết vé</span>`
    : isAlmost
    ? `<span class="ev-badge ev-badge-almost">🔥 Sắp hết</span>`
    : `<span class="ev-badge ev-badge-open">✅ Đang mở bán</span>`;

  const hotBadge = evt.isHot && !isSoldOut
    ? `<span class="ev-badge ev-badge-hot">⭐ HOT</span>` : '';

  const freeBadge = isFree
    ? `<span class="ev-badge ev-badge-free">🎁 Miễn phí</span>` : '';

  const formatBadge = evt.format === 'online'
    ? `<span class="ev-badge" style="background:rgba(124,58,237,0.8);color:#fff;">💻 Online</span>` : '';

  const priceHTML = isFree
    ? `<span class="ev-card-price-free">MIỄN PHÍ</span>`
    : `<div>
        <div class="ev-card-price-label">Giá từ</div>
        <span class="ev-card-price">${formatVND(evt.price)}</span>
        ${evt.originalPrice > evt.price
          ? `<span class="ev-card-price-orig">${formatVND(evt.originalPrice)}</span>` : ''}
      </div>`;

  const progressColor = pct >= 85 ? 'linear-gradient(90deg,#F5A623,#E53935)' : 'linear-gradient(90deg,#0194F3,#38bdf8)';

  return `
    <article class="ev-card" style="${delay}" onclick="goToEvent(${evt.id})" aria-label="${evt.name}" tabindex="0"
      onkeydown="if(event.key==='Enter')goToEvent(${evt.id})">
      <div class="ev-card-img-wrap">
        <img
          class="ev-card-img"
          src="${evt.image}"
          alt="${evt.name}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'"
        >
        <div class="ev-card-badges">
          <span class="ev-badge ev-badge-cat">${evt.categoryLabel}</span>
          ${hotBadge}${freeBadge}${formatBadge}
        </div>
        <button
          class="ev-card-wishlist"
          onclick="toggleLike(event, ${evt.id})"
          aria-label="${liked ? 'Bỏ yêu thích' : 'Thêm yêu thích'}"
          title="${liked ? 'Bỏ yêu thích' : 'Thêm yêu thích'}"
        >${liked ? '❤️' : '🤍'}</button>
      </div>

      <div class="ev-card-body">
        <h3 class="ev-card-name">${evt.name}</h3>
        <div class="ev-card-meta">
          <div class="ev-card-meta-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${formatDate(evt.date)}
          </div>
          <div class="ev-card-meta-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            ${evt.venue}
          </div>
          <div class="ev-card-meta-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            ${evt.organizer}
          </div>
        </div>
      </div>

      <div class="ev-card-progress">
        <div class="ev-card-progress-track">
          <div class="ev-card-progress-fill" style="width:${pct}%;background:${progressColor}"></div>
        </div>
        <div class="ev-card-progress-label">
          <span>${statusBadge.replace(/<[^>]+>/g,'')} · ${evt.registered.toLocaleString('vi-VN')} đã đặt</span>
          <span>${pct}% / ${evt.capacity.toLocaleString('vi-VN')}</span>
        </div>
      </div>

      <div class="ev-card-footer">
        ${priceHTML}
        <button
          class="ev-card-cta"
          onclick="goToEvent(${evt.id})"
          ${isSoldOut ? 'disabled' : ''}
        >${isSoldOut ? 'Hết vé' : 'Xem chi tiết →'}</button>
      </div>
    </article>
  `;
}

function renderEmptyState() {
  const hasFilters = evState.keyword || evState.categories.length > 0 ||
    evState.price !== 'all' || evState.dateFilter !== 'all' || evState.format !== 'all';

  return `
    <div class="ev-empty">
      <div class="ev-empty-icon">${hasFilters ? '🔍' : '📭'}</div>
      <h3 class="ev-empty-title">
        ${hasFilters ? 'Không tìm thấy sự kiện nào' : 'Chưa có sự kiện'}
      </h3>
      <p class="ev-empty-desc">
        ${hasFilters
          ? 'Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác để tìm sự kiện phù hợp.'
          : 'Hiện chưa có sự kiện nào trong danh mục này. Quay lại sau nhé!'}
      </p>
      ${hasFilters ? `<button class="ev-btn ev-btn-primary" onclick="resetFilters()">🔄 Xóa bộ lọc &amp; Thử lại</button>` : ''}
    </div>
  `;
}

function renderPagination() {
  const pagination = document.getElementById('ev-pagination');
  const total = evState.results.length;
  const totalPages = Math.ceil(total / evState.perPage);
  const current = evState.page;
  const start = (current - 1) * evState.perPage + 1;
  const end = Math.min(current * evState.perPage, total);

  if (total <= evState.perPage) {
    pagination.innerHTML = `<div class="ev-load-more-info">Hiển thị tất cả <strong>${total}</strong> sự kiện</div>`;
    return;
  }

  let html = '';

  // Prev
  html += `<button class="ev-page-btn" onclick="goPage(${current - 1})" ${current === 1 ? 'disabled' : ''} aria-label="Trang trước">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
  </button>`;

  // Pages
  const pages = getPagesToShow(current, totalPages);
  pages.forEach(p => {
    if (p === '...') {
      html += `<span style="padding:0 4px;color:var(--ev-text-muted);">•••</span>`;
    } else {
      html += `<button class="ev-page-btn ${p === current ? 'active' : ''}" onclick="goPage(${p})" aria-label="Trang ${p}">${p}</button>`;
    }
  });

  // Next
  html += `<button class="ev-page-btn" onclick="goPage(${current + 1})" ${current === totalPages ? 'disabled' : ''} aria-label="Trang tiếp">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
  </button>`;

  html += `<div class="ev-load-more-info">Hiển thị ${start}–${end} trong tổng số <strong>${total}</strong> sự kiện</div>`;

  pagination.innerHTML = html;
}

function getPagesToShow(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [];
  if (current <= 4) {
    for (let i = 1; i <= 5; i++) pages.push(i);
    pages.push('...', total);
  } else if (current >= total - 3) {
    pages.push(1, '...');
    for (let i = total - 4; i <= total; i++) pages.push(i);
  } else {
    pages.push(1, '...', current - 1, current, current + 1, '...', total);
  }
  return pages;
}

function goPage(page) {
  const totalPages = Math.ceil(evState.results.length / evState.perPage);
  if (page < 1 || page > totalPages) return;
  evState.page = page;
  renderResults();
  document.getElementById('ev-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// 11. TOOLBAR UPDATES
// ============================================================

function updateToolbar() {
  const count = evState.results.length;
  const countEl = document.getElementById('ev-result-count');
  const headlineEl = document.getElementById('ev-result-headline');
  if (countEl) countEl.textContent = `Tìm thấy ${count} sự kiện`;
  if (headlineEl) headlineEl.textContent = count;
}

function updateActiveFilterChips() {
  const container = document.getElementById('ev-active-filters');
  const chips = [];

  if (evState.keyword) {
    chips.push({ label: `🔍 "${evState.keyword}"`, action: `clearKeyword()` });
  }
  if (evState.categories.length > 0) {
    const labels = { music:'Âm nhạc', tech:'Tech', sport:'Thể thao', art:'Nghệ thuật', food:'Ẩm thực', night:'Nightlife' };
    evState.categories.forEach(cat => {
      chips.push({ label: labels[cat] || cat, action: `removeCategoryFilter('${cat}')` });
    });
  }
  const priceLabels = { free:'Miễn phí', under500:'<500K', '500to2000':'500K–2Tr', above2000:'>2Tr' };
  if (evState.price !== 'all') chips.push({ label: `💰 ${priceLabels[evState.price]}`, action: `removePriceFilter()` });

  const dateLabels = { today:'Hôm nay', tomorrow:'Ngày mai', week:'Tuần này', month:'Tháng này', custom:'Khoảng ngày' };
  if (evState.dateFilter !== 'all') chips.push({ label: `📅 ${dateLabels[evState.dateFilter]}`, action: `removeDateFilter()` });

  if (evState.format !== 'all') chips.push({ label: evState.format === 'online' ? '💻 Online' : '📍 Offline', action: `removeFormatFilter()` });

  container.innerHTML = chips.map(c => `
    <span class="ev-filter-chip">
      ${c.label}
      <button onclick="${c.action}" aria-label="Xóa bộ lọc">✕</button>
    </span>
  `).join('');
}

function updateFilterBadge() {
  const count = (evState.categories.length > 0 ? 1 : 0) +
    (evState.price !== 'all' ? 1 : 0) +
    (evState.dateFilter !== 'all' ? 1 : 0) +
    (evState.format !== 'all' ? 1 : 0) +
    (evState.keyword ? 1 : 0);
  const badge = document.getElementById('ev-filter-badge');
  if (badge) {
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.textContent = count;
  }
}

// Quick chip remove actions
function clearKeyword() {
  evState.keyword = '';
  const inp = document.getElementById('hub-search-input') || document.getElementById('ev-header-keyword');
  if (inp) inp.value = '';
  (document.getElementById('hub-search-clear') || document.getElementById('ev-header-clear'))?.classList.remove('visible');
  evState.page = 1; applyFilters();
}
function removeCategoryFilter(cat) {
  evState.categories = evState.categories.filter(c => c !== cat);
  const cb = document.querySelector(`input[name="category"][value="${cat}"]`);
  if (cb) cb.checked = false;
  if (evState.categories.length === 0) {
    document.querySelector('input[name="category"][value="all"]').checked = true;
  }
  evState.page = 1; applyFilters();
}
function removePriceFilter() {
  evState.price = 'all';
  document.querySelector('input[name="price"][value="all"]').checked = true;
  evState.page = 1; applyFilters();
}
function removeDateFilter() {
  evState.dateFilter = 'all';
  document.querySelectorAll('.ev-date-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.ev-date-chip[data-datefilter="all"]')?.classList.add('active');
  document.getElementById('ev-date-range').style.display = 'none';
  evState.page = 1; applyFilters();
}
function removeFormatFilter() {
  evState.format = 'all';
  document.querySelector('input[name="format"][value="all"]').checked = true;
  evState.page = 1; applyFilters();
}

// ============================================================
// 12. CATEGORY COUNTS
// ============================================================

function updateCategoryCounts() {
  const counts = { music:0, tech:0, sport:0, art:0, food:0, night:0 };
  getAllEvents().forEach(e => { if (counts[e.category] !== undefined) counts[e.category]++; });
  Object.entries(counts).forEach(([key, val]) => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = val;
  });
}

function updateCategoryCountsFiltered(results) {
  const counts = { music:0, tech:0, sport:0, art:0, food:0, night:0 };
  results.forEach(e => { if (counts[e.category] !== undefined) counts[e.category]++; });
  Object.entries(counts).forEach(([key, val]) => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = val;
  });
}

// ============================================================
// 13. VIEW TOGGLE
// ============================================================

function setView(view) {
  evState.currentView = view;
  document.getElementById('btn-grid').classList.toggle('active', view === 'grid');
  document.getElementById('btn-list').classList.toggle('active', view === 'list');
  renderResults();
}

// ============================================================
// 14. WISHLIST
// ============================================================

function toggleLike(e, id) {
  e.stopPropagation();
  if (evState.liked.has(id)) {
    evState.liked.delete(id);
    showToast('💔 Đã bỏ yêu thích', 'info');
  } else {
    evState.liked.add(id);
    showToast('❤️ Đã thêm vào yêu thích', 'success');
  }
  try {
    const list = Array.from(evState.liked);
    localStorage.setItem('eventhub_wishlist', JSON.stringify(list));
  } catch (err) {}
  renderResults();
}

// ============================================================
// 15. NAVIGATE TO EVENT
// ============================================================

function goToEvent(id) {
  // Navigate to event detail page
  window.location.href = `event-detail.html?id=${id}`;
}

// ============================================================
// 16. TOAST
// ============================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('ev-toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `ev-toast ev-toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(120%)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// 17. HELPERS
// ============================================================

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function formatDate(date) {
  return date.toLocaleDateString('vi-VN', {
    weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

window.switchRoleQuickly = switchRoleQuickly;
window.quickLogin = switchRoleQuickly;

