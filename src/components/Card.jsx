import React from 'react';
import './Card.css';


//static component with text and image
const Card = (props) => {
  return (
    <div className = "milestone-card">
      <h3>{props.title}</h3>
      <h5>{props.tags}</h5>
      <p>{props.text}</p>
      <img src={props.image} alt="milestone"></img>
    </div>
  )
}

export default Card