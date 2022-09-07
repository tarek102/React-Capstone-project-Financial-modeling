import React from 'react';
import { useLocation } from 'react-router-dom';


const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <section className="my-container">
      <h1 className="title">
        {state.symbol}
      </h1>
      <div>
        <span>Price Change: {state.volume}</span>
        <span>Ask price: {state.askPrice}</span>
        <span>Price Change: {state.volume}</span>
        <span>Price Change: {state.volume}</span>
      </div>
      
    </section>
  );
};

export default Details;