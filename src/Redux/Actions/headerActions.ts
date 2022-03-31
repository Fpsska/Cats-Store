import { headerActionTypes } from "../../Types/headerType";

export const ACTION_CHANGE_NAV_DISPLAY = "ACTION_CHANGE_NAV_DISPLAY";
export const ACTION_GET_INPUT_VALUE = "ACTION_SET_INPUT_VALUE";
export const ACTION_CHANGE_PAGE_STATUS = "ACTION_CHANGE_PAGE_STATUS";
export const ACTION_CHANGE_BURGER_STATUS = "ACTION_CHANGE_BURGER_STATUS";

export const changeBurgerStatus = (status: boolean): headerActionTypes => {
  return {
    type: ACTION_CHANGE_BURGER_STATUS,
    payload: status,
  };
};

export const changePageStatus = (status: boolean): headerActionTypes => {
  return {
    type: ACTION_CHANGE_PAGE_STATUS,
    payload: status,
  };
};

export const getInputValue = (value: string): headerActionTypes => {
  return {
    type: ACTION_GET_INPUT_VALUE,
    payload: value,
  };
};

export const changeNavDisplay = (status: boolean): headerActionTypes => {
  return {
    type: ACTION_CHANGE_NAV_DISPLAY,
    payload: status,
  };
};

