import React from 'react';

import { useAppSelector } from '../../store/hooks';

import { declinateByNum } from '../../helpers/declinateByNumber';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import TextPreloader from '../Common/Preloaders/TextPreloader/TextPreloader';
import NavLayout from '../NavLayout/NavLayout';

import logo from '../../assets/images/logo.svg';

import './Header.scss';

// /. Imports

const Header: React.FC = () => {
  const {
    isBurgerHidden,
    isBurgerOpen,
    isHomePage,
    isOverviewPage
  } = useAppSelector(state => state.headerReducer);

  const {
    isCardsDataFetching,
    isCardsDataFetchError,
    cards
  } = useAppSelector(state => state.cardReducer);

  const mainTextValue = declinateByNum(cards.length, ['cat', 'cats']);
  // const filteredTextValue = declinateByNum(filteredCardsData.length, ['cat', 'cats']);

  return (
    <header className="header">
      <div className="container">
        <section className="header__section">

          <a className="header__logo logo" href="#" onClick={e => e.preventDefault()}>
            <img className="logo__image" src={logo} alt="logo" />
          </a>

          <NavLayout />

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
          {isCardsDataFetching ?
            <TextPreloader />
            :
            <h1 className="header__text">
              {isHomePage ?
                <>
                  {`Found ${isCardsDataFetchError ? '0' : cards.length} ${mainTextValue}`}
                </>
                : isOverviewPage ?
                  <>
                    {'Have a good day ;)'}
                  </>
                  :
                  <>
                    {/* {`Selected ${isCardsDataFetchError ? '0' : filteredCardsData.length} ${filteredTextValue}`} */}
                    {`Selected ${isCardsDataFetchError ? '0' : 0} ${mainTextValue}`}
                  </>
              }
            </h1>
          }
        </>

      </div>
    </header>
  );
};

export default Header;
