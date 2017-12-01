let store: any;

if (process.env.NODE_ENV === 'production') {
	store = require('./configureStore.prod');
} else {
	store = require('./configureStore.dev');
}

const {default: {history, configureStore}} = store;

export {history, configureStore};
