"use strict";

let btnInfo = document.getElementById("getInfo");
let btnMap = document.getElementById("getMap");

btnMap.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sucess, error);
    } else {
        alert("update your browser");
    }
});

function sucess(obj) {
    let lat = obj.coords.latitude;
    let lon = obj.coords.longitude;
    console.log(lat);
    console.log(lon);
    initMap(lat,lon);
}

function error(e) {
    switch (e.code) {
    case 1:
        console.log("error user denied");
        break;
    }
}

let map;

async function initMap(x,y) {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: x, lng: y},
        zoom: 15,
    });
}

btnInfo.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showInfo, error);
    } else {
        alert("update your browser");
    }
});

function showInfo(obj) {
    let lat = obj.coords.latitude;
    let lon = obj.coords.longitude;
    let time = new Date(obj.timestamp).toLocaleString();

    // Create or update the table
    let infoTable = document.getElementById("infoTable");
    infoTable.innerHTML = `
        <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Time</th>
        </tr>
        <tr>
            <td>${lat}</td>
            <td>${lon}</td>
            <td>${time}</td>
        </tr>
    `;
}