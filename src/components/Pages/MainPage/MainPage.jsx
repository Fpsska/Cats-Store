import { React, useRef, useEffect } from "react";
import Header from "../../Header/Header";
import CardList from "../../Card/CardLits";
import Footer from "../../Footer/Footer";
import SvgTemplate from "../../Common/SvgTemplate";
import SortButtonList from "../../SortButton/SortButtonList";
import Preloader from "../../Common/Preloader/Preloader";

const MainPage = (props) => {
  const scrollPoint = useRef();
  const scrollTop = () => {
    scrollPoint.current.scrollIntoView({ top: 0, behavior: "smooth" });
  };

  const testRequest = () => {
    props.requestHandler();
  };

  useEffect(() => {
    props.requestHandler(); // to request middleware
  }, []); // when Component did mount

  return (
    <div ref={scrollPoint} className="page">
      <Header catsCount={props.catsCount} headerLinks={props.headerLinks}/>
      <main>
        <div className="container">
          <div className="controls">
            <span className="controls__title">Сортировать по:</span>
            <SortButtonList
              cardsSort={props.cardsSort}
              sortButtons={props.sortButtons}
              toggleSortCards={props.toggleSortCards}
            />
          </div>
          <div className="gallery">
            {props.isFetching ? (
              <CardList
                cards={props.cards}
                toggleIsFavourite={props.toggleIsFavourite}
              />
            ) : (
              <Preloader />
            )}
            <button className="gallery__button button" onClick={testRequest}>
              Показать ещё
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

export default MainPage;
