import React, { Component } from 'react';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 12
};

class Map extends Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    console.log(this);
    this.MarkerManager = new MarkerManager(this.map);
  }




  render(){

    return (

      <div className="map" ref="map">
          Map
      </div>
    );
  }
}

export default withRouter(Map);
