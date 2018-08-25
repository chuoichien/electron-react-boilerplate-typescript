import { Dispatch as ReduxDispatch, Store as ReduxStore, Action as ReduxAction } from 'redux';

export interface counterStateType {
  counter: number;
}

export type Action = ReduxAction;

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
