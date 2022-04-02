import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changeMainPageStatus,
  changeBurgerStatus,
  changeOverviewPageStatus
} from "../../Redux/Actions/headerActions";
import { setNotificationVisibleStatus } from "../../Redux/Actions/cardActions";

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
      dispatch(changeMainPageStatus(true));
      dispatch(setNotificationVisibleStatus(false))
      dispatch(changeOverviewPageStatus(false))
    }
    if (text === "Favourite") {
      dispatch(changeOverviewPageStatus(false))
    }
    if (text === "Live") {
      dispatch(changeOverviewPageStatus(true))
    }
  };

  const removeBodyStatus = (): void => {
    dispatch(changeMainPageStatus(false));
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
