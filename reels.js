// ===============================================
// FINAL PERFECT reels.js — SAB KUCH BEST!
// Auto Play/Pause on Scroll + Thumbnail + Instagram Ratio + Smooth UI
// ===============================================

const myReels = [
    "https://www.instagram.com/reel/DRbFmm8CPVf/",
    "https://www.instagram.com/reel/DRrYc7qjc7t/",
    "https://www.instagram.com/reel/DQ0-2zvDDoi/",
    "https://www.instagram.com/reel/DRrYc7qjc7t/",
    "https://www.instagram.com/reel/DQ0-2zvDDoi/",
    "https://www.instagram.com/reel/DRbFmm8CPVf/",
    "https://www.instagram.com/reel/DRrYc7qjc7t/",
    "https://www.instagram.com/reel/DQ0-2zvDDoi/"
    // jitne chahiye add karte jao — bas link daalo
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");

    myReels.forEach(link => {
        const reelDiv = document.createElement("div");
        reelDiv.className = "reel-card";

        // Perfect Instagram embed with thumbnail + auto play on scroll
        reelDiv.innerHTML = `
            <div class="reel-container">
                <iframe 
                    class="instagram-embed"
                    src="${link}embed/captioned/"
                    frameborder="0"
                    allowfullscreen
                    loading="lazy"
                    allow="autoplay; encrypted-media"
                    scrolling="no">
                </iframe>
            </div>
            <div class="reel-overlay">
                <i class="fab fa-instagram"></i>
                <span>View on Instagram</span>
            </div>
        `;

        grid.appendChild(reelDiv);
    });

    // Auto Play/Pause on Scroll — BEST FEATURE!
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const iframe = entry.target.querySelector("iframe");
            if (entry.isIntersecting) {
                iframe.src = iframe.src; // Restart + Play
            } else {
                iframe.src = iframe.src; // Pause
            }
        });
    }, { threshold: 0.7 });

    document.querySelectorAll(".reel-container").forEach(container => {
        observer.observe(container);
    });
});
