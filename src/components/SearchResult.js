import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SearchResult = () => {
  const coins = useSelector((state) => state.crypto);

  const crypt = coins.search;
  console.log(crypt);
  if (crypt.length === 0) {
    return (
      <p>Coin not found</p>
    );
  }
  return (
    <section className="my-container">
      <div className="grid">
        {crypt.map((coin) => (
          <div key={coin.symbol} className="grid-item">
            <NavLink
              to={`/details/${coin.symbol}`}
              state={coin}
            >
              <h2>{coin.symbol}</h2>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
