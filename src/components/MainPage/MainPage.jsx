import React from "react";
import Header from "../Header/Header";
import CardList from "../Card/CardLits";
import Footer from "../Footer/Footer";

const Main = (props) => {
  return (
    <div className="page">
      <Header id={props.id} text={props.text} headerLinks={props.headerLinks} />
      <main>
        <div className="container">
          <div className="controls">
            <span className="controls__title">Сортировать по:</span>
            <select className="controls__menu ">
              <option>Цене</option>
            </select>
            <select className="controls__menu controls__menu_age">
              <option>Возрасту</option>
            </select>
          </div>
          <div className="gallery">
            <CardList cards={props.cards} />
            <button className="gallery__button button">Показать еще 3</button>
            <button className="pagination"></button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
