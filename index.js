// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger icon
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});

// Transformation section
const transformations = [
    {
        beforeImage: 'path/to/before1.jpg',
        afterImage: 'path/to/after1.jpg',
        name: 'John Doe',
        duration: '6 months',
        description: 'Lost 30 pounds and gained muscle mass'
    },
    // Add more transformation data here
];

function createTransformationCard(transformation) {
    return `
        <div class="transformation-card">
            <div class="transformation-images">
                <img src="${transformation.beforeImage}" alt="Before transformation" class="before-image">
                <img src="${transformation.afterImage}" alt="After transformation" class="after-image">
            </div>
            <div class="transformation-info">
                <h3>${transformation.name}</h3>
                <p class="duration">${transformation.duration}</p>
                <p class="description">${transformation.description}</p>
            </div>
        </div>
    `;
}

// Populate transformation section
const transformationGrid = document.querySelector('.transformation-grid');
if (transformationGrid) {
    transformationGrid.innerHTML = transformations.map(createTransformationCard).join('');
}

// Testimonials slider
const testimonials = [
    {
        name: 'Sarah Johnson',
        image: 'path/to/testimonial1.jpg',
        text: 'Amazing gym with great trainers! I\'ve achieved results I never thought possible.',
        rating: 5
    },
    // Add more testimonial data here
];

let currentTestimonial = 0;

function createTestimonialSlide(testimonial) {
    return `
        <div class="testimonial-slide">
            <div class="testimonial-content">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-rating">
                    ${createRatingStars(testimonial.rating)}
                </div>
                <h4 class="testimonial-name">${testimonial.name}</h4>
            </div>
        </div>
    `;
}

function createRatingStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function updateTestimonialSlider() {
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.innerHTML = createTestimonialSlide(testimonials[currentTestimonial]);
    }
}

// Initialize testimonial slider
updateTestimonialSlider();

// Auto-advance testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonialSlider();
}, 5000);

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Simulate form submission
            console.log('Form submitted:', data);
            // Here you would typically send the data to your server
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Error sending message. Please try again.', 'error');
        }
    });
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const increment = target / (duration / 16); // Update every 16ms (60fps)
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        try {
            // Simulate newsletter subscription
            console.log('Newsletter subscription:', email);
            // Here you would typically send the data to your server
            
            showNotification('Successfully subscribed to newsletter!', 'success');
            newsletterForm.reset();
        } catch (error) {
            showNotification('Error subscribing to newsletter. Please try again.', 'error');
        }
    });
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Add CSS classes for animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.program-card, .plan-card, .transformation-card');
    elements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
});

// Membership plan selection
document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = e.target.closest('.plan-card').querySelector('h3').textContent;
        showNotification(`Selected ${planName} plan. Redirecting to registration...`, 'success');
        // Here you would typically redirect to a registration page
    });
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createTransformationCard,
        createTestimonialSlide,
        showNotification,
        animateCounters
    };
}