import React, { useEffect, useRef } from 'react';


import { Link } from 'react-router-dom';

import { RiErrorWarningLine } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import { setNotificationVisibleStatus } from '../../../../store/actions/cardActions';
import { changeMainPageStatus } from '../../../../store/actions/headerActions';

import './BasketAlert.scss';

// /. Imports

const BasketAlert: React.FC = () => {
    const { likedCardsData } = useAppSelector(state => state.cardReducer);

    const alert = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();


    const closeAlert = (): void => {
        dispatch(setNotificationVisibleStatus(false));
        alert.current?.classList.remove('visible');
        alert.current?.classList.add('hide');
    };

    const relocateToFavouritePage = (): void => {
        dispatch(changeMainPageStatus(false));
    };


    useEffect(() => {
        if (likedCardsData.length > 1 && likedCardsData.length % 2 === 0) { // logic of show/hide BasketAlert
            dispatch(setNotificationVisibleStatus(true));
            alert.current?.classList.add('visible');
            alert.current?.classList.add('opacity');
            alert.current?.classList.remove('hide');
            setTimeout(() => {
                dispatch(setNotificationVisibleStatus(false));
                alert.current?.classList.remove('visible');
                alert.current?.classList.add('hide');
            }, 3500);
        }
        if (likedCardsData.length === 0) {
            dispatch(setNotificationVisibleStatus(false));
        }
    }, [likedCardsData]);

    return (
        <div ref={alert} className="alert" role="alert">
            <div className="alert__wrapper">
                <div className="alert__notification" >
                    <Link to="Favourite" onClick={relocateToFavouritePage} aria-label="redirect to basket">
                        <RiErrorWarningLine color={'#000'} size={'22px'} />
                    </Link>
                </div>
                <div className="alert__information">
                    <span className="alert__message">Visit to Favourite page!</span>
                    <span className="alert__count">{`${likedCardsData.length} in basket!`}</span>
                </div>
                <button className="alert__button" onClick={closeAlert} aria-label="close this modal">
                    <IoCloseOutline color={'#000'} size={'18px'} />
                </button>
            </div>
        </div>
    );
};

export default BasketAlert;