(function () {
  /* ── Dark mode CSS ───────────────────────────────────────── */
  const darkStyle = document.createElement('style');
  darkStyle.textContent = `
    html[data-theme="dark"] {
      --blue: #00FF88;
      --blue-light: #0D2318;
      --blue-hover: #00CC6D;
      --green: #00FF88;
      --red: #ff4d5e;
      --text-primary: #E6EDF3;
      --text-secondary: #8A9099;
      --text-tertiary: #4A5060;
      --border: #2D333B;
      --bg-1: #13161B;
      --bg-2: #0D0F12;
      --bg-4: #1C2128;
      --shadow-card: 0 4px 16px 0 rgba(0,0,0,0.5);
    }

    html[data-theme="dark"] body {
      background: #0D0F12;
      color: #E6EDF3;
    }

    /* Cards */
    html[data-theme="dark"] .stat-card,
    html[data-theme="dark"] .market-card,
    html[data-theme="dark"] .news-card,
    html[data-theme="dark"] .copy-card,
    html[data-theme="dark"] .clubbleu-wrap,
    html[data-theme="dark"] .ct-banner,
    html[data-theme="dark"] .stat-card--clubbleu { background: #161B22; }

    html[data-theme="dark"] .trading-inner { background: #1C2128 !important; }

    /* Topbar */
    html[data-theme="dark"] .topbar {
      background: rgba(13,15,18,0.8);
      border-bottom-color: #2D333B;
    }
    html[data-theme="dark"] .topbar-dropdown { background: #161B22; box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
    html[data-theme="dark"] .topbar-dd-item:hover { background: #1C2128; }
    html[data-theme="dark"] .topbar-dd-item--active { background: #0D2318; }
    html[data-theme="dark"] .topbar-dd-item--active:hover { background: #0F2B1E; }
    html[data-theme="dark"] .topbar-dd-name,
    html[data-theme="dark"] .topbar-dd-label { color: #E6EDF3; }
    html[data-theme="dark"] .topbar-dd-divider { background: #2D333B; }
    html[data-theme="dark"] .topbar-login-btn { color: #E6EDF3; }

    /* Sidebar */
    html[data-theme="dark"] .sidebar { background: #161B22; border-right-color: #2D333B; }
    html[data-theme="dark"] .sidebar-logo { border-bottom-color: #2D333B; }
    html[data-theme="dark"] .logo-wrap { color: #ffffff; }
    html[data-theme="dark"] .logo-wrap .logo-light { display: none; }
    html[data-theme="dark"] .logo-wrap .logo-dark  { display: block; }
    html[data-theme="dark"] .nav-item { background: #161B22 !important; color: #8A9099; }
    html[data-theme="dark"] .nav-item:not(.active) .nav-icon .icon-def { display: none; }
    html[data-theme="dark"] .nav-item:not(.active) .nav-icon .icon-dark { display: block; }
    html[data-theme="dark"] .nav-item:hover,
    html[data-theme="dark"] .nav-item:active { background: #1C2128 !important; color: #E6EDF3; }
    html[data-theme="dark"] .nav-item.active,
    html[data-theme="dark"] .nav-item.active:active { background: #0D2318 !important; color: #E6EDF3; }
    html[data-theme="dark"] .submenu-item { color: #8A9099; }
    html[data-theme="dark"] .submenu-item:hover { background: #1C2128; color: #E6EDF3; }
    html[data-theme="dark"] .submenu-item.active { color: #E6EDF3; }
    html[data-theme="dark"] .flyout-item { background: #161B22; color: #8A9099; }
    html[data-theme="dark"] .flyout-item:hover { background: #1C2128; color: #E6EDF3; }
    html[data-theme="dark"] .flyout-item.active { background: #0D2318; color: #E6EDF3; }
    html[data-theme="dark"] .nav-flyout { background: rgba(22,27,34,0.97); border-color: #2D333B; }
    html[data-theme="dark"] .flyout-title { color: #E6EDF3; }
    html[data-theme="dark"] #sidebar-tooltip { background: #2D333B; color: #E6EDF3; box-shadow: 0 2px 12px rgba(0,0,0,0.4); }
    html[data-theme="dark"] .mobile-nav-overlay { background: rgba(0,0,0,0.7); }

    /* KYC banner */
    html[data-theme="dark"] .kyc-banner { background: #1C2128; }
    html[data-theme="dark"] .kyc-verify-btn { border-color: #00FF88; color: #E6EDF3; }
    html[data-theme="dark"] .kyc-dot.off { background: #3D4450; }
    html[data-theme="dark"] .kyc-seg.empty { background: #2D333B; }
    html[data-theme="dark"] .kyc-seg.half { background: linear-gradient(to right, #00FF88 55%, #2D333B 55%); }
    html[data-theme="dark"] .kyc-labels span { color: #E6EDF3; }
    html[data-theme="dark"] .kyc-labels span.dim { color: #4A5060; }

    /* Market table */
    html[data-theme="dark"] .market-tab:not(.active) { color: #8A9099; }
    html[data-theme="dark"] .market-tab.active { color: #E6EDF3; }
    html[data-theme="dark"] .market-table th { color: #8A9099; border-bottom-color: #2D333B; }
    html[data-theme="dark"] .market-table tr { border-bottom-color: #2D333B; }
    html[data-theme="dark"] .market-table tbody tr:hover { background: #1C2128 !important; }
    html[data-theme="dark"] .sym-name { color: #E6EDF3; }
    html[data-theme="dark"] .sym-desc { color: #8A9099; }

    /* Inputs & forms */
    html[data-theme="dark"] input,
    html[data-theme="dark"] select,
    html[data-theme="dark"] textarea {
      background: #1C2128;
      color: #E6EDF3;
      border-color: #2D333B;
    }
    html[data-theme="dark"] input::placeholder { color: #4A5060; }

    /* ── Account page ───────────────────────────────────────── */
    html[data-theme="dark"] .account-card { background: #161B22; }
    html[data-theme="dark"] .card-balance { background: #0D0F12; }
    html[data-theme="dark"] .badge-account-id { color: #E6EDF3; }
    html[data-theme="dark"] .filter-select { background: #1C2128; color: #E6EDF3; border-color: #2D333B; }
    html[data-theme="dark"] .filter-select:hover { border-color: #4A5060; }
    html[data-theme="dark"] .view-btn.active { background: #2D333B; color: #E6EDF3; }
    html[data-theme="dark"] .view-btn { color: #8A9099; }

    /* ── Funds page ─────────────────────────────────────────── */
    html[data-theme="dark"] .funds-card { background: #161B22; }
    html[data-theme="dark"] .funds-tab { color: #8A9099; }
    html[data-theme="dark"] .funds-tab:hover { color: #E6EDF3; }
    html[data-theme="dark"] .funds-tab.active { color: #E6EDF3; border-bottom-color: #00FF88; }
    html[data-theme="dark"] .field-select { background: #1C2128; color: #E6EDF3; border-color: #2D333B; }
    html[data-theme="dark"] .field-select:hover { border-color: #4A5060; }
    html[data-theme="dark"] .field-label { color: #8A9099; }
    html[data-theme="dark"] .amount-input { background: #1C2128; color: #E6EDF3; border-color: #2D333B; }
    html[data-theme="dark"] .amount-input:focus { border-color: #00FF88; }
    html[data-theme="dark"] .amount-currency { color: #8A9099; }
    html[data-theme="dark"] .step-icon { background: #1C2128; border-color: #2D333B; }
    html[data-theme="dark"] .step-connector { background: #2D333B; }

    /* ── Profile page ───────────────────────────────────────── */
    html[data-theme="dark"] .profile-user-card { background: #161B22; }
    html[data-theme="dark"] .profile-tab { color: #8A9099; }
    html[data-theme="dark"] .profile-tab:hover { color: #E6EDF3; }
    html[data-theme="dark"] .profile-tab.active { color: #E6EDF3; border-bottom-color: #00FF88; }
    html[data-theme="dark"] .verify-card { background: #161B22; }
    html[data-theme="dark"] .verify-status-icon.grey { background: #2D333B; }
    html[data-theme="dark"] .security-alert { background: #1C2128; border-color: #2D333B; }
    html[data-theme="dark"] .security-card { background: #161B22; }
    html[data-theme="dark"] .security-card-value { color: #E6EDF3; }
    html[data-theme="dark"] .toggle-wrap input:not(:checked) ~ .toggle-track { background: #3D4450; }

    /* ── Downloads page ─────────────────────────────────────── */
    html[data-theme="dark"] .dl-card { background: #161B22; }
    html[data-theme="dark"] .dl-platform:hover { background: #1C2128; }
    html[data-theme="dark"] .dl-icon-circle.windows { background: #1C2B3A; }
    html[data-theme="dark"] .dl-icon-circle.macos   { background: #2D333B; }
    html[data-theme="dark"] .dl-icon-circle.android { background: #0D2318; }

    /* ── Support page ───────────────────────────────────────── */
    html[data-theme="dark"] .tickets-table-wrap { background: #161B22; }
    html[data-theme="dark"] .tickets-table th { color: #8A9099; border-bottom-color: #2D333B; }
    html[data-theme="dark"] .tickets-table thead tr { border-bottom-color: #2D333B; }
    html[data-theme="dark"] .tickets-table td { border-bottom-color: #2D333B; color: #E6EDF3; }
    html[data-theme="dark"] .tickets-table tbody tr:hover { background: #1C2128; }
    html[data-theme="dark"] .status-new { color: #E6EDF3; }
    html[data-theme="dark"] .page-btn { color: #8A9099; border-color: #2D333B; background: transparent; }
    html[data-theme="dark"] .page-btn:hover { background: #1C2128; color: #E6EDF3; }
    html[data-theme="dark"] .page-btn.active { background: #0D2318; color: #00FF88; }

    /* ── Mobile bottom tabbar ───────────────────────────────── */
    html[data-theme="dark"] .mobile-tabbar { background: #161B22; border-top-color: #2D333B; }
    html[data-theme="dark"] .tabbar-item { color: #8A9099; }
    html[data-theme="dark"] .tabbar-item.active { color: #00FF88; }
    html[data-theme="dark"] .tabbar-item:not(.active) .tabbar-icon-def { display: none; }
    html[data-theme="dark"] .tabbar-item:not(.active) .tabbar-icon-dark { display: block; }

    /* ── Mobile slide-in menu ───────────────────────────────── */
    html[data-theme="dark"] .mobile-menu-header { background: #161B22; }
    html[data-theme="dark"] .mobile-close-btn { color: #E6EDF3; }
    html[data-theme="dark"] .mobile-user-name { color: #E6EDF3; }
    html[data-theme="dark"] .mobile-user-id { color: #8A9099; }
    html[data-theme="dark"] .mobile-lang-row { color: #E6EDF3; border-top-color: #2D333B; }
    html[data-theme="dark"] .mobile-logout-row { color: #E6EDF3; border-top-color: #2D333B; }

    /* ── Notional Volume Calculator page ────────────────────── */
    html[data-theme="dark"] .nvc-card { background: #161B22; }
    html[data-theme="dark"] .input-wrap { background: #1C2128; border-color: #2D333B; }
    html[data-theme="dark"] .input-wrap select,
    html[data-theme="dark"] .input-wrap input { color: #E6EDF3; }
    html[data-theme="dark"] .btn-reset { background: rgba(255,255,255,0.08); color: #E6EDF3; }
    html[data-theme="dark"] .info-section-body a { color: #00FF88; }

    /* Open account modal */
    html[data-theme="dark"] .oa-modal { background: #161B22; }
    html[data-theme="dark"] .oa-header,
    html[data-theme="dark"] .oa-footer { border-color: #2D333B; background: #161B22; }
    html[data-theme="dark"] .oa-tab { color: #8A9099; }
    html[data-theme="dark"] .oa-platform-select,
    html[data-theme="dark"] .oa-type-card,
    html[data-theme="dark"] .oa-currency-chip { background: #1C2128; border-color: #2D333B; color: #E6EDF3; }
    html[data-theme="dark"] .oa-type-name { color: #E6EDF3; }
    html[data-theme="dark"] .oa-pwd-input,
    html[data-theme="dark"] .oa-input { background: #1C2128; border-color: #2D333B; color: #E6EDF3; }
    html[data-theme="dark"] .oa-label { color: #E6EDF3; }
    html[data-theme="dark"] .oa-back-btn { background: #1C2128; color: #E6EDF3; }

    /* Misc surfaces */
    html[data-theme="dark"] .legal { background: #161B22; color: #8A9099; }
    html[data-theme="dark"] .legal a { color: #00FF88; }
    html[data-theme="dark"] .p-sell { color: #ff4d5e; }
    html[data-theme="dark"] .chg-neg { background: #ff4d5e; }
    html[data-theme="dark"] .btn-action-h { background: #1C2128; color: #E6EDF3; }
    html[data-theme="dark"] .btn-action-h:hover { background: #252C36; }
    html[data-theme="dark"] .btn-open-acct { border-color: transparent; }

    /* Topbar icon light/dark variants */
    .topbar-icon-img-dark { display: none; }
    html[data-theme="dark"] .topbar-icon-img-light { display: none; }
    html[data-theme="dark"] .topbar-icon-img-dark  { display: block; }

    /* Theme toggle */
    .topbar-theme-btn {
      width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 8px; cursor: pointer; color: var(--text-secondary);
      transition: background 0.15s; border: none; background: transparent;
    }
    .topbar-theme-btn:hover { background: var(--bg-2); }
    .topbar-theme-btn .icon-moon { display: block; }
    .topbar-theme-btn .icon-sun  { display: none; }
    html[data-theme="dark"] .topbar-theme-btn .icon-moon { display: none; }
    html[data-theme="dark"] .topbar-theme-btn .icon-sun  { display: block; }
    html[data-theme="dark"] .topbar-theme-btn { color: #E6EDF3; }
  `;
  document.head.appendChild(darkStyle);

  /* ── Apply saved theme immediately (before paint) ────────── */
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  /* ── Inject topbar CSS ───────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    .topbar {
      position: fixed; top: 0; left: 240px; right: 0;
      height: 60px; background: rgba(255,255,255,0.45);
      backdrop-filter: blur(12px); border-bottom: 1px solid var(--border);
      display: flex; align-items: center; justify-content: flex-end;
      padding: 0 24px; gap: 20px; z-index: 90;
      transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    body.sidebar-collapsed .topbar { left: 64px; }

    .topbar-hamburger {
      display: none; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 8px; cursor: pointer;
      border: none; background: transparent; margin-right: auto;
      color: var(--text-secondary); transition: background 0.15s;
    }
    .topbar-hamburger:hover { background: var(--bg-2); }

    .topbar-mobile-logo {
      display: none; align-items: center;
      margin-right: auto; height: 24px;
    }
    .topbar-mobile-logo img { height: 24px; width: auto; }

    .topbar-brand {
      display: none; align-items: center; height: 24px; flex-shrink: 0;
    }
    .topbar-brand img { height: 24px; width: auto; }

    .topbar-btn-outline {
      display: flex; align-items: center; justify-content: center;
      height: 36px; padding: 0 14px; border-radius: 8px;
      font-size: 13px; font-weight: 500; cursor: pointer;
      white-space: nowrap; transition: background 0.15s; border: none;
    }

.topbar-deposit {
      background: #00FF88;
      color: #000000; font-weight: 600;
    }

    .topbar-icon-btn {
      width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 8px; cursor: pointer; color: var(--text-secondary);
      transition: background 0.15s; border: none; background: transparent;
    }

    .topbar-icon-btn:hover { background: var(--bg-2); }

    .topbar-avatar {
      width: 32px; height: 32px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; overflow: hidden; border: none; padding: 0;
    }

    .topbar-avatar img { width: 32px; height: 32px; object-fit: cover; display: block; border-radius: 50%; }

.topbar-download {
      display: none; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 8px; cursor: pointer;
      border: none; background: transparent;
    }
    .topbar-download:hover { background: var(--bg-2); }

    .topbar-right-icons { display: flex; align-items: center; gap: 16px; }

.topbar-avatar-wrap { position: relative; }

    .topbar-dropdown {
      display: none; position: fixed; top: 68px; right: 24px;
      width: 320px; background: #fff; border-radius: 10px;
      box-shadow: 8px 8px 30px 0px rgba(0,0,0,0.1);
      z-index: 200; overflow: hidden;
    }
    .topbar-dropdown.open { display: block; }

    .topbar-dd-header {
      display: flex; align-items: center; gap: 16px;
      padding: 24px 24px 20px; cursor: pointer;
    }
    .topbar-dd-header:hover { background: var(--bg-2); }
    .topbar-dd-av {
      width: 48px; height: 48px; border-radius: 50%;
      overflow: hidden; flex-shrink: 0;
    }
    .topbar-dd-av img { width: 48px; height: 48px; object-fit: cover; display: block; }
    .topbar-dd-info { flex: 1; display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .topbar-dd-name { font-size: 18px; font-weight: 600; color: #000000; }
    .topbar-dd-nick { font-size: 13px; color: var(--text-secondary); }
    .topbar-dd-uid { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-secondary); }
    .topbar-dd-uid svg { cursor: pointer; opacity: 0.7; flex-shrink: 0; }
    .topbar-dd-arrow { color: var(--text-secondary); flex-shrink: 0; }

    .topbar-dd-divider { height: 1px; background: var(--border); }

    .topbar-dd-item {
      display: flex; align-items: center; gap: 12px;
      height: 64px; padding: 0 24px;
      cursor: pointer; transition: background 0.15s;
    }
    .topbar-dd-item:hover { background: #f4f6f9; }
    .topbar-dd-item--active { background: #E5FFF3; }
    .topbar-dd-item--active:hover { background: #dae8ff; }
    .topbar-dd-icon {
      width: 24px; height: 24px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      color: var(--text-secondary);
    }
    .topbar-dd-label { font-size: 16px; font-weight: 500; color: #000000; }

    .topbar-login-btn {
      display: none; align-items: center; justify-content: center;
      height: 36px; padding: 0 20px; border-radius: 8px;
      font-size: 13px; font-weight: 600; cursor: pointer;
      white-space: nowrap; border: 1.5px solid var(--blue);
      background: transparent; color: #000;
      transition: background 0.15s;
    }
    .topbar-login-btn:hover { background: var(--blue-light); }
    .topbar-login-btn.visible { display: flex; }

    @media (max-width: 768px) {
      .topbar { left: 0 !important; padding: 0 16px; gap: 10px; }
      .topbar-hamburger { display: flex !important; }
      .topbar-deposit { display: none !important; }
      .topbar-mobile-logo { display: none !important; }
      .topbar-brand { display: none !important; }
      .topbar-avatar { display: none !important; }
      .topbar-avatar-wrap { display: none !important; }
      .topbar-right-icons { flex: 1; justify-content: flex-end; gap: 16px; }
      .topbar-language { display: none !important; }
      .topbar-download { display: flex !important; }
      .topbar-dropdown { display: none !important; }
    }
  `;
  document.head.appendChild(style);

  /* ── Build HTML ──────────────────────────────────────────── */
  const html = `
    <header class="topbar">
      <div class="topbar-brand"><img src="images/vtlogo.png" alt="VT Markets" /></div>
      <button class="topbar-hamburger" id="topbar-hamburger" aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <line x1="3" y1="5" x2="17" y2="5"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="15" x2="17" y2="15"/>
        </svg>
      </button>
      <div class="topbar-mobile-logo"><img src="images/logo.png" alt="Logo" /></div>
      <div class="topbar-btn-outline topbar-deposit">Deposit</div>
      <div class="topbar-right-icons">
        <button class="topbar-theme-btn" id="topbar-theme-btn" title="Toggle theme" aria-label="Toggle dark/light mode">
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        </button>
        <div class="topbar-icon-btn topbar-language" title="Language">
          <img class="topbar-icon-img-light" src="images/language-light.png" width="20" height="20" alt="Language" />
          <img class="topbar-icon-img-dark" src="images/language-dark.png" width="20" height="20" alt="Language" />
        </div>
        <div class="topbar-icon-btn" title="Notifications">
          <img class="topbar-icon-img-light" src="images/ring-light.png" width="20" height="20" alt="Notifications" />
          <img class="topbar-icon-img-dark" src="images/ring-dark.png" width="20" height="20" alt="Notifications" />
        </div>
        <button class="topbar-download" title="Download">
          <img class="topbar-icon-img-light" src="images/Download.png" width="24" height="24" alt="Download" />
          <img class="topbar-icon-img-dark" src="images/Download-dark.png" width="24" height="24" alt="Download" />
        </button>
      </div>
      <button class="topbar-login-btn" id="topbar-login-btn">Log In</button>
      <div class="topbar-avatar-wrap" id="topbar-avatar-wrap">
        <div class="topbar-avatar" id="topbar-avatar" title="Profile"><img src="images/img7.png" width="32" height="32" alt="Profile" /></div>
        <div class="topbar-dropdown" id="topbar-dropdown">
          <div class="topbar-dd-header">
            <div class="topbar-dd-av"><img src="images/img7.png" alt="Profile" /></div>
            <div class="topbar-dd-info">
              <div class="topbar-dd-name">User Name</div>
              <div class="topbar-dd-nick">Nickname</div>
              <div class="topbar-dd-uid">
                <span>User ID: 123456</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </div>
            </div>
            <svg class="topbar-dd-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4l4 4-4 4"/></svg>
          </div>
          <div class="topbar-dd-divider"></div>
          <div class="topbar-dd-item">
            <div class="topbar-dd-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M15 9h2M15 13h2M5 17a4 4 0 0 1 8 0"/></svg></div>
            <span class="topbar-dd-label">Verification</span>
          </div>
          <div class="topbar-dd-item">
            <div class="topbar-dd-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 14l4 4 4-4"/></svg></div>
            <span class="topbar-dd-label">Download</span>
          </div>
          <div class="topbar-dd-item">
            <div class="topbar-dd-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></div>
            <span class="topbar-dd-label">Log out</span>
          </div>
        </div>
      </div>
    </header>`;

  const root = document.getElementById('topbar-root');
  root.innerHTML = html;

  /* ── Theme toggle ────────────────────────────────────────── */
  const themeBtn = document.getElementById('topbar-theme-btn');

  // Inject a reusable no-transition style block
  const noTransStyle = document.createElement('style');
  noTransStyle.id = 'theme-no-transition';
  noTransStyle.textContent = 'html.switching-theme * { transition: none !important; }';
  document.head.appendChild(noTransStyle);

  themeBtn.addEventListener('click', () => {
    // Freeze all transitions so the theme swap is instant (no blink)
    document.documentElement.classList.add('switching-theme');

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    // Re-enable transitions after the browser has painted the new theme
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove('switching-theme');
      });
    });
  });

  /* ── Attach behaviour ────────────────────────────────────── */
  document.getElementById('topbar-hamburger').addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent('sidebar-mobile-toggle'));
  });

/* ── Avatar dropdown ─────────────────────────────────────── */
  const avatarWrap = document.getElementById('topbar-avatar-wrap');
  const avatarBtn  = document.getElementById('topbar-avatar');
  const dropdown   = document.getElementById('topbar-dropdown');

  avatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.querySelector('.topbar-dd-header').addEventListener('click', () => {
    window.location.href = 'profile.html';
  });

  document.addEventListener('click', (e) => {
    if (!avatarWrap.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dropdown.classList.remove('open');
  });

  /* ── Log out / Log in ────────────────────────────────────── */
  const loginBtn = document.getElementById('topbar-login-btn');

  const depositBtn = document.querySelector('.topbar-deposit');

  document.querySelector('.topbar-dd-item:last-child').addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
})();
