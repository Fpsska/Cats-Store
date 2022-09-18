import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';

import {
  changeMainPageStatus,
  changeBurgerOpenedStatus
} from '../../store/actions/headerActions';

// /. Imports

interface propTypes {
  link: string;
  text: string;
}

// /. interfaces

const NavLinkTemplate: React.FC<propTypes> = ({ link, text }) => {

  const dispatch = useAppDispatch();

  const linkHandler = (): void => {
    dispatch(changeBurgerOpenedStatus(false));
    document.body.style.overflowY = 'auto';
  };

  return (
    <li className="nav__menu_item">
      <NavLink
        to={link}
        className="nav__menu_link"
        onClick={() => linkHandler()}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavLinkTemplate;
