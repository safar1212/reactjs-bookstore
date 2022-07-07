import React from "react";
import AddBook from "./form";
import SingleBook from "./singleBook";

const DisplayBooks = () => {



  return (
    <div className="book-list">
        <button>Remove</button>
      <SingleBook />
      <AddBook />
    </div>
  );
};

export default DisplayBooks;
