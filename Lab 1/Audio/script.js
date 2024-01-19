"use strict";

let image = document.querySelector("#change img");
let newAudio = document.querySelector("audio");

let tkhf = document.getElementById("tkhf");
let haddeka = document.getElementById("haddeka");
let remi = document.getElementById("remi");
let asdkaa = document.getElementById("asdkaa");
let change = document.getElementById("change");


let btnPlay = document.getElementById('play');
let btnPause = document.getElementById('pause');
let btnStop = document.getElementById('stop');
let btnMute = document.getElementById('mute');
let volumeRange = document.getElementById('volume');
let speed = document.getElementById('rate');
let durationRange = document.getElementById('duration');



let bplay = btnPlay.addEventListener('click',function(){
    newAudio.play();
});

newAudio.addEventListener('timeupdate', function () {
    durationRange.value = newAudio.currentTime;
});

newAudio.addEventListener('durationchange', function () {
    durationRange.max = newAudio.duration;
});

btnPause.addEventListener('click',function(){
    newAudio.pause();
});

btnStop.addEventListener('click',function(){
    newAudio.load();
    newAudio.pause();
});

btnMute.addEventListener('click',function(){
    newAudio.muted = !newAudio.muted;
});

volumeRange.addEventListener('input',function(){
    newAudio.volume = volumeRange.value;
});

speed.addEventListener('input',function(){
    newAudio.playbackRate = speed.value;
});

tkhf.addEventListener('click', function() {
    event.preventDefault();
    image.src = `1.jpg`;
    newAudio.src = `1.mp3`;
    newAudio.load();
    newAudio.play();
});

haddeka.addEventListener('click', function() {
    event.preventDefault();
    image.src = `2.jpg`;
    newAudio.src = `2.mp3`;
    newAudio.load();
    newAudio.play();
});

remi.addEventListener('click', function() {
    event.preventDefault();
    image.src = `3.jpg`;
    newAudio.src = `3.mp3`;
    newAudio.load();
    newAudio.play();
});

asdkaa.addEventListener('click', function() {
    event.preventDefault();
    image.src = `4.jpg`;
    newAudio.src = `4.mp3`;
    newAudio.load();
    newAudio.play();
});
