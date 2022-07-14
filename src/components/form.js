import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  // const id = useSelector((state) => state.book).length + 1;

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, category, item_id: uuidv4() }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className="add-book">
      <h2>Add new Book</h2>
      <form>
        <input type="text" placeholder="Book title" value={title} onChange={(changeTitle)} />
        <input type="text" placeholder="Author" value={author} onChange={(changeAuthor)} />
        <input type="text" placeholder="Categoty" value={category} onChange={(changeCategory)} />
        <button type="submit" onClick={addNewBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
