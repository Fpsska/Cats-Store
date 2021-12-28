import React, { useEffect, useLayoutEffect, useState } from "react";
import SvgTemplate from "../Common/SvgTemplate";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header = (props) => {
  const [catsCount, setCatsCount] = useState(props.catsCount);
  useEffect(() => {
    setCatsCount(props.catsCount);
  }, [props.catsCount]); // when state props.catsCount is changed

  const defineBurgerStatus = () => {
    if (window.innerWidth < 800) {
      props.changeNavDisplay(false);
    } else if (window.innerWidth > 800) {
      props.changeNavDisplay(true);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", defineBurgerStatus);
    window.addEventListener("load", defineBurgerStatus);
    return () => {
      window.removeEventListener("resize", defineBurgerStatus);
      window.removeEventListener("load", defineBurgerStatus);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__section">
          <span className="icon">
            <SvgTemplate id="logo" />
          </span>
          <>
            {props.isBurgerHidden ? (
              <HeaderNav
                headerLinks={props.headerLinks}
                isBurgerHidden={props.isBurgerHidden}
              />
            ) : (
              <BurgerMenu
                headerLinks={props.headerLinks}
                isBodyScrolling={props.isBodyScrolling}
                isBurgerHidden={props.isBurgerHidden}
                changeScrollStatus={props.changeScrollStatus}
              />
            )}
          </>
          <div className="header__telephone telephone">
            <a className="telephone__number" href="tel:+544 3490 00000">
              +544 3490 00000
            </a>
            <span className="telephone__description">Звони скорее!</span>
          </div>
        </div>
        <h1 className="header__text">Найдено {catsCount} котов</h1>
      </div>
    </header>
  );
};

export default Header;
