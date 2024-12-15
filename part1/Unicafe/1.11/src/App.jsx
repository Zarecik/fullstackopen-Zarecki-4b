import { useState } from 'react';

const Buttons = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLines = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  );
};
// miało byc props ale według mnie tak jest lepiej
const Statistics = ({ good, neutral, bad }) => {
  if (!(good || neutral || bad)) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <StatisticLines text="good " value={good} />
      <StatisticLines text="neutral " value={neutral} />
      <StatisticLines text="bad " value={bad} />
      <StatisticLines text="all " value={good + neutral + bad} />
      <StatisticLines
        text="average "
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLines
        text="positive "
        value={(good / (good + neutral + bad)) * 100 + '%'}
      />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClicks = () => setGood(good + 1);
  const neutralClicks = () => setNeutral(neutral + 1);
  const badClicks = () => setBad(bad + 1);

  return (
    <div>
      <h2>Give feedback</h2>
      <Buttons handleClick={goodClicks} text="good" />
      <Buttons handleClick={neutralClicks} text="neutral" />
      <Buttons handleClick={badClicks} text="bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;


