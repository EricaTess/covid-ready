import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Divider } from '@material-ui/core';

import ClinicInfo from './ClinicInfo';



const INITIAL_LOCATION = {
  lat: 37.7749,
  lng: -122.4194
}

let markers = [];

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinics: [],
      clinicId: [],
      currentLocation: INITIAL_LOCATION,
      redirect: null
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
      this.deleteMarker();
      this.createPlaces();
      this.googleMap.fitBounds(bounds);
    });
  }

  setMapOnAll = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(this.googleMap);
    }
  }

  deleteMarker = () => {
    this.setMapOnAll(null);
    this.setState.markers = [];
  }

  
  createPlaces = () => { 
    const request = {
      query: 'medical clinic',
      location: this.state.currentLocation
    };

    //Clear clinic list
    this.setState({clinics: []})

    const infoWindow = new window.google.maps.InfoWindow();
    // const clinics = []

    //Add markers and window info to each clinic
    const callback = (results, status) => {
      
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {

        for (let i = 0; i < results.length; i++) {
          const marker = new window.google.maps.Marker({
            position: { lat: results[i].geometry.location.lat(),
                         lng: results[i].geometry.location.lng() }
          });
          // clinics.push(results[i]);

          marker.addListener('click', () => {
            infoWindow.setContent(`
              <div>
                <h3>${results[i].name}</h3>
              </div>`)
            infoWindow.open(this.googleMap, marker);
          });
          //Set markers on map
          marker.setMap(this.googleMap);

          //Create list with details
          const detailsRequest = {
            placeId: results[i].place_id,
            fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours.weekday_text', 'website', 'photo']
          }
          
          const callback = (place, status) => {

            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              //ADD CLINIC ID TO PLACE
              place["id"] = `${detailsRequest["placeId"]}`;
              //Add clinic info to state
              const places = this.state.clinics.concat(place);
              this.setState({clinics: places})
            }
          }
          //KEEP THIS LINE, IT PUSHES TO GLOBAL MARKER TO THEN REMOVE OLD MARKERS
          markers.push(marker)
          service.getDetails(detailsRequest, callback);          
        }
      }
    }
    //KEEP THIS LINE, REMOVES EACH MARKER
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    //Create the places service.
    const service = new window.google.maps.places.PlacesService(this.googleMap);
    service.textSearch(request, callback);
  }

  render() {
    
    // If user ID is not in local storage, direct to login page
    if (localStorage.length === 0) {
        this.setState({redirect: '/login'})
    }

    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
    }

    const clinicInfo = this.state.clinics.map((place) => {

        if (place.opening_hours !== undefined) {
            return (
              <div>
                <ul>
                  <li key={place.id} class="clinic-list_item">
                    <ClinicInfo name={place.name}
                                place_id={place.id}
                                address={place.formatted_address}
                                phone={place.formatted_phone_number}
                                hours={place.opening_hours.weekday_text}
                                website={place.website}
                                photo={place.photo}/>
                    <Divider variant="middle"/>
                  </li>
                  <Divider variant="middle"/>
                </ul>
              </div>
            )
        } else {
            return (
              <div>
                <ul>
                  <li key={place.id} class="clinic-list_item">
                    <ClinicInfo name={place.name}
                                place_id={place.id}
                                address={place.formatted_address}
                                phone={place.formatted_phone_number}
                                website={place.website}/>
                    <Divider variant="middle"/>
                  </li>
                  <Divider variant="middle"/>
                </ul>
              </div>
            )
        }
    })
    
    return (
      <div class="container">
         <div class="row">
            <div class="google-map">
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
                <div class="clinic-info">
                Clinic Information:
                <div id="clinic-info">
                    {clinicInfo}
                </div>
            </div>
        </div>
    </div>  
    )
  }
}