import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changePageStatus,
  changeBurgerStatus,
} from "../../Redux/Actions/headerActions";

interface HeaderLinkProps {
  isBurgerHidden?: boolean;
  link: string;
  text: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  isBurgerHidden,
  link,
  text,
}) => {
  const dispatch = useDispatch();
  //
  const defineMainPage = (): void => {
    if (text === "Main") {
      dispatch(changePageStatus(true));
    }
  };

  const removeBodyStatus = (): void => {
    dispatch(changePageStatus(false));
    dispatch(changeBurgerStatus(false));
    defineMainPage();
    document.body.style.overflowY = "auto";
  };
  // 
  return (
    <li className={isBurgerHidden ? "nav__menu_item" : "nav__menu_item-burger"}>
      <NavLink
        to={link}
        className={isBurgerHidden ? "nav__menu_link" : "nav__menu_link-burger"}
        onClick={removeBodyStatus}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
