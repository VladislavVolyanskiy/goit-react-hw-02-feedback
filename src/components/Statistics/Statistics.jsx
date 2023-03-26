import React from 'react';
import PropTypes from 'prop-types';
import { StatsStyledList, StatsStyledItem } from './Statistics.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <StatsStyledList>
      <StatsStyledItem>Good: {good}</StatsStyledItem>
      <StatsStyledItem>Neutral: {neutral}</StatsStyledItem>
      <StatsStyledItem>Bad: {bad}</StatsStyledItem>
      <StatsStyledItem>Total: {total()}</StatsStyledItem>
      <StatsStyledItem>
        Positive feedback: {positivePercentage() ? positivePercentage() : 0}%
      </StatsStyledItem>
    </StatsStyledList>
  );
};

// export const Statistics = ({
//   options,
//   stateValues,
//   total,
//   positivePercentage,
// }) => {
//   return (
//     <>
//       <StatsStyledList>
//         {options.map((option, i) => (
//           <StatsStyledItem key={option}>
//             {option}: {stateValues[i]}
//           </StatsStyledItem>
//         ))}
//       </StatsStyledList>
//       <p>Total: {total()}</p>
//       <p>
//         Positive feedback: {positivePercentage() ? positivePercentage() : 0}%
//       </p>
//     </>
//   );
// };

Statistics.propTypes = {
  // options: PropTypes.arrayOf(PropTypes.string),
  // stateValues: PropTypes.arrayOf(PropTypes.number),
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
