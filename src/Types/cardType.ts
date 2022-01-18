import {
  ACTION_FETCH_TOGGLE,
  ACTION_FETCH_CARDS,
  ACTION_TOGGLE_FAVOURITE,
  ACTION_SORT_CARDS,
} from "../Redux/Actions/cardActions";

export interface CardStateTypes {
  cards: any[];
  sortButtons: any[];
  isFetching: boolean;
}

interface fetchToggle {
  type: typeof ACTION_FETCH_TOGGLE;
  payload: {
    value: boolean;
  };
}

interface fetchCards {
  type: typeof ACTION_FETCH_CARDS;
  payload: any[];
}

interface toggleIsFavourite {
  type: typeof ACTION_TOGGLE_FAVOURITE;
  payload: {
    id: number;
    status: boolean;
  };
}

interface toggleSortCards {
  type: typeof ACTION_SORT_CARDS;
  payload: {
    id: string;
    status: boolean;
  };
}

export type cardActionTypes =
  | fetchToggle
  | fetchCards
  | toggleIsFavourite
  | toggleSortCards;
