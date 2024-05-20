import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="social-media">
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
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
