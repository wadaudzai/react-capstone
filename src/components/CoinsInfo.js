import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneInfo from './OneInfo';
import '../styles/CoinsInfo.css';
import { fetchCoinsInfo } from '../redux/infoReducer';

const CoinsInfo = () => {
  const coinsInfo = useSelector((state) => state.coinsInfo);
  console.log(coinsInfo);
  console.log(typeof (coinsInfo));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoinsInfo());
  }, []);
  console.log(coinsInfo);
  return (
    <div>
      <h3>walid</h3>
      <OneInfo Info={coinsInfo} />
    </div>
  );
};
export default CoinsInfo;
