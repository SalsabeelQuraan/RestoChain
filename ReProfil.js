// ── 1. HELPER: Toast ─────────────────────────────────────────
function showToast(message, type = 'success') {
    const existing = document.getElementById('rc-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'rc-toast';
    toast.className = [
        'fixed bottom-24 left-1/2 -translate-x-1/2 z-50',
        'flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg',
        'font-label-md text-sm transition-all duration-300 opacity-0 scale-95',
        type === 'success' ? 'bg-primary text-on-primary' : 'bg-error text-on-error',
    ].join(' ');
    toast.innerHTML = `
        <span class="material-symbols-outlined text-[18px]">${type === 'success' ? 'check_circle' : 'error'}</span>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'scale-95');
        toast.classList.add('opacity-100', 'scale-100');
    });
    setTimeout(() => {
        toast.classList.remove('opacity-100', 'scale-100');
        toast.classList.add('opacity-0', 'scale-95');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 2500);
}

// ── 2. SCROLL REVEAL ─────────────────────────────────────────
function initScrollReveal() {
    const targets = document.querySelectorAll('.bg-surface-container-lowest, footer');
    targets.forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity   = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    targets.forEach(el => observer.observe(el));
}

// ── 3. TRUST SCORE — Animated Counter ───────────────────────
function initTrustScoreCounter() {
    const scoreEl = document.querySelector('.font-headline-xl.text-primary');
    if (!scoreEl) return;

    const target   = parseFloat(scoreEl.textContent) || 4.8;
    const duration = 1200;
    const start    = performance.now();

    function tick(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        scoreEl.textContent = (eased * target).toFixed(1);
        if (progress < 1) requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            requestAnimationFrame(tick);
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    observer.observe(scoreEl);
}

// ── 4. REPUTATION TREND BARS ─────────────────────────────────
function initTrendBars() {
    const bars = document.querySelectorAll('.flex.items-end.gap-1.h-12 > div');
    if (!bars.length) return;

    bars.forEach(b => {
        b.dataset.targetHeight = b.style.height;
        b.style.height     = '0%';
        b.style.transition = 'height 0.5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            bars.forEach((b, i) => {
                setTimeout(() => { b.style.height = b.dataset.targetHeight; }, i * 80);
            });
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    observer.observe(bars[0].closest('.flex'));
}

// ── 5. DIRECTIONS BUTTON ─────────────────────────────────────
function initDirectionsButton() {
    document.querySelectorAll('button').forEach(btn => {
        if (!btn.querySelector("[data-icon='directions']")) return;
        btn.addEventListener('click', () => {
            const address = '42 Emerald Lane, Mayfair, London W1K';
            window.open(
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
                '_blank', 'noopener,noreferrer'
            );
        });
    });
}

// ── 6. BOOK TABLE BUTTON ─────────────────────────────────────
function initBookTableButton() {
    document.querySelectorAll('button').forEach(btn => {
        if (!btn.querySelector("[data-icon='calendar_today']")) return;
        btn.addEventListener('click', () => showToast('Booking feature coming soon!'));
    });
}

// ── 7. PHONE — Tap to Call ───────────────────────────────────
function initPhoneLink() {
    const phoneRow = document.querySelector("[data-icon='call']")?.closest('.flex');
    const phoneText = phoneRow?.querySelector('.font-body-md');
    if (!phoneText) return;

    phoneText.style.cursor         = 'pointer';
    phoneText.style.textDecoration = 'underline';
    phoneText.style.textDecorationColor = '#006c49';
    phoneText.addEventListener('click', () => {
        window.location.href = 'tel:+442079460123';
    });
}

// ── 8. ON-CHAIN LEDGER LINK ──────────────────────────────────
function initLedgerLink() {
    const ledgerLink = document.querySelector("a[href='#']");
    if (!ledgerLink) return;
    ledgerLink.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('On-Chain Ledger viewer coming soon!');
    });
}

// ── 9. ORACLE VERIFIED BADGE — Tooltip ──────────────────────
function initVerifiedBadge() {
    const badge = document.querySelector('.glass-panel.glow-emerald');
    if (!badge) return;
    badge.style.cursor = 'pointer';
    badge.title = "This restaurant's data has been independently verified by RestoChain Oracles";
    badge.addEventListener('click', () => {
        showToast('Oracle-verified: All data is cryptographically authenticated');
    });
}

// ── 10. HEALTH SAFETY LOG — Expand on Tap ───────────────────
function initSafetyLogItems() {
    const logItems = document.querySelectorAll('.space-y-6.relative > .flex.gap-4.relative');
    const details  = [
        'Passed all 14 sanitary checks. No violations found. Inspector: Dr. Amelia Hurst.',
        'Smart-freezer batch #SFB-2241 confirmed. Temps held between -18°C and -20°C.',
        'Full Q1 compliance report submitted to Local Health Authority. Score: 98/100.',
    ];

    logItems.forEach((item, i) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const existing = item.querySelector('.log-detail');
            if (existing) { existing.remove(); return; }

            const detail = document.createElement('p');
            detail.className   = 'log-detail text-[11px] text-on-surface-variant mt-1 italic leading-relaxed';
            detail.textContent = details[i] ?? 'No additional detail available.';
            item.querySelector('div:last-child').appendChild(detail);
        });
    });
}

// ── INIT ALL ─────────────────────────────────────────────────
initScrollReveal();
initTrustScoreCounter();
initTrendBars();
initDirectionsButton();
initBookTableButton();
initPhoneLink();
initLedgerLink();
initVerifiedBadge();
initSafetyLogItems();