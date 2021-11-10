const hamburgerBTN = document.querySelector(".hamburger-btn");
const productGallery = document.querySelector(".product-gallery");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const overlay = document.querySelector(".overlay");
const navUl = document.querySelector(".nav__items");
const plusProduct = document.querySelector(".product__field--plus");
const minusProduct = document.querySelector(".product__field--minus");
const counterProduct = document.querySelector(".product__field--main");
const price = document.querySelector(".product__sell--price");
const userCartImg = document.querySelectorAll(".user__cart img");
const addToCartBtn = document.querySelector(".product__cart--cta button");
const cart = document.querySelectorAll(".user__cart");
const signCounter = document.querySelectorAll(".cart-counter");
console.log(signCounter);
// Implement cart
let productCounter = 0;

const priceString = price.textContent.slice(1, -1);
const priceNum = parseInt(priceString);
console.log(priceNum);

plusProduct.addEventListener("click", function () {
  productCounter++;
  counterProduct.textContent = productCounter;
});

minusProduct.addEventListener("click", function () {
  console.log("click");
  if (productCounter === 0) return;
  productCounter--;
  counterProduct.textContent = productCounter;
});

let cartCounter = 0;

addToCartBtn.addEventListener("click", function () {
  const total = productCounter * priceNum;

  const html = `

 <div class="user__cart-popup">
   <h3>Cart</h3>
   <div class="user__cart-popup-details">
     <img src="images/image-product-1-thumbnail.jpg" alt="" />
     <div class="user__cart-popup-details-product">
       <p>
         Autumn Limited Edition...<br />
         $${priceNum} x ${productCounter} <b>$${total}</b>
       </p>
     </div>
     <div class="user__cart-popup-details-delete">
       <i class="fas fa-trash-alt fa-lg"></i>
     </div>
   </div>
   <button class="user__cart-popup-checkout">Checkout</button>
 </div>
</div>`;

  if (cartCounter < 1) {
    cart[1].insertAdjacentHTML("beforeend", html);
    cart[0].insertAdjacentHTML("beforeend", html);
    cartCounter++;
    signCounter[0].innerText = productCounter;
    signCounter[1].innerText = productCounter;
  }

  const deleteCart = document.querySelectorAll(
    ".user__cart-popup-details-delete"
  );

  deleteCart.forEach((carts) => {
    console.log(carts);
    carts.addEventListener("click", function () {
      const popup = document.querySelectorAll(".user__cart-popup");
      popup.forEach((pop) => {
        pop.remove();
      });
      console.log(`click`);
      const html = `<div class="user__cart-popup">
      <h3>Cart</h3>
      <div class="user__cart-popup-empty">Your cart is empty</div>
    </div>`;
      console.log(html);
      cart[1].insertAdjacentHTML("beforeend", html);
      cart[0].insertAdjacentHTML("beforeend", html);
      cartCounter = 0;
      productCounter = 0;
      signCounter[0].innerText = productCounter;
      signCounter[1].innerText = productCounter;
      signCounter[0].style.backgroundColor = "transparent";
      signCounter[1].style.backgroundColor = "transparent";
    });
  });

  signCounter[0].style.backgroundColor = "hsl(26, 100%, 55%)";
  signCounter[1].style.backgroundColor = "hsl(26, 100%, 55%)";
  console.log(signCounter);
  productCounter = 0;
  counterProduct.textContent = productCounter;
});

// IMPLEMENT GALLERY

console.log(counterProduct);

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
// First open
if (vw >= 800) {
  imageGallery();
}

let w;
// imageGallery();
window.addEventListener("resize", function () {
  w = document.documentElement.clientWidth;

  if (w >= 800) {
    productGallery.classList.remove("big");
    overlay.classList.add("hidden");
    body.style.width = "80%";
    arrowLeft.style.display = "none";
    arrowRight.style.display = "none";
    imageGallery();
  } else {
    body.style.width = "100%";
    arrowLeft.style.display = "flex";
    arrowRight.style.display = "flex";
  }
});

// console.log(w);

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
