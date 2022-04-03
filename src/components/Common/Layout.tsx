import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import fetchCardsData from "../../Redux/Middleware/fetchCardsData";
import fetchGifData from "../../Redux/Middleware/fetchGifData";

const Layout: React.FC = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCardsData())
    dispatch(fetchGifData())
  }, [])
  // 
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
