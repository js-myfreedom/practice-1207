import React from 'react';

const CounterButtons = ({ age, counter, increment, incrementAge }) => {

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