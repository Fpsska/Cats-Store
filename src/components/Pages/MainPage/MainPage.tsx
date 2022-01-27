import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../../Card/CardLits";
import SvgTemplate from "../../Common/SvgTemplate";
import SortButtonList from "../../SortButton/SortButtonList";
import Preloader from "../../Common/Preloader/Preloader";
import requestHandler from "../../../Redux/Middleware/request";
import { RootState } from "../../../Redux/store";

const MainPage: React.FC = () => {
  const { isFetching } = useSelector((state: RootState) => state.cardReducer);
  const dispatch = useDispatch();
  const scrollPoint = useRef<HTMLDivElement>(null!);
  //
  const scrollTop = (): void => {
    scrollPoint.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const fetchRequest = (): void => {
    dispatch(requestHandler());
  };

  useEffect(() => {
    dispatch(requestHandler());
  }, []);

  return (
    <>
      <main ref={scrollPoint}>
        <div className="container">
          <div className="controls">
            <span className="controls__title">Сортировать по:</span>
            <>
              <SortButtonList />
            </>
          </div>
          <div className="gallery">
            <>{isFetching ? <Preloader /> : <CardList />}</>
            <button
              className="gallery__button button"
              disabled={isFetching ? true : false}
              onClick={fetchRequest}
            >
              Показать ещё
            </button>
            <button
              className="pagination"
              disabled={isFetching ? true : false}
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
