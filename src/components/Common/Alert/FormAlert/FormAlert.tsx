import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFormAlertVisibleStatus } from '../../../../store/actions/formActions';
import SvgTemplate from '../../SvgTemplate';
import './FormAlert.scss';

// /. Imports

const FormAlert: React.FC = () => {
    const dispatch = useDispatch();
    // 
    const submitAlert = (): void => {
        dispatch(setFormAlertVisibleStatus(false));
    };

    const keyHandler = (e: KeyboardEvent): void => {
        if (e.code === 'Escape') {
            dispatch(setFormAlertVisibleStatus(false));
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', keyHandler);
        return () => {
            window.removeEventListener('keydown', keyHandler);
        };
    }, []);
    //
    return (
        <div className="form-alert">
            <div className="form-alert__wrapper">
                <div className="form-alert__description">
                    <SvgTemplate id="notification" />
                    <p className="form-alert__text">Sorry! Function temporarily unavailable</p>
                </div>
                <div className="form-alert__controls">
                    <button className="form-alert__button" onClick={submitAlert}>Ok</button>
                </div>
            </div>
        </div>
    );
};

export default FormAlert;