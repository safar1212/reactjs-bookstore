import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Categories from './components/categories';
import DisplayBooks from './components/displayBooks';
import NotMatch from './components/pages/notMatch';

function App() {
  return (
    <Router>
       <Navbar />
    <Routes>
      <Route path="/" element={<DisplayBooks />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </Router>
  );
}

export default App;
