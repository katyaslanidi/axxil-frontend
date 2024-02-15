import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainImage from "../../images/mainImage.png";

function Main() {
  return (
    <>
      <Header />
      <section className="main">
        <div className="container">
          <h1 className="title">
            Вдохновляем предпринимателей, поднимая их бизнес на новые вершины.
          </h1>
          <h2 className="text">
            Благодаря эффектному дизайну, отстройки от конкурентов и построению
            результативной системы продаж
          </h2>
          <button className="button" type="button" name="button">
            Рассчитать стоимость
          </button>
        </div>
          <img className="image" src={mainImage} alt="картинка" />
      </section>
      <Footer />
    </>
  );
}

export default Main;
