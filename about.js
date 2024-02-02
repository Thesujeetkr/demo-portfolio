// responsive navbar

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".mobile-nav-icon");
const closeBtn = document.querySelector('.close-icon');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle("active");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block"
})
closeBtn.addEventListener('click', () => {
  navbar.classList.remove("active");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none"
})

