
import React, {useState} from "react";
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

const Wash = ({address, time, name}) => {

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

    let [startIndex, setStartIndex] = useState(0);
    const [openInfo, setOpenInfo] = useState(false);

    const handleMenuClick = () => {
        setOpenInfo(!openInfo);
      };
      console.log(openInfo);
    const endIndex = startIndex + 3;
    const currentSlides = slides.slice(startIndex, endIndex);

    return(

        <div className={openInfo ? 'open__menu' : 'close__menu'}>
            <div className={styles.Wash__info}>
            <div  className={styles.menu__butt}>
                <img  className={styles.info__menu} onClick={handleMenuClick} src={openInfo ? bott : top } alt="btn__butt"></img>
            </div>
            
                <div className={styles.info}>   
                
                    <div className={styles.name}>
                        <p>{name}</p>
                        <p>{address}</p>
                        {/* <Rating rating="423"/> */}
                    </div>
                    <div className={styles.time}>
                        <p>Время работы:</p>
                        <p>{time}</p>
                    </div>
                </div>
               <div className={styles.slider}>
                 
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
                </div>
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

