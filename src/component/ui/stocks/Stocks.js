import React from 'react'
import styles from './Stocks.module.scss'

const Stocks = ({props}) => {
	return (	
        <div className={styles.stocks}>
            <div className={styles.stock__inner}>
                {props.map((item) => (
                    <div key={item.id} className={styles.stock__text__all}>
                    <p className={styles.stock__id}>{item.id}</p>
                    <p className={styles.stock__text}>{item.text}</p>
                    <p className={styles.stock__date}>{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
	)
}

export default Stocks