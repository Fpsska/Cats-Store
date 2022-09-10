import { headerActionTypes } from '../../Types/headerTypes';

// /. Imports

export const ACTION_CHANGE_BURGER_VISIBLE_STATUS = 'ACTION_CHANGE_BURGER_VISIBLE_STATUS';
export const ACTION_CHANGE_BURGER_OPENED_STATUS = 'ACTION_CHANGE_BURGER_OPENED_STATUS';
export const ACTION_GET_INPUT_VALUE = 'ACTION_SET_INPUT_VALUE';
export const ACTION_CHANGE_MAIN_PAGE_STATUS = 'ACTION_CHANGE_MAIN_PAGE_STATUS';
export const ACTION_CHANGE_OVERVIEW_PAGE_STATUS = 'ACTION_CHANGE_OVERVIEW_PAGE_STATUS';

// /. AC Names

export const changeBurgerVisibleStatus = (status: boolean): headerActionTypes => {
  return {
    type: ACTION_CHANGE_BURGER_VISIBLE_STATUS,
    payload: status
  };
};
export const changeBurgerOpenedStatus = (status: boolean): headerActionTypes => {
  return {
    type: ACTION_CHANGE_BURGER_OPENED_STATUS,
    payload: status
  };
};


export const getInputValue = (value: string): headerActionTypes => {
  return {
    type: ACTION_GET_INPUT_VALUE,
    payload: value
  };
};


export const changeMainPageStatus = (status: boolean): headerActionTypes => {
  return {
    type: ACTION_CHANGE_MAIN_PAGE_STATUS,
    payload: status
  };
};

export const changeOverviewPageStatus = (status: boolean): headerActionTypes => {
  return {
    type: ACTION_CHANGE_OVERVIEW_PAGE_STATUS,
    payload: status
  };
};



















