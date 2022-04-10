import React from "react";
import SvgTemplate from "../../SvgTemplate";
import { useDispatch } from "react-redux";
import { setFormAlertVisibleStatus } from "../../../../Redux/Actions/headerActions";
import "./FormAlert.scss"

const FormAlert: React.FC = () => {
    const dispatch = useDispatch()
    // 
    const submitAlert = (): void => {
        dispatch(setFormAlertVisibleStatus(false))
    }

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
    )
}

export default FormAlert;