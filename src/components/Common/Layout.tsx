import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FormAlert from "./Alert/FormAlert/FormAlert";
import fetchCardsData from "../../Redux/Middleware/fetchCardsData";
import fetchGifData from "../../Redux/Middleware/fetchGifData";
import { RootState } from "../../Redux/store";

const Layout: React.FC = () => {
  const { isFormAlertVisible } = useSelector((state: RootState) => state.headerReducer)
  const dispatch = useDispatch()
  // 
  useEffect(() => {
    dispatch(fetchCardsData())
    dispatch(fetchGifData())
  }, [])
  // 
  return (
    <div className="page">
      <>
        {isFormAlertVisible ?
          <FormAlert />
          :
          <></>
        }
      </>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
