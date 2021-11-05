import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header = (props) => {
  const [catsCount, setCatsCount] = useState(props.catsCount);
  useEffect(() => {
    setCatsCount(props.catsCount);
  }, [props.catsCount]); // when state props.cards is changed

  console.log("Header:", props.isBurgerHidden);

  // const dispatch = useDispatch()
  useEffect(() => {
    props.burgerHandler();
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
              <HeaderNav headerLinks={props.headerLinks} isBurgerHidden={props.isBurgerHidden} />
            ) : (
              <BurgerMenu headerLinks={props.headerLinks} />
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
