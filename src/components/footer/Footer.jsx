import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Ghazanfar Ali</a>

      <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/ghazanfar.ali.31105" target="_blank"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/ghazanfar-ali-kz/" target="_blank"><FaLinkedinIn /></a>
        <a href="https://twitter.com/gak_92" target="_blank"><FaTwitter /></a>
        <a href="https://github.com/gak92/" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ghazanfar Ali Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
};

export default Footer;
