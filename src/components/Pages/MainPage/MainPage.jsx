import { React, useEffect, useRef } from "react";
import CardList from "../../Card/CardLits";
import SvgTemplate from "../../Common/SvgTemplate";
import SortButtonList from "../../SortButton/SortButtonList";
import Preloader from "../../Common/Preloader/Preloader";

const MainPage = (props) => {
  const scrollPoint = useRef();
  const scrollTop = () => {
    scrollPoint.current.scrollIntoView({ top: 0, behavior: "smooth" });
  };

  const fetchRequest = () => {
    props.requestHandler();
  };

  useEffect(() => {
    props.requestHandler();
    console.log("requestHandler");
  }, []);

  return (
    <>
      <main ref={scrollPoint}>
        <div className="container">
          <div className="controls">
            <span className="controls__title">Сортировать по:</span>
            <SortButtonList
              isFetching={props.isFetching}
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
            <button
              className="gallery__button button"
              disabled={props.isFetching ? "" : true}
              onClick={fetchRequest}
            >
              Показать ещё
            </button>
            <button
              className="pagination"
              disabled={props.isFetching ? "" : true}
              onClick={scrollTop}
            >
              <span className="icon">
                <SvgTemplate id="arrow" />
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
