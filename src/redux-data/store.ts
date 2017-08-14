import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import initialState from './state';
import currentPathReducer from './reducers/currentPathReducer';
import articlesReducer from './reducers/articlesReducer';

const reducers = combineReducers({
  currentPath: currentPathReducer,
  articles: articlesReducer
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(reduxThunk)
);

export default store;