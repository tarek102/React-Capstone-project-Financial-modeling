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
    <section className="container">
      <div className="wrapper">
          {crypt.map((coin) => (
            <div className="currencies" key={coin.symbol} id={coin.id}>
              <NavLink
              to="/details"
              state={coin}
            >
              <BsArrowRightCircle className="details" />
            </NavLink>
              <h2>Name: {coin.symbol}</h2>
              <span>Count: {coin.count}</span> <br></br>
              <span>Price change: {coin.priceChange}</span><br></br>
              <span>Last price: {coin.lastPrice}</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Home;