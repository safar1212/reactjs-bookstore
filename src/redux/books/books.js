const ADD_BOOK = bookstore / books / ADD_BOOK;
const REMOVE_BOOK = bookstore / books / REMOVE_BOOK;

// reducer

const Reducer = (state = ["book1", "book2", "book3", "book4"], action) => {
  let booksArray;
  switch (action.type) {
    case ADD_BOOK: {
      booksArray = [...booksArray, action.book];
      return booksArray;
    }
    case REMOVE_BOOK: {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    }
    default: {
      return state;
    }
  }
};

// actions

export const addBook = (book) => ({
  ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  REMOVE_BOOK,
  book,
});

export default Reducer;
