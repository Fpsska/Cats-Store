import React, { useEffect } from 'react';

import { useAppDispatch } from 'store/hooks';

import { changeBurgerOpenedStatus } from 'store/actions/headerActions';

import NavList from 'components/NavLayout/NavList';

import './burger.scss';

// /. Imports

interface propTypes {
    headerLinks: any[];
    isBurgerOpen: boolean;
}

// /. interfaces

const Burger: React.FC<propTypes> = ({ headerLinks, isBurgerOpen }) => {
    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        const keyHandler = (e: KeyboardEvent): void => {
            if (isBurgerOpen && e.code === 'Escape') {
                dispatch(changeBurgerOpenedStatus(false));
            }
        };

        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('keydown', keyHandler);
        };
    }, [isBurgerOpen]);

    // /. effects

    return (
        <div className={isBurgerOpen ? 'burger active' : 'burger'}>
            <NavList
                headerLinks={headerLinks}
                role={'burger__nav'}
            />
        </div>
    );
};

export default Burger;
