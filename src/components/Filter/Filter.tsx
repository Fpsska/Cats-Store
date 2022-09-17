import React, { useRef, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { setCurrentRangeValue } from '../../store/actions/filterActions';
import { setFilteredCardsData, setFilteredStatus } from '../../store/actions/cardActions';

import './Filter.scss';

// /. Imports

const Filter: React.FC = () => {

    const {
        inputRangeTotalValue,
        inputRangeMinValue,
        currentRangeValue
    } = useAppSelector(state => state.filterReducer);

    const inputRef = useRef<HTMLInputElement>(null!);
    const counterRef = useRef<HTMLDivElement>(null!);
    const fillRef = useRef<HTMLDivElement>(null!);

    const dispatch = useAppDispatch();


    const inputRangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const currentValue = +e.target.value;

        dispatch(setCurrentRangeValue(currentValue));
        dispatch(setFilteredCardsData(currentValue));
        dispatch(setFilteredStatus(true)); // many calls => return all true 
        fillRef.current.style.width = `${100 * (currentValue - inputRangeMinValue) / (inputRangeTotalValue - inputRangeMinValue)}%`;
        counterRef.current.style.left = `${100 * (currentValue - inputRangeMinValue) / (inputRangeTotalValue - inputRangeMinValue)}%`;
    };

    useEffect(() => {
        dispatch(setCurrentRangeValue(inputRangeTotalValue));
        dispatch(setFilteredCardsData(inputRangeTotalValue));
        fillRef.current.style.width = `${100}%`;
        counterRef.current.style.left = `${100}%`;
    }, []);

    return (
        <form className="filter">
            <input
                ref={inputRef}
                className="filter__input"
                type="range"
                step="1"
                value={currentRangeValue}
                min={inputRangeMinValue}
                max={inputRangeTotalValue}
                onChange={e => inputRangeHandler(e)}
            />
            <span className="filter__progress"><span ref={fillRef} className="filter__progress-fill"></span></span>
            <span ref={counterRef} className="filter__current">{currentRangeValue}</span>
            <div className="filter__indicators">
                <span className="filter__counter filter__counter--min">{`${inputRangeMinValue} $`}</span>
                <span className="filter__counter filter__counter--max">{`${inputRangeTotalValue} $`}</span>
            </div>
        </form>
    );
};

export default Filter;

