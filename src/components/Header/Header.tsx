import React from 'react';

import { useLocation } from 'react-router';

import { useAppSelector } from 'store/hooks';

import { declinateByNum } from 'helpers/declinateByNumber';

import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import TextPreloader from 'components/Common/Preloaders/TextPreloader/TextPreloader';
import NavLayout from 'components/NavLayout/NavLayout';

import logo from 'assets/images/logo.svg';

import HeaderTitle from './HeaderTitle';

import './Header.scss';

// /. Imports

const Header: React.FC = () => {
    const { isBurgerHidden, isBurgerOpen } = useAppSelector(
        state => state.headerReducer
    );

    const { cards, filteredCardsDataLength, isCardsDataFetching } =
        useAppSelector(state => state.cardReducer);

    const location = useLocation();

    // /. hooks

    const mainTextValue = declinateByNum(cards.length, ['cat', 'cats']);
    const filteredTextValue = declinateByNum(filteredCardsDataLength, [
        'cat',
        'cats'
    ]);

    // /. variables

    const defineTextContent = (value: string): string => {
        switch (value) {
            case null: // for display correct header__title content by first render
            case 'main':
                return `Found ${cards.length} ${mainTextValue}`;
            case 'favourite':
                return `Selected ${filteredCardsDataLength} ${filteredTextValue}`;
            default:
                return 'Have a good day ;)';
        }
    };

    // /. functions

    return (
        <header className="header">
            <div className="container">
                <section className="header__section">
                    <a
                        className="header__logo logo"
                        href="#"
                        onClick={e => e.preventDefault()}
                    >
                        <img
                            className="logo__image"
                            src={logo}
                            alt="logo"
                        />
                    </a>

                    <NavLayout />

                    <>
                        {!isBurgerHidden && (
                            <BurgerMenu isBurgerOpen={isBurgerOpen} />
                        )}
                    </>

                    <div className="header__telephone telephone">
                        <a
                            className="telephone__number"
                            href="tel:+544 3490 00000"
                        >
                            +544 3490 00000
                        </a>
                        <span className="telephone__description">
                            Call soon!
                        </span>
                    </div>
                </section>

                <>
                    {isCardsDataFetching ? (
                        <TextPreloader />
                    ) : (
                        <HeaderTitle>
                            {defineTextContent(location.state)}
                        </HeaderTitle>
                    )}
                </>
            </div>
        </header>
    );
};

export default Header;
