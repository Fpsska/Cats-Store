import { fetchCards, fetchCardsDataToggle, setFetchCardsDataErrorMessage, setFetchCardsDataErrorStatus } from "../Actions/cardActions";
import url from "../../assets/images/no_photo.png";
import { cardActionTypes, actualDataTypes } from "../../Types/cardTypes";


const fetchCardsData = () => {
    const pageCount = Math.floor(Math.random() * 10)
    return async function (dispatch: (arg0: cardActionTypes) => void) {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=${pageCount}`)
            const data = await response.json()

            if (response) {
                setTimeout(() => {
                    dispatch(fetchCardsDataToggle(false))
                }, 600)
            }

            const responseData: any[] = data
            const actualData: actualDataTypes[] = []

            responseData.forEach(item => {
                if (item["image"] === undefined) {
                    const wrongItem = item
                    wrongItem.image = { url }
                }
                if (Object.keys(item.image).length === 0 && item.image.constructor === Object) {
                    const wrongItem = item
                    wrongItem.image = { url }
                }
                // /. response validation
                actualData.push(
                    {
                        id: `${Math.random() + item.id}`,
                        image: item.image.url,
                        name: item.name,
                        location: item.origin,
                        paw: "4",
                        age: `${Math.floor(Math.random() * 12) + 1} mth.`,
                        price: +Math.floor(Math.random() * 10000), // max 10000
                        discount: `-${Math.floor(Math.random() * 60) + 10}%`,
                        discountStatus: Boolean(Math.round(Math.random())),
                        cardStatus: Boolean(Math.round(Math.random())),
                        isFavourite: false
                    }
                )
            })
            dispatch(fetchCards(actualData))
        } catch (error: any) {
            dispatch(setFetchCardsDataErrorMessage(`There are some problems with response: ${error.message}.`))
            setTimeout(() => {
                dispatch(fetchCardsDataToggle(false))
                dispatch(setFetchCardsDataErrorStatus(true))
            }, 600);
        }
    }
}

export default fetchCardsData;

