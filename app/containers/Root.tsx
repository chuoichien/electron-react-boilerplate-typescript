import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';
import {Store} from "redux";

export interface IRoot {
  store : Store<any>,
  history : {}
}

export function Root({ store , history }: IRoot) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}
