import MapComponent from "../../ui/Map/MapComponent";
import React, {useState} from "react";
import Header from "../../common/header/Header";
import styles from './WashPage.module.scss';
import Footer from "../../common/footer/Footer"
import Title from "../../ui/title/Title"
import Button from "../../ui/Button"
import Slider from "./../../ui/slider/Slider"
import img1 from "./../../images/slider/1.jpg"
import img2 from "./../../images/slider/2.jpg"
import img3 from "./../../images/slider/3.jpg"
import right from "./../../images/slider/right.png"
import left from "./../../images/slider/left.png"
import ReviewSlider from "../../ui/reviewsSlider/RewSlider";
import Stocks from "./../../ui/stocks/Stocks";
import { Link } from "react-router-dom";
export default function WashPage({timeWork="Круглосуточно", Price="150"}) {

 //подгрузить из бд для каждой моки свое!
  const slides = [
    img1,
    img2,
    img3,
    img2,
    img3,
    img1,
    img3,
    img1,
    img2,
  ];

  //подгрузить из бд для каждой моки свое!
  const reviews = [
    {
      text: 'Классная автомойка удобные боксы, вода теплая, напор хороший, зимой удобно мыть машину есть где попить кофе!',
      author: 'Автомойщик от бога'
    },
    {
      text: 'Классная автомойка вкусный кофе, разноцветная пена, есть различные варианты оплаты!',
      author: 'Роман в очках'
    },
    {
      text: 'Данная автомойка мне очень понравилась, есть бесплатные мощные пылесосы и теплая вода!',
      author: 'Паша Техник'
    }
  ];

  //подгрузить из бд для каждой моки свое!
   const stocks = [
     {
      id:"1",
      text: 'Каждая 5 кружка кофе в подарок',
      date: '1.09. — 31.09.'
     },
     {
      id:"2",
       text: 'Скидка 10% в день рождение',
       date: '22.11. — 22.12.'
     },
     {
      id:"3",
       text: 'Студентам скидка 5%',
       date: '22.11. — 22.12.'
     },
     {
      id:"4",
      text: 'Каждая 5 кружка кофе в подарок',
      date: '1.09. — 31.09.'
     },
     {
      id:"5",
       text: 'Скидка 10% в день рождение',
       date: '22.11. — 22.12.'
     },
     {
      id:"6",
       text: 'Студентам скидка 5%',
       date: '1.09. — 31.09.'
     }
   ];
  
  let [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 3;
  const currentSlides = slides.slice(startIndex, endIndex);

    return(
       <div className={styles.WashPage}>
           <Header/>
           <div className={styles.Wash__inner}>
              <div className={styles.Wash__name}>
                <Title text="Moi Cum"/>
              </div>
              <div className={styles.Wash__map}>

                <div className={styles.Wash__map__inner}>
                  <div className={styles.map}>
                  <MapComponent w={"300"} h={"250"}/>
                  </div>
                </div>

                <div className={styles.Wash__map__info}>
                  <Button text={"Маршрут"} bg_color={"#ffffff"} text_color={"#4E78E2"} h={"25"} w={"70"}  size={"12"}/>
                  <Button text={"Позвонить"} bg_color={"#ffffff"} text_color={"#4E78E2"} h={"25"} w={"70"}  size={"12"}/>
                  <div className={styles.Wash__map__text}>
                    <div className={styles.Wash__map__time}>Время работы: {timeWork}</div>
                      <div className={styles.Wash__map__price}>Средний чек: {Price}</div>
                  </div>
                </div>
              </div>

              <div className={styles.Wash__read}>
                <Link to="/StartAppoint"><Button text={"ЗАПИСАТЬСЯ"} bg_color={"#4E78E2"} text_color={"#ffffff"} h={"50"} w={"180"}  size={"12"}/></Link>
              </div>
            
              <div className={styles.slider}>
                  <div className={styles.slider__inner}>
                    <Slider className={styles.slider__img} slides={currentSlides} />
                      <div className={styles.slider__but}>
                        <img  onClick={() => setStartIndex(startIndex === 0 ? startIndex = 0 : startIndex - 3)} src={left} alt="btn__left"></img>
                          <div className={styles.curcle__inner}>
                              <span style={startIndex === 0 ? {backgroundColor:"#000000", width:"9px", height:"9px"} : {backgroundColor:"#000000", opacity:"0.5"}} className={styles.curcle}></span>
                              <span style={startIndex === 3 ? {backgroundColor:"#000000", width:"9px", height:"9px"} : {backgroundColor:"#000000", opacity:"0.5"}} className={styles.curcle}></span>
                              <span style={startIndex === 6 ? {backgroundColor:"#000000", width:"9px", height:"9px"} : {backgroundColor:"#000000", opacity:"0.5"}} className={styles.curcle}></span>
                          </div>
                          <img  onClick={() => setStartIndex(startIndex === 6 ? startIndex = 6 : startIndex + 3)} src={right} alt="btn__right"></img>
                      </div>
                    </div>   
                </div>

                <div className={styles.reviews}>
                  <ReviewSlider reviews={reviews}/>
                </div>

                <Title text="АКЦИИ"/>
                
                <div className={styles.stocks}>
                  <Stocks props={stocks}/>
                </div>
           </div>
             
           <Footer/>
       </div>
   
       
    ) 
   
   
}