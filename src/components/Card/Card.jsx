import React from 'react';

const Card = () => {
    return (
            <div className="card">
                <div className="card__preview">
                    <div className="discount">
                        <span className="discount__percent">-40%</span>
                    </div>
                    <button className="discount__button"></button>
                    <img className="card__image" src="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80" alt="cat" />
                </div>
                <div className="card__information">
                    <p className="card__name">Кот полосатый</p>
                <ul className="card__description description">
                    <li className="description__item description__item_color">Коричневый <br /> окрас</li>
                    <li className="description__item description__item_age"><span className="bold">2 мес. </span> <br /> Возраст</li>
                    <li className="description__item description__item_paw"><span className="bold">4</span> <br />  Кол-во лап</li>
                </ul>
                <p className="card__price">30 000 руб.</p>
                </div>
                <button className="card__button button">Купить</button>
            </div>            
    )
}

export default Card;