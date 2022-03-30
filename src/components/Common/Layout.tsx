import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import requestHandler from "../../Redux/Middleware/request";

const Layout: React.FC = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(requestHandler())
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
