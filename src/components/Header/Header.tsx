import React from 'react';

import { useAppSelector } from '../../store/hooks';

import { declinateByNum } from '../../helpers/declinateByNumber';
import { useLocationData } from '../../hooks/useLocationData';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import TextPreloader from '../Common/Preloaders/TextPreloader/TextPreloader';
import NavLayout from '../NavLayout/NavLayout';

import logo from '../../assets/images/logo.svg';

import HeaderTitle from './HeaderTitle';

import './Header.scss';

// /. Imports

const Header: React.FC = () => {
  const {
    isBurgerHidden,
    isBurgerOpen
  } = useAppSelector(state => state.headerReducer);

  const {
    cards,
    filteredCardsDataLength,
    isCardsDataFetching
  } = useAppSelector(state => state.cardReducer);

  const mainTextValue = declinateByNum(cards.length, ['cat', 'cats']);
  const filteredTextValue = declinateByNum(filteredCardsDataLength, ['cat', 'cats']);
  const { state } = useLocationData();


  const defineTextContent = (value: string): string => {
    switch (value) {
      case null: // for display correct header__title content by first render
        return `Found ${cards.length} ${mainTextValue}`;
      case ('main'):
        return `Found ${cards.length} ${mainTextValue}`;
      case ('favourite'):
        return `Selected ${filteredCardsDataLength} ${filteredTextValue}`;
      default:
        return 'Have a good day ;)';
    }
  };

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
            <HeaderTitle>
              {defineTextContent(state)}
            </HeaderTitle>
          }
        </>

      </div>
    </header>
  );
};

export default Header;
