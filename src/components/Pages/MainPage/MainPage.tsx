import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { MdKeyboardArrowUp } from 'react-icons/md';

import { useAppSelector } from '../../../store/hooks';

import CardList from '../../Card/CardLits';
import SortButtonList from '../../SortButton/SortButtonList';
import PagePreloader from '../../Common/Preloaders/PagePreloader/PagePreloader';
import BasketAlert from '../../Common/Alert/BasketAlert/BasketAlert';

import fetchCardsData from '../../../store/async-actions/fetchCardsData';

// /. Imports

const MainPage: React.FC = () => {
  const {
    isCardsDataFetching,
    isCardsDataFetchError,
    cardsDataFetchErrorMessage
  } = useAppSelector(state => state.cardReducer);

  const dispatch = useDispatch();

  const scrollPoint = useRef<HTMLDivElement>(null!);

  const scrollTop = (): void => {
    scrollPoint.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const makeFetchRequest = (): void => {
    dispatch(fetchCardsData());
  };

  return (
    <div ref={scrollPoint} className="section">
      <div className="container">
        <section className="gallery">
          <SortButtonList role={'gallery__controls'} />
          <div className="gallery__wrapper">
            <>
              {isCardsDataFetching ?
                <PagePreloader />
                : isCardsDataFetchError ?
                  <p className="error">{cardsDataFetchErrorMessage}</p>
                  :
                  <CardList />
              }
            </>
            <button
              className="gallery__button button"
              disabled={isCardsDataFetching || isCardsDataFetchError}
              onClick={makeFetchRequest}
            >
              Watch more
            </button>
            <button
              className="pagination"
              disabled={isCardsDataFetching || isCardsDataFetchError}
              onClick={scrollTop}
              aria-label="scroll top"
            >
              <MdKeyboardArrowUp color={'#fff'} size={'36px'} aria-label="scroll top" />
            </button>
          </div>
        </section>
      </div>
      <BasketAlert />
    </div>
  );
};

export default MainPage;
