import React from 'react';
import { YMaps, Map, Placemark, GeolocationControl,RouteButton, SearchControl } from 'react-yandex-maps';
import { TrafficControl, ZoomControl } from 'react-yandex-maps';
// import "./mapComponent.scss"


var listPoint = []
var coordinats = [ //точки которые берем с бд (координаты и данные об автомойке)
  {x:47.208208, y:38.937189, content: 'Автомойка'}, 
  {x:47.308208, y:38.937189, content: 'Автомойка'},
  {x:47.508208, y:38.967189, content: 'Автомойка'},
  {x:47.226208, y:38.957189, content: 'Автомойка'}, 

]
var key = 0
function MapComponent({w, h}) {

for(var i = 0; i < coordinats.length; i++){
  listPoint.push(
    {value:<Placemark
    modules={["geoObject.addon.balloon"]}
    defaultGeometry={[coordinats[i].x, coordinats[i].y]}
    properties={{
      balloonContentBody:
        coordinats[i].content,
    }}
  />, key: key },
  
  )
  key++;
}

  console.log("point ", listPoint)


  return (
    <div style={{height: `${h +'px'}`,width: `${w +'px'}` }}>
      <YMaps query={{ apikey: 'f3c78576-996b-4eaa-84f8-12a8520d276a' }}>
          <Map width={'100%'} height={'100%'}
              defaultState={{
                center: [47.208208, 38.937189],
                zoom: 13,
                
              }}
            >

              {listPoint.map(el=> el.value) }
            {/* <Placemark
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
            /> */}
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
