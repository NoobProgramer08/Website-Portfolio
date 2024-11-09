animateName();
animationNoEnd();

function animationNoEnd(){
   $("#windyl").fadeOut(1000).fadeIn(1000);
   animationNoEnd();

}
function animateName(){
   $("#myname").fadeOut(1000).fadeIn(1000);
   
}
