// import { combineReducers, createStore } from '@reduxjs/toolkit';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './books/books';
import checkStatusReducer from './categories/categories';

const configureStore = combineReducers({
  book: Reducer,
  statusCheck: checkStatusReducer,
});

const store = createStore(configureStore, applyMiddleware(thunk));

export default store;
