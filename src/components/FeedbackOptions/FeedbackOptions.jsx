import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeeedback(option)}
          className={css.feedback_button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
