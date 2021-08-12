import React, { useReducer } from 'react';
import CounterButtons from './CounterButtons/CounterButtons';
import CounterContext from './CounterContext';
import { counterReducer } from '../../redux/reducers';
import * as actionCreators from '../../redux/actionCreators';

const initialState = {
    counter: 0,
    age: 25,
};

export default function CounterViaContext() {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const { counter } = state;

    const increment = (count) => {
        dispatch(actionCreators.increment(count));
    };

    const onButtonClick = () => {
        increment();
    }

    // useEffect(() => {
    //     increment(7);
    //     increment(7);
    //     increment(7);
    // }, [increment]);

    return <>
        <br />
        counter in counter.jsx: {counter}
        <button onClick={onButtonClick}>Increment</button>
        <br />
        <br />
        <CounterContext.Provider value={{ ...state, dispatch }}>
            <CounterButtons />
        </CounterContext.Provider>
    </>
}