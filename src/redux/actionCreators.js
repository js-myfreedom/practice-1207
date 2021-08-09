import actionTypes from './actionTypes';

export const incrementAge = () => ({ type: actionTypes.INCREMENT_AGE });
export const decrement = () => ({ type: actionTypes.DECREMENT });
export const decrement1 = () => ({ type: actionTypes.DECREMENT1 });
export const increment = count => ({ type: actionTypes.INCREMENT, payload: count });

export function incrementAsync(count) {
    return (dispatch) => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(increment(count));
        }, 1000);
    };
}