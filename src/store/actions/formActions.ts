import { formActionTypes } from '../../Types/formTypes';

// /. Imports

export const ACTION_SET_FORM_ALERT_VISIBLE_STATUS = 'ACTION_SET_FORM_ALERT_VISIBLE_STATUS';
export const ACTION_SET_FORM_SUBMIT_STATUS = 'ACTION_SET_FORM_SUBMIT_STATUS';

// /. AC Names

export const setFormAlertVisibleStatus = (status: boolean): formActionTypes => {
    return {
        type: ACTION_SET_FORM_ALERT_VISIBLE_STATUS,
        payload: status
    };
};

export const setFormSubmitStatus = (status: boolean): formActionTypes => {
    return {
        type: ACTION_SET_FORM_SUBMIT_STATUS,
        payload: status
    };
};












