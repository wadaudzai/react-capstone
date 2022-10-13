/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OneInfo.css';

const OneInfo = (props) => {
  const { Info } = props;
  const {
    name, symbol, priceUsd, supply, marketCapUsd, volumeUsd24Hr, vwap24Hr,
  } = Info;

  return (
    <div>
      <div className="coin-title">
        <h2>
          {name}
          (
          {symbol}
          )
        </h2>
      </div>
      <div>
        <h3>Coin Prices</h3>

        <div className="price">
          <h3>Market Price:</h3>
          <p>{priceUsd}</p>
        </div>

        <div className="price">
          <h3>Market Price:</h3>
          <p>{supply}</p>
        </div>

        <div className="price">
          <h3>Market Price:</h3>
          <p>{marketCapUsd}</p>
        </div>

        <div className="price">
          <h3>Market Price:</h3>
          <p>{volumeUsd24Hr}</p>
        </div>

        <div className="price">
          <h3>Market Price:</h3>
          <p>{vwap24Hr}</p>
        </div>
      </div>
    </div>
  );
};

OneInfo.propTypes = {
  Info: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  symbol: PropTypes.string,
  priceUsd: PropTypes.string,
};

export default OneInfo;
