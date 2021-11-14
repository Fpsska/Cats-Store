import { ACTION_CHANGE_SCROLL_STATUS, ACTION_CHANGE_NAV_DISPLAY, ACTION_GET_CATS_COUNT, ACTION_FETCH_TOGGLE, ACTION_FETCH_CARDS, ACTION_TOGGLE_FAVOURITE, ACTION_SORT_CARDS } from './actions'

const initialState = {
    cards: [],
    headerLinks: [
        {
            id: 1,
            text: "Main",
            link: "/react-spa"
        },
        {
            id: 2,
            text: "Gallery",
            link: "/gallery"
        },
        {
            id: 3,
            text: "News",
            link: "/news"
        },
        {
            id: 4,
            text: "Profile",
            link: "/profile"
        }
    ],
    sortButtons: [
        {
            text: "Цена",
            id: "price",
            isSorted: false
        },
        {
            text: "Возраст",
            id: "age",
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
            if (action.payload.id === "price" && action.payload.status === false) {
                return {
                    ...state,
                    cards: [...state.cards.sort((a, b) => { return parseInt(b.price) - parseInt(a.price) })],
                    sortButtons: state.sortButtons.map(item => {
                        return {
                            ...item,
                            isSorted: action.payload.status,
                        }
                    })
                }
            } 
            else if (action.payload.id === "price" && action.payload.status === true) {
                return {
                    ...state,
                    cards: [...state.cards.sort((a, b) => { return parseInt(a.price) - parseInt(b.price) })],
                }
            }
            // /. price sort
            else if (action.payload.id === "age" && action.payload.status === false) {
                return {
                    ...state,
                    cards: [...state.cards.sort((a, b) => { return parseInt(b.age) - parseInt(a.age) })],
                    sortButtons: state.sortButtons.map(item => {
                        return {
                            ...item,
                            isSorted: action.payload.status,
                        }
                    })
                }
            }
            else if (action.payload.id === "age" && action.payload.status === true) {
                return {
                    ...state,
                    cards: [...state.cards.sort((a, b) => { return parseInt(a.age) - parseInt(b.age) })],
                }
            }
            // /. age sort
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
            return {
                ...state,
                isBodyScrolling: action.payload
            }
        default:
            return state
    }
}







export default mainPageReducer;