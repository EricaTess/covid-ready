'use strict';

var map;
var service;
var infoWindow;

function initMap() {
  // Create the map.
  const sfCoords = new google.maps.LatLng(37.7749, -122.4194);

  map = new google.maps.Map(document.getElementById('map'), {
    center: sfCoords,
    zoom: 15
  });

  const request = {
    query: 'medical clinic',
    radius: 500,
    location: sfCoords
  };

  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);

  function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
  }  
}

function createMarker(place) {

    const placesList = document.getElementById('places');

    const marker = new google.maps.Marker({
        position: place.geometry.location,
        title: place.name,
    });

    marker.setMap(map);


    const li = document.createElement('li');
    li.textContent = place.name;
    placesList.appendChild(li);

}
