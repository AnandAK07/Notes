import { createContext } from "react";

//1.create context
export const AppContext=createContext();

//2A.we are going to custom context ||provider 
export const AppContextProvider=(children)=>{
    return <AppContext.Provider value="pt web 13">{children}</AppContext.Provider>
}