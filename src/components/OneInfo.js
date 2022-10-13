import React from 'react';
import PropTypes from 'prop-types';

const OneInfo = (props) => {
  const { Info } = props;
  const {
    name, symbol, rank, id,
  } = Info;
  console.log(Info);

  return (
    <div>
      <p>walid</p>
      <p>
        This is then:
        {name}
        {symbol}
        {rank}
        {id}
      </p>
    </div>
  );
};

OneInfo.propTypes = {
  Info: PropTypes.instanceOf(Object),
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default OneInfo;
