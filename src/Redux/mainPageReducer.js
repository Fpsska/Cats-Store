import { ACTION_TOGGLE_FAVOURITE, ACTION_SORT_CARDS, ACTION_FETCH_CARDS } from './actions'


const initialState = {
    cards: [

        // {
        //     id: 2,
        //     image: "https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        //     name: "Кот дымчатый",
        //     color: "Дымчатый окрас",
        //     paw: "4",
        //     age: "3 мес.",
        //     price: "22 000",
        //     discountStatus: false,
        //     isFavourite: false,
        //     cardStatus: true
        // },
        // {
        //     id: 3,
        //     image: "https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
        //     name: "Кот пушистый",
        //     color: "Коричневый окрас",
        //     paw: "4",
        //     age: "5 мес.",
        //     price: "35 000",
        //     discountStatus: false,
        //     isFavourite: false,
        //     cardStatus: false
        // },
        // {
        //     id: 4,
        //     image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        //     name: "Кот полосатый",
        //     color: "Дымчатый окрас",
        //     paw: "4",
        //     age: "1 мес.",
        //     price: "15 000",
        //     discountStatus: false,
        //     cardStatus: true
        // },
        // {
        //     id: 5,
        //     image: "https://images.unsplash.com/photo-1534330980656-d201223895ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        //     name: "Кот дымчатый",
        //     color: "Серый окрас",
        //     paw: "4",
        //     age: "2.5 мес.",
        //     price: "18 000",
        //     discount: "-50%",
        //     discountStatus: true,
        //     cardStatus: true
        // },
        // {
        //     id: 6,
        //     image: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        //     name: "Кот пушистый",
        //     color: "Белый окрас",
        //     paw: "4",
        //     age: "8 мес.",
        //     price: "26 000",
        //     discount: "free",
        //     discountStatus: true,
        //     cardStatus: false
        // },
        // {
        //     id: 7,
        //     image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        //     name: "Кот полосатый",
        //     color: "Дымчатый окрас",
        //     paw: "4",
        //     age: "6 мес.",
        //     price: "15 000",
        //     discountStatus: false,
        //     cardStatus: false
        // },
        // {
        //     id: 8,
        //     image: "https://images.unsplash.com/photo-1534330980656-d201223895ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        //     name: "Кот дымчатый",
        //     color: "Серый окрас",
        //     paw: "4",
        //     age: "9 мес.",
        //     price: "18 000",
        //     discount: "free",
        //     discountStatus: true,
        //     cardStatus: true
        // },
        // {
        //     id: 9,
        //     image: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        //     name: "Кот пушистый",
        //     color: "Белый окрас",
        //     paw: "4",
        //     age: "6 мес.",
        //     price: "26 000",
        //     discountStatus: false,
        //     cardStatus: true
        // }
    ],
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
                cards: [...state.cards.image = action.payload]
            }
        default:
            return state
    }
}







export default mainPageReducer;