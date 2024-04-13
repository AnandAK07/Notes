import React from 'react'
import { useSelector } from 'react-redux'
import {store} from '../Redux/store'

const Navbar = () => {
  const {todos}=useSelector((store)=>store.reducer)

  const completed=todos.filter((el)=>el.status==true);
  const notCompleted=todos.filter((el)=>el.status==false);

  return (
    <div>
        <button>Total:-{todos?.length}</button>
        <button>Completed:-{completed?.length}</button>
        <button>Not Completed:-{notCompleted?.length}</button>
    </div>
  )
}

export default Navbar