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

        // Direct Instagram embed — thumbnail + card + click pe full reel
        reelDiv.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="${item.link}" data-instgrm-version="14" style="max-width:540px; width:100%; margin:20px auto;">
                <a href="${item.link}">Instagram</a>
            </blockquote>
            <p class="reel-description">${item.description}</p>
        `;

        grid.appendChild(reelDiv);
    });

    // Click pe full reel open karne ke liye (new window mein)
    document.querySelectorAll(".instagram-media a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            window.open(link.href, '_blank'); // Full reel new tab mein open
        });
    });
});
