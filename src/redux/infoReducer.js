import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoinsInfo = createAsyncThunk(
  'react-capstone/fetchCoinsInfo', async (id) => {
    const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
    const data = await response.json();
    console.log(data);
    return data.data;
  },
);

const initialState = [];

export const CoinInfoSlice = createSlice({
  name: 'coinsInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoinsInfo.fulfilled]: (state, action) => action.payload,
  },
});

export default CoinInfoSlice.reducer;
