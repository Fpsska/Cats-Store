export const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE"
export const ACTION_SORT_CARDS = "ACTION_SORT_CARDS"
// export const ACTION_GALLERY_DISPLAY = "ACTION_GALLERY_DISPLAY"

// export const changeGalleryDisplay = (newDisplay) => {      
//     return {
//         type: ACTION_GALLERY_DISPLAY,
//         payload: newDisplay
//     }
// }

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






