import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import initialState from './state';
import currentPathReducer from './reducers/currentPathReducer';
import temporaryTestStateReducer from './reducers/temporaryTestStateReducer';

const reducers = combineReducers({
  currentPath: currentPathReducer,
  temporaryTestState: temporaryTestStateReducer
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(reduxThunk)
);

export default store;