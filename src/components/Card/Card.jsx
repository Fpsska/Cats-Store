import React from "react";
import { useDispatch } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";
import { toggleIsFavourite } from "../../Redux/actions";
import "./Card.scss";

const Card = ({
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
  isLoadingImage,
}) => {
  const dispatch = useDispatch();

  const setFavourite = () => {
    isFavourite
      ? dispatch(toggleIsFavourite(id, false))
      : dispatch(toggleIsFavourite(id, true));
  };

  return (
    <div className="card">
      <div className="card__preview">
        <div className="card__icons">
          <span
            className={
              discountStatus
                ? "card__icons_discount"
                : "card__icons_discount-none"
            }
          >
            {discount}
          </span>
          <button
            className={
              isFavourite ? "card__icons_button-active" : "card__icons_button"
            }
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
            <span className="bold">{age}</span> <br /> Возраст
          </li>
          <li className="description__item description__item_paw">
            <span className="bold">{paw}</span> <br /> Кол-во лап
          </li>
        </ul>
        <p className="card__price">{price}</p>
      </div>
      <button
        className={
          cardStatus ? "card__button button" : "card__button-sold button"
        }
      >
        {cardStatus ? "Купить" : "Продано"}
      </button>
    </div>
  );
};
export default Card;
