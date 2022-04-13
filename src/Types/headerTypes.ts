import {
  ACTION_CHANGE_NAV_DISPLAY,
  ACTION_GET_INPUT_VALUE,
  ACTION_CHANGE_MAIN_PAGE_STATUS,
  ACTION_CHANGE_OVERVIEW_PAGE_STATUS,
  ACTION_CHANGE_BURGER_STATUS,
} from "../Redux/Actions/headerActions";

// /. Imports

export interface headerStateTypes {
  headerLinks: any[];
  isBurgerHidden: boolean;
  isBurgerOpen: boolean;
  isBodyScrolling: boolean;
  isHomePage: boolean;
  isOverviewPage: boolean;
  emailValue: string;
}

// /. Data Types

interface changeNavDisplay {
  type: typeof ACTION_CHANGE_NAV_DISPLAY;
  payload: boolean;
}


interface getInputValue {
  type: typeof ACTION_GET_INPUT_VALUE;
  payload: string;
}


interface changeMainPageStatus {
  type: typeof ACTION_CHANGE_MAIN_PAGE_STATUS;
  payload: boolean;
}


interface changeOverviewPageStatus {
  type: typeof ACTION_CHANGE_OVERVIEW_PAGE_STATUS;
  payload: boolean;
}


interface changeBurgerStatus {
  type: typeof ACTION_CHANGE_BURGER_STATUS;
  payload: boolean;
}



// /. AC Types

export type headerActionTypes =
  | changeNavDisplay
  | getInputValue
  | changeMainPageStatus
  | changeOverviewPageStatus
  | changeBurgerStatus
