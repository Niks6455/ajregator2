import React, { useEffect, useState, useRef, useMemo} from 'react';
import { YMaps, Map, Placemark, GeolocationControl,RouteButton, SearchControl, TrafficControl, ZoomControl, withYMaps, Balloon,  RouteEditor, Polyline, RoutePanel, Marker} from 'react-yandex-maps';
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
// props.coordinats в homePage
// var props.coordinats = [ //точки которые берем с бд (координаты и данные об автомойке)
//   {x:47.208208, y:38.937189, content: "Автомойка - 1", prise:500, rating: 4.3, adres: "Ул. Автомоячная 1а"}, 
//   {x:47.200551, y:38.916079, content: "Автомойка - 2", prise:1500, rating: 3.3, adres: "Ул. Автомоячная 2а"},
//   {x:47.217043, y:38.920761, content: "Автомойка - 3", prise:100, rating: 5.0, adres: "Ул. Автомоячная 3а"},
//   {x:47.224817, y:38.922566, content: 'Реал', prise:300, rating: 4.3, adres: "Ул. Автомоячная 4а"}, 
//   {x:47.233268, y:38.915890, content: 'Автомойка 4', prise:400, rating: 2.2, adres: "Ул. Автомоячная 5а"},
//   {x:47.256496, y:38.895906, content: 'Автомойка на стоянке', prise:600, rating: 4.4, adres: "Ул. Автомоячная 6а"}, 
// ]
var key = 0


const elementsPoint = 0


function MapComponent( props) {

  const [isLoading, setIsLoading] = useState(true);


//-------------------------------------------------------------
//------------------------------------------------------------
// определим местоположение 

useEffect(() => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        props.setMarshrut([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        // alert('Ошибка при определении местоположения', error);
        props.setMarshrut([47.202278, 38.935119])
      }
    );
  } else {
    alert('Геолокация не поддерживается вашим браузером');
  }
}, []);






  // -----------------------------------------------------
  const PositionedMap = React.memo(({ ymaps }) => {
    // const [loadedCoords, setLoading] = React.useState(false);
    //   const onLoad = () => {
    //   ymaps.geolocation.geocode
    //     .get({
    //       provider: "browser",
    //       mapStateAutoApply: true
    //     })
    //     .then(res => {
    //       setLoading(true);
    //       setIsLoading(false);
    //     });
    // };
    

    useEffect(() => {
      // onLoad();
      // setLoading(true);

    }, []);

    // if(!loadedCoords){
    //   return(
    //     <div>Loading...</div>
    //   )
    // }


    return (
      (
        
        <Map width={'100%'} height={'100%'}
          state={{
            center: [47.208208, 38.937189],
            zoom: 13
          }}
        >
          {listPoint.map(el=> el.value) }
          <GeolocationControl options={{ float: "left" }} />
            <RouteButton options={{
                float: "right",

              }}
               />
            <SearchControl options={{ float: "right" }} />
            <TrafficControl options={{ float: "right" }} />
            <ZoomControl options={{ float: "right" }} />
            {/* <RouteEditor
            /> */}

        </Map>
        
      )
    );
    
  });
  const ConnectedMap = useMemo(() => {
    return withYMaps(PositionedMap, true, [["geolocation", "geocode"]]);
  }, [ listPoint]);
  // -----------------------------------------------------listPoint

  
//функция которая забирает html код у балуна автомойки на которую нажали и достает из нее данные
  function openBalun(event){
    // console.log('Clicked')
    // console.log(event)
    // console.log(event.originalEvent.target.geometry._coordinates)

    // var htmltext = event.originalEvent.target.properties._data.balloonContentBody;
    // console.log(htmltext);
    const html = event.originalEvent.target.properties._data.balloonContentBody;
    const range = document.createRange();
    const divBalun = range.createContextualFragment(html).querySelector('div');
    // console.log(divBalun);
    const id = divBalun.getAttribute('id');
    // console.log(id); // выведет 'myDiv' в консоль
    props.setIdContetnt(id);

    // props.mapRef.current = props.coordinats[id].content;

    props.funOpenWash()


  }
  const [openWash, setOpenWash] = useState(false);
  

  function fun(){
    setOpenWash(true)
    // alert(openWash)
  }


for(var i = 0; i < props.coordinats.length; i++){
  listPoint.push(
    {value:<Placemark id={i}  onClick={openBalun} 
    modules={["geoObject.addon.balloon"]}
    defaultGeometry={[props.coordinats[i].x, props.coordinats[i].y]}
    
    properties={{

      balloonContentBody: 
      `<div class="content__body" id=${i} onClick=${fun} >
            <div  class="content__text">${props.coordinats[i].content}</div>

            <div class="content__prise">
            
            Кузов: от ${props.coordinats[i].prise}₽
            </div>
        </div>
      `
        ,   
  
    }}
    // звезды
    //<img class="star" src=${star}></img>
    // <b>${props.coordinats[i].rating}</b>
    
    options={{   
      iconLayout: 'default#image',
      iconImageHref: poi,
    }}
  > 
  </Placemark>,  }
  )
  key++;
}

  return (
    <div style={{height: `${props.h +'px'}`,width: `${props.w +'px'}` }}>
      <YMaps query={{ apikey: 'f3c78576-996b-4eaa-84f8-12a8520d276a' }}>
        <ConnectedMap />
      </YMaps>
    </div>
  );
}

export default MapComponent;
