import React from "react";
import Header from "../Header/Header";
import CardList from "../Card/CardLits";
import Footer from "../Footer/Footer";
import SvgTemplate from "../SvgTemplate";

const Main = (props) => {
  const setGalleryDisplay = () => {
    console.log(
      "cliked button >",
      typeof props.changeDisplay,
      props.changeDisplay
    );
    props.changeDisplay();
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
            <CardList
              cards={props.cards}
              toggleIsFavourite={props.toggleIsFavourite}
            />
            <button
              className="gallery__button button"
              onClick={setGalleryDisplay}
            >
              Показать еще 3
            </button>
            <button className="pagination" onClick={scrollTop}>
              <span className="icon">
                <SvgTemplate id="arrow" />
              </span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
