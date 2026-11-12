const HUB_ACCOUNTS = {
  Admin: {
    id: 1,
    user_id: 1,
    name: 'Nguyễn Bảo Khánh',
    email: 'khanh.admin@eventhub.vn',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80'
  },
  Organizer: {
    id: 3,
    user_id: 3,
    name: 'Trần Quang Huy',
    email: 'huy.organizer@eventhub.vn',
    role: 'Organizer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80'
  },
  Staff: {
    id: 2,
    user_id: 2,
    name: 'Chu Đức Duy',
    email: 'duy.staff@eventhub.vn',
    role: 'Staff',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80'
  },
  Guest: {
    id: 4,
    user_id: 4,
    guest_id: 1,
    name: 'Nguyễn Văn Khang',
    email: 'khang.guest@gmail.com',
    role: 'Guest',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80'
  }
};

function getHubCurrentUser() {
  try {
    const raw = localStorage.getItem('eventhub_user');
    if (raw) {
      const u = JSON.parse(raw);
      if (u && (u.role || u.name)) return u;
    }
  } catch (e) {}
  return null;
}

function getHubRole() {
  const u = getHubCurrentUser();
  return u ? u.role : null;
}

function setHubUser(userObj) {
  if (userObj) {
    localStorage.setItem('eventhub_user', JSON.stringify(userObj));
    if (userObj.role) {
      localStorage.setItem('eventhub_current_role', userObj.role);
    }
  } else {
    localStorage.removeItem('eventhub_user');
    localStorage.removeItem('eventhub_current_role');
  }
}

function setHubRole(role) {
  if (HUB_ACCOUNTS[role]) {
    localStorage.setItem('eventhub_current_role', role);
    try {
      const existingStr = localStorage.getItem('eventhub_user');
      const existing = existingStr ? JSON.parse(existingStr) : {};
      const updated = Object.assign({}, HUB_ACCOUNTS[role], existing && existing.token ? { token: existing.token } : {});
      updated.role = role;
      localStorage.setItem('eventhub_user', JSON.stringify(updated));
    } catch (e) {}
  }
}

function renderHubHeader() {
  const user = getHubCurrentUser();
  const userBox = document.getElementById('hub-auth-user');
  let guestBox = document.getElementById('hub-auth-guest');

  // Tự động tiêm khối Guest Login nếu chưa có trong DOM
  if (!guestBox && userBox && userBox.parentNode) {
    guestBox = document.createElement('div');
    guestBox.id = 'hub-auth-guest';
    guestBox.className = 'hub-auth-guest';
    guestBox.innerHTML = `
      <button type="button" class="hub-btn-login" onclick="openGlobalAuthModal()">
        🔑 Đăng nhập / Đăng ký
      </button>
    `;
    userBox.parentNode.insertBefore(guestBox, userBox);
  }

  if (!user) {
    // CHƯA ĐĂNG NHẬP: Hiển thị nút đăng nhập, ẩn chip người dùng
    if (guestBox) guestBox.style.display = 'inline-flex';
    if (userBox) userBox.style.display = 'none';
  } else {
    // ĐÃ ĐĂNG NHẬP: Ẩn nút đăng nhập, hiển thị chip người dùng và nạp dữ liệu
    if (guestBox) guestBox.style.display = 'none';
    if (userBox) userBox.style.display = 'inline-block';

    const nameEl = document.getElementById('hub-user-name');
    const roleEl = document.getElementById('hub-role-badge');
    const avatarEl = document.getElementById('hub-user-avatar');
    const ddAvatar = document.getElementById('hub-dd-avatar');
    const ddName = document.getElementById('hub-dd-name');
    const ddEmail = document.getElementById('hub-dd-email');

    if (nameEl) nameEl.textContent = user.name || 'Người dùng';
    if (roleEl) roleEl.textContent = user.role || 'Guest';
    if (avatarEl) avatarEl.src = user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80';
    if (ddAvatar) ddAvatar.src = user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80';
    if (ddName) ddName.textContent = user.name || 'Người dùng';
    if (ddEmail) ddEmail.textContent = user.email || 'user@eventhub.vn';

    // Ẩn/hiện liên kết cho vai trò Admin và Organizer
    const isAdminOrOrg = (user.role === 'Admin' || user.role === 'Organizer');
    const adminLinks = document.querySelectorAll('.hub-role-admin');
    adminLinks.forEach(el => {
      el.style.display = isAdminOrOrg ? '' : 'none';
    });
  }

  // Đánh dấu liên kết điều hướng đang chọn
  highlightHubActiveNav();

  // Nạp từ khóa vào ô tìm kiếm nếu đang ở trang sự kiện
  initHubSearch();
}

function highlightHubActiveNav() {
  const path = window.location.pathname;
  const hash = window.location.hash;
  const navLinks = document.querySelectorAll('.hub-nav-link');

  navLinks.forEach(link => link.classList.remove('active'));

  if (path.includes('landing.html') || path === '/' || path.endsWith('/web/')) {
    const homeLink = document.querySelector('.hub-nav-link[data-nav="home"]');
    if (homeLink) homeLink.classList.add('active');
  } else if (path.includes('events.html')) {
    const evLink = document.querySelector('.hub-nav-link[data-nav="events"]');
    if (evLink) evLink.classList.add('active');
  } else if (path.includes('profile.html')) {
    const prLink = document.querySelector('.hub-nav-link[data-nav="profile"]');
    if (prLink) prLink.classList.add('active');
  } else if (path.includes('index.html')) {
    if (hash === '#admin') {
      const adminLink = document.querySelector('.hub-nav-link[data-nav="admin"]');
      if (adminLink) adminLink.classList.add('active');
    } else if (hash === '#create-event') {
      const createLink = document.querySelector('.hub-nav-link[data-nav="create"]');
      if (createLink) createLink.classList.add('active');
    } else {
      const evLink = document.querySelector('.hub-nav-link[data-nav="events"]');
      if (evLink) evLink.classList.add('active');
    }
  }
}

function initHubSearch() {
  const searchInput = document.getElementById('hub-search-input');
  if (!searchInput) return;

  const params = new URLSearchParams(window.location.search);
  const q = params.get('q') || params.get('keyword');
  if (q && window.location.pathname.includes('events.html')) {
    searchInput.value = q;
    const clearBtn = document.getElementById('hub-search-clear');
    if (clearBtn) clearBtn.classList.add('visible');
  }

  searchInput.addEventListener('input', function() {
    const clearBtn = document.getElementById('hub-search-clear');
    if (clearBtn) {
      clearBtn.classList.toggle('visible', this.value.length > 0);
    }
  });
}

function clearHeaderSearch() {
  const input = document.getElementById('hub-search-input');
  if (input) {
    input.value = '';
    input.focus();
    const clearBtn = document.getElementById('hub-search-clear');
    if (clearBtn) clearBtn.classList.remove('visible');
  }
}

function handleHeaderSearchSubmit(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('hub-search-input') || document.getElementById('hub-mobile-search-input');
  const query = input ? input.value.trim() : '';

  if (window.location.pathname.includes('events.html')) {
    // Đang ở trang sự kiện: kích hoạt tìm kiếm cục bộ
    const evInput = document.getElementById('ev-header-keyword');
    if (evInput) {
      evInput.value = query;
      if (typeof window.onFilterChange === 'function') {
        window.onFilterChange();
        return;
      }
    }
    // Cập nhật URL tham số tìm kiếm
    const url = new URL(window.location.href);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    window.location.href = url.toString();
  } else {
    // Chuyển sang trang sự kiện
    window.location.href = 'events.html' + (query ? ('?q=' + encodeURIComponent(query)) : '');
  }
}

function toggleHeaderDropdown(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById('hub-user-dropdown');
  const chip = document.getElementById('hub-user-chip');
  if (!dropdown) return;

  const isOpen = dropdown.style.display === 'block';
  dropdown.style.display = isOpen ? 'none' : 'block';
  if (chip) chip.setAttribute('aria-expanded', !isOpen);
}

function switchHeaderRole(role) {
  setHubRole(role);
  renderHubHeader();

  const dropdown = document.getElementById('hub-user-dropdown');
  if (dropdown) dropdown.style.display = 'none';

  closeGlobalAuthModal();
  if (HUB_ACCOUNTS[role]) {
    showHubToast(`⚡ Đã chuyển sang vai trò: ${HUB_ACCOUNTS[role].name} (${role})`, 'success');
  }

  // Đồng bộ với hàm của từng trang
  if (typeof window.switchRoleQuickly === 'function') {
    window.switchRoleQuickly(role);
  } else if (typeof window.quickLogin === 'function') {
    window.quickLogin(role);
  } else if (typeof window.handleQuickRole === 'function') {
    window.handleQuickRole(role);
  } else if (typeof window.renderUserNav === 'function') {
    window.renderUserNav();
  }

  // Tự động tiếp tục luồng đặt vé nếu trước đó bị chặn
  checkResumePendingBooking();
}

function headerLogout() {
  setHubUser(null);
  renderHubHeader();

  const dropdown = document.getElementById('hub-user-dropdown');
  if (dropdown) dropdown.style.display = 'none';

  showHubToast('👋 Bạn đã đăng xuất thành công.');

  // Đồng bộ với các trang có render riêng
  if (typeof window.renderUserNav === 'function') {
    window.renderUserNav();
  }

  // Nếu đang ở các trang yêu cầu đăng nhập (profile, checkout), chuyển về landing
  const path = window.location.pathname;
  if (path.includes('profile.html') || path.includes('checkout.html')) {
    setTimeout(function() {
      window.location.href = 'landing.html';
    }, 600);
  }
}


function ensureGlobalAuthModal() {
  let modal = document.getElementById('hub-global-auth-modal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'hub-global-auth-modal';
  modal.className = 'hub-modal-backdrop';
  modal.innerHTML = `
    <div class="hub-modal-card" role="dialog" aria-modal="true" aria-labelledby="hub-auth-title">
      <button type="button" class="hub-modal-close" onclick="closeGlobalAuthModal()" aria-label="Đóng">&times;</button>
      <div class="hub-modal-body">
        <h3 class="hub-modal-title" id="hub-auth-title">Đăng Nhập EventHub</h3>
        <p class="hub-modal-desc">Đăng nhập tài khoản để đặt vé, nhận E-Ticket và quét mã check-in.</p>

        <div class="hub-auth-tabs">
          <button type="button" class="hub-auth-tab active" id="hub-tab-login" onclick="switchGlobalAuthTab('login')">Đăng nhập</button>
          <button type="button" class="hub-auth-tab" id="hub-tab-register" onclick="switchGlobalAuthTab('register')">Đăng ký mới</button>
        </div>

        <form id="hub-auth-form" onsubmit="handleGlobalAuthSubmit(event)">
          <div class="hub-form-group">
            <label class="hub-form-label" for="hub-input-user">Tên đăng nhập hoặc Email</label>
            <input type="text" id="hub-input-user" class="hub-form-input" placeholder="admin, guest01, hoặc email..." required value="guest01">
          </div>
          <div class="hub-form-group">
            <label class="hub-form-label" for="hub-input-pass">Mật khẩu</label>
            <input type="password" id="hub-input-pass" class="hub-form-input" placeholder="Nhập mật khẩu..." required value="guest123">
          </div>
          <button type="submit" class="hub-btn-submit" id="hub-btn-auth-submit">Đăng Nhập Ngay</button>
        </form>

        <div class="hub-quick-roles">
          <span class="hub-quick-roles-title">⚡ Đăng nhập nhanh 1-Click (Demo vai trò):</span>
          <div class="hub-quick-grid">
            <button type="button" class="hub-quick-btn" onclick="switchHeaderRole('Admin')">👑 Admin</button>
            <button type="button" class="hub-quick-btn" onclick="switchHeaderRole('Organizer')">🎪 Ban tổ chức</button>
            <button type="button" class="hub-quick-btn" onclick="switchHeaderRole('Staff')">💼 Nhân viên</button>
            <button type="button" class="hub-quick-btn" onclick="switchHeaderRole('Guest')">👤 Khách hàng</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeGlobalAuthModal();
  });

  return modal;
}

function openGlobalAuthModal() {
  const modal = ensureGlobalAuthModal();
  modal.classList.add('open');
}

function closeGlobalAuthModal() {
  const modal = document.getElementById('hub-global-auth-modal');
  if (modal) modal.classList.remove('open');
}

function switchGlobalAuthTab(tab) {
  const tabLogin = document.getElementById('hub-tab-login');
  const tabReg = document.getElementById('hub-tab-register');
  const btnSubmit = document.getElementById('hub-btn-auth-submit');
  const title = document.getElementById('hub-auth-title');

  if (tab === 'login') {
    if (tabLogin) tabLogin.classList.add('active');
    if (tabReg) tabReg.classList.remove('active');
    if (btnSubmit) btnSubmit.textContent = 'Đăng Nhập Ngay';
    if (title) title.textContent = 'Đăng Nhập EventHub';
  } else {
    if (tabLogin) tabLogin.classList.remove('active');
    if (tabReg) tabReg.classList.add('active');
    if (btnSubmit) btnSubmit.textContent = 'Tạo Tài Khoản Mới';
    if (title) title.textContent = 'Đăng Ký Tài Khoản';
  }
}

async function handleGlobalAuthSubmit(e) {
  e.preventDefault();
  const userInput = document.getElementById('hub-input-user').value.trim();
  const passInput = document.getElementById('hub-input-pass').value.trim();
  const isRegister = document.getElementById('hub-tab-register') && document.getElementById('hub-tab-register').classList.contains('active');

  const apiHost = window.location.hostname || 'localhost';
  const endpoint = isRegister ? `http://${apiHost}:8000/api/auth/register` : `http://${apiHost}:8000/api/auth/login`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userInput, password: passInput })
    });

    if (res.ok) {
      const data = await res.json();
      const role = data.role || (userInput.toLowerCase().includes('admin') ? 'Admin' : 'Guest');
      const baseAccount = HUB_ACCOUNTS[role] || HUB_ACCOUNTS.Guest;
      const user = Object.assign({}, baseAccount, {
        id: data.user_id || baseAccount.id,
        user_id: data.user_id || baseAccount.user_id,
        guest_id: data.guest_id || baseAccount.guest_id,
        name: data.full_name || baseAccount.name,
        role: role,
        token: data.access_token
      });
      setHubUser(user);
      renderHubHeader();
      closeGlobalAuthModal();
      showHubToast(`🎉 ${isRegister ? 'Đăng ký' : 'Đăng nhập'} thành công: ${user.name} (${user.role})`, 'success');
      checkResumePendingBooking();
    } else {
      // Fallback khớp theo mock accounts nếu DB offline hoặc khác hash
      const lower = userInput.toLowerCase();
      let matchedRole = 'Guest';
      if (lower.includes('admin')) matchedRole = 'Admin';
      else if (lower.includes('org')) matchedRole = 'Organizer';
      else if (lower.includes('staff')) matchedRole = 'Staff';
      switchHeaderRole(matchedRole);
    }
  } catch (err) {
    switchHeaderRole('Guest');
  }
}

function checkResumePendingBooking() {
  const pending = sessionStorage.getItem('eventhub_pending_booking');
  if (pending) {
    sessionStorage.removeItem('eventhub_pending_booking');
    showHubToast('🎉 Xác thực thành công! Đang chuyển đến trang đặt vé...', 'success');
    setTimeout(() => {
      window.location.href = 'checkout.html';
    }, 700);
  }
}

function showHubToast(msg, type = 'info') {
  let toastContainer = document.getElementById('hub-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'hub-toast-container';
    toastContainer.style.cssText = 'position:fixed; bottom:24px; right:24px; z-index:10000; display:flex; flex-direction:column; gap:8px; pointer-events:none;';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bg = type === 'success' ? '#10B981' : (type === 'warning' ? '#F59E0B' : '#0194F3');
  toast.style.cssText = `background:${bg}; color:#FFF; padding:12px 20px; border-radius:10px; font-size:13.5px; font-weight:600; box-shadow:0 8px 24px rgba(0,0,0,0.18); display:flex; align-items:center; gap:8px; pointer-events:auto; animation:hubToastSlideIn 0.25s ease;`;
  toast.textContent = msg;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function toggleHeaderMobileMenu() {
  const drawer = document.getElementById('hub-mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

// Đóng menu thả xuống khi nhấp chuột ra ngoài
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('hub-user-dropdown');
  const chip = document.getElementById('hub-user-chip');
  if (dropdown && dropdown.style.display === 'block') {
    if (!dropdown.contains(e.target) && (!chip || !chip.contains(e.target))) {
      dropdown.style.display = 'none';
      if (chip) chip.setAttribute('aria-expanded', 'false');
    }
  }
});

// Tự động khởi chạy khi tải xong trang
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHubHeader);
} else {
  renderHubHeader();
}

