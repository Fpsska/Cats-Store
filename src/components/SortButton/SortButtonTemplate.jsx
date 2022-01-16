import { React, useState } from "react";
import { useDispatch } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";

const SortButtonTemplate = ({ isFetching, id, text, toggleSortCards }) => {
  const [isSwitched, setSwitchStatus] = useState(false);

  const dispatch = useDispatch();

  const runSort = () => {
    setSwitchStatus(!isSwitched);
    dispatch(toggleSortCards(id, isSwitched));
  };

  return (
    <button
      className="controls__menu"
      disabled={isFetching ? "" : true}
      onClick={runSort}
    >
      <span className="controls__menu_text">{text}</span>
      <span className={isSwitched ? "icon sorted" : "icon"}>
        <SvgTemplate id="arrow-sort" />
      </span>
    </button>
  );
};

export default SortButtonTemplate;
