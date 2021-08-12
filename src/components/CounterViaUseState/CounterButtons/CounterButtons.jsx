import React, { useState } from 'react';

const CounterButtons = ({ age, counter, incrementAsync, incrementAge, multiply }) => {

    const [state, setState] = useState({ multiplier: "" });

    const onButtonClick = (count) => {
        incrementAsync(count);
    }
    const onAgeButtonClick = () => {
        incrementAge();
    }
    const onMultiplyButtonClick = () => {
        multiply({ multiplier: state.multiplier, seconds: state.seconds });
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
        <br />
        Multiplier: <input type="text" onChange={onMultiplierChange} value={state.multiplier}></input>{' '}
        <br />
        Seconds: <input type="text" onChange={onSecondsChange} value={state.seconds || ""}></input>
        <br />
        <button onClick={onMultiplyButtonClick}>Multiply</button>
        <br />
        <br />
        {age}&nbsp;
        <button onClick={onAgeButtonClick}>Increment Age</button>
    </>
}

export default CounterButtons;