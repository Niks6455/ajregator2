import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./mapComponent.scss"

const mapState = {center: [47.208208, 38.937189], zoom: 13}
const placeMark = {

  geometry: [47.208208, 38.937189], 
  properties: {
      hintContent: 'Это хинт',
      balloonContent: 'Это балун'
  }
  
}

function MapComponent({w, h}) {

  const [mapOnLoad, setMapOnLoad] = useState(true)

  return (
    <div style={{height: `${h +'px'}`,width: `${w +'px'}` }}>
      <YMaps>
        {
        mapOnLoad?
        <Map state={mapState} width={'100%'} height={'100%'}>           
          <Placemark {...placeMark} />
         
        </Map>:
        <div>Loading...</div>
      }
      </YMaps>
    </div>
  );
}

export default MapComponent;
