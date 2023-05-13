import React, { useEffect, useState} from 'react';
import { YMaps, Map, Placemark, GeolocationControl,RouteButton, SearchControl, TrafficControl, ZoomControl, withYMaps } from 'react-yandex-maps';
import "./mapComponent.scss";
import poi from './img/poi.png';
import star from './img/star.png';
import Loader from '../../pages/loader/Loader';

if (!navigator.geolocation) {
    alert("браузер не поддерживает геолокацию");

} else {
  navigator.geolocation.watchPosition(function (position) {
          // console.log("браузер поддерживает геолокацию!");
      },
      function (error) {
          if (error.code == error.PERMISSION_DENIED)
              alert("Дайте разрешение на определение местоположения");
      });
}


var listPoint = []
var coordinats = [ //точки которые берем с бд (координаты и данные об автомойке)
  {x:47.208208, y:38.937189, content: "Автомойка - 1", prise:500, rating: 4.3}, 
  {x:47.200551, y:38.916079, content: "Автомойка - 2", prise:1500, rating: 3.3},
  {x:47.217043, y:38.920761, content: "Автомойка - 3", prise:100, rating: 5.0},
  {x:47.224817, y:38.922566, content: 'Реал', prise:300, rating: 4.3}, 
  {x:47.233268, y:38.915890, content: 'Автомойка 4', prise:400, rating: 2.2},
  {x:47.256496, y:38.895906, content: 'Автомойка на стоянке', prise:600, rating: 4.4}, 
]
var key = 0


const elementsPoint = 0


function MapComponent({w, h}) {

  const [isLoading, setIsLoading] = useState(true);

  // -----------------------------------------------------
  const PositionedMap = React.memo(({ ymaps }) => {
    const [loadedCoords, setLoading] = React.useState(false);
      const onLoad = () => {
      ymaps.geolocation.geocode
        .get({
          provider: "browser",
          mapStateAutoApply: true
        })
        .then(res => {
          setLoading(true);
          setIsLoading(false);
        });
    };
    

    useEffect(() => {
      onLoad();

    }, []);

    // if(!loadedCoords){
    //   return(
    //     <div>Loading...</div>
    //   )
    // }
    return (
      loadedCoords && (
        <Map width={'100%'} height={'100%'}
          state={{
            center: [47.208208, 38.937189],
            zoom: 13
          }}
        >
          {listPoint.map(el=> el.value) }
          <GeolocationControl options={{ float: "left" }} />
            <RouteButton options={{ float: "right" }} />
            <SearchControl options={{ float: "right" }} />
            <TrafficControl options={{ float: "right" }} />
            <ZoomControl options={{ float: "right" }} />
        </Map>
        
      )
    );
    
  });
  const ConnectedMap = React.useMemo(() => {
    return withYMaps(PositionedMap, true, [["geolocation", "geocode"]]);
  }, [PositionedMap]);
  // -----------------------------------------------------

  // if(!isLoading){
  //   let elementsPoint = document.getElementsByClassName("ymaps-2-1-79-image")
  //   console.log("--",elementsPoint.length)
  //   console.log("----",elementsPoint)
  //   for(let t = 0; t < elementsPoint.length; t++)
  //   {
  //     // elementsPoint.setAttribute("onclick","alert('blah');"); 
  //     elementsPoint[t].addEventListener('click', function() {
  //       console.log('Image clicked')
  //     })
  //   console.log("fffff") 
  
  
  //   }

  // }
  


for(var i = 0; i < coordinats.length; i++){
  listPoint.push(
    {value:<Placemark key={key}  
    modules={["geoObject.addon.balloon"]}
    defaultGeometry={[coordinats[i].x, coordinats[i].y]}
    
    properties={{

      balloonContentBody: 
      `<div class="content__body">
            <div class="content__text">${coordinats[i].content}</div>

            <div class="content__prise">
            <img class="star" src=${star}></img>
            <b>${coordinats[i].rating}</b>
            Кузов: от ${coordinats[i].prise}₽
            </div>
        </div>
      `
        ,   
  
    }}
    
    options={{   
      // openBalloon: false,
      // open: false, 
      iconLayout: 'default#image',
      iconImageHref: poi,
      
    }}

    
  />,  }
  
  )
  key++;
  
}

  return (
    <div style={{height: `${h +'px'}`,width: `${w +'px'}` }}>
      <YMaps query={{ apikey: 'f3c78576-996b-4eaa-84f8-12a8520d276a' }}>
        {/* <Loader isLoading={isLoading}/> */}
          {/* <Map width={'100%'} height={'100%'}
              defaultState={{
                center: [47.208208, 38.937189],
                zoom: 13,
                
              }}
            >
              {listPoint.map(el=> el.value) }
              
            <GeolocationControl options={{ float: "left" }} />
            <RouteButton options={{ float: "right" }} />
            <SearchControl options={{ float: "right" }} />
            <TrafficControl options={{ float: "right" }} />
            <ZoomControl options={{ float: "right" }} />
         </Map> */}
         <ConnectedMap />

      </YMaps>
    </div>
  );
}

export default MapComponent;
