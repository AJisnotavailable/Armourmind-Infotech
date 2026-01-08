document.addEventListener('DOMContentLoaded', () => {
    
    // --- MOUSE INTERACTION ---
    const html = document.documentElement;
    const grid = document.querySelector('.tech-grid');
    
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        html.style.setProperty('--x', mouseX + 'px');
        html.style.setProperty('--y', mouseY + 'px');
        
        const moveX = (window.innerWidth / 2 - mouseX) * 0.02;
        const moveY = (window.innerHeight / 2 - mouseY) * 0.02;

        if(grid) {
            grid.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        }
    });

    // --- SCROLL ANIMATION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- GLITCH EFFECT ---
    const glitchText = document.getElementById('glitch-text');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.textShadow = `
                ${Math.random() * 5 - 2.5}px ${Math.random() * 5 - 2.5}px 0 #ED8D8D,
                ${Math.random() * 5 - 2.5}px ${Math.random() * 5 - 2.5}px 0 #8D6262
            `;
            setTimeout(() => {
                glitchText.style.textShadow = '0 0 10px var(--accent-dim)';
            }, 100);
        }, 3000);
    }

    // --- PAGE TRANSITIONS ---
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('mailto') && link.target !== '_blank') {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});