import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeScrollStatus } from "../../Redux/actions";
import HeaderNav from "../Header/HeaderNav";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const { isBurgerHidden } = useSelector((state) => state.mainPage);
  const [isOpened, setOpenedStatus] = useState(false);
  const dispatch = useDispatch();
  //

  const openBurger = () => {
    setOpenedStatus(!isOpened);

    dispatch(changeScrollStatus(!isOpened));

    if (isBurgerHidden === !isOpened) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }

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
              : "menu__line menu__line-middle "
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
      <div className={isOpened ? "burger  active" : "burger"}>
        <div className="burger__nav">
          <HeaderNav isOpened={isOpened} setOpenedStatus={setOpenedStatus} />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
