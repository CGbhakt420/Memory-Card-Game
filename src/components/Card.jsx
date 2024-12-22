/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.onClick(props.id)}>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
