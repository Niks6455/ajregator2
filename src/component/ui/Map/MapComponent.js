import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import "./mapComponent.scss"
function MapComponent({w, h}) {
  return (
    <div style={{height: `${h +'px'}`,width: `${w +'px'}` }}>
      <YMaps>
        <Map
          defaultState={{ center: [47.208208, 38.937189], zoom: 13}}
          width={'100%'}
          height={'100%'}
          
          
        />
      </YMaps>
    </div>
  );
}

export default MapComponent;
