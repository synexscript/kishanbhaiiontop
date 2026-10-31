\function revealRose() {
    const bouquet = document.getElementById("bouquetScene");
    const button = document.getElementById("flowerButton");
    const nextButton = document.getElementById("flowerNextButton");
    const instruction = document.getElementById("flowerInstruction");

    bouquet.classList.add("revealed");

    button.disabled = true;
    instruction.textContent = "Every flower reminds me of your smile.";

    setTimeout(() => {
        nextButton.classList.remove("hidden");
    }, 1200);
}

function resetBouquet() {
    document.getElementById("bouquetScene").classList.remove("revealed");
    document.getElementById("flowerButton").disabled = false;
    document.getElementById("flowerNextButton").classList.add("hidden");
}