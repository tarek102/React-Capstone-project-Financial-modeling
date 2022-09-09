import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const SearchResult = () => {
  const coins = useSelector((state) => state.crypto);

  const crypt = coins.search;
  if (crypt.length === 0) {
    return (
      <p>Coin not found</p>
    );
  }
  return (
    <section className="my-container">
      <div className="grid d-flex justify-content-center m-auto">
        {crypt.map((coin) => (
          <div className="currencies d-flex flex-row justify-content-between align-items-center col-lg-3 col-md-6 col-sm-6 col-xs-6 p-4 " key={coin.symbol} id={coin.id}>
            <h2 className="align-middle">{coin.symbol}</h2>
            <div className="d-flex align-items-center ">
              <div>
                <span className="count-num">
                  Count:
                  {coin.count}
                </span>
              </div>
              <NavLink
                className="align-self-center arrow"
                to={`/details/${coin.symbol}`}
                state={coin}
              >
                <BsArrowRightCircle className="details" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
