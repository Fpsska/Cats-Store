import { filterActionTypes } from "../../Types/filterTypes";

// /. Imports

export const ACTION_SET_CURRENT_RANGE_VALUE = "ACTION_SET_CURRENT_RANGE_VALUE"

// /. AC Names

export const setCurrentRangeValue = (value: number): filterActionTypes => {
    return {
        type: ACTION_SET_CURRENT_RANGE_VALUE,
        payload: value,
    };
};









