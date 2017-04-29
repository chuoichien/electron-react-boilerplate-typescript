let store: any;

if (process.env.NODE_ENV === 'production') {
	store = require('./configureStore.production');
} else {
	store = require('./configureStore.development');
}

const {history, configureStore} = store;

export {history, configureStore};
