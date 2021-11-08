import { ACTION_CHANGE_SCROLL_STATUS , ACTION_CHANGE_NAV_DISPLAY, ACTION_GET_CATS_COUNT, ACTION_FETCH_TOGGLE, ACTION_FETCH_CARDS, ACTION_TOGGLE_FAVOURITE, ACTION_SORT_CARDS } from './actions'


const initialState = {
    cards: [],
    headerLinks: [
        {
            id: 1,
            text: "Main",
            link: ""
        },
        {
            id: 2,
            text: "Gallery",
            link: "page2"
        },
        {
            id: 3,
            text: "News",
            link: "page3"
        },
        {
            id: 4,
            text: "Profile",
            link: "page4"
        }
    ],
    sortButtons: [
        {
            text: "Цена",
            id: "price",
            sortProperty: "ASCENDING",
            isSorted: false
        },
        {
            text: "Возраст",
            id: "age",
            sortProperty: "ASCENDING",
            isSorted: false
        }
    ],
    catsCount: "",
    isFetching: false,
    isBurgerHidden: true,
    isBodyScrolling: true
}


const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TOGGLE_FAVOURITE:
            return {
                ...state,
                cards: state.cards.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            isFavourite: action.payload.status
                        }
                    }
                    return item
                })
            }
        case ACTION_SORT_CARDS:
            if (action.id === "price") {
                console.log("action ID: ", action.id, "//", "action PAYLOAD: ", action.payload);
                return {
                    ...state,
                    cards: [...state.cards.sort((a, b) => { return parseInt(a.price) - parseInt(b.price) })],
                    sortButtons: state.sortButtons.map(item => {
                        return {
                            ...item,
                            isSorted: action.payload.status
                        }
                    })
                }
            }
            else if (action.id === "age") {
                return {
                    ...state,
                    cards: [...state.cards.sort((a, b) => { return parseInt(a.age) - parseInt(b.age) })],
                }
            }
            break
        case ACTION_FETCH_CARDS:
            return {
                ...state,
                cards: [...state.cards.concat(action.payload)],
                catsCount: ""
            }
        case ACTION_FETCH_TOGGLE:
            return {
                ...state,
                isFetching: action.payload
            }
        case ACTION_GET_CATS_COUNT:
            return {
                ...state,
                catsCount: state.catsCount = action.payload
            }
        case ACTION_CHANGE_NAV_DISPLAY:
            return {
                ...state,
                isBurgerHidden: action.payload
            }
        case ACTION_CHANGE_SCROLL_STATUS:
            console.log("reducer PAYLOAD: ", action.payload);
            return {
                ...state,
                isBodyScrolling: action.payload
            }
        default:
            return state
    }
}







export default mainPageReducer;