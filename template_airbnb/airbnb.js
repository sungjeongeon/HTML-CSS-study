/*window.onscroll = function() {
	const topGnb = document.querySelector("#headerTop2");
	if (80 > window.scrollY) {
		topGnb.style.top = "-85px";
	} else {
		topGnb.style.top = "0px";
	}
}*/

window.onscroll = function() {
	const topGnb = document.querySelector("#headerTop2");
	const midGnb = document.querySelector(".headerRes");
	if (30 > window.scrollY) {
		topGnb.style.opacity= "0";
		midGnb.style.opacity= "1";
	} else {
		topGnb.style.top = "0px";
		topGnb.style.opacity= "1";
		midGnb.style.opacity= "0";
	}
}

/*const topGnb = document.querySelector("#headerTop2");
const midGnb = document.querySelector(".headerRes");
window.addEventListener("onscroll", () => {
	if (30 > window.scrollY) {
		topGnb.style.opacity= "0";
		midGnb.style.opacity= "1";
	} else {
		topGnb.style.top = "0px";
		topGnb.style.opacity= "1";
		midGnb.style.opacity= "0";
	}
})*/

window.onload = function() {
	const user = document.querySelectorAll('.user');
	const userPage = document.querySelector(".userPage");
	console.log(user);
	user[0].onclick = function() {
		userPage.classList.toggle('active');
		console.log("테스트");
	}
}
