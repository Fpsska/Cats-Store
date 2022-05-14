import { useDispatch } from "react-redux";

import {
    toggleSortCardsPriceDecrease,
    toggleSortCardsAgeDecrease,
    toggleSortCardsPriceIncrease,
    toggleSortCardsAgeIncrease,
} from "../Redux/Actions/cardActions";


interface propTypes {
    name: string,
    status: boolean
}

export function useSort() {
    const dispatch = useDispatch()

    const defineSortOption = (props: propTypes) => {
        const { name, status } = props;

        switch (status) {
            case (name === "price"):
                dispatch(toggleSortCardsPriceDecrease(name, status));
                break;
            case (name === "age"):
                dispatch(toggleSortCardsAgeDecrease(name, status));
                break;
            case (name === "price" && status === false):
                dispatch(toggleSortCardsPriceIncrease(name, status));
                break;
            case (name === "age" && status === false):
                dispatch(toggleSortCardsAgeIncrease(name, status));
                break;
        }
    }

    return { defineSortOption }
}