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

  const sfMarker = new google.maps.Marker({
    position: sfCoords,
    title: 'SF Bay',
    map: map
  });

  sfMarker.addListener('click', () =>{
    alert('Hi');
  });

  const sfInfo = new google.maps.InfoWindow({
    content: '<h1>San Francisco!</h1>'
  });

  sfInfo.open(map, sfMarker)

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
          // console.log(results[i].name);
        }
      }
      // console.log(results);
  }  
}

function createMarker(place) {

    const bounds = new google.maps.LatLngBounds();
    const placesList = document.getElementById('places');


    const marker = new google.maps.Marker({
        position: place.geometry.location,
        title: place.name
    });

    console.log(marker);

    marker.setMap(map);

        // var image = {
        //     url: place.icon,
        //     size: new google.maps.Size(71,71),
        //     origin: new google.maps.Point(0,0),
        //     anchor: new google.maps.Point(17, 34),
        //     scaledSize: new google.maps.Size(25, 25)
        // };

        // const marker = new google.maps.Marker({
        //   map: map,
        //   icon: image,
        //   title: place.name,
        //   position: place.geometry.location
        // });

        // const li = document.createElement('li');
        // li.textContent = place.name;
        // placesList.appendChild(li);

        // bounds.extend(place.geometry.location);

        // map.fitBounds(bounds);

}
