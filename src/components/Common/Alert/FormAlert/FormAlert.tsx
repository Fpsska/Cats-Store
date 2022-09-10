import React, { useEffect } from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';

import { useAppDispatch } from '../../../../store/hooks';

import { setFormAlertVisibleStatus } from '../../../../store/actions/formActions';

import './FormAlert.scss';

// /. Imports

const FormAlert: React.FC = () => {
    const dispatch = useAppDispatch();

    const submitAlert = (): void => {
        dispatch(setFormAlertVisibleStatus(false));
    };


    useEffect(() => {
        const keyHandler = (e: KeyboardEvent): void => {
            if (e.code === 'Escape') {
                dispatch(setFormAlertVisibleStatus(false));
            }
        };

        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('keydown', keyHandler);
        };
    }, []);

    return (
        <div className="form-alert" role="alert">
            <div className="form-alert__wrapper">
                <div className="form-alert__description">
                    <RiErrorWarningLine color={'#e52d2d'} size={'24px'} />
                    <p className="form-alert__text" >Sorry! Function temporarily unavailable</p>
                </div>
                <div className="form-alert__controls">
                    <button className="form-alert__button" onClick={submitAlert}>Ok</button>
                </div>
            </div>
        </div>
    );
};

export default FormAlert;