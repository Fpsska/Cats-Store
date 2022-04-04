import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../Common/Preloader/Preloader";
import fetchGifData from "../../../Redux/Middleware/fetchGifData";
import { fetchGifDataToggle } from "../../../Redux/Actions/cardActions";
import { RootState } from "../../../Redux/store";
import "./OverviewPage.scss"

const OverviewPage: React.FC = () => {
  const { gifData, isGifDataFetching, isGifDataFetchError, gifDataFetchErrorMessage } = useSelector((state: RootState) => state.cardReducer)
  const dispatch = useDispatch();
  // 
  const fetchNewGifData = (): void => {
    dispatch(fetchGifData())
    dispatch(fetchGifDataToggle(true))
    setTimeout(() => {
      dispatch(fetchGifDataToggle(false))
    }, 500);
  }
  // 
  return (
    <div className="section">
      <div className="container container--middle">
        <div className="overview">
          <div className="overview__wrapper">
            {isGifDataFetching ?
              <Preloader />
              :
              isGifDataFetchError
                ?
                <div className="error">{gifDataFetchErrorMessage}</div>
                :
                <div className="overview__gallery">
                  {
                    gifData.map(item => {
                      return (
                        <div className="overview__card" key={item.id}>
                          <img className="overview__image" src={item.image} alt="funny" />
                        </div>
                      )
                    })
                  }
                </div>
            }
            <button className="overview__button" onClick={fetchNewGifData} disabled={isGifDataFetching ? true : isGifDataFetchError ? true : false}>Watch others</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
