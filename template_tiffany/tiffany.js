const swiper = new Swiper('.swiper', {
	slidesPerView: 4, //동시에 보여줄 슬라이드 갯수
	slidesPerGroup: 4, //그룹으로 묶을 수
    spaceBetween: 10, //슬라이드간 간격

	loop: true,

	// Navigation arrows
	navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	},
});