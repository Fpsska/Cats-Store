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
    <div className='App'>
      <Routes>
        <Route path="/Cats-Store" element={<Layout />}>
          <Route index element={<MainContainer />} />
          <Route path='Gallery' element={<GalleryPage />} />
          <Route path='News' element={<NewsPage />} />
          <Route path='Profile' element={<ProfilePage />} />
          <Route path="*" element={<NoFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
