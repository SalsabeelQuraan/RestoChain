// HELPER — Toast Notification
function showToast(message, type = 'info', duration = 3000) {
    const colors = {
        info:    'bg-inverse-surface text-inverse-on-surface',
        error:   'bg-error text-on-error',
        success: 'bg-primary text-on-primary'
    };
    const toast = document.createElement('div');
    toast.className = `fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-lg py-md rounded-xl font-label-md shadow-lg transition-all duration-300 opacity-0 whitespace-nowrap ${colors[type]}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = '1', 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}
// 1. GMAIL BUTTON — Loading State
const scannerLine = document.getElementById('scanner-line');
const gmailBtn = document.getElementById('gmail-btn');
if (gmailBtn) {
    gmailBtn.addEventListener('click', () => {
        const original = gmailBtn.innerHTML;
        gmailBtn.innerHTML = `
            <span class="material-symbols-outlined animate-spin">progress_activity</span>
            <span class="font-label-md text-label-md text-on-surface">Connecting to Gmail...</span>
        `;
        gmailBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            showToast('Gmail connected successfully!', 'success', 1500);
            setTimeout(() => window.location.href = 'Dashboard.html', 1500);
        }, 2000);
    });
}
// 2. CRYPTO WALLET BUTTON — Loading State
const walletBtn = document.getElementById('wallet-btn');
if (walletBtn) {
    walletBtn.addEventListener('click', () => {
        walletBtn.innerHTML = `
            <span class="material-symbols-outlined animate-spin">progress_activity</span>
            <span class="font-label-md text-label-md text-on-surface">Initializing wallet...</span>
        `;
        walletBtn.style.pointerEvents = 'none';
        setTimeout(() => {
            window.location.href = 'CreateWallet.html';
        }, 1200);
    });
}
// 3. NODE STATUS — Live Progress Bar
const nodeBar = document.querySelector('.h-full.bg-primary-container');
const nodeStatusText = document.getElementById('node-status-text');
if (nodeBar) {
    let progress = 88;
    setInterval(() => {
        progress = Math.min(100, progress + Math.random() * 2);
        nodeBar.style.transition = 'width 1s ease';
        nodeBar.style.width = progress + '%';
        if (progress >= 100 && nodeStatusText) {
            nodeStatusText.textContent = 'Ledger synchronized ✓';
            nodeStatusText.classList.add('text-primary');
        }
    }, 2000);
}
// 4. SCANNER LINE — Speed up on Hover
if (scannerLine) {
    const card = scannerLine.closest('.glass-panel');
    if (card) {
        card.addEventListener('mouseenter', () => {
            scannerLine.style.animationDuration = '1s';
        });
        card.addEventListener('mouseleave', () => {
            scannerLine.style.animationDuration = '3s';
        });
    }
}
// 5. TRUST BADGES — Hover Tooltip
const badges = [
    { selector: 0, tip: 'End-to-End encrypted via ZK protocol' },
    { selector: 1, tip: 'Verified by Ethereum Oracle Network'   }
];

document.querySelectorAll('.grid.grid-cols-2 > div').forEach((badge, i) => {
    if (!badges[i]) return;
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', () => {
        showToast(badges[i].tip, 'info', 3000);
    });
});
// 6. MICRO-INTERACTIONS
document.querySelectorAll('button, a').forEach(elem => {
    if (elem.classList.contains('active:scale-95') || elem.disabled) return;
    elem.addEventListener('mousedown', () => {
        elem.style.transform = 'scale(0.95)';
    });
    elem.addEventListener('mouseup', () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});