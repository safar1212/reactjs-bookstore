import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {

  const dispatch = useDispatch();
  const status = useSelector((state) => state.statusCheck)

  const checkForStatus = () => {
    dispatch(checkStatus());
  }

  return (
  <div>
    <h2>{status}</h2>
    <button type="submit" onClick={checkForStatus}>Check Status</button>
  </div>
)};

export default Categories;


