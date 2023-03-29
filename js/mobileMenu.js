let menuOpener = document.getElementById("menuOpener");
let mobileMenu = document.getElementById("mobile-menu");
let closer = document.getElementById("closer");

menuOpener.addEventListener("click", () => {
  mobileMenu.classList.remove("close");
  mobileMenu.classList.add("open");
});

closer.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  mobileMenu.classList.add("close");
});