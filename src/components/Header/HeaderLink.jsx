import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = (props) => {
  const removeFixed = () => {
    props.changeScrollStatus(true);
  };

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
        rel="noreferrer"
        onClick={removeFixed}
      >
        {props.text}
      </Link>
    </li>
  );
};

export default HeaderLink;
