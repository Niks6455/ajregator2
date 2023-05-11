import React from 'react';
import star1 from "./../../images/rating/1star.png";
import star2 from "./../../images/rating/2star.png";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fas fa-star"><img src={star1} alt='stars'></img></i>);//полные
    } else {
      stars.push(<i key={i} className="far fa-star"><img src={star2} alt='stars'></img></i>);//пустые
    }
  }

  return <div>{stars}</div>;
};

export default Rating;