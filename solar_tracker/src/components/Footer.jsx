import React from 'react';
import './Footer.css';  // Importing CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaeat voluptatibus placeat nam, 
        commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-google"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-github"></i>
      </div>
      <p className="copyright">© 2020 Copyright: MDBootstrap.com</p>
    </footer>
  );
};

export default Footer;
