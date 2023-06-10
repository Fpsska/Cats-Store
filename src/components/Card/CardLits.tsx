import React from 'react';

import { useAppSelector } from 'store/hooks';

import { Ipet } from 'types/cardTypes';

import Card from './Card';

// /. Imports

const CardList: React.FC = () => {
    const { cards } = useAppSelector(state => state.cardReducer);
    const { currentRangeValue } = useAppSelector(state => state.filterReducer);

    // /. hooks

    return (
        <div className="gallery__cards">
            {cards.map((item: Ipet) => {
                return (
                    <Card
                        key={item.id}
                        {...item}
                        currentRangeValue={currentRangeValue}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
