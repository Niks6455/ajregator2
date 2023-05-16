import React, {useEffect, useState, useRef } from "react";
import styles from './HomePage.module.scss';
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Wash from "./../../ui/Wash__info__Home/Wash";
import MapComponent from "../../ui/Map/MapComponent";

import { url_HomePage } from "../../../getDataBD";

// import MyMap from "../map/MyMap";

export default function HomePage() {
   useEffect(() => {
      // Запрещаем прокрутку на странице при монтировании компонента
      document.body.style.overflow = 'hidden';
      // Возвращаем прокрутку при размонтировании компонента
      return () => {
        document.body.style.overflow = 'auto';
      }
    }, []);
  

 // Запросим от бэка 

const [idContent, setIdContetnt] = useState(0);
const mapRef = useRef(0);
// const coordinats = [ //точки которые берем с бд (координаты и данные об автомойке)
//  {x:47.208208, y:38.937189, content: "Автомойка - 1", prise:500, rating: 4.3}, 
//  {x:47.200551, y:38.916079, content: "Автомойка - 2", prise:1500, rating: 3.3},
//  {x:47.217043, y:38.920761, content: "Автомойка - 3", prise:100, rating: 5.0},
//  {x:47.224817, y:38.922566, content: 'Реал', prise:300, rating: 4.3}, 
//  {x:47.233268, y:38.915890, content: 'Автомойка 4', prise:400, rating: 2.2},
//  {x:47.256496, y:38.895906, content: 'Автомойка на стоянке', prise:600, rating: 4.4}, 
// ]



 const [dataGet, setDataGet] = useState([]);


 useEffect(() => {
   async function fetchData() {
     const response = await fetch(url_HomePage);
     const jsonData = await response.json();
     setDataGet(jsonData);
   }
   fetchData();
 }, []);


 console.log("data",dataGet)
if(dataGet.length!== 0){ // если данные нашлись 
   var time = dataGet[0].homePageInfo.time
   var address = dataGet[0].homePageInfo.address
   var name = dataGet[0].homePageInfo.name
   var arrPhoto = dataGet[0].homePagePhoto

 
}
else{   // если данные не загрузились
   var time = "Круглосуточно"
   var address = "Восточная ул. 10а"
   var name = idContent
   var arrPhoto = []
}

// ---------------------------------------

window.scrollTo(0, 0);
// document.body.classList.add('body__style');


function funOpenWash(){
   console.log('open');
 }

   const screenHeight = window.screen.height
   // console.log(screenHeight);
   const Map__Height = screenHeight -50;
    return(
       <div className={styles.HomePage} >
          {/* <Header/>     */}
            <div style={{height: `${Map__Height +'px'}`} } className={styles.map}>
            <MapComponent h={Map__Height} mapRef={mapRef} setIdContetnt={setIdContetnt}/>
            </div>
            <Wash time={time} address={address} name={name} arrPhoto={arrPhoto} />
          {/* <Footer/> */}
       </div>
   
    ) 
   
   
}