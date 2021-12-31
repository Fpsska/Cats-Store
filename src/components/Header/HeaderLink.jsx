import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changePageStatus } from "../../Redux/actions";

const HeaderLink = ({ isBurgerHidden, setOpenedStatus, link, text }) => {
  const dispatch = useDispatch();
  //
  const removeBodyStatus = () => {
    dispatch(changePageStatus(false));
    document.body.style.overflowY = "auto";
    setOpenedStatus(false);
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
