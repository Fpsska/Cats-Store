import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = (props) => {
  return (
    <li className="nav__menu_item">
      <Link
        to={props.link}
        className="nav__menu_link"
        rel="noreferrer"
        href="#"
      >
        {props.text}
      </Link>
    </li>
  );
};

export default HeaderLink;
