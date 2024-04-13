import { createContext, useState } from "react";

//provider -it will make what ever your passing global state 

export const {AppConext}=createContext();

//2.A
export const AppConextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false)
    return <AppConext.Provider>{children}</AppConext.Provider>
}


