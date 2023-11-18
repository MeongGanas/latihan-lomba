const hamburger = document.querySelector(".hamburger-menu");
const list = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  list.classList.toggle("hidden");
});
