import React from "react";
import style from "./PopUp.module.scss";
import Input from "../ui-kit/Input/Input";
import Item from "../ui-kit/Item/Item";

function PopUp({ isOpen }) {
  isOpen = true;
  return (
    <div className={`${style.overlay} ${isOpen ? style.overlay_opened : ""}`}>
      <div className={style.popup}>
        <button className={style.popup__close}></button>
        <h2 className={style.popup__title}></h2>
        <p className={style.popup__text}></p>
        <form className={style.popup__form}>
          <fieldset className={style.popup__container}>
            <Input placeholder="" />
            <Input placeholder="" />
            <Item text="" />
            <Item text="" />
            <Item text="" />
            <Input placeholder="" />
          </fieldset>
          <button className={style.popup__submit}></button>
          <input className={style.popup__checkbox}></input>
        </form>
        <img />
      </div>
    </div>
  );
}

export default PopUp;
