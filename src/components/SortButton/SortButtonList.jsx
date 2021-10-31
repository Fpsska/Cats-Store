import React from "react";
import SortButtonTemplate from "./SortButtonTemplate";
import "./Sort.scss";

const SortButtonList = (props) => {

  const sortButtonList = props.sortButtons.map((item) => {
    return (
      <SortButtonTemplate
        key={item.id}
        id={item.id}
        text={item.text}
        name={item.name}
        isSorted={item.isSorted}
        toggleSortCards={props.toggleSortCards}
      />
    );
  });
  return <div className="controls__wrapper">{sortButtonList}</div>;
};

export default SortButtonList;
