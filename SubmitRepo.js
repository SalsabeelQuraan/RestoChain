// ── HELPER: Toast Notification ──────────────────────────────
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

// ── 1. TAB SWITCHING ─────────────────────────────────────────
function switchTab(tab) {
    const reviewBtn       = document.getElementById('tab-review-btn');
    const incidentBtn     = document.getElementById('tab-incident-btn');
    const reviewContent   = document.getElementById('tab-review-content');
    const incidentContent = document.getElementById('tab-incident-content');

    if (tab === 'review') {
        reviewBtn.classList.add('tab-active');
        reviewBtn.classList.remove('text-on-surface-variant');
        reviewBtn.setAttribute('aria-selected', 'true');
        incidentBtn.classList.remove('tab-active');
        incidentBtn.classList.add('text-on-surface-variant');
        incidentBtn.setAttribute('aria-selected', 'false');
        reviewContent.classList.remove('hidden');
        incidentContent.classList.add('hidden');
    } else {
        incidentBtn.classList.add('tab-active');
        incidentBtn.classList.remove('text-on-surface-variant');
        incidentBtn.setAttribute('aria-selected', 'true');
        reviewBtn.classList.remove('tab-active');
        reviewBtn.classList.add('text-on-surface-variant');
        reviewBtn.setAttribute('aria-selected', 'false');
        incidentContent.classList.remove('hidden');
        reviewContent.classList.add('hidden');
    }
}

// استبدال onclick= بـ addEventListener
const tabReviewBtn   = document.getElementById('tab-review-btn');
const tabIncidentBtn = document.getElementById('tab-incident-btn');

if (tabReviewBtn)   tabReviewBtn.addEventListener('click',   () => switchTab('review'));
if (tabIncidentBtn) tabIncidentBtn.addEventListener('click', () => switchTab('incident'));

// ── 2. STAR RATING ───────────────────────────────────────────
const starContainer = document.getElementById('star-container');
let currentRating = 0;

if (starContainer) {
    starContainer.innerHTML = ''; // حذف النجوم الـ static من الـ HTML

    for (let i = 1; i <= 5; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'star-btn transition-transform hover:scale-110 active:scale-95';
        btn.setAttribute('aria-label', `Rate ${i} out of 5 stars`);
        btn.innerHTML = `<span class="material-symbols-outlined text-4xl text-outline-variant" style="font-variation-settings:'FILL' 0">star</span>`;

        btn.addEventListener('click', () => {
            currentRating = i;
            updateStars();
        });
        btn.addEventListener('mouseenter', () => highlightStars(i));
        btn.addEventListener('mouseleave', () => updateStars());

        starContainer.appendChild(btn);
    }
}

function updateStars() {
    starContainer?.querySelectorAll('span').forEach((star, index) => {
        const filled = index < currentRating;
        star.classList.toggle('text-tertiary-container', filled);
        star.classList.toggle('text-outline-variant', !filled);
        star.style.fontVariationSettings = filled ? "'FILL' 1" : "'FILL' 0";
    });
}

function highlightStars(hoverIndex) {
    starContainer?.querySelectorAll('span').forEach((star, index) => {
        const filled = index < hoverIndex;
        star.classList.toggle('text-tertiary-container', filled);
        star.classList.toggle('text-outline-variant', !filled);
        star.style.fontVariationSettings = filled ? "'FILL' 1" : "'FILL' 0";
    });
}

// ── 3. SUBMIT REVIEW ─────────────────────────────────────────
const submitReviewBtn = document.getElementById('submit-review-btn');
const reviewTextarea  = document.getElementById('review-textarea');

if (submitReviewBtn) {
    submitReviewBtn.addEventListener('click', () => {
        if (currentRating === 0) {
            showToast('Please select a star rating first', 'error');
            return;
        }
        if (!reviewTextarea?.value.trim()) {
            showToast('Please write a review before submitting', 'error');
            reviewTextarea.focus();
            return;
        }

        submitReviewBtn.disabled = true;
        submitReviewBtn.innerHTML = `<span class="material-symbols-outlined animate-spin">progress_activity</span> Submitting to Blockchain...`;

        setTimeout(() => {
            submitReviewBtn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> Submitted Successfully!`;
            showToast(`Review submitted! +${currentRating * 2} RST earned`, 'success', 3000);

            setTimeout(() => {
                reviewTextarea.value = '';
                currentRating = 0;
                updateStars();
                submitReviewBtn.innerHTML = `<span class="material-symbols-outlined">hub</span> Submit to Blockchain`;
                submitReviewBtn.disabled = false;
            }, 2500);
        }, 2000);
    });
}

// ── 4. FILE UPLOAD — Dropzone ────────────────────────────────
const dropzone   = document.getElementById('dropzone');
const fileInput  = document.getElementById('file-input');
const fileStatus = document.getElementById('file-status');

if (dropzone) {
    dropzone.addEventListener('click', () => fileInput?.click());
    dropzone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            fileInput?.click();
        }
    });

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('bg-primary/10', 'border-primary');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('bg-primary/10', 'border-primary');
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('bg-primary/10', 'border-primary');
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    });
}

if (fileInput) {
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) handleFile(file);
    });
}

function handleFile(file) {
    const maxSize = 10 * 1024 * 1024;
    const allowed = ['image/jpeg', 'image/png', 'application/pdf'];

    if (!allowed.includes(file.type)) {
        showToast('Only JPG, PNG, PDF files allowed', 'error');
        return;
    }
    if (file.size > maxSize) {
        showToast('File size must be under 10MB', 'error');
        return;
    }

    if (fileStatus) {
        fileStatus.textContent = `✓ ${file.name} ready for IPFS upload`;
        fileStatus.classList.remove('hidden');
    }
    showToast('File recognized — IPFS encryption ready', 'success');
}

// ── 5. SUBMIT INCIDENT ───────────────────────────────────────
const submitIncidentBtn = document.getElementById('submit-incident-btn');
const incidentDatetime  = document.getElementById('incident-datetime');
const incidentTxHash    = document.getElementById('incident-txhash');
const incidentTextarea  = document.getElementById('incident-textarea');

if (submitIncidentBtn) {
    submitIncidentBtn.addEventListener('click', () => {
        if (!incidentDatetime?.value) {
            showToast('Please select the date & time of incident', 'error');
            return;
        }
        if (!incidentTextarea?.value.trim()) {
            showToast('Please describe the incident', 'error');
            incidentTextarea.focus();
            return;
        }

        submitIncidentBtn.disabled = true;
        submitIncidentBtn.innerHTML = `<span class="material-symbols-outlined animate-spin">progress_activity</span> Filing Report...`;

        setTimeout(() => {
            submitIncidentBtn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> Report Filed!`;
            showToast('Incident report filed on blockchain', 'success', 3000);

            setTimeout(() => {
                incidentDatetime.value = '';
                if (incidentTxHash) incidentTxHash.value = '';
                incidentTextarea.value = '';
                submitIncidentBtn.innerHTML = `<span class="material-symbols-outlined">report</span> File Official Incident Report`;
                submitIncidentBtn.disabled = false;
            }, 2500);
        }, 2000);
    });
}

// ── 6. WARNING BANNER — Dismiss ──────────────────────────────
const warningBanner = document.getElementById('warning-banner');
if (warningBanner) {
    warningBanner.style.cursor = 'pointer';
    warningBanner.addEventListener('click', () => {
        warningBanner.style.transition = 'opacity 0.3s';
        warningBanner.style.opacity = '0';
        setTimeout(() => warningBanner.remove(), 300);
    });
}

// ── 7. MICRO-INTERACTIONS ────────────────────────────────────
document.querySelectorAll('button, a').forEach(elem => {
    elem.addEventListener('mousedown',  () => { if (!elem.disabled) elem.style.transform = 'scale(0.95)'; });
    elem.addEventListener('mouseup',    () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});