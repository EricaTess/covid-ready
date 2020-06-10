import React, { Component, createRef } from 'react'



const placesList = [];

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
    // this.getClinics()

    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.places = this.createPlaces();
    });
  }

  // Create the map.
  createGoogleMap = () => {
    const map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 14,
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
      });

    return map;
  }

  createPlaces = () => { 

    const request = {
      query: 'medical clinic',
      location: this.state.currentLocation
    };

    const infoWindow = new window.google.maps.InfoWindow();

    //Add markers and window info to each clinic
    const callback = (results, status) => {

      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          // console.log(results[i].name);
    
          const marker = new window.google.maps.Marker({
            position: { lat: results[i].geometry.location.lat(),
                         lng: results[i].geometry.location.lng() },
            map: this.googleMap,
          })
          marker.addListener('click', () => {
            infoWindow.setContent(results[i].name)
            infoWindow.open(this.googleMap, marker);
          });
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
        <div
          id="map"
          ref={this.googleMapRef}
          style={{ width: '600px', height: '400px' }}
        />
      </div>  
    )
  }
}
