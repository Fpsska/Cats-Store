import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getInputValue } from '../../store/actions/headerActions';
import { setFormAlertVisibleStatus, setFormSubmitStatus } from '../../store/actions/formActions';
import { RootState } from '../../store/store';
import './Footer.scss';

// /. Imports

const Footer: React.FC = () => {
  const { emailValue } = useSelector((state: RootState) => state.headerReducer);
  const { isFormAlertVisible, isFormSubmitted } = useSelector((state: RootState) => state.formReducer);

  const [unavailable, setUnavailableStatus] = useState<boolean>(false);


  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();


  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setFormAlertVisibleStatus(true));
    dispatch(setFormSubmitStatus(true));
  };

  useEffect(() => {
    if (isFormSubmitted && !isFormAlertVisible) {
      formRef.current?.reset();
      dispatch(getInputValue(''));
      setUnavailableStatus(true);
      setTimeout(() => {
        setUnavailableStatus(false);
      }, 10000);
    }
  }, [isFormAlertVisible, isFormSubmitted]);
  // 
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
              <button className="form__button button" disabled={unavailable}>Subscribe</button>
            </div>
            <label className="form__cheakbox-label">
              Subscribe to news
              <input
                className="form__cheakbox-input"
                type="checkbox"
                disabled={unavailable}
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
