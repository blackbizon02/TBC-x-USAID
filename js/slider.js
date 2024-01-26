document.addEventListener("DOMContentLoaded", function() {

const sliderAutoChangeTime = 5000;
const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slide");
const sliderCount = slides.length;
const dotNavigation = document.getElementById("dot-navigation");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

////////////////////
// Create Dot Navigation
////////////////////
slides.forEach(function () {
	dotNavigation.innerHTML += "<li></li>";
});

////////////////////
// Secondary Const's (now things are dynamically built)
////////////////////
const _dots = document.querySelectorAll("#dot-navigation li");

////////////////////
// Activate First Dot Navigation
////////////////////
_dots[0].classList.add("active");

////////////////////
// Activate First Slider
////////////////////
slides[0].classList.add("active");

////////////////////
// Create Dot Navigation 'click' events
////////////////////
_dots.forEach(function (dot, index) {
	dot.addEventListener("click", function () {
		setActiveSliderIndex(index);
	});
});

////////////////////
// Previous Arrow 'click' event
////////////////////
previousButton.addEventListener("click", function () {
	let currentIndex = currentLiveIndex(),
		previousIndex = currentIndex - 1 < 0 ? sliderCount - 1 : currentIndex - 1;
	setActiveSliderIndex(previousIndex);
});

////////////////////
// Next Arrow 'click' event
////////////////////
nextButton.addEventListener("click", function () {
	MoveToNextSlider();
});

////////////////////
// Move to Next Slider
////////////////////
let MoveToNextSlider = () => {
	let currentIndex = currentLiveIndex(),
		nextIndex = currentIndex + 1 > sliderCount - 1 ? 0 : currentIndex + 1;
	setActiveSliderIndex(nextIndex);
};

////////////////////
// Current Live Slide Index
////////////////////
let currentLiveIndex = () => {
	var response;
	slides.forEach(function (div, index) {
		if (div.classList.contains("active")) response = index;
	});
	return response;
};

////////////////////
// Set Slider and Dot Nav Active
////////////////////
let setActiveSliderIndex = (activeSliderIndex) => {
	// Changes Slider
	slider.querySelector(".slide.active").classList.remove("active");
	slides[activeSliderIndex].classList.add("active");
	// Change Dot Navigation
	dotNavigation.querySelector("li.active").classList.remove("active");
	_dots[activeSliderIndex].classList.add("active");
	// Reset Timer
	restartInterval();
};

////////////////////
// Timer
////////////////////
let timer = setInterval(MoveToNextSlider, sliderAutoChangeTime);

////////////////////
// Reset time between sliders
////////////////////
let restartInterval = () => {
	clearInterval(timer);
	timer = setInterval(MoveToNextSlider, sliderAutoChangeTime);
};

////////////////////
// Pause on hover
////////////////////

slider.addEventListener("mouseover", function () {
	clearInterval(timer);
});
slider.addEventListener("mouseout", function () {
	restartInterval();
});
});

export default slider;
