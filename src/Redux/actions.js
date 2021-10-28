export const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE"
export const ACTION_SORT_CARDS = "ACTION_SORT_CARDS"
export const ACTION_FETCH_CARDS = "ACTION_FETCH_CARDS"
// export const ACTION_GALLERY_DISPLAY = "ACTION_GALLERY_DISPLAY"

// export const changeGalleryDisplay = (newDisplay) => {      
//     return {
//         type: ACTION_GALLERY_DISPLAY,
//         payload: newDisplay
//     }
// }
const fetchCards = (results) => {
    return {
        type: ACTION_FETCH_CARDS,
        payload: results
    }
}

export const toggleSortCards = (newID) => {
    return {
        type: ACTION_SORT_CARDS,
        id: newID
    }
}

export const toggleIsFavourite = (newValue, newID) => {
    return {
        type: ACTION_TOGGLE_FAVOURITE,
        payload: newValue,
        id: newID
    }
}



export default fetchCards;


