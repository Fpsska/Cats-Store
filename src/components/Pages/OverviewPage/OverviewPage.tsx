import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../Common/Preloader/Preloader";
import fetchGifData from "../../../Redux/Middleware/fetchGifData";
import { RootState } from "../../../Redux/store";
import "./OverviewPage.scss"

const OverviewPage: React.FC = () => {
  const { gifData } = useSelector((state: RootState) => state.cardReducer)
  const { isOverviewPage } = useSelector((state: RootState) => state.headerReducer)
  const dispatch = useDispatch();
  // 
  const fetchNewGifData = (): void => {
    dispatch(fetchGifData())
  }
  // useEffect(() => {
  //   dispatch(fetchGifData())
  //   console.log(isFetching)
  // }, [isFetching])
  //
  return (
    <div className="section">
      <div className="container container--middle">
        <div className="overview">
          <div className="overview__wrapper">
            {/* {isFetchError ?
              <div className="error">{fetchErrorMessage}</div>
              :
              <>
                {isFetching ? <Preloader />
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
              </>
            } */}
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
            <button className="overview__button" onClick={fetchNewGifData} >Watch others</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
