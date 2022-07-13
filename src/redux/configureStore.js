// import { combineReducers, createStore } from '@reduxjs/toolkit';
import { combineReducers, createStore} from 'redux';
import Reducer from './books/books';
import checkStatusReducer from './categories/categories';

const configureStore = combineReducers({
  book: Reducer,
  statusCheck: checkStatusReducer
});

const store = createStore(configureStore);

export default store;
