import actionTypes from './actionTypes';

export const incrementAge = () => ({ type: actionTypes.INCREMENT_AGE });
export const decrement = () => ({ type: actionTypes.DECREMENT });
export const decrement1 = () => ({ type: actionTypes.DECREMENT1 });
export const increment = count => ({ type: actionTypes.INCREMENT, payload: count });
export const multiply = value => ({ type: actionTypes.MULTIPLY, payload: value });

export function incrementAsync(count) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(count));
        }, 1000);
    };
}

export function multiplyCurrentCounterAsync({ multiplier, seconds }) {
    return (dispatch, getState) => {
        const { counter } = getState();
        setTimeout(() => {
            dispatch(multiply(counter * multiplier));
        }, seconds * 1000);
    };
}