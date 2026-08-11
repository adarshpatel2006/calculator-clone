

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
 function page4Animation(){
    var elemC = document.querySelector("#elemcontainer")
var fix = document.querySelector("#fixedimage")
elemC.addEventListener("mouseenter",function(){
    fix.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fix.style.display = "none"
})

let elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter",function(){
    var image = elem1.getAttribute("data-image")
    fix.style.backgroundImage = `url(${image})`
})
let elem2 = document.querySelector("#elem2")
elem2.addEventListener("mouseenter",function(){
    var image2 = elem2.getAttribute("data-image2")
    fix.style.backgroundImage = `url(${image2})`
})
let elem3 = document.querySelector("#elem3")
elem3.addEventListener("mouseenter",function(){
    var image3 = elem3.getAttribute("data-image3")
    fix.style.backgroundImage = `url(${image3})`
})
let elem4 = document.querySelector("#elem4")
elem4.addEventListener("mouseenter",function(){
    var image4 = elem4.getAttribute("data-image4")
    fix.style.backgroundImage = `url(${image4})`
})
let elem5 = document.querySelector("#elem5")
elem5.addEventListener("mouseenter",function(){
    var image5 = elem5.getAttribute("data-image5")
    fix.style.backgroundImage = `url(${image5})`
})
let elem6 = document.querySelector("#elem6")
elem6.addEventListener("mouseenter",function(){
    var image6 = elem6.getAttribute("data-image6")
    fix.style.backgroundImage = `url(${image6})`
})
let elem7 = document.querySelector("#elem7")
elem7.addEventListener("mouseenter",function(){
    var image7 = elem7.getAttribute("data-image7")
    fix.style.backgroundImage = `url(${image7})`
})

 }
 function swiperAnimation(){
    var swiper = new Swiper(".mySwiper",{
    slidesPerView:"auto",
    spaceBetween:100,
    grabCursor:true,
    freeMode:true,
});
 }

 swiperAnimation()
 page4Animation()

 var menu = document.querySelector("nav h3")
 var full = document.querySelector("#fullscr")
 menu.addEventListener("click",function(){
     full.style.top = 0
 })
var loader = document.querySelector("#loader")
 setTimeout(function(){
   loader.style.top="-100%"
 },4000)