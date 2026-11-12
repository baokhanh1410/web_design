/* =============================================================
   checkout.js — EventHub Checkout Page
   Handles: data loading, payment methods, card preview,
            vouchers, form validation, timer, confetti, success
   ============================================================= */

'use strict';

// ─── State ────────────────────────────────────────────────────
var checkoutData = null;      // loaded from sessionStorage
var voucherDiscount = 0;      // discount amount in VND
var appliedVoucher = null;    // voucher code string
var holdTimer = null;         // setInterval ref
var holdTotal = 600;          // 10 minutes in seconds
var holdLeft = 600;
var selectedWallet = null;
var confettiAnim = null;

// Voucher definitions
var VOUCHERS = {
  WELCOME20:    { type: 'pct',  val: 20 },
  WEEKEND50K:   { type: 'flat', val: 50000 },
  GROUP3PLUS1:  { type: 'pct',  val: 10 }
};

// Mock fallback data (shown when sessionStorage is empty)
var MOCK_DATA = {
  eventId: 1,
  eventName: 'Lễ Hội Âm Nhạc Gió Mùa — Monsoon Music Festival 2026',
  eventDate: '2026-11-20T18:30:00.000Z',
  eventVenue: 'Hoàng Thành Thăng Long, Hà Nội',
  eventImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
  items: [
    { ticketId: 'ga', ticketName: 'Vé GA — General Admission', quantity: 2, price: 450000, lineTotal: 900000 }
  ],
  subtotal: 900000,
  fee: 0,
  grand: 900000,
  createdAt: new Date().toISOString()
};

// ─── Helpers ──────────────────────────────────────────────────

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency', currency: 'VND',
    maximumFractionDigits: 0
  }).format(amount);
}

function formatDate(isoString) {
  var d = new Date(isoString);
  var days = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
  var pad = function(n) { return n < 10 ? '0' + n : '' + n; };
  return days[d.getDay()] + ', ' +
    pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() +
    ' lúc ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
}

function showToast(msg, type) {
  var container = document.getElementById('ck-toast-container');
  if (!container) return;
  var toast = document.createElement('div');
  toast.className = 'ck-toast ck-toast-' + (type || 'info');
  toast.textContent = msg;
  container.appendChild(toast);
  // animate in
  requestAnimationFrame(function() {
    toast.classList.add('show');
  });
  setTimeout(function() {
    toast.classList.remove('show');
    setTimeout(function() { toast.remove(); }, 350);
  }, 3200);
}

function copyText(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast('✅ Đã sao chép ' + (label || '') + ' vào clipboard', 'success');
    });
  } else {
    // fallback
    var el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    el.remove();
    showToast('✅ Đã sao chép ' + (label || ''), 'success');
  }
}

function copyTransferRef() {
  var el = document.getElementById('ck-transfer-ref');
  if (el) copyText(el.textContent.trim(), 'nội dung chuyển khoản');
}

// ─── Load Data ────────────────────────────────────────────────

function loadCheckoutData() {
  try {
    var raw = sessionStorage.getItem('eventhub_checkout');
    checkoutData = raw ? JSON.parse(raw) : MOCK_DATA;
  } catch (e) {
    checkoutData = MOCK_DATA;
  }

  renderEventCard();
  renderTicketLines();
  updatePriceSummary();
  generateTransferRef();
  renderQRCode(document.getElementById('ck-qr-art'), checkoutData.eventId || 1, 'payment');
}

function loadUser() {
  try {
    var raw = localStorage.getItem('eventhub_user');
    if (!raw) return;
    var user = JSON.parse(raw);
    if (user.name) document.getElementById('f-name').value = user.name;
    if (user.email) document.getElementById('f-email').value = user.email;
    if (user.phone) document.getElementById('f-phone').value = user.phone;
  } catch (e) { /* ignore */ }
}

// ─── Render ───────────────────────────────────────────────────

function renderEventCard() {
  var el = document.getElementById('ck-event-card');
  if (!el) return;
  var d = checkoutData;
  var dateStr = d.eventDate ? formatDate(d.eventDate) : '—';
  el.innerHTML =
    '<div class="ck-ec-row">' +
      '<img class="ck-ec-thumb" src="' + (d.eventImage || '') + '" ' +
        'alt="' + d.eventName + '" ' +
        'onerror="this.src=\'https://via.placeholder.com/80x60?text=Event\'">' +
      '<div class="ck-ec-info">' +
        '<div class="ck-ec-name">' + d.eventName + '</div>' +
        '<div class="ck-ec-meta">📅 ' + dateStr + '</div>' +
        '<div class="ck-ec-meta">📍 ' + d.eventVenue + '</div>' +
      '</div>' +
    '</div>';
}

function renderTicketLines() {
  var el = document.getElementById('ck-ticket-lines');
  if (!el || !checkoutData.items) return;
  el.innerHTML = checkoutData.items.map(function(item) {
    return '<div class="ck-ticket-line">' +
      '<div class="ck-tl-name">🎫 ' + item.ticketName + ' × ' + item.quantity + '</div>' +
      '<div class="ck-tl-price">' + formatVND(item.lineTotal) + '</div>' +
    '</div>';
  }).join('');
}

function updatePriceSummary() {
  if (!checkoutData) return;
  var subtotal = checkoutData.subtotal || 0;
  var grand = Math.max(0, subtotal - voucherDiscount);

  var elSub = document.getElementById('sum-subtotal');
  var elGrand = document.getElementById('sum-grand');
  var elMobile = document.getElementById('ck-mobile-grand');
  var elTransAmt = document.getElementById('ck-transfer-amount');

  if (elSub) elSub.textContent = formatVND(subtotal);
  if (elGrand) elGrand.textContent = formatVND(grand);
  if (elMobile) elMobile.textContent = formatVND(grand);
  if (elTransAmt) elTransAmt.textContent = formatVND(grand);
}

function generateTransferRef() {
  var num = Math.floor(10000000 + Math.random() * 90000000);
  var ref = 'EH-' + num;
  var el = document.getElementById('ck-transfer-ref');
  if (el) el.textContent = ref;
}

// ─── QR Code (SVG pixel grid — no external lib) ───────────────

function renderQRCode(container, seed, variant) {
  if (!container) return;
  var size = 21;
  // deterministic pseudo-random based on seed
  var s = seed || 42;
  function next() {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 4294967296;
  }

  // Build a size×size matrix
  var grid = [];
  var i, j;
  for (i = 0; i < size; i++) {
    grid[i] = [];
    for (j = 0; j < size; j++) {
      grid[i][j] = next() > 0.5 ? 1 : 0;
    }
  }

  // Overlay finder patterns (top-left, top-right, bottom-left)
  function finder(r, c) {
    // 7×7 finder
    for (var dr = 0; dr < 7; dr++) {
      for (var dc = 0; dc < 7; dc++) {
        var row = r + dr, col = c + dc;
        if (row >= 0 && row < size && col >= 0 && col < size) {
          var border = dr === 0 || dr === 6 || dc === 0 || dc === 6;
          var inner = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
          grid[row][col] = (border || inner) ? 1 : 0;
        }
      }
    }
  }
  finder(0, 0);
  finder(0, size - 7);
  finder(size - 7, 0);

  // Timing pattern
  for (var t = 8; t < size - 8; t++) {
    grid[6][t] = t % 2 === 0 ? 1 : 0;
    grid[t][6] = t % 2 === 0 ? 1 : 0;
  }

  var cellSize = 6;
  var svgSize = size * cellSize;
  var rects = '';
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (grid[i][j] === 1) {
        rects += '<rect x="' + (j * cellSize) + '" y="' + (i * cellSize) + '" ' +
          'width="' + cellSize + '" height="' + cellSize + '" fill="#1C2430"/>';
      }
    }
  }

  container.innerHTML =
    '<svg width="' + svgSize + '" height="' + svgSize + '" ' +
      'viewBox="0 0 ' + svgSize + ' ' + svgSize + '" ' +
      'xmlns="http://www.w3.org/2000/svg" style="display:block;">' +
      '<rect width="' + svgSize + '" height="' + svgSize + '" fill="white"/>' +
      rects +
    '</svg>';
}

// ─── Hold Timer ───────────────────────────────────────────────

function startHoldTimer(seconds) {
  holdTotal = seconds;
  holdLeft = seconds;
  updateTimerDisplay();
  holdTimer = setInterval(function() {
    holdLeft--;
    updateTimerDisplay();
    if (holdLeft <= 0) {
      clearInterval(holdTimer);
      showExpired();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var mins = Math.floor(holdLeft / 60);
  var secs = holdLeft % 60;
  var pad = function(n) { return n < 10 ? '0' + n : '' + n; };
  var valEl = document.getElementById('ck-timer-val');
  var ringEl = document.getElementById('ck-timer-ring');
  if (valEl) {
    valEl.textContent = pad(mins) + ':' + pad(secs);
    if (holdLeft <= 60) valEl.style.color = '#FF5E1F';
  }
  if (ringEl) {
    // 113.1 = circumference of r=18 circle
    var offset = 113.1 * (1 - holdLeft / holdTotal);
    ringEl.setAttribute('stroke-dashoffset', offset.toFixed(2));
    if (holdLeft <= 60) ringEl.setAttribute('stroke', '#FF5E1F');
  }
}

function showExpired() {
  var el = document.getElementById('ck-expired-overlay');
  if (el) {
    el.style.display = 'flex';
    el.setAttribute('aria-hidden', 'false');
  }
}

// ─── Payment Method Selection ─────────────────────────────────

function selectPayment(method) {
  var methods = ['vietqr', 'ewallet', 'card'];
  methods.forEach(function(m) {
    var item = document.getElementById('pm-' + m);
    var body = document.getElementById('body-' + m);
    if (m === method) {
      if (item) item.classList.add('selected');
      if (body) body.classList.add('open');
    } else {
      if (item) item.classList.remove('selected');
      if (body) body.classList.remove('open');
    }
  });
}

function selectWallet(btn, walletId) {
  // Deselect all wallet buttons
  var allBtns = document.querySelectorAll('.ck-wallet-btn');
  allBtns.forEach(function(b) { b.classList.remove('selected'); });
  btn.classList.add('selected');
  selectedWallet = walletId;

  var redirect = document.getElementById('ck-wallet-redirect');
  var icon = document.getElementById('ck-redirect-icon');
  var name = document.getElementById('ck-wallet-name');

  var wallets = {
    momo:     { icon: '💜', name: 'MoMo' },
    zalopay:  { icon: '💙', name: 'ZaloPay' },
    applepay: { icon: '🍎', name: 'Apple Pay' }
  };
  var w = wallets[walletId] || { icon: '💳', name: walletId };

  if (icon) icon.textContent = w.icon;
  if (name) name.textContent = w.name;
  if (redirect) redirect.style.display = 'flex';
}

// ─── Card Live Preview ────────────────────────────────────────

function formatCardNum(input) {
  var v = input.value.replace(/\D/g, '').slice(0, 16);
  // Insert spaces every 4 digits
  input.value = v.replace(/(.{4})/g, '$1 ').trim();

  // Detect network
  var logo = document.getElementById('prev-logo');
  var num = document.getElementById('prev-num');
  if (num) {
    var display = v.padEnd(16, '•').replace(/(.{4})/g, '$1 ').trim();
    num.textContent = display;
  }
  if (logo) {
    if (/^4/.test(v)) {
      logo.textContent = '💙 VISA';
    } else if (/^5[1-5]/.test(v) || /^2[2-7]/.test(v)) {
      logo.textContent = '🔴 MC';
    } else if (/^35/.test(v)) {
      logo.textContent = '🔷 JCB';
    } else {
      logo.textContent = '💳';
    }
  }
}

function formatCardExp(input) {
  var v = input.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) {
    input.value = v.slice(0, 2) + '/' + v.slice(2);
  } else {
    input.value = v;
  }
  syncCardPreview();
}

function syncCardPreview() {
  var nameEl = document.getElementById('prev-name');
  var expEl = document.getElementById('prev-exp');
  var cardName = document.getElementById('card-name');
  var cardExp = document.getElementById('card-exp');

  if (nameEl && cardName) {
    nameEl.textContent = cardName.value.toUpperCase() || 'YOUR NAME';
  }
  if (expEl && cardExp) {
    expEl.textContent = cardExp.value || 'MM/YY';
  }
}

// ─── Voucher ──────────────────────────────────────────────────

function fillVoucher(code) {
  var el = document.getElementById('voucher-input');
  if (el) {
    el.value = code;
    el.focus();
  }
}

function applyVoucher() {
  var input = document.getElementById('voucher-input');
  var resultEl = document.getElementById('voucher-result');
  if (!input || !resultEl) return;

  var code = input.value.trim().toUpperCase();
  if (!code) {
    resultEl.innerHTML = '<span class="ck-voucher-err">⚠️ Vui lòng nhập mã voucher</span>';
    return;
  }

  var voucher = VOUCHERS[code];
  if (!voucher) {
    resultEl.innerHTML = '<span class="ck-voucher-err">❌ Mã voucher không hợp lệ hoặc đã hết hạn</span>';
    voucherDiscount = 0;
    appliedVoucher = null;
    hideDicountRow();
    updatePriceSummary();
    return;
  }

  var subtotal = checkoutData ? checkoutData.subtotal : 0;
  if (voucher.type === 'pct') {
    voucherDiscount = Math.round(subtotal * voucher.val / 100);
    resultEl.innerHTML = '<span class="ck-voucher-ok">✅ Áp dụng thành công! Giảm ' + voucher.val + '% = ' + formatVND(voucherDiscount) + '</span>';
  } else {
    voucherDiscount = Math.min(voucher.val, subtotal);
    resultEl.innerHTML = '<span class="ck-voucher-ok">✅ Áp dụng thành công! Giảm ' + formatVND(voucherDiscount) + '</span>';
  }
  appliedVoucher = code;

  // Update discount row
  var discRow = document.getElementById('sum-discount-row');
  var discEl = document.getElementById('sum-discount');
  if (discRow) discRow.style.display = 'flex';
  if (discEl) discEl.textContent = '- ' + formatVND(voucherDiscount);

  updatePriceSummary();
}

function hideDicountRow() {
  var discRow = document.getElementById('sum-discount-row');
  if (discRow) discRow.style.display = 'none';
}

// ─── Form Validation ──────────────────────────────────────────

function setFieldState(inputId, errId, msg) {
  var input = document.getElementById(inputId);
  var err = document.getElementById(errId);
  if (!input) return false;
  if (msg) {
    input.classList.add('error');
    input.classList.remove('valid');
    if (err) err.textContent = msg;
    return false;
  } else {
    input.classList.remove('error');
    input.classList.add('valid');
    if (err) err.textContent = '';
    return true;
  }
}

function validateForm() {
  var valid = true;

  // Name
  var name = (document.getElementById('f-name') || {}).value || '';
  if (!setFieldState('f-name', 'err-name', name.trim().length < 2 ? 'Vui lòng nhập họ tên (ít nhất 2 ký tự)' : '')) {
    valid = false;
  }

  // Email
  var email = (document.getElementById('f-email') || {}).value || '';
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  if (!setFieldState('f-email', 'err-email', emailOk ? '' : 'Email không hợp lệ (vd: example@gmail.com)')) {
    valid = false;
  }

  // Phone
  var phone = (document.getElementById('f-phone') || {}).value || '';
  var stripped = phone.replace(/\s/g, '');
  var phoneOk = /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(stripped);
  if (!setFieldState('f-phone', 'err-phone', phoneOk ? '' : 'Số điện thoại Việt Nam không hợp lệ (vd: 0987654321)')) {
    valid = false;
  }

  // Terms
  var terms = document.getElementById('agree-terms');
  var termsErr = document.getElementById('err-terms');
  if (terms && !terms.checked) {
    if (termsErr) termsErr.textContent = 'Bạn phải đồng ý với điều khoản để tiếp tục';
    valid = false;
  } else if (termsErr) {
    termsErr.textContent = '';
  }

  // Card fields (only if card payment selected)
  var payCard = document.getElementById('pay-card');
  if (payCard && payCard.checked) {
    // Card number: 16 digits
    var cardNum = (document.getElementById('card-num') || {}).value || '';
    var cardDigits = cardNum.replace(/\s/g, '');
    if (!setFieldState('card-num', 'err-card-num', cardDigits.length !== 16 ? 'Số thẻ phải đủ 16 chữ số' : '')) {
      valid = false;
    }
    // Card name
    var cardName = (document.getElementById('card-name') || {}).value || '';
    if (!setFieldState('card-name', 'err-card-name', cardName.trim().length < 2 ? 'Vui lòng nhập tên chủ thẻ' : '')) {
      valid = false;
    }
    // Expiry MM/YY and not in the past
    var cardExp = (document.getElementById('card-exp') || {}).value || '';
    var expOk = false;
    if (/^\d{2}\/\d{2}$/.test(cardExp)) {
      var parts = cardExp.split('/');
      var mm = parseInt(parts[0], 10);
      var yy = parseInt(parts[1], 10) + 2000;
      var now = new Date();
      expOk = mm >= 1 && mm <= 12 &&
        (yy > now.getFullYear() || (yy === now.getFullYear() && mm >= now.getMonth() + 1));
    }
    if (!setFieldState('card-exp', 'err-card-exp', expOk ? '' : 'Ngày hết hạn không hợp lệ hoặc đã qua')) {
      valid = false;
    }
    // CVV: 3-4 digits
    var cvv = (document.getElementById('card-cvv') || {}).value || '';
    if (!setFieldState('card-cvv', 'err-card-cvv', /^\d{3,4}$/.test(cvv) ? '' : 'CVV phải là 3-4 chữ số')) {
      valid = false;
    }
  }

  return valid;
}

function onTermsChange() {
  var termsErr = document.getElementById('err-terms');
  if (termsErr) termsErr.textContent = '';
}

// ─── Submit Payment ───────────────────────────────────────────

function submitPayment() {
  if (!validateForm()) {
    showToast('⚠️ Vui lòng kiểm tra lại thông tin', 'error');
    // scroll to first error
    var firstErr = document.querySelector('.ck-input.error, .ck-error:not(:empty)');
    if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  var btn = document.getElementById('ck-pay-btn');
  var mobileBtn = document.querySelector('.ck-mobile-pay-btn .ck-btn-pay');
  var setLoading = function(loading) {
    if (btn) {
      btn.disabled = loading;
      btn.textContent = loading ? '⏳ Đang xử lý...' : '🔒 Thanh toán ngay';
    }
    if (mobileBtn) {
      mobileBtn.disabled = loading;
    }
  };

  setLoading(true);

  setTimeout(function() {
    setLoading(false);
    onPaymentSuccess();
  }, 1500);
}

function onPaymentSuccess() {
  if (holdTimer) clearInterval(holdTimer);

  var d = checkoutData || MOCK_DATA;
  var name = (document.getElementById('f-name') || {}).value || 'Khách hàng';
  var subtotal = d.subtotal || 0;
  var grand = Math.max(0, subtotal - voucherDiscount);

  // Generate booking ID
  var bookingId = 'EVT-BK-' + Date.now();
  var orderId = '#EH-' + Math.floor(100000 + Math.random() * 900000);
  var totalQty = (d.items || []).reduce(function(s, i) { return s + (i.quantity || 0); }, 0);
  var email = (document.getElementById('f-email') || {}).value || '';
  var phone = (document.getElementById('f-phone') || {}).value || '';

  // Build unified booking record
  var booking = {
    bookingId: bookingId,
    booking_id: bookingId,
    orderId: orderId,
    eventId: d.eventId || 1,
    event_id: d.eventId || 1,
    eventName: d.eventName || 'Sự kiện EventHub',
    event_name: d.eventName || 'Sự kiện EventHub',
    eventDate: d.eventDate || new Date().toISOString(),
    event_date: d.eventDate || new Date().toISOString(),
    eventVenue: d.eventVenue || 'Việt Nam',
    venue: d.eventVenue || 'Việt Nam',
    eventImage: d.eventImage || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
    image: d.eventImage || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
    items: d.items || [{ ticketName: 'Vé Tiêu Chuẩn', quantity: 1, price: grand, lineTotal: grand }],
    ticket_count: totalQty || 1,
    ticketCount: totalQty || 1,
    subtotal: subtotal,
    discount: voucherDiscount,
    grand: grand,
    total_price: grand,
    attendee: {
      name: name,
      email: email,
      phone: phone
    },
    attendee_name: name,
    attendee_email: email,
    attendee_phone: phone,
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString(),
    status: 'confirmed',
    is_checked_in: false
  };

  // Persist to localStorage
  try {
    var existing = JSON.parse(localStorage.getItem('eventhub_bookings') || '[]');
    existing.unshift(booking);
    localStorage.setItem('eventhub_bookings', JSON.stringify(existing));
  } catch (e) { /* ignore */ }

  // Sync booking to backend DB if logged in or API is active
  try {
    var userStr = localStorage.getItem('eventhub_user');
    var u = userStr ? JSON.parse(userStr) : null;
    var apiHost = window.location.hostname || 'localhost';
    var headers = { 'Content-Type': 'application/json' };
    if (u && u.token) headers['Authorization'] = 'Bearer ' + u.token;
    var guestParam = (u && u.guest_id) ? ('?guest_id=' + u.guest_id) : '';
    fetch('http://' + apiHost + ':8000/api/bookings' + guestParam, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ event_id: d.eventId || 1 })
    }).then(function (res) {
      if (res.ok) return res.json();
    }).then(function (data) {
      if (data && data.registration_id) {
        booking.bookingId = 'EVT-BK-' + data.registration_id;
        booking.orderId = '#EH-' + String(data.registration_id).padStart(6, '0');
        try {
          var arr = JSON.parse(localStorage.getItem('eventhub_bookings') || '[]');
          if (arr.length > 0 && arr[0].bookingId === bookingId) {
            arr[0].bookingId = booking.bookingId;
            arr[0].orderId = booking.orderId;
            localStorage.setItem('eventhub_bookings', JSON.stringify(arr));
          }
        } catch (e) {}
      }
    }).catch(function () {});
  } catch (e) {}

  // Clear checkout session
  try { sessionStorage.removeItem('eventhub_checkout'); } catch (e) { /* ignore */ }

  // Populate success overlay
  var totalQty = (d.items || []).reduce(function(s, i) { return s + i.quantity; }, 0);
  var tierNames = (d.items || []).map(function(i) { return i.ticketName; }).join(', ');

  setText('ck-order-id', 'Mã đơn hàng: ' + orderId);
  setText('et-event-name', d.eventName);
  setText('et-date', d.eventDate ? formatDate(d.eventDate) : '—');
  setText('et-venue', d.eventVenue);
  setText('et-name', name);
  setText('et-tier', tierNames || '—');
  setText('et-booking-id', bookingId);
  setText('et-qty', totalQty + ' vé');

  // Render QR on e-ticket
  renderQRCode(document.getElementById('et-qr-box'), Date.now() % 9999, 'eticket');

  // Update step 3
  var step3 = document.getElementById('step-3');
  var step2 = document.getElementById('step-2');
  if (step3) { step3.classList.add('active', 'done'); }
  if (step2) { step2.classList.remove('active'); step2.classList.add('done'); }

  // Show overlay
  var overlay = document.getElementById('ck-success-overlay');
  if (overlay) {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }
  window.scrollTo(0, 0);

  // Start confetti
  startConfetti();
}

function setText(id, value) {
  var el = document.getElementById(id);
  if (el) el.textContent = value;
}

// ─── Confetti ─────────────────────────────────────────────────

function startConfetti() {
  var canvas = document.getElementById('ck-confetti');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var colors = ['#0194F3','#FF5E1F','#00A651','#FFD700','#FF69B4','#9B59B6','#1ABC9C'];
  var particles = [];
  var count = 150;

  for (var i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8 + Math.random() * 8,
      h: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2
    });
  }

  var startTime = Date.now();
  var duration = 4000;

  function draw() {
    var elapsed = Date.now() - startTime;
    if (elapsed > duration) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var alpha = elapsed > duration - 800 ? 1 - (elapsed - (duration - 800)) / 800 : 1;
    ctx.globalAlpha = alpha;

    particles.forEach(function(p) {
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();

      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;

      // Reset if off screen
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });

    ctx.globalAlpha = 1;
    confettiAnim = requestAnimationFrame(draw);
  }

  draw();
}

// ─── Navigation ───────────────────────────────────────────────

function restartSession() {
  window.location.href = 'events.html';
}

function goToMyBookings() {
  window.location.href = 'profile.html';
}

// ─── Note character counter ───────────────────────────────────

function initNoteCounter() {
  var note = document.getElementById('f-note');
  var counter = document.getElementById('note-count');
  if (!note || !counter) return;
  note.addEventListener('input', function() {
    counter.textContent = note.value.length;
  });
}

// ─── Init ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  loadCheckoutData();
  loadUser();
  initNoteCounter();
  startHoldTimer(600);

  // Default: show vietqr as selected
  selectPayment('vietqr');
});

