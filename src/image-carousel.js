const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
const getCurrentSlide = () => slides[slideIndex];
const getCurrentSlideIndex=()=>slideIndex;
const prevArrow = document.querySelector(".prevArrow");
const nextArrow = document.querySelector(".nextArrow");
const dots=document.querySelectorAll('.dots');

function showSlide() {
  markActiveDot();
  slides.forEach((slide) => slide.classList.remove("activeSlide"));
  const currentSlide = getCurrentSlide();
  currentSlide.classList.add("activeSlide");
}
function moveForward() {
  slideIndex=(slideIndex+1);
  if(slideIndex===3) slideIndex=0;
  showSlide();
}
function moveBackward(){
  slideIndex=(slideIndex-1);
  if(slideIndex===-1) slideIndex=2;
  showSlide();
}
prevArrow.addEventListener("click",()=>moveBackward());
nextArrow.addEventListener("click",()=>moveForward());

dots.forEach((dot,index)=>{
  dot.addEventListener("click",()=>{
    slideIndex=index;
    markActiveDot();
    showSlide();
  })
})
function markActiveDot(){
  dots.forEach((d)=>d.classList.remove('activeDot'));
  dots[getCurrentSlideIndex()].classList.add('activeDot');
}

export {showSlide,moveForward,moveBackward}