import React from "react";
import HeaderLink from "./HeaderLink";
import SvgTemplate from "../SvgTemplate";
import "./Header.scss";

const Header = (props) => {
  const headerNav = props.headerLinks.map((item) => {
    return <HeaderLink key={item.id} text={item.text} />;
  });
  return (
    <header className="header">
      <div className="container">
        <div className="header__section">
          <span className="icon">
            <SvgTemplate id="logo" />
          </span>
          <nav className="nav">
            <ul className="nav__menu">{headerNav}</ul>
          </nav>
          <div className="header__telephone telephone">
            <a className="telephone__number" href="tel:+544 3490 00000">
              +544 3490 00000
            </a>
            <span className="telephone__description">Звони скорее!</span>
          </div>
        </div>
        <h1 className="header__text">Найдено {props.catsCount} котов</h1>
      </div>
    </header>
  );
};

export default Header;
