import { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [params, setParams] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = e => {
    const stateKey = e.target.name;
    setParams({ ...params, [stateKey]: params[stateKey] + 1 });
  };

  const countTotalFeedback = () => {
    return Object.values(params).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = params;
    return good >= 1 ? ((good / countTotalFeedback()) * 100).toFixed(0) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(params)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {countTotalFeedback() !== 0 ? (
        <Section title="Statistics">
          <Statistics
            options={Object.values(params)}
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
