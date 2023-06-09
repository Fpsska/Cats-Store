import {
    ACTION_SET_CURRENT_RANGE_VALUE,
    ACTION_SET_TOTAL_RANGE_VALUE
} from '../store/actions/filterActions';

// /. Imports

export interface IfilterState {
    inputRangeTotalValue: number;
    inputRangeMinValue: number;
    currentRangeValue: number;
}

// /. Data Types

interface setCurrentRangeValue {
    type: typeof ACTION_SET_CURRENT_RANGE_VALUE;
    payload: number;
}

interface setTotalRangeValue {
    type: typeof ACTION_SET_TOTAL_RANGE_VALUE;
    payload: number;
}

// /. AC Types

export type filterActionTypes = setCurrentRangeValue | setTotalRangeValue;
