import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  // const id = useSelector((state) => state.book).length + 1;

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, id: uuidv4() }));
    setTitle('');
    setAuthor('');
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="add-book">
      <h2>Add new Book</h2>
      <form>
        <input type="text" placeholder="Book title" value={title} onChange={(changeTitle)} />
        <input type="text" placeholder="Author" value={author} onChange={(changeAuthor)} />
        <button type="submit" onClick={addNewBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
