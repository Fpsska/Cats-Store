import { setGifData, fetchGifDataToggle, setGifDataErrorStatus, setFetchGifDataErrorMessage } from "../Actions/cardActions";
import { cardActionTypes, gifDataTypes } from "../../Types/cardTypes";

const fetchGifData = () => {
    return async function (dispatch: (arg0: cardActionTypes) => void) {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=8&size=full&mime_types=gif`)
            const data = await response.json()

            if (response) {
                setTimeout(() => {
                    dispatch(fetchGifDataToggle(false))
                }, 500)
            }

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
            dispatch(setFetchGifDataErrorMessage(`There are some problems with response: ${error.message}.`))
            setTimeout(() => {
                dispatch(fetchGifDataToggle(false))
                dispatch(setGifDataErrorStatus(true))
            }, 600);
        }
    }
}

export default fetchGifData;

