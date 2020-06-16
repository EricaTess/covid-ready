import React, { Component, createRef } from 'react';
import SimpleRating from './components/Ratings';

const INITIAL_LOCATION = {
    lat: 37.7749,
    lng: -122.4194
  }
  
export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        currentLocation: INITIAL_LOCATION,
        isLoaded: false
        };
        this.googleMapRef = React.createRef();
    }

    componentDidMount() {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtkAQdVxlPIJeGjfRUhYRizL35fLxm9V8&libraries=places`;
        window.document.body.appendChild(googleMapScript);
        // if (this.state.isLoaded) {
        //     this.googleMap = this.createGoogleMap();
        //     this.markers = this.createMarkers();
        // }
        googleMapScript.addEventListener("load", () => {
            this.googleMap = this.createGoogleMap();
            this.markers = this.createMarkers();
            this.setState({
                isLoaded: true
            })
        });
    }

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

    createMarkers = () => {
        const request = {
            query: 'medical clinic',
            location: this.state.currentLocation
        };

        const callback = (results, status) => {
      
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              for (let i = 0; i < results.length; i++) {
          
                const marker = new window.google.maps.Marker({
                  position: { lat: results[i].geometry.location.lat(),
                               lng: results[i].geometry.location.lng() },
                  map: this.googleMap
                });
              }
            }
        }
        const service = new window.google.maps.places.PlacesService(this.googleMap);
        service.textSearch(request, callback);
    }

    render() {
        // if (this.state.isLoaded) {
        //     this.createGoogleMap();
        //     this.createMarkers();
        // }
        return(
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