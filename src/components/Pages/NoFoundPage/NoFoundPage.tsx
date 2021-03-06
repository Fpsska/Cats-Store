import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { changeMainPageStatus } from '../../../store/actions/headerActions';
import noFoundPage from '../../../assets/images/no_found.png';

// /. Imports

const NoFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const goHomePage = (): void => {
    dispatch(changeMainPageStatus(true));
    navigate('/Cats-Store', { replace: true });
  };

  return (
    <>
      <div className="section">
        <div className="section__wrapper">
          <img className="section__image" src={noFoundPage} alt="404 error" />
          <h1 className="section__title section__title-error">404</h1>
          <p className="section__link">
            Sorry, this page doesn't exist, return to home{' '}
            <span>
              <Link to="/Cats-Store" onClick={goHomePage}>
                page
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NoFoundPage;
