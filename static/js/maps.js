"use strict";

function initMap() {
    const sfBayCoords = {
        lat: 37.601773,
        lng: -122.202870
    };
    
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            center: sfBayCoords,
            zoom: 11
        }
    );
}
