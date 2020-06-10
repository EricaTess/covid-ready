import React, { Component, createRef } from 'react'

// import CurrentLocation from './components/CurrentLocation'

// const results = [];

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
      // this.marker = this.createMarker();
      this.places = this.createPlaces();
    });
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 14,
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      disableDefaultUI: true,
  });


  // getClinics = () => {
  //   const endPoint = 'https://api.tomtom.com/search/2/search/medical%20clinic.json?lat=37.7749&lon=-122.4194&key=OQGsIrsxhl8F6lxQVSp3oJIQrBvcAcZr'
  //     fetch(endPoint)
  //       .then(response => response.json())             
  //       .then(data => results.push(data.results));
  // }


  // createMarker() {
  //   console.log(results);
  //   for (let i = 0; i <= results.length; i++){
  //     // new window.google.maps.Marker({
  //     // position: { lat: results[i].position.lat,
  //     //             lng: results[i].position.lon },
  //     // map: this.googleMap
  //     // });
  //   }
  // } 

    // fetch(endPoint)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       this.setState({
    //         currentLocation: {
    //           // lat: geometry.location.lat,
    //           // lng: geometry.location.lng
    //         }
    //       })
    //     }
    //   )



  createPlaces() {

    const request = {
      query: 'medical clinic'
    };

    // const infoWindow = new window.google.maps.InfoWindow(this.googleMap);
    const service = new window.google.maps.places.PlacesService(this.googleMap);
    service.textSearch(request, callback);

    function callback(results, status) {
      if (status == window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          console.log(results[i].geometry.location);
          // this.createMarker(results[i]);
        }
      }
    }
  }

  // createMarker(place) {
  //     console.log(place);

  //     const marker = new window.google.maps.Marker({
  //       map: this.googleMap,
  //       place: {
  //           placeId: place.place_id,
  //           location: place.geometry.location
  //       }
  //     });

  //     marker.setMap(this.googleMap);

  //   // marker.addListener('click', () => {
  //   //     infoWindow.setContent(place.name)
  //   //     infoWindow.open(this.googleMap, marker);
  //   // });

  //   //NEED TO ADD MORE DETAILS TO EACH MARKER

  //   //List of places
  //   // const li = document.createElement('li');
  //   // li.textContent = place.name;
  //   // placesList.appendChild(li);

  // }

 
    


  

  render() {
    return (
      // <div>
        <div
          id="map"
          ref={this.googleMapRef}
          style={{ width: '400px', height: '400px' }}
        />
        // <CurrentLocation />
      // </div>  
    )
  }
}

