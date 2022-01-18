import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changePageStatus,
  changeBurgerStatus,
} from "../../Redux/Actions/headerActions";
import { fetchToggle } from "../../Redux/Actions/cardActions";

const HeaderLink = ({ isBurgerHidden, link, text }) => {
  const dispatch = useDispatch();
  //
  const defineMainPage = () => {
    if (text === "Main") {
      dispatch(fetchToggle(false));
      dispatch(changePageStatus(true));
    }
  };

  const removeBodyStatus = () => {
    dispatch(changePageStatus(false));
    dispatch(changeBurgerStatus(false));
    defineMainPage();
    document.body.style.overflowY = "auto";
  };

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
