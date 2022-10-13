import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coinReducer';
import infoReducer from './infoReducer';

const store = configureStore({
  reducer: {
    coins: coinReducer,
    coinsInfo: infoReducer,
  },
});

export default store;
