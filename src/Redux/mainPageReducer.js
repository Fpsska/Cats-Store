import { ACTION_GET_CATS_COUNT, ACTION_FETCH_TOGGLE, ACTION_FETCH_CARDS, ACTION_TOGGLE_FAVOURITE, ACTION_SORT_CARDS } from './actions'


const initialState = {
    cards: [],
    headerLinks: [
        {
            id: 1,
            text: "Main",
            link: "https://www.purina.ru/cats/getting-a-new-cat/finding-the-right-cat-for-me/the-most-beautiful-cats"
        },
        {
            id: 2,
            text: "Gallery",
            link: "https://www.purina.ru/cats/getting-a-new-cat/finding-the-right-cat-for-me/the-most-beautiful-cats"
        },
        {
            id: 3,
            text: "News",
            link: "https://www.purina.ru/cats/getting-a-new-cat/finding-the-right-cat-for-me/the-most-beautiful-cats"
        },
        {
            id: 4,
            text: "Profile",
            link: "https://www.purina.ru/cats/getting-a-new-cat/finding-the-right-cat-for-me/the-most-beautiful-cats"
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
}


const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TOGGLE_FAVOURITE:
            let stateCopy = { ...state }
            stateCopy.cards = [...state.cards];
            stateCopy.cards.forEach(item => {
                if (item.id === action.id) {
                    item.isFavourite = action.payload
                }
            })
            return stateCopy
        case ACTION_SORT_CARDS:
            if (action.id === "price") {
                return {
                    ...state,
                    cards: [...state.cards.sort((a, b) => { return parseInt(a.price) - parseInt(b.price) })],
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
        default:
            return state
    }
}







export default mainPageReducer;