import React from "react";
import inProcessImage from "../../../assets/images/in_process.png"


const GalleryPage = () => {
  return (
    <>
      <main>
        <div className="section">
        <img className="section__image" src={inProcessImage} alt="cat" />
          <h1 className="section__title">GALLERY PAGE IN PROCESS</h1>
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
