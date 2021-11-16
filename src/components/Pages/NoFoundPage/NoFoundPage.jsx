import React from "react";
import { Link } from "react-router-dom";
import noFoundPage from "../../../assets/images/no_found.png";

const NoFoundPage = () => {
  return (
    <>
      <div className="section">
        <img className="section__image" src={noFoundPage} alt="404 error" />
        <h1 className="section__title section__title-error">404</h1>
        <p className="section__link">
          Sorry, this page doesn't exist, return to home{" "}
          <span>
            <Link to="/react-spa">page</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default NoFoundPage;
