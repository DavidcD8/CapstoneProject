import React from 'react';
import MariondAdrian from '../../src/assets/image/MariondAdrian.jpg';
import restaurant from '../../src/assets/image/restaurant.jpg';
import '../App.css';

function AboutSection() {
  return (
    <div className="about">
      <div className="about-text">
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Little Lemon is a family-owned Mediterranean restaurant <br />
          based in Chicago. We focus on traditional recipes<br />
          served with a modern twist. <br />
          Our aim is to provide our customers with an unforgettable<br />
          dining experience, featuring the freshest ingredients<br />
          and a warm, welcoming atmosphere.
        </p>
      </div>
      <div className="about-images">
        <img
          className="about-Restaurant"
          src={restaurant}
          alt="Restaurant"
          height={200}
          width={200}
        />
        <img
          className="about-MariondAdrian"
          src={MariondAdrian}
          alt="Mario and Adrian"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}

export default AboutSection;
