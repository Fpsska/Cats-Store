import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { getInputValue } from '../../store/actions/headerActions';
import { setFormAlertVisibleStatus, setFormSubmitStatus } from '../../store/actions/formActions';

import './Footer.scss';

// /. Imports

const Footer: React.FC = () => {
  const { emailValue } = useAppSelector(state => state.headerReducer);
  const { isFormAlertVisible, isFormSubmitted } = useAppSelector(state => state.formReducer);

  const [unavailable, setUnavailableStatus] = useState<boolean>(false);


  const formRef = useRef<HTMLFormElement>(null!);

  const dispatch = useAppDispatch();


  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(setFormAlertVisibleStatus(true));
    dispatch(setFormSubmitStatus(true));
  };

  useEffect(() => {
    if (isFormSubmitted && !isFormAlertVisible) {
      formRef.current.reset();
      dispatch(getInputValue(''));
      setUnavailableStatus(true);
      setTimeout(() => {
        setUnavailableStatus(false);
      }, 10000);
    }
  }, [isFormAlertVisible, isFormSubmitted]);


  return (
    <footer className="footer">
      <div className="container">
        <section className="footer__wrapper">
          <article className="footer__description">
            <h2 className="footer__title">Hurry up to buy!</h2>
            <p className="footer__subtitle">
              Subscribe and catch all the promotions
            </p>
          </article>
          <form ref={formRef} className="form" onSubmit={e => onFormSubmit(e)}>
            <div className="form__controls">
              <input
                className="form__input"
                type="email"
                placeholder="Email"
                disabled={unavailable}
                required
                value={emailValue}
                onChange={(e) => dispatch(getInputValue(e.target.value))}
              />
              <button className="form__button button" type="submit" disabled={unavailable}>Subscribe</button>
            </div>
            <label className="form__cheakbox-label">
              Subscribe to news
              <input
                className="form__cheakbox-input"
                type="checkbox"
                disabled={unavailable}
                required
              />
              <span className="form__cheakbox-fake"></span>
            </label>
          </form>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
