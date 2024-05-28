import React from 'react';
import '../App.css';
import Logo from '../../src/assets/image/Logo.svg';
import instagram from '../../src/assets/image/instagram.png';
import twitter from '../../src/assets/image/twitter.png';
import facebook from '../../src/assets/image/facebook.png';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="social-media">
          <a href="https://facebook.com/facebook" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://twitter.com/twitter" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://instagram.com/instagram" target="_blank" rel="noopener noreferrer">
            <img src={instagram}alt="Instagram" />
          </a>
        </div>
        <div className="contact-info">
          <p>Contact Us:</p>
          <ul>
            <li>123 Main Street, City</li>
            <li>Phone: +1234567890</li>
            <li>Email: example@example.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
