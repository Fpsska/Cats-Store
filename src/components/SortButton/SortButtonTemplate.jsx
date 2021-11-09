import { React, useState } from "react";
import SvgTemplate from "../Common/SvgTemplate";

const SortButtonTemplate = (props) => {
  const [isSwitched, setSwitchStatus] = useState(false);

  const runSort = () => {
    setSwitchStatus(!isSwitched);
    props.toggleSortCards(props.id, isSwitched);
  };

  return (
    <button onClick={runSort} className="controls__menu">
      <span className="controls__menu_text">{props.text}</span>
      <span className={isSwitched ? "icon sorted" : "icon"}>
        <SvgTemplate id="arrow-sort" />
      </span>
    </button>
  );
};

export default SortButtonTemplate;
