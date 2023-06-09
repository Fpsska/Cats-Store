import React, { useState } from 'react';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import { useAppDispatch } from '../../store/hooks';

import {
    sortCardsByPrice,
    sortCardsByAge,
    setButtonSortedStatus
} from '../../store/actions/cardActions';

// /. Imports

interface propTypes {
    id: string;
    text: string;
    isCardsDataFetching: boolean;
    isCardsDataFetchError: boolean;
    isSorted: boolean;
}

// /. interfaces

const SortButtonTemplate: React.FC<propTypes> = props => {
    const { id, text, isCardsDataFetching, isCardsDataFetchError } = props;

    const [isSwitched, setSwitchStatus] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const makeDataSort = (e: React.SyntheticEvent): void => {
        setSwitchStatus(!isSwitched);

        dispatch(setButtonSortedStatus(id, isSwitched));

        id === 'price'
            ? dispatch(sortCardsByPrice(id, isSwitched))
            : dispatch(sortCardsByAge(id, isSwitched));
    };

    return (
        <button
            className="controls__menu"
            disabled={isCardsDataFetching || isCardsDataFetchError}
            aria-label={`sort by ${id}`}
            onClick={e => makeDataSort(e)}
        >
            <span className="controls__menu_text">{text}</span>
            <span>
                {isSwitched ? (
                    <MdKeyboardArrowUp
                        color={'#000'}
                        size={'26px'}
                    />
                ) : (
                    <MdKeyboardArrowDown
                        color={'#000'}
                        size={'26px'}
                    />
                )}
            </span>
        </button>
    );
};

export default SortButtonTemplate;
