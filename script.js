//? animacion onscroll arriba:
function revealUp() {
    var reveals = document.querySelectorAll(".reveal-up");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 20;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active-up");
      } else {
        reveals[i].classList.remove("active-up");
      }
    }
  }
window.addEventListener("scroll", revealUp);

//? animacion onscroll derecha: 
function revealRight() {
    var reveals = document.querySelectorAll(".reveal-right");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 20;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].style.transition = "all 1.5s ease"
        reveals[i].classList.add("active-right");
      } 
      else {
        reveals[i].classList.remove("active-right");
      }
    }
  }
window.addEventListener("scroll", revealRight);

//? animacion onscroll izquierda: 
function revealLeft() {
    var reveals = document.querySelectorAll(".reveal-left");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 20;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].style.transition = "all 1.5s ease"
        reveals[i].classList.add("active-left");
      } 
      else {
        reveals[i].classList.remove("active-left");
      }
    }
  }
window.addEventListener("scroll", revealLeft);