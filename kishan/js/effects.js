function createParticles() {
  const container = document.getElementById("particles");

  if (!container) return;

  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDelay =
      `${Math.random() * 9}s`;

    particle.style.animationDuration =
      `${6 + Math.random() * 8}s`;

    particle.style.opacity =
      `${0.2 + Math.random() * 0.5}`;

    container.appendChild(particle);
  }
}


function confetti() {
  const colors = [
    "#d9b878",
    "#e8a5b5",
    "#f8eadb",
    "#bd9256",
    "#c45c72"
  ];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";

    piece.style.left = `${Math.random() * 100}vw`;

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay =
      `${Math.random() * 1.5}s`;

    piece.style.animationDuration =
      `${2.5 + Math.random() * 2}s`;

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }
}


function showFinalMessage() {
  document.getElementById("loveNote").textContent = finalLoveNote;

  document.getElementById("signature").textContent = finalSignature;
}