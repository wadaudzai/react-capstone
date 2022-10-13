import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneInfo from './OneInfo';
import '../styles/CoinsInfo.css';
import { fetchCoinsInfo } from '../redux/infoReducer';

const CoinsInfo = () => {
  const coinsInfo = useSelector((state) => state.coinsInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinsInfo());
  }, []);

  return (
    <div>
      <OneInfo Info={coinsInfo} />
    </div>
  );
};
export default CoinsInfo;
