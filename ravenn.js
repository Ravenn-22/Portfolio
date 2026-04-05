
// setInterval(rotateWords,2200)

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(el => observer.observe(el));

/* Scroll background change */
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar-custom");
  navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
});

/* Hamburger animation toggle */
const toggler = document.querySelector(".navbar-toggler");
toggler.addEventListener("click", function() {
  this.classList.toggle("active");
});
    