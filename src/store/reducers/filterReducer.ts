import { IfilterState, filterActionTypes } from '../../Types/filterTypes';

import {
    ACTION_SET_CURRENT_RANGE_VALUE,
    ACTION_SET_TOTAL_RANGE_VALUE
} from '../actions/filterActions';

// /. Imports

const initialState: IfilterState = {
    inputRangeTotalValue: 0,
    inputRangeMinValue: 0,
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
        case ACTION_SET_TOTAL_RANGE_VALUE:
            return {
                ...state,
                inputRangeTotalValue: action.payload
            };
        default:
            return state;
    }
};

export default filterReducer;
