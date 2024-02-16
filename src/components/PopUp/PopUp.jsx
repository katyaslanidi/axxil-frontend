import React from "react";
import style from "./PopUp.module.scss";
import Input from "../ui-kit/Input/Input";
import Item from "../ui-kit/Item/Item";
import Image from "../../images/popupImage.png";
// import closeButton from "../../images/closeButton.png";

function PopUp({ isOpen, onSubmit, onClose }) {
  isOpen = true;
  return (
    <div className={`${style.overlay} ${isOpen ? style.overlay_opened : ""}`}>
      <div className={style.popup}>
        <button
          type="button"
          onClick={onClose}
          className={style.popup__close}
        >
          {/* <img
            className={style.popup__close_image}
            src={closeButton}
            alt="Закрыть"
          /> */}
        </button>
        <h2 className={style.popup__title}>
          Заполните форму, чтобы рассчитать стоимость и получить презентацию
          агентства с работами
        </h2>
        <p className={style.popup__text}>
          Специалист агентства свяжется с вами в ближайшее время, уточнит задачу
          и сориентирует по стоимости работ
        </p>
        <form 
          className={style.popup__form}
          name="form"
          onSubmit={onSubmit}
        >
          <fieldset className={style.popup__container}>
            <Input
              id="name"
              name="name"
              placeholder="Ваше имя"
            />
            <Input
              id="companyName"
              name="companyName"
              placeholder="Название компании"
            />
            <div className={style.popup__items}>
              <Item 
                text="Телефон"
              />
              <Item
                text="telegram"
              />
              <Item
                text="whatshapp" 
              />
            </div>
            <Input 
              id="phone" 
              name="phone"
              placeholder="Телефон"
            />
          </fieldset>
          <button
            type="submit"
            className={style.popup__submit}
          >
            Рассчитать стоимость
          </button>
          <div className={style.popup__checkbox_container}>
            <input 
              className={style.popup__checkbox} 
              type="checkbox"
              id="checkbox"
              name="checkbox"
            ></input>
            <p className={style.popup__checkbox_text}>
              Даю согласие на <a className={style.popup__checkbox_link} href="" target="_blank">обработку персональных данных</a>
            </p>
          </div>
        </form>
        <img className={style.popup__image} src={Image} alt="фото"/>
      </div>
    </div>
  );
}

export default PopUp;
