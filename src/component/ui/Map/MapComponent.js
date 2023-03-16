import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

function MapComponent({w, h}) {
  return (
    <div style={{height: `${h +'px'}`,width: `${w +'px'}` }}>
      <YMaps>
        <Map
          defaultState={{ center: [47.236726, 38.892407], zoom: 17}}
          width={'100%'}
          height={'100%'}
          
        />
      </YMaps>
    </div>
  );
}

export default MapComponent;
