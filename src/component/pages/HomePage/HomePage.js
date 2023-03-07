import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import styles from './HomePage.module.scss';
import Header from "../../common/header/Header";
import Layout from "../../common/Layout";
import Footer from "../../common/footer/Footer";
import Wash from "./../../ui/Wash__info__Home/Wash";

export default function HomePage() {
    return(
       <div className={styles.HomePage}>
          <Header/>
         
            <div className={styles.map}></div>

            <Wash time={"Круглосуточно"} adress={"Восточная ул. 10а"}/>
          
         
          <Footer/>
       </div>
   
    ) 
   
   
}