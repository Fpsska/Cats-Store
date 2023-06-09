import React from 'react';

import NavLinkTemplate from './NavLinkTemplate';

import './Nav.scss';

// /. Imports

interface propTypes {
    headerLinks: any[];
    role?: string;
}

// /. interfaces

const NavList: React.FC<propTypes> = ({ headerLinks, role }) => {
    return (
        <nav className={role ? `nav ${role}` : 'nav'}>
            <ul className="nav__menu">
                {headerLinks.map(item => {
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
