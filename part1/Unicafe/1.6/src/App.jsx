import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p>
        <h2>
          Give feedback
        </h2>
      </p>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <p>
        <h2>
          Statistic
        </h2>
      </p>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}
    </div>
  )
}

export default App

