import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import { changeBurgerVisibleStatus } from 'store/actions/headerActions';

import Burger from 'components/Burger/Burger';

import NavList from './NavList';

// /. Imports

const NavLayout: React.FC = () => {
    const { headerLinks, isBurgerOpen } = useAppSelector(
        state => state.headerReducer
    );

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [breakpoint] = useState<number>(800);

    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        const windowReizeHandler = (): void => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', windowReizeHandler);
        return () => {
            window.removeEventListener('resize', windowReizeHandler);
        };
    }, []);

    useEffect(() => {
        width <= breakpoint
            ? dispatch(changeBurgerVisibleStatus(false))
            : dispatch(changeBurgerVisibleStatus(true));
    }, [width, breakpoint]);

    // /. effects

    return (
        <>
            {width <= breakpoint ? (
                <Burger
                    headerLinks={headerLinks}
                    isBurgerOpen={isBurgerOpen}
                />
            ) : (
                <NavList
                    headerLinks={headerLinks}
                    role={'header__nav'}
                />
            )}
        </>
    );
};

export default NavLayout;
