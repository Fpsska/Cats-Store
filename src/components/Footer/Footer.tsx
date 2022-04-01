import React from "react";
import { useDispatch } from "react-redux";
import { getInputValue } from "../../Redux/Actions/headerActions";
import { useSelector } from "react-redux";
import "./Footer.scss";
import { RootState } from "../../Redux/store";

const Footer: React.FC = () => {
  const { emailValue } = useSelector(
    (state: RootState) => state.headerReducer
  );
  const dispatch = useDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(getInputValue(event.target.value));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__description">
            <h2 className="footer__title">Hurry up to buy!</h2>
            <p className="footer__subtitle">
              Subscribe and catch all the promotions
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
              <button className="form__button button">Subscribe</button>
            </div>
            <label className="form__cheakbox-text">
              Subscribe to news
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
