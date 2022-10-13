import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneCoin from './OneCoin';
import '../styles/Coins.css';
import { fetchCoins } from '../redux/coinReducer';

const Coins = () => {
  const coins = useSelector((state) => state.coins);
  console.log(coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div>
      <h1 className="title">Coins</h1>
      {
        coins.map((coin) => (
          <OneCoin
            key={coins.id}
            coins={coin}
          />
        ))
      }
    </div>
  );
};

export default Coins;
