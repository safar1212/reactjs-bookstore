import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({ title, author, id }) => {
  // const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(removeBook(e.target.id));
    console.log(removeBook);
  };

  return (
    <div className="single-book">
      <ul>
        <li id={id}>
          <h3>{title}</h3>
          <h3>{author}</h3>
          <h3>{id}</h3>
          <button id={id} onClick={handleRemove} type="submit">Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default SingleBook;
