import {
    ACTION_CHANGE_BURGER_VISIBLE_STATUS,
    ACTION_GET_INPUT_VALUE,
    ACTION_CHANGE_MAIN_PAGE_STATUS,
    ACTION_CHANGE_OVERVIEW_PAGE_STATUS,
    ACTION_CHANGE_BURGER_OPENED_STATUS
} from '../store/actions/headerActions';

// /. Imports

interface IheaderLinks {
    id: number;
    text: string;
    link: string;
}

export interface IheaderState {
    headerLinks: IheaderLinks[];
    isBurgerHidden: boolean;
    isBurgerOpen: boolean;
    isBodyScrolling: boolean;
    isHomePage: boolean;
    isOverviewPage: boolean;
    emailValue: string;
}

// /. Data Types

interface changeBurgerVisibleStatus {
    type: typeof ACTION_CHANGE_BURGER_VISIBLE_STATUS;
    payload: boolean;
}

interface changeBurgerOpenedStatus {
    type: typeof ACTION_CHANGE_BURGER_OPENED_STATUS;
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

// /. AC Types

export type headerActionTypes =
    | changeBurgerVisibleStatus
    | changeBurgerOpenedStatus
    | getInputValue
    | changeMainPageStatus
    | changeOverviewPageStatus;
