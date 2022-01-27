import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";

interface SortButtonTemplateProps {
  id: string;
  text: string;
  isFetching: boolean;
  isSorted: boolean;
  toggleSortCardsPriceDecrease: (arg1: string, arg2: boolean) => void;
  toggleSortCardsAgeDecrease: (arg1: string, arg2: boolean) => void;
  toggleSortCardsPriceIncrease: (arg1: string, arg2: boolean) => void;
  toggleSortCardsAgeIncrease: (arg1: string, arg2: boolean) => void;
}

const SortButtonTemplate: React.FC<SortButtonTemplateProps> = ({
  id,
  text,
  isSorted,
  isFetching,
  toggleSortCardsPriceDecrease,
  toggleSortCardsAgeDecrease,
  toggleSortCardsPriceIncrease,
  toggleSortCardsAgeIncrease,
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
