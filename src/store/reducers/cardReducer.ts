import {
  ACTION_FETCH_CARDS,
  ACTION_FETCH_CARDS_DATA_TOGGLE,
  ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS,
  ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE,
  ACTION_SET_GIF_DATA,
  ACTION_FETCH_GIF_DATA_TOGGLE,
  ACTION_SET_GIF_DATA_ERROR_STATUS,
  ACTION_SET_GIF_DATA_ERROR_MESSAGE,
  ACTION_SET_FAVOURITE_STATUS,
  ACTION_SET_LIKED_CARDS_DATA,
  ACTION_SORT_CARDS_BY_PRICE,
  ACTION_SORT_CARDS_BY_AGE,
  ACTION_SET_NOTIFICATION_VISIBLE_STATUS,
  ACTION_SET_FILTERED_CARDS_DATA,
  ACTION_SET_FILTERED_STATUS,
  ACTION_SET_BUTTON_SORTED_STATUS
} from '../actions/cardActions';

import { CardStateTypes, cardActionTypes } from '../../Types/cardTypes';

// /. Imports

const initialState: CardStateTypes = {
  cards: [],
  gifData: [],
  likedCardsData: [],
  filteredCardsData: [],
  sortButtons: [
    {
      id: 'price',
      text: 'Price',
      isSorted: false
    },
    {
      id: 'age',
      text: 'Age',
      isSorted: false
    }
  ],
  isCardsDataFetching: true,
  isCardsDataFetchError: false,
  cardsDataFetchErrorMessage: 'error from fetchCardsData thunk',
  isGifDataFetching: true,
  isGifDataFetchError: false,
  gifDataFetchErrorMessage: 'error from fetchGifData thunk',
  isNotificationVisible: false,
  isDataFiltered: false
};

// /. initialState

const cardReducer = (state = initialState, action: cardActionTypes): CardStateTypes => {
  switch (action.type) {
    case ACTION_FETCH_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.payload]
      };
    case ACTION_FETCH_CARDS_DATA_TOGGLE:
      return {
        ...state,
        isCardsDataFetching: action.payload.value
      };
    case ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS:
      return {
        ...state,
        isCardsDataFetchError: action.payload.value
      };
    case ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE:
      return {
        ...state,
        cardsDataFetchErrorMessage: action.payload.value
      };
    case ACTION_SET_GIF_DATA:
      return {
        ...state,
        gifData: action.payload
      };
    case ACTION_FETCH_GIF_DATA_TOGGLE:
      return {
        ...state,
        isGifDataFetching: action.payload.value
      };
    case ACTION_SET_GIF_DATA_ERROR_STATUS:
      return {
        ...state,
        isGifDataFetchError: action.payload.value
      };
    case ACTION_SET_GIF_DATA_ERROR_MESSAGE:
      return {
        ...state,
        gifDataFetchErrorMessage: action.payload.value
      };
    case ACTION_SET_FAVOURITE_STATUS:
      return {
        ...state,
        cards: state.cards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavourite: action.payload.status
            };
          }
          return item;
        })
      };
    case ACTION_SET_LIKED_CARDS_DATA:
      return {
        ...state,
        likedCardsData: state.cards.filter(item => item.isFavourite === true)
      };
    case ACTION_SET_NOTIFICATION_VISIBLE_STATUS:
      return {
        ...state,
        isNotificationVisible: action.payload.status
      };
    case ACTION_SORT_CARDS_BY_PRICE:
      return {
        ...state,
        cards: [
          ...state.cards.sort((a, b) => {
            return action.payload.status ? b.price - a.price : a.price - b.price;
          })
        ]
      };
    case ACTION_SORT_CARDS_BY_AGE:
      return {
        ...state,
        cards: [
          ...state.cards.sort((a, b) => {
            return action.payload.status
              ? parseInt(b.age, 10) - parseInt(a.age, 10)
              : parseInt(a.age, 10) - parseInt(b.age, 10);
          })
        ]
      };
    case ACTION_SET_FILTERED_CARDS_DATA:
      return {
        ...state,
        filteredCardsData: state.likedCardsData.filter(item => item.price <= action.payload)
      };
    case ACTION_SET_FILTERED_STATUS:
      return {
        ...state,
        isDataFiltered: action.payload
      };
    case ACTION_SET_BUTTON_SORTED_STATUS:
      return {
        ...state,
        sortButtons: state.sortButtons.map(item =>
          item.id === action.payload.id
            ? { ...item, isSorted: action.payload.status }
            : item
        )
      };
    default:
      return state;
  }
};

export default cardReducer;
