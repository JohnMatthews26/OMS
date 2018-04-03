import React, { Component } from 'react';
import {withRouter} from 'react-router';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  initMap() {
    let map = new google.maps.Map(document.getElementbyId('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }
  render(){



    return (

      <div id='map-div'>

      </div>
    );
  }
}

export default withRouter(Map);
