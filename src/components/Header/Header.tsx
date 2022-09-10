import React, { useEffect, useLayoutEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { changeNavDisplay } from '../../store/actions/headerActions';

import logo from '../../assets/images/logo.svg';

import Burger from '../Burger/Burger';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Loader from '../Loader/Loader';

import HeaderNav from './HeaderNav';

import './Header.scss';

// /. Imports

const Header: React.FC = () => {
  const {
    headerLinks,
    isBurgerHidden,
    isBurgerOpen,
    isHomePage,
    isOverviewPage
  } = useAppSelector(state => state.headerReducer);

  const {
    isCardsDataFetching,
    isCardsDataFetchError,
    isDataFiltered,
    cards,
    likedCardsData,
    filteredCardsData
  } = useAppSelector(state => state.cardReducer);

  const text = useRef<string>('cat');

  const dispatch = useAppDispatch();


  const defineBurgerStatus = (): void => {
    if (window.innerWidth < 800) {
      dispatch(changeNavDisplay(false));
    } else if (window.innerWidth > 800) {
      dispatch(changeNavDisplay(true));
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', defineBurgerStatus);
    window.addEventListener('load', defineBurgerStatus);
    return () => {
      window.removeEventListener('resize', defineBurgerStatus);
      window.removeEventListener('load', defineBurgerStatus);
    };
  }, []);

  useEffect(() => {
    if (likedCardsData.length === 1) {
      text.current = 'cat';
    }
    if (likedCardsData.length >= 2) {
      text.current = 'cats';
    }
    if (filteredCardsData.length === 0) {
      text.current = 'cat';
    }
    if (filteredCardsData.length === 1) {
      text.current = 'cat';
    }
    if (filteredCardsData.length >= 2) {
      text.current = 'cats';
    }
  }, [likedCardsData, filteredCardsData, isDataFiltered]);

  return (
    <header className="header">
      <div className="container">
        <section className="header__section">
          <a className="header__logo logo" href="#">
            <img className="logo__image" src={logo} alt="logo" />
          </a>
          <>
            {isBurgerHidden ? (
              <HeaderNav
                headerLinks={headerLinks}
                isBurgerHidden={isBurgerHidden}
              />
            ) : (
              <Burger
                headerLinks={headerLinks}
                isBurgerOpen={isBurgerOpen}
              />
            )}
          </>
          <>
            {!isBurgerHidden && <BurgerMenu isBurgerOpen={isBurgerOpen} />}
          </>
          <div className="header__telephone telephone">
            <a className="telephone__number" href="tel:+544 3490 00000">
              +544 3490 00000
            </a>
            <span className="telephone__description">Call soon!</span>
          </div>
        </section>
        <>
          <>
            {isCardsDataFetching ? (
              <Loader />
            ) : (
              <>
                {isHomePage
                  ? <h1 className="header__text">{`Found ${isCardsDataFetchError ? '0' : cards.length} cats`}</h1>
                  : isOverviewPage
                    ? <h1 className="header__text">{'Have a good day ;)'}</h1>
                    :
                    <h1 className="header__text">
                      {`Selected ${isCardsDataFetchError ? '0' : isDataFiltered ? filteredCardsData.length : likedCardsData.length} ${text.current}`}
                    </h1>
                }
              </>
            )}
          </>
        </>
      </div>
    </header>
  );
};

export default Header;
