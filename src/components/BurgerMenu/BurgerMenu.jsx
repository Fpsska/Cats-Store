import React, { useState } from "react";
import HeaderNav from "../Header/HeaderNav";
import "./BurgerMenu.scss";

const BurgerMenu = (props) => {
  const [isOpened, setOpenedStatus] = useState(false);
  const openBurger = () => {
    setOpenedStatus(!isOpened);

    props.changeScrollStatus(isOpened);

    const ScrollBarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = `${ScrollBarWidth}px`;
  };

  return (
    <>
      <div className="menu" onClick={openBurger}>
        <div
          className={
            isOpened
              ? "menu__line menu__line-top opened"
              : "menu__line menu__line-top"
          }
        ></div>
        <div
          className={
            isOpened
              ? "menu__line menu__line-middle opened"
              : "menu__line menu__line-middle"
          }
        ></div>
        <div
          className={
            isOpened
              ? "menu__line menu__line-bottom opened"
              : "menu__line menu__line-bottom"
          }
        ></div>
      </div>
      <div className={isOpened ? "burger active" : "burger"}>
        <div className="burger__nav">
          <HeaderNav
            headerLinks={props.headerLinks}
            changeScrollStatus={props.changeScrollStatus}
          />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
