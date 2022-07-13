const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// reducer


// actions

export const addBook = (book) => {
  return {
   type: ADD_BOOK,
   book,
  }
};

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});

const Reducer = (state = [{title: "book1", author: "Safar", id: '1'}, {title: "book2", author: "Safar", id: '2'}], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.index);
      // if (state.length === 1) {
      //   return [];
      // }
      // return [
      //   ...state.slice(0, action.index),
      //   ...state.slice(action.index + 1, state.length),
      // ];
    default:
      return state;
  }
};

export default Reducer;
