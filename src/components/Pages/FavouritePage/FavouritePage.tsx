import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card"
import { RootState } from "../../../Redux/store";
import empty_image from "../../../assets/images/empty.png";
import "./FavouritePage.scss";
// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import required modules
import { Pagination } from "swiper";
SwiperCore.use([Pagination]);


const FavouritePage: React.FC = () => {
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
              :
              <>
                <Swiper className="mySwiper"
                  slidesPerView={3}
                  spaceBetween={5}
                >
                  {likedCardsData.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <Card
                          key={item.id}
                          id={item.id}
                          image={item.image}
                          name={item.name}
                          location={item.location}
                          age={item.age}
                          paw={item.paw}
                          price={item.price}
                          discount={item.discount}
                          isFavourite={item.isFavourite}
                          cardStatus={item.cardStatus}
                          discountStatus={item.discountStatus}
                          cards={likedCardsData}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
