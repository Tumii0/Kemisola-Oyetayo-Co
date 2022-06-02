const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    return toggle()
})




links.addEventListener("click", function(){
   return toggle()
})


function toggle(){
    links.classList.toggle("show-links")
}