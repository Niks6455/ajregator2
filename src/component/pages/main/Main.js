import styles from './Main.module.scss';
import Header from './../../common/header/Header';
import Layout from "../../common/Layout";
import Button from "../../ui/Button";
import Icon1 from './../../images/Main/Icons/Vector.png';
import Icon2 from './../../images/Main/Icons/Vector-1.png';
import Icon3 from './../../images/Main/Icons/Vector-2.png';
import Icon4 from './../../images/Main/Icons/Group 47.png';
import card from './../../images/Main/elem/card.png';
import Footer from './../../common/footer/Footer.js';
import { Link } from "react-router-dom";
import React from 'react';


var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );//Прокрутка с верху

var HeightY = document.documentElement.clientHeight ;//просто высота экрана
console.log(scrollHeight, HeightY);

export default function Main(){
    
          return(
            <div className={styles.main__page}> 
                  <Header/>
                        <div className={styles.main__inner}>
                              <div className={styles.main__first} >
                                    <Layout>
                                          <div className={styles.main__title}>
                                                <h1>С НАМИ МАШИНУ МЫТЬ ЛЕГЧЕ И КОМФОРТНЕЙ!</h1>
                                          </div>

                                          <div className={styles.main__button}>
                                          <a href='#section1'>   <Button text={"Далее"} bg_color={'white'} text_color={'#4E78E2'}/></a>
                                          </div>
                                    
                                          <div className={styles.main__info}>
                                                <div className={styles.main__subinfo}>
                                                      <div className={styles.main__infoIcons}>
                                                            <img src={Icon1} alt="img"></img>
                                                      </div>
                                                
                                                      <div className={styles.main__infoText}>
                                                            <p>ВЫГОДНЫЕ АКЦИИ</p>
                                                      </div>
                                          </div>
                                          <div className={styles.main__subinfo}>
                                                      <div className={styles.main__infoIcons}>
                                                            <img src={Icon2} alt="img"></img>
                                                      </div>
                                                
                                                      <div className={styles.main__infoText}>
                                                            <p>БОЛЬШОЙ ВЫБОР АВТОМОЕК</p>
                                                      </div>
                                          </div>
                                          <div className={styles.main__subinfo}>
                                                      <div className={styles.main__infoIcons}>
                                                            <img src={Icon3} alt="img"></img>
                                                      </div>
                                                
                                                      <div className={styles.main__infoText}>
                                                            <p>УДОБНАЯ ЗАПИСЬ</p>
                                                      </div>
                                          </div>
                                          <div className={styles.main__subinfo}>
                                                      <div className={styles.main__infoIcons}>
                                                            <img src={Icon4} alt="img"></img>
                                                      </div>
                                                
                                                      <div className={styles.main__infoText}>
                                                            <p>АКТУАЛЬНЫЙ РЕЙТИНГ</p>
                                                      </div>
                                          </div>
                                          </div>
                                    </Layout>
                              </div>
                              

                            
                              <div className={styles.main__two} id="section1">

                          
                                    <Layout>
                                          <div className={styles.main__twoInner}> 
                                          <h1 className={styles.main__textZagl}>УДОБНО ДЛЯ ВОДИТЕЛЯ</h1>
                                                <div className={styles.card}>
                                          
                                                      <img src={card} alt="img"></img>
                                                </div>
                                                <div className={styles.card__text}>
                                                
                                                      <p>Навигатор построит маршрут до ближайшей автомойки</p>
                                                      <a href='#section2'>  <Button text={"Далее"} bg_color={'white'} text_color={'#4E78E2'}  /> </a>
                                                </div>
                                          
                                          </div>        
                                    </Layout>  
                              
                              </div>
                             

                              
                              <div className={styles.main__three} >
                                    <Layout>
                                          <div className={styles.main__threeInner}> 
                                          <h1 className={styles.main__textTitle}>Мойте свой автомобиль вместе с нами!</h1>
                                          <Link to='/Register' id="section2">
                                                <Button text={"Зарегестрироваться"} bg_color={'#4E78E2'} text_color={'#ffffff'} size={"22"} /> 
                                          </Link>  
                                          </div>        
                                    </Layout>  
                              
                              </div>
                        </div>
                  <Footer />
            </div>
      )   
  
}
