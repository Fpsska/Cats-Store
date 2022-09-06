import React, { useRef } from 'react';

import { MdKeyboardArrowUp } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import CardList from '../../Card/CardLits';
import SortButtonList from '../../SortButton/SortButtonList';
import Preloader from '../../Common/Preloader/Preloader';
import BasketAlert from '../../Common/Alert/BasketAlert/BasketAlert';

import requestHandler from '../../../store/async-actions/fetchCardsData';

// /. Imports

const MainPage: React.FC = () => {
  const {
    isCardsDataFetching,
    isCardsDataFetchError,
    cardsDataFetchErrorMessage
  } = useAppSelector(state => state.cardReducer);

  const dispatch = useAppDispatch();

  const scrollPoint = useRef<HTMLDivElement>(null!);

  const scrollTop = (): void => {
    scrollPoint.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const fetchRequest = (): void => {
    dispatch(requestHandler());
  };

  return (
    <div ref={scrollPoint} className="section">
      <div className="container">
        <div className="gallery">
          <div className="controls">
            <span className="controls__title">Sorted by:</span>
            <>
              <SortButtonList />
            </>
          </div>
          <div className="gallery__wrapper">
            <>
              {isCardsDataFetching ? (
                <Preloader />
              ) : isCardsDataFetchError ? (
                <div className="error">{cardsDataFetchErrorMessage}</div>
              ) : (
                <CardList />
              )}</>
            <button
              className="gallery__button button"
              disabled={isCardsDataFetching || isCardsDataFetchError}
              onClick={fetchRequest}
            >
              Watch more
            </button>
            <button
              className="pagination"
              disabled={isCardsDataFetching || isCardsDataFetchError}
              onClick={scrollTop}
            >
              <MdKeyboardArrowUp color={'#fff'} size={'36px'} />
            </button>
          </div>
        </div>
      </div>
      <BasketAlert />
    </div>
  );
};

export default MainPage;
