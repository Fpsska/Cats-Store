import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import inProcessImage from "../../../assets/images/in_process.png";
import { useDispatch } from "react-redux";
import { changePageStatus, fetchToggle } from "../../../Redux/actions";

const NewsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const goHomePage = () => {
    dispatch(changePageStatus(true));
    navigate("/Cats-Store", { replace: true });
    dispatch(fetchToggle(false))
  };
  return (
    <>
      <div className="section">
        <img className="section__image" src={inProcessImage} alt="cat" />
        <h1 className="section__title">NEWS PAGE IN PROCESS</h1>
        <p className="section__link">
          return to home{" "}
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

export default NewsPage;
