
import React from "react";
import styles from './Wash.module.scss';
import Slider from './../slider/Slider';

const Wash = ({adress, time}) => {
    return(
      
            <div className={styles.Wash__info}>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <p>MOI CAM</p>
                        <p>{adress}</p>
                    </div>
                    <div className={styles.time}>
                        <p>Время работы:</p>
                        <p>{time}</p>
                    </div>
                </div>
                <div className={styles.img}>
                    <Slider/>
                </div>
                <div className={styles.button}></div>
            </div>

    ) 
   
   
}
export default Wash

