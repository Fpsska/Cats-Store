import {
    ACTION_SET_FORM_ALERT_VISIBLE_STATUS,
    ACTION_SET_FORM_SUBMIT_STATUS,
} from "../Redux//Actions/formActions";

// /. Imports

export interface formStateTypes {
    isFormAlertVisible: boolean,
    isFormSubmitted: boolean,
}

// /. Data Types


interface setFormAlertVisibleStatus {
    type: typeof ACTION_SET_FORM_ALERT_VISIBLE_STATUS;
    payload: boolean;
}


interface setFormSubmitStatus {
    type: typeof ACTION_SET_FORM_SUBMIT_STATUS;
    payload: boolean;
}


// /. AC Types

export type formActionTypes =
    | setFormAlertVisibleStatus
    | setFormSubmitStatus
