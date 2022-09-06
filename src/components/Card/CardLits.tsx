import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../store/hooks';

import { actualDataTypes } from '../../Types/cardTypes';

import Card from './Card';

// /. Imports

const CardList: React.FC = () => {
  const { cards, likedCardsData } = useAppSelector(state => state.cardReducer);
  const { isHomePage } = useAppSelector(state => state.headerReducer);
  const { currentRangeValue } = useAppSelector(state => state.filterReducer);

  const [list, setList] = useState<actualDataTypes[]>([]);


  useEffect(() => {
    isHomePage ? setList(cards) : setList(likedCardsData);
  }, [cards, likedCardsData, isHomePage]);

  return (
    <div className="gallery__cards">
      {list.map(item => {
        return (
          <Card
            key={item.id}
            {...item}

            currentRangeValue={currentRangeValue}
          />
        );
      })
      }
    </div>
  );
};

export default CardList;
