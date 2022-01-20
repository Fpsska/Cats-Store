import React from "react";
import { useMemo } from "react";
import HeaderLink from "./HeaderLink";
import { headerStateTypes } from "../../Types/headerType";

const HeaderNav = ({ headerLinks, isBurgerHidden }: headerStateTypes) => {
  // const headerNav = useMemo(
  //   () =>
  //     headerLinks.map((item) => {
  //       return (
  //         <HeaderLink
  //           // headerLinks={headerLinks}
  //           key={item.id}
  //           text={item.text}
  //           link={item.link}
  //           isBurgerHidden={isBurgerHidden}
  //         />
  //       );
  //     }),
  //   [headerLinks]
  // );

  const headerNav = headerLinks.map((item) => {
    return (
      <HeaderLink
        headerLinks={headerLinks}
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
