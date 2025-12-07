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
            <div class="reel-wrapper">
                <img src="${item.link}media/?size=l" class="reel-thumbnail" alt="Reel">
                <div class="play-icon">▶</div>
                <iframe class="instagram-embed" src="${item.link}embed/" frameborder="0" allowfullscreen loading="lazy"></iframe>
            </div>
            <p class="reel-description">${item.description}</p>
        `;

        // Click pe thumbnail hide + reel play
        reelDiv.addEventListener("click", () => {
            const thumbnail = reelDiv.querySelector(".reel-thumbnail");
            const playIcon = reelDiv.querySelector(".play-icon");
            const iframe = reelDiv.querySelector(".instagram-embed");
            
            thumbnail.style.opacity = "0";
            playIcon.style.opacity = "0";
            iframe.style.opacity = "1";
        });

        grid.appendChild(reelDiv);
    });
});
