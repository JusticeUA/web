

function Slide(activeSlide){
    const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', ()=> {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

function clearActiveClasses(){
    slides.forEach((slide)=>{
      slide.classList.remove('active')  
    })
}

slides[activeSlide].classList.add('active');
}

Slide(3);