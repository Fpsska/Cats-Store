import React from "react";
import SortButtonTemplate from "./SortButtonTemplate";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../../Redux/store";
import "./Sort.scss";


const SortButtonList: React.FC = () => {
  const { isCardsDataFetching, isCardsDataFetchError, sortButtons } = useSelector(
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
            isCardsDataFetching={isCardsDataFetching}
            isCardsDataFetchError={isCardsDataFetchError}
          />
        );
      }),
    [isCardsDataFetching, isCardsDataFetchError]
  );
  return <div className="controls__wrapper">{sortButtonList}</div>;
};

export default SortButtonList;
