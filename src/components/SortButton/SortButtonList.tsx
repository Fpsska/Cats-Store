import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import SortButtonTemplate from './SortButtonTemplate';
import './Sort.scss';

// /. Imports

const SortButtonList: React.FC = () => {

  const {
    isCardsDataFetching,
    isCardsDataFetchError,
    sortButtons
  } = useSelector(
    (state: RootState) => state.cardReducer
  );
  //
  return (
    <div className="controls__wrapper">
      {sortButtons.map(item => {
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
      })}
    </div>
  );
};

export default SortButtonList;
