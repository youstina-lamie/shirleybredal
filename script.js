var header = document.querySelector(".secondHeader");
window.onscroll = function() {
  // console.log(window.scrollY);

  if (window.pageYOffset > 30) {
    header.classList.add("sticky");
    //   console.log(window.scrollY);
    //   console.log("Aaaaaaa")
  } else header.classList.remove("sticky");
};

//slider
var modelsNO = 5;
var slides;
var diff = 0;
showSlides(modelsNO);
var i;
function showSlides(n) {
  // var diff;
  slides = document.getElementsByClassName("card");
  console.log(slides);
  if (slides.length > n) {
    for (i = 5; i <= slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slides[i]);
    }
  }
}
function currentSlide() {
  // var diff =  slides.length-modelsNO;

  slides[diff++].style.display = "none";
  console.log(diff);
  
  slides[modelsNO++].style.display = "grid";
  console.log(modelsNO);
      if (modelsNO = 7) {
        modelsNO = 0;
      }

}
