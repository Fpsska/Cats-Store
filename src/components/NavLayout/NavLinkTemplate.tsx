import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch } from 'store/hooks';

import {
    changeMainPageStatus,
    changeBurgerOpenedStatus
} from 'store/actions/headerActions';

// /. Imports

interface propTypes {
    link: string;
    text: string;
}

// /. interfaces

const NavLinkTemplate: React.FC<propTypes> = ({ link, text }) => {
    const dispatch = useAppDispatch();

    // /. hooks

    const linkHandler = (): void => {
        dispatch(changeBurgerOpenedStatus(false));
        document.body.style.overflowY = 'auto';
    };

    // /. functions

    return (
        <li className="nav__menu_item">
            <NavLink
                className="nav__menu_link"
                to={link}
                state={text.toLocaleLowerCase()}
                onClick={() => linkHandler()}
            >
                {text}
            </NavLink>
        </li>
    );
};

export default NavLinkTemplate;
