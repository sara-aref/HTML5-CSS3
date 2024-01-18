"use strict";

let redRange = document.getElementById("red-range");
let greenRange = document.getElementById("green-range");
let blueRange = document.getElementById("blue-range");

let text = document.getElementById("text");

let changeColor = function(){
    let redValue = redRange.value;
    let greenValue = greenRange.value;
    let blueValue = blueRange.value;

    text.style.color = `rgb(${redValue * 255}, ${greenValue * 255}, ${blueValue * 255})`;
};

redRange.addEventListener('input', changeColor);
greenRange.addEventListener('input', changeColor);
blueRange.addEventListener('input', changeColor);

const progress = document.getElementById("progress");
let  value = 0;
const percentage= document.getElementById("percentage")
const interval = setInterval(()=> {
    value++; 
    progress.value = value; 
    percentage.innerHTML = value + "%"; 
    if (value >= 100) {
    clearInterval(interval); 
    }
}, 1000);