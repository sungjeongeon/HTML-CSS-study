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
	if (55 > window.scrollY) {
		topGnb.style.opacity= "0";
		midGnb.style.opacity= "1";
	} else {
		topGnb.style.top = "0px";
		topGnb.style.opacity= "1";
		midGnb.style.opacity= "0";
	}
}