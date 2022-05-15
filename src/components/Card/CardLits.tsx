import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { actualDataTypes } from '../../Types/cardTypes';

import Card from './Card';

// /. Imports

const CardList: React.FC = () => {
  const { cards, likedCardsData } = useSelector((state: RootState) => state.cardReducer);
  const { isHomePage } = useSelector((state: RootState) => state.headerReducer);
  const { currentRangeValue } = useSelector((state: RootState) => state.filterReducer);
  const [list, setList] = useState<actualDataTypes[]>([]);
  // 
  useEffect(() => {
    isHomePage ? setList(cards) : setList(likedCardsData);
  }, [cards, likedCardsData, isHomePage]);
  // 
  return (
    <div className="gallery__cards">
      {list.map(item => {
        return (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            location={item.location}
            age={item.age}
            paw={item.paw}
            price={item.price}
            discount={item.discount}
            isFavourite={item.isFavourite}
            cardStatus={item.cardStatus}
            discountStatus={item.discountStatus}
            currentRangeValue={currentRangeValue}
          />
        );
      })
      }
    </div>
  );
};

export default CardList;
