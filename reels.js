const myReels = [
    { link: "https://www.instagram.com/reel/DRrYc7qjc7t/", description: "Basic Editing Example" },
    { link: "https://www.instagram.com/reel/DRgVzVECHyn/", description: "Basic Editing Example" },
    { link: "https://www.instagram.com/reel/DRmagTrE-th/", description: "Basic Editing Example" },
    { link: "https://www.instagram.com/reel/DRbFmm8CPVf/", description: "Basic Editing Example" },
    { link: "https://www.instagram.com/reel/DRZh1AuDF9C/", description: "Basic Editing Example" },
    { link: "https://www.instagram.com/reel/DR7ENcTCKcu/", description: "Basic Editing Example" },
    // baaki add kar lena
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");

    myReels.forEach(item => {
        const reelDiv = document.createElement("div");
        reelDiv.className = "reel-card";

        // Ye trick abhi bhi chal rahi hai (2025 Dec tak tested)
        const reelId = item.link.split("/reel/")[1]?.split("/")[0] || item.link.split("/p/")[1]?.split("/")[0];

        reelDiv.innerHTML = `
            <div class="reel-wrapper">
                <!-- Real thumbnail (agar load na ho to black screen + play icon) -->
                <img 
                    src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-15/${reelId}_n.jpg?stp=dst-jpg_s640x640&_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=abc"
                    class="reel-thumb" 
                    alt="Reel"
                    loading="lazy"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >
                
                <!-- Black fallback with Play icon -->
                <div class="black-fallback">
                    <span class="play-icon">Play</span>
                </div>

                <div class="play-btn">Play</div>

                <!-- Instagram embed without profile bar & white border (2025 working trick) -->
                <iframe 
                    src="https://www.instagram.com/reel/${reelId}/embed/?hidecaption=1" 
                    class="ig-embed" 
                    loading="lazy" 
                    allowfullscreen
                    frameborder="0">
                </iframe>
            </div>
            <p class="reel-desc">${item.description}</p>
        `;

        reelDiv.onclick = () => {
            reelDiv.querySelector(".reel-thumb").style.opacity = 0;
            reelDiv.querySelector(".black-fallback").style.opacity = 0;
            reelDiv.querySelector(".play-btn").style.opacity = 0;
            reelDiv.querySelector(".ig-embed").style.opacity = 1;
        };

        grid.appendChild(reelDiv);
    });
});
