import React from "react";
import Header from "../Header/Header";
import CardList from "../Card/CardLits";
import Footer from "../Footer/Footer";
import SvgTemplate from "../SvgTemplate";

const Main = (props) => {
  const showGallery = () => {
    // console.log(
    //   "cliked button >",
    //   typeof props.changeDisplay,
    //   props.changeDisplay
    // );
    // props.changeDisplay();

    document.querySelector(".gallery__wrapper").style.height = "auto";
    // document.querySelector(".gallery__wrapper").appendChild(document.querySelector(".card"))
    // console.log(props.cards.length);
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
            <button className="gallery__button button" onClick={showGallery}>
              Показать еще
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
