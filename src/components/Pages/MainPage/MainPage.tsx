import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../../Card/CardLits";
import SvgTemplate from "../../Common/SvgTemplate";
import SortButtonList from "../../SortButton/SortButtonList";
import Preloader from "../../Common/Preloader/Preloader";
import Alert from "../../Common/Alert/Alert";
import requestHandler from "../../../Redux/Middleware/request";
import { RootState } from "../../../Redux/store";

const MainPage: React.FC = () => {
  const { isFetching, isFetchError, fetchErrorMessage } = useSelector((state: RootState) => state.cardReducer);
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
    <div ref={scrollPoint}>
      <Alert />
      <div className="container">
        <div className="controls">
          <span className="controls__title">Sorted by:</span>
          <>
            <SortButtonList />
          </>
        </div>
        <div className="gallery">
          <>{isFetching
            ? <Preloader />
            : isFetchError
              ? <div className="error">{fetchErrorMessage}</div>
              : <div className="gallery__wrapper"><CardList /></div>}</>
          <button
            className="gallery__button button"
            disabled={isFetching ? true : isFetchError ? true : false}
            onClick={fetchRequest}
          >
            Watch more
          </button>
          <button
            className="pagination"
            disabled={isFetching ? true : isFetchError ? true : false}
            onClick={scrollTop}
          >
            <span className="icon">
              <SvgTemplate id="arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
