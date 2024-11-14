// Addvar slideIndex = 1
SlideShow();

function SlideShow(){
  var i
  var sd = document.getElementsByClassName("slide")
  console.log("JumlahSlide "+ sd. length)
  for(i=0; i<sd. length;i++){
  sd[i]. style.display ="none"
  }
  if(slideIndex>sd.length){
    slideIndex = 1
  }
  sd[slideIndex-1].style.display="block"
  slideIndex++
  setTimeout(SlideShow,2600)

}
JS here