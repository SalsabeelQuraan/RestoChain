// ── 1. GLASS CARDS — Hover Border Highlight ──────────────────
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
});

// ── 2. SCROLL ANIMATIONS — Intersection Observer ─────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-card').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
    observer.observe(el);
});

// ── 3. FAQ — Smooth Accordion (مرة وحدة بس) ─────────────────
document.querySelectorAll('details').forEach(detail => {
    const content = detail.querySelector('div');
    content.style.overflow   = 'hidden';
    content.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';

    // حالة البداية
    if (detail.open) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity   = '1';
    } else {
        content.style.maxHeight = '0';
        content.style.opacity   = '0';
    }

    detail.addEventListener('toggle', () => {
        if (detail.open) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity   = '1';
            // أغلق الباقين
            document.querySelectorAll('details').forEach(other => {
                if (other !== detail && other.open) {
                    other.removeAttribute('open');
                    const otherContent = other.querySelector('div');
                    otherContent.style.maxHeight = '0';
                    otherContent.style.opacity   = '0';
                }
            });
        } else {
            content.style.maxHeight = '0';
            content.style.opacity   = '0';
        }
    });
});

// ── 4. MICRO-INTERACTIONS — Buttons & Links ──────────────────
document.querySelectorAll('a, button').forEach(elem => {
    elem.addEventListener('mousedown',  () => { if (!elem.disabled) elem.style.transform = 'scale(0.97)'; });
    elem.addEventListener('mouseup',    () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});