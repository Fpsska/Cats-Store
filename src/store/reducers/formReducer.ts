import { formStateTypes, formActionTypes } from '../../Types/formTypes';

import {
    ACTION_SET_FORM_ALERT_VISIBLE_STATUS,
    ACTION_SET_FORM_SUBMIT_STATUS
} from '../actions/formActions';

// /. Imports

const initialState: formStateTypes = {
    isFormAlertVisible: false,
    isFormSubmitted: false
};

// /. initialState

const formReducer = (
    state = initialState,
    action: formActionTypes
): formStateTypes => {
    switch (action.type) {
        case ACTION_SET_FORM_ALERT_VISIBLE_STATUS:
            return {
                ...state,
                isFormAlertVisible: action.payload
            };
        case ACTION_SET_FORM_SUBMIT_STATUS:
            return {
                ...state,
                isFormSubmitted: action.payload
            };
        default:
            return state;
    }
};

export default formReducer;
