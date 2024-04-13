// 4.list
import React from 'react'

const MyButton = ({buttonText,onClick}) => {
  return (
    <div>
        <h1>Events onClick</h1>
        <button onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default MyButton