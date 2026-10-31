
function openGift() {
    const giftBox = document.getElementById("giftBox");
    const giftRing = document.getElementById("giftRing");
    const openButton = document.getElementById("openGiftButton");
    const nextButton = document.getElementById("giftNextButton");
    const instruction = document.getElementById("giftInstruction");

    if (!giftBox || !giftRing) {
        console.error("Gift elements not found. Check giftBox and giftRing IDs.");
        return;
    }

    // Prevent repeated clicks
    if (giftBox.classList.contains("open")) return;

    // Open the gift box
    giftBox.classList.add("open");

    if (instruction) {
        instruction.textContent = "A little something, chosen just for you...";
    }

    if (openButton) {
        openButton.disabled = true;
        openButton.style.display = "none";
    }

    // Reveal the ring after the lid starts opening
    setTimeout(() => {
        giftRing.classList.add("show");
    }, 650);

    // Show Continue button
    setTimeout(() => {
        if (instruction) {
            instruction.textContent = "A special little gift, from my heart.";
        }

        if (nextButton) {
            nextButton.classList.remove("hidden");
            nextButton.style.display = "inline-flex";
        }
    }, 1900);
}

function resetGift() {
    const giftBox = document.getElementById("giftBox");
    const giftRing = document.getElementById("giftRing");
    const openButton = document.getElementById("openGiftButton");
    const nextButton = document.getElementById("giftNextButton");

    if (giftBox) giftBox.classList.remove("open");
    if (giftRing) giftRing.classList.remove("show");

    if (openButton) {
        openButton.disabled = false;
        openButton.style.display = "inline-flex";
    }

    if (nextButton) {
        nextButton.classList.add("hidden");
        nextButton.style.display = "none";
    }
}
