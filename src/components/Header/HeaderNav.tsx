import React from 'react';

import HeaderLink from './HeaderLink';

// /. Imports

interface propTypes {
  headerLinks: any[];
  isBurgerHidden?: boolean;
}

// /. interfaces

const HeaderNav: React.FC<propTypes> = ({ headerLinks, isBurgerHidden }) => {
  return (
    <nav className="nav">
      <ul className={isBurgerHidden ? 'nav__menu' : 'nav__menu-burger'}>
        {headerLinks.map(item => {
          return (
            <HeaderLink
              key={item.id}
              {...item}

              isBurgerHidden={isBurgerHidden}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
