import React from 'react';

const SingleBook = (props) => {
  const { title, author } = props;

  return (
    <div className="single-book">
      <ul>
        <li>
          {title}
          {author}
          <button type="submit">Remove</button>
        </li>
      </ul>
    </div>
  );
};

export default SingleBook;
