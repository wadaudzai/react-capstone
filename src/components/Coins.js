/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneCoin from './OneCoin';
import '../styles/Coins.css';
import { fetchCoins } from '../redux/coinReducer';

const Coins = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const filteredCryptos = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div className="app-holder">
      <div className="form-holder">
        <input type="text" placeholder="Search a cryptocurrency" onChange={(e) => setSearch(e.target.value)} className="form" />
      </div>
      <div className="main-holder">
        {
          filteredCryptos.map((coin) => (
            <OneCoin
              key={coins.data}
              coins={coin}
              search={search}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Coins;
