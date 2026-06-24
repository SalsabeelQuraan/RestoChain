// HELPER — Toast Notification
function showToast(message, type = 'info', duration = 3000) {
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
// 1. TRUST SCORE COUNTER ANIMATION
const scoreEl = document.getElementById('trust-score');
if (scoreEl) {
    const end = 98.4;
    const duration = 1500;
    const startTime = performance.now();

    function animateScore(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        scoreEl.textContent = (eased * end).toFixed(1);
        if (progress < 1) requestAnimationFrame(animateScore);
    }
    requestAnimationFrame(animateScore);
}
// 2. TOKEN BALANCE COUNTER ANIMATION
const tokenEl = document.getElementById('token-balance');
if (tokenEl) {
    const end = 4280;
    const duration = 1800;
    const startTime = performance.now();

    function animateToken(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        tokenEl.textContent = Math.round(eased * end).toLocaleString();
        if (progress < 1) requestAnimationFrame(animateToken);
    }
    requestAnimationFrame(animateToken);
}
// 3. TABLE ROW HOVER — Slide Effect
document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.paddingLeft = '8px';  // بدل transform
        row.style.transition = 'padding-left 0.2s ease-out';
    });
    row.addEventListener('mouseleave', () => {
        row.style.paddingLeft = '';
    });
});
// 4. TX HASH LINKS — Toast on Click
document.querySelectorAll('a.font-mono').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showToast(`TX: ${link.textContent} copied to clipboard`, 'info', 2500);
        navigator.clipboard?.writeText(link.textContent).catch(() => {});
    });
});
// 5. REDEEM DISCOUNTS BUTTON
const redeemBtn = document.getElementById('redeem-btn');
if (redeemBtn) {
    redeemBtn.addEventListener('click', () => {
        showToast('Discount redemption coming soon!', 'info');
    });
}
// 6. VIEW ALL TRANSACTIONS BUTTON
const viewAllBtn = document.getElementById('view-all-btn');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        showToast('Full transaction history coming soon!', 'info');
    });
}
// 7. VERIFIED REVIEWS PROGRESS BAR ANIMATION
const progressBar = document.getElementById('reviews-progress');
if (progressBar) {
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.transition = 'width 1.5s ease-out';
        progressBar.style.width = '70%';
    }, 500);
}
// 8. MICRO-INTERACTIONS
document.querySelectorAll('button, a').forEach(elem => {
    if (elem.classList.contains('active:scale-95') || elem.disabled) return;
    if (elem.closest('tbody')) return;  // تجاهل روابط الجدول
    elem.addEventListener('mousedown', () => {
        elem.style.transform = 'scale(0.95)';
    });
    elem.addEventListener('mouseup', () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});