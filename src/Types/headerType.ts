export interface headerState {
  headerLinks: any[];
  catsCount: string;
  isBurgerHidden: boolean;
  isBurgerOpen: boolean;
  isBodyScrolling: boolean;
  isHomePage: boolean;
  emailValue: string;
}

export enum headerActionTypes {
  ACTION_CHANGE_BURGER_STATUS = "ACTION_CHANGE_BURGER_STATUS",
  ACTION_CHANGE_PAGE_STATUS = "ACTION_CHANGE_PAGE_STATUS",
  ACTION_GET_INPUT_VALUE = "ACTION_GET_INPUT_VALUE",
  ACTION_CHANGE_NAV_DISPLAY = "ACTION_CHANGE_NAV_DISPLAY",
  ACTION_GET_CATS_COUNT = "ACTION_GET_CATS_COUNT",
}

interface changeBurgerStatus {
  type: headerActionTypes.ACTION_CHANGE_BURGER_STATUS;
  payload: boolean;
}

interface changePageStatus {
  type: headerActionTypes.ACTION_CHANGE_PAGE_STATUS;
  payload: boolean;
}

interface changeNavDisplay {
  type: headerActionTypes.ACTION_CHANGE_NAV_DISPLAY;
  payload: boolean;
}

interface getCatsCount {
  type: headerActionTypes.ACTION_GET_CATS_COUNT;
  payload: string;
}

interface getInputValue {
  type: headerActionTypes.ACTION_GET_INPUT_VALUE;
  payload: string;
}

export type headerAction =
  | changeBurgerStatus
  | changePageStatus
  | changeNavDisplay
  | getCatsCount
  | getInputValue;
