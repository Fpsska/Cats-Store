import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changePageStatus } from "../../Redux/actions";

const HeaderLink = (props) => {
  const dispatch = useDispatch();

  const removeBodyStatus = () => {
    document.body.style.overflowY = "auto";
    dispatch(changePageStatus(false));
  };

  return (
    <li
      className={
        props.isBurgerHidden ? "nav__menu_item" : "nav__menu_item-burger"
      }
    >
      <NavLink
        to={props.link}
        className={
          props.isBurgerHidden ? "nav__menu_link" : "nav__menu_link-burger"
        }
        onClick={removeBodyStatus}
      >
        {props.text}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
