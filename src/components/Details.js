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
    </section>
  );
};

export default Details;