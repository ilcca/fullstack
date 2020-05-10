import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({stats}) => {
  console.log(stats)
  return(
    <div>
      <h2>Statistics</h2>
      <table>
      <tbody>
          <Statistic text = {stats.stat[0].text} value = {stats.stat[0].value}/>
          <Statistic text = {stats.stat[1].text} value = {stats.stat[1].value}/>
          <Statistic text = {stats.stat[2].text} value = {stats.stat[2].value}/>
          <Statistic text = {stats.stat[3].text} value = {stats.stat[3].value}/>
          <Statistic text = {stats.stat[4].text} value = {stats.stat[4].value}/>
          <Statistic text = {stats.stat[5].text} value = {stats.stat[5].value}/>
      </tbody>
      </table>
    </div>
    )
}
const Statistic = ({text, value}) => {
  if (isNaN(value)) {
    return(
      <tr>
      <td>{text}</td><td></td>
     </tr>
  
    )
  }
  else {
    return(
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>
    )
  }
}
const Button = ({handler, text}) => {
  return(
    <button onClick={handler}>
    {text}
  </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
//  const [bad, setBad] = useState(0)

  const addValue = (value, setter) => {
    setter(value+1)
  }

  let all = good + bad + neutral
  let average = (good - bad)/all
  let positive = good/all
  
  const stats = {
    stat: [
      {
        text: "good",
        value: good
      },
      {
        text: "neutral",
        value: neutral
      },
      {
        text: "bad",
        value: bad
      },
      {
        text: "all",
        value: all
      },
      {
        text: "average",
        value: average
      },
      {
        text: "positive",
        value: positive
      }
    ],
  }



  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button handler={() => addValue(good, setGood)} text="good" />
        <Button handler={() => addValue(neutral, setNeutral)} text="neutral" />
        <Button handler={() => addValue(bad, setBad)} text="bad" />
      </div>
      <div>
        <Statistics stats={stats} />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)