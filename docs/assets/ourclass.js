var $ = document.getElementById.bind(document)


function showNav() {
    $('side-nav').style.zIndex = "7"
    $('side-nav').style.opacity = "1"
    //$('side-nav').style.left = "0"
    $('dimmer').style.animationName = "showanim"
    $('side-nav').style.transform = "translate(0vw)"
    document.body.style.overflow = "hidden"
    document.body.height = "100%"
}
function hideNav() {

   // $('side-nav').style.left = "-70vw"
   $('side-nav').style.transition = "transform 0.5s ease-in-out"
   $('side-nav').style.transform = "translateX(-70vw)"
   
    $('dimmer').style.animationName = "hideanim"
    document.body.style.overflow = "scroll"
    document.body.height = ""

}
