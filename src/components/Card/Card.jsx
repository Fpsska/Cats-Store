import React from 'react';
import './Card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__preview">
                <div className="discount">
                    <span className="discount__percent">{props.discount}</span>
                </div>
                <button className="discount__button"></button>
                <img className="card__image" src={props.image} alt="cat" />
            </div>
            <div className="card__information">
                <p className="card__name">{props.name}</p>
            <ul className="card__description description">
                <li className="description__item description__item_color">{props.color}</li>
                <li className="description__item description__item_age"><span className="bold">{props.age} </span> <br /> Возраст</li>
                <li className="description__item description__item_paw"><span className="bold">{props.paw}</span> <br />  Кол-во лап</li>
            </ul>
            <p className="card__price">{props.price} руб.</p>
            </div>
            <button className="card__button button">Купить</button>
        </div>            
)
}



export default Card;