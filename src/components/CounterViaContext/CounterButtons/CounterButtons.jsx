import React from 'react';
import { useContext } from 'react';
import CounterContext from '../CounterContext';
import * as actionCreators from '../../../redux/actionCreators';
import { useState } from 'react';

const CounterButtons = () => {
    const counterContextState = useContext(CounterContext);
    const { age, counter, dispatch } = counterContextState;
    const [state, setState] = useState({ multiplier: "" });

    const onButtonClick = (count) => {
        actionCreators.incrementAsync(count)(dispatch);
    }
    const onAgeButtonClick = () => {
        // incrementAge();
        dispatch(actionCreators.incrementAge());
    }
    const onMultiplierChange = (evt) => {
        setState({ ...state, multiplier: evt.target.value });
    }
    const onSecondsChange = (evt) => {
        setState({ ...state, seconds: evt.target.value });
    }

    return <>
        <br />
        {counter}{' '}
        <button onClick={onButtonClick.bind(null, 1)}>Increment</button>
        <button onClick={() => { onButtonClick(2); }}>Increment + 2</button>
        <br />
        Multiplier: <input type="text" onChange={onMultiplierChange} value={state.multiplier}></input>{' '}
        <br />
        Seconds: <input type="text" onChange={onSecondsChange} value={state.seconds || ""}></input>
        <br />
        <button onClick={() => {
            actionCreators.multiplyCurrentCounterAsync({
                multiplier: state.multiplier, seconds: state.seconds
            })(dispatch, () => (counterContextState));
        }}>Multiply</button>
        <br />
        <br />
        {age}&nbsp;
        <button onClick={onAgeButtonClick}>Increment Age</button>
    </>
}

export default CounterButtons;