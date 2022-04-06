const swiper = new Swiper('.swiper', {
  slidesPerView: 1, //동시에 보여줄 슬라이드 갯수(768px 미만일때)
  slidesPerGroup: 1, //그룹으로 묶을 수(768px 미만일때)
  spaceBetween: 10, //슬라이드간 간격(768px 미만일때)
  breakpoints: { //반응형 조건
    768: { //768px 이상일때
      slidesPerView:2,
      slidesPerGroup: 2,
    },
    1024: { //1024px 이상일때
      slidesPerView:4,
      slidesPerGroup: 4,
    },
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const header = document.getElementById("header");
const headerTop = document.getElementById("headerTop");
const headerLogo = document.getElementById("headerLogo");
const headerImg = document.querySelector("#headerLogo img");
const subnav = document.querySelectorAll(".subnav a");
const barBtni = document.querySelector("#bar i");
const barBtn = document.querySelector("#bar");
const scrollLogo = document.getElementById("scrollLogo");
const headerScroll = document.querySelector("#headerScroll");
const toggleHeaderTop = document.getElementById("toggleHeaderTop");

barBtn.addEventListener("click", function() {
    headerScroll.classList.toggle('toggleMenu');
    if (headerScroll.classList.contains('toggleMenu')){
      barBtni.className = "fa-solid fa-x";
      for (i = 0; i < subnav.length; i++) {
      subnav[i].style.color = "black";
    }
    } else {
      barBtni.className = "fa-solid fa-bars";
        /*if(window.scrollY >= 100) {
          console.log(window.scrollY);
          header.classList.add('toggleScroll');
          toggleHeaderTop.style.backgroundColor = "white";
        } else {
          console.log(window.scrollY);
          header.classList.remove('toggleScroll');
          toggleHeaderTop.style.backgroundColor = "transparent";
          barBtni.style.color = "white";
        }*/
    }
  });


if (!window.matchMedia('screen and (max-width: 1024px)').matches){ 
  /*화면의 너비가 1024이상*/
  header.addEventListener("mouseover", function(event) {
    header.style.backgroundImage = `linear-gradient(0.25turn, #f0eee4, #f0eee4)`;
    header.style.color = "black";
    headerTop.style.color = "#898989";
    headerImg.src = "https://www.swarovski.com/_ui/responsive/theme-swarovski/images/icons/swa-brandlogo-icon-big-dark.svg";
    for (i = 0; i < subnav.length; i++) {
      subnav[i].style.color = "black";
    }
  });
  header.addEventListener("mouseout", function() {
    header.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 31.77%, rgba(0,0,0,0.3) 81.77%, rgba(0,0,0,0) 100.15%)`;
    header.style.color = "white";
    headerTop.style.color = "white";
    headerImg.src = "https://www.swarovski.com/_ui/responsive/theme-swarovski/images/icons/swa-brandlogo-icon-big-white.svg";
    for (i = 0; i < subnav.length; i++) {
      subnav[i].style.color = "white";
    }
  });
}

window.addEventListener("scroll", function() {
  if(window.scrollY >= 100) {
    header.classList.add('toggleScroll');
  } else {
    header.classList.remove('toggleScroll');
  }
});
 
/*반응형 reize시 적용 안되는거 해결
window.onresize = function(){ 
  document.location.reload(); 
};*/