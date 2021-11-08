const hamburgerBTN = document.querySelector(".hamburger-btn");
const productGallery = document.querySelector(".product-gallery");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const overlay = document.querySelector(".overlay");
const navUl = document.querySelector(".nav__items");

const body = document.body;
let closeGallery = false;
let lWidth = window.screen.width;
let nextPic = 0;
let vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
let vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

if (vw >= 800) {
  imageGallery();
}

let w;
imageGallery();
window.addEventListener("resize", function () {
  w = document.documentElement.clientWidth;

  if (w >= 800) {
    // closeImage();
    body.style.width = "80%";
    arrowLeft.style.display = "none";
    arrowRight.style.display = "none";
    imageGallery();

    console.log(`more than`);
  } else {
    imageGallery();
    console.log(`less than`);
    body.style.width = "100%";
    arrowLeft.style.display = "flex";
    arrowRight.style.display = "flex";
  }
});

console.log(w);

// NAVIGATION

hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("open");
  navUl.classList.toggle("nav__open");
});

//IMAGE GALLERY

function imageGallery() {
  const highlight = document.querySelector(".product-highlight");
  const previews = document.querySelectorAll(".room-preview img");

  previews.forEach((preview, i) => {
    preview.addEventListener("click", function () {
      const smallScr = this.src;
      const bigScr = smallScr.replace("-thumbnail", "");
      highlight.src = bigScr;

      previews.forEach((preview) => preview.classList.remove("product-active"));
      preview.classList.add("product-active");
      nextPic = i;
    });
  });

  highlight.addEventListener("click", openImage);
  closeImage();
}

function openImage() {
  productGallery.classList.add("big");
  arrowLeft.style.display = "flex";
  arrowRight.style.display = "flex";
  body.style.width = "100%";
  body.style.height = "100vh";
  closeGallery = true;
  overlay.classList.remove("hidden");
}

function closeImage() {
  console.log("click");
  productGallery.classList.remove("big");
  body.style.width = "80%";
  body.style.height = "auto";
  overlay.classList.add("hidden");
  arrowLeft.style.display = "none";
  arrowRight.style.display = "none";
}

overlay.addEventListener("click", closeImage);
// imageGallery();

// NEXT IMAGE

arrowRight.addEventListener("click", function () {
  if (nextPic < 3) {
    nextPic++;
    const highlight = document.querySelector(".product-highlight");
    const previews = document.querySelectorAll(".room-preview img");
    const smallScr = previews[nextPic].src;

    const bigScr = smallScr.replace(
      `${nextPic + 1}-thumbnail`,
      `${nextPic + 1}`
    );

    highlight.src = bigScr;

    previews.forEach((preview) => preview.classList.remove("product-active"));
    previews[nextPic].classList.add("product-active");
  }
});

// PREV IMAGE

arrowLeft.addEventListener("click", function () {
  if (nextPic >= 1) {
    nextPic--;

    const highlight = document.querySelector(".product-highlight");
    const previews = document.querySelectorAll(".room-preview img");
    const smallScr = previews[nextPic].src;

    const bigScr = smallScr.replace(
      `${nextPic + 1}-thumbnail`,
      `${nextPic + 1}`
    );

    highlight.src = bigScr;

    previews.forEach((preview) => preview.classList.remove("product-active"));
    previews[nextPic].classList.add("product-active");
  }
});
