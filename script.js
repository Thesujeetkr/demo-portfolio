// ===================================
// creating portfolio tab component
// ===================================


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  // console.log(p_btn_clicked)

  // p_btn.forEach((currElem)=>currElem.classList.remove("p-btn-active"))

  p_btn_clicked.classList.add("p-btn-active");
  setTimeout((e) => {
    p_btn.forEach((e) => e.classList.remove("p-btn-active"))
  }, 2000);

  // find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  // console.log(btn_num)

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

  // hide unclicked img
  p_img_elem.forEach((e) => e.classList.add("p-img-not-active"));
  // show clicked button img
  img_active.forEach((e) => e.classList.remove("p-img-not-active"));
});


// swiper js code
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// mediaQ in js

const myJsmedia=(widthSize)=>{
  if(widthSize.matches){
      new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}
const widthSize=window.matchMedia("(max-width:800px)");
// call listener function at run time.
myJsmedia(widthSize);
//attach listener function on state changes
widthSize.addEventListener('change', myJsmedia);
// en


// create scroll to top botton

const footerElem = document.querySelector(".section-footer");

const scrollBtn = document.createElement("div");
scrollBtn.classList.add("scrollTop-style");

scrollBtn.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollBtn);

//code for click to top
const heroSection = document.querySelector(".section-hero");
const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" })
}

scrollBtn.addEventListener('click', scrollTop)


// create animated number counter function
// animation showing when enter on display
const sectionWorkdata = document.querySelector('.section-work-data');
const aniObserver = new IntersectionObserver(
  (entries, observer) => {
  const entry = entries[0];
  console.log(entry);

  if(!entry.isIntersecting) return;

    // create animated number counter function

    const counterNum = document.querySelectorAll(".counter-number");

    const speed = 250;

  counterNum.forEach((e) => {
  const updateNumber = () => {
    const targetNumber = parseInt(e.dataset.number);
    // console.log(targetNumber)
    const initNum = parseInt(e.innerText);
    // console.log(initNum)

    const incrementNum = Math.trunc(targetNumber / speed);
    // console.log(incrementNum)

    if (initNum < targetNumber) {
      e.innerText = `${initNum + incrementNum}+`
      setTimeout(updateNumber, 10);
    }
  }
  updateNumber();
})
   
 observer.unobserveobserve(sectionWorkdata)
},
{
  root: null,
  threshold: 0,
}
);

aniObserver.observe(sectionWorkdata);

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


// creating sticky navbar start at hero-section
// already present-- const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver((e) => {
  const entry = e[0]
  // console.log(entry)
  !entry.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
}, {
  root: null,
  threshold: 0
})

observer.observe(heroSection)