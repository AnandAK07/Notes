import React, { useContext } from 'react'
import { ContextApi } from './ContextApi';

export const ConsumeContextApi = () => {

  // const value=useContext(ContextApi);
  const { name, setName } = useContext(ContextApi);

  // console.log(value)

  const handleButton = () => {
    setName('Anand Dev')
  }
  
  return (
    <div>ConsumeContextApi:
      <h1>{name}</h1>
      <button onClick={handleButton}>Handle Name</button>
    </div>
  )
}
