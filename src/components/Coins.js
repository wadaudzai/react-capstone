/* eslint-disable max-len */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneCoin from './OneCoin';
import '../styles/Coins.css';
import { fetchCoins } from '../redux/coinReducer';

const Coins = () => {
  const coins = useSelector((state) => state.coins);
  console.log(coins);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const filteredCryptos = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div>
      <h1 className="title">Coins</h1>
      <input type="text" placeholder="Search a cryptocurrency" onChange={(e) => setSearch(e.target.value)} className="form" />
      {
        filteredCryptos.map((coin) => (
          <OneCoin
            key={coins.id}
            coins={coin}
            search={search}
          />
        ))
      }
    </div>
  );
};

export default Coins;
