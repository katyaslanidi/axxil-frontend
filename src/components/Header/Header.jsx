import React from "react";
import "./Header.css";
import Logo from "../../images/logo2.png";
import telegramIcon from "../../images/telegramIcon.png";
import whatsAppIcon from "../../images/whatsAppIcon.png";

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={Logo} alt="Логотип" />
      <div className="social-icons">
        <a className="social-link" href="" target="_blank">
          <img className="social-icon" src={telegramIcon} alt="Telegram" />
        </a>
        <a className="social-link" href="" target="_blank">
          <img className="social-icon" src={whatsAppIcon} alt="WhatsApp" />
        </a>
      </div>
    </header>
  );
}

export default Header;
