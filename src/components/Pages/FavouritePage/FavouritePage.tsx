import React, { useState, useEffect, useMemo, useRef } from "react";
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
  const empty = useRef<boolean>(true)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  // 
  const calcTotalPrice = useMemo(() => (array: any[]) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += parseInt(array[i].price.match(/\d+/))
      setTotalPrice(sum)
    }
  }, [likedCardsData])

  useEffect(() => {
    if (likedCardsData.length === 0) {
      empty.current = true
      setTotalPrice(0)
    } else {
      empty.current = false
    }
    calcTotalPrice(likedCardsData)
  }, [likedCardsData])
  // 
  return (
    <div className="section">
      <div className={empty.current ? "basket empty" : "basket"}>
        <div className="basket__wrapper">
          {empty.current ?
            <></>
            :
            <div className="basket__price price">
              <h3 className="price__text">Total price:</h3>
              <div className="price__section">
                <span className="price__count">{totalPrice}</span>
                <span className="price__currency">$</span>
              </div>
            </div>
          }
          <div className="basket__slider">
            {empty.current
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
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    360: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 2.5,
                      spaceBetween: 30,
                    },
                  }}
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
