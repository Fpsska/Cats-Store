import React from "react";
import SortButtonTemplate from "./SortButtonTemplate";
import "./Sort.scss";

const SortButtonList = (props) => {
  const sortButtonList = props.sortButtons.map((item) => {
    return <SortButtonTemplate  key={item.id} id={item.id} text={item.text} name={item.name} toggleSortCards={props.toggleSortCards} isSorted={props.isSorted}  />;
  });
  return <div className="controls__wrapper">{sortButtonList}</div>;
};

export default SortButtonList;
