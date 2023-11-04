import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    } else if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const feedbackTotal = () => {
    return good + neutral + bad;
  };
  const feedbackPositivePercentage = () => {
    const totalFeedbackValue = feedbackTotal();
    return totalFeedbackValue === 0
      ? 0
      : ((good / totalFeedbackValue) * 100).toFixed(0);
  };

  const options = ['good', 'neutral', 'bad'];
  const totalFeedbackValue = feedbackTotal();
  const positivePercentageValue = feedbackPositivePercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedbackValue === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackValue}
            percentage={positivePercentageValue}
          />
        )}
      </Section>
    </>
  );
};
export default App;
