import React, { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';

import { changeBurgerStatus } from '../../store/actions/headerActions';
import HeaderNav from '../Header/HeaderNav';
import './BurgerMenu.scss';

// /. Imports

interface BurgerMenuProps {
  headerLinks: any[];
  isBurgerOpen: boolean;
}

// /. interfaces

const BurgerMenu: React.FC<BurgerMenuProps> = ({ headerLinks, isBurgerOpen }) => {
  const dispatch = useAppDispatch();


  const defineScrollStatus = (): void => {
    isBurgerOpen
      ? document.body.style.overflowY = 'auto'
      : document.body.style.overflowY = 'hidden';
  };

  const openBurger = (): void => {
    dispatch(changeBurgerStatus(!isBurgerOpen));
    defineScrollStatus();
  };

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent): void => {
      if (isBurgerOpen && e.code === 'Escape') {
        dispatch(changeBurgerStatus(false));
      }
    };

    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [isBurgerOpen]);

  return (
    <>
      <div className="menu" onClick={openBurger}>
        <div
          className={
            isBurgerOpen
              ? 'menu__line menu__line-top opened'
              : 'menu__line menu__line-top'
          }
        ></div>
        <div
          className={
            isBurgerOpen
              ? 'menu__line menu__line-middle opened'
              : 'menu__line menu__line-middle'
          }
        ></div>
        <div
          className={
            isBurgerOpen
              ? 'menu__line menu__line-bottom opened'
              : 'menu__line menu__line-bottom'
          }
        ></div>
      </div>
      <div className={isBurgerOpen ? 'burger active' : 'burger'}>
        <div className="burger__nav">
          <HeaderNav headerLinks={headerLinks} />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
