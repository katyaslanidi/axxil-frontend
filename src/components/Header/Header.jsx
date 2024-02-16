import React from "react";
import style from './Header.module.scss'
import Logo from "../../images/logo2.png";
import telegramIcon from "../../images/telegramIcon.png";
import whatsAppIcon from "../../images/whatsAppIcon.png";

function Header() {
  return (
    <header className={style.header}>
      <img className={style.header__logo} src={Logo} alt="Логотип" />
      <div className={style.header__icons}>
        <a className={style.header__link} href="" target="_blank">
          <img className={style.header__icon} src={telegramIcon} alt="Telegram" />
        </a>
        <a className={style.header__link} href="" target="_blank">
          <img className={style.header__icon} src={whatsAppIcon} alt="WhatsApp" />
        </a>
      </div>
    </header>
  );
}

export default Header;
