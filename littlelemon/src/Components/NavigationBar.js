import React from 'react';
import '../App.css';
import logo from '../../src/assets/image/logo.png';

function NavigationBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="logo-item">
        <img src={logo} alt="Little Lemon Logo" className="logo" /> 
        </li>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
