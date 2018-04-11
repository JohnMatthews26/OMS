import React, { Component } from 'react';
import {withRouter} from 'react-router';
let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render(){

    return (

      <div id='map-div'>
        <div id='map'>

        </div>
        <script>
          mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obnJvc2NvZTEyIiwiYSI6ImNqZnZqdHh6djBoY2EycW4xeWVxZmFwNHMifQ.Wc-DNL-Uf_07zf5yp1WByw';
          let map = new mapboxgl.map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v10'
          });
        </script>
      </div>
    );
  }
}

export default withRouter(Map);
