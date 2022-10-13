import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCoinsInfo } from '../redux/infoReducer';

const OneCoin = (props) => {
  const { coins } = props;
  console.log(coins);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCoinsInfo(coins.id), []);
  };
  return (
    <NavLink to="/CoinsInfo" onClick={handleClick}>
      <div>
        <p>
          This is them:
          {coins.id}
        </p>
        <p>
          This is the:
          {coins.name}
        </p>
        <p>
          This is the
          {coins.rank}
        </p>
        <p>
          This is the
          {coins.symbol}
        </p>
      </div>
    </NavLink>
  );
};

OneCoin.propTypes = {
  coins: PropTypes.instanceOf(Object),
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default OneCoin;
