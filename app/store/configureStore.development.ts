import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { createHistory } from 'history';
import { routerMiddleware, push } from 'react-router-redux';
import * as createLogger from 'redux-logger';
import rootReducer from '../reducers';
import * as counterActions from '../actions/counter';
import { counterStateType } from '../reducers/counter';

const history = createHistory();

declare const window : Window & {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? (a : any) : typeof compose;
};

declare const module: NodeModule & {
	hot?: {
		accept(...args: any[]): any;
	}
};

const configureStore = (initialState? : counterStateType) => {
  // Redux Configuration
  const middleware : any[] = [];
  const enhancers : any[] = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Logging Middleware
  const logger = (<any>createLogger)({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  // Router Middleware
  const router = routerMiddleware(hashHistory);
  middleware.push(router);

  // Redux DevTools Configuration
	const actionCreators = Object.assign({}, counterActions, {
		push
	});

	// If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers : typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = (<any>composeEnhancers)(...enhancers);

  // Create Store
  const store = (<any>createStore)(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
};

export default { configureStore, history };
