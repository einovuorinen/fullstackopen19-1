import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
	const good = props.good
	const bad = props.bad
	const neutral = props.neutral
	if(good + bad + neutral !== 0) {
		return (
		  <table>
		  	<tbody>
	    		<Statistic text="good" value={good} />
    			<Statistic text ="neutral" value={neutral} />
    			<Statistic text="bad" value={bad} />
    			<Statistic text="all" value={good + bad + neutral} />
    			<Statistic text="average" value={(good - bad)/(good + neutral + bad)} />
    			<Statistic text="positive" value= {100*good/(good + bad + neutral) + "%"} />
    	  	</tbody>
    	  </table>
    	)
	}
	return <p>No feedback given</p>
}

const Statistic = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	)
}

const Button = (props) => {
	return <button onClick={props.function}>{props.text}</button>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
    	<h1>give feedback</h1>
    	<Button function={() => setGood(good + 1)} text="good" />
    	<Button function={() => setNeutral(neutral + 1)} text="neutral" />
    	<Button function={() => setBad(bad + 1)} text="bad" />
    	<h1>statistics</h1>
    	<Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)