import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => (
  <div>
    <ul className={s.FeedbackList}>
      <li key="Good" className={s.FeedbackList__item}>
        <p className={s.Feedback__text}>Good</p>
        <p>{options[0]}</p>
      </li>{' '}
      <li key="neutral" className={s.FeedbackList__item}>
        <p className={s.Feedback__text}>Neutral</p>
        <p>{options[1]}</p>
      </li>
      <li key="bad" className={s.FeedbackList__item}>
        <p className={s.Feedback__text}>Bad</p>
        <p>{options[2]}</p>
      </li>
    </ul>
    <p className={s.total}>Total: {total}</p>
    <p>Positive Feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
