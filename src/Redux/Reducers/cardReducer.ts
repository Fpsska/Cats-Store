import {
  ACTION_FETCH_TOGGLE,
  ACTION_FETCH_CARDS,
  ACTION_TOGGLE_FAVOURITE,
  ACTION_SORT_CARDS,
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
  isFetching: false,
};

const cardReducer = (state = initialState, action: cardActionTypes) => {
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
        catsCount: "",
      };
    case ACTION_FETCH_TOGGLE:
      return {
        ...state,
        isFetching: action.payload,
      };
    case ACTION_SORT_CARDS:
      if (action.payload.id === "price" && action.payload.status === false) {
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
      } else if (
        action.payload.id === "price" &&
        action.payload.status === true
      ) {
        return {
          ...state,
          cards: [
            ...state.cards.sort((a, b) => {
              return parseInt(a.price) - parseInt(b.price);
            }),
          ],
        };
      }
      // /. price sort
      else if (action.payload.id === "age" && action.payload.status === false) {
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
      } else if (
        action.payload.id === "age" &&
        action.payload.status === true
      ) {
        return {
          ...state,
          cards: [
            ...state.cards.sort((a, b) => {
              return parseInt(a.age) - parseInt(b.age);
            }),
          ],
        };
      }
      // /. age sort
      break;
    default:
      return state;
  }
};

export default cardReducer;
