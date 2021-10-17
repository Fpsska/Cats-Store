import { React, useRef } from "react";
import Header from "../Header/Header";
import CardList from "../Card/CardLits";
import Footer from "../Footer/Footer";
import SvgTemplate from "../SvgTemplate";
import SortButtonList from "../SortButton/SortButtonList";

const Main = (props) => {
  const scrollPoint = useRef(null);

  const scrollTop = () => {
    scrollPoint.current.scrollIntoView({ top: 0, behavior: "smooth" });
  };

  // const sortByAge = (array) => {
  //   const temp = JSON.parse(JSON.stringify(array)); // независимая глубокая копия массива
  //   temp.forEach((item) => {
  //     item.age = parseInt(item.age.replace(/\d\./g, ""));
  //   });
  //   temp.sort((a, b) => (a.age > b.age ? 1 : -1));
  //   console.log("temp from FUNC> ", temp);
  // };

  return (
    <div ref={scrollPoint} className="page">
      <Header headerLinks={props.headerLinks} />
      <main>
        <div className="container">
          <div className="controls">
            <span className="controls__title">Сортировать по:</span>
            <SortButtonList sortButtons={props.sortButtons} />
          </div>
          <div className="gallery">
            <CardList
              cards={props.cards}
              toggleIsFavourite={props.toggleIsFavourite}
            />
            <button className="gallery__button button">Показать еще</button>
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
