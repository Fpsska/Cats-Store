import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SvgTemplate from "../SvgTemplate";
import { setNotificationVisibleStatus } from "../../../Redux/Actions/cardActions";
import { RootState } from "../../../Redux/store";
import "./Alert.scss"

const Alert: React.FC = () => {
    const { likedCardsData } = useSelector((state: RootState) => state.cardReducer)
    const dispatch = useDispatch()
    const alert = useRef<HTMLDivElement>(null)
    // 
    const closeAlert = (): void => {
        dispatch(setNotificationVisibleStatus(false))
        alert.current?.classList.remove("visible")
        alert.current?.classList.add("hide")
    }

    useEffect(() => {
        if (likedCardsData.length > 1 && likedCardsData.length % 2 === 0) {
            dispatch(setNotificationVisibleStatus(true))
            alert.current?.classList.add("visible")
            alert.current?.classList.add("opacity")
            alert.current?.classList.remove("hide")
            setTimeout(() => {
                dispatch(setNotificationVisibleStatus(false))
                alert.current?.classList.remove("visible")
                alert.current?.classList.add("hide")
            }, 3500);
        }
        if (likedCardsData.length === 0) {
            dispatch(setNotificationVisibleStatus(false))
        }
    }, [likedCardsData])
    // 
    return (
        <div ref={alert} className="alert">
            <div className="alert__wrapper">
                <div className="alert__notification">
                    <span className="icon">
                        <Link to="Favourite">
                            <SvgTemplate id="notification" />
                        </Link>
                    </span>
                </div>
                <span className="alert__message">Visit to Favourite page!</span>
                <button className="alert__button" onClick={closeAlert}>
                    <span className="icon">
                        <SvgTemplate id="close" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Alert;