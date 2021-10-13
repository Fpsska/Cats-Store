import React from "react";
import HeaderLink from "./HeaderLink";
import logo from "../../assets/images/logo.png";
import "./Header.scss";

const Header = (props) => {
  const headerNav = props.headerLinks.map((item) => {
    return <HeaderLink key={item.id} text={item.text} />;
  });
  return (
    <header className="header">
      <div className="container">
        <div className="header__section">
          <img className="header__logo" src={logo} alt="logo" />
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
        <h1 className="header__text">Найдено 349 котов</h1>
      </div>
    </header>
  );
};

export default Header;
