import { useState } from 'react'

const App = () => {   

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialPoints = Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(initialPoints);
  const [selected, setSelected] = useState(0);
  const [popular, setPopular] = useState(0)

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVoteClick = () => {
    const newPoints = [...points] //creates a copy of the points array
    newPoints[selected] += 1
    setPoints(newPoints)
    
    let highestAmountOfPoints = 0

    for (let i = 0; i < anecdotes.length; i++) {

      if (newPoints[i] >= highestAmountOfPoints) {
        highestAmountOfPoints = newPoints[i];
        setPopular(i)
      }
    }
    console.log('Highest amount of points: ', highestAmountOfPoints)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br />
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[popular]}
    </div>
  )
}

export default App