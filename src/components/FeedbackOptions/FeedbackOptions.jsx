import React from 'react';
import PropTypes from 'prop-types';

import { FeedbackOptsWrap, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ stateKeys, onLeaveFeedback }) => {
  return (
    <FeedbackOptsWrap>
      {stateKeys.map(stateKey => (
        <FeedbackBtn
          type="button"
          key={stateKey}
          onClick={() => onLeaveFeedback(stateKey)}
        >
          {stateKey}
        </FeedbackBtn>
      ))}
    </FeedbackOptsWrap>
  );
};

FeedbackOptions.propTypes = {
  stateKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
