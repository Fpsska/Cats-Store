import { CardStateTypes, cardActionTypes } from "../../Types/cardType";

export const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE";
export const ACTION_SORT_CARDS_PRICE_DECREASE =
  "ACTION_SORT_CARDS_PRICE_DECREASE";
export const ACTION_SORT_CARDS_PRICE_INCREASE =
  "ACTION_SORT_CARDS_PRICE_INCREASE";
export const ACTION_SORT_CARDS_AGE_DECREASE = "ACTION_SORT_CARDS_AGE_DECREASE";
export const ACTION_SORT_CARDS_AGE_INCREASE = "ACTION_SORT_CARDS_AGE_INCREASE";
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

export const toggleSortCardsPriceDecrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_PRICE_DECREASE,
    payload: { id, status },
  };
};

export const toggleSortCardsPriceIncrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_PRICE_INCREASE,
    payload: { id, status },
  };
};

export const toggleSortCardsAgeDecrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_AGE_DECREASE,
    payload: { id, status },
  };
};

export const toggleSortCardsAgeIncrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_AGE_INCREASE,
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
