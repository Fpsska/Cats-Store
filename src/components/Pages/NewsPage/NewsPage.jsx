import React from "react";
import { Link } from "react-router-dom";
import inProcessImage from "../../../assets/images/in_process.png";

const NewsPage = () => {
  return (
    <div className="page">
      <main>
        <div className="section">
          <img className="section__image" src={inProcessImage} alt="cat" />
          <h1 className="section__title">NEWS PAGE IN PROCESS</h1>
          <p className="section__link">return to home <span><Link to="/">page</Link></span></p>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
