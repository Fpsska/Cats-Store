import { setGifData, setFetchCardsDataErrorMessage } from "../Actions/cardActions";
import { cardActionTypes, gifDataTypes } from "../../Types/cardType";

const fetchGifData = () => {
    return async function (dispatch: (arg0: cardActionTypes) => void) {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=8&size=full&mime_types=gif`)
            const data = await response.json()
            console.log(data)

            // setTimeout(() => {
            //     dispatch(fetchToggle(false))
            // }, 900) 

            // make private fetching toggle logic!!!!

            const responseData: any[] = data
            const actualData: gifDataTypes[] = []

            responseData.forEach(item => {
                actualData.push(
                    {
                        id: `${Math.random() + item.id}`,
                        image: item.url,
                    }
                )
            })
            dispatch(setGifData(actualData))
        } catch (error: any) {
            dispatch(setFetchCardsDataErrorMessage(`There are some problems with response: ${error.message}.`))
            setTimeout(() => {
                // dispatch(fetchToggle(false))
                // dispatch(setFetchErrorStatus(true))
            }, 600);
        }
    }
}

export default fetchGifData;

