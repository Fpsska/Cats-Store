import React from "react";
// import HeaderLink from "./HeaderLink";
// import headerLinks from "../../Redux/store";
import logo from "../../assets/images/logo.png";
import "./Header.scss";

const HeaderList = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__section">
          <img className="header__logo" src={logo} alt="logo" />
          <nav className="nav">
            <ul className="nav__menu">
              <li className="nav__menu_item">
                <a className="nav__menu_link" href="#">
                  Main
                </a>
              </li>
              <li className="nav__menu_item">
                <a className="nav__menu_link" href="">
                  Gallery
                </a>
              </li>
              <li className="nav__menu_item">
                <a className="nav__menu_link" href="">
                  News
                </a>
              </li>
              <li className="nav__menu_item">
                <a className="nav__menu_link" href="">
                  Profile
                </a>
              </li>
            </ul>
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

export default HeaderList;
