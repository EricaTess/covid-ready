import React, { Component, createRef } from 'react'
// import { Router, Route, Switch } from "react-router";


// const placesList = [];

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      currentLocation: {
        lat: 37.7749,
        lng: -122.4194
      }
    };
    this.googleMapRef = React.createRef();
  }

  componentDidMount() {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtkAQdVxlPIJeGjfRUhYRizL35fLxm9V8&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    this.geolocation = this.getGeoLocation();
    googleMapScript.addEventListener("load", () => {

      this.googleMap = this.createGoogleMap();
      this.search = this.createSearchBox();
      this.places = this.createPlaces();
      
    });
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }))
      })
    }
  }

  // Create the map.
  createGoogleMap = () => {
    const map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 14,
      center: this.state.currentLocation,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
      });
    return map;
  }

  createSearchBox = () => {
    const input = document.getElementById('pac-input');
    const autocomplete = new window.google.maps.places.Autocomplete(input);

    this.googleMap.controls[window.google.maps.ControlPosition.TOP_CENTER].push(input);

    autocomplete.bindTo('bounds', this.googleMap);
  // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
    ['address_components', 'geometry', 'name']);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      // console.log(place)
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      const bounds = new window.google.maps.LatLngBounds();

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
      this.setState(prevState => ({
          currentLocation: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          }
      }))
      this.createPlaces();
      this.googleMap.fitBounds(bounds);
    });
  }

  createPlaces = () => { 

    const request = {
      query: 'medical clinic',
      location: this.state.currentLocation,
      radius: 500
    };

    const infoWindow = new window.google.maps.InfoWindow();

    //Add markers and window info to each clinic
    const callback = (results, status) => {

      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {

          // fetch()
          // console.log(results[i].name);
    
          const marker = new window.google.maps.Marker({
            position: { lat: results[i].geometry.location.lat(),
                         lng: results[i].geometry.location.lng() },
            map: this.googleMap,
          })
          marker.addListener('click', () => {
            infoWindow.setContent(`<div>
                <h3>${results[i].name}</h3>
                <p>
                  ${results[i].formatted_address}
                <p>
              </div>`)
            infoWindow.open(this.googleMap, marker);
          });

          //Create list with details
          const detailsRequest = {
            placeId: results[i].place_id,
            fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours.weekday_text', 'website']
          }

          const callback = (place, status) => {
            if (status == window.google.maps.places.PlacesServiceStatus.OK) {

              const clinicList = document.getElementById('clinics');
              const li = document.createElement('li');
              li.textContent = place.name;
              clinicList.appendChild(li);
            }
          }
          service.getDetails(detailsRequest, callback);
        }
      }
    }

    //Create the places service.
    const service = new window.google.maps.places.PlacesService(this.googleMap);
    service.textSearch(request, callback);
  }

  
  

  render() {
    return (
      <div>
        <div>
          <input
            type='text'
            id="pac-input"
            placeholder="Search Box"

          />
          <div
            id="map"
            ref={this.googleMapRef}
            style={{ width: '600px', height: '400px' }}
          />
        </div> 
        <div>
        CLINICS
          <ul id="clinics"></ul>
        </div>
      </div>  
    )
  }
}

