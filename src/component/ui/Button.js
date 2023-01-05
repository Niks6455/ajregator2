import React from 'react'
import styles from './buttons.module.scss'

const Button = ({text, bg_color, text_color}) => {
	return (	
                <button className={styles.buttons}  style={{ background: `${bg_color}`, color: `${text_color}`}} >
                    {text}
                </button>
	)
}

export default Button