import {useContext} from 'react';
import {AuthContext} from './context/AuthContext'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const value=useContext(AuthContext)
  const {login,logOut,authState}=value;

  return (
    <div style={{width:"100vw",border:"1px solid green" ,alignItems:"center"}}>
      <Navbar/>
      <button style={{background:"green"}} onClick={()=>login()}>Login</button>
      <button style={{background:"red"}} onClick={()=>logOut()}>Log Out</button>
    </div>
  )
}

export default App
