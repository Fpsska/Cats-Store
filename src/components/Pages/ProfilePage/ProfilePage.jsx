import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import inProcessImage from "../../../assets/images/in_process.png";
import { changePageStatus } from "../../../Redux/actions";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 
  const goHomePage = () => {
    dispatch(changePageStatus(true));
    navigate("/Cats-Store", { replace: true });
  };
  return (
    <>
      <div className="section">
        <img className="section__image" src={inProcessImage} alt="cat" />
        <h1 className="section__title">PROFILE PAGE IN PROCESS</h1>
        <p className="section__link">
          return to home{" "}
          <span>
            <Link to="/Cats-Store">page</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default ProfilePage;
