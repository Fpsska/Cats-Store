import React, { useEffect } from 'react';

import { Outlet } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import fetchCardsData from '../../store/async-actions/fetchCardsData';
import fetchGifData from '../../store/async-actions/fetchGifData';

import FormAlert from './Alert/FormAlert/FormAlert';

// /. Imports

const Layout: React.FC = () => {
  const { isFormAlertVisible } = useAppSelector(state => state.formReducer);

  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchCardsData());
    dispatch(fetchGifData());
  }, []);

  return (
    <div className="page">
      <>
        {isFormAlertVisible && <FormAlert />}
      </>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
