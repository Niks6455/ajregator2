import React, { useState } from 'react';
import styles from './RewSlider.module.scss';
import left from "./../../images/slider/left11.png"
import right from "./../../images/slider/right1.png"
const Slider = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const lastIndex = reviews.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider__container}>
      <div className={styles.slider__content}>
        {reviews.map((review, index) => (
          <div
            key={index}
              className= {`${styles.slide} ${index === currentIndex ? styles.active__slide : ''}`}>
            <p className={styles.review__text}>{review.text}</p>
            <p className={styles.review__author}>{review.author}</p>
          </div>
        ))}
      </div>
      <button className={styles.prev__btn} onClick={handlePrevClick}>
        <img src={left} alt="prev"></img>
      </button>
      <button className={styles.next__btn} onClick={handleNextClick}>
      <img src={right} alt="next"></img>
      </button>
    </div>
  );
};

export default Slider;
