// make mobile nav work
const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // close mobile navigation
    if (link.classList.contains("main-nav__link"))
      headerEl.classList.toggle("nav-open");
  });
});
