import { createAsyncThunk } from "@reduxjs/toolkit";

const LOAD_CRYPTO = "FINANCIAL_MODELING/LOAD_CRYPTO";

const init = {
  crypto: [],
  search: [],
};

const api = "https://api2.binance.com/api/v3/ticker/24hr";


// Reducer

const cryptoReducer = (state= init, action) => {
  switch (action.type) {
    case `${LOAD_CRYPTO}/fulfilled`:
      return {
        crypto: action.payload,
      };

    default:
      return state;
  }
};

export const cryptoThunk = createAsyncThunk(
  LOAD_CRYPTO,
  async() => {
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
          bidPrice: coin.bidPrice,
          volume: coin.volume,
          count: coin.count,
        },
      );
      return coin;
    });
    return arr || [];
  },
);

export default cryptoReducer;