
import React, {useState, useRef} from "react";
import styles from './Wash.module.scss';
import Slider from './../slider/Slider';
import img1 from "./../../images/slider/1.jpg"
import img2 from "./../../images/slider/2.jpg"
import img3 from "./../../images/slider/3.jpg"
import right from "./../../images/slider/right.png"
import left from "./../../images/slider/left.png"
import bott from "./../../images/Home/arrow.png"
import top from "./../../images/Home/arrow2.png"
import Button from "./../Button";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

import iconLK from "./../../images/Home/icon_lk.png"
import iconHome from "./../../images/Home/icon_home.png"



const Wash = ({address, time, name, arrPhoto}) => {
    // console.log(arrPhoto[0])
    
    // if(arrPhoto.length !== 0){
    //     let a = String(`"${arrPhoto[0]}"`)
    //     // console.log(a)
    //     const img1 = require('./../../images/slider/1.jpg');
    //     const img2 = require('./../../images/slider/2.jpg');
    //     const img3 = require('./../../images/slider/3.jpg');

    // }
    // else {
    //     const img1 = require('./../../images/slider/1.jpg');
    //     const img2 = require('./../../images/slider/2.jpg');
    //     const img3 = require('./../../images/slider/3.jpg');

    // }

    

// const Wash = ({address, time, name}) => {

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

    const scrollImg = []
    for(var s=0; s < slides.length; s++ ){
        scrollImg.push({
            key: s,
            value: 
            <div className={styles.scroller__blok}>
             <img src={slides[s]}></img>
            </div>
        })
    }

    let [startIndex, setStartIndex] = useState(0);
    const [openInfo, setOpenInfo] = useState(false);

    const handleMenuClick = () => {
        setOpenInfo(!openInfo);
      };
    //   console.log(openInfo);
    const endIndex = startIndex + 3;
    const currentSlides = slides.slice(startIndex, endIndex);



    //_----------------------------------------------
    const [screenHeight, setScreenHeight] = useState(window.innerHeight - 60);

    const [position, setPosition] = useState({ x: 0, y: screenHeight  });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const ref = useRef(null);
  
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      setStartPosition({
        // x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
      setDragging(true);
      
    };
  
    const handleTouchMove = (event) => {
      if (dragging) {
        const touch = event.touches[0];
        setPosition({
        //   x: touch.clientX - startPosition.x,
          y: touch.clientY - startPosition.y,
        });
      }
    };
  
    const handleTouchEnd = () => {
      setDragging(false);
      if(position.y > screenHeight - 100){
        setPosition({
            //   x: touch.clientX - startPosition.x,
              y: screenHeight,
            });
      }
      if(position.y < 300){
        setPosition({
            //   x: touch.clientX - startPosition.x,
              y: screenHeight-375,
            });
      }
    };
  
    const style = {
        width: "100%",
        position: "absolute",
        top: position.y,
        
    //   userSelect: "none",

    };

  

    return(

        <div className='open__menu' ref={ref}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      style={style}
    //   className={openInfo ? 'open__menu' : 'close__menu'}

        
        >
            <div className={styles.Wash__info}>
            

  
            <div  className={styles.menu__butt}>
                <img className={styles.icon__lk} src={iconLK} alt="x"></img>
                {/* <img  className={styles.info__menu} onClick={handleMenuClick} src={openInfo ? bott : top } alt="btn__butt"></img> */}
                <div className={styles.button__top} onClick={handleMenuClick} src={openInfo ? bott : top }></div>
                <img className={styles.icon__home} src={iconHome} alt="x"></img>
            </div>
            
                <div className={styles.info}>   
                
                    <div className={styles.name}>
                        <p>{name}</p>
                        <p>{address}</p>
                         <Rating rating="3"/> 
                    </div>
                    <div className={styles.time}>
                        <p>Время работы:</p>
                        <p>{time}</p>
                    </div>
                </div>
                <div className={styles.scroller}>
                    {
                        scrollImg.map((el) =>(
                            el.value
                        ))

                    }
                 </div>
               {/* <div className={styles.slider}>
                    <Slider className={styles.slider__img} slides={currentSlides} /> 
                    <div className={styles.slider__but}>
                    <img  onClick={() => setStartIndex(startIndex === 0 ? startIndex = 0 : startIndex - 3)} src={left} alt="btn__left"></img>
                        <div className={styles.curcle__inner}>
                            <span style={startIndex === 0 ? {backgroundColor:"#6B7073", width:"9px", height:"9px"} : {backgroundColor:"#6B7073", opacity:"0.5"}} className={styles.curcle}></span>
                            <span style={startIndex === 3 ? {backgroundColor:"#6B7073", width:"9px", height:"9px"} : {backgroundColor:"#6B7073", opacity:"0.5"}} className={styles.curcle}></span>
                            <span style={startIndex === 6 ? {backgroundColor:"#6B7073", width:"9px", height:"9px"} : {backgroundColor:"#6B7073", opacity:"0.5"}} className={styles.curcle}></span>
                        </div>
                        <img  onClick={() => setStartIndex(startIndex === 6 ? startIndex = 6 : startIndex + 3)} src={right} alt="btn__right"></img>
                    </div>   
                </div> */}
                <div className={styles.button}>
                    <div className={styles.button__inner}>
                        <Link to="/WashPage"> <Button text={"Подробнее"} bg_color={"#4E78E2"} text_color={"#ffffff"} h={"30"} w={"100"}  size={"14"}/></Link>
                    </div>

                    <div className={styles.button__inner}>
                    <Link to="/StartAppoint">   <Button text={"Записаться"} bg_color={"#4E78E2"} text_color={"#ffffff"} h={"30"} w={"100"}  size={"14"}/></Link> 
                    </div>

                    <div className={styles.button__inner}>
                    <Button text={"Маршрут"} bg_color={"#4E78E2"} text_color={"#ffffff"} h={"30"} w={"100"}  size={"14"}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
   
   
}
export default Wash

