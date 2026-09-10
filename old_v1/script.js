// ============================================
// INITIALIZATION & DOM ELEMENTS
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');
const particleBg = document.getElementById('particle-bg');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// ============================================
// PARTICLES BACKGROUND
// ============================================

function createParticles() {
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const delay = Math.random() * 20;
        const duration = Math.random() * 10 + 15;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`;
        particle.style.animation = `particleFloat ${duration}s linear ${delay}s infinite`;
        
        particleBg.appendChild(particle);
    }
}

createParticles();

// ============================================
// HAMBURGER MENU TOGGLE
// ============================================

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// DARK MODE TOGGLE
// ============================================

const darkModeKey = 'portfolio-dark-mode';

function initDarkMode() {
    const isDarkMode = localStorage.getItem(darkModeKey) === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }
}

function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem(darkModeKey, isDark);
    updateThemeIcon(isDark);
});

initDarkMode();

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just # or if hamburger is being clicked
        if (href === '#' || this.id === 'hamburger') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

function updateActiveNavLink() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// ============================================
// TYPING ANIMATION
// ============================================

const typingText = document.querySelector('.typing-text');
if (typingText) {
    const phrases = [
        'Full-Stack Developer',
        'AI & Machine Learning Specialist',
        'Full-Stack Web Developer',
        'Computer Vision Expert',
        'End-to-End Solution Builder'
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function type() {
        const phrase = phrases[currentPhrase];
        
        if (!isDeleting) {
            if (currentChar < phrase.length) {
                typingText.textContent += phrase[currentChar];
                currentChar++;
                setTimeout(type, 50);
            } else {
                // Start deleting after 3 seconds
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 3000);
            }
        } else {
            if (currentChar > 0) {
                typingText.textContent = phrase.substring(0, currentChar - 1);
                currentChar--;
                setTimeout(type, 30);
            } else {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                setTimeout(type, 500);
            }
        }
    }
    
    // Start typing after page loads
    window.addEventListener('load', () => {
        setTimeout(type, 500);
    });
}

// ============================================
// PROJECT FILTERING
// ============================================

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ============================================
// FORM HANDLING
// ============================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Show success message
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent Successfully!';
        submitBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        
        // Reset form
        contactForm.reset();
        
        // Restore button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// ============================================
// STAT COUNTER ANIMATION
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        // Get the value from text content (we don't use data-target)
        const textContent = counter.textContent.trim();
        let target = 0;
        
        if (textContent.includes('+')) {
            target = parseInt(textContent);
        } else if (textContent.includes('%')) {
            target = parseInt(textContent);
        } else {
            target = parseInt(textContent);
        }
        
        if (!isNaN(target) && target > 0) {
            const increment = Math.ceil(target / 50);
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (current > target) current = target;
                    
                    let displayValue = current;
                    if (textContent.includes('+')) {
                        displayValue = current + '+';
                    } else if (textContent.includes('%')) {
                        displayValue = current + '%';
                    }
                    
                    counter.textContent = displayValue;
                    requestAnimationFrame(updateCounter);
                }
            };
            
            updateCounter();
        }
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.getElementById('about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    aboutObserver.observe(aboutSection);
}

// ============================================
// SMOOTH ANIMATIONS ON LOAD
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// PERFORMANCE: Debounce scroll events
// ============================================

function debounce(func, wait) {
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

const debouncedScroll = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// ACCESSIBILITY: Keyboard navigation
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ============================================
// CURSOR EFFECT (Optional Enhancement)
// ============================================

document.addEventListener('mousemove', (e) => {
    // You can add custom cursor effects here if needed
});

// ============================================
// INITIAL SETUP
// ============================================

// Set initial active nav link
updateActiveNavLink();

console.log('✨ Portfolio loaded successfully!');
