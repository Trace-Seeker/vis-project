import React from 'react';
import MapGL from 'react-map-gl';
import PointOverlay from '../PointOverlay';

const MAPBOX_TOKEN = "pk.eyJ1IjoiempoY2gxMjMiLCJhIjoiY2l1cDd4cWduMDAzMDJvbDhrY2Zta3NkNCJ9.3FmRDWqp0TXkgdDIWnM-vw"; // eslint-disable-line

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        longitude: 110,
        latitude: 30,
        zoom: 3,
        minZoom: 2.5,
        maxZoom: 15,
        pitch: 40.5,
        bearing: 0,
        width: 500,
        height: 400
      },
      data: null
    };
  }

  componentDidMount() {
    this._resize();
    this.setState({
      data: this.props.data.result
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data.result
    });
  }

  _resize() {
    this._onViewportChange({
      width: document.documentElement.offsetWidth,
      height: window.innerHeight - 198
    });
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    const {viewport, data} = this.state;
    return (
      <MapGL
            {...this.state.viewport}
            onViewportChange={this._onViewportChange.bind(this)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
        >
        <PointOverlay viewport={viewport} locations={data || []} size={this.props.size || 10}/>
      </MapGL>
    );
  }
}

