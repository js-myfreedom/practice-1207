import React, { useState, useCallback } from 'react';
import CounterButtons from './CounterButtons/CounterButtons';

const initialState = {
    counter: 0,
    age: 25,
};

export default function CounterViaUseState({theme}) {
    const [state, setState] = useState(initialState);
    const { counter } = state;

    const increment = useCallback((count) => {
        setState({ ...state, counter: state.counter + (count || 1) });
    }, [state]);

    const incrementAge = () => {
        setState({ ...state, age: state.age + 1 });
    }

    const multiply = ({ multiplier, seconds }) => {
        setTimeout(() => {
            setState({ ...state, counter: state.counter * multiplier });
        }, seconds * 1000);
    }

    const onButtonClick = () => {
        increment();
    }

    const incrementAsync = (count) => {
        setTimeout(() => {
            increment(count);
        }, 1000);
    }

    return <>
    <br/>
    theme: {theme}
        <br />
        counter in counter.jsx: {counter}
        <button onClick={onButtonClick}>Increment</button>
        <br />
        <br />
        <CounterButtons {...state} incrementAsync={incrementAsync} incrementAge={incrementAge} multiply={multiply} />
    </>
}