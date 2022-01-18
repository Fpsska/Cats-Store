import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { changeNavDisplay } from "../../Redux/Actions/headerActions";
import "./Header.scss";

const Header = () => {
  const {
    headerLinks,
    catsCount,
    isBurgerHidden,
    isBurgerOpen,
    isBodyScrolling,
    isHomePage,
  } = useSelector((state) => state.headerReducer);

  const { isFetching } = useSelector((state) => state.cardReducer);

  const dispatch = useDispatch();
  //
  const defineBurgerStatus = () => {
    if (window.innerWidth < 800) {
      dispatch(changeNavDisplay(false));
    } else if (window.innerWidth > 800) {
      dispatch(changeNavDisplay(true));
    }
  };
  //
  useLayoutEffect(() => {
    window.addEventListener("resize", defineBurgerStatus);
    window.addEventListener("load", defineBurgerStatus);
    return () => {
      window.removeEventListener("resize", defineBurgerStatus);
      window.removeEventListener("load", defineBurgerStatus);
    };
  }, []);

  return (
    <header className={isHomePage ? "header" : "header header--minimized"}>
      <div className="container">
        <div className="header__section">
          <span className="icon">
            <SvgTemplate id="logo" />
          </span>
          <>
            {isBurgerHidden ? (
              <HeaderNav
                headerLinks={headerLinks}
                isBurgerHidden={isBurgerHidden}
                isBurgerOpen={isBurgerOpen}
              />
            ) : (
              <BurgerMenu
                headerLinks={headerLinks}
                isBurgerOpen={isBurgerOpen}
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
        <>
          {isHomePage ? (
            <>
              {isFetching ? (
                <h1 className="header__text">Найдено {catsCount} котов</h1>
              ) : (
                <>
                  <h1 className="header__text header__text--loading">
                    Загрузка
                    <span className="header__text_dot"></span>
                    <span className="header__text_dot"></span>
                    <span className="header__text_dot"></span>
                  </h1>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      </div>
    </header>
  );
};

export default Header;
