import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App'
import GalleryPage from '../components/Pages/GalleryPage/GalleryPage'
import NewsPage from '../components/Pages/NewsPage/NewsPage'
import ProfilePage from '../components/Pages/ProfilePage/ProfilePage'
import NoFoundPage from '../components/Pages/NoFoundPage/NoFoundPage';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/react-spa' element={<App />} />
                <Route path='/react-spa/gallery' element={<GalleryPage />} />
                <Route path='/react-spa/news' element={<NewsPage />} />
                <Route path='/react-spa/profile' element={<ProfilePage />} />
                <Route path="*" element={<NoFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;