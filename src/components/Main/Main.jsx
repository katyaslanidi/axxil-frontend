import React from "react";
import style from './Main.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainImage from "../../images/mainImage.png";

function Main() {
  return (
    <>
      <Header />
      <section className={style.main}>
        <div className={style.main__container}>
          <h1 className={style.main__title}>
            Вдохновляем предпринимателей, поднимая их бизнес на новые вершины.
          </h1>
          <h2 className={style.main__text}>
            Благодаря эффектному дизайну, отстройки от конкурентов и построению
            результативной системы продаж
          </h2>
          <button className={style.main__button} type="button" name="button">
            Рассчитать стоимость
          </button>
        </div>
          <img className={style.main__image} src={mainImage} alt="картинка" />
      </section>
      <Footer />
    </>
  );
}

export default Main;
