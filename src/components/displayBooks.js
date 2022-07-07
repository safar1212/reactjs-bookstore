import React from 'react';
import AddBook from './form';
import SingleBook from './singleBook';

const DisplayBooks = () => (
  <div className="book-list">
    <button type="submit">Remove</button>
    <SingleBook />
    <AddBook />
  </div>
);

export default DisplayBooks;
