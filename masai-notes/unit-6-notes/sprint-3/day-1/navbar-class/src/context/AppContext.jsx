import { createContext } from "react";

const AppContext=createContext();

export const AppContextProvider=({children})=>{
    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}