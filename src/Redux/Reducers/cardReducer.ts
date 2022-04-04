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
  ACTION_SORT_CARDS_PRICE_DECREASE,
  ACTION_SORT_CARDS_PRICE_INCREASE,
  ACTION_SORT_CARDS_AGE_DECREASE,
  ACTION_SORT_CARDS_AGE_INCREASE,
  ACTION_SET_NOTIFICATION_VISIBLE_STATUS
} from "../Actions/cardActions";
import { CardStateTypes, cardActionTypes } from "../../Types/cardType";

const initialState: CardStateTypes = {
  cards: [],
  gifData: [],
  likedCardsData: [],
  sortButtons: [
    {
      id: "price",
      text: "Price",
      isSorted: false,
    },
    {
      id: "age",
      text: "Age",
      isSorted: false,
    },
  ],
  isCardsDataFetching: true,
  isCardsDataFetchError: false,
  cardsDataFetchErrorMessage: "error from fetchCardsData thunk",
  isGifDataFetching: true,
  isGifDataFetchError: false,
  gifDataFetchErrorMessage: "error from fetchGifData thunk",
  isNotificationVisible: false
};

const cardReducer = (
  state = initialState,
  action: cardActionTypes
): CardStateTypes => {
  switch (action.type) {
    case ACTION_FETCH_CARDS:
      return {
        ...state,
        cards: [...state.cards.concat(action.payload)],
      };
    case ACTION_FETCH_CARDS_DATA_TOGGLE:
      return {
        ...state,
        isCardsDataFetching: action.payload.value,
      };
    case ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS:
      return {
        ...state,
        isCardsDataFetchError: action.payload.value,
      };
    case ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE:
      return {
        ...state,
        cardsDataFetchErrorMessage: action.payload.value,
      };
    case ACTION_SET_GIF_DATA:
      return {
        ...state,
        gifData: action.payload
      };
    case ACTION_FETCH_GIF_DATA_TOGGLE:
      return {
        ...state,
        isGifDataFetching: action.payload.value,
      };
    case ACTION_SET_GIF_DATA_ERROR_STATUS:
      return {
        ...state,
        isGifDataFetchError: action.payload.value,
      };
    case ACTION_SET_GIF_DATA_ERROR_MESSAGE:
      return {
        ...state,
        gifDataFetchErrorMessage: action.payload.value,
      };
    case ACTION_SET_LIKED_CARDS_DATA:
      return {
        ...state,
        likedCardsData: state.cards.filter(item => item.isFavourite === true)
      };
    case ACTION_SET_FAVOURITE_STATUS:
      return {
        ...state,
        cards: state.cards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavourite: action.payload.status,
            };
          }
          return item
        })
      };
    case ACTION_SET_NOTIFICATION_VISIBLE_STATUS:
      return {
        ...state,
        isNotificationVisible: action.payload.status
      };
    case ACTION_SORT_CARDS_PRICE_DECREASE:
      return {
        ...state,
        cards: [
          ...state.cards.sort((a, b) => {
            return parseInt(b.price) - parseInt(a.price);
          }),
        ],
        sortButtons: state.sortButtons.map((item) => {
          return {
            ...item,
            isSorted: action.payload.status,
          };
        }),
      };
    case ACTION_SORT_CARDS_PRICE_INCREASE:
      return {
        ...state,
        cards: [
          ...state.cards.sort((a, b) => {
            return parseInt(a.price) - parseInt(b.price);
          }),
        ],
        sortButtons: state.sortButtons.map((item) => {
          return {
            ...item,
            isSorted: action.payload.status,
          };
        }),
      };
    case ACTION_SORT_CARDS_AGE_DECREASE:
      return {
        ...state,
        cards: [
          ...state.cards.sort((a, b) => {
            return parseInt(b.age) - parseInt(a.age);
          }),
        ],
        sortButtons: state.sortButtons.map((item) => {
          return {
            ...item,
            isSorted: action.payload.status,
          };
        }),
      };
    case ACTION_SORT_CARDS_AGE_INCREASE:
      return {
        ...state,
        cards: [
          ...state.cards.sort((a, b) => {
            return parseInt(a.age) - parseInt(b.age);
          }),
        ],
        sortButtons: state.sortButtons.map((item) => {
          return {
            ...item,
            isSorted: action.payload.status,
          };
        }),
      };
    default:
      return state;
  }
};

export default cardReducer;
