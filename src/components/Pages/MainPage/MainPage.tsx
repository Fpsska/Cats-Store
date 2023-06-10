import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { MdKeyboardArrowUp } from 'react-icons/md';

import { useAppSelector } from 'store/hooks';

import fetchCardsData from 'store/async-actions/fetchCardsData';

import CardList from 'components/Card/CardLits';
import SortButtonList from 'components/SortButton/SortButtonList';
import PagePreloader from 'components/Common/Preloaders/PagePreloader/PagePreloader';
import BasketAlert from 'components/Common/Alert/BasketAlert/BasketAlert';

// /. Imports

const MainPage: React.FC = () => {
    const {
        isCardsDataFetching,
        isCardsDataFetchError,
        cardsDataFetchErrorMessage
    } = useAppSelector(state => state.cardReducer);

    const dispatch = useDispatch();

    const scrollPoint = useRef<HTMLDivElement>(null!);

    // /. hooks

    const scrollTop = (): void => {
        scrollPoint.current.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    const makeFetchRequest = (): void => {
        dispatch(fetchCardsData());
    };

    // /. functions

    return (
        <div
            ref={scrollPoint}
            className="section"
        >
            <div className="container">
                <section className="gallery">
                    <SortButtonList role={'gallery__controls'} />
                    <div className="gallery__wrapper">
                        <>
                            {isCardsDataFetching ? (
                                <PagePreloader />
                            ) : isCardsDataFetchError ? (
                                <p className="error">
                                    {cardsDataFetchErrorMessage}
                                </p>
                            ) : (
                                <CardList />
                            )}
                        </>
                        <button
                            className="gallery__button button"
                            disabled={
                                isCardsDataFetching || isCardsDataFetchError
                            }
                            onClick={makeFetchRequest}
                        >
                            Watch more
                        </button>
                        <button
                            className="pagination"
                            disabled={
                                isCardsDataFetching || isCardsDataFetchError
                            }
                            onClick={scrollTop}
                            aria-label="scroll top"
                        >
                            <MdKeyboardArrowUp
                                color={'#fff'}
                                size={'36px'}
                                aria-label="scroll top"
                            />
                        </button>
                    </div>
                </section>
            </div>
            <BasketAlert />
        </div>
    );
};

export default MainPage;
