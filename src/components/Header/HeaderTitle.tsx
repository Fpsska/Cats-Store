import React from 'react';

// /. Imports

interface propTypes {
    children: string;
}

// /. interfaces

const HeaderTitle: React.FC<propTypes> = ({ children }) => {
    return <h1 className="header__title">{children}</h1>;
};

export default HeaderTitle;
