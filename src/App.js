import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
    </div>
  );
}

export default App;
