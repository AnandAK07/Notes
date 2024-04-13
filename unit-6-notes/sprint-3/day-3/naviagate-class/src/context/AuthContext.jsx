import React, { useState } from 'react'
import {createContext} from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
  const [authdetails,setAuthDetails]=useState({
    authState:false,
    token:null
  })
  
  const loginIn=(token)=>{
    setAuthDetails({authState:true,token:token})
  }
  const logOut=()=>{
    setAuthDetails({authState:false,token:null})
  }
  return (
    <AuthContext.Provider value={{authdetails,loginIn,logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider