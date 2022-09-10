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
    setValue({ search: '' });
  };

  const handleChange = (e) => {
    setValue({ search: e.target.value });
  };

  return (
    <section className="wrapper d-flex flex-column align-items-center">
      <div className="hero">
        <h2>Welcome to Crypto traders</h2>
        <SearchBar
          handleSearch={handleSearch}
          handleChange={handleChange}
          searchValue={value.search}
        />
      </div>
      <div className="row cryptos d-flex flex-row justify-content-center">
        {crypt.map((coin) => (
          <div className="currencies d-flex flex-row justify-content-between align-items-center col-4 col-sm-12 p-4" key={coin.symbol} id={coin.id}>
            <h2 className="align-middle">{coin.symbol}</h2>
            <div className="d-flex flex-column p-5 align-items-center ">
              <div className="mb-2">
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

export default Home;
