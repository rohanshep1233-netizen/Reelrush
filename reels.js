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

        // YE FIXED TRICK HAI — SAB REELS KA THUMBNAIL DIKHEGA
        const reelId = item.link.split("/reel/")[1].split("/")[0];
        const thumbnailUrl = `https://www.instagram.com/reel/${reelId}/media/?size=l`;

        reelDiv.innerHTML = `
            <div class="reel-wrapper">
                <img src="${thumbnailUrl}" class="reel-thumbnail" alt="Reel thumbnail" onerror="this.src='fallback-thumbnail.jpg';"> <!-- Fallback agar thumbnail block ho -->
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
                <iframe 
                    class="instagram-embed" 
                    src="${item.link}embed/" 
                    frameborder="0" 
                    allowfullscreen 
                    loading="lazy">
                </iframe>
            </div>
            <p class="reel-description">${item.description}</p>
        `;

        // Click pe play
        reelDiv.addEventListener("click", () => {
            const iframe = reelDiv.querySelector(".instagram-embed");
            const thumbnail = reelDiv.querySelector(".reel-thumbnail");
            const playBtn = reelDiv.querySelector(".play-button");
            
            thumbnail.style.display = "none";
            playBtn.style.display = "none";
            iframe.style.opacity = "1";
        });

        grid.appendChild(reelDiv);
    });
});
