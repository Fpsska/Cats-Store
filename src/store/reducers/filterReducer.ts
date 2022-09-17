import { IfilterState, filterActionTypes } from '../../Types/filterTypes';

import {
    ACTION_SET_CURRENT_RANGE_VALUE
} from '../actions/filterActions';

// /. Imports

const initialState: IfilterState = {
    inputRangeTotalValue: 10000,
    inputRangeMinValue: 1500,
    currentRangeValue: 0
};

// /. initialState

const filterReducer = (state = initialState, action: filterActionTypes): IfilterState => {
    switch (action.type) {
        case ACTION_SET_CURRENT_RANGE_VALUE:
            return {
                ...state,
                currentRangeValue: action.payload
            };
        default:
            return state;
    }
};

export default filterReducer;
