import {
  ACTION_FETCH_CARDS,
  ACTION_FETCH_CARDS_DATA_TOGGLE,
  ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS,
  ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE,
  ACTION_SET_GIF_DATA,
  ACTION_FETCH_GIF_DATA_TOGGLE,
  ACTION_SET_GIF_DATA_ERROR_STATUS,
  ACTION_SET_GIF_DATA_ERROR_MESSAGE,
  ACTION_SET_LIKED_CARDS_DATA,
  ACTION_SET_FAVOURITE_STATUS,
  ACTION_SORT_CARDS_BY_PRICE,
  ACTION_SORT_CARDS_BY_AGE,
  ACTION_SET_NOTIFICATION_VISIBLE_STATUS,
  ACTION_SET_FILTERED_CARDS_DATA_LENGTH,
  ACTION_SET_BUTTON_SORTED_STATUS
} from '../store/actions/cardActions';

// /. Imports

export interface IactualData {
  id: string,
  image: string,
  name: string,
  location: string,
  paw: string,
  age: string,
  price: number,
  discount: string,
  discountStatus: boolean,
  cardStatus: boolean,
  isFavourite: boolean,
}

export interface IcardState {
  cards: IactualData[];
  likedCardsData: IactualData[];
  sortButtons: IsortButtons[];
  gifData: IgifData[];
  filteredCardsData: IactualData[];
  filteredCardsDataLength: number;
  isCardsDataFetching: boolean;
  isCardsDataFetchError: boolean;
  cardsDataFetchErrorMessage: string;
  isGifDataFetching: boolean;
  isGifDataFetchError: boolean;
  gifDataFetchErrorMessage: string;
  isNotificationVisible: boolean;
}

export interface IgifData {
  id: string,
  image: string
}

export interface IsortButtons {
  text: string,
  id: string,
  isSorted: boolean,
}

// /. Data Types

interface fetchCards {
  type: typeof ACTION_FETCH_CARDS;
  payload: IactualData[];
}
interface fetchCardsDataToggle {
  type: typeof ACTION_FETCH_CARDS_DATA_TOGGLE;
  payload: {
    value: boolean;
  };
}
interface setFetchCardsDataErrorStatus {
  type: typeof ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS;
  payload: {
    value: boolean;
  };
}
interface setFetchCardsDataErrorMessage {
  type: typeof ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE;
  payload: {
    value: string;
  };
}


interface setGifData {
  type: typeof ACTION_SET_GIF_DATA;
  payload: IgifData[]
}
interface fetchGifDataToggle {
  type: typeof ACTION_FETCH_GIF_DATA_TOGGLE;
  payload: {
    value: boolean;
  };
}
interface setFetchGifDataErrorStatus {
  type: typeof ACTION_SET_GIF_DATA_ERROR_STATUS;
  payload: {
    value: boolean;
  };
}
interface setFetchGifDataErrorMessage {
  type: typeof ACTION_SET_GIF_DATA_ERROR_MESSAGE;
  payload: {
    value: string;
  };
}


interface setLikedCardsData {
  type: typeof ACTION_SET_LIKED_CARDS_DATA;
}


interface setFavouriteStatus {
  type: typeof ACTION_SET_FAVOURITE_STATUS;
  payload: {
    id: string;
    status: boolean;
  };
}


interface setNotificationVisibleStatus {
  type: typeof ACTION_SET_NOTIFICATION_VISIBLE_STATUS;
  payload: {
    status: boolean
  };
}


interface sortCardsByPrice {
  type: typeof ACTION_SORT_CARDS_BY_PRICE;
  payload: {
    id: string;
    status: boolean;
  };
}
interface sortCardsByAge {
  type: typeof ACTION_SORT_CARDS_BY_AGE;
  payload: {
    id: string;
    status: boolean;
  };
}


interface setFilteredCardsDataLength {
  type: typeof ACTION_SET_FILTERED_CARDS_DATA_LENGTH,
  payload: number
};


interface setButtonSortedStatus {
  type: typeof ACTION_SET_BUTTON_SORTED_STATUS;
  payload: {
    id: string;
    status: boolean;
  };
}

// /. AC Types

export type cardActionTypes =
  | fetchCards
  | fetchCardsDataToggle
  | setFetchCardsDataErrorStatus
  | setFetchCardsDataErrorMessage
  | setGifData
  | fetchGifDataToggle
  | setFetchGifDataErrorStatus
  | setFetchGifDataErrorMessage
  | setLikedCardsData
  | setFavouriteStatus
  | setNotificationVisibleStatus
  | sortCardsByPrice
  | sortCardsByAge
  | setFilteredCardsDataLength
  | setButtonSortedStatus