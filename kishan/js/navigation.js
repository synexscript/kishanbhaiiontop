function goTo(pageNumber) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(`screen-${pageNumber}`);

    if (!target) {
        console.error("Page not found:", pageNumber);
        return;
    }

    target.classList.add("active");

    if (pageNumber === 4) {
        resetDiary();
    }

    if (pageNumber === 5) {
        showFinalMessage();
    }
}