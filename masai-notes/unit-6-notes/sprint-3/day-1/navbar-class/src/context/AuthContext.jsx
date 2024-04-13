import { createContext, useState } from "react";


export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [authState,setAuthState]=useState(false)

    const login=()=>{
        setAuthState(true)
    }
    const logOut=()=>{
        setAuthState(false)
    }
    return <AuthContext.Provider value={{authState,logOut,login}}>
        {children}
    </AuthContext.Provider>
}