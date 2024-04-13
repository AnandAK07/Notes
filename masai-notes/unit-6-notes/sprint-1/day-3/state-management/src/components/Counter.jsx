import React from 'react'

const Counter = ({state,addCounter,reduceCount}) => {
  return (
    <div>
        <h1>Counter:{state}</h1>
      <button onClick={addCounter}>Add</button>
      <button onClick={reduceCount}>Reduce</button>
    </div>
  )
}

export default Counter