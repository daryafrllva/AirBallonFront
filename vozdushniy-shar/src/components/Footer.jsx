import React from "react";
import logo from '../assets/svg-picture/logo.svg';

function Footer() {
  return (
    <footer className="footer-block">
      <div className="footer-block__logo">
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="footer-block__nav">
        <a href="#about-fly">О ПРОЕКТЕ</a>
        <a href="#formatblock">УСЛУГИ</a>
        <a href="#contact-card">КОНТАКТЫ</a>
      </nav>
    </footer>
  );
}

export default Footer;
