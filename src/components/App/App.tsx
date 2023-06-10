import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Common/Layout';
import MainPage from 'components/Pages/MainPage/MainPage';
import FavouritePage from 'components/Pages/FavouritePage/FavouritePage';
import OverviewPage from 'components/Pages/OverviewPage/OverviewPage';
import ProfilePage from 'components/Pages/ProfilePage/ProfilePage';
import NoFoundPage from 'components/Pages/NoFoundPage/NoFoundPage';

import './App.css';
import 'assets/styles/_style.scss';
import 'assets/styles/_media.scss';

// /. Imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/Cats-Store"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<MainPage />}
                    />
                    <Route
                        path="Favourite"
                        element={<FavouritePage />}
                    />
                    <Route
                        path="Live"
                        element={<OverviewPage />}
                    />
                    <Route
                        path="Profile"
                        element={<ProfilePage />}
                    />
                    <Route
                        path="*"
                        element={<NoFoundPage />}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
