import React, { useState } from "react";
import SvgTemplate from "../Common/SvgTemplate";
import { useSort } from "../../hooks/useSort";

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
  const { defineSortOption } = useSort();
  //
  const runSort = (): void => {
    setSwitchStatus(!isSwitched);
    defineSortOption({ name: id, status: isSwitched })
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
