export const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE"
export const ACTION_SCROLL_TOP = "ACTION_SCROLL_TOP"
export const ACTION_GALLERY_DISPLAY = "ACTION_GALLERY_DISPLAY"

export const changeGalleryDisplay = (newDisplay) => {  // action-creator
    return {
        type: ACTION_GALLERY_DISPLAY,
        payload: newDisplay
    }
}

export const scrollTop = (value) => {
    return {
        type: ACTION_SCROLL_TOP,
        payload: value
    }
}

export const toggleIsFavourite = (newValue, newID) => {
    return {
        type: ACTION_TOGGLE_FAVOURITE,
        payload: newValue,
        id: newID
    }
}






