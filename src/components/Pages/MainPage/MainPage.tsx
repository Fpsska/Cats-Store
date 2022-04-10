import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../../Card/CardLits";
import SvgTemplate from "../../Common/SvgTemplate";
import SortButtonList from "../../SortButton/SortButtonList";
import Preloader from "../../Common/Preloader/Preloader";
import BasketAlert from "../../Common/Alert/BasketAlert/BasketAlert";
import requestHandler from "../../../Redux/Middleware/fetchCardsData";
import { RootState } from "../../../Redux/store";

const MainPage: React.FC = () => {
  const { isCardsDataFetching, isCardsDataFetchError, cardsDataFetchErrorMessage } = useSelector(
    (state: RootState) => state.cardReducer
  );
  const dispatch = useDispatch();
  const scrollPoint = useRef<HTMLDivElement>(null!);
  //
  const scrollTop = (): void => {
    scrollPoint.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const fetchRequest = (): void => {
    dispatch(requestHandler());
  };
  //
  return (
    <div ref={scrollPoint} className="section">
      <div className="container">
        <div className="gallery">
          <div className="controls">
            <span className="controls__title">Sorted by:</span>
            <>
              <SortButtonList />
            </>
          </div>
          <div className="gallery__wrapper">
            <>
              {isCardsDataFetching ? (
                <Preloader />
              ) : isCardsDataFetchError ? (
                <div className="error">{cardsDataFetchErrorMessage}</div>
              ) : (
                <CardList />
              )}</>
            <button
              className="gallery__button button"
              disabled={isCardsDataFetching ? true : isCardsDataFetchError ? true : false}
              onClick={fetchRequest}
            >
              Watch more
            </button>
            <button
              className="pagination"
              disabled={isCardsDataFetching ? true : isCardsDataFetchError ? true : false}
              onClick={scrollTop}
            >
              <span className="icon">
                <SvgTemplate id="arrow" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <BasketAlert />
    </div>
  );
};

export default MainPage;
