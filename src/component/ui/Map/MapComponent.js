import React from 'react';
import { YMaps, Map, Placemark, GeolocationControl,RouteButton, SearchControl } from 'react-yandex-maps';
import { TrafficControl, ZoomControl } from 'react-yandex-maps';
// import "./mapComponent.scss"

function MapComponent({w, h}) {

  return (
    <div style={{height: `${h +'px'}`,width: `${w +'px'}` }}>
      <YMaps query={{ apikey: 'f3c78576-996b-4eaa-84f8-12a8520d276a' }}>
          <Map width={'100%'} height={'100%'}
              defaultState={{
                center: [47.208208, 38.937189],
                zoom: 13,
                
              }}
            >
            <Placemark
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={[47.208208, 38.937189]}
              properties={{
                balloonContentBody:
                  "Автомойка1",
              }}
            />
             <Placemark
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={[47.230820, 38.927189]}
              properties={{
                balloonContentBody:
                  "Автомойка2",
              }}
            />
            <GeolocationControl options={{ float: "left" }} />
            <RouteButton options={{ float: "right" }} />
            <SearchControl options={{ float: "right" }} />
            <TrafficControl options={{ float: "right" }} />
            <ZoomControl options={{ float: "right" }} />
      </Map>
      </YMaps>
    </div>
  );
}

export default MapComponent;
