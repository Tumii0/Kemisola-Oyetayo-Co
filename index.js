// script for navbar 

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


// script for testimonial section 
const reviews = [
    {
    id: 1,
    name: "Alhaji Hassan",
    img: "images/Alhaji canquasor.png",
    text: 
 `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam lorem ipsum repellendus, quis molestias aspernatur sit eum
   eos illum iure autem?` ,
},

{
    id: 2,
    name: "Olufunmilayo Babatunde",
    img: "images/funmilayo.png",
    text: 
 `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam repellendus, quis molestias aspernatur sit eum
   eos illum iure autem?` ,
},
{
    id: 3,
    name: "Ikechukwu Clement",
    img: "images/ikecukwu.png",
    text: 
 `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam repellendus,ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur quis molestias aspernatur sit eum
   eos illum iure autem?` 
}

]

const img = document.querySelector(".testimonial-picture")
console.log(img)
const author = document.getElementById("author")
const info = document.querySelector(".testimonial-words")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentItem = 0

// load initial item 
window.addEventListener("DOMContentLoaded", function(){
 showPerson(currentItem)
})

// show review/person based on item 

function showPerson(person){
   const item = reviews[person]
   img.src = item.img
   author.textContent = item.name
  
   info.textContent = item.text
}

// show next person 
nextBtn.addEventListener("click", function(){
    console.log("clicked")
   currentItem++
   if (currentItem > reviews.length - 1){
      currentItem = 0
   }
   showPerson(currentItem)
  
})

// show previous person
prevBtn.addEventListener("click", function(){
   currentItem--
   if (currentItem > 0){
      currentItem = reviews.length - 1
   }
   showPerson(currentItem)
})