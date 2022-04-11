import {
    ACTION_SET_FORM_ALERT_VISIBLE_STATUS
} from "../Redux//Actions/formActions";

// /. Imports

export interface formStateTypes {
    isFormAlertVisible: boolean
}

// /. Data Types


interface setFormAlertVisibleStatus {
    type: typeof ACTION_SET_FORM_ALERT_VISIBLE_STATUS;
    payload: boolean;
}





// /. AC Types

export type formActionTypes =
    | setFormAlertVisibleStatus
