import React from 'react';
import './Card.css';

const Card = ({image, heading, detail}) => {
  return (
    <div className="card-com">
        <img src={image} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="l-button">Learn more</button>
    </div>
  )
}

export default Card