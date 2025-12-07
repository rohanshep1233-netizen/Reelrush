// ===============================================
// FINAL reels.js — SIRF DESCRIPTION ADD KIYA
// Auto Play/Pause + Thumbnail + Instagram Ratio + BEST UI + DESCRIPTION
// ===============================================

const myReels = [
    {
        link: "https://www.instagram.com/reel/DRbFmm8CPVf/",
        description: "High-energy fashion reel with trending transition"
    },
    {
        link: "https://www.instagram.com/reel/DRrYc7qjc7t/",
        description: "Food reel with smooth cuts & trending sound"
    },
    {
        link: "https://www.instagram.com/reel/DQ0-2zvDDoi/",
        description: "Client testimonial reel – went viral in 24 hours"
    },
    {
        link: "https://www.instagram.com/reel/DRrYc7qjc7t/",
        description: "Another trending reel with perfect sync"
    },
    {
        link: "https://www.instagram.com/reel/DQ0-2zvDDoi/",
        description: "Premium client project – cinematic edit"
    }
    // aur jitne chahiye add karte jao
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");

    myReels.forEach(item => {
        const reelDiv = document.createElement("div");
        reelDiv.className = "reel-card";

        reelDiv.innerHTML = `
            <div class="reel-container">
                <iframe 
                    class="instagram-embed"
                    src="${item.link}embed/captioned/"
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
            <!-- YE DESCRIPTION ADD KI HAI -->
            <p class="reel-description">${item.description}</p>
        `;

        grid.appendChild(reelDiv);
    });

    // Auto Play/Pause on Scroll (same as before)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const iframe = entry.target.querySelector("iframe");
            if (entry.isIntersecting) {
                iframe.src = iframe.src;
            } else {
                iframe.src = iframe.src;
            }
        });
    }, { threshold: 0.7 });

    document.querySelectorAll(".reel-container").forEach(container => {
        observer.observe(container);
    });
});
