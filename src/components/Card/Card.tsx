import React, { useEffect, useRef } from 'react';

import { BsHeartFill } from 'react-icons/bs';

import { useAppDispatch } from '../../store/hooks';

import {
    setFavouriteStatus,
    setLikedCardsData
} from '../../store/actions/cardActions';

import image_placeholder from '../../assets/images/no_photo.png';

import './Card.scss';

// /. Imports

interface propTypes {
    id: string;
    image: string;
    name: string;
    location: string;
    age: string;
    paw: string;
    price: number;
    discount: string;
    isFavourite: boolean;
    cardStatus: boolean;
    discountStatus: boolean;
    currentRangeValue: number;
    role?: string;
}

// /. interfaces

const Card: React.FC<propTypes> = props => {
    const {
        id,
        image,
        name,
        location,
        age,
        paw,
        price,
        discount,
        isFavourite,
        cardStatus,
        discountStatus,
        role
    } = props;

    const buttonLikeRef = useRef<HTMLButtonElement>(null!);

    const dispatch = useAppDispatch();

    const addToFavourite = (): void => {
        isFavourite
            ? dispatch(setFavouriteStatus(id, false))
            : dispatch(setFavouriteStatus(id, true));

        dispatch(setLikedCardsData()); // update likedCardsData[]
    };

    useEffect(() => {
        buttonLikeRef.current.classList.remove('unlike');
    }, []);

    return (
        <article className={role ? `${role} card` : 'card'}>
            <div className="card__preview">
                <div className="card__icons">
                    {discountStatus && (
                        <span className="card__icons_discount">{discount}</span>
                    )}
                    <button
                        className={
                            isFavourite
                                ? 'card__icons_button like'
                                : 'card__icons_button unlike'
                        }
                        ref={buttonLikeRef}
                        disabled={!cardStatus}
                        onClick={addToFavourite}
                        aria-label="add to favourite"
                    >
                        <BsHeartFill
                            color={'#fff'}
                            size={'42px'}
                        />
                    </button>
                </div>
                <img
                    className="card__image"
                    src={image}
                    alt="cat"
                    onError={e => {
                        (e.target as HTMLImageElement).src = image_placeholder;
                        (e.target as HTMLImageElement).onerror = null;
                    }}
                />
            </div>
            <div className="card__information">
                <h3 className="card__name">{name}</h3>
                <ul className="card__description description">
                    <li className="description__item description__item_location">
                        Location: <br />
                        <strong>{location}</strong>
                    </li>
                    <li className="description__item description__item_age">
                        <span className="bold">{age}</span> <br /> Age
                    </li>
                    <li className="description__item description__item_paw">
                        <span className="bold">{paw}</span> <br /> Paws count
                    </li>
                </ul>
                <span className="card__price">{`${price} USD`}</span>
            </div>
            <button
                className={
                    cardStatus
                        ? 'card__button button'
                        : 'card__button-sold button'
                }
            >
                {cardStatus ? 'Buy' : 'Sold'}
            </button>
        </article>
    );
};
export default Card;
