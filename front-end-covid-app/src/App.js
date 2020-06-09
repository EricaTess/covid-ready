import React, { Component, createRef } from 'react'


export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = React.createRef();

  }

  componentDidMount() {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtkAQdVxlPIJeGjfRUhYRizL35fLxm9V8&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
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

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: this.googleMap
    });

  render() {
    return (
      <div
        id="map"
        ref={this.googleMapRef}
        style={{ width: '400px', height: '400px' }}
      />
    )
  }
}

