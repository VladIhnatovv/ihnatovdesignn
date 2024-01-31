const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: ".thirdblc__swiper-buttonRight",
    prevEl: ".thirdblc__swiper-buttonLeft",
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

/////////////////////////////////////////////////
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const footerLinks = document.querySelectorAll(".footer__link");

footerLinks.forEach((link) => {
  link.addEventListener("click", function (d) {
    d.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
