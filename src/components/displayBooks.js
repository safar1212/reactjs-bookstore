import React from 'react';
import AddBook from './form';
import SingleBook from './singleBook';

const DisplayBooks = () => {
  const books = [];

  return (
    <div className="book-list">
      {books.map((book) => <SingleBook key={1} title={book.title} author={book.author} />)}
      <AddBook />
    </div>
  );
};

export default DisplayBooks;
