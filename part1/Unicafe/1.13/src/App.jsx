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
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);

  const goodClicks = () => setGood(good + 1);
  const neutralClicks = () => setNeutral(neutral + 1);
  const badClicks = () => setBad(bad + 1);

  const initialVotes = new Array(anecdotes.length).fill(0);
  const [votes, setVotes]=useState(initialVotes);

  const handleVote=()=>{
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  }

  const randomText=()=>{
    const randomIndex=Math.floor(Math.random()*anecdotes.length)
    setSelected(randomIndex);
  }
  return (
    <div>
      <h2>Give feedback</h2>
      <Buttons handleClick={goodClicks} text="good" />
      <Buttons handleClick={neutralClicks} text="neutral" />
      <Buttons handleClick={badClicks} text="bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={randomText}>next anecdotes</button>
    </div>
  );
};

export default App;


