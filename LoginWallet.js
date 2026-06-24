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
// 1. FORM VALIDATION & SUBMIT
const nameInput     = document.getElementById('full_name');
const usernameInput = document.getElementById('username');
const emailInput    = document.getElementById('email');
const submitBtn     = document.getElementById('submit-btn');

if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const name     = nameInput?.value.trim();
        const username = usernameInput?.value.trim();
        const email    = emailInput?.value.trim();

        // Full Name
        if (!name) {
            showToast('Please enter your full name', 'error');
            nameInput.focus();
            nameInput.classList.add('border-error', 'ring-1', 'ring-error');
            return;
        }

        // Username
        if (!username) {
            showToast('Please enter a username', 'error');
            usernameInput.focus();
            usernameInput.classList.add('border-error', 'ring-1', 'ring-error');
            return;
        }
        if (!/^@?[a-zA-Z0-9_]{3,}$/.test(username)) {
            showToast('Username must be 3+ chars (letters, numbers, _)', 'error');
            usernameInput.focus();
            usernameInput.classList.add('border-error', 'ring-1', 'ring-error');
            return;
        }

        // Email
        if (!email) {
            showToast('Please enter your registered email', 'error');
            emailInput.focus();
            emailInput.classList.add('border-error', 'ring-1', 'ring-error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('Please enter a valid email address', 'error');
            emailInput.focus();
            emailInput.classList.add('border-error', 'ring-1', 'ring-error');
            return;
        }

        // Processing state
        submitBtn.innerHTML = `
            <span class="material-symbols-outlined animate-spin">progress_activity</span>
            Connecting...
        `;
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '0.8';

        setTimeout(() => {
            submitBtn.innerHTML = `
                <span class="material-symbols-outlined">check_circle</span>
                Wallet Connected!
            `;
            submitBtn.style.opacity = '1';
            showToast('Wallet connected! Welcome back.', 'success', 2000);

            setTimeout(() => {
                window.location.href = 'Dashboard.html';
            }, 2000);
        }, 2000);
    });
}
// 2. CLEAR ERROR BORDER ON INPUT
[nameInput, usernameInput, emailInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
        input.classList.remove('border-error', 'ring-1', 'ring-error');
    });
});

// 3. USERNAME AUTO-FORMAT
if (usernameInput) {
    usernameInput.addEventListener('blur', () => {
        let val = usernameInput.value.trim();
        if (val && !val.startsWith('@')) {
            usernameInput.value = '@' + val;
        }
    });
    usernameInput.addEventListener('focus', () => {
        if (usernameInput.value === '@') {
            usernameInput.value = '';
        }
    });
}
// 4. SECURITY BUTTON — Header
const securityBtn = document.getElementById('security-btn');
if (securityBtn) {
    securityBtn.addEventListener('click', () => {
        showToast('Non-custodial • Keys never leave your device', 'info', 3500);
    });
}
// 5. SPINNING RING — Pause on Hover
const spinRing = document.getElementById('spin-ring');
if (spinRing) {
    spinRing.addEventListener('mouseenter', () => {
        spinRing.style.animationPlayState = 'paused';
    });
    spinRing.addEventListener('mouseleave', () => {
        spinRing.style.animationPlayState = 'running';
    });
}
// 6. MICRO-INTERACTIONS
document.querySelectorAll('button, a').forEach(elem => {
    if (elem.classList.contains('active:scale-95') || elem.disabled) return;
    elem.addEventListener('mousedown', () => {
        elem.style.transform = 'scale(0.95)';
    });
    elem.addEventListener('mouseup', () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});