import { useContext } from "react"
import { AppContext } from "./AppContext"

export const Component2 = () => {
  const value=useContext(AppContext);
  console.log(value)
  return (
    <div>Component2</div>
  )
}
