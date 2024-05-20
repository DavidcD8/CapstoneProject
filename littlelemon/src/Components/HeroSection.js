import React from 'react';
import '../../src/App.css';
import restauranfood from '../../src/assets/image/restauranfood.jpg';

function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned<br />
            Mediterranean restaurant,<br />
            focused on traditional<br />
            recipes served with a modern<br />
            twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <img src={restauranfood} alt="Little Lemon heroimg" className="hero_image" /> 
      </div>
    </section>
  );
}

export default HeroSection;
