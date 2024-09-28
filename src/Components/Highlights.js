import React from 'react';
import '../App.css';
import greeksalad from '../assets/image/greeksalad.jpg';
import lemondessert from '../assets/image/lemondessert.jpg';
import bruschetta from '../assets/image/bruschetta.svg';

import Cards from './Cards';

function Highlight() {
  const specialsData = [
    {
      title: 'Greek Salad',
      description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: greeksalad,
      price: '$12.99'
    },
    {
      title: 'Bruschetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: bruschetta,
      price: '$5.99'
    },
    {
      title: 'Lemon Dessert',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: lemondessert,
      price: '$5.00'
    }
  ];

  return (
    <section id="specials" className="highlight-section">
      <div className="specials-header">
        <h2>This Week's Specials</h2>
        <button className="online-menu-button">Online Menu</button>

      </div>
      <div className="specials-list">
        {specialsData.map((special, index) => (
          <Cards
            key={index}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Highlight;
