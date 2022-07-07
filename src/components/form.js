import React from 'react';

const AddBook = () => (
  <div className="add-book">
    <h2>Add new Book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
