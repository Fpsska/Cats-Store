import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../store/hooks';

import { IgifData } from '../../../types/cardTypes';

import { fetchGifDataToggle } from '../../../store/actions/cardActions';

import fetchGifData from '../../../store/async-actions/fetchGifsData';

import PagePreloader from '../../Common/Preloaders/PagePreloader/PagePreloader';

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
                        {isGifDataFetching ? (
                            <PagePreloader />
                        ) : isGifDataFetchError ? (
                            <p className="error">{gifDataFetchErrorMessage}</p>
                        ) : (
                            <div className="overview__gallery">
                                {gifData.map((gifItem: IgifData) => {
                                    return (
                                        <div
                                            className="overview__card"
                                            key={gifItem.id}
                                        >
                                            <img
                                                className="overview__image"
                                                src={gifItem.image}
                                                alt="funny gifts"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        <button
                            className="overview__button"
                            onClick={fetchNewGifData}
                            disabled={isGifDataFetching || isGifDataFetchError}
                        >
                            Watch others
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OverviewPage;
