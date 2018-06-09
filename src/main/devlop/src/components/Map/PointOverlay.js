import DeckGL, {ScatterplotLayer} from 'deck.gl';
import React from 'react';

export default ({locations, viewport, size}) =>  {
  let data = [];
  for (let i = 0; i < locations.length; i += 1) {
    let temp = {
      position: [locations[i].longitude, locations[i].latitude],
      radius: 10,
      color: [0, 170, 255]
    };
    data.push(temp);
  }
  const layer = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data,
    radiusScale: size,
    radiusMinPixels: 1,
    outline: false
  });
  return (<DeckGL {...viewport} layers={[layer]} />);
}
