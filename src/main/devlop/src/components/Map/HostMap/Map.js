import MapGL from 'react-map-gl';
import PointOverlay from '../PointOverlay.js';
import React from 'react';

const MAPBOX_TOKEN = "pk.eyJ1IjoiempoY2gxMjMiLCJhIjoiY2l1cDd4cWduMDAzMDJvbDhrY2Zta3NkNCJ9.3FmRDWqp0TXkgdDIWnM-vw"; // eslint-disable-line

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 500,
        height: 250,
        zoom: 14,
        minZoom: 2.5,
        maxZoom: 17,
        bearing: 0,
        longitude: props.location.longitude,
        latitude: props.location.latitude,
      }
    }
  }

  componentDidMount() {
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: document.documentElement.offsetWidth,
      height: 250
    });
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    return (
      <MapGL
            {...this.state.viewport}
            onViewportChange={this._onViewportChange.bind(this)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
        >
        <PointOverlay viewport={this.state.viewport} locations={[this.props.location]} size={this.props.size || 60}/>
      </MapGL>
    )
  }
}