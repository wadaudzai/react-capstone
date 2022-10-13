import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCoinsInfo } from '../redux/infoReducer';
import '../styles/OneCoin.css';
import image from '../assets/images/bit.png';

const OneCoin = (props) => {
  const { coins } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCoinsInfo(coins.id), []);
  };
  return (
    <NavLink to="/CoinsInfo" onClick={handleClick} className="card-holder">
      <div className="image-holder">
        <img src={image} alt="walid" className="image" />
      </div>
      <div>
        <p>
          {coins.name}
          (
          {coins.symbol}
          )
        </p>
        <p>
          $
          {coins.priceUsd}
        </p>
        <p>
          Rank:
          {coins.rank}
        </p>
      </div>
    </NavLink>
  );
};

OneCoin.propTypes = {
  coins: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  symbol: PropTypes.string,
  rank: PropTypes.string,
  id: PropTypes.string,
  priceUsd: PropTypes.string,
};

export default OneCoin;
