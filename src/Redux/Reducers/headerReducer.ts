import { headerStateTypes, headerActionTypes } from "../../Types/headerType";

import {
  ACTION_CHANGE_NAV_DISPLAY,
  ACTION_GET_INPUT_VALUE,
  ACTION_CHANGE_MAIN_PAGE_STATUS,
  ACTION_CHANGE_OVERVIEW_PAGE_STATUS,
  ACTION_CHANGE_BURGER_STATUS,
  ACTION_SET_CURRENT_RANGE_VALUE,
  ACTION_SET_FORM_ALERT_VISIBLE_STATUS
} from "../Actions/headerActions";

const initialState: headerStateTypes = {
  headerLinks: [
    {
      id: 1,
      text: "Main",
      link: "/Cats-Store/",
    },
    {
      id: 2,
      text: "Favourite",
      link: "Favourite",
    },
    {
      id: 3,
      text: "Live",
      link: "Live",
    },
    {
      id: 4,
      text: "Profile",
      link: "Profile",
    },
  ],
  isBurgerHidden: true,
  isBurgerOpen: false,
  isBodyScrolling: true,
  isHomePage: true,
  isOverviewPage: false,
  emailValue: "",
  inputRangeTotalValue: 10000,
  inputRangeMinValue: 1500,
  currentRangeValue: 0,
  isFormAlertVisible: false
};

const headerReducer = (
  state = initialState,
  action: headerActionTypes
): headerStateTypes => {
  switch (action.type) {
    case ACTION_CHANGE_NAV_DISPLAY:
      return {
        ...state,
        isBurgerHidden: action.payload,
      };
    case ACTION_GET_INPUT_VALUE:
      return {
        ...state,
        emailValue: action.payload,
      };
    case ACTION_CHANGE_MAIN_PAGE_STATUS:
      return {
        ...state,
        isHomePage: action.payload,
      };
    case ACTION_CHANGE_OVERVIEW_PAGE_STATUS:
      return {
        ...state,
        isOverviewPage: action.payload,
      };
    case ACTION_CHANGE_BURGER_STATUS:
      return {
        ...state,
        isBurgerOpen: action.payload,
      };
    case ACTION_SET_CURRENT_RANGE_VALUE:
      return {
        ...state,
        currentRangeValue: action.payload,
      };
    case ACTION_SET_FORM_ALERT_VISIBLE_STATUS:
      return {
        ...state,
        isFormAlertVisible: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
