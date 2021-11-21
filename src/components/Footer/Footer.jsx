import React from "react";
import { useDispatch } from "react-redux";
import { getInputValue } from "../../Redux/actions";
import { useSelector } from "react-redux";
import "./Footer.scss";

const Footer = () => {
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    dispatch(getInputValue(event.target.value));
  };

  const { emailValue } = useSelector((state) => state.mainPage);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__description">
            <h2 className="footer__title">Успей купить!</h2>
            <p className="footer__subtitle">
              Подпишись и успей словить все акции
            </p>
          </div>
          <form className="form">
            <div className="form__controls">
              <input
                className="form__input"
                type="email"
                placeholder="Email"
                required
                value={emailValue}
                onChange={inputHandler}
              />
              <button className="form__button button">Подписаться</button>
            </div>
            <label className="form__cheakbox-text">
              Подписаться на новости
              <input
                className="form__cheakbox-input"
                type="checkbox"
                required
              />
            </label>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
