/**
 * EventHub Landing Page - landing.js
 * Pure Vanilla JS, no dependencies
 */

// ============================================================
// 1. DATA
// ============================================================

const LP_EVENTS = [
  {
    id: 1,
    name: "Lễ Hội Âm Nhạc Gió Mùa — Monsoon Music Festival 2026",
    category: "Âm nhạc & Lễ hội",
    date: "2026-11-20T18:30:00",
    venue: "Hoàng Thành Thăng Long, Hà Nội",
    price: 450000,
    original_price: 600000,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    capacity: 5000,
    registered: 4350,
    is_hot: true
  },
  {
    id: 2,
    name: "Vietnam AI Summit 2026: Trí Tuệ Nhân Tạo & Kỷ Nguyên Số",
    category: "Công nghệ & AI",
    date: "2026-11-22T08:30:00",
    venue: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    price: 350000,
    original_price: 500000,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    capacity: 1200,
    registered: 980,
    is_hot: true
  },
  {
    id: 3,
    name: "Workshop Đầu Tư Tài Chính Cá Nhân F.I.R.E — Thực Chiến",
    category: "Công nghệ & AI",
    date: "2026-11-28T14:00:00",
    venue: "SECC Quận 7, TP. Hồ Chí Minh",
    price: 200000,
    original_price: 250000,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    capacity: 300,
    registered: 285,
    is_hot: false
  },
  {
    id: 4,
    name: "Lễ Hội Ẩm Thực Đường Phố & Bia Thủ Công Sài Gòn 2026",
    category: "Âm nhạc & Lễ hội",
    date: "2026-12-05T16:00:00",
    venue: "Công viên Bến Bạch Đằng, Quận 1, TP.HCM",
    price: 150000,
    original_price: 180000,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    capacity: 3500,
    registered: 2100,
    is_hot: true
  },
  {
    id: 5,
    name: "Triển Lãm Nghệ Thuật Đa Giác Quan: Vincent van Gogh Alive",
    category: "Nghệ thuật & Triển lãm",
    date: "2026-12-12T09:00:00",
    venue: "Trung tâm Nghệ thuật Đương đại VCCA, Hà Nội",
    price: 280000,
    original_price: 350000,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&q=80",
    capacity: 1500,
    registered: 1450,
    is_hot: false
  },
  {
    id: 6,
    name: "Giải Chạy Bán Marathon Đêm Đà Lạt — Dalat Night Run 2026",
    category: "Thể thao & Giải trí",
    date: "2026-11-25T19:00:00",
    venue: "Quảng trường Lâm Viên & Hồ Xuân Hương, Đà Lạt",
    price: 490000,
    original_price: 600000,
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80",
    capacity: 2500,
    registered: 2320,
    is_hot: true
  },
  {
    id: 7,
    name: "Countdown New Year 2027 — Đại Nhạc Hội Chào Năm Mới",
    category: "Âm nhạc & Lễ hội",
    date: "2026-12-31T20:00:00",
    venue: "Phố đi bộ Nguyễn Huệ, TP.HCM",
    price: 650000,
    original_price: 850000,
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    capacity: 10000,
    registered: 8800,
    is_hot: true
  },
  {
    id: 8,
    name: "Google I/O Extended Việt Nam 2026 — Developer Summit",
    category: "Công nghệ & AI",
    date: "2026-12-10T09:00:00",
    venue: "Toà nhà UOB, Quận 1, TP.HCM",
    price: 0,
    original_price: 0,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    capacity: 800,
    registered: 650,
    is_hot: false
  },
  {
    id: 9,
    name: "Lễ Hội EDM VinaFest 2026 — Đêm Nhạc Điện Tử",
    category: "Âm nhạc & Lễ hội",
    date: "2026-12-19T21:00:00",
    venue: "GEM Center, Quận 1, TP.HCM",
    price: 850000,
    original_price: 1100000,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    capacity: 3000,
    registered: 1800,
    is_hot: true
  },
  {
    id: 10,
    name: "Hội Thảo UX Design Thinking — Lấy Người Dùng Làm Trung Tâm",
    category: "Công nghệ & AI",
    date: "2026-11-30T09:00:00",
    venue: "Online (Zoom Webinar)",
    price: 0,
    original_price: 0,
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&q=80",
    capacity: 500,
    registered: 342,
    is_hot: false
  },
  {
    id: 11,
    name: "Lễ Hội Ánh Sáng Diwali Hà Nội 2026",
    category: "Nghệ thuật & Triển lãm",
    date: "2026-11-15T17:00:00",
    venue: "Vườn hoa Lý Thái Tổ, Hà Nội",
    price: 80000,
    original_price: 80000,
    image: "https://images.unsplash.com/photo-1604153297036-a6e28e9b0d7a?w=800&q=80",
    capacity: 2000,
    registered: 950,
    is_hot: false
  },
  {
    id: 12,
    name: "Iron Man Vietnam Triathlon 2026 — Nha Trang",
    category: "Thể thao & Giải trí",
    date: "2026-12-22T05:00:00",
    venue: "Bãi biển Trần Phú, Nha Trang",
    price: 2500000,
    original_price: 3000000,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    capacity: 1500,
    registered: 1100,
    is_hot: true
  }
];

function mapToStandardCategory(cat) {
  if (!cat) return "Công nghệ & AI";
  const norm = cat.toLowerCase().replace(/&amp;/g, '&').trim();
  if (norm.includes("nhạc") || norm.includes("music") || norm.includes("night") || norm.includes("ẩm thực") || norm.includes("lễ hội")) {
    return "Âm nhạc & Lễ hội";
  }
  if (norm.includes("công nghệ") || norm.includes("ai") || norm.includes("tech") || norm.includes("hội thảo") || norm.includes("workshop") || norm.includes("kỹ năng")) {
    return "Công nghệ & AI";
  }
  if (norm.includes("thể thao") || norm.includes("marathon") || norm.includes("triathlon") || norm.includes("chạy")) {
    return "Thể thao & Giải trí";
  }
  if (norm.includes("nghệ thuật") || norm.includes("triển lãm") || norm.includes("art")) {
    return "Nghệ thuật & Triển lãm";
  }
  return cat;
}

function getLpEvents() {
  try {
    const stored = localStorage.getItem('eventhub_events');
    if (stored) {
      const list = JSON.parse(stored);
      if (Array.isArray(list) && list.length > 0) {
        const customIds = new Set(list.map(e => Number(e.id)));
        const defaultRemain = LP_EVENTS.filter(e => !customIds.has(Number(e.id)));
        const customNorm = list.map(e => ({
          id: Number(e.id),
          name: e.name,
          category: mapToStandardCategory(e.category),
          date: e.start_date || e.date,
          venue: e.venue,
          price: Number(e.price) || 0,
          original_price: Number(e.original_price || e.originalPrice) || Number(e.price) || 0,
          image: e.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
          capacity: Number(e.capacity) || 1000,
          registered: Number(e.registered) || 0,
          is_hot: e.is_hot !== undefined ? e.is_hot : true
        }));
        return [...customNorm, ...defaultRemain];
      }
    }
  } catch (e) {}
  return LP_EVENTS;
}

const LP_CATEGORIES = [
  { id: "music",   name: "Âm nhạc & Concert",    icon: "🎵", color: "#EBF7FF", iconColor: "#0194F3", count: 128 },
  { id: "tech",    name: "Hội thảo & Tech",       icon: "💻", color: "#F3EEFF", iconColor: "#7c3aed", count: 64  },
  { id: "sport",   name: "Thể thao & Marathon",   icon: "🏃", color: "#E6F7ED", iconColor: "#00A651", count: 47  },
  { id: "art",     name: "Nghệ thuật & Triển lãm",icon: "🎨", color: "#FFF2ED", iconColor: "#FF5E1F", count: 35  },
  { id: "night",   name: "Nightlife & Lễ hội",    icon: "🎉", color: "#FEF6E9", iconColor: "#F5A623", count: 92  }
];

const LP_USERS = {
  Admin:     { name: "Nguyễn Bảo Khánh",  role: "Admin",     avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80" },
  Staff:     { name: "Chu Đức Duy",        role: "Staff",     avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&q=80" },
  Organizer: { name: "Trần Quang Huy",     role: "Organizer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80" },
  Guest:     { name: "Nguyễn Văn Khang",   role: "Guest",     avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80" }
};

// ============================================================
// 2. STATE
// ============================================================

const lpState = {
  user: null,
  currentTab: 'all',
  currentSlide: 0,
  slideCount: 3,
  slideInterval: null,
  likedEvents: new Set(),
  statsAnimated: false
};

// ============================================================
// 3. INIT
// ============================================================

function initLanding() {
  loadUser();
  try {
    const saved = JSON.parse(localStorage.getItem('eventhub_wishlist') || '[]');
    saved.forEach(item => {
      const id = typeof item === 'object' ? (item.id || item.eventId) : item;
      if (id) lpState.likedEvents.add(Number(id));
    });
  } catch (e) {}
  renderCategories();
  renderEvents('all');
  setupTabFilters();
  setupSearch();
  startSlider();
  startCountdown();
  setupScrollEffects();
  setupStatsObserver();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanding);
} else {
  initLanding();
}

// ============================================================
// 4. AUTH
// ============================================================

function loadUser() {
  try {
    let saved = localStorage.getItem('eventhub_user');
    if (!saved) {
      saved = JSON.stringify(LP_USERS.Admin);
      localStorage.setItem('eventhub_user', saved);
    }
    if (saved) lpState.user = JSON.parse(saved);
  } catch (e) { /* ignore */ }
  try {
    updateAuthUI();
  } catch (e) {
    console.warn('updateAuthUI non-fatal error:', e);
  }
}

function updateAuthUI() {
  const guestEl = document.getElementById('lp-auth-guest');
  const userEl  = document.getElementById('lp-auth-user');
  const avatarEl = document.getElementById('lp-avatar-img');
  const nameEl  = document.getElementById('lp-user-name-short');
  const menuName = document.getElementById('lp-menu-name');
  const menuRole = document.getElementById('lp-menu-role');

  const navCreate = document.getElementById('lp-nav-create');
  const navAdmin  = document.getElementById('lp-nav-admin');
  const menuCreate = document.getElementById('lp-menu-create');
  const menuAdmin  = document.getElementById('lp-menu-admin');
  const mobCreate  = document.getElementById('lp-mobile-create');
  const mobAdmin   = document.getElementById('lp-mobile-admin');

  if (lpState.user && lpState.user.name) {
    if (guestEl) guestEl.style.display = 'none';
    if (userEl) userEl.style.display  = 'flex';
    if (avatarEl) avatarEl.src = lpState.user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80';
    const firstName = lpState.user.name.split(' ').pop();
    if (nameEl) nameEl.textContent   = firstName;
    if (menuName) menuName.textContent = lpState.user.name;
    if (menuRole) menuRole.textContent = lpState.user.role || 'Thành viên';

    // Role-based permissions: Admin and Organizer have access to Create Event & ML
    const role = (lpState.user.role || '').toLowerCase();
    const hasAdminAccess = (role === 'admin' || role === 'organizer');

    if (navCreate) navCreate.style.display = hasAdminAccess ? 'inline-flex' : 'none';
    if (navAdmin)  navAdmin.style.display  = hasAdminAccess ? 'inline-flex' : 'none';
    if (menuCreate) menuCreate.style.display = hasAdminAccess ? 'block' : 'none';
    if (menuAdmin)  menuAdmin.style.display  = hasAdminAccess ? 'block' : 'none';
    if (mobCreate)  mobCreate.style.display  = hasAdminAccess ? 'block' : 'none';
    if (mobAdmin)   mobAdmin.style.display   = hasAdminAccess ? 'block' : 'none';
  } else {
    if (guestEl) guestEl.style.display = 'flex';
    if (userEl) userEl.style.display  = 'none';

    if (navCreate) navCreate.style.display = 'none';
    if (navAdmin)  navAdmin.style.display  = 'none';
    if (menuCreate) menuCreate.style.display = 'none';
    if (menuAdmin)  menuAdmin.style.display  = 'none';
    if (mobCreate)  mobCreate.style.display  = 'none';
    if (mobAdmin)   mobAdmin.style.display   = 'none';
  }

  // Also sync with global header if present
  if (typeof renderHubHeader === 'function') {
    renderHubHeader();
  }
}

function openAuthModal() {
  const modal = document.getElementById('lp-auth-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  const modal = document.getElementById('lp-auth-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.getElementById('lp-login-pane').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('lp-register-pane').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('lp-tab-login').classList.toggle('active',    tab === 'login');
  document.getElementById('lp-tab-register').classList.toggle('active', tab === 'register');
}

function quickLogin(role) {
  const profile = LP_USERS[role];
  if (!profile) return;
  lpState.user = { ...profile };
  localStorage.setItem('eventhub_user', JSON.stringify(lpState.user));
  // Also sync to main app
  updateAuthUI();
  closeAuthModal();
  showToast(`✅ Đăng nhập thành công! Chào ${profile.name}`, 'success');
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('lp-auth-username').value.toLowerCase().trim();
  let matched = null;
  if (username === 'admin'        || username.includes('admin'))     matched = 'Admin';
  else if (username === 'staff01' || username.includes('staff'))     matched = 'Staff';
  else if (username === 'organizer01' || username.includes('organ')) matched = 'Organizer';
  else                                                                matched = 'Guest';
  quickLogin(matched);
}

function handleRegister(e) {
  e.preventDefault();
  const name  = document.getElementById('lp-reg-name').value.trim();
  const email = document.getElementById('lp-reg-email').value.trim();
  if (!name || !email) { showToast('Vui lòng điền đầy đủ thông tin', 'error'); return; }
  lpState.user = {
    name,
    email,
    role: 'Guest',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0194F3&color=fff`
  };
  localStorage.setItem('eventhub_user', JSON.stringify(lpState.user));
  updateAuthUI();
  closeAuthModal();
  showToast(`🎉 Chào mừng ${name} đến với EventHub!`, 'success');
}

function handleLogout() {
  lpState.user = null;
  localStorage.removeItem('eventhub_user');
  updateAuthUI();
  const menu = document.getElementById('lp-user-menu');
  if (menu) menu.classList.remove('open');
  showToast('👋 Đã đăng xuất', 'info');
}

function toggleUserMenu() {
  const menu = document.getElementById('lp-user-menu');
  if (menu) menu.classList.toggle('open');
}

// Close user menu on outside click
document.addEventListener('click', (e) => {
  const authUser = document.getElementById('lp-auth-user');
  if (authUser && !authUser.contains(e.target)) {
    const menu = document.getElementById('lp-user-menu');
    if (menu) menu.classList.remove('open');
  }
  // Close auth modal on backdrop click
  const backdrop = document.getElementById('lp-auth-modal');
  if (backdrop && e.target === backdrop) closeAuthModal();
});

// ============================================================
// 5. HEADER
// ============================================================

function toggleMobileMenu() {
  const nav = document.getElementById('lp-mobile-nav');
  const burger = document.getElementById('lp-burger');
  if (nav) nav.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
}

function closeMobileMenu() {
  const nav = document.getElementById('lp-mobile-nav');
  const burger = document.getElementById('lp-burger');
  if (nav) nav.classList.remove('open');
  if (burger) burger.classList.remove('open');
}

function setupScrollEffects() {
  const header = document.getElementById('lp-header') || document.getElementById('hub-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });
}

// ============================================================
// 6. CATEGORIES
// ============================================================

function renderCategories() {
  const grid = document.getElementById('lp-categories-grid');
  if (!grid) return;

  grid.innerHTML = LP_CATEGORIES.map(cat => `
    <div class="lp-category-card" onclick="filterByCategory('${cat.id}')" role="button" tabindex="0"
         aria-label="Danh mục ${cat.name}" onkeydown="if(event.key==='Enter')filterByCategory('${cat.id}')">
      <div class="lp-cat-icon" style="background:${cat.color};">${cat.icon}</div>
      <div class="lp-cat-name">${cat.name}</div>
      <div class="lp-cat-count">${cat.count}+ sự kiện</div>
    </div>
  `).join('');
}

function filterByCategory(catId, evt) {
  // Map category id to tab name
  const map = {
    music: 'Âm nhạc & Lễ hội',
    tech: 'Công nghệ & AI',
    sport: 'Thể thao & Giải trí',
    art: 'Nghệ thuật & Triển lãm',
    night: 'Âm nhạc & Lễ hội'
  };
  const tabVal = map[catId] || 'all';

  // Highlight card
  document.querySelectorAll('.lp-category-card').forEach(c => c.classList.remove('active'));
  const target = (evt && evt.currentTarget) || (window.event && window.event.currentTarget);
  if (target) target.classList.add('active');

  // Switch events tab
  renderEvents(tabVal);
  document.querySelectorAll('.lp-tab-btn').forEach(btn => {
    const bTab = (btn.dataset.tab || '').replace(/&amp;/g, '&');
    btn.classList.toggle('active', bTab === tabVal);
  });

  // Scroll to events
  setTimeout(() => {
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ============================================================
// 7. EVENTS
// ============================================================

function setupTabFilters() {
  document.querySelectorAll('.lp-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lp-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEvents(btn.dataset.tab);
    });
  });
}

function renderEvents(tab) {
  const grid = document.getElementById('lp-events-grid');
  if (!grid) return;

  const allLpEvents = getLpEvents();
  let events = tab === 'all'
    ? allLpEvents
    : allLpEvents.filter(e => normalizeCategory(e.category) === normalizeCategory(tab));

  if (events.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--lp-text-muted);">
        <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
        <p style="font-size:1rem;font-weight:600;">Chưa có sự kiện nào trong danh mục này</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = events.map(evt => renderEventCard(evt)).join('');
}

function normalizeCategory(cat) {
  return mapToStandardCategory(cat).toLowerCase().replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

function renderEventCard(evt) {
  const rawPct = evt.capacity > 0 ? Math.round((evt.registered / evt.capacity) * 100) : 0;
  const pct = isNaN(rawPct) ? 0 : rawPct;
  const isSoldOut = pct >= 100;
  const isAlmost  = pct >= 85 && !isSoldOut;
  const isFree    = evt.price === 0;
  const liked     = lpState.likedEvents.has(evt.id);

  const rawDate = evt.date ? new Date(evt.date) : null;
  const dateStr = rawDate && !isNaN(rawDate)
    ? rawDate.toLocaleDateString('vi-VN', {
        weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
      })
    : 'Chưa xác định';

  const statusBadge = isSoldOut
    ? `<span class="lp-event-badge lp-event-badge-sold-out">🔴 Hết vé</span>`
    : isAlmost
    ? `<span class="lp-event-badge lp-event-badge-almost">🔥 Sắp hết</span>`
    : '';

  const hotBadge = evt.is_hot && !isSoldOut
    ? `<span class="lp-event-badge lp-event-badge-hot">⭐ HOT</span>`
    : '';

  const priceHTML = isFree
    ? `<span class="lp-event-price" style="color:var(--lp-success);">MIỄN PHÍ</span>`
    : `<div>
        <div class="lp-event-price-label">Giá từ</div>
        <span class="lp-event-price">${formatVND(evt.price)}</span>
        ${evt.original_price > evt.price
          ? `<span class="lp-event-price-original">${formatVND(evt.original_price)}</span>`
          : ''}
      </div>`;

  return `
    <article class="lp-event-card" onclick="goToEvent(${evt.id})" aria-label="${evt.name}">
      <div class="lp-event-img-wrap">
        <img
          class="lp-event-img"
          src="${evt.image}"
          alt="${evt.name}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'"
        >
        <div class="lp-event-badges">
          <span class="lp-event-badge lp-event-badge-cat">${evt.category}</span>
          ${hotBadge}
          ${statusBadge}
        </div>
        <button
          class="lp-event-wishlist ${liked ? 'liked' : ''}"
          onclick="toggleLike(event, ${evt.id})"
          aria-label="${liked ? 'Bỏ yêu thích' : 'Thêm yêu thích'}"
        >${liked ? '❤️' : '🤍'}</button>
      </div>

      <div class="lp-event-info">
        <h3 class="lp-event-name">${evt.name}</h3>
        <div class="lp-event-meta">
          <div class="lp-event-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${dateStr}
          </div>
          <div class="lp-event-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            ${evt.venue}
          </div>
        </div>
      </div>

      <div class="lp-event-progress">
        <div class="lp-event-progress-bar">
          <div class="lp-event-progress-fill" style="width:${Math.min(pct,100)}%;${pct>=85?'background:linear-gradient(90deg,#F5A623,#E53935)':''}"></div>
        </div>
        <div class="lp-event-progress-label">
          <span>${(evt.registered || 0).toLocaleString('vi-VN')} đã đặt</span>
          <span>${pct}%</span>
        </div>
      </div>

      <div class="lp-event-footer">
        ${priceHTML}
        <button class="lp-event-btn" ${isSoldOut ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
          ${isSoldOut ? 'Hết vé' : 'Xem chi tiết →'}
        </button>
      </div>
    </article>
  `;
}

function goToEvent(id) {
  window.location.href = `event-detail.html?id=${id}`;
}

function toggleLike(e, id) {
  e.stopPropagation();
  if (lpState.likedEvents.has(id)) {
    lpState.likedEvents.delete(id);
    showToast('💔 Đã bỏ yêu thích', 'info');
  } else {
    lpState.likedEvents.add(id);
    showToast('❤️ Đã thêm vào danh sách yêu thích', 'success');
  }
  try {
    const list = Array.from(lpState.likedEvents);
    localStorage.setItem('eventhub_wishlist', JSON.stringify(list));
  } catch (err) {}
  // Re-render current tab
  const activeTab = document.querySelector('.lp-tab-btn.active');
  renderEvents(activeTab ? activeTab.dataset.tab : 'all');
}

// ============================================================
// 8. SEARCH
// ============================================================

function setupSearch() {
  const input = document.getElementById('lp-keyword');
  const dropdown = document.getElementById('lp-autocomplete');
  if (!input || !dropdown) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (q.length < 2) { dropdown.classList.remove('open'); return; }

    const matches = LP_EVENTS.filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.venue.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q)
    ).slice(0, 5);

    if (matches.length === 0) { dropdown.classList.remove('open'); return; }

    dropdown.innerHTML = matches.map(e => `
      <div class="lp-autocomplete-item" onclick="selectEvent(${e.id})">
        <span class="lp-autocomplete-item-icon">🎪</span>
        <div>
          <div style="font-weight:600;font-size:0.88rem;">${e.name}</div>
          <div style="font-size:0.76rem;color:var(--lp-text-muted);">${e.venue}</div>
        </div>
      </div>
    `).join('');
    dropdown.classList.add('open');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dropdown.classList.remove('open');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}

function selectEvent(id) {
  document.getElementById('lp-autocomplete').classList.remove('open');
  goToEvent(id);
}

function handleSearch(e) {
  e.preventDefault();
  const keyword  = (document.getElementById('lp-keyword') || {}).value?.trim() || '';
  const location = (document.getElementById('lp-location') || {}).value || '';
  const time     = (document.getElementById('lp-time') || {}).value || '';

  if (!keyword && !location && !time) {
    window.location.href = 'events.html';
    return;
  }

  const params = new URLSearchParams();
  if (keyword) params.set('q', keyword);
  if (location && location !== 'all') params.set('loc', location);
  if (time && time !== 'all') params.set('time', time);

  window.location.href = `events.html?${params.toString()}`;
}

function quickSearch(keyword) {
  document.getElementById('lp-keyword').value = keyword;
  handleSearch(new Event('submit'));
}

// ============================================================
// 9. PROMO SLIDER
// ============================================================

function startSlider() {
  lpState.slideInterval = setInterval(() => slidePromo(1), 5000);
}

function slidePromo(dir) {
  clearInterval(lpState.slideInterval);
  lpState.currentSlide = (lpState.currentSlide + dir + lpState.slideCount) % lpState.slideCount;
  applySlide();
  lpState.slideInterval = setInterval(() => slidePromo(1), 5000);
}

function goToSlide(idx) {
  clearInterval(lpState.slideInterval);
  lpState.currentSlide = idx;
  applySlide();
  lpState.slideInterval = setInterval(() => slidePromo(1), 5000);
}

function applySlide() {
  const track = document.getElementById('lp-promo-track');
  if (track) track.style.transform = `translateX(-${lpState.currentSlide * 100}%)`;
  document.querySelectorAll('.lp-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === lpState.currentSlide);
  });
}

// ============================================================
// 10. COUNTDOWN TIMER
// ============================================================

function startCountdown() {
  const container = document.getElementById('lp-countdown');
  if (!container) return;

  // Target: end of this weekend
  const now = new Date();
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilSunday);
  target.setHours(23, 59, 59, 0);

  function update() {
    const diff = target - new Date();
    if (diff <= 0) {
      container.innerHTML = '<span style="color:rgba(255,255,255,0.7);font-size:0.9rem;">Flash sale đã kết thúc</span>';
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    container.innerHTML = `
      <div class="lp-countdown-item"><span class="lp-countdown-num">${String(h).padStart(2,'0')}</span><span class="lp-countdown-label">Giờ</span></div>
      <div class="lp-countdown-item"><span class="lp-countdown-num">${String(m).padStart(2,'0')}</span><span class="lp-countdown-label">Phút</span></div>
      <div class="lp-countdown-item"><span class="lp-countdown-num">${String(s).padStart(2,'0')}</span><span class="lp-countdown-label">Giây</span></div>
    `;
  }
  update();
  setInterval(update, 1000);
}

// ============================================================
// 11. STATS COUNTER ANIMATION
// ============================================================

function randomizeMarketingStats() {
  document.querySelectorAll('.lp-stat-number').forEach(el => {
    const min = parseInt(el.dataset.min, 10);
    const max = parseInt(el.dataset.max, 10);
    if (!isNaN(min) && !isNaN(max) && max >= min) {
      const rand = Math.floor(Math.random() * (max - min + 1)) + min;
      el.dataset.target = rand;
      if (!lpState.statsAnimated) {
        el.textContent = rand.toLocaleString('vi-VN');
      }
    }
  });
}

function setupStatsObserver() {
  randomizeMarketingStats();
  const statsRow = document.querySelector('.lp-stats-row');
  if (!statsRow || !window.IntersectionObserver) {
    animateStats();
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !lpState.statsAnimated) {
      lpState.statsAnimated = true;
      animateStats();
    }
  }, { threshold: 0.25 });
  observer.observe(statsRow);
}

function animateStats() {
  document.querySelectorAll('.lp-stat-number').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    let current = Math.floor(target * 0.45);
    const step = Math.max(1, Math.ceil((target - current) / 40));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('vi-VN');
      if (current >= target) clearInterval(timer);
    }, 22);
  });
}

// ============================================================
// 12. COPY PROMO CODE
// ============================================================

function copyCode(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`📋 Đã sao chép mã: ${code}`, 'success');
    });
  } else {
    // Fallback
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(`📋 Đã sao chép mã: ${code}`, 'success');
  }
}

// ============================================================
// 13. TOAST NOTIFICATIONS
// ============================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('lp-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `lp-toast lp-toast-${type}`;
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
// 14. HELPERS
// ============================================================

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

window.switchRoleQuickly = quickLogin;
window.quickLogin = quickLogin;

