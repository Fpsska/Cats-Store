import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import SvgTemplate from '../Common/SvgTemplate';
import { setFavouriteStatus, setLikedCardsData, setFilteredCardsData } from '../../store/actions/cardActions';
import './Card.scss';

// /. Imports

interface CardProps {
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
}

// /. interfaces

const Card: React.FC<CardProps> = ({
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
  currentRangeValue
}) => {
  const buttonLike = useRef<HTMLButtonElement>(null!);
  const dispatch = useDispatch();
  // 
  const setFavourite = (): void => {
    isFavourite
      ? dispatch(setFavouriteStatus(id, false))
      : dispatch(setFavouriteStatus(id, true));
    dispatch(setLikedCardsData(isFavourite)); // filter cards for likedCardsData
    dispatch(setFilteredCardsData(currentRangeValue)); // update filteredCardsData
  };
  // 

  useEffect(() => {
    buttonLike.current.classList.remove('unlike');
  }, []);
  // 
  return (
    <div className="card">
      <div className="card__preview">
        <div className="card__icons">
          <span
            className={
              discountStatus
                ? 'card__icons_discount'
                : 'card__icons_discount-none'
            }
          >
            {discount}
          </span>
          <button
            ref={buttonLike}
            className={isFavourite ? 'card__icons_button like' : 'card__icons_button unlike'}
            disabled={cardStatus ? false : true}
            onClick={setFavourite}
          >
            <span className="icon">
              <SvgTemplate id="heart" />
            </span>
          </button>
        </div>
        <img className="card__image" src={image} alt="cat" />
      </div>
      <div className="card__information">
        <p className="card__name">{name}</p>
        <ul className="card__description description">
          <li className="description__item description__item_color">
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
        <p className="card__price">{`${price} USD`}</p>
      </div>
      <button
        className={
          cardStatus ? 'card__button button' : 'card__button-sold button'
        }
      >
        {cardStatus ? 'Buy' : 'Sold'}
      </button>
    </div>
  );
};
export default Card;
