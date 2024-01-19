"use strict";

let favColor = document.getElementById('favcolor');
let btnColor = document.getElementById('btncolor');

let canva = document.getElementById("canva");
let ctx = canva.getContext('2d');

let circleCount = 0;
let maxCircles = 100;

let intervalId;

btnColor.addEventListener('click', function(){

    clearInterval(intervalId);
    ctx.clearRect(0, 0, canva.width, canva.height);
    
    let selectedColor = favColor.value;

    circleCount = 0;

    intervalId = setInterval(function(){
        ctx.beginPath();
        let w = Math.floor(Math.random()*canva.width);
        let h = Math.floor(Math.random()*canva.height);
        ctx.arc(w, h, 30, 0, Math.PI*2);
        ctx.strokeStyle = selectedColor;
        ctx.stroke();
    
        circleCount++;
    
        if (circleCount >= maxCircles) {
            clearInterval(intervalId);
        }
    
    }, 500);

});