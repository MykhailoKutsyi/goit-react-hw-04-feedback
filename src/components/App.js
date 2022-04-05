import { useState } from 'react';

import initialFeedback from './feedback.json';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'Good') {
      return setGood(state => state + 1);
    } else if (option === 'Neutral') {
      return setNeutral(state => state + 1);
    } else {
      return setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? ((good / countTotalFeedback()) * 100).toFixed(0) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        {initialFeedback.map(({ id, option }) => (
          <FeedbackOptions
            key={id}
            option={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </Section>

      {countTotalFeedback() !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
}
