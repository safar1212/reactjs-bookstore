import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AddBook from './form';
import SingleBook from './singleBook';


const DisplayBooks = () => {
  // const books = useSelector((state) => state.book, shallowEqual);
  const books = useSelector((state) => state.book)
  console.log(books)

  return (
    <div className="book-list">
      {books.map((book) => <SingleBook key={book.title} id={book.id} title={book.title} author={book.author} />)}
      <AddBook />
    </div>
  )
};

export default DisplayBooks;
