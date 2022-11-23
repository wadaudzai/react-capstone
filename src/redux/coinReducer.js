import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coincap.io/v2/assets';

export const fetchCoins = createAsyncThunk(
  'react-capstone/fetchCoins', async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  },
);

const initialState = [];

export const CoinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => action.payload,
  },
});

export default CoinSlice.reducer;
