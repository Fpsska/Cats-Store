import React from "react";
import "./Card.scss";
import SvgTemplate from "../SvgTemplate";

const Card = (props) => {
  const setFavourite = () => {
    props.isFavourite
      ? props.toggleIsFavourite(false, props.id)
      : props.toggleIsFavourite(true, props.id);
  };

  return (
    <div className="card">
      <div className="card__preview">
        <div className="card__icons">
        <span className={props.discountStatus ? "card__icons_discount" : "card__icons_discount-none"}>{props.discount}</span>
        <button
          className={
            props.isFavourite ? "card__icons_button-active" : "card__icons_button"
          }
          onClick={setFavourite}
        >
          <span className="icon">
            <SvgTemplate id="heart" />
          </span>
        </button>
        </div>

        <img className="card__image" src={props.image} alt="cat" />
      </div>
      <div className="card__information">
        <p className="card__name">{props.name}</p>
        <ul className="card__description description">
          <li className="description__item description__item_color">
            {props.color}
          </li>
          <li className="description__item description__item_age">
            <span className="bold">{props.age}</span> <br /> Возраст
          </li>
          <li className="description__item description__item_paw">
            <span className="bold">{props.paw}</span> <br /> Кол-во лап
          </li>
        </ul>
        <p className="card__price">{props.price} руб.</p>
      </div>
      <button
        className={
          props.cardStatus ? "card__button button" : "card__button-sold button"
        }
      >
        {props.cardStatus ? "Купить" : "Продано"}
      </button>
    </div>
  );
};
// button card__button card__button-sold
export default Card;
