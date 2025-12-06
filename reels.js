// ===============================================
// REELRUSH PORTFOLIO - FINAL COMPLETE reels.js
// Instagram + Local Videos + Same Card Design + Description
// ===============================================

const myReels = [
    // === INSTAGRAM REELS (normal link daalo) ===
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DPBoGlCDIkj/",
        description: "Fashion brand campaign – 2M+ views in 24 hours"
    },
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DRbFmm8CPVf/",
        description: "Food reel with trending transition – viral hit"
    },

    // === LOCAL VIDEOS (jo Instagram pe nahi hai) ===
    // Sirf file ko assets/videos/ folder mein daalo aur yaha add karo
    {
        type: "local",
        link: "assets/videos/client-gym.mp4",
        description: "Gym transformation reel – private client work"
    },
    {
        type: "local",
        link: "assets/videos/wedding-highlights.mp4",
        description: "Wedding surprise reel – premium project"
    },
    {
        type: "local",
        link: "assets/videos/birthday-special.mp4",
        description: "Birthday montage – not public"
    }

    // === YAHAN SE TUM APNE NAYE REELS ADD KARTE JAO ===
    // Instagram wala
    // { type: "instagram", link: "https://www.instagram.com/reel/XXXXX/", description: "Tumhara description" },
    
    // Local video wala
    // { type: "local", link: "assets/videos/new-video.mp4", description: "Naya private reel" }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");
    if (!grid) return;

    myReels.forEach(item => {
        const card = document.createElement("div");
        card.className = "reel-card";

        if (item.type === "instagram") {
            // Original Instagram card
            card.innerHTML = `
                <blockquote class="instagram-media" data-instgrm-permalink="${item.link}" data-instgrm-version="14">
                    <a href="${item.link}">Instagram</a>
                </blockquote>
                <p class="reel-caption">${item.description}</p>
            `;
        } else {
            // Local video — bilkul same Instagram card jaisa design
            card.innerHTML = `
                <div class="video-wrapper">
                    <video controls preload="metadata" poster="">
                        <source src="${item.link}" type="video/mp4">
                        Your browser does not support video.
                    </video>
                </div>
                <p class="reel-caption">${item.description}</p>
            `;
        }

        grid.appendChild(card);
    });
});