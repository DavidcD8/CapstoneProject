import React from 'react';
import '../App.css';
import star from '../../src/assets/image/star.png';
import girl from '../../src/assets/image/girl.png';
import bussinessman2 from '../../src/assets/image/bussinessman2.png';
import businessman from '../../src/assets/image/businessman.png';
import woman from '../../src/assets/image/woman.png';



const Star = () => (
  <img src={star} alt="star" className="star" />
);

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        <div className="testimonial">
          <img className="avatar" src={girl} alt="John Doe" />
          <div className="rating">
            <Star /><Star /><Star /><Star /><Star />
          </div>
          <div className="name">John Doe</div>
          <div className="review">"The food was fantastic! Highly recommend."</div>
        </div>
        <div className="testimonial">
          <img className="avatar" src={bussinessman2} alt="Jane Smith" />
          <div className="rating">
            <Star /><Star /><Star /><Star /><Star />
          </div>
          <div className="name">Jane Smith</div>
          <div className="review">"Great atmosphere and delicious meals."</div>
        </div>
        <div className="testimonial">
          <img className="avatar" src={businessman} alt="Emily Johnson" />
          <div className="rating">
            <Star /><Star /><Star /><Star /><Star />
          </div>
          <div className="name">Emily Johnson</div>
          <div className="review">"Excellent service and tasty food."</div>
        </div>
        <div className="testimonial">
          <img className="avatar" src={woman} alt="Michael Brown" />
          <div className="rating">
            <Star /><Star /><Star /><Star />
          </div>
          <div className="name">Michael Brown</div>
          <div className="review">"I love this place! Will visit again."</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
