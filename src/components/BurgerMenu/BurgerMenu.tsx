import React from "react";
import { useDispatch } from "react-redux";
import { changeBurgerStatus } from "../../store/actions/headerActions";
import HeaderNav from "../Header/HeaderNav";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
  headerLinks: any[];
  isBurgerOpen: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  headerLinks,
  isBurgerOpen,
}) => {
  const dispatch = useDispatch();
  //
  const calcScrollBarWidth = () => {
    return window.innerWidth - document.body.clientWidth;
  };

  const calcPaddingValue = (): string => {
    return (document.body.style.paddingRight = `${calcScrollBarWidth()}`);
  };

  const defineScrollStatus = (): void => {
    if (isBurgerOpen === true) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  const openBurger = (): void => {
    dispatch(changeBurgerStatus(!isBurgerOpen));
    defineScrollStatus();
    calcPaddingValue();
  };
  // 
  return (
    <>
      <div className="menu" onClick={openBurger}>
        <div
          className={
            isBurgerOpen
              ? "menu__line menu__line-top opened"
              : "menu__line menu__line-top"
          }
        ></div>
        <div
          className={
            isBurgerOpen
              ? "menu__line menu__line-middle opened"
              : "menu__line menu__line-middle"
          }
        ></div>
        <div
          className={
            isBurgerOpen
              ? "menu__line menu__line-bottom opened"
              : "menu__line menu__line-bottom"
          }
        ></div>
      </div>
      <div className={isBurgerOpen ? "burger active" : "burger"}>
        <div className="burger__nav">
          <HeaderNav headerLinks={headerLinks} />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
