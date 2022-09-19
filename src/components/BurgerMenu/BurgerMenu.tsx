import React from 'react';

import { useAppDispatch } from '../../store/hooks';

import { changeBurgerOpenedStatus } from '../../store/actions/headerActions';

import './menu.scss';

// /. Imports

interface propTypes {
    isBurgerOpen: boolean;
}

// /. interfaces

const BurgerMenu: React.FC<propTypes> = ({ isBurgerOpen }) => {

    const dispatch = useAppDispatch();


    const defineScrollStatus = (): void => {
        isBurgerOpen
            ? document.body.style.overflowY = 'auto'
            : document.body.style.overflowY = 'hidden';
    };

    const openBurger = (): void => {
        dispatch(changeBurgerOpenedStatus(!isBurgerOpen));
        defineScrollStatus();
    };

    return (
        <button
            className="menu"
            area-label={isBurgerOpen ? 'close burger menu' : 'open burger menu'}
            onClick={openBurger}>
            <span
                className={
                    isBurgerOpen
                        ? 'menu__line menu__line-top opened'
                        : 'menu__line menu__line-top'
                }
            ></span>
            <span
                className={
                    isBurgerOpen
                        ? 'menu__line menu__line-middle opened'
                        : 'menu__line menu__line-middle'
                }
            ></span>
            <span
                className={
                    isBurgerOpen
                        ? 'menu__line menu__line-bottom opened'
                        : 'menu__line menu__line-bottom'
                }
            ></span>
        </button>
    );
};

export default BurgerMenu;