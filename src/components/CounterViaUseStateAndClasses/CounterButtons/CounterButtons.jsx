import React from 'react';

class CounterButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            multiply: 4,
        };
        this.onAgeButtonClick = this.onAgeButtonClick.bind(this);
        this.onMultiplyButtonClick = this.onMultiplyButtonClick.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onSecondsChange = this.onSecondsChange.bind(this);
        this.onMultiplierChange = this.onMultiplierChange.bind(this);
    }

    onButtonClick = (count) => {
        this.props.incrementAsync(count);
    }
    
    onAgeButtonClick = () => {
        this.props.incrementAge();
    }
    
    onMultiplyButtonClick = () => {
        this.props.multiply({ multiplier: this.state.multiplier, seconds: this.state.seconds });
    }
    
    onMultiplierChange = (evt) => {
        this.setState({ ...this.state, multiplier: evt.target.value });
    }
    
    onSecondsChange = (evt) => {
        this.setState({ ...this.state, seconds: evt.target.value });
    }
    
    render() {
        return (
        <>
        <br />
        {this.props.counter}{' '}
        <button onClick={this.onButtonClick.bind(null, 1)}>Increment</button>
        <button onClick={() => { this.onButtonClick(2); }}>Increment + 2</button>
        <br />
        <br />
        Multiplier: <input type="text" onChange={this.onMultiplierChange} value={this.state.multiplier}></input>{' '}
        <br />
        Seconds: <input type="text" onChange={this.onSecondsChange} value={this.state.seconds || ""}></input>
        <br />
        <button onClick={this.onMultiplyButtonClick}>Multiply</button>
        <br />
        <br />
        {this.props.age}&nbsp;
        <button onClick={this.onAgeButtonClick}>Increment Age</button>
    </>);
    }
}

export default CounterButtons;