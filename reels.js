// ===============================================
// REELRUSH PORTFOLIO - INSTAGRAM ONLY reels.js
// Local videos + thumbnail generator COMPLETELY removed
// ===============================================

const myReels = [
    // === INSTAGRAM REELS ONLY ===
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DRrYc7qjc7t/?igsh=cDM2MWVsdHljcW9",
        description: "Fashion brand campaign – 2M+ views in 24 hours"
    },
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DRmagTrE-th/?igsh=ZGZ2cHZqeGx3OG9",
        description: "Food reel with trending transition – viral hit"
    },
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DQ0-2zvDDoi/?igsh=MTRrZmZjZGRoaG8wNg==",
        description: "Food reel with trending transition – viral hit"
    },
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DQ0-2zvDDoi/?igsh=MTRrZmZjZGRoaG8wNg==",
        description: "Food reel with trending transition – viral hit"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");
    if (!grid) return;

    myReels.forEach(item => {
        const card = document.createElement("div");
        card.className = "reel-card";

        // Only Instagram reels now
        card.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="${item.link}" data-instgrm-version="14">
                <a href="${item.link}">View on Instagram</a>
            </blockquote>
            <p class="reel-caption">${item.description}</p>
        `;

        grid.appendChild(card);
    });

    // Instagram embed script load only once
    if (!window.instgrm) {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.instagram.com/embed.js";
        document.body.appendChild(script);
    }
});
