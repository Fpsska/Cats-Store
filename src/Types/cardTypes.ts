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
  ACTION_SORT_CARDS_PRICE_DECREASE,
  ACTION_SORT_CARDS_PRICE_INCREASE,
  ACTION_SORT_CARDS_AGE_DECREASE,
  ACTION_SORT_CARDS_AGE_INCREASE,
  ACTION_SET_NOTIFICATION_VISIBLE_STATUS,
  ACTION_SET_FILTERED_CARDS_DATA,
  ACTION_SET_FILTERED_STATUS
} from '../store/actions/cardActions';

// /. Imports

export interface CardStateTypes {
  cards: actualDataTypes[];
  likedCardsData: actualDataTypes[];
  sortButtons: sortButtonsTypes[];
  gifData: gifDataTypes[];
  filteredCardsData: actualDataTypes[];
  isCardsDataFetching: boolean;
  isCardsDataFetchError: boolean;
  cardsDataFetchErrorMessage: string;
  isGifDataFetching: boolean;
  isGifDataFetchError: boolean;
  gifDataFetchErrorMessage: string;
  isNotificationVisible: boolean;
  isDataFiltered: boolean;
}

export interface actualDataTypes {
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

export interface gifDataTypes {
  id: string,
  image: string
}

export interface sortButtonsTypes {
  text: string,
  id: string,
  isSorted: boolean,
}

// /. Data Types

interface fetchCards {
  type: typeof ACTION_FETCH_CARDS;
  payload: actualDataTypes[];
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
  payload: gifDataTypes[]
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


interface toggleSortCardsPriceDecrease {
  type: typeof ACTION_SORT_CARDS_PRICE_DECREASE;
  payload: {
    id: string;
    status: boolean;
  };
}
interface toggleSortCardsPriceIncrease {
  type: typeof ACTION_SORT_CARDS_PRICE_INCREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsAgeDecrease {
  type: typeof ACTION_SORT_CARDS_AGE_DECREASE;
  payload: {
    id: string;
    status: boolean;
  };
}
interface toggleSortCardsAgeIncrease {
  type: typeof ACTION_SORT_CARDS_AGE_INCREASE;
  payload: {
    id: string;
    status: boolean;
  };
}


interface setFilteredCardsData {
  type: typeof ACTION_SET_FILTERED_CARDS_DATA;
  payload: number
}
interface setFilteredStatus {
  type: typeof ACTION_SET_FILTERED_STATUS;
  payload: boolean
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
  | toggleSortCardsPriceDecrease
  | toggleSortCardsPriceIncrease
  | toggleSortCardsAgeDecrease
  | toggleSortCardsAgeIncrease
  | setFilteredCardsData
  | setFilteredStatus