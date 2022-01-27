import React from "react";
import SortButtonTemplate from "./SortButtonTemplate";
import "./Sort.scss";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  toggleSortCardsPriceDecrease,
  toggleSortCardsAgeDecrease,
  toggleSortCardsPriceIncrease,
  toggleSortCardsAgeIncrease,
} from "../../Redux/Actions/cardActions";
import { RootState } from "../../Redux/store";

const SortButtonList: React.FC = () => {
  const { isFetching, sortButtons } = useSelector(
    (state: RootState) => state.cardReducer
  );
  //
  const sortButtonList = useMemo(
    () =>
      sortButtons.map((item) => {
        return (
          <SortButtonTemplate
            key={item.id}
            id={item.id}
            text={item.text}
            isSorted={item.isSorted}
            toggleSortCardsPriceDecrease={toggleSortCardsPriceDecrease}
            toggleSortCardsPriceIncrease={toggleSortCardsPriceIncrease}
            toggleSortCardsAgeDecrease={toggleSortCardsAgeDecrease}
            toggleSortCardsAgeIncrease={toggleSortCardsAgeIncrease}
            isFetching={isFetching}
          />
        );
      }),
    [isFetching]
  );
  return <div className="controls__wrapper">{sortButtonList}</div>;
};

export default SortButtonList;
