import { IactualData, IgifData, cardActionTypes } from '../../types/cardTypes';

// /. Imports

export const ACTION_FETCH_CARDS = 'ACTION_FETCH_CARDS';
export const ACTION_FETCH_CARDS_DATA_TOGGLE = 'ACTION_FETCH_CARDS_DATA_TOGGLE';
export const ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS =
    'ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS';
export const ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE =
    'ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE';

export const ACTION_SET_GIF_DATA = 'ACTION_SET_GIF_DATA';
export const ACTION_FETCH_GIF_DATA_TOGGLE = 'ACTION_FETCH_GIF_DATA_TOGGLE';
export const ACTION_SET_GIF_DATA_ERROR_STATUS =
    'ACTION_SET_GIF_DATA_ERROR_STATUS';
export const ACTION_SET_GIF_DATA_ERROR_MESSAGE =
    'ACTION_SET_GIF_DATA_ERROR_MESSAGE';

export const ACTION_SET_LIKED_CARDS_DATA = 'ACTION_SET_LIKED_CARDS_DATA';
export const ACTION_SET_FAVOURITE_STATUS = 'ACTION_SET_FAVOURITE_STATUS';
export const ACTION_SET_NOTIFICATION_VISIBLE_STATUS =
    'ACTION_SET_NOTIFICATION_VISIBLE_STATUS';

export const ACTION_SORT_CARDS_BY_PRICE = 'ACTION_SORT_CARDS_BY_PRICE';
export const ACTION_SORT_CARDS_BY_AGE = 'ACTION_SORT_CARDS_BY_AGE';

export const ACTION_SET_FILTERED_CARDS_DATA_LENGTH =
    'ACTION_SET_FILTERED_CARDS_DATA_LENGTH';

export const ACTION_SET_BUTTON_SORTED_STATUS =
    'ACTION_SET_BUTTON_SORTED_STATUS';

// /. AC Names

export const fetchCards = (data: IactualData[]): cardActionTypes => {
    return {
        type: ACTION_FETCH_CARDS,
        payload: data
    };
};
export const fetchCardsDataToggle = (value: boolean): cardActionTypes => {
    return {
        type: ACTION_FETCH_CARDS_DATA_TOGGLE,
        payload: {
            value
        }
    };
};
export const setFetchCardsDataErrorStatus = (
    value: boolean
): cardActionTypes => {
    return {
        type: ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS,
        payload: {
            value
        }
    };
};
export const setFetchCardsDataErrorMessage = (
    value: string
): cardActionTypes => {
    return {
        type: ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE,
        payload: {
            value
        }
    };
};

export const setGifData = (data: IgifData[]): cardActionTypes => {
    return {
        type: ACTION_SET_GIF_DATA,
        payload: data
    };
};
export const fetchGifDataToggle = (value: boolean): cardActionTypes => {
    return {
        type: ACTION_FETCH_GIF_DATA_TOGGLE,
        payload: {
            value
        }
    };
};
export const setGifDataErrorStatus = (value: boolean): cardActionTypes => {
    return {
        type: ACTION_SET_GIF_DATA_ERROR_STATUS,
        payload: {
            value
        }
    };
};
export const setFetchGifDataErrorMessage = (value: string): cardActionTypes => {
    return {
        type: ACTION_SET_GIF_DATA_ERROR_MESSAGE,
        payload: {
            value
        }
    };
};

export const setNotificationVisibleStatus = (
    status: boolean
): cardActionTypes => {
    return {
        type: ACTION_SET_NOTIFICATION_VISIBLE_STATUS,
        payload: {
            status
        }
    };
};

export const setLikedCardsData = (): cardActionTypes => {
    return {
        type: ACTION_SET_LIKED_CARDS_DATA
    };
};

export const setFavouriteStatus = (
    id: string,
    status: boolean
): cardActionTypes => {
    return {
        type: ACTION_SET_FAVOURITE_STATUS,
        payload: { id, status }
    };
};

export const sortCardsByPrice = (
    id: string,
    status: boolean
): cardActionTypes => {
    return {
        type: ACTION_SORT_CARDS_BY_PRICE,
        payload: { id, status }
    };
};

export const sortCardsByAge = (
    id: string,
    status: boolean
): cardActionTypes => {
    return {
        type: ACTION_SORT_CARDS_BY_AGE,
        payload: { id, status }
    };
};

export const setFilteredCardsDataLength = (value: number): cardActionTypes => {
    return {
        type: ACTION_SET_FILTERED_CARDS_DATA_LENGTH,
        payload: value
    };
};

export const setButtonSortedStatus = (
    id: string,
    status: boolean
): cardActionTypes => {
    return {
        type: ACTION_SET_BUTTON_SORTED_STATUS,
        payload: { id, status }
    };
};
