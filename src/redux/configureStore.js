import { Redux, combineReducers } from '@reduxjs/toolkit';
import Reducer from './books/books';
import checkStatusReducer from './categories/categories';

const configureStore = combineReducers({
  book: Reducer,
  statusCheck: checkStatusReducer,
});

const store = Redux.createStore(configureStore);

export default store;
