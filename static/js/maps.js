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

  // One look up medical clinic
  const request = {
    query: 'medical clinic',
    radius: 500,
    location: sfCoords
  };

  //Create Info Window
  infoWindow = new google.maps.InfoWindow();

  // Create Google Places
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  service.getDetails(request, callback);

  function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
          // getDetails(results[i]);
        }
      }
  }  
}

function createMarker(place) {
    console.log(place);
    const placesList = document.getElementById('places');

    const marker = new google.maps.Marker({
        map: map,
        place: {
            placeId: place.place_id,
            location: place.geometry.location
        }
    });

    marker.setMap(map);

    marker.addListener('click', () => {
        infoWindow.setContent(place.name)
        infoWindow.open(map, marker);
    });

    //List of places
    const li = document.createElement('li');
    li.textContent = place.name;
    placesList.appendChild(li);

}

// function getDetails(place) {

//     const request = {
//         placeId: place.place_id,
//         fields: ['name', 'photo', 'formatted_phone_number', 'formatted_address', 'url']
//     }

// }



