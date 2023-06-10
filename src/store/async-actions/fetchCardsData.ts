import { Dispatch } from 'redux';

import {
    fetchCards,
    fetchCardsDataToggle,
    setFetchCardsDataErrorMessage,
    setFetchCardsDataErrorStatus
} from '../actions/cardActions';

import { cardActionTypes, IactualData } from '../../types/cardTypes';

import image_placeholder from '../../assets/images/no_photo.png';

// /. Imports

const fetchCardsData = () => {
    const pageCount = Math.floor(Math.random() * 10);

    return async function (dispatch: Dispatch<cardActionTypes>) {
        try {
            const response = await fetch(
                `https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=${pageCount}`
            );

            if (!response.ok) {
                dispatch(
                    setFetchCardsDataErrorMessage(
                        'Error: There are some problems with response of breeds data'
                    )
                );
                console.error('There are some problems with response');
            }

            const data = await response.json();

            const actualData: IactualData[] = [];

            data.forEach((item: any) => {
                if (!item['image'] || !item.image) {
                    item.image = { url: image_placeholder };
                }
                // /. response validation

                actualData.push({
                    id: `${Math.random() + item.id}`,
                    image: item.image.url,
                    name: item.name,
                    location: item.origin,
                    paw: '4',
                    age: `${Math.floor(Math.random() * 12) + 1} mth.`,
                    price: +Math.floor(Math.random() * 10000), // random integer from 0 to 10 000
                    discount: `-${Math.floor(Math.random() * 60) + 10}%`, // random integer from 10 to 60
                    discountStatus: Boolean(Math.round(Math.random())),
                    cardStatus: Boolean(Math.round(Math.random())),
                    isFavourite: false
                });
            });

            dispatch(fetchCards(actualData));
        } catch (error: any) {
            dispatch(
                setFetchCardsDataErrorMessage(
                    `Error: ${error.message} breeds data.`
                )
            );
            dispatch(setFetchCardsDataErrorStatus(true));
            console.error(error.message);
        } finally {
            setTimeout(() => {
                dispatch(fetchCardsDataToggle(false));
            }, 500);
        }
    };
};

export default fetchCardsData;
