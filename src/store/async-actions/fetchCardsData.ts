import { Dispatch } from 'redux';

import {
    fetchCards,
    fetchCardsDataToggle,
    setFetchCardsDataErrorMessage,
    setFetchCardsDataErrorStatus
} from '../actions/cardActions';

import { cardActionTypes, actualDataTypes } from '../../Types/cardTypes';

import image_placeholder from '../../assets/images/no_photo.png';


// /. Imports

const fetchCardsData = () => {
    const pageCount = Math.floor(Math.random() * 10);

    return async function (dispatch: Dispatch<cardActionTypes>) {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=${pageCount}`);

            if (!response.ok) {
                dispatch(setFetchCardsDataErrorMessage('Error: There are some problems with response of breeds data'));
                console.error('There are some problems with response');
            }

            const data = await response.json();

            const actualData: actualDataTypes[] = [];

            data.forEach((item: any) => {

                if (!item['image']) {
                    item.image = { url: image_placeholder };
                }
                // /. response validation

                actualData.push(
                    {
                        id: `${Math.random() + item.id}`,
                        image: item.image.url, 
                        name: item.name,
                        location: item.origin,
                        paw: '4',
                        age: `${Math.floor(Math.random() * 12) + 1} mth.`,
                        price: +Math.floor(Math.random() * 10000), // max 10000
                        discount: `-${Math.floor(Math.random() * 60) + 10}%`,
                        discountStatus: Boolean(Math.round(Math.random())),
                        cardStatus: Boolean(Math.round(Math.random())),
                        isFavourite: false
                    }
                );
            });

            dispatch(fetchCards(actualData));

        } catch (error: any) {
            dispatch(setFetchCardsDataErrorMessage(`Error: ${error.message} breeds data.`));
            dispatch(setFetchCardsDataErrorStatus(true));
            console.error(error.message);
        } finally {
            setTimeout(() => {
                dispatch(fetchCardsDataToggle(false));
            }, 2600);
        }
    };
};

export default fetchCardsData;

