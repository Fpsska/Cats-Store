import { IheaderState, headerActionTypes } from '../../Types/headerTypes';

import {
  ACTION_CHANGE_BURGER_VISIBLE_STATUS,
  ACTION_CHANGE_BURGER_OPENED_STATUS,
  ACTION_GET_INPUT_VALUE,
  ACTION_CHANGE_MAIN_PAGE_STATUS,
  ACTION_CHANGE_OVERVIEW_PAGE_STATUS
} from '../actions/headerActions';

// /. Imports

const initialState: IheaderState = {
  headerLinks: [
    {
      id: 1,
      text: 'Main',
      link: '/Cats-Store/'
    },
    {
      id: 2,
      text: 'Favourite',
      link: 'Favourite'
    },
    {
      id: 3,
      text: 'Live',
      link: 'Live'
    },
    {
      id: 4,
      text: 'Profile',
      link: 'Profile'
    }
  ],
  isBurgerHidden: true,
  isBurgerOpen: false,
  isBodyScrolling: true,
  isHomePage: true,
  isOverviewPage: false,
  emailValue: ''
};

// /. initialState

const headerReducer = (state = initialState, action: headerActionTypes): IheaderState => {
  switch (action.type) {
    case ACTION_CHANGE_BURGER_VISIBLE_STATUS:
      return {
        ...state,
        isBurgerHidden: action.payload
      };
    case ACTION_CHANGE_BURGER_OPENED_STATUS:
      return {
        ...state,
        isBurgerOpen: action.payload
      };
    case ACTION_GET_INPUT_VALUE:
      return {
        ...state,
        emailValue: action.payload
      };
    case ACTION_CHANGE_MAIN_PAGE_STATUS:
      return {
        ...state,
        isHomePage: action.payload
      };
    case ACTION_CHANGE_OVERVIEW_PAGE_STATUS:
      return {
        ...state,
        isOverviewPage: action.payload
      };
    default:
      return state;
  }
};

export default headerReducer;
