import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from './types';
import { education } from './education';

export default createStore(
  combineReducers<RootState>({ education }),
  composeWithDevTools(applyMiddleware(thunk))
);
