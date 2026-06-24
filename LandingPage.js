// 1. COUNTER ANIMATION FOR STATS
function animateCounter(element, target, suffix) {
    const duration = 2000;
    const step = 16;
    const totalSteps = duration / step;
    let current = 0;

    const finalValues = {
        12400: '12.4K',
        1200000: '1.2M',
        99.9: '99.9%',
        0: '0ms'
    };

    const timer = setInterval(() => {
        current++;
        const progress = current / totalSteps;
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;

        if (target >= 1000000) {
            element.textContent = (value / 1000000).toFixed(1) + 'M';
        } else if (target >= 1000) {
            element.textContent = (value / 1000).toFixed(1) + 'K';
        } else if (suffix === '%') {
            element.textContent = value.toFixed(1) + '%';
        } else {
            element.textContent = Math.round(value) + suffix;
        }

        if (current >= totalSteps) {
            clearInterval(timer);
            element.textContent = finalValues[target] ?? (target + suffix);
        }
    }, step);
}
const statsData = [
    { target: 12400,   suffix: ''   },
    { target: 1200000, suffix: ''   },
    { target: 99.9,    suffix: '%'  },
    { target: 0,       suffix: 'ms' }
];
const statsSection = document.getElementById('stats-section');
let statsAnimated = false;
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                const statEls = statsSection.querySelectorAll('.font-headline-xl');
                statEls.forEach((el, i) => {
                    if (statsData[i]) animateCounter(el, statsData[i].target, statsData[i].suffix);
                });
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}
// 2. MOBILE BOTTOM NAVIGATION
const bottomNav = document.createElement('nav');
bottomNav.className = 'fixed bottom-0 left-0 w-full z-50 md:hidden bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 flex justify-around items-center h-20 px-4';
bottomNav.innerHTML = `
    <a href="LandingPage.html" class="flex flex-col items-center gap-1 text-on-secondary-container">
        <span class="material-symbols-outlined">home</span>
        <span class="text-label-sm font-label-sm">Home</span>
    </a>
    <a href="ExploreRest.html" class="flex flex-col items-center gap-1 text-on-secondary-container">
        <span class="material-symbols-outlined">search</span>
        <span class="text-label-sm font-label-sm">Explore</span>
    </a>
    <a href="HowWork.html" class="flex flex-col items-center gap-1 text-on-secondary-container">
        <span class="material-symbols-outlined">info</span>
        <span class="text-label-sm font-label-sm">How it Works</span>
    </a>
    <a href="SignIn.html" class="flex flex-col items-center gap-1 text-on-secondary-container">
        <span class="material-symbols-outlined">account_balance_wallet</span>
        <span class="text-label-sm font-label-sm">Wallet</span>
    </a>
`;
document.body.appendChild(bottomNav);
const currentPage = window.location.pathname.split('/').pop() || 'LandingPage.html';
bottomNav.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-primary');
        link.classList.remove('text-on-secondary-container');
        const icon = link.querySelector('.material-symbols-outlined');
        if (icon) icon.style.fontVariationSettings = "'FILL' 1";
    }
});
// 3. HEADER SCROLL BEHAVIOR
const header = document.querySelector('header');
let lastScroll = 0;
if (header) {
    header.style.transition = 'transform 0.3s ease, background 0.3s ease';

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 80) {
            header.classList.add('shadow-md');
            header.style.background = 'rgba(248, 249, 255, 0.95)';
        } else {
            header.classList.remove('shadow-md');
            header.style.background = 'rgba(248, 249, 255, 0.7)';
        }

        header.style.transform = (currentScroll > lastScroll && currentScroll > 200)
            ? 'translateY(-100%)'
            : 'translateY(0)';

        lastScroll = currentScroll;
    });
}
// 4. ORACLE SCORE LIVE PULSE
document.querySelectorAll('button, a').forEach(elem => {
    if (elem.classList.contains('active:scale-95')) return;
    elem.addEventListener('mousedown', () => {
        elem.style.transform = 'scale(0.95)';
    });
    elem.addEventListener('mouseup', () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});
// 5. TX HASH LIVE UPDATE
const txElement = document.getElementById('tx-hash');
if (txElement) {
    const generateHash = () => {
        const chars = '0123456789abcdef';
        let hash = '0x';
        for (let i = 0; i < 4; i++) hash += chars[Math.floor(Math.random() * chars.length)];
        hash += '...';
        for (let i = 0; i < 3; i++) hash += chars[Math.floor(Math.random() * chars.length)];
        return hash;
    };

    setInterval(() => {
        txElement.style.transition = 'opacity 0.3s';
        txElement.style.opacity = '0';
        setTimeout(() => {
            txElement.textContent = 'TX: ' + generateHash();
            txElement.style.opacity = '1';
        }, 300);
    }, 4000);
}
// 6. MICRO-INTERACTIONS
document.querySelectorAll('button, a').forEach(elem => {
    elem.addEventListener('mousedown', () => {
        if (!elem.disabled) elem.style.transform = 'scale(0.95)';
    });
    elem.addEventListener('mouseup', () => elem.style.transform = '');
    elem.addEventListener('mouseleave', () => elem.style.transform = '');
});
// 7. GLASS CARDS FADE-IN ON SCROLL
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-card').forEach(card => {
    if (card.classList.contains('opacity-100')) return;
    card.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-out');
    cardObserver.observe(card);
});