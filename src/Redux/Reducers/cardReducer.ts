import {
  ACTION_FETCH_TOGGLE,
  ACTION_FETCH_CARDS,
  ACTION_TOGGLE_FAVOURITE,
  ACTION_SORT_CARDS_PRICE_DECREASE,
  ACTION_SORT_CARDS_PRICE_INCREASE,
  ACTION_SORT_CARDS_AGE_DECREASE,
  ACTION_SORT_CARDS_AGE_INCREASE,
} from "../Actions/cardActions";
import { CardStateTypes, cardActionTypes } from "../../Types/cardType";

const initialState: CardStateTypes = {
  cards: [],
  sortButtons: [
    {
      text: "Цена",
      id: "price",
      isSorted: false,
    },
    {
      text: "Возраст",
      id: "age",
      isSorted: false,
    },
  ],
  isFetching: true,
};

const cardReducer = (
  state = initialState,
  action: cardActionTypes
): CardStateTypes => {
  switch (action.type) {
    case ACTION_TOGGLE_FAVOURITE:
      return {
        ...state,
        cards: state.cards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavourite: action.payload.status,
            };
          }
          return item;
        }),
      };
    case ACTION_FETCH_CARDS:
      return {
        ...state,
        cards: [...state.cards.concat(action.payload)],
        // catsCount: ""
      };
    case ACTION_FETCH_TOGGLE:
      return {
        ...state,
        isFetching: action.payload.value,
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
