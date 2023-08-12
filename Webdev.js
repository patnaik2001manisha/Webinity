window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("headerscroll", window.scrollY>0);
})