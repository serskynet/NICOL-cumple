const button = document.getElementById("celebrateBtn");
const music = document.getElementById("bgMusic");

// Fix autoplay en móviles
document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

button.addEventListener("click", () => {
    confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
            particleCount: 300,
            spread: 360,
            origin: { y: 0.4 }
        });
    }, 800);
});
