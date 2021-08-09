import React, { useState, useCallback } from 'react';
import CounterButtons from './CounterButtons/CounterButtons';

const initialState = {
    counter: 0,
    age: 25,
};

export default function CounterViaUseState() {
    const [state, setState] = useState(initialState);
    const { counter } = state;

    const increment = useCallback((count) => {
        setState({ ...state, counter: state.counter + (count || 1) });
    }, [state]);

    const incrementAge = () => {
        setState({ ...state, age: state.age + 1 });
    }

    const onButtonClick = () => {
        increment();
    }

    return <>
        <br />
        counter in counter.jsx: {counter}
        <button onClick={onButtonClick}>Increment</button>
        <br />
        <br />
        <CounterButtons {...state} increment={increment} incrementAge={incrementAge} />
    </>
}