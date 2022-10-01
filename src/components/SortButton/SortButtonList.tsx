import React from 'react';

import { useAppSelector } from '../../store/hooks';

import SortButtonTemplate from './SortButtonTemplate';

import './Sort.scss';

// /. Imports

interface propTypes {
  role?: string
}

// /. Interfaces

const SortButtonList: React.FC<propTypes> = ({ role }) => {

  const {
    isCardsDataFetching,
    isCardsDataFetchError,
    sortButtons
  } = useAppSelector(state => state.cardReducer);

  return (
    <div className={role ? `${role} controls` : 'controls'}>
      <div className="controls__wrapper">
        <span className="controls__title">Sorted by:</span>
        {sortButtons.map(button => {
          return (
            <SortButtonTemplate
              key={button.id}
              {...button}

              isCardsDataFetching={isCardsDataFetching}
              isCardsDataFetchError={isCardsDataFetchError}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SortButtonList;
