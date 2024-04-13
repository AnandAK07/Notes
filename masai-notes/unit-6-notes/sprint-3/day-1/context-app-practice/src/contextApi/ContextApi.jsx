import React, { createContext, useState } from 'react'

//Create 
export const ContextApi = createContext();


export const ContextApiProvider = ({ children }) => {
   const [name,setName]=useState("Anand")
    return (
        <ContextApi.Provider value={{name,setName}}>
            {children}
        </ContextApi.Provider>
    )
}

