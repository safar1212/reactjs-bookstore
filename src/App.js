import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
       <Navbar />
    <Routes>
      {/* <Route path="/" element={<Home />} />

      <Route path="/categories" element={<CalculatorPage />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
