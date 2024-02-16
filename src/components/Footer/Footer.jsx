import React from "react";
import style from './Footer.module.scss';

function Footer() {
    return(
        <footer className={style.footer}>
            <a className={style.footer__text} href="" target="_blank">
                Политика обработки персональных данных
            </a>
        </footer>
    );
}

export default Footer;