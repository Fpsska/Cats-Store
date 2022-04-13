import {
    ACTION_SET_CURRENT_RANGE_VALUE
} from "../Redux/Actions/filterActions";

// /. Imports

export interface filterStateTypes {
    inputRangeTotalValue: number,
    inputRangeMinValue: number,
    currentRangeValue: number,
}

// /. Data Types


interface setCurrentRangeValue {
    type: typeof ACTION_SET_CURRENT_RANGE_VALUE;
    payload: number;
}


// /. AC Types

export type filterActionTypes =
    | setCurrentRangeValue
