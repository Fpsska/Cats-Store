import { CardStateTypes, cardActionTypes } from "../../Types/cardType";

export const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE";
export const ACTION_SORT_CARDS = "ACTION_SORT_CARDS";
export const ACTION_FETCH_CARDS = "ACTION_FETCH_CARDS";
export const ACTION_FETCH_TOGGLE = "ACTION_FETCH_TOGGLE";

export const fetchToggle = (value: boolean): cardActionTypes => {
  return {
    type: ACTION_FETCH_TOGGLE,
    payload: {
      value,
    },
  };
};

export const fetchCards = (results: any[]): cardActionTypes => {
  return {
    type: ACTION_FETCH_CARDS,
    payload: results,
  };
};

export const toggleSortCards = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS,
    payload: { id, status },
  };
};

export const toggleIsFavourite = (
  id: number,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_TOGGLE_FAVOURITE,
    payload: { id, status },
  };
};
