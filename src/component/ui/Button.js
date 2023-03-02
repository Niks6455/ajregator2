import React from 'react'
import styles from './buttons.module.scss'

const Button = ({text, bg_color, text_color, h, w,size }) => {
	return (	
                <button className={styles.buttons}  style={{ background: `${bg_color}`, fontSize: `${size +'px'}`, color: `${text_color}`, width: `${w +'px'}`, height: `${h +'px'}`} }>
                    {text}
                </button>
	)
}

export default Button