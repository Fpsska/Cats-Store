import { React } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainContainer from './components/Pages/MainPage/MainPageContainer';
import MainPage from './components/Pages/MainPage/MainPage';
import GalleryPage from './components/Pages/GalleryPage/GalleryPage'
import NewsPage from './components/Pages/NewsPage/NewsPage'
import ProfilePage from './components/Pages/ProfilePage/ProfilePage'
import NoFoundPage from './components/Pages/NoFoundPage/NoFoundPage';
import './App.scss';
import './assets/scss/reset.scss';
import './assets/scss/media.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/react-spa" element={<MainContainer />} />
        <Route path="/react-spa" element={<MainPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
