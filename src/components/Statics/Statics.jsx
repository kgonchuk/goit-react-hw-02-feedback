import css from './Statics.module.css';
import Proptypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positiv feedback:{positivePercentage}</li>
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: Proptypes.number.isRequired,
  neutral: Proptypes.number.isRequired,
  bad: Proptypes.number.isRequired,
  total: Proptypes.number.isRequired,
  positivePercentage: Proptypes.number.isRequired,
};
