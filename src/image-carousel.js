const slides = document.querySelectorAll(".slide");
const slideIndex = 0;
const getCurrentSlide = () => slides[slideIndex];
const prevArrow = document.querySelector(".prevArrow");
const nextArrow = document.querySelector(".nextArrow");

function showSlide() {
  slides.forEach((slide) => slide.classList.remove("activeSlide"));
  const currentSlide = getCurrentSlide();
  currentSlide.classList.add("activeSlide");
}
function forward() {
  slideIndex += 1;
  getCurrentSlide();
}
function backward(){
    slideIndex -=1;
    getCurrentSlide();
}