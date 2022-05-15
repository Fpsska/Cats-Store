import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FormAlert from "./Alert/FormAlert/FormAlert";
import fetchCardsData from "../../store/middleware/fetchCardsData";
import fetchGifData from "../../store/middleware/fetchGifData";
import { RootState } from "../../store/store";

const Layout: React.FC = () => {
  const { isFormAlertVisible } = useSelector((state: RootState) => state.formReducer)
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
