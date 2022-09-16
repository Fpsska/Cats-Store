import React from 'react';

import './PagePreloader.scss';

// /. Imports

const PagePreloader: React.FC = () => {
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

export default PagePreloader;
