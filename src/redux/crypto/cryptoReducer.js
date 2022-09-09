import { createAsyncThunk } from '@reduxjs/toolkit';

const LOAD_CRYPTO = 'FINANCIAL_MODELING/LOAD_CRYPTO';
const SEARCH_CRYPTO = 'FINANCIAL_MODELING/SEARCH_CRYPTO';

const init = {
  crypto: [],
  search: [],
};

const api = 'https://api2.binance.com/api/v3/ticker/24hr';

// Reducer

const cryptoReducer = (state = init, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case `${LOAD_CRYPTO}/fulfilled`:
      return {
        ...state,
        crypto: action.payload,
      };

    case `${SEARCH_CRYPTO}/fulfilled`:
      return {
        ...state,
        search: state.crypto.filter((coin) => coin.symbol === action.payload
        || coin.symbol.toLowerCase() === action.payload),
      };

    default:
      return state;
  }
};

export const searchCrypto = (coin) => ({
  type: `${SEARCH_CRYPTO}/fulfilled`,
  payload: coin.toLowerCase(),
});

export const cryptoThunk = createAsyncThunk(
  LOAD_CRYPTO,
  async () => {
    const data = await fetch(api);
    const res = await data.json();
    const filteredArr = res.slice(0, 30);
    const arr = [];
    filteredArr.map((coin) => {
      arr.push(
        {
          id: coin.firstId,
          symbol: coin.symbol,
          priceChange: coin.priceChange,
          lastPrice: coin.lastPrice,
          askPrice: coin.askPrice,
          bidPrice: coin.bidPrice,
          volume: coin.volume,
          count: coin.count,
          highPrice: coin.highPrice,
          openTime: coin.openTime,
          closeTime: coin.closeTime,
        },
      );
      return coin;
    });
    return arr || [];
  },
);

export default cryptoReducer;
