import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <section className="container details-card">
      <h2 className="title">
        {state.symbol}
      </h2>
      <div>
        <span>
          Volume:
          {state.volume}
        </span>
        <span>
          Ask price:
          {state.askPrice}
        </span>
        <span>
          Price change:
          {state.priceChange}
        </span>
        <span>
          Last price:
          {state.lastPrice}
        </span>
        <span>
          Count:
          {state.count}
        </span>
        <span>
          Bid price:
          {state.bidPrice}
        </span>
        <span>
          Open time:
          {state.openTime}
        </span>
        <span>
          Close time:
          {state.closeTime}
        </span>
      </div>
    </section>
  );
};

export default Details;
