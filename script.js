// ===================================
// DOM Elements
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinksContainer = document.getElementById('navLinks');
const sections = document.querySelectorAll('section[id]');

// ===================================
// Scroll Navigation Highlight
// ===================================
function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ===================================
// Mobile Menu Toggle
// ===================================
mobileMenuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');

    if (navLinksContainer.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===================================
// Smooth Scroll
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Reveal Animation
// ===================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// ===================================
// Typing Effect for Hero Subtitle (Optional Enhancement)
// ===================================
function typeWriterEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(type, 500);
}

// ===================================
// Initialize Animations with Intersection Observer
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));

    // Optional: Enable typing effect (comment out if not desired)
    // typeWriterEffect();
});

// ===================================
// Skill Tags Animation on Hover
// ===================================
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===================================
// Project Cards 3D Tilt Effect (Advanced)
// ===================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// Achievement Numbers Counter Animation
// ===================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Trigger counter animation when achievement section is visible
const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const numbers = entry.target.querySelectorAll('.achievement-number');

            numbers.forEach(numberEl => {
                const text = numberEl.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                animateCounter(numberEl, number, 2000);
            });
        }
    });
}, { threshold: 0.5 });

const achievementsSection = document.querySelector('#achievements');
if (achievementsSection) {
    achievementObserver.observe(achievementsSection);
}

// ===================================
// Event Listeners
// ===================================
window.addEventListener('scroll', () => {
    handleNavbarScroll();
    highlightActiveSection();
    revealOnScroll();
});

// Initial calls
handleNavbarScroll();
highlightActiveSection();
revealOnScroll();

// ===================================
// Prevent FOUC (Flash of Unstyled Content)
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================================
// Smooth Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class for any additional animations
    document.body.classList.add('loaded');
});

// ===================================
// Performance Optimization: Debounce Scroll
// ===================================
function debounce(func, wait = 10) {
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

// Apply debounce to scroll handler for better performance
const debouncedScroll = debounce(() => {
    handleNavbarScroll();
    highlightActiveSection();
    revealOnScroll();
}, 10);

window.removeEventListener('scroll', window.onscroll);
window.addEventListener('scroll', debouncedScroll);
