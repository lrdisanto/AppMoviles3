import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { eventoReducer } from './reducers';

const rootReducer = combineReducers({
  evento: eventoReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  ),
);

export default store;
