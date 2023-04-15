import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import "./mapComponent.scss"

function MapComponent({w, h}) {

  return (
    <div style={{height: `${h +'px'}`,width: `${w +'px'}` }}>
      <YMaps>
          <Map width={'100%'} height={'100%'}
              defaultState={{
                center: [47.208208, 38.937189],
                zoom: 13,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
            <Placemark
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={[55.75, 37.57]}
              properties={{
                balloonContentBody:
                  "This is balloon loaded by the Yandex.Maps API module system",
              }}
            />
      </Map>
      </YMaps>
    </div>
  );
}

export default MapComponent;
