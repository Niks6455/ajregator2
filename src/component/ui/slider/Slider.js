import React from 'react';
import styles from "./Slider.module.scss"
const Slider = ({ slides }) => {
  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <img key={index} src={slide} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  );
};

export default Slider;