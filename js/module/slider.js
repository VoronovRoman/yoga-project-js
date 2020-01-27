function slider(){
    //SLIDER FROM GUIDE START
    let sliderItems = document.querySelectorAll(".slider-item"),
        prevBtn = document.querySelector(".prev"),
        nextBtn = document.querySelector(".next"),
        currentSlide = 0,
        dots = document.querySelectorAll(".slider-dots .dot"),
        dotsWrap = document.querySelector(".slider .slider-dots");

    showSlide(currentSlide)
    function showSlide(n){
        if(n>sliderItems.length-1){
            currentSlide=0
        };
        if(n<0){
            currentSlide=sliderItems.length-1
        };
        sliderItems.forEach(elem => elem.style.display = "none");
        dots.forEach((elem)=> elem.classList.remove("dot-active"));
        
        sliderItems[currentSlide].style.display="block"
        dots[currentSlide].classList.add("dot-active")
    }

    function plusSlide(n){
        showSlide(currentSlide+=n);
    }
    function currSl(n){
        showSlide(currentSlide=n)
    }
    prevBtn.addEventListener("click", ()=>{
        plusSlide(-1)
    })
    nextBtn.addEventListener("click", ()=>{
        plusSlide(1)
    });
    
    dotsWrap.addEventListener("click", (event)=>{
        for(let i=0; i<dots.length; i++){
            if(event.target.classList.contains("dot") && event.target == dots[i]){
                currSl(i)
            }
        }
    });
    //SLIDER FROM GUIDE END
}

export default slider;