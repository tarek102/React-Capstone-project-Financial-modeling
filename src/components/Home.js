import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { cryptoThunk, searchCrypto } from '../redux/crypto/cryptoReducer';
import SearchBar from './Search';

const Home = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const crypt = crypto.crypto;

  useEffect(() => {
    dispatch(cryptoThunk());
  }, []);

  const [value, setValue] = useState({ search: '' });

  const handleSearch = (e) => {
    e.preventDefault();
    if (value.search === '') {
      return;
    }

    dispatch(searchCrypto(value.search));
    // console.log(value.search);
    setValue({ search: '' });
  };

  const handleChange = (e) => {
    setValue({ search: e.target.value });
    // console.log(value);
  };

  return (
    <section className="wrapper">
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        searchValue={value.search}
      />
      <div className="row cryptos d-flex justify-content-center">
        {crypt.map((coin) => (
          <div className="currencies col-lg-3 col-md-4 mb-5 p-4" key={coin.symbol} id={coin.id}>
            <h2 className="mb-5">{coin.symbol}</h2>
            <div className="d-flex">
              <div>
                <span>
                  Count:
                  {coin.count}
                </span>
                {' '}
                <br />
                <span>
                  Price change:
                  {coin.priceChange}
                </span>
                <br />
                <span>
                  Last price:
                  {coin.lastPrice}
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

export default Home;
