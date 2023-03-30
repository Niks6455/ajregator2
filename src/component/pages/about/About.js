
import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Layout from "../../common/Layout";
import Style from './About.module.scss';
import Button from "./../../ui/Button";
import Card from "../../ui/Card";
import img1 from "./../../images/About/photo_car.png";
import img2 from "./../../images/About/work.png";

export default function About() {
    return(
       <div className={Style.About}>
            <Layout>   

                <Header/>
                <div className={Style.About__inner}>
                    <div className={Style.About__content}>
                        <div className={Style.About__title}>
                            <div className={Style.About__title__text}> <h1>О нас</h1></div>
                        </div>
                        <div className={Style.About__title__inner}>
                            <div className={Style.About__img}>
                                <div className={Style.About__img__inner}></div>
                            </div>
                            <div className={Style.About__text}>
                                <div className={Style.About__text}>Наш агрегатор автомоек позволяет решать самые распространенные проблемы связанные с очередями и неудобствами при выборе автомойки.</div> 
                                <div className={Style.About__button}>
                                    <Button text={'Связаться'} bg_color={'#4E78E2'} text_color={'#ffffff'} w = '145' h = '50' size= '20'/>
                                </div>
                              
                            </div>
                        </div>
                      
                    </div>
 

                    <div className={Style.About__card}>
                        <Card text="52 партнера" bgImage={img1}/> 
                        <Card text="Более 10 000 пользователей" bgImage={img2}/> 
                    </div>

                </div>
              
                <div className={Style.About_lastText} >
                   <Button bg_color="#4E78E2" text="Стать Партнером" size="18" />
                </div>
                
            </Layout>
            
              <Footer/>
          
             
       </div>
   
    ) 
   
   
}