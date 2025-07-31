import React from "react";
import phoneIcon from '../assets/images/phone.png';
import tgIcon from '../assets/images/tg.png';
import whatsappIcon from '../assets/images/whatsapp.png';

function ContactCard() {
  return (
    <div className="contact-card-container">
        <h2>К полету готовы!</h2>
        <div>Свяжитесь с нами удобным для Вас способом</div>
        <div className="contact-cart-buttons">
            <button className="contact-btn phone">
              <img src={phoneIcon} alt="phone" />
            </button>
            <button className="contact-btn tg">
              <img src={tgIcon} alt="telegram" />
            </button>
            <button className="contact-btn whatsapp">
              <img src={whatsappIcon} alt="whatsapp" />
            </button>
        </div>
    </div>
  );
}

export default ContactCard;
