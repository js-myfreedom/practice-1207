import React, { useEffect, useState } from 'react';
import CounterButtons from '../CounterButtons/CounterButtons';
import { Provider } from 'react-redux';
import actionTypes from '../../redux/actionTypes';
import store from '../../redux/store';
import { initialState } from '../../redux/reducers';

export default function Counter() {

    const [isStoreSubsribed, setStoreSubsribed] = useState(false);
    const [counter, setCounter] = useState(initialState.counter);

    useEffect(() => {
        if (!isStoreSubsribed) {
            store.subscribe(() => {
                const state = store.getState();
                console.log(state)
                setCounter(state.counter);
            });

            store.dispatch({ type: actionTypes.INCREMENT });
            // 1
            store.dispatch({ type: actionTypes.INCREMENT });
            // 2
            store.dispatch({ type: actionTypes.DECREMENT });
            // 1
            store.dispatch({ type: actionTypes.DECREMENT1 });
            // 1

            setStoreSubsribed(true);

        };
    }, [isStoreSubsribed]);

    const onButtonClick = () => {
        store.dispatch({ type: 'INCREMENT' });
    }

    return <>
        <br />
        counter in counter.jsx: {counter}
        <button onClick={onButtonClick}>Increment</button>
        <br />
        <br />
        <Provider store={store}>
            <CounterButtons />
        </Provider>
    </>
}