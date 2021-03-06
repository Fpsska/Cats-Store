import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentRangeValue } from '../../store/actions/filterActions';
import { setFilteredCardsData, setFilteredStatus } from '../../store/actions/cardActions';
import { RootState } from '../../store/store';
import './Filter.scss';

// /. Imports

const Filter: React.FC = () => {
    const { inputRangeTotalValue, inputRangeMinValue, currentRangeValue } = useSelector((state: RootState) => state.filterReducer);
    const input = useRef<HTMLInputElement>(null!);
    const counter = useRef<HTMLDivElement>(null!);
    const fill = useRef<HTMLDivElement>(null!);
    const dispatch = useDispatch();
    // 
    const inputRangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const currentValue = +e.target.value;
        dispatch(setCurrentRangeValue(currentValue));
        dispatch(setFilteredCardsData(currentValue));
        dispatch(setFilteredStatus(true)); // many calls => return all true 
        fill.current.style.width = 100 * (currentValue - inputRangeMinValue) / (inputRangeTotalValue - inputRangeMinValue) + '%';
        counter.current.style.left = 100 * (currentValue - inputRangeMinValue) / (inputRangeTotalValue - inputRangeMinValue) + '%';
    };

    useEffect(() => {
        dispatch(setCurrentRangeValue(inputRangeTotalValue));
        dispatch(setFilteredCardsData(inputRangeTotalValue));
        fill.current.style.width = 100 + '%';
        counter.current.style.left = 100 + '%';
    }, []);
    // 
    return (
        <div className="filter">
            <input
                ref={input}
                className="filter__input"
                type="range"
                value={currentRangeValue}
                min={inputRangeMinValue}
                max={inputRangeTotalValue}
                step="100"
                onChange={inputRangeHandler}
            />
            <span className="filter__progress"><span ref={fill} className="filter__progress-fill"></span></span>
            <span ref={counter} className="filter__current">{currentRangeValue}</span>
            <div className="filter__indicators">
                <span className="filter__counter filter__counter--min">{`${inputRangeMinValue} $`}</span>
                <span className="filter__counter filter__counter--max">{`${inputRangeTotalValue} $`}</span>
            </div>
        </div>
    );
};

export default Filter;

