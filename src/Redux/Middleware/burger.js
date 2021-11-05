import changeNavDisplay from "../actions"

const burgerHandler = () => {
    return dispatch => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 800) {
                console.log("It works!");
                // dispatch(changeNavDisplay(false)) // Check the render method of `CardList`
            }
        })
    }
}

export default burgerHandler;