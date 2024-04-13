import React from 'react'

const DecreamentCounter = ({handleDec}) => {
  return (
    <div>
        <button onClick={()=>handleDec(1)}>DEC</button>
    </div>
  )
}

export default DecreamentCounter