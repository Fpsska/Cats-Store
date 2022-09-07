import React from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../store/hooks';

import Preloader from '../../Common/Preloader/Preloader';

import { fetchGifDataToggle } from '../../../store/actions/cardActions';

import fetchGifData from '../../../store/async-actions/fetchGifsData';

import './OverviewPage.scss';

// /. Imports

const OverviewPage: React.FC = () => {
  const {
    gifData,
    isGifDataFetching,
    isGifDataFetchError,
    gifDataFetchErrorMessage
  } = useAppSelector(state => state.cardReducer);

  const dispatch = useDispatch();


  const fetchNewGifData = (): void => {
    dispatch(fetchGifData());
    dispatch(fetchGifDataToggle(true));
  };

  return (
    <div className="section">
      <div className="container container--middle">
        <section className="overview">
          <div className="overview__wrapper">
            {isGifDataFetching ?
              <div className="overview__gallery">
                <Preloader />
              </div>
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
                      );
                    })
                  }
                </div>
            }
            <button
              className="overview__button"
              onClick={fetchNewGifData}
              disabled={isGifDataFetching || isGifDataFetchError}>
              Watch others
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverviewPage;
