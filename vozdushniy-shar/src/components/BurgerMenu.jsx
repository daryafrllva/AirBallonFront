
import React, { useState } from "react";
import logo from "../assets/svg-picture/logo.svg";
import tg from "../assets/images/tg.png";
import whatsapp from "../assets/images/whatsapp.png";
import phone from "../assets/images/phone.png";
import "../styles/blocks-styles/BurgerMenu.less";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="burger-btn"
        onClick={() => setOpen(true)}
        aria-label="Открыть меню"
        style={{ display: open ? 'none' : 'block' }}
      >
        <span className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      {open && (
        <div className="burger-menu-overlay" onClick={() => setOpen(false)} />
      )}
      <div className={`burger-menu-card${open ? ' open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Закрыть меню">×</button>
        <img src={logo} alt="Логотип" className="burger-logo" />
        <div className="burger-menu-bottom">
          <div className="burger-contacts">
            <div>Воздухоплавание<br />в Томске</div>
            <div>+7 903 955-20-61</div>
          </div>
          <div className="burger-socials">
            <a href="tel:+79039552061" target="_blank" rel="noopener noreferrer"><img src={phone} alt="phone" /></a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer"><img src={tg} alt="tg" /></a>
            <a href="https://wa.me/79039552061" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="wa" /></a>
          </div>
          <button className="burger-book-btn">Забронировать полёт</button>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
