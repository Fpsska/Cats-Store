import React, { useState, useEffect } from 'react';

import SwiperCore, { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import { setFilteredCardsDataLength } from 'store/actions/cardActions';
import { setTotalRangeValue } from 'store/actions/filterActions';

import { filterByPrice } from 'helpers/filterByPrice';

import Card from 'components/Card/Card';
import Filter from 'components/Filter/Filter';

import empty_image from 'assets/images/empty.png';

import './FavouritePage.scss';

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import { Ipet } from 'types/cardTypes';
// import required modules
SwiperCore.use([Pagination]);

// /. Imports

const FavouritePage: React.FC = () => {
    const { currentRangeValue } = useAppSelector(state => state.filterReducer);
    const { likedCardsData } = useAppSelector(state => state.cardReducer);

    const [filteredData, setFilteredData] = useState<Ipet[]>(likedCardsData);
    const [isLikedDataEmpty, setLikedDataEmptyStatus] = useState<boolean>(true);
    const [isFilteredDataEmpty, setFilteredDataEmptyStatus] =
        useState<boolean>(true);
    const [totalPrice, setTotalPrice] = useState<number>(0); // current total price of likedCardsData
    const [sliderBreakpointsConfig] = useState<{
        [key: number]: { [key: string]: number };
    }>({
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
    });

    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        // run filter likedCardsData[]
        setFilteredData(filterByPrice(likedCardsData, currentRangeValue));

        // handle likedCardsData[] empty status
        likedCardsData.length === 0
            ? setLikedDataEmptyStatus(true)
            : setLikedDataEmptyStatus(false);

        // calc max price of basket item
        const pricesArr = likedCardsData.map(({ price }) => price); // [1000, 2000, 3000]
        const maxPriceValue = Math.max(...pricesArr); // 3000
        dispatch(setTotalRangeValue(maxPriceValue));
    }, [likedCardsData, currentRangeValue]);

    useEffect(() => {
        // handle filteredData[] empty status
        filteredData.length === 0
            ? setFilteredDataEmptyStatus(true)
            : setFilteredDataEmptyStatus(false);
        // set current filteredData[] length
        dispatch(setFilteredCardsDataLength(filteredData.length));
    }, [filteredData]);

    useEffect(() => {
        // calc current basket price
        const totalSum = filteredData.reduce(
            (acc, { price }) => acc + price,
            0
        );
        setTotalPrice(totalSum);
    }, [filteredData]);

    // /. effects

    return (
        <div className="section">
            <section className="basket">
                <div className="basket__wrapper">
                    {!isLikedDataEmpty && (
                        <div className="basket__section">
                            <div className="basket__price">
                                <div className="price">
                                    <h3 className="price__text">
                                        Total price:
                                    </h3>
                                    <div className="price__section">
                                        <span className="price__count">
                                            {totalPrice}
                                        </span>
                                        <span className="price__currency">
                                            $
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="basket__filter">
                                <Filter />
                            </div>
                        </div>
                    )}
                    <div className="basket__slider">
                        {isFilteredDataEmpty ? (
                            <div className="empty">
                                <img
                                    className="empty__preview"
                                    src={empty_image}
                                    alt="empty"
                                />
                                <h4 className="empty__text">No matches</h4>
                            </div>
                        ) : (
                            <Swiper
                                className="mySwiper"
                                slidesPerView={3}
                                spaceBetween={5}
                                breakpoints={sliderBreakpointsConfig}
                            >
                                {filteredData.map((item: Ipet) => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <Card
                                                key={item.id}
                                                {...item}
                                                role={'basket__card'}
                                                currentRangeValue={
                                                    currentRangeValue
                                                }
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FavouritePage;
