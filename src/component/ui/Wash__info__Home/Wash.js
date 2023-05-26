
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
import iconHome from "./../../images/Home/icon_team.png"



const Wash = ({address, time, name, arrPhoto, reyting, openMyWash, setOpenMyWash, funMarshrut, coordinats}) => {
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


///============================================

    ///данные которые передаем в подробнее
    var data = coordinats


///============================================

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
            <div className={styles.scroller__blok} key={s+100}> 
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
      if(touch.clientY- position.y < 100){
        setDragging(true);

      }
    //   console.log(touch.clientY- position.y)
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
      if(position.y > screenHeight - 50){
        setPosition({
            //   x: touch.clientX - startPosition.x,
              y: screenHeight,
            });
      }
      if(position.y < 350){
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



    const styleIcon = {
        opacity: 0,
        transition: "all 1s ease-in-out",
        pointerEvents: 'none',
    };
    const styleIcon2 = {
        opacity: '60%',
        transition: "all 1s ease-in-out",
        
    };
   
    if(openMyWash === true && position.y > window.innerHeight-80){
      setPosition({
          y: screenHeight-75,
        });

        setOpenMyWash(false)
    }
// console.log("(window.innerHeight",window.innerHeight)

    return(

        <div className='open__menu' ref={ref}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={style}
        >
            <div className={styles.Wash__info}>
            

  
            <div  className={styles.menu__butt}>
                <Link to="/MyPage"><img className={styles.icon__lk} src={iconLK} alt="x"  style={position.y < 400? styleIcon: styleIcon2}></img></Link> 
                {/* <img  className={styles.info__menu} onClick={handleMenuClick} src={openInfo ? bott : top } alt="btn__butt"></img> */}
                <div className={styles.button__top} onClick={handleMenuClick} src={openInfo ? bott : top } ></div>
                <Link to="/About"><img className={styles.icon__home} src={iconHome} alt="x" style={position.y < 400? styleIcon: styleIcon2}></img></Link>
            </div>
            
                <div className={styles.info}>   
                
                    <div className={styles.name}>
                        <p>{name}</p>
                        <p>{address}</p>
                         <Rating rating={reyting}/> 
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
              
                <div className={styles.button}>
                    <div className={styles.button__inner}>
                        <Link to= '/WashPage' state = {{ data: data }}> <Button text={"Подробнее"} bg_color={"#4E78E2"} text_color={"#ffffff"} h={"30"} w={"100"}  size={"14"}/></Link>
                    </div>

                    <div className={styles.button__inner}>
                    <Link to="/StartAppoint" state = {{ data: data }}>   <Button text={"Записаться"} bg_color={"#4E78E2"} text_color={"#ffffff"} h={"30"} w={"100"}  size={"14"}/></Link> 
                    </div>

                    <div className={styles.button__inner} onClick={funMarshrut}>
                    <Button text={"Маршрут"} bg_color={"#4E78E2"} text_color={"#ffffff"} h={"30"} w={"100"}  size={"14"}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
   
   
}
export default Wash

