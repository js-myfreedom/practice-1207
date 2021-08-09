import React, { useState, useCallback } from 'react';
import CounterButtons from './CounterButtons/CounterButtons';
import CounterContext from './CounterContext';

const initialState = {
    counter: 0,
    age: 25,
};

export default function CounterViaContext() {
    const [state, setState] = useState(initialState);
    // const [isStoreSubsribed, setStoreSubsribed] = useState(false);
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

    // useEffect(() => {
    //     increment(7);
    //     increment(7);
    //     increment(7);

    //     setStoreSubsribed(true);

    // }, [increment]);

    return <>
        <br />123
        counter in counter.jsx: {counter}
        <button onClick={onButtonClick}>Increment</button>
        <br />
        <br />
        <CounterContext.Provider value={{ ...state, increment, incrementAge }}>
            <CounterButtons />
        </CounterContext.Provider>
    </>
}