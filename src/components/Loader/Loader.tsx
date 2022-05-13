import React from "react";
import "./Loader.scss";

const Loader: React.FC = () => {
    return (
        <h1 className="loader">
            Loading
            <span className="loader__dot"></span>
            <span className="loader__dot"></span>
            <span className="loader__dot"></span>
        </h1>
    )
}

export default Loader;