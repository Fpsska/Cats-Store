import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import fetchCardsData from "../../Redux/Middleware/fetchCardsData";

const Layout: React.FC = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCardsData())
  }, [])
  // 
  return (
    <div className="page">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
