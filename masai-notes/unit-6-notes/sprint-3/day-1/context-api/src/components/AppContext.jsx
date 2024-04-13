import {createContext} from 'react';

//CPPC
// C-Creation
export const AppContext=createContext();

// P-Provide the Context 2-A
export const AppContextProvider=({children})=>{
    
    const name='Anand'
    const age='25'
    return <AppContext.Provider value={{name,age}}>{children}</AppContext.Provider>
}
