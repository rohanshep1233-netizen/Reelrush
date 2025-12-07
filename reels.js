const myReels = [
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DRbFmm8CPVf/",
        description: "High-energy fashion reel with trending transition"
    },
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DRrYc7qjc7t/",
        description: "Food reel with smooth cuts & trending sound"
    },
    {
        type: "instagram",
        link: "https://www.instagram.com/reel/DQ0-2zvDDoi/",
        description: "Client testimonial reel – went viral in 24 hours"
    }
    // aur jitne chahiye add karte jao
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");

    myReels.forEach(item => {
        const div = document.createElement("div");
        div.className = "reel-card";

        div.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="${item.link}" data-instgrm-version="14" style="max-width:540px; width:100%; margin:20px auto;">
                <a href="${item.link}">Instagram</a>
            </blockquote>
            <p class="reel-caption">${item.description}</p>
        `;

        grid.appendChild(div);
    });
});