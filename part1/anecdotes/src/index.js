import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => {
  return(
    <button onClick={handler}>
      {text}
    </button>
  )
}


const App = ({anecdotes}) => {
  const length = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(length).fill(0))
  let most = votes.indexOf(Math.max(...votes))

  const setValue = (setter, length) => {
    const random_index = Math.floor(Math.random() * length)   
    setter(random_index)
  }
  const addVote = (values, setter, index) => {
    const copy = [...values]
    copy[index]+=1
    setter(copy)
  }


  return (
    <div>
      <h2>Anecdote of the day</h2>
      "{anecdotes[selected]}"<br/>
      has {votes[selected]} votes.<br/>

      <Button handler={() => addVote(votes, setVotes, selected)} text="Vote" />
      <Button handler={() => setValue(setSelected, length)} text="Anecdote" />

      <h2>Anecdote with most votes</h2>
      "{anecdotes[most]}"<br/>
      has {votes[most]} votes.<br/>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
