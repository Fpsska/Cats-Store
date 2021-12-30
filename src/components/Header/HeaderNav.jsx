import React from "react";
import HeaderLink from "./HeaderLink";

const HeaderNav = (props) => {
  const headerNav = props.headerLinks.map((item) => {
    return (
      <HeaderLink
        key={item.id}
        text={item.text}
        link={item.link}
        isBurgerHidden={props.isBurgerHidden}
        changePageStatus={props.changePageStatus}
      />
    );
  });
  return (
    <nav className="nav">
      <ul className={props.isBurgerHidden ? "nav__menu" : "nav__menu-burger"}>
        {headerNav}
      </ul>
    </nav>
  );
};

export default HeaderNav;
