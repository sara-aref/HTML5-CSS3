"use strict";

let saturate = document.getElementById("saturate");
let opacity = document.getElementById("opacity");
let invert = document.getElementById("invert");
let sepia = document.getElementById("sepia");
let grey = document.getElementById("grey");
let defaultimg = document.getElementById("defaultimg");

let image = document.getElementById("image");


let changeMode = function(blendMode, filterValue){
    image.style.backgroundBlendMode = blendMode;
    image.style.filter = filterValue;
};


saturate.addEventListener('click',function(){
    changeMode('saturation', 'saturate(500%)');
});

opacity.addEventListener('click',function(){
    changeMode('multiply', 'opacity(20%)');
});

invert.addEventListener('click',function(){
    changeMode('multiply', 'invert(100%)');
});

sepia.addEventListener('click',function(){
    changeMode('multiply', 'sepia(100%)');
});

grey.addEventListener('click',function(){
    changeMode('multiply', 'grayscale(100%)');
});

defaultimg.addEventListener('click',function(){
    changeMode('multiply', 'opacity(100%)');
});