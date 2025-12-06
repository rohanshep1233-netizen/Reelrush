// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
document.getElementById('dark-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('#dark-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animation on Scroll (for cards, reels, reviews)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .reel, .review, .package').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});
// === REVIEWS KO EK LINE SE ON/OFF KARNE KA MAGIC ===
document.addEventListener("DOMContentLoaded", () => {
    const showReviewsComment = document.body.innerHTML.includes("SHOW_REVIEWS");

    if (!showReviewsComment) {
        const reviewsSection = document.getElementById("reviews");
        if (reviewsSection) {
            reviewsSection.style.display = "none";  // reviews gayab
            // Navbar se bhi "Reviews" link hata do (optional)
            const reviewsLink = document.querySelector('a[href="#reviews"]');
            if (reviewsLink) reviewsLink.style.display = "none";
        }
    }
});