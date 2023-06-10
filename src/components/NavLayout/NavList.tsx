import React from 'react';

import { IheaderLink } from 'types/headerTypes';

import NavLinkTemplate from './NavLinkTemplate';

import './Nav.scss';

// /. Imports

interface propTypes {
    headerLinks: IheaderLink[];
    role?: string;
}

// /. interfaces

const NavList: React.FC<propTypes> = ({ headerLinks, role }) => {
    return (
        <nav className={role ? `nav ${role}` : 'nav'}>
            <ul className="nav__menu">
                {headerLinks.map((item: IheaderLink) => {
                    return (
                        <NavLinkTemplate
                            key={item.id}
                            {...item}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavList;
