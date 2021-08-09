import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAge, incrementAsync } from '../../../redux/actionCreators';

const CounterButtons = () => {
    const dispatch = useDispatch();
    const onButtonClick = (count) => {
        dispatch(incrementAsync(count));
    }
    const onAgeButtonClick = () => {
        dispatch(incrementAge());
    }
    const counter = useSelector(state => state.counter);
    const age = useSelector(state => state.age);

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