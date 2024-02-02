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

/////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".menu__link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
