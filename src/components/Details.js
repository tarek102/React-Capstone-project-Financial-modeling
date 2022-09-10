import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <section className="container details-page">
      <div className="py-5 d-flex justify-content-center details-welcome">
        <h2>Welcome to Crypto traders</h2>
      </div>
      <div className="details-card">
        <h2 className="title">
          {state.symbol}
        </h2>
        <div className="stripe d-flex flex-column justify-content-center">
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
      </div>
    </section>
  );
};

export default Details;
