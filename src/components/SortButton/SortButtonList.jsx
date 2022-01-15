import React from "react";
import SortButtonTemplate from "./SortButtonTemplate";
import "./Sort.scss";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const SortButtonList = () => {
  const { isFetching, sortButtons, toggleSortCards } = useSelector(
    (state) => state.mainPage
  );

  const sortButtonList = useMemo(
    () =>
      sortButtons.map((item) => {
        return (
          <SortButtonTemplate
            key={item.id}
            id={item.id}
            text={item.text}
            name={item.name}
            isSorted={item.isSorted}
            toggleSortCards={toggleSortCards}
            isFetching={isFetching}
          />
        );
      }),
    [isFetching]
  );
  return <div className="controls__wrapper">{sortButtonList}</div>;
};

export default SortButtonList;
