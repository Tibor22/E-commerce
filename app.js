const hamburgerBTN = document.querySelector(".hamburger-btn");
const productGallery = document.querySelector(".product-gallery");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const overlay = document.querySelector(".overlay");
const navUl = document.querySelector(".nav__items");
const body = document.body;
let closeGallery = false;
const lWidth = window.screen.width;
console.log(lWidth);

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

console.log(vw, vh);

// NAVIGATION

hamburgerBTN.addEventListener("click", function () {
  hamburgerBTN.classList.toggle("open");
  navUl.classList.toggle("nav__open");
});

//IMAGE GALLERY

function imageGallery() {
  if (vw >= 800) {
    console.log(lWidth);
    const highlight = document.querySelector(".product-highlight");
    const previews = document.querySelectorAll(".room-preview img");

    previews.forEach((preview, i) => {
      preview.addEventListener("click", function () {
        const smallScr = this.src;
        const bigScr = smallScr.replace("-thumbnail", "");
        highlight.src = bigScr;

        previews.forEach((preview) =>
          preview.classList.remove("product-active")
        );
        preview.classList.add("product-active");
      });
    });

    highlight.addEventListener("click", openImage);
    closeImage();
  }
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
  overlay.addEventListener("click", function () {
    console.log("click");
    productGallery.classList.remove("big");
    body.style.width = "80%";
    body.style.height = "auto";
    overlay.classList.add("hidden");
    arrowLeft.style.display = "none";
    arrowRight.style.display = "none";
  });
}

imageGallery();
