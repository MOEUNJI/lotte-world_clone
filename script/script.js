// const carouselSlide = document.querySelector(".carousel-slide");
// const carouselImages = document.querySelectorAll(".carousel-slide img");

// // button 

// const prevBtn = document.querySelector("#prevBtn");
// const nextBtn = document.querySelector("#nextBtn");

// // counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// // button listeners

// nextBtn.addEventListener("click",()=>{
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
// });

// prevBtn.addEventListener("click",()=>{
//     carouselSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
// });

// carouselSlide.addEventListener("transitionend", () => {
//     if(carouselImages[counter].id === "lastClone"){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length -2;
//         carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
//     }

//     if(carouselImages[counter].id === "firstClone"){
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
//     }
// });



// let slideIndex = 0;
// showSlides();

// function showSlides(){
//     let i;
//     let slides  = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");

//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if( slideIndex > slides.length){
//         slideIndex = 1;
//     }
        
//     for(i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace(" active","");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 5000);
// }


let slideIndex = 0;
let dots = document.getElementsByClassName("dot");

        window.onload=function(){
        showSlides(slideIndex);
        let sec = 4000;
        setInterval(function(){
            slideIndex++;
            showSlides(slideIndex);
            }, sec);
        }

        function moveSlides(n) {
            slideIndex = slideIndex + n
            showSlides(slideIndex);
        }

        function currentSlide(n) {
            slideIndex = n;
            showSlides(slideIndex);
        }

        function showSlides(n) {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            let size = slides.length;

            if ((n+1) > size) {
                slideIndex = 0; n = 0;
            }else if (n < 0) {
                slideIndex = (size-1);
                n = (size-1);
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[n].style.display = "block";
            dots[n].className += " active";
        }

        for(i = 0; i < dots.length; i++){
                  dots[i].className = dots[i].className.replace(" active","");
              }
              slides[slideIndex-1].style.display = "block";
              dots[slideIndex-1].className += " active";

