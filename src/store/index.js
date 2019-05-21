import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { createRootReducer } from './reducers';

/**
 * Store configuration
 * @param initialState
 */
export const configureStore = () => {
  // Register reducers
  const rootReducer = createRootReducer();
  const middlewares = [thunk];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
