import React from "react";
import "./Header.scss";

const HeaderLink = (props) => {
  return (
    <li className="nav__menu_item">
      <a className="nav__menu_link" target="_blank" rel="noreferrer" href={props.link}>
        {props.text}
      </a>
    </li>
  );
};

export default HeaderLink;
