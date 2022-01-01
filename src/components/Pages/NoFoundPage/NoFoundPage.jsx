import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import noFoundPage from "../../../assets/images/no_found.png";
import { changePageStatus, fetchToggle } from "../../../Redux/actions";

const NoFoundPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const goHomePage = () => {
    dispatch(changePageStatus(true));
    navigate("/Cats-Store", { replace: true });
    dispatch(fetchToggle(false));
  };

  return (
    <>
      <div className="section">
        <img className="section__image" src={noFoundPage} alt="404 error" />
        <h1 className="section__title section__title-error">404</h1>
        <p className="section__link">
          Sorry, this page doesn't exist, return to home{" "}
          <span>
            <Link to="/Cats-Store" onClick={goHomePage}>
              page
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default NoFoundPage;
