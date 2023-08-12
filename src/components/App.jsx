import { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statics/Statics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const percentagePositive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeeedback={this.handleClick}
          />
        </Section>
        {totalFeedback ? (
          <Section title="Stastistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={percentagePositive}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
