import React from "react";
import "./Preloader.scss";

let Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
