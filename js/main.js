// filepath: c:\Users\kenza\Desktop\portfolio\js\main.js
// Initialisation GSAP
gsap.registerPlugin(ScrollTrigger);

// Variables globales
let cursor = document.querySelector('.cursor');
let cursorFollower = document.querySelector('.cursor-follower');
let isLoaded = false;

// Classe principale pour gérer le portfolio
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoader();
        this.setupCursor();
        this.setupNavigation();
        this.setupAnimations();
        this.setupScrollEffects();
        this.setupCounters();
        this.setupParallax();
    }

    // Loader d'entrée
    setupLoader() {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        
        // Animation de disparition du loader après 3 secondes
        setTimeout(() => {
            gsap.to(loaderWrapper, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    loaderWrapper.style.display = 'none';
                    this.revealContent();
                    isLoaded = true;
                }
            });
        }, 3000);
    }

    // Révélation du contenu principal
    revealContent() {
        // Animation du titre principal
        gsap.from('.title-line', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Animation de la description
        gsap.from('.hero-description', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.8,
            ease: "power2.out"
        });

        // Animation des boutons
        gsap.from('.hero-buttons .btn', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Animation de la fenêtre de code
        gsap.from('.code-window', {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            delay: 1.2,
            ease: "back.out(1.7)"
        });

        // Animation des lignes de code
        gsap.from('.code-line', {
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: 1.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    }

    // Cursor personnalisé
    setupCursor() {
        if (window.innerWidth > 768) {
            document.addEventListener('mousemove', (e) => {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1
                });
                
                gsap.to(cursorFollower, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.3
                });
            });

            // Effets hover sur les éléments interactifs
            const interactiveElements = document.querySelectorAll('a, button, .work-item');
            
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(cursor, { scale: 1.5, duration: 0.3 });
                    gsap.to(cursorFollower, { scale: 1.5, duration: 0.3 });
                });
                
                el.addEventListener('mouseleave', () => {
                    gsap.to(cursor, { scale: 1, duration: 0.3 });
                    gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
                });
            });
        }
    }

    // Navigation
    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        // Effet de scroll sur la navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Navigation active
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Retirer la classe active de tous les liens
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Ajouter la classe active au lien cliqué
                link.classList.add('active');
                
                // Scroll vers la section
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    gsap.to(window, {
                        scrollTo: targetSection,
                        duration: 1,
                        ease: "power2.inOut"
                    });
                }
            });
        });

        // Menu mobile (toggle)
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }
    }

    // Animations au scroll
    setupScrollEffects() {
        // Animation des éléments au scroll
        gsap.utils.toArray('.fade-in-up').forEach(element => {
            gsap.from(element, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Animation des stats
        gsap.from('.stat-item', {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.stats-section',
                start: "top 80%"
            }
        });

        // Animation des projets
        gsap.from('.work-item', {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.work-grid',
                start: "top 80%"
            }
        });
    }

    // Compteurs animés
    setupCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(counter, {
                        innerText: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerText: 1 },
                        onUpdate: function() {
                            counter.innerText = Math.ceil(counter.innerText);
                        }
                    });
                }
            });
        });
    }

    // Effets parallax
    setupParallax() {
        // Parallax sur les formes flottantes
        gsap.utils.toArray('.shape').forEach(shape => {
            gsap.to(shape, {
                y: -100,
                rotation: 360,
                duration: 10,
                repeat: -1,
                ease: "none",
                scrollTrigger: {
                    trigger: shape,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Parallax sur la fenêtre de code
        gsap.to('.code-window', {
            y: -50,
            scrollTrigger: {
                trigger: '.hero-section',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // Animation du typing pour la fenêtre de code
    setupTypingAnimation() {
        const codeLines = document.querySelectorAll('.code-text');
        
        codeLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            
            gsap.to(line, {
                duration: text.length * 0.05,
                delay: index * 0.5 + 2,
                ease: "none",
                onUpdate: function() {
                    const progress = this.progress();
                    const currentLength = Math.round(progress * text.length);
                    line.textContent = text.substring(0, currentLength);
                }
            });
        });
    }

    // Animations spéciales pour les projets
    setupWorkAnimations() {
        const workItems = document.querySelectorAll('.work-item');
        
        workItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }
}

// Fonctions utilitaires
class Utils {
    // Smooth scroll pour les ancres
    static smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Détection du viewport
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Throttle pour optimiser les performances
    static throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Debounce pour les événements
    static debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }
}

// Performance et optimisation
class Performance {
    static init() {
        // Préchargement des images importantes
        this.preloadImages();
        
        // Optimisation du scroll
        this.optimizeScroll();
        
        // Lazy loading pour les éléments non critiques
        this.setupLazyLoading();
    }

    static preloadImages() {
        const images = [
            // Ajoutez ici les URLs des images importantes à précharger
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    static optimizeScroll() {
        let ticking = false;
        
        function updateScrollEffects() {
            // Ici vous pouvez ajouter des effets de scroll optimisés
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }

    static setupLazyLoading() {
        // Implémentation du lazy loading pour les images et vidéos
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
}

// Gestion des erreurs
window.addEventListener('error', (e) => {
    console.error('Erreur détectée:', e.error);
});

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des classes principales
    new Portfolio();
    Utils.smoothScroll();
    Performance.init();
    
    console.log('Portfolio initialisé avec succès ! 🚀');
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', Utils.debounce(() => {
    // Recalcul des animations si nécessaire
    ScrollTrigger.refresh();
}, 250));

// Optimisation des performances pour mobile
if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.classList.add('mobile');
    // Désactiver certaines animations lourdes sur mobile
    gsap.set('.floating-shapes', { display: 'none' });
}