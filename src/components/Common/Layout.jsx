import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="page">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
