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

// ── 1. SCROLL REVEAL ANIMATION ──────────────────────────────
// يشتغل أول شي قبل أي شيء ثاني عشان الكروت تبدأ مخفية
const allCards = document.querySelectorAll('[data-restaurant]');

allCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.dataset.revealed = 'false';
});

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.dataset.revealed = 'true';
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

allCards.forEach(card => cardObserver.observe(card));

// ── 2. SEARCH BAR — Live Filter ──────────────────────────────
const searchInput = document.getElementById('search-input');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        allCards.forEach(card => {
            // لا تعدّل opacity للكروت اللي ما اتكشفت بعد بالـ animation
            if (card.dataset.revealed !== 'true') return;
            const name = (card.dataset.restaurant || '').toLowerCase();
            card.style.opacity = (!query || name.includes(query)) ? '1' : '0.3';
        });
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            allCards.forEach(card => {
                if (card.dataset.revealed === 'true') card.style.opacity = '1';
            });
        }
    });
}

// ── 3. RESTAURANT CARDS — Click Navigation ───────────────────
allCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.blockchain-log-btn')) return;
        const href = card.dataset.href || 'RestoProfile.html';
        const name = card.dataset.restaurant || 'Restaurant';
        showToast(`Opening ${name}...`, 'info', 1500);
        setTimeout(() => window.location.href = href, 1500);
    });

    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});

// ── 4. BLOCKCHAIN LOG BUTTON ─────────────────────────────────
document.querySelectorAll('.blockchain-log-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('[data-restaurant]');
        const hashEl = card ? card.querySelector('[data-hash]') : null;
        const hash = hashEl ? hashEl.dataset.hash : 'N/A';
        showToast(`Blockchain hash: ${hash}`, 'info', 3000);
    });
});

// ── 5. TOUCH & MICRO-INTERACTIONS ───────────────────────────
document.querySelectorAll('button, a').forEach(elem => {
    if (elem.classList.contains('active:scale-95')) return;
    if (elem.closest('[data-restaurant]') && elem.tagName === 'A') return;

    elem.addEventListener('touchstart', () => elem.style.opacity = '0.7', { passive: true });
    elem.addEventListener('touchend',   () => elem.style.opacity = '1');

    elem.addEventListener('mousedown',  () => { if (!elem.disabled) elem.style.transform = 'scale(0.95)'; });
    elem.addEventListener('mouseup',    () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});