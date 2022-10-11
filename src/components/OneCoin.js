import React from 'react';
import PropTypes from 'prop-types';

const OneCoin = (props) => {
  const { coins } = props;
  const {
    id, name, rank, symbol,
  } = coins;
  console.log(coins);
  return (
    <li className="listItem">
      <div className="homeItem" id={id}>
        <div className="rank-and-arrow">
          <p className="rank">
            RANK #
            {rank}
          </p>
          <p>{coins.name}</p>
        </div>
        <div className="home-item-info">
          <div className="homeItemImage" />
          <h3 className="name">
            {name}
            <br />
            <p className="symbol">
              {`(${symbol})`}
            </p>
          </h3>
        </div>
      </div>
    </li>
  );
};

OneCoin.propTypes = {
  coins: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
  }),
};

export default OneCoin;
