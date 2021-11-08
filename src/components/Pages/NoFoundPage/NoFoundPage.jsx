import React from "react";
import noFoundPage from "../../../assets/images/no_found.png";

const NoFoundPage = () => {
  return (
    <div className="page">
      <main>
        <div className="section">
          <img className="section__image" src={noFoundPage} alt="404 error" />
          <h1 className="section__title section__title-error">404</h1>
          <p className="section__subtitle">Sorry, your page no found.</p>
        </div>
      </main>
    </div>
  );
};

export default NoFoundPage;
