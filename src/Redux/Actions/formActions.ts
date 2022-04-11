import { formActionTypes } from "../../Types/formType";

export const ACTION_SET_FORM_ALERT_VISIBLE_STATUS = "ACTION_SET_FORM_ALERT_VISIBLE_STATUS"

// AC Names

export const setFormAlertVisibleStatus = (status: boolean): formActionTypes => {
    return {
        type: ACTION_SET_FORM_ALERT_VISIBLE_STATUS,
        payload: status,
    };
};












