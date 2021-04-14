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
document.addEventListener('DOMContentLoaded',(_event)=>{
    $('search-show').addEventListener("click",(_event)=>{

        $('search-nav').style.transition = ""
        $('search-nav').style.transform = "scale(1)"
        $('search-bar').style.animationName = "slide-in"
    })
    $('cancel-search').addEventListener("click",(_event)=>{
        $('search-bar').style.animationName = "slide-out"
        $('search-nav').style.transition = "transform 0s linear .3s"
        $('search-nav').style.transform = "scale(0)"
    })
    $('search-button').addEventListener("click",(_event)=>{
        $('search-nav').style.display = "flex"
    })
})