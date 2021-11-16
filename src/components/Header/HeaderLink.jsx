import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = (props) => {

  const removeBodyStatus = () => {
    document.body.style.overflowY = "auto";
  }

  return (
    <li
      className={
        props.isBurgerHidden ? "nav__menu_item" : "nav__menu_item-burger"
      }
    >
      <Link
        to={props.link}
        className={
          props.isBurgerHidden ? "nav__menu_link" : "nav__menu_link-burger"
        }
        onClick={removeBodyStatus}
      >
        {props.text}
      </Link>
    </li>
  );
};

export default HeaderLink;
