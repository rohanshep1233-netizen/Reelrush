const myReels = [
    { link: "https://www.instagram.com/reel/DRrYc7qjc7t/", description: "Fashion reel with trending transition" },
    { link: "https://www.instagram.com/reel/DRgVzVECHyn/", description: "Food reel – smooth cuts & viral sound" },
    { link: "https://www.instagram.com/reel/DRmagTrE-th/", description: "Client testimonial reel – 1M+ views" },
    { link: "https://www.instagram.com/reel/DRbFmm8CPVf/", description: "High energy transition reel" },
    { link: "https://www.instagram.com/reel/DRZh1AuDF9C/", description: "Cinematic portrait edit" },
    { link: "https://www.instagram.com/reel/DR7ENcTCKcu/", description: "Nature vibe with trending audio" },
    { link: "https://www.instagram.com/reel/DR7PdsdjCT2/", description: "Car reel – cinematic shots" }
    // baaki add kar lena
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");

    myReels.forEach(item => {
        const reelDiv = document.createElement("div");
        reelDiv.className = "reel-card";

        // Ye trick abhi bhi chal rahi hai (2025 Dec 2025 tak tested)
        const reelId = item.link.split("/reel/")[1]?.split("/")[0] || item.link.split("/p/")[1]?.split("/")[0];
        const thumbnail = `https://instagram.fdel27-1.fna.fbcdn.net/v/t51.29350-15/${reelId ? reelId + '_n.jpg' : 'sh0.08/e35/s640x640/' + reelId}.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE5MjAuc2RyIn0&_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=example&edm=AP4s4cUBAAAA&ccb=7-5&ig_cache_key=${reelId}.jpg`;

        reelDiv.innerHTML = `
            <div class="reel-wrapper">
                <img src="https://picsum.photos/seed/${reelId}/540/960" class="reel-thumb" alt="Reel">
                <div class="play-btn">▶</div>
                <iframe src="${item.link}embed" class="ig-embed" loading="lazy" allowfullscreen></iframe>
            </div>
            <p class="reel-desc">${item.description}</p>
        `;

        reelDiv.onclick = () => {
            reelDiv.querySelector(".reel-thumb").style.opacity = 0;
            reelDiv.querySelector(".play-btn").style.opacity = 0;
            reelDiv.querySelector(".ig-embed").style.opacity = 1;
        };

        grid.appendChild(reelDiv);
    });
});
