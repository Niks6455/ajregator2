import React from 'react'
import styles from './card.module.scss'

const Card = ({text, bgImage}) => {
    return(
        <div className={styles.card} style={{ backgroundImage: `url(${bgImage})`}} >
            <div className={styles.text}>
                <p>{text}</p>
            </div>
       </div> 
    )  
   
}
export default Card