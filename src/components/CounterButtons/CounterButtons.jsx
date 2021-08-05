import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from '../../redux/actionTypes';

const CounterButtons = () => {
    const dispatch = useDispatch();
    const onButtonClick = (count) => {
        let action;
        if (count) {
            action = { type: actionTypes.INCREMENT, payload: count };
        } else {
            action = { type: actionTypes.INCREMENT };
        }
        dispatch(action);
    }
    const onAgeButtonClick = () => {
        dispatch({ type: actionTypes.INCREMENT_AGE });
    }
    const counter = useSelector(state => state.counter);
    const age = useSelector(state => state.age);

    return <>
        <br />
        {counter}{' '}
        <button onClick={onButtonClick.bind(null, 1)}>Increment</button>
        <button onClick={() => { onButtonClick(2); }}>Increment + 2</button>
        <br />
        <br />
        {age}&nbsp;
        <button onClick={onAgeButtonClick}>Increment Age</button>
    </>
}

export default CounterButtons;