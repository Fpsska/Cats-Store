import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Common/Layout";
import MainPage from "../Pages/MainPage/MainPage";
import FavouritePage from "../Pages/FavouritePage/FavouritePage";
import OverviewPage from "../Pages/OverviewPage/OverviewPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import NoFoundPage from "../Pages/NoFoundPage/NoFoundPage";
import "../../assets/scss/reset.scss";
import "../../assets/scss/media.scss";
import "./App.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/Cats-Store" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="Favourite" element={<FavouritePage />} />
          <Route path="Live" element={<OverviewPage />} />
          <Route path="Profile" element={<ProfilePage />} />
          <Route path="*" element={<NoFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
