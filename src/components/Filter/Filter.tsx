import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentRangeValue } from "../../Redux/Actions/headerActions";
import { setFilteredCardsData, setFilteredStatus } from "../../Redux/Actions/cardActions"
import { RootState } from "../../Redux/store";
import "./Filter.scss"

const Filter: React.FC = () => {
    const { inputRangeTotalValue, inputRangeMinValue, currentRangeValue } = useSelector((state: RootState) => state.headerReducer)
    const { isDataFiltered } = useSelector((state: RootState) => state.cardReducer)
    const inputValue = useRef<HTMLDivElement>(null!)
    const fill = useRef<HTMLDivElement>(null!)
    const dispatch = useDispatch()
    // 
    const inputRangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const currentValue = +e.target.value
        // console.log(currentValue)
        dispatch(setCurrentRangeValue(currentValue))
        dispatch(setFilteredCardsData(currentValue))
        dispatch(setFilteredStatus(true))
        console.log(isDataFiltered)
        fill.current.style.width = 100 * (currentValue - inputRangeMinValue) / (inputRangeTotalValue - inputRangeMinValue) + "%"
        inputValue.current.style.left = 100 * (currentValue - inputRangeMinValue) / (inputRangeTotalValue - inputRangeMinValue) + "%"
    }
    // 
    return (
        <div className="filter">
            <input onChange={inputRangeHandler} className="filter__input" type="range" min={inputRangeMinValue} max={inputRangeTotalValue} step="100" />
            <span className="filter__progress"><span ref={fill} className="filter__progress-fill"></span></span>
            <span ref={inputValue} className="filter__current">{currentRangeValue}</span>
            <div className="filter__indicators">
                <span className="filter__counter filter__counter--min">{`${inputRangeMinValue} $`}</span>
                <span className="filter__counter filter__counter--max">{`${inputRangeTotalValue} $`}</span>
            </div>
        </div>
    )
}

export default Filter;

