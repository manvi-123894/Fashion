var navBtn = document.querySelector("nav .box");
var navList = document.querySelector(".nav-list");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var image = document.querySelector(".picture img");


navBtn.addEventListener("click",function(){
    navList.classList.toggle("nav-toggle");
})

var imgList = [
    {
        img : "./image/sebastian-bronley-hGCMPsbRjAc-unsplash.jpg"
    },
    
    {
        img : "Image/joelvalve-DpSEg199tFM-unsplash.jpg"
    }
];


/*
var counter = 0;

prevBtn.addEventListener("click",function(){
    if(counter===0){
        counter = imgList.length;
    }

    counter--;
     
    image.setAttribute("src",imgList[counter].img);

})

nextBtn.addEventListener("click",function(){
    if(counter===imgList.length-1){
        counter = -1;
    }

    counter++;
     
    image.setAttribute("src",imgList[counter].img);

})*/