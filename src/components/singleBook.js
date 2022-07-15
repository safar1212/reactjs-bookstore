import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({
  title, author, item_id, category,
}) => {
  // const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <div className="single-book">
      <ul>
        <li id={item_id}>
          <div className="book-button-div">
            <div className="title-div">
              <p>{category}</p>
              <h3>{title}</h3>
              <p>{author}</p>
            </div>
            <div className="button-div">
              <button type="submit">Comments</button>
              <button id={item_id} onClick={handleRemove} type="submit">
                Remove
              </button>
              <button type="submit">Edit</button>
            </div>
          </div>
        </li>
      </ul>
      <div className="percentage-div">
        <svg>
          <circle cx="60" cy="60" r="40" />
          <circle cx="60" cy="60" r="40" />
        </svg>
        <div className="percentage-text">
          <h1>65%</h1>
          <p>Completed</p>
        </div>
      </div>
      <div className="verticle-line" />
      <div className="chapter-div">
        <p>CURRENT CHAPTER</p>
        <h3>Chapter 4&#x205A; &#8246;The secret of success&#8246;</h3>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default SingleBook;
