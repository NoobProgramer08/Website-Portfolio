
function animationNoEnd(){
   $("#windyl").fadeOut(1000).fadeIn(1000)
   animationNoEnd();
}
animationNoEnd();