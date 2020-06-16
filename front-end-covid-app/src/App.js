import React, { Component, createRef } from 'react';
import SimpleRating from './components/Ratings';

const INITIAL_LOCATION = {
  lat: 37.7749,
  lng: -122.4194
}

let markers = [];
// let clinics = [];

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapMarkers: [],
      clinics: [],
      currentLocation: INITIAL_LOCATION,
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

      // this.marker = this.createMarkers();
      // this.infoWindow = this.createInfoWindow();
      // this.list = this.listClinics();
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

  // createMarkers = () => {
  //   const request = {
  //     query: 'medical clinic',
  //     location: this.state.currentLocation,
  //     radius: 500
  //   };
  //   const markers = [];
  //   // const markersArr = [];
  //   const clinics = [];

  //   const callback = (results, status) => {

  //     if (status === window.google.maps.places.PlacesServiceStatus.OK) {

  //       for (let i = 0; i < results.length; i++) {
    
  //         const marker = new window.google.maps.Marker({
  //           position: { lat: results[i].geometry.location.lat(),
  //                        lng: results[i].geometry.location.lng() },
  //           map: this.googleMap,
  //         });
  //         markers.push(marker);
  //         // console.log(results[i]);
  //         clinics.push(results[i]);
  //       }
  //     }
  //   }
  //   this.setState({
  //     clinics: clinics
  //   })
  //   // console.log(markersArr)
  //   // markers.forEach(function(marker) {
  //   //   marker.setMap(this.googleMap);
  //   // });
  //   console.log(this.state.clinics);
  //   const service = new window.google.maps.places.PlacesService(this.googleMap);
  //   service.textSearch(request, callback);
  // }

  // createInfoWindow = () => {

  //   const infoWindow = new window.google.maps.InfoWindow();
  //   console.log('this is in infowindow')

  //   this.state.clinics.forEach(function(clinic) {
  //     console.log('marker')
  //     clinic.addListener('click', () => {
  //     infoWindow.setContent(`
  //         <div>
  //           <h3>${this.state.clinic.name}</h3>
  //         </div>`)
  //       infoWindow.open(this.googleMap, clinic);
  //   })});
  // }

  // listClinics = () => {
  //   for (let i = 0; i < this.state.clinics.length; i++){
  //     const detailsRequest = {
  //       placeId: this.state.clinics[i].place_id,
  //       fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours.weekday_text', 'website']
  //     }
  //     // console.log(this.state.markers[i].place_id);
  //     const callback = (place, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  
  //         const clinicList = document.getElementById('clinics');
  //         const li = document.createElement('li');
  //         li.addEventListener('click', () => {
  //           const clinicInfo = document.getElementById('clinic-info');
  //           clinicInfo.innerHTML = `${place.name}<br>
  //                                   ${place.formatted_address}<br>
  //                                   ${place.formatted_phone_number}<br>
  //                                   ${place.opening_hours.weekday_text}<br>
  //                                   <a href="${place.website}">Website</a>`;
  //           // console.log(`I was clicked, ${place.name}`);
  //         })
  //         li.textContent = `${place.name}`;
  //         clinicList.appendChild(li);
  //       }
  //     }
  //     const service = new window.google.maps.places.PlacesService(this.googleMap);
  //     service.getDetails(detailsRequest, callback);
  //   }
  // }

  createPlaces = () => { 

    const request = {
      query: 'medical clinic',
      location: this.state.currentLocation
    };

    const infoWindow = new window.google.maps.InfoWindow();
    const clinics = []
    // const markers = []
    //Add markers and window info to each clinic
    const callback = (results, status) => {
      
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          clinics: []
        })
        for (let i = 0; i < results.length; i++) {
    
          const marker = new window.google.maps.Marker({
            position: { lat: results[i].geometry.location.lat(),
                         lng: results[i].geometry.location.lng() }
            // map: this.googleMap
          });
          clinics.push(results[i]);
          this.setState({
            markers: []
          })
          marker.addListener('click', () => {
            infoWindow.setContent(`
              <div>
                <h3>${results[i].name}</h3>
              </div>`)
            infoWindow.open(this.googleMap, marker);
          });
          markers.push(marker);

          marker.setMap(this.googleMap);

          //Create list with details
          const detailsRequest = {
            placeId: results[i].place_id,
            fields: ['name', 'formatted_address', 'formatted_phone_number', 'opening_hours.weekday_text', 'website']
          }

          const callback = (place, status) => {
            // console.log(place)
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {



              // const clinicList = document.getElementById('clinics');
              // const li = document.createElement('li');
              // li.addEventListener('click', () => {
              //   const clinicInfo = document.getElementById('clinic-info');
                this.setState({
                  clinics: clinics.concat(place)
                })
                // clinicInfo.innerHTML = `${place.name}<br>
                //                         ${place.formatted_address}<br>
                //                         ${place.formatted_phone_number}<br>
                //                         ${place.opening_hours.weekday_text}<br>
                //                         <a href="${place.website}">Website</a>`;
              // })
              // li.textContent = `${place.name}`;
              // clinicList.appendChild(li);
            }
          }
          markers.push(marker)
          service.getDetails(detailsRequest, callback);
          
        }
        console.log('this is where I called setState')
        this.setState({
          mapMarkers: markers
        })
      }
    }
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    //Create the places service.
    const service = new window.google.maps.places.PlacesService(this.googleMap);
    service.textSearch(request, callback);
  }

  render() {

    console.log('this.state.clinics:', typeof(this.state.clinics));
    const clinicJSX = this.state.clinics.map((place) => {
    console.log(place)
      return (
        <div>
          <SimpleRating name={place.name} address={place.formatted_address}/>
          <div>
            {place.name}<br/>
            {place.formatted_address}<br/>
            {place.formatted_phone_number}<br/>
            {/* {place.opening_hours.weekday_text}<br/> */}
            <a href="{place.website}">Website</a>
          </div>
         </div>
      )
    })

    console.log(this.state.mapMarkers, 'this is in render')
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
        {/* <div>
        CLINICS
          <ul id="clinics"></ul>
        </div> */}
        <form>
          Clinic Information:
          <div id="clinic-info">
            {clinicJSX}
          </div>
        </form>
        <SimpleRating />
      </div>  
    )
  }
}

