import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
