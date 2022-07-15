import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './form';
import SingleBook from './singleBook';
import { getBooks } from '../redux/books/books';

const DisplayBooks = () => {
  const books = useSelector((state) => state.book);
  console.log(books);

  const dispatch = useDispatch();

  // dispatch(getBooks());
  // console.log( "clicked", dispatch());

  // useEffect(() => {
  //   dispatch(getBooks());
  // },[]);

  useEffect(() => {
    dispatch(getBooks(books));
  }, [dispatch]);



  return (
    <div className="book-list">
      {books.map((book) => (
        <SingleBook
          key={book.title}
          item_id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default DisplayBooks;
