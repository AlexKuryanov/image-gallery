const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".nav-list");
const mobileLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (burger.classList.contains("open")) {
      burger.classList.remove("open");
      mobileMenu.classList.remove("open");
    }
  });
});

window.addEventListener("click", function (e) {
  if (e.target !== mobileMenu && e.target !== burger) {
    burger.classList.remove("open");
    mobileMenu.classList.remove("open");
  }
});
