import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleSortCardsPriceDecrease,
  toggleSortCardsAgeDecrease,
  toggleSortCardsPriceIncrease,
  toggleSortCardsAgeIncrease,
} from "../../Redux/Actions/cardActions";
import SvgTemplate from "../Common/SvgTemplate";

interface SortButtonTemplateProps {
  id: string;
  text: string;
  isCardsDataFetching: boolean;
  isCardsDataFetchError: boolean;
  isSorted: boolean;
}

const SortButtonTemplate: React.FC<SortButtonTemplateProps> = ({
  id,
  text,
  isCardsDataFetching,
  isCardsDataFetchError,
}) => {
  const [isSwitched, setSwitchStatus] = useState<boolean>(false);
  const dispatch = useDispatch();
  //
  const runSort = (): void => {
    setSwitchStatus(!isSwitched);
    if (id === "price") {
      dispatch(toggleSortCardsPriceDecrease(id, isSwitched));
    }
    if (id === "age") {
      dispatch(toggleSortCardsAgeDecrease(id, isSwitched));
    }
    if (id === "price" && isSwitched === false) {
      dispatch(toggleSortCardsPriceIncrease(id, isSwitched));
    }
    if (id === "age" && isSwitched === false) {
      dispatch(toggleSortCardsAgeIncrease(id, isSwitched));
    }
  };

  return (
    <button
      className="controls__menu"
      disabled={isCardsDataFetching ? true : isCardsDataFetchError ? true : false}
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
