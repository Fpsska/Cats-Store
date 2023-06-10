import React from 'react';

import { useAppSelector } from '../../store/hooks';

import { IactualData } from '../../types/cardTypes';

import Card from './Card';

// /. Imports

const CardList: React.FC = () => {
    const { cards } = useAppSelector(state => state.cardReducer);
    const { currentRangeValue } = useAppSelector(state => state.filterReducer);

    return (
        <div className="gallery__cards">
            {cards.map((item: IactualData) => {
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
