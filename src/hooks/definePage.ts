import { useDispatch } from "react-redux"
import {
    changeMainPageStatus,
    changeOverviewPageStatus
} from "../Redux/Actions/headerActions";
import { setNotificationVisibleStatus } from "../Redux/Actions/cardActions"

export function useDefinePage() {
    const dispatch = useDispatch()

    const handlePageName = (pageName: string) => {
        switch (pageName) {
            case "Main":
                dispatch(changeMainPageStatus(true));
                dispatch(setNotificationVisibleStatus(false))
                dispatch(changeOverviewPageStatus(false))
                break;
            case "Favourite":
                dispatch(changeOverviewPageStatus(false))
                break;
            case "Live":
                dispatch(changeOverviewPageStatus(true))
                break;
            default:
                return
        }
    }

    return { handlePageName }
}