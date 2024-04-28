import React from 'react';
import './Card.css'; // Assuming this is the path to your CSS file for styling

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
