import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptoThunk } from "../redux/crypto/cryptoReducer";
import { BsArrowRightCircle } from "react-icons/bs"
import { NavLink } from 'react-router-dom';


const Home = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const crypt = crypto.crypto;

  useEffect(() => {
    dispatch(cryptoThunk());
  }, []);

  return (
    <section className="wrapper">
      <div className="row cryptos d-flex justify-content-center">
          {crypt.map((coin) => (
            <div className="currencies col-3 mb-5 p-4" key={coin.symbol} id={coin.id}>
              <h2 className="mb-5">Name: {coin.symbol}</h2>
              <div className="d-flex">
              <div>
                <span>Count: {coin.count}</span> <br></br>
                <span>Price change: {coin.priceChange}</span><br></br>
                <span>Last price: {coin.lastPrice}</span>
              </div>
              <NavLink className="align-self-center arrow"
              to="/details"
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