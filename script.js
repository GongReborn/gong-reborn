// ============================================
// GONG REBORN PREMIUM - JAVASCRIPT
// ============================================

// Product Data
const products = {
    batari: {
        id: 1,
        name: 'BATARI by GONGREBORN',
        subtitle: 'The Royal Heritage',
        price: 'Rp 85.000',
        image: 'produk-batari.jpg',
        badge: 'BEST SELLER',
        description: 'Batari by GongReborn adalah persembahan istimewa yang menggabungkan keanggunan ratu dengan tradisi Jawa. Dibuat dari tembakau pilihan berkualitas tertinggi dengan sentuhan kemewahan merah maroon yang memukau. Setiap helai dirancang untuk memberikan pengalaman merokok yang tak terlupakan.',
        nicotine: '1.2 mg',
        tar: '12 mg',
        flavor: 'Classic Virginia dengan hints of Spice',
        features: [
            'Tembakau Virginia Premium Grade A',
            'Filter charcoal activated',
            'Kemasan eksklusif warna merah maroon',
            'Aroma cengkeh dan kayu manis alami'
        ]
    },
    kuning: {
        id: 2,
        name: 'GONGREBORN KUNING',
        subtitle: 'The Golden Tradition',
        price: 'Rp 75.000',
        image: 'produk-kuning.jpg',
        badge: 'POPULAR',
        description: 'GongReborn Kuning menghadirkan kejayaan tradisi Jawa dalam kemasan emas yang mempesona. Dibuat dari campuran tembakau eksotis yang matang sempurna, menghasilkan karakter yang kuat namun berkelas. Simbol kekayaan dan kemakmuran dalam setiap helai.',
        nicotine: '1.4 mg',
        tar: '14 mg',
        flavor: 'Bold Blend dengan notes of Honey',
        features: [
            'Blend tembakau eksotis dari Jawa dan Sumatera',
            'Filter triple-layer technology',
            'Kemasan emas premium dengan ukiran wayang',
            'Rasa bold dengan aftertaste smooth'
        ]
    },
    premium: {
        id: 3,
        name: 'GONGREBORN PREMIUM',
        subtitle: 'The Ultimate Elegance',
        price: 'Rp 95.000',
        image: 'produk-premium.jpg',
        badge: 'PREMIUM',
        description: 'GongReborn Premium adalah puncak dari keanggunan dan kemewahan. Dengan kemasan hitam matte yang elegan dan detail emas yang melimpah, produk ini ditujukan untuk mereka yang menghargai kualitas tertinggi dan gaya hidup eksklusif.',
        nicotine: '1.0 mg',
        tar: '10 mg',
        flavor: 'Rich Complex dengan notes of Dark Chocolate & Coffee',
        features: [
            'Tembakau super premium aged 5 years',
            'Filter micro-perforated gold tip',
            'Kemasan hitam matte dengan aksen emas',
            'Rasa rich dengan kompleksitas tinggi'
        ]
    }
};

// ============================================
// NAVIGATION
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu on link click
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// PARTICLES
// ============================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// ============================================
// PRODUCT MODAL
// ============================================

const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');

function openModal(productKey) {
    const product = products[productKey];
    if (!product) return;
    
    const featuresList = product.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <div class="modal-badge">
                <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                ${product.badge}
            </div>
            <h3 class="modal-title">${product.name}</h3>
            <p class="modal-subtitle">${product.subtitle}</p>
            <p class="modal-description">${product.description}</p>
            
            <div class="modal-specs">
                <div class="spec-item">
                    <p class="spec-label">NIKOTIN</p>
                    <p class="spec-value">${product.nicotine}</p>
                </div>
                <div class="spec-item">
                    <p class="spec-label">TAR</p>
                    <p class="spec-value">${product.tar}</p>
                </div>
                <div class="spec-item">
                    <p class="spec-label">RASA</p>
                    <p class="spec-value" style="font-size: 0.75rem;">${product.flavor}</p>
                </div>
            </div>
            
            <div class="modal-features">
                <h4 class="features-title">FITUR UNGGULAN</h4>
                <ul class="features-list">
                    ${featuresList}
                </ul>
            </div>
            
            <div class="modal-footer">
                <p class="modal-price-label">Harga per bungkus</p>
                <p class="modal-price">${product.price}</p>
                <a href="https://wa.me/6287848925392?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}" 
                   target="_blank" class="modal-cta">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    PESAN SEKARANG
                </a>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitText = submitBtn.querySelector('.submit-text');
    const submitLoader = submitBtn.querySelector('.submit-loader');
    
    // Show loading state
    submitText.style.display = 'none';
    submitLoader.style.display = 'flex';
    submitBtn.disabled = true;
    
    try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds and show form again
            setTimeout(() => {
                formSuccess.style.display = 'none';
                contactForm.style.display = 'block';
                submitText.style.display = 'block';
                submitLoader.style.display = 'none';
                submitBtn.disabled = false;
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        
        submitText.style.display = 'block';
        submitLoader.style.display = 'none';
        submitBtn.disabled = false;
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .section-header, .contact-form-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Add animate-in class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Stagger animation for product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
});

// ============================================
// TAWK.TO LIVE CHAT
// ============================================

// Tawk.to integration
(function() {
    var s1 = document.createElement('script');
    var s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67ceb7c60e10f7190b5c6e2e/1ilv6ovn2';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// ============================================
// CONSOLE LOG
// ============================================

console.log('%cGONG REBORN PREMIUM', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
console.log('%cKeanggunan Warisan Jawa dalam Setiap Helai', 'color: #888; font-size: 14px;');
