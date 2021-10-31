import { ACTION_FETCH_TOGGLE, ACTION_FETCH_CARDS, ACTION_TOGGLE_FAVOURITE, ACTION_SORT_CARDS } from './actions'


const initialState = {
    cards: [],
    visibleCards: [],
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
            id: "price",
            text: "Цена",
            sortProperty: "ASCENDING",
            isSorted: false
        },
        {
            id: "age",
            text: "Возраст",
            sortProperty: "ASCENDING",
            isSorted: false
        }
    ],
    catsCount: "",
    isFetching: true
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
            console.log("FETCH-STATUS: " , action.payload);
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}







export default mainPageReducer;