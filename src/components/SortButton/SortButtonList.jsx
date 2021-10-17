import React from "react";
import SortButtonTemplate from "./SortButtonTemplate";
import "./Sort.scss";

const sortButtonList = (props) => {
  const sortButtonList = props.sortButtons.map((item) => {
    return <SortButtonTemplate key={item.id} text={item.text} />;
  });
  return <div className="controls__wrapper">{sortButtonList}</div>;
};

export default sortButtonList;
