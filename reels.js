const myReels = [
    "https://www.instagram.com/reel/DRbFmm8CPVf/",
    "https://www.instagram.com/reel/DRrYc7qjc7t/",
    "https://www.instagram.com/reel/DQ0-2zvDDoi/",
    "https://www.instagram.com/reel/DRrYc7qjc7t/",
    "https://www.instagram.com/reel/DQ0-2zvDDoi/"
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#portfolio .grid");

    myReels.forEach(link => {
        const reelDiv = document.createElement("div");
        reelDiv.className = "reel";

        reelDiv.innerHTML = `
            <iframe 
                src="${link}embed/captioned/" 
                class="instagram-reel"
                frameborder="0" 
                allowfullscreen
                loading="lazy">
            </iframe>
        `;

        grid.appendChild(reelDiv);
    });
});
