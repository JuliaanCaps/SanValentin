document.getElementById("openBtn").addEventListener("click", function () {
    document.getElementById("flap").style.transform = "rotateX(180deg)";
    setTimeout(() => {
        document.getElementById("letter").style.top = "30px";
        document.getElementById("letter").style.opacity = "1";
        releaseHearts();
    }, 500);
});

document.getElementById("resetBtn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("flap").style.transform = "rotateX(0deg)";
    document.getElementById("letter").style.top = "100%";
    document.getElementById("letter").style.opacity = "0";
    document.getElementById("hearts-container").innerHTML = "";
});

// Función para crear corazones flotantes como globos
function releaseHearts() {
    const heartsContainer = document.getElementById("hearts-container");

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
