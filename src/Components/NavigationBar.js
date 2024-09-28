import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../../src/assets/image/Logo.svg';

function NavigationBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="logo-item">
          <img src={Logo} alt="Little Lemon Logo" className="logo" />
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
