import React from "react";
import { useSelector } from "react-redux";
import HeaderLink from "./HeaderLink";

const HeaderNav = () => {
  const { headerLinks, isBurgerHidden } = useSelector(
    (state) => state.mainPage
  );

  const headerNav = headerLinks.map((item) => {
    return (
      <HeaderLink
        key={item.id}
        text={item.text}
        link={item.link}
        isBurgerHidden={isBurgerHidden}
      />
    );
  });
  return (
    <nav className="nav">
      <ul className={isBurgerHidden ? "nav__menu" : "nav__menu-burger"}>
        {headerNav}
      </ul>
    </nav>
  );
};

export default HeaderNav;
