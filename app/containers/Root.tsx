import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, ConnectedRouterProps } from 'react-router-redux';
import { Routes } from '../routes';

export function Root({ store , history } : ConnectedRouterProps<any>) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}
