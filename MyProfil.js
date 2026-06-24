// ── HELPER: Toast Notification ──────────────────────────────
function showToast(message, type = 'info', duration = 2500) {
    const colors = {
        info:    'bg-inverse-surface text-inverse-on-surface',
        error:   'bg-error text-on-error',
        success: 'bg-primary text-on-primary'
    };
    const toast = document.createElement('div');
    toast.className = `fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-lg py-md rounded-xl font-label-md shadow-lg transition-all duration-300 opacity-0 whitespace-nowrap ${colors[type]}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = '1', 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ── 1. WALLET ADDRESS — Copy to Clipboard ───────────────────
const walletDiv = document.querySelector('.group.cursor-pointer');

if (walletDiv) {
    walletDiv.addEventListener('click', () => {
        const address = document.getElementById('wallet-address')?.dataset.full;
        if (!address) return;

        navigator.clipboard.writeText(address).then(() => {
            const icon = document.getElementById('copy-icon');
            if (icon) {
                icon.textContent = 'check';
                icon.classList.add('text-primary-container');
                setTimeout(() => {
                    icon.textContent = 'content_copy';
                    icon.classList.remove('text-primary-container');
                }, 2000);
            }
            showToast('Wallet address copied!', 'success');
        });
    });
}

// ── 2. TOGGLE BUTTONS — Security Settings ───────────────────
function setupToggle(id) {
    const toggle = document.getElementById(id);
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const isActive = toggle.getAttribute('aria-pressed') === 'true';
        const thumb    = toggle.querySelector('div');

        if (isActive) {
            toggle.setAttribute('aria-pressed', 'false');
            toggle.classList.remove('bg-primary-container');
            toggle.classList.add('bg-surface-variant');
            thumb.classList.remove('translate-x-5');
        } else {
            toggle.setAttribute('aria-pressed', 'true');
            toggle.classList.add('bg-primary-container');
            toggle.classList.remove('bg-surface-variant');
            thumb.classList.add('translate-x-5');
        }
    });
}

setupToggle('toggle-biometric');
setupToggle('toggle-privacy');

// ── 3. SIGN OUT — Confirmation ───────────────────────────────
const signOutBtn   = document.getElementById('sign-out-btn');
const signOutLabel = document.getElementById('sign-out-label');

if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
        const confirmed = confirm('Are you sure you want to sign out?');
        if (confirmed) {
            if (signOutLabel) signOutLabel.textContent = 'Signing out...';
            signOutBtn.disabled = true;
            signOutBtn.style.opacity = '0.6';
            setTimeout(() => window.location.href = 'LandingPage.html', 1000);
        }
    });
}

// ── 4. APP PREFERENCES — Chevron Buttons ─────────────────────
const prefLanguage      = document.getElementById('pref-language');
const prefNotifications = document.getElementById('pref-notifications');

if (prefLanguage) {
    prefLanguage.addEventListener('click', () => {
        showToast('Language settings coming soon', 'info');
    });
}
if (prefNotifications) {
    prefNotifications.addEventListener('click', () => {
        showToast('Notification settings coming soon', 'info');
    });
}

// ── 5. TRUST SCORE — Animated Counter ───────────────────────
const trustScoreEl = document.getElementById('trust-score');

if (trustScoreEl) {
    const target = 99.8;
    let current  = 90;
    trustScoreEl.textContent = current.toFixed(1) + '%';

    const interval = setInterval(() => {
        current = Math.min(current + 0.5, target);
        trustScoreEl.textContent = current.toFixed(1) + '%';
        if (current >= target) clearInterval(interval);
    }, 30);
}

// ── 6. SCROLL ANIMATIONS ─────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('main section').forEach(el => {
    el.classList.add('transition-all', 'duration-500', 'opacity-0', 'translate-y-4');
    observer.observe(el);
});

// ── 7. MICRO-INTERACTIONS ────────────────────────────────────
document.querySelectorAll('button, a').forEach(elem => {
    elem.addEventListener('mousedown',  () => { if (!elem.disabled) elem.style.transform = 'scale(0.97)'; });
    elem.addEventListener('mouseup',    () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});