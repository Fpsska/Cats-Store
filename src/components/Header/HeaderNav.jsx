import React from "react";
import { useMemo } from "react";
import HeaderLink from "./HeaderLink";

const HeaderNav = ({ headerLinks, isBurgerHidden }) => {
  const headerNav = useMemo(
    () =>
      headerLinks.map((item) => {
        return (
          <HeaderLink
            key={item.id}
            text={item.text}
            link={item.link}
            isBurgerHidden={isBurgerHidden}
          />
        );
      }),
    [headerLinks]
  );

  return (
    <nav className="nav">
      <ul className={isBurgerHidden ? "nav__menu" : "nav__menu-burger"}>
        {headerNav}
      </ul>
    </nav>
  );
};

export default HeaderNav;
