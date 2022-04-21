import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changeMainPageStatus,
  changeBurgerStatus,
} from "../../Redux/Actions/headerActions";
import { useDefinePage } from "../../hooks/definePage"

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
  const { handlePageName } = useDefinePage()
  const dispatch = useDispatch();
  //
  const removeBodyStatus = (text: string): void => {
    dispatch(changeMainPageStatus(false));
    dispatch(changeBurgerStatus(false));
    handlePageName(text);
    document.body.style.overflowY = "auto";
  };
  // 
  return (
    <li className={isBurgerHidden ? "nav__menu_item" : "nav__menu_item-burger"}>
      <NavLink
        to={link}
        className={isBurgerHidden ? "nav__menu_link" : "nav__menu_link-burger"}
        onClick={() => removeBodyStatus(text)}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
