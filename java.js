
var slideIndex = 0;
document.getElementById("demo").ondblclick = function() {showSlideColegi()};
function showSlideColegi(){
    var i;
    var slides = document.getElementsByClassName("slideshowIMG");
    for(i=0; i<slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlideColegi,3000);
}

