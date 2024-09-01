const slides=document.querySelectorAll('.slide');
const slideIndex=0;
const getCurrentSlide=()=>slides[slideIndex];


export default class SlideControll{

    static showSlide(){
        slides.forEach((slide)=>slide.classList.remove('activeSlide'));
        const currentSlide = getCurrentSlide();
        currentSlide.classList.add('activeSlide');
    
    }

    static forward(){
        slideIndex+=1;
    }
}