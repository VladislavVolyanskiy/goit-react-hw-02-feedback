import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  stateKeys,
  stateValues,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        {stateKeys.map((stateKey, i) => (
          <li key={stateKey}>
            {stateKey}: {stateValues[i]}
          </li>
        ))}
      </ul>
      <p>Total: {total()}</p>
      <p>
        Positive feedback: {positivePercentage() ? positivePercentage() : 0}%{' '}
      </p>
    </>
  );
};

Statistics.propTypes = {
  stateKeys: PropTypes.arrayOf(PropTypes.string),
  stateValues: PropTypes.arrayOf(PropTypes.number),
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
