import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";
import { toggleSortCards } from "../../Redux/Actions/cardActions";

interface SortButtonTemplateProps {
  id: string;
  text: string;
  isFetching: boolean;
  isSorted: boolean;
  toggleSortCards: (arg1: string, arg2: boolean) => void;
}

const SortButtonTemplate: React.FC<SortButtonTemplateProps> = ({
  id,
  text,
  isSorted,
  isFetching,
}) => {
  const [isSwitched, setSwitchStatus] = useState<boolean>(false);

  const dispatch = useDispatch();
  //
  const runSort = (): void => {
    setSwitchStatus(!isSwitched);
    dispatch(toggleSortCards(id, isSwitched));
  };

  return (
    <button
      className="controls__menu"
      disabled={isFetching ? true : false}
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
