import React from 'react';

import { useAppSelector } from '../../store/hooks';

import { RootState } from '../../store/store';

import SortButtonTemplate from './SortButtonTemplate';
import './Sort.scss';

// /. Imports

const SortButtonList: React.FC = () => {

  const {
    isCardsDataFetching,
    isCardsDataFetchError,
    sortButtons
  } = useAppSelector((state: RootState) => state.cardReducer);

  return (
    <div className="controls__wrapper">
      {sortButtons.map(item => {
        return (
          <SortButtonTemplate
            key={item.id}
            {...item}

            isCardsDataFetching={isCardsDataFetching}
            isCardsDataFetchError={isCardsDataFetchError}
          />
        );
      })}
    </div>
  );
};

export default SortButtonList;
