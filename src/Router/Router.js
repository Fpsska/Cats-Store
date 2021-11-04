import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App'
import GalleryPage from '../components/Pages/GalleryPage/Gallery'
import NewsPage from '../components/Pages/NewsPage/NewsPage'
import ProfilePage from '../components/Pages/ProfilePage/ProfilePage'
import NoFoundPage from '../components/Pages/NoFoundPage/NoFoundPage';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/react-spa' element={<App />} />
                <Route path='/react-spa/page2' element={<GalleryPage />} />
                <Route path='/react-spa/page3' element={<NewsPage />} />
                <Route path='/react-spa/page4' element={<ProfilePage />} />
                <Route path="*" element={<NoFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;