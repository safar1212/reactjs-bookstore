import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({ title, author, item_id, category }) => {
  // const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <div className="single-book">
      <ul>
        <li id={item_id}>
          <h3>{title}</h3>
          <h3>{author}</h3>
          <h3>{category}</h3>
          <h3>{item_id}</h3>
          <button id={item_id} onClick={handleRemove} type="submit">Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default SingleBook;
