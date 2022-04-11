import { formStateTypes, formActionTypes } from "../../Types/formType";

import {
    ACTION_SET_FORM_ALERT_VISIBLE_STATUS
} from "../Actions/formActions";

const initialState: formStateTypes = {
    isFormAlertVisible: false
};

const formReducer = (
    state = initialState,
    action: formActionTypes
): formStateTypes => {
    switch (action.type) {
        case ACTION_SET_FORM_ALERT_VISIBLE_STATUS:
            return {
                ...state,
                isFormAlertVisible: action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;
