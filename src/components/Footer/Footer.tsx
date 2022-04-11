import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInputValue } from "../../Redux/Actions/headerActions";
import { setFormAlertVisibleStatus } from "../../Redux/Actions/formActions";
import { RootState } from "../../Redux/store";
import "./Footer.scss";


const Footer: React.FC = () => {
  const { emailValue } = useSelector(
    (state: RootState) => state.headerReducer
  );
  const { isFormAlertVisible } = useSelector(
    (state: RootState) => state.formReducer
  );
  // const [unavailable, setUnavailableStatus] = useState<boolean>(false)
  // const unavailable = useRef<boolean>(false)
  const form = useRef<HTMLFormElement>(null)
  const dispatch = useDispatch();
  // 
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(getInputValue(event.target.value));
  };

  const onFormSubmit = (e: any): void => {
    e.preventDefault();
    dispatch(setFormAlertVisibleStatus(!isFormAlertVisible))
  }

  // useEffect(() => {
  //   console.log(unavailable)
  // }, [unavailable])

  useEffect(() => {
    if (!isFormAlertVisible) {
      form.current?.reset()
      dispatch(getInputValue(""))
      // unavailable.current = true
      // setUnavailableStatus(true)
    }
  }, [isFormAlertVisible])

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
          <form ref={form} className="form" onSubmit={onFormSubmit}>
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
