import React from "react";
import Header from "../Header/Header";
import CardList from "../Card/CardLits";
import Footer from "../Footer/Footer";

const Main = (props) => {
  const setGalleryDisplay = () => {
    console.log("cliked button >", typeof props.changeDisplay, props.changeDisplay);
    props.changeDisplay()
  }
  const startScroll = () => {
    console.log("scroll >", typeof props.scroll, props.scroll);
    props.scroll()
  }
  return (
    <div className="page">
      <Header headerLinks={props.headerLinks} />
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
            <CardList cards={props.cards} toggleIsFavourite={props.toggleIsFavourite}/>
            <button className="gallery__button button" onClick={setGalleryDisplay}>Показать еще 3</button>
            <button className="pagination" onClick={startScroll}></button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
