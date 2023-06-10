import React from 'react';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router';

import { useAppDispatch } from 'store/hooks';

import { changeMainPageStatus } from 'store/actions/headerActions';

import inProcessImage from 'assets/images/in_process.png';

// /. Imports

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // /. hooks

    const goHomePage = (): void => {
        dispatch(changeMainPageStatus(true));
        navigate('/Cats-Store', { replace: true });
    };

    // /. functions

    return (
        <div className="section">
            <article className="section__wrapper">
                <img
                    className="section__image"
                    src={inProcessImage}
                    alt="cat"
                />
                <h1 className="section__title">PROFILE PAGE IN PROCESS</h1>
                <p className="section__link">
                    return to home{' '}
                    <span>
                        <Link
                            to="/Cats-Store"
                            onClick={goHomePage}
                        >
                            page
                        </Link>
                    </span>
                </p>
            </article>
        </div>
    );
};

export default ProfilePage;
