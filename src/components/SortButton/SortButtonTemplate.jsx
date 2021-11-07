import { React, useRef } from "react";
import SvgTemplate from "../Common/SvgTemplate";

const SortButtonTemplate = (props) => {
  const arrowIcon = useRef();

  const runSort = () => {
    props.toggleSortCards(props.id, props.isSorted);
    arrowIcon.current.style.transform = "rotate(360deg)";
  };

  return (
    <button onClick={runSort} className="controls__menu">
      <span className="controls__menu_text">{props.text}</span>
      <span className="icon" ref={arrowIcon}>
        <SvgTemplate id="arrow-sort" />
      </span>
    </button>
  );
};

export default SortButtonTemplate;
