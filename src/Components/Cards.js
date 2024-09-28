import React from 'react';
import '../App.css';
import delivery from '../assets/image/delivery.svg';

function Cards({ title, description, image, price }) {
  return (
    <div className="food-card">
      <img src={image} alt={title} className="food-card-image" />
      <div className="food-card-body">
        <div className="food-card-body-header">
          <div className="food-card-body-title-header">
            <h3 className="food-card-title">{title}</h3>
            <p className="food-card-price">{price}</p>
          </div>
          <p className="food-card-description">{description}</p>
        </div>
        <div className="food-card-delivery">
        <button className="food-card-delivery">
          <p className="food-card-delivery-title">Order Delivery</p>
          <img src={delivery} alt="Delivery Icon" className="delivery-icon" />

        </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
