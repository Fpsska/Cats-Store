import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setNotificationVisibleStatus } from "../../../../Redux/Actions/cardActions";
import { changeMainPageStatus } from "../../../../Redux/Actions/headerActions";
import { RootState } from "../../../../Redux/store";
import SvgTemplate from "../../SvgTemplate";
import "./BasketAlert.scss"

const BasketAlert: React.FC = () => {
    const { likedCardsData } = useSelector((state: RootState) => state.cardReducer)
    const dispatch = useDispatch()
    const alert = useRef<HTMLDivElement>(null)
    // 
    const closeAlert = (): void => {
        dispatch(setNotificationVisibleStatus(false))
        alert.current?.classList.remove("visible")
        alert.current?.classList.add("hide")
    }

    const relocateToFavouritePage = (): void => {
        dispatch(changeMainPageStatus(false))
    }

    useEffect(() => {  
        if (likedCardsData.length > 1 && likedCardsData.length % 2 === 0) { // logic of show/hide BasketAlert
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
                        <Link to="Favourite" onClick={relocateToFavouritePage}>
                            <SvgTemplate id="notification" />
                        </Link>
                    </span>
                </div>
                <div className="alert__information">
                    <span className="alert__message">Visit to Favourite page!</span>
                    <span className="alert__count">{`${likedCardsData.length} in basket!`}</span>
                </div>
                <button className="alert__button" onClick={closeAlert}>
                    <span className="icon">
                        <SvgTemplate id="close" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default BasketAlert;