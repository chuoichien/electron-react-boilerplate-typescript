import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, ConnectedRouterProps } from 'react-router-redux';
import { Store } from '../reducers/types';
import { Routes } from '../Routes';

export class Root extends React.Component<ConnectedRouterProps<Store>> {
  render () {
    const { store, history } = this.props;
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Routes/>
        </ConnectedRouter>
      </Provider>
    );
  }
}
