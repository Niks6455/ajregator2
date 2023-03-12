import React from "react";
import styles from './Title.module.scss';

const Title = ({text}) => {
	return (	
    <div className={styles.title}>
    <div className={styles.title__inner}>
        <h2>{text}</h2>
    </div>
  </div>
	)
}

export default Title