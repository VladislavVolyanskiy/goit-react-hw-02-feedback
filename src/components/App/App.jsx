import React, { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // options = Object.keys(this.state);
  // values = Object.values(this.state);

  feedbackSortCount = stateKey => {
    this.setState(prevState => ({ [stateKey]: prevState[stateKey] + 1 }));
    console.log(this.state);
  };

  feedbackTotalCount = () => {
    const stateValues = Object.values(this.state);
    return stateValues.reduce((total, value) => total + value, 0);
  };

  goodFeedbackRatio = () => {
    return Math.round((this.state.good / this.feedbackTotalCount()) * 100);
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            stateKeys={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackSortCount}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.feedbackTotalCount() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              stateKeys={Object.keys(this.state)}
              stateValues={Object.values(this.state)}
              total={this.feedbackTotalCount}
              positivePercentage={this.goodFeedbackRatio}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
