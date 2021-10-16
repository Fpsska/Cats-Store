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
        <div className="discount">
          <span className="discount__percent">{props.discount}</span>
        </div>
        <button
          className={
            props.isFavourite ? "discount__button-active" : "discount__button"
          }
          onClick={setFavourite}
        >
          <span className="icon">
            <SvgTemplate id="heart" />
          </span>
        </button>
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
      <button className="card__button button">Купить</button>
    </div>
  );
};

export default Card;
