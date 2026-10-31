let currentPageIndex = 0;

/*
  PERSONALIZE YOUR DIARY HERE.

  Change the titles, messages and photos.

  To have no photo on a page, write image: ""
*/

const diaryPages = [
  {
    title: "A Little Beginning",

    text: `Some people enter our lives and make ordinary days feel special.

You are one of those people. I hope this birthday brings you as much happiness as you bring to others.`,

    image: "assets/images/photo1.jpg"
  },

  {
    title: "Beautiful Memories",

    text: `Every little moment, every laugh and every random conversation becomes a memory worth keeping.

I hope we make many more beautiful memories together.`,

    image: "assets/images/photo2.jpg"
  },

  {
    title: "A Wish For You",

    text: `I wish you endless happiness, success, good health and the courage to chase every dream you have.

Never stop believing in yourself.`,

    image: "assets/images/photo3.jpg"
  },

  {
    title: "Keep Smiling",

    text: `No matter how life changes, I hope you always find a reason to smile.

Stay the same beautiful soul and keep shining.

Happy birthday once again!`,

    image: "assets/images/photo4.jpg"
  }
];


function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}


function renderPage() {
  const page = diaryPages[currentPageIndex];

  if (!page) return;

  const bookPage = document.getElementById("bookPage");

  const imageHTML = page.image
    ? `
      <img
        src="${escapeHTML(page.image)}"
        alt="Our memory"
        onerror="this.outerHTML='<p class=&quot;photo-error&quot;>Photo not found. Please check the filename.</p>'"
      >
    `
    : "";

  bookPage.innerHTML = `
    <h3>${escapeHTML(page.title)}</h3>

    <p>${escapeHTML(page.text)}</p>

    ${imageHTML}
  `;

  document.getElementById("pageCount").textContent =
    `${currentPageIndex + 1} / ${diaryPages.length}`;

  const previousButton = document.getElementById("previousPage");

  previousButton.disabled = currentPageIndex === 0;

  previousButton.style.opacity =
    currentPageIndex === 0 ? "0.4" : "1";

  document.getElementById("nextPage").classList.toggle(
    "hidden",
    currentPageIndex === diaryPages.length - 1
  );

  document.getElementById("finishDiaryButton").classList.toggle(
    "hidden",
    currentPageIndex !== diaryPages.length - 1
  );
}


function changePage(direction) {
  const nextIndex = currentPageIndex + direction;

  if (nextIndex < 0 || nextIndex >= diaryPages.length) {
    return;
  }

  currentPageIndex = nextIndex;

  renderPage();
}


function resetDiary() {
  currentPageIndex = 0;
  renderPage();
}