import React, { useEffect, useState } from 'react';
import CounterButtons from './CounterButtons/CounterButtons';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { initialState } from '../../redux/reducers';
import { decrement, decrement1, increment } from '../../redux/actionCreators';

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

            store.dispatch(increment());
            // 1
            store.dispatch(increment());
            // 2
            store.dispatch(decrement());
            // 1
            store.dispatch(decrement1());
            // 1

            setStoreSubsribed(true);

        };
    }, [isStoreSubsribed]);

    const onButtonClick = () => {
        store.dispatch(increment());
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