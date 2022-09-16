import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';

import {
  changeMainPageStatus,
  changeBurgerOpenedStatus
} from '../../store/actions/headerActions';
import { usePageName } from '../../hooks/usePageName';

// /. Imports

interface propTypes {
  isBurgerHidden?: boolean;
  link: string;
  text: string;
}

// /. interfaces

const HeaderLink: React.FC<propTypes> = ({ isBurgerHidden, link, text }) => {
  const { handlePageName } = usePageName();

  const dispatch = useAppDispatch();


  const removeBodyStatus = (text: string): void => {
    dispatch(changeMainPageStatus(false));
    dispatch(changeBurgerOpenedStatus(false));
    handlePageName({ pageName: text });
    document.body.style.overflowY = 'auto';
  };

  return (
    <li className={isBurgerHidden ? 'nav__menu_item' : 'nav__menu_item-burger'}>
      <NavLink
        to={link}
        className={isBurgerHidden ? 'nav__menu_link' : 'nav__menu_link-burger'}
        onClick={() => removeBodyStatus(text)}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
