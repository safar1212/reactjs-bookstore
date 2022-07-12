const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

// reducer

const Reducer = (state = [], action) => {
  let booksArray;
  switch (action.type) {
    case ADDBOOK: {
      booksArray = [...booksArray, action.book];
      return booksArray;
    }
    case REMOVEBOOK: {
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
  ADDBOOK,
  book,
});

export const removeBook = (book) => ({
  REMOVEBOOK,
  book,
});

export default Reducer;
