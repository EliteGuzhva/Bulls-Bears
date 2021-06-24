import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from './types';
import { education } from './education';
import { tickers } from './tickers';

export default createStore(
  combineReducers<RootState>({ education, tickers }),
  composeWithDevTools(applyMiddleware(thunk))
);
