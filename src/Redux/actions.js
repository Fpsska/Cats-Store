export const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE"
export const ACTION_SORT_CARDS = "ACTION_SORT_CARDS"
export const ACTION_FETCH_CARDS = "ACTION_FETCH_CARDS"
export const ACTION_FETCH_TOGGLE = "ACTION_FETCH_TOGGLE"
export const ACTION_GET_CATS_COUNT = "ACTION_GET_CATS_COUNT"
export const ACTION_CHANGE_NAV_DISPLAY = "ACTION_CHANGE_NAV_DISPLAY"


export const changeNavDisplay = (status) => {
    return {
        type: ACTION_CHANGE_NAV_DISPLAY,
        payload: status
    }
}

export const getCatsCount = (count) => {
    return {
        type: ACTION_GET_CATS_COUNT,
        payload: count
    }
}

export const fetchToggle = (value) => {
    return {
        type: ACTION_FETCH_TOGGLE,
        payload: value
    }
}

export const fetchCards = (results) => {
    return {
        type: ACTION_FETCH_CARDS,
        payload: results
    }
}

export const toggleSortCards = (id, status) => {
    return {
        type: ACTION_SORT_CARDS,
        payload: {id, status}
    }
}

export const toggleIsFavourite = (id, status) => {
    return {
        type: ACTION_TOGGLE_FAVOURITE,
        payload: {id, status},
    }
}



export default fetchCards;


