document.querySelector('.resume-buttons').addEventListener('click', function(e) {
    e.preventDefault();
    const msg = document.getElementById('resumeMessage');
    
    // Set message text
    msg.textContent = "Resume is not added";
    msg.style.display = "block";
    msg.style.opacity = 1;

    // Hide message after 10 seconds
    setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => {
            msg.style.display = "none";
        }, 400); // wait for fade out to complete
    }, 10000); // 10 seconds
});


// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-item, .certification-item, .highlight-item, .experience-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Observe contact items separately for animation
document.querySelectorAll('.contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Enhanced button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Typing effect for home tagline
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
// window.addEventListener('load', () => {
//     const tagline = document.querySelector('.home-tagline');
//     const originalText = tagline.textContent;
    
//     // Add a cursor effect
//     tagline.style.borderRight = '2px solid rgba(255, 255, 255, 0.8)';
//     tagline.style.animation = 'blink 1s infinite';
    
//     // Start typing effect after a short delay
//     setTimeout(() => {
//         typeWriter(tagline, originalText, 80);
//     }, 1000);
// });

// Add CSS for cursor blink animation
// const style = document.createElement('style');
// style.textContent = `
//     @keyframes blink {
//         0%, 50% { border-color: rgba(255, 255, 255, 0.8); }
//         51%, 100% { border-color: transparent; }
//     }
    
//     .notification-content {
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//     }
    
//     .notification-close {
//         background: none;
//         border: none;
//         color: white;
//         font-size: 1.2rem;
//         cursor: pointer;
//         margin-left: auto;
//         padding: 0;
//         width: 20px;
//         height: 20px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
    
//     .nav-link.active {
//         color: var(--secondary-color);
//     }
    
//     .nav-link.active::after {
//         width: 100%;
//     }
// `;
// document.head.appendChild(style);

// Add click effect to skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add a pulse effect
        this.style.animation = 'pulse 0.6s ease';
        
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Add pulse animation
const pulseAnimation = document.createElement('style');
pulseAnimation.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(pulseAnimation);

console.log('Portfolio website loaded successfully! 🚀');
