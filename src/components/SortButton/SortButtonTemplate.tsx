import React, { useState } from 'react';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import { useSort } from '../../hooks/useSort';

// /. Imports

interface SortButtonTemplateProps {
  id: string;
  text: string;
  isCardsDataFetching: boolean;
  isCardsDataFetchError: boolean;
  isSorted: boolean;
}

// /. interfaces

const SortButtonTemplate: React.FC<SortButtonTemplateProps> = (props) => {

  const { id, text, isCardsDataFetching, isCardsDataFetchError } = props;

  const [isSwitched, setSwitchStatus] = useState<boolean>(false);
  const { defineSortOption } = useSort();

  const runSort = (): void => {
    setSwitchStatus(!isSwitched);
    defineSortOption({ name: id, status: isSwitched });
  };

  return (
    <button
      className="controls__menu"
      disabled={isCardsDataFetching || isCardsDataFetchError}
      onClick={runSort}
    >
      <span className="controls__menu_text">{text}</span>
      <span>
        {isSwitched ?
          <MdKeyboardArrowUp color={'#000'} size={'26px'} />
          : <MdKeyboardArrowDown color={'#000'} size={'26px'} />
        }
      </span>
    </button>
  );
};

export default SortButtonTemplate;
