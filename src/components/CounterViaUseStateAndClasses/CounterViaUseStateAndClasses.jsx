import React from 'react';
import CounterButtons from './CounterButtons/CounterButtons';

const initialState = {
    counter: 0,
    age: 25,
};

export default class CounterViaUseState extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    
    render() {
        const {theme} = this.props;

        const increment = (count) => {
            this.setState({...this.state, counter: this.state.counter + (count || 1)});
        };

        const incrementAge = () => {
            this.setState({...this.state, age: this.state.age + 1});
        }

        const multiply = ({multiplier, seconds}) => {
            setTimeout(() => {
                this.setState({...this.state, counter: this.state.counter * multiplier});
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
            <br/>
            counter in counter.jsx: {this.state.counter}
            <button onClick={onButtonClick}>Increment</button>
            <br/>
            <br/>
            <CounterButtons {...this.state} incrementAsync={incrementAsync} incrementAge={incrementAge} multiply={multiply}/>
        </>
    }
}