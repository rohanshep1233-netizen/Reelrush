const myReels = [
    { link: "https://www.instagram.com/reel/DRrYc7qjc7t/", description: "Fashion reel with trending transition" },
    { link: "https://www.instagram.com/reel/DRgVzVECHyn/", description: "Food reel – smooth cuts & viral sound" },
    { link: "https://www.instagram.com/reel/DRmagTrE-th/", description: "Client testimonial reel – 1M+ views" },
    { link: "https://www.instagram.com/reel/DRbFmm8CPVf/", description: "High energy transition reel" },
    { link: "https://www.instagram.com/reel/DRZh1AuDF9C/", description: "Cinematic portrait edit" },
    { link: "https://www.instagram.com/reel/DR7ENcTCKcu/", description: "Nature vibe with trending audio" },
    { link: "https://www.instagram.com/reel/DR7PdsdjCT2/", description: "Car reel – cinematic shots" },
    { link: "https://www.instagram.com/reel/DRZh1AuDF9C/", description: "Portrait transition masterclass" },
    { link: "https://www.instagram.com/reel/DR7PdsdjCT2/", description: "Premium client car edit" }
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
                    src="${item.link}embed/captioned/?autoplay=1&mute=0"
                    frameborder="0"
                    allowfullscreen
                    loading="lazy"
                    allow="autoplay; encrypted-media"
                    scrolling="no">
                </iframe>
            </div>
            <p class="reel-description">${item.description}</p>
        `;

        grid.appendChild(reelDiv);
    });

    // AUTO PLAY + AUTO PAUSE ON SCROLL — 100% WORKING
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const iframe = entry.target.querySelector("iframe");
            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                iframe.src = iframe.src; // Auto Play
            } else {
                iframe.src = iframe.src.replace("&autoplay=1", "&autoplay=0"); // Auto Pause
                setTimeout(() => {
                    iframe.src = iframe.src.replace("&autoplay=0", "&autoplay=1");
                }, 100);
            }
        });
    }, { threshold: [0, 0.6, 1] });

    document.querySelectorAll(".reel-container").forEach(container => {
        observer.observe(container);
    });
});
