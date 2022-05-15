import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  changeMainPageStatus,
  changeBurgerStatus
} from '../../store/actions/headerActions';
import { usePageName } from '../../hooks/usePageName';

// /. Imports

interface HeaderLinkProps {
  isBurgerHidden?: boolean;
  link: string;
  text: string;
}

// /. interfaces

const HeaderLink: React.FC<HeaderLinkProps> = ({
  isBurgerHidden,
  link,
  text
}) => {
  const { handlePageName } = usePageName();
  const dispatch = useDispatch();
  //
  const removeBodyStatus = (text: string): void => {
    dispatch(changeMainPageStatus(false));
    dispatch(changeBurgerStatus(false));
    handlePageName({ pageName: text });
    document.body.style.overflowY = 'auto';
  };
  // 
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
