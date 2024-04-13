
import { Component2 } from './Component2'
import { useContext } from 'react'
import {AppContext} from './AppContext'
const Component1 = () => {
    // console.log(props)
    const {name,age}=useContext(AppContext)
    // const value=useContext(AppContext)
    // console.log(value)

  return (
    <div>
    <h1>Component1</h1>
    <h1>{name}</h1>
    <h3>{age}</h3>
    {/* <h3>{value.name}</h3>
    <h4>{value.age}</h4> */}
    <Component2/>
 
    </div>
  )
}

export default Component1