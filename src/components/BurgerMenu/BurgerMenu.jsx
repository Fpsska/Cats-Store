import React, { useRef } from "react";
import HeaderNav from "../Header/HeaderNav";
import "./BurgerMenu.scss";

const BurgerMenu = (props) => {
  const burgerNav = useRef();

  const openBurger = () => {
    burgerNav.current.classList.toggle("active");
    document.body.classList.toggle("static");
  };

  return (
    <>
      <div className="menu" onClick={openBurger}>
        <div className="menu__line"></div>
        <div className="menu__line"></div>
        <div className="menu__line"></div>
      </div>
      <div className="burger" ref={burgerNav}>
        <div className="burger__nav">
          <HeaderNav headerLinks={props.headerLinks} />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
