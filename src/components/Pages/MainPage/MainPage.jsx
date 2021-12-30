import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "../../Card/CardLits";
import SvgTemplate from "../../Common/SvgTemplate";
import SortButtonList from "../../SortButton/SortButtonList";
import Preloader from "../../Common/Preloader/Preloader";
import requestHandler from "../../../Redux/Middleware/request";

const MainPage = () => {
  const { isFetching } = useSelector((state) => state.mainPage);
  const dispatch = useDispatch();

  const scrollPoint = useRef();
  const scrollTop = () => {
    scrollPoint.current.scrollIntoView({ top: 0, behavior: "smooth" });
  };

  const fetchRequest = () => {
    dispatch(requestHandler());
  };

  useEffect(() => {
    dispatch(requestHandler());
    console.log("requestHandler");
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
            {isFetching ? <CardList /> : <Preloader />}
            <button
              className="gallery__button button"
              disabled={isFetching ? "" : true}
              onClick={fetchRequest}
            >
              Показать ещё
            </button>
            <button
              className="pagination"
              disabled={isFetching ? "" : true}
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
