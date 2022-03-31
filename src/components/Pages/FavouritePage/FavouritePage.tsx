import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardList from "../../Card/CardLits"
import { RootState } from "../../../Redux/store";
import empty_image from "../../../assets/images/empty.png"
import "./FavouritePage.scss"

const GalleryPage: React.FC = () => {
  const { likedCardsData } = useSelector((state: RootState) => state.cardReducer)
  const [empty, setEmptyStatus] = useState<boolean>(true)
  // 
  useEffect(() => {
    if (likedCardsData.length === 0) {
      setEmptyStatus(true)
    } else {
      setEmptyStatus(false)
    }
  }, [likedCardsData])
  // 
  return (
    <div className="section">
      <div className="basket">
        <div className="basket__wrapper">
          <div className="basket__slider">
            {empty
              ?
              <div className="empty">
                <img className="empty__preview" src={empty_image} alt="empty" />
                <h4 className="empty__text">No matches</h4>
              </div>
              : <CardList />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
