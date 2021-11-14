import { changeNavDisplay } from "../actions"

const burgerHandler = () => {
    return dispatch => {
        const defineBurgerStatus = () => {
            if (window.innerWidth < 800) {
                dispatch(changeNavDisplay(false))
            }
            else if (window.innerWidth > 800) {
                dispatch(changeNavDisplay(true))
            }
        }

        window.addEventListener("resize", () => defineBurgerStatus())
        window.addEventListener("load", () => defineBurgerStatus())
    }
}



export default burgerHandler;