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

        const reelId = item.link.split("/reel/")[1]?.split("/")[0] || item.link.split("/p/")[1]?.split("/")[0];

        reelDiv.innerHTML = `
            <div class="reel-wrapper">
                <!-- Real thumbnail -->
                <img 
                    src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-15/${reelId}_n.jpg?stp=dst-jpg_s640x640"
                    class="reel-thumb" 
                    alt="Reel"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.classList.add('no-thumb');"
                >

                <!-- Sirf jab thumbnail fail ho tab bada Play icon -->
                <div class="big-play">Play</div>

                <!-- Chhota Play button (jab thumbnail ho) -->
                <div class="play-btn">Play</div>

                <!-- Embed without profile bar -->
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
            reelDiv.querySelector(".reel-thumb")?.remove();
            reelDiv.querySelector(".big-play")?.remove();
            reelDiv.querySelector(".play-btn")?.remove();
            reelDiv.querySelector(".ig-embed").style.opacity = 1;
        };

        grid.appendChild(reelDiv);
    });
});
