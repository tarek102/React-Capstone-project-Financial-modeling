import React from 'react';
import { useLocation, NavLink, useParams } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const { state } = location;
  return (
    <section className="container details-card">
      <NavLink
        className="align-self-center arrow"
        to="/"
      >
        <BsArrowLeftCircle className="details" />
      </NavLink>
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
