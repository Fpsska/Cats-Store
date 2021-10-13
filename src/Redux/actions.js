const CHANGE_CARD_STATUS = "CHANGE_CARD_STATUS"
const ACTION_GALLERY_DISPLAY = "ACTION_GALLERY_DISPLAY"

const changeCardStatus = (value) => ({   // action-creator
    type: CHANGE_CARD_STATUS,
    payload: value
})

const changeGalleryDisplay = (value) => ({    // action-creator
    type: ACTION_GALLERY_DISPLAY,
    payload: value
})







