import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Common/Layout';
import MainContainer from './components/Pages/MainPage/MainPageContainer';
import GalleryPage from './components/Pages/GalleryPage/GalleryPage'
import NewsPage from './components/Pages/NewsPage/NewsPage'
import ProfilePage from './components/Pages/ProfilePage/ProfilePage'
import NoFoundPage from './components/Pages/NoFoundPage/NoFoundPage';
import './App.scss';
import './assets/scss/reset.scss';
import './assets/scss/media.scss'

function App() {
  return (
    <Routes>
      <Route path="/react-spa" element={<Layout />}>
        <Route index element={<MainContainer />} />
        <Route path='/react-spa/gallery' element={<GalleryPage />} />
        <Route path='/react-spa/news' element={<NewsPage />} />
        <Route path='/react-spa/profile' element={<ProfilePage />} />
        <Route path="*" element={<NoFoundPage />} />
      </Route>
    </Routes>
  );
}



export default App;
