import React from "react";
import styles from './HomePage.module.scss';
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Wash from "./../../ui/Wash__info__Home/Wash";

export default function HomePage() {
   const screenHeight = window.screen.height
   console.log(screenHeight);
   const Map__Height = screenHeight -50;
    return(
       <div className={styles.HomePage}>
          <Header/>   
            <div style={{height: `${Map__Height +'px'}`} } className={styles.map}></div>
            <Wash time={"Круглосуточно"} address={"Восточная ул. 10а"} name={"MOI CUM"} />
          <Footer/>
       </div>
   
    ) 
   
   
}