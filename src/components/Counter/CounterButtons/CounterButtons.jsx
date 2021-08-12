import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../../redux/actionCreators';

const CounterButtons = () => {
    const dispatch = useDispatch();
    const onButtonClick = (count) => {
        dispatch(actionCreators.incrementAsync(count));
    }
    const onAgeButtonClick = () => {
        dispatch(actionCreators.incrementAge());
    }
    const onMultiplierChange = (evt) => {
        setState({ ...state, multiplier: evt.target.value });
    }
    const onSecondsChange = (evt) => {
        setState({ ...state, seconds: evt.target.value });
    }

    const counter = useSelector(state => state.counter);
    const age = useSelector(state => state.age);
    const [state, setState] = useState({});

    return <>
        <br />
        {counter}{' '}
        <button onClick={onButtonClick.bind(null, 1)}>Increment</button>
        <button onClick={() => { onButtonClick(2); }}>Increment + 2</button>
        <br />
        <br />
        Multiplier: <input type="text" onChange={onMultiplierChange} value={state.multiplier}></input>{' '}
        <br />
        Seconds: <input type="text" onChange={onSecondsChange} value={state.seconds}></input>
        <br />
        <button onClick={() => {
            dispatch(actionCreators.multiplyCurrentCounterAsync(
                { multiplier: state.multiplier, seconds: state.seconds }
            ));
        }}>Multiply</button>
        <br />
        <br />
        {age}&nbsp;
        <button onClick={onAgeButtonClick}>Increment Age</button>
    </>
}

export default CounterButtons;