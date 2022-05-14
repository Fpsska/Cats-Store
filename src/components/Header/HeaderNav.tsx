import React from "react";
import HeaderLink from "./HeaderLink";

interface HeaderNavProps {
  headerLinks: any[];
  isBurgerHidden?: boolean;
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  headerLinks,
  isBurgerHidden,
}) => {
  return (
    <nav className="nav">
      <ul className={isBurgerHidden ? "nav__menu" : "nav__menu-burger"}>
        {headerLinks.map(item => {
          return (
            <HeaderLink
              key={item.id}
              text={item.text}
              link={item.link}
              isBurgerHidden={isBurgerHidden}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
