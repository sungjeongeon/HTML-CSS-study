const toggleBtn = document.querySelector(".toggleBtn");
const hidemenu = document.querySelector(".hidemenu");

toggleBtn.addEventListener("click", () => {
	hidemenu.classList.toggle('active');
})

const listImg = [
	{
		src : "https://www.w3schools.com/w3images/ny.jpg",
		title : "New York",
		sub : "The atmosphere in New York is lorem ipsum."

	},
	{
		src : "https://www.w3schools.com/w3images/chicago.jpg",
		title : "Chicago",
		sub : "Thank you, Chicago - A night we won't forget."
	},
	{
		src : "https://www.w3schools.com/w3images/la.jpg",
		title : "Los Angeles",
		sub : "We had the best time playing at Venice Beach!"
	},
]


const mainImg = document.querySelector(".mainImage > img");
const mainTitle = document.querySelector(".wrapText > h3");
const subTitle = document.querySelector(".wrapText > p");
let mainIndex = 0;
setInterval(function(){
	mainIndex++;
	if (mainIndex >= 3) {
		mainIndex = 0;
	}
	mainImg.setAttribute("src",listImg[mainIndex].src);
	mainTitle.innerText = listImg[mainIndex].title;
	subTitle.innerText = listImg[mainIndex].sub;
},3000);