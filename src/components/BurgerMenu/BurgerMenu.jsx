import React, { useRef } from "react";
import HeaderNav from "../Header/HeaderNav";
import "./BurgerMenu.scss";

const BurgerMenu = (props) => {
  const burgerNav = useRef();
  const lineTop = useRef()
  const lineMiddle = useRef()
  const lineBottom = useRef()

  const openBurger = () => {
    burgerNav.current.classList.toggle("active")
    lineTop.current.classList.toggle("opened")
    lineMiddle.current.classList.toggle("opened")
    lineBottom.current.classList.toggle("opened")

    const ScrollBarWidth = window.innerWidth - document.body.clientWidth
    document.body.style.paddingRight = `${ScrollBarWidth}px`
    document.body.classList.toggle("fixed")
  };

  return (
    <>
      <div className="menu" onClick={openBurger}>
        <div className="menu__line menu__line-top" ref={lineTop}></div>
        <div className="menu__line menu__line-middle" ref={lineMiddle}></div>
        <div className="menu__line menu__line-bottom" ref={lineBottom}></div>
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
