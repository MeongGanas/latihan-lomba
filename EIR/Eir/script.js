const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

let section = document.querySelectorAll("section");

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
