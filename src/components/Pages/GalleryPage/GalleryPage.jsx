import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import inProcessImage from "../../../assets/images/in_process.png";
import { changePageStatus } from "../../../Redux/actions";

const GalleryPage = () => {
  const dispatch = useDispatch();

  const goHomePage = () => {
    dispatch(changePageStatus(true));
  };

  return (
    <div className="section">
      <img className="section__image" src={inProcessImage} alt="cat" />
      <h1 className="section__title">GALLERY PAGE IN PROCESS</h1>
      <p className="section__link">
        return to home{" "}
        <span>
          <Link to="/Cats-Store" onClick={goHomePage}>
            page
          </Link>
        </span>
      </p>
    </div>
  );
};

export default GalleryPage;
