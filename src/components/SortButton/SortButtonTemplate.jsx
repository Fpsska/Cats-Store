import { React } from "react";
import SvgTemplate from "../SvgTemplate";

const SortButtonTemplate = (props) => {
  const runSort = () => {
    props.toggleSortCards(props.id);
    //
  };

  return (
    <button onClick={runSort} className="controls__menu">
      <span className="controls__menu_text">{props.text}</span>
      <span className="icon">
        <SvgTemplate id="arrow-sort" />
      </span>
    </button>
  );
};

export default SortButtonTemplate;
