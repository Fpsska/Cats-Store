import React, { useEffect } from 'react';

import { Outlet } from 'react-router';

import { useDispatch } from 'react-redux';

import { useAppSelector } from 'store/hooks';

import fetchCardsData from 'store/async-actions/fetchCardsData';
import fetchGifsData from 'store/async-actions/fetchGifsData';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import FormAlert from './Alert/FormAlert/FormAlert';

// /. Imports

const Layout: React.FC = () => {
    const { isFormAlertVisible } = useAppSelector(state => state.formReducer);

    const dispatch = useDispatch();

    // /. hooks

    useEffect(() => {
        dispatch(fetchCardsData());
        dispatch(fetchGifsData());
    }, []);

    // /. effects

    return (
        <div className="page">
            <>{isFormAlertVisible && <FormAlert />}</>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
