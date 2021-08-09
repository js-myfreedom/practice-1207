import React from 'react';
import { useContext } from 'react';
import CounterContext from '../CounterContext';

const CounterButtons = () => {
    const { age, counter, increment, incrementAge } = useContext(CounterContext);

    const onButtonClick = (count) => {
        increment(count);
    }
    const onAgeButtonClick = () => {
        incrementAge();
    }

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