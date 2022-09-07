import React, { useState, useEffect } from 'react';

import SwiperCore from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import { Pagination } from 'swiper';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import Card from '../../Card/Card';
import Filter from '../../Filter/Filter';

import { actualDataTypes } from '../../../Types/cardTypes';
import { setFilteredStatus } from '../../../store/actions/cardActions';

import empty_image from '../../../assets/images/empty.png';

import './FavouritePage.scss';

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
// import required modules
SwiperCore.use([Pagination]);

// /. Imports

const FavouritePage: React.FC = () => {
  const { currentRangeValue } = useAppSelector(state => state.filterReducer);
  const { likedCardsData, filteredCardsData, isDataFiltered } = useAppSelector(state => state.cardReducer);

  const [emptyLikedCardsDataStatus, setEmptyLikedCardsStatus] = useState<boolean>(true);
  const [emptyFilteredCardsStatus, setEmptyFilteredCardsStatus] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0); // current total price of likedCardsData
  const [list, setList] = useState<actualDataTypes[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {  // define current render data
    isDataFiltered ? setList(filteredCardsData) : setList(likedCardsData);
  }, [filteredCardsData, likedCardsData, isDataFiltered]);

  useEffect(() => {  // define array empty status
    if (likedCardsData.length === 0) {
      setEmptyLikedCardsStatus(true);
      dispatch(setFilteredStatus(false));
    } else {
      setEmptyLikedCardsStatus(false);
    }
    if (filteredCardsData.length === 0) {
      setEmptyFilteredCardsStatus(true);
    } else {
      setEmptyFilteredCardsStatus(false);
    }
  }, [likedCardsData, filteredCardsData]);

  useEffect(() => { // calc current basket total price
    setTotalPrice(list.reduce((prev, current) => prev + current.price, 0));
  }, [list]);
  // 
  return (
    <div className="section">
      <section className={emptyLikedCardsDataStatus ? 'basket empty' : 'basket'}>
        <div className="basket__wrapper">
          {emptyLikedCardsDataStatus ?
            <></>
            :
            <div className="basket__section">
              <div className="basket__price">
                <div className="price">
                  <h3 className="price__text">Total price:</h3>
                  <div className="price__section">
                    <span className="price__count">{totalPrice}</span>
                    <span className="price__currency">$</span>
                  </div>
                </div>
              </div>
              <div className="basket__filter">
                <Filter />
              </div>
            </div>
          }
          <div className={emptyLikedCardsDataStatus || emptyFilteredCardsStatus ? 'basket__slider empty' : 'basket__slider'}>
            {emptyLikedCardsDataStatus || emptyFilteredCardsStatus
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
                      spaceBetween: 30
                    },
                    360: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30
                    },
                    1024: {
                      slidesPerView: 2.5,
                      spaceBetween: 30
                    }
                  }}
                >
                  {list.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <Card
                          key={item.id}
                          {...item}

                          currentRangeValue={currentRangeValue}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavouritePage;
