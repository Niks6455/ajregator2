import React, {useEffect, useState } from "react";
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
   var name = "MOI CAM"
   var arrPhoto = []
}

// ---------------------------------------

window.scrollTo(0, 0);
document.body.classList.add('body__style');

   const screenHeight = window.screen.height
   // console.log(screenHeight);
   const Map__Height = screenHeight -50;
    return(
       <div className={styles.HomePage} >
          {/* <Header/>     */}
            <div style={{height: `${Map__Height +'px'}`} } className={styles.map}>
            <MapComponent h={Map__Height} />
            </div>
            <Wash time={time} address={address} name={name} arrPhoto={arrPhoto}/>
          {/* <Footer/> */}
       </div>
   
    ) 
   
   
}