function getRandom(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

const listTopAds = [
	{
		src: "img/top_ad.jpg",
		link: "#",
		bgcolor: "#000000"
	},
	{
		src: "img/top_ad2.jpg",
		link: "#",
		bgcolor: "#000000"
	},
	{
		src: "img/top_ad3.jpg",
		link: "#",
		bgcolor: "#14100f"
	}
];

const movieLists = [
	{
		url: "https://adimg.cgv.co.kr/images/202202/Nightmare/Nightmare_1080x608_0223.mp4",
		title: "나이트메어 앨리",
		sub1: "2022년 아카데미 시상식 작품상 후보",
		sub2: "기예르모 델 토로 감독 신작"
	},
	{
		url: "https://adimg.cgv.co.kr/images/202202/THEPEOPLE/THEPEOPLE_1080x608_0223.mp4",
		title: "인민을 위해 복무하라.",
		sub1: "<색,계>보다 치명적이고",
		sub2: "<화양연화>보다 아름답다"
	},
	{
		url: "https://adimg.cgv.co.kr/images/202202/Antebellum/Antebellum_1080x608_0223.mp4",
		title: "안테벨룸",
		sub1: "<겟 아우>, <어스>  제작진의",
		sub2: "미스터리 충격 스릴러"
	},
];

const movieChartList = [
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85632/85632_320.jpg",
		title:"더 베트맨"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85693/85693_320.jpg",
		title:"BTS PERMISSION TO DANCE ON STAGE - SEOUL: LIVE VIEWING"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85603/85603_320.jpg",
		title:"극장판 주술회전"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85624/85624_320.jpg",
		title:"언차티드"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85581/85581_320.jpg",
		title:"안테벨룸"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85680/85680_320.jpg",
		title:"에이핑크 스페셜 무비"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85664/85664_320.jpg",
		title:"라이트 레이더스"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85652/85652_320.jpg",
		title:"나이트메어 엘리"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85582/85582_320.jpg",
		title:"피그"
	},
	{
		url:"https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85635/85635_320.jpg",
		title:"인민을위해 복무하라"
	}
];

//window onload 이벤트
window.onload = function(event) {

	//top-ad 'x' 버튼 클릭 이벤트
	const topAdCloser = document.getElementById('top-ad-closer');
	topAdCloser.onclick = function() {
		const topAd = document.getElementsByClassName("top-ad");
		topAd[0].style.display = 'none';
	}

	//top-ad 랜덤 이미지 + 배경 색상
	const topAdImg = document.getElementById("topAdImg");
	const topAd = document.getElementsByClassName("top-ad")[0];
	const listTopAd = listTopAds[getRandom(0, 2)];
	topAdImg.setAttribute("src", listTopAd.src);
	topAd.style.backgroundColor	= listTopAd.bgcolor;

	//영화 검색 이벤트
	const movieSearch = document.getElementById("movieSearch");
	const txtSearch = document.getElementById("txtSearch");
	const btnSearSubmit = document.getElementById("btnSearSubmit");
	movieSearch.addEventListener('submit',function(event){
		if(txtSearch.value === "") {
			txtSearch.placeholder = "검색어를 입력하세요.";
			txtSearch.focus();
		}else {
			this.submit();
		}
		event.preventDefault(); //전송막음
	});

	//메뉴 mouseover 이벤트
	const headerBottom =document.querySelector(".header-bottom");
	const mainMenuList = document.querySelectorAll(".mainMenu > li");
	const subMenu = document.querySelector(".subMenu");
	for(let i=0; i<mainMenuList.length; i++){
		mainMenuList[i].onmouseover = function(event) {
			subMenu.style.height = "405px";
		};
	}
	headerBottom.onmouseleave = function(event) {
		subMenu.style.height = "0px";
	}

	//movie 재생, 정지 / 소리 끄기 켜기 이벤트
	const mv = document.querySelector("#mv");
	const play = document.querySelector(".mdetail > div:nth-child(2)");
	const iPlay = document.querySelector(".mdetail > div:nth-child(2) > i");
	const mute = document.querySelector(".mdetail > div:nth-child(3)");
	const iMute = document.querySelector(".mdetail > div:nth-child(3) > i");
	play.onclick = function() {
		if(mv.paused) {
			mv.play();
			iPlay.setAttribute("class","fa-solid fa-pause");
		} else {
			mv.pause();
			iPlay.setAttribute("class","fa-solid fa-play");
		}
	}
	mute.onclick = function() {
		if(mv.muted) {
			mv.muted = false;
			iMute.setAttribute("class","fa-solid fa-volume-high");
		} else {
			mv.muted = true;
			iMute.setAttribute("class","fa-solid fa-volume-xmark");
		}
	}

	//영화 랜덤 재생
	const source = document.querySelector("#mv > source");
	const mtitle = document.querySelector(".mtitle");
	const stitle = document.querySelectorAll(".stitle");
	const movieIndex = getRandom(0, movieLists.length - 1);
	mv.setAttribute("src", movieLists[movieIndex].url);
	mtitle.innerText = movieLists[movieIndex].title;
	stitle[0].innerText = movieLists[movieIndex].sub1;
	stitle[1].innerText = movieLists[movieIndex].sub2;
	mv.play();

	//무비차트 탭 기능
	const btnMovieChart = document.getElementById("movie-chart").childNodes[1].childNodes[1].childNodes[1];
	const btnReser = document.getElementById("movie-chart").childNodes[1].childNodes[1].childNodes[3];
	btnMovieChart.onclick = function() {
		document.body.classList.add("mov1");
		document.body.classList.remove("mov2");
	}
	btnReser.onclick = function() {
		document.body.classList.remove("mov1");
		document.body.classList.add("mov2");
	}

	//무비차트 슬라이더
	const mc = new Swiper('#mc', {
		// Optional parameters
		slidesPerView: 5,
		slidesPerGroup: 5,
		spaceBetween: 30,
		// Navigation arrows
		navigation: {
			nextEl: '#mc .swiper-button-next',
			prevEl: '#mc .swiper-button-prev',
		},
	});

	//무비차트 이미지
	let div = img = null;
	const swiperWrapper = document.querySelector(".swiper-wrapper");
	for (let i = 0; i < movieChartList.length; i++) {
		div = document.createElement("div");
		img = document.createElement("img");
		div.classList.add("swiper-slide");
		img.src = movieChartList[i].url;
		img.alt = movieChartList[i].title;

		div.appendChild(img);
		swiperWrapper.appendChild(div);
	}
};