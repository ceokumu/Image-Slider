let sliderInput=document.getElementById("slider");
let sliderLine=document.getElementById("slider-line");
let beforeImg=document.getElementById("before");
slider.addEventListener("input",()=>{
    beforeImg.style.width=slider.value+"%";
    sliderLine.style.left=slider.value+"%";
});
