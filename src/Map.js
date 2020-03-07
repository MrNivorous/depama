import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.7521266,
      lng: -95.3776404
    },
    zoom: 19
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "60vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB53ytDCM0ooakvZTxmaLhqmhShCQoUA24" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={29.7521266}
            lng={-95.3776404}
            name="Parking Spot"
            color="green"
          />
          <Marker
            lat={29.7522266}
            lng={-95.3775604}
            name="Parking Spot 2"
            color="green"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
