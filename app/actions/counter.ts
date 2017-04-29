// @flow
import {counterStateType, actionType} from '../reducers/counter';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() : actionType {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() : actionType {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch : (action : actionType) => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch : (action : actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
