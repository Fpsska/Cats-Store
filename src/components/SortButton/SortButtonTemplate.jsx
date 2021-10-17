import React from "react";
import SvgTemplate from "../SvgTemplate";

function sortButton(props) {
  return (
    <button className="controls__menu controls__menu_price">
      <span className="controls__menu_text">{props.text}</span>
      <span className="icon">
        <SvgTemplate id="arrow-sort" />
      </span>
    </button>
  );
}

export default sortButton;
