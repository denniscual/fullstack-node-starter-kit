import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    // options
});

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const capturedActions = routerMiddleware(history);
// declaring our middlewares that we want to use in our store.
const middlewares = applyMiddleware(capturedActions, thunk, logger);

// creating our store.
const store = createStore(
    ( state={} ) => state,
    middlewares
);

export default store;
