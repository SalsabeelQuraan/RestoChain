// HELPER — Toast Notification
function showToast(message, duration = 2500) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-lg py-md rounded-xl font-label-md shadow-lg transition-all duration-300 opacity-0 whitespace-nowrap';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.style.opacity = '1', 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}
// 1. GLOW FOLLOW MOUSE — Balance Card
const balanceCard = document.getElementById('balance-card');
if (balanceCard) {
    balanceCard.addEventListener('mousemove', (e) => {
        const rect = balanceCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const glow = balanceCard.querySelector('.blur-3xl');
        if (glow) {
            glow.style.transform = `translate(${(x - rect.width / 2) / 20}px, ${(y - rect.height / 2) / 20}px)`;
        }
    });
}
// 2. COUNTDOWN TIMER — Next Payout
function startCountdown() {
    const timerEl = document.getElementById('payout-timer');
    if (!timerEl) return;

    let totalSeconds = 14 * 3600 + 22 * 60;

    const timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            timerEl.textContent = 'Payout Ready!';
            timerEl.classList.add('text-primary');
            return;
        }
        totalSeconds--;
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        timerEl.textContent = `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
    }, 1000);
}
startCountdown();
// 3. CLAIM REWARDS BUTTON
const claimBtn = document.getElementById('claim-btn');
if (claimBtn) {
    claimBtn.addEventListener('click', () => {
        claimBtn.textContent = 'Claiming...';
        claimBtn.disabled = true;
        claimBtn.classList.add('opacity-70');

        setTimeout(() => {
            claimBtn.textContent = '✓ Claimed!';
            claimBtn.classList.remove('opacity-70');
            claimBtn.classList.add('bg-primary-container', 'text-on-primary-container');
            claimBtn.classList.remove('bg-primary', 'text-on-primary');

            const rewardsEl = document.getElementById('earned-rewards');
            if (rewardsEl) {
                rewardsEl.style.transition = 'opacity 0.3s';
                rewardsEl.style.opacity = '0';
                setTimeout(() => {
                    rewardsEl.innerHTML = '+0.00 <span class="text-body-md font-body-md text-on-surface-variant">RST</span>';
                    rewardsEl.style.opacity = '1';
                }, 300);
            }

            // أعد تفعيل الزر بعد 3 ثواني
            setTimeout(() => {
                claimBtn.disabled = false;
                claimBtn.textContent = 'Claim Rewards';
                claimBtn.classList.remove('bg-primary-container', 'text-on-primary-container');
                claimBtn.classList.add('bg-primary', 'text-on-primary');
            }, 3000);
        }, 1500);
    });
}
// 4. SEND / RECEIVE / SWAP — Toast
['send-btn', 'receive-btn', 'swap-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const label = id.replace('-btn', '');
    btn.addEventListener('click', () => {
        showToast(`${label.charAt(0).toUpperCase() + label.slice(1)} feature coming soon`);
    });
});
// 5. TRUST SCORE LIVE ANIMATION
const trustBar = document.getElementById('trust-bar');
const trustScore = document.getElementById('trust-score');

if (trustBar) {
    setInterval(() => {
        const scores = [99.8, 99.7, 99.9, 99.8, 100];
        const random = scores[Math.floor(Math.random() * scores.length)];
        trustBar.style.transition = 'width 0.8s ease';
        trustBar.style.width = random + '%';
        if (trustScore) trustScore.textContent = random + '%';
    }, 4000);
}
// 6. TRANSACTION ROWS — View Tx / Details
document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.trim() === 'View Tx' || btn.textContent.trim() === 'Details') {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const hash = row?.querySelector('.font-mono')?.textContent || 'N/A';
            const amount = row?.querySelector('.font-label-md.text-primary, .font-label-md.text-error')?.textContent || '';
            showToast(`${hash} — ${amount}`, 3000);
        });
    }
});
// 7. LOAD MORE ACTIVITY
const loadMoreBtn = document.getElementById('load-more-btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        showToast('No more transactions to load');
    });
}
// 8. MICRO-INTERACTIONS
document.querySelectorAll('button, a').forEach(elem => {
    if (elem.classList.contains('active:scale-95') || elem.disabled) return;
    elem.addEventListener('mousedown', () => {
        elem.style.transform = 'scale(0.95)';
    });
    elem.addEventListener('mouseup', () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});
// Bottom Nav — أضفه للصفحة (مش موجود في HTML)
const bottomNav = document.createElement('nav');
bottomNav.className = 'fixed bottom-0 left-0 w-full z-50 md:hidden bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 flex justify-around items-center h-20 px-4';
bottomNav.innerHTML = `
    <a href="Dashboard.html" class="flex flex-col items-center gap-1 text-on-secondary-container">
        <span class="material-symbols-outlined">home</span>
        <span class="text-label-sm font-label-sm">Home</span>
    </a>
    <a href="ExploreRest.html" class="flex flex-col items-center gap-1 text-on-secondary-container">
        <span class="material-symbols-outlined">search</span>
        <span class="text-label-sm font-label-sm">Explore</span>
    </a>
    <a href="WalletInfo.html" class="flex flex-col items-center gap-1 text-primary">
        <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">account_balance_wallet</span>
        <span class="text-label-sm font-label-sm">Wallet</span>
    </a>
    <a href="UserProfile.html" class="flex flex-col items-center gap-1 text-on-secondary-container">
        <span class="material-symbols-outlined">person</span>
        <span class="text-label-sm font-label-sm">Profile</span>
    </a>
`;
document.body.appendChild(bottomNav);