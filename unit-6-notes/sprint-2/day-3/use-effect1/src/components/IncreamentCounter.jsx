import React from 'react'

const IncreamentCounter = ({handleInc}) => {
  return (
    <div>
        <button onClick={()=>handleInc(1)}>INC</button>
    </div>
  )
}

export default IncreamentCounter