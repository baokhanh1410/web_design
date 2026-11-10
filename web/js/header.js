/**
 * EventHub Unified Global Header Logic
 * Ensures 100% consistent role, search, navigation, and state across all pages.
 */

const HUB_ACCOUNTS = {
  Admin: {
    id: 1,
    name: 'Nguyễn Bảo Khánh',
    email: 'khanh.admin@eventhub.vn',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80'
  },
  Organizer: {
    id: 2,
    name: 'Trần Quang Huy',
    email: 'huy.organizer@eventhub.vn',
    role: 'Organizer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80'
  },
  Staff: {
    id: 3,
    name: 'Chu Đức Duy',
    email: 'duy.staff@eventhub.vn',
    role: 'Staff',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80'
  },
  Guest: {
    id: 4,
    name: 'Khách',
    email: 'khach@eventhub.vn',
    role: 'Guest',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80'
  }
};

function getHubRole() {
  return localStorage.getItem('eventhub_current_role') || 'Admin';
}

function setHubRole(role) {
  if (HUB_ACCOUNTS[role]) {
    localStorage.setItem('eventhub_current_role', role);
  }
}

function renderHubHeader() {
  const currentRole = getHubRole();
  const user = HUB_ACCOUNTS[currentRole] || HUB_ACCOUNTS.Admin;

  // Update elements in header
  const nameEl = document.getElementById('hub-user-name');
  const roleEl = document.getElementById('hub-role-badge');
  const avatarEl = document.getElementById('hub-user-avatar');
  const ddAvatar = document.getElementById('hub-dd-avatar');
  const ddName = document.getElementById('hub-dd-name');
  const ddEmail = document.getElementById('hub-dd-email');

  if (nameEl) nameEl.textContent = user.name;
  if (roleEl) roleEl.textContent = user.role;
  if (avatarEl) avatarEl.src = user.avatar;
  if (ddAvatar) ddAvatar.src = user.avatar;
  if (ddName) ddName.textContent = user.name;
  if (ddEmail) ddEmail.textContent = user.email;

  // Toggle admin/organizer links
  const isAdminOrOrg = (currentRole === 'Admin' || currentRole === 'Organizer');
  const adminLinks = document.querySelectorAll('.hub-role-admin');
  adminLinks.forEach(el => {
    el.style.display = isAdminOrOrg ? '' : 'none';
  });

  // Highlight active nav link
  highlightHubActiveNav();

  // Populate search if on events page with query
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
    // Already on events page: trigger local search if available
    const evInput = document.getElementById('ev-header-keyword');
    if (evInput) {
      evInput.value = query;
      if (typeof window.onFilterChange === 'function') {
        window.onFilterChange();
        return;
      }
    }
    // Fallback: update URL
    const url = new URL(window.location.href);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    window.location.href = url.toString();
  } else {
    // Navigate to events.html
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

  // Synchronize with page-specific functions if present
  if (typeof window.switchRoleQuickly === 'function') {
    window.switchRoleQuickly(role);
  } else if (typeof window.quickLogin === 'function') {
    window.quickLogin(role);
  } else if (typeof window.handleQuickRole === 'function') {
    window.handleQuickRole(role);
  } else if (typeof window.renderUserNav === 'function') {
    window.renderUserNav();
  }
}

function headerLogout() {
  switchHeaderRole('Guest');
  window.location.href = 'landing.html';
}

function toggleHeaderMobileMenu() {
  const drawer = document.getElementById('hub-mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

// Global click listener to close dropdown when clicking outside
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

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHubHeader);
} else {
  renderHubHeader();
}

