const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".container__nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("toggle-menu");
});
