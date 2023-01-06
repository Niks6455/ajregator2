import React from "react";
import styles from './Main.module.scss';
import Header from './../../common/header/Header';
import Layout from "../../common/Layout";
import Button from "../../ui/Button";
import Icon1 from './../../images/Main/Icons/Vector.png'
import Icon2 from './../../images/Main/Icons/Vector-1.png'
import Icon3 from './../../images/Main/Icons/Vector-2.png'
import Icon4 from './../../images/Main/Icons/Group 47.png'

var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );//Прокрутка с верху

var HeightY = document.documentElement.clientHeight ;//просто высота экрана
console.log(scrollHeight, HeightY);
export const Main = () => (

      
  
      <div className={styles.main__page}> 
            <Header/>
          
            <Layout>
                 
                  <div className={styles.main__inner}>
                        <div className={styles.main__first} >
                              <div className={styles.main__title}>
                                    <h1>С НАМИ МАШИНУ МЫТЬ ЛЕГЧЕ И КОМФОРТНЕЙ!</h1>
                              </div>

                              <div className={styles.main__button}>
                                    <Button text={"Далее"} bg_color={'white'} text_color={'#4E78E2'}  />  {/* window.scrollBy(x,y) */}
                              </div>
                            
                              <div className={styles.main__info}>
                                    <div className={styles.main__subinfo}>
                                          <div className={styles.main__infoIcons}>
                                                <img src={Icon1}></img>
                                          </div>
                                         
                                          <div className={styles.main__infoText}>
                                                <p>ВЫГОДНЫЕ АКЦИИ</p>
                                          </div>
                                   </div>
                                   <div className={styles.main__subinfo}>
                                          <div className={styles.main__infoIcons}>
                                                <img src={Icon2}></img>
                                          </div>
                                         
                                          <div className={styles.main__infoText}>
                                                <p>БОЛЬШОЙ ВЫБОР АВТОМОЕК</p>
                                          </div>
                                   </div>
                                   <div className={styles.main__subinfo}>
                                          <div className={styles.main__infoIcons}>
                                                <img src={Icon3}></img>
                                          </div>
                                         
                                          <div className={styles.main__infoText}>
                                                <p>УДОБНАЯ ЗАПИСЬ</p>
                                          </div>
                                   </div>
                                   <div className={styles.main__subinfo}>
                                          <div className={styles.main__infoIcons}>
                                                <img src={Icon4}></img>
                                          </div>
                                         
                                          <div className={styles.main__infoText}>
                                                <p>АКТУАЛЬНЫЙ РЕЙТИНГ</p>
                                          </div>
                                   </div>
                              </div>
                        </div>
                  </div>
            </Layout>
      </div>
)

export default Main