// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z9HYwqfQehINXNpxFodv/books';

// actions

export const addBook = (book) => async (dispatch) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: ADD_BOOK, book }));
};

export const removeBook = (index) => async (dispatch) => {
  await fetch(`${url}/${index}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: REMOVE_BOOK, index }));
};

export const getBooks = () => async (dispatch) => {
  await fetch(url)
    .then((res) => res.json())
    .then((book) => {
      const booksArray = [];
      Object.keys(book).forEach((key) => {
        booksArray.push({
          item_id: key,
          author: book[key][0].author,
          title: book[key][0].title,
          category: book[key][0].category,
        });
      });

      dispatch({ type: GET_BOOKS, booksArray });
    });
};

// reducer

const Reducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.booksArray;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.index);
    default:
      return state;
  }
};

export default Reducer;
