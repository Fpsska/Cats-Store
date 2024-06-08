import { Dispatch } from 'redux';

import {
    setGifData,
    fetchGifDataToggle,
    setGifDataErrorStatus,
    setFetchGifDataErrorMessage
} from 'store/actions/cardActions';
import { IgifData, cardActionTypes } from 'types/cardTypes';

// /. Imports

const fetchGifsData = () => {
    return async function (dispatch: Dispatch<cardActionTypes>) {
        try {
            const response = await fetch(
                'https://api.thecatapi.com/v1/images/search?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=8&size=full&mime_types=gif'
            );

            if (!response.ok) {
                dispatch(
                    setFetchGifDataErrorMessage(
                        'Error: There are some problems with response of gifs data'
                    )
                );
                console.error('There are some problems with response');
            }

            const data = await response.json();

            const actualData: IgifData[] = [];

            data.forEach((item: any) => {
                actualData.push({
                    id: `${Math.random() + item.id}`,
                    image: item.url
                });
            });

            dispatch(setGifData(actualData));
        } catch (error: any) {
            dispatch(
                setFetchGifDataErrorMessage(
                    `Error: ${error.message} gifs data.`
                )
            );
            dispatch(setGifDataErrorStatus(true));
            console.error(error.message);
        } finally {
            setTimeout(() => {
                dispatch(fetchGifDataToggle(false));
            }, 500);
        }
    };
};

export default fetchGifsData;
