const navAnim = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // toggle

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log("ishla");
    //  Animate items
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkMove 0.5s linear forwards ${
          index / 7 + 0.45
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
navAnim();

// slider

var swiper = new Swiper(".blogs-slider", {
  autoplay: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
});
