import * as React from 'react';
import { Route, Switch } from 'react-router';
import { App } from './containers/App';
import { CounterPage } from './containers/CounterPage';
import { HomePage } from './containers/HomePage';

export class Routes extends React.Component {
  render () {
    return (
      <App>
        <Switch>
          <Route path="/counter" component={ CounterPage }/>
          <Route path="/" component={ HomePage }/>
        </Switch>
      </App>
    );
  }
}
